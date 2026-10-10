const crypto=require("crypto");

module.exports=function attachContestRoutes(app){
  const rooms=new Map();
  const ROOM_TTL=3*60*60*1000;
  const codeChars="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

  function id(bytes=10){return crypto.randomBytes(bytes).toString("hex")}
  function makeCode(){
    for(let tries=0;tries<40;tries++){
      let c="";for(let i=0;i<6;i++)c+=codeChars[crypto.randomInt(0,codeChars.length)];
      if(!rooms.has(c))return c;
    }
    return crypto.randomBytes(4).toString("hex").slice(0,6).toUpperCase();
  }
  function clean(){
    const now=Date.now();
    for(const [code,room] of rooms){if(now-room.createdAt>ROOM_TTL)rooms.delete(code)}
  }
  setInterval(clean,10*60*1000).unref?.();

  function getRoom(code){clean();return rooms.get(String(code||"").trim().toUpperCase())}
  function playerList(room){
    return [...room.players.values()]
      .map(p=>({id:p.id,name:p.name,score:p.score,correct:p.correct,streak:p.streak,isHost:p.isHost,answered:p.answers.size}))
      .sort((a,b)=>b.score-a.score||b.correct-a.correct||a.name.localeCompare(b.name));
  }
  function phase(room,now=Date.now()){
    if(!room.startAt)return {name:"lobby",index:-1};
    if(now<room.startAt)return {name:"countdown",index:-1,ms:room.startAt-now};
    const elapsed=now-room.startAt;
    const index=Math.floor(elapsed/room.questionMs);
    if(index>=room.questions.length)return {name:"finished",index:room.questions.length};
    const qStart=room.startAt+index*room.questionMs;
    return {name:"question",index,msLeft:Math.max(0,qStart+room.questionMs-now)};
  }
  function publicRoom(room){
    const now=Date.now();
    return {
      code:room.code,
      title:room.title,
      quizKey:room.quizKey,
      createdAt:room.createdAt,
      startAt:room.startAt,
      questionMs:room.questionMs,
      now,
      phase:phase(room,now),
      questions:room.questions.map(q=>({id:q.id,q:q.q,o:q.o})),
      players:playerList(room)
    };
  }
  function validQuestion(q){
    return q&&typeof q.q==="string"&&q.q.length>3&&Array.isArray(q.o)&&q.o.length>=2&&q.o.length<=8&&Number.isInteger(q.a)&&q.a>=0&&q.a<q.o.length;
  }

  app.post("/api/contest/rooms",(req,res)=>{
    const body=req.body||{};
    const hostName=String(body.hostName||"").trim().slice(0,24);
    const questions=Array.isArray(body.questions)?body.questions.slice(0,30):[];
    if(!hostName)return res.status(400).json({error:"Enter a host name."});
    if(questions.length<3||!questions.every(validQuestion))return res.status(400).json({error:"Contest needs at least 3 valid questions."});
    const code=makeCode();
    const hostId=id();
    const room={
      code,
      title:String(body.title||"Group Study Contest").slice(0,80),
      quizKey:String(body.quizKey||"mixed").slice(0,40),
      questionMs:Math.min(45000,Math.max(10000,Number(body.questionMs)||20000)),
      createdAt:Date.now(),
      startAt:null,
      questions:questions.map((q,i)=>({id:String(q.id||`q${i+1}`),q:String(q.q).slice(0,1000),o:q.o.map(x=>String(x).slice(0,500)),a:q.a,e:String(q.e||"").slice(0,1200)})),
      players:new Map()
    };
    room.players.set(hostId,{id:hostId,name:hostName,score:0,correct:0,streak:0,isHost:true,answers:new Map(),joinedAt:Date.now()});
    rooms.set(code,room);
    res.json({code,playerId:hostId,room:publicRoom(room)});
  });

  app.post("/api/contest/rooms/:code/join",(req,res)=>{
    const room=getRoom(req.params.code);
    if(!room)return res.status(404).json({error:"Room not found or expired."});
    if(room.startAt)return res.status(409).json({error:"That contest already started."});
    const name=String(req.body?.name||"").trim().slice(0,24);
    if(!name)return res.status(400).json({error:"Enter your name."});
    if([...room.players.values()].some(p=>p.name.toLowerCase()===name.toLowerCase()))return res.status(409).json({error:"That name is already in the room."});
    if(room.players.size>=30)return res.status(409).json({error:"Room is full."});
    const playerId=id();
    room.players.set(playerId,{id:playerId,name,score:0,correct:0,streak:0,isHost:false,answers:new Map(),joinedAt:Date.now()});
    res.json({playerId,room:publicRoom(room)});
  });

  app.get("/api/contest/rooms/:code",(req,res)=>{
    const room=getRoom(req.params.code);
    if(!room)return res.status(404).json({error:"Room not found or expired."});
    res.json({room:publicRoom(room)});
  });

  app.post("/api/contest/rooms/:code/start",(req,res)=>{
    const room=getRoom(req.params.code);
    if(!room)return res.status(404).json({error:"Room not found or expired."});
    const player=room.players.get(String(req.body?.playerId||""));
    if(!player?.isHost)return res.status(403).json({error:"Only the host can start."});
    if(!room.startAt)room.startAt=Date.now()+3500;
    res.json({room:publicRoom(room)});
  });

  app.post("/api/contest/rooms/:code/answer",(req,res)=>{
    const room=getRoom(req.params.code);
    if(!room)return res.status(404).json({error:"Room not found or expired."});
    const player=room.players.get(String(req.body?.playerId||""));
    if(!player)return res.status(403).json({error:"Player session not found."});
    const index=Number(req.body?.index), option=Number(req.body?.option), now=Date.now();
    if(!Number.isInteger(index)||!Number.isInteger(option)||!room.questions[index])return res.status(400).json({error:"Invalid answer."});
    if(player.answers.has(index))return res.status(409).json({error:"Answer already submitted."});
    if(!room.startAt)return res.status(409).json({error:"Contest has not started."});
    const qStart=room.startAt+index*room.questionMs;
    const qEnd=qStart+room.questionMs;
    if(now<qStart-500||now>qEnd+1200)return res.status(409).json({error:"That question is closed."});
    const q=room.questions[index];
    const correct=option===q.a;
    let points=0;
    if(correct){
      player.correct++;
      player.streak++;
      const speed=Math.max(0,1-(now-qStart)/room.questionMs);
      const speedBonus=Math.round(500*speed);
      const streakBonus=Math.min(250,Math.max(0,(player.streak-1)*50));
      points=1000+speedBonus+streakBonus;
      player.score+=points;
    }else player.streak=0;
    player.answers.set(index,{option,correct,points,at:now});
    res.json({correct,points,correctOption:q.a,explanation:q.e||"",score:player.score,streak:player.streak});
  });

  app.get("/api/contest/rooms/:code/me/:playerId",(req,res)=>{
    const room=getRoom(req.params.code);
    if(!room)return res.status(404).json({error:"Room not found or expired."});
    const p=room.players.get(req.params.playerId);
    if(!p)return res.status(404).json({error:"Player not found."});
    res.json({player:{id:p.id,name:p.name,score:p.score,correct:p.correct,streak:p.streak,answers:[...p.answers.entries()]}});
  });
};
