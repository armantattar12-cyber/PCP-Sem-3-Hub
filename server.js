const express=require("express");
const http=require("http");
const crypto=require("crypto");
const {Server}=require("socket.io");

const app=express();
const server=http.createServer(app);

app.use(express.json({limit:"80kb"}));

const allowed=new Set([
  "https://pcp-sem-3-hub.onrender.com",
  "http://localhost:3000",
  "http://127.0.0.1:3000"
]);

app.use((req,res,next)=>{
  const origin=req.headers.origin;
  if(origin&&allowed.has(origin)) res.setHeader("Access-Control-Allow-Origin",origin);
  res.setHeader("Vary","Origin");
  res.setHeader("Access-Control-Allow-Headers","Content-Type");
  res.setHeader("Access-Control-Allow-Methods","POST,OPTIONS,GET");
  if(req.method==="OPTIONS") return res.sendStatus(204);
  next();
});

const io=new Server(server,{
  cors:{
    origin:(origin,cb)=>{
      if(!origin||allowed.has(origin)) return cb(null,true);
      cb(new Error("Origin not allowed"));
    },
    methods:["GET","POST"]
  }
});

const modelName=()=>process.env.GEMINI_MODEL||"gemini-3.5-flash-lite";

app.get("/",(_,res)=>res.json({
  ok:true,
  service:"Arman",
  provider:"Gemini",
  liveStudy:true
}));

app.get("/health",(_,res)=>res.json({
  ok:true,
  configured:Boolean(process.env.GEMINI_API_KEY),
  provider:"Gemini",
  model:modelName(),
  liveRooms:liveRooms.size
}));

app.post("/api/chat",async(req,res)=>{
  console.log("Arman chat request received | origin:",req.headers.origin||"none");

  try{
    if(!process.env.GEMINI_API_KEY){
      return res.status(503).json({
        error:"Arman is ready, but the free Gemini API key still needs to be added in Render as GEMINI_API_KEY."
      });
    }

    const {message,pageTitle,pageContext,history=[],studyState=null}=req.body||{};
    if(!message||typeof message!=="string"){
      return res.status(400).json({error:"Ask a question first."});
    }

    const instructions=`You are Arman, an embedded study tutor for a Canadian Primary Care Paramedic Semester 3 study website.
Your job is to help the student learn actively, accurately, and efficiently.

STYLE:
- Be concise, clear, direct, and teach mechanism before memorization.
- Use headings or bullets only when they improve learning.
- When the student asks to be quizzed, ask ONE question at a time and do not reveal the answer until the student responds.
- When comparing ECG rhythms, identify the features that actually distinguish them.
- For clinical examples, clearly distinguish ECG electrical activity from pulse and perfusion findings.
- Encourage retrieval practice rather than passive rereading.

SITE GUIDE:
The site currently has these usable study routes:
- PCTH 308 Week 1: Quizlet-style Learn flashcards + full Introduction to ECG review + built-in quiz.
- PCTH 308 Week 2: Quizlet-style Learn flashcards + full sinus/atrial/junctional/AV-block review + built-in quiz + separate 89-question mastery exam.
- PHRM 208 Week 1 SGA: Quizlet-style Learn flashcards + directive review + quiz.
- PHRM 208 Week 1 Medical Cardiac Arrest: Quizlet-style Learn flashcards + directive review + quiz.
- PHRM 208 Week 1 also has a mixed quiz.
- PHRM 208 Week 2: trauma priorities, lethal diamond, CRASH-2/TXA, Traumatic Hemorrhage Medical Directive, Traumatic Cardiac Arrest, Trauma TOR, and ROSC. It has Learn flashcards, a 44-question quiz bank, and targeted topic drills.
- PCLB 308 and RESC 108 do not yet have full quiz banks loaded. Never pretend they do.

When a student says they do not know what to do, act as a guide. Give them a short sequence based only on material that exists. For a new topic, prefer:
1) Learn Center flashcards until the student can recall the core concepts,
2) use the full course review when a concept needs deeper explanation,
3) active recall with you,
4) a Standard 10 quiz,
5) review missed questions,
6) use a larger mastery quiz when one exists.
For PCTH Week 2 specifically, the ideal path is Learn flashcards → full Week 2 review for weak concepts → active rhythm discrimination → Standard 10 → missed-question retest → 89-question mastery exam.
For PHRM Week 2 specifically, keep the lecture structure intact: trauma physiology/priorities → TXA/hemostasis → Traumatic Hemorrhage directive → Traumatic Cardiac Arrest/TOR → ROSC. Directive values and criteria must come from the page context; do not invent missing wording.
Do not print raw site URLs; the website UI will provide navigation buttons.

PROGRESS-AWARE CONTROL LAYER:
The browser may send STUDENT PROGRESS below. It comes only from this browser's saved Learn and Test history, so treat it as useful but incomplete.
- When asked "what should I study?", "what am I weak on?", or similar, prioritize repeated misses and cards marked Still learning.
- Prefer the weakest specific topic before broad full-deck review.
- If there is not enough progress data, say that clearly and use the current page/recent material instead of inventing weaknesses.
- Do not claim to know performance from another browser/device or work that is not represented in STUDENT PROGRESS.
- Keep recommendations practical and launchable: focused Learn → targeted quiz → one-at-a-time discrimination/teach-back.
- For timed study blocks, respect the user's available minutes and avoid assigning more work than fits.

SOURCE PRIORITY:
1) Treat PAGE CONTEXT below as the course-material context for the page the student is currently studying.
2) For exact Ontario BLS PCS / ALS PCS / medical-directive criteria, medication doses, contraindications, permissions, or exact wording: never invent details. If the exact wording is not in PAGE CONTEXT, tell the student to verify the current official standard or Companion Document.
3) Correct clear conceptual errors instead of repeating them blindly, and explain the correction briefly.

SAFETY:
This is a study tutor, not online medical control and not a substitute for current protocols or real-time patient-care direction.
Do not claim an ECG alone proves mechanical cardiac output or a pulse.

CURRENT PAGE: ${String(pageTitle||"").slice(0,300)}

STUDENT PROGRESS (browser-local; may be incomplete):
${JSON.stringify(studyState||{}).slice(0,7000)}

PAGE CONTEXT:
${String(pageContext||"").slice(0,24000)}`;

    const hist=Array.isArray(history)?history.slice(-10):[];
    const normalized=hist
      .filter(x=>x&&typeof x.text==="string"&&(x.role==="user"||x.role==="assistant"))
      .map(x=>({role:x.role==="assistant"?"model":"user",parts:[{text:String(x.text).slice(0,2500)}]}));

    if(
      normalized.length &&
      normalized[normalized.length-1].role==="user" &&
      normalized[normalized.length-1].parts[0].text.trim()===message.trim()
    ){
      normalized.pop();
    }

    const contents=[...normalized,{role:"user",parts:[{text:message.slice(0,5000)}]}];

    const url="https://generativelanguage.googleapis.com/v1beta/models/"+encodeURIComponent(modelName())+":generateContent";
    const response=await fetch(url,{
      method:"POST",
      headers:{
        "x-goog-api-key":process.env.GEMINI_API_KEY,
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        system_instruction:{parts:[{text:instructions}]},
        contents,
        generationConfig:{
          maxOutputTokens:900,
          temperature:0.35
        }
      })
    });

    const j=await response.json().catch(()=>({}));

    if(!response.ok){
      const code=j?.error?.status||"";
      const messageText=String(j?.error?.message||"unknown").slice(0,500);
      console.error("Gemini error",response.status,code,messageText);

      if(response.status===429){
        return res.status(429).json({
          error:"Arman hit the Gemini free-tier rate limit. Wait a little and try again."
        });
      }
      if(response.status===401||response.status===403){
        return res.status(502).json({
          error:"Arman reached Gemini, but the Gemini API key was rejected. Create a fresh key in Google AI Studio and update GEMINI_API_KEY in Render."
        });
      }
      if(response.status===404||/model/i.test(messageText)){
        return res.status(502).json({
          error:"Arman is connected to Gemini, but the configured model is unavailable. The model setting needs to be updated."
        });
      }
      return res.status(502).json({
        error:"Arman reached Gemini, but Gemini returned an API error. Try again in a moment."
      });
    }

    const answer=(j?.candidates?.[0]?.content?.parts||[])
      .map(p=>typeof p?.text==="string"?p.text:"")
      .join("\n")
      .trim();

    if(!answer){
      return res.status(502).json({
        error:"Gemini returned no text for that request. Try asking it a different way."
      });
    }

    res.json({answer,provider:"Gemini",model:modelName()});
  }catch(e){
    console.error("Arman server error",e);
    res.status(500).json({error:"Arman hit a temporary server error. Try again in a moment."});
  }
});

// ---------------- PCP LIVE: real-time group study contests ----------------
const liveRooms=new Map();
const ROOM_ALPHABET="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const ROOM_TTL_MS=2*60*60*1000;
const clamp=(n,min,max)=>Math.max(min,Math.min(max,Number(n)||0));
const clean=(v,max=80)=>String(v||"").replace(/[<>]/g,"").trim().slice(0,max);
const emitAck=(ack,payload)=>{if(typeof ack==="function") ack(payload)};
const makePlayerId=()=>crypto.randomUUID().replace(/-/g,"");
function makeCode(){
  for(let tries=0;tries<50;tries++){
    let code="";
    for(let i=0;i<6;i++) code+=ROOM_ALPHABET[Math.floor(Math.random()*ROOM_ALPHABET.length)];
    if(!liveRooms.has(code)) return code;
  }
  return String(Date.now()).slice(-6);
}
function sanitizeQuestions(input){
  if(!Array.isArray(input)) return [];
  return input.slice(0,120).map((q,i)=>{
    const options=Array.isArray(q?.o)?q.o.slice(0,6).map(x=>clean(x,320)):[];
    const answer=Number(q?.a);
    if(!clean(q?.q,700)||options.length<2||!Number.isInteger(answer)||answer<0||answer>=options.length) return null;
    return {
      id:clean(q?.id,80)||`q${i+1}`,
      q:clean(q.q,700),
      o:options,
      a:answer,
      e:clean(q?.e,1200)
    };
  }).filter(Boolean);
}
function shuffled(items){
  const a=[...items];
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}
function connectedPlayers(room){
  return [...room.players.values()].filter(p=>p.connected);
}
function leaderboard(room){
  return [...room.players.values()]
    .map(p=>({playerId:p.playerId,name:p.name,score:p.score,connected:p.connected,correct:p.correctCount||0}))
    .sort((a,b)=>b.score-a.score||b.correct-a.correct||a.name.localeCompare(b.name));
}
function roomSummary(room){
  return {
    code:room.code,
    title:room.title,
    bankKey:room.bankKey,
    status:room.status,
    hostPlayerId:room.hostPlayerId,
    questionCount:room.questionCount,
    seconds:room.seconds,
    players:leaderboard(room),
    currentIndex:room.index,
    total:room.questions?.length||room.questionCount
  };
}
function emitLobby(room){
  room.updatedAt=Date.now();
  io.to(room.code).emit("live:lobby",roomSummary(room));
}
function clearRoomTimer(room){
  if(room.timer){clearTimeout(room.timer);room.timer=null;}
}
function currentQuestion(room){return room.questions?.[room.index]||null;}
function sendQuestion(room){
  clearRoomTimer(room);
  room.index+=1;
  if(room.index>=room.questions.length) return finishGame(room);
  const q=currentQuestion(room);
  room.phase="question";
  room.answers=new Map();
  room.questionStartedAt=Date.now();
  room.deadline=room.questionStartedAt+(room.seconds*1000);
  room.updatedAt=Date.now();
  io.to(room.code).emit("live:question",{
    index:room.index,
    total:room.questions.length,
    question:{id:q.id,q:q.q,o:q.o},
    seconds:room.seconds,
    deadline:room.deadline,
    leaderboard:leaderboard(room)
  });
  room.timer=setTimeout(()=>revealQuestion(room),room.seconds*1000+250);
}
function revealQuestion(room){
  if(!room||room.status!=="playing"||room.phase!=="question") return;
  clearRoomTimer(room);
  const q=currentQuestion(room);
  room.phase="results";
  const results=leaderboard(room);
  io.to(room.code).emit("live:reveal",{
    index:room.index,
    answer:q.a,
    explanation:q.e,
    results,
    responses:[...room.answers.entries()].map(([playerId,a])=>({playerId,...a})),
    nextInMs:4500
  });
  room.timer=setTimeout(()=>sendQuestion(room),4500);
}
function startGame(room){
  clearRoomTimer(room);
  room.status="playing";
  room.phase="starting";
  room.index=-1;
  room.questions=shuffled(room.sourceQuestions).slice(0,room.questionCount);
  room.players.forEach(p=>{p.score=0;p.correctCount=0;});
  room.updatedAt=Date.now();
  io.to(room.code).emit("live:game-start",{
    code:room.code,
    title:room.title,
    total:room.questions.length,
    seconds:room.seconds,
    players:leaderboard(room)
  });
  room.timer=setTimeout(()=>sendQuestion(room),1200);
}
function finishGame(room){
  clearRoomTimer(room);
  room.status="finished";
  room.phase="finished";
  room.updatedAt=Date.now();
  io.to(room.code).emit("live:finish",{
    code:room.code,
    title:room.title,
    leaderboard:leaderboard(room),
    total:room.questions.length
  });
}
function transferHostIfNeeded(room){
  const host=room.players.get(room.hostPlayerId);
  if(host?.connected) return;
  const replacement=connectedPlayers(room)[0];
  if(replacement){
    room.hostPlayerId=replacement.playerId;
    io.to(room.code).emit("live:host-changed",{hostPlayerId:room.hostPlayerId,name:replacement.name});
  }
}

io.on("connection",socket=>{
  socket.on("live:create",(payload={},ack)=>{
    const sourceQuestions=sanitizeQuestions(payload.questions);
    if(sourceQuestions.length<2) return emitAck(ack,{ok:false,error:"That quiz bank does not have enough usable questions."});
    const name=clean(payload.name,28)||"Medic";
    const playerId=/^[A-Za-z0-9_-]{6,80}$/.test(String(payload.playerId||""))?String(payload.playerId):makePlayerId();
    const code=makeCode();
    const requested=payload.questionCount==="full"?sourceQuestions.length:clamp(payload.questionCount,2,30);
    const room={
      code,
      title:clean(payload.title,120)||"PCP Live",
      bankKey:clean(payload.bankKey,80),
      hostPlayerId:playerId,
      sourceQuestions,
      questionCount:Math.min(requested||10,sourceQuestions.length),
      seconds:clamp(payload.seconds,8,60)||20,
      status:"lobby",
      phase:"lobby",
      players:new Map(),
      questions:[],
      answers:new Map(),
      index:-1,
      timer:null,
      createdAt:Date.now(),
      updatedAt:Date.now()
    };
    room.players.set(playerId,{playerId,name,socketId:socket.id,score:0,correctCount:0,connected:true});
    liveRooms.set(code,room);
    socket.join(code);
    socket.data.live={code,playerId};
    emitAck(ack,{ok:true,code,playerId,room:roomSummary(room)});
    emitLobby(room);
  });

  socket.on("live:join",(payload={},ack)=>{
    const code=clean(payload.code,8).toUpperCase();
    const room=liveRooms.get(code);
    if(!room) return emitAck(ack,{ok:false,error:"Room not found. Check the code and try again."});
    const requestedId=/^[A-Za-z0-9_-]{6,80}$/.test(String(payload.playerId||""))?String(payload.playerId):makePlayerId();
    let player=room.players.get(requestedId);
    if(!player&&room.status!=="lobby") return emitAck(ack,{ok:false,error:"That round already started. Join the next round."});
    const name=clean(payload.name,28)||player?.name||"Medic";
    if(!player){
      const sameName=[...room.players.values()].find(p=>p.name.toLowerCase()===name.toLowerCase()&&p.connected);
      if(sameName) return emitAck(ack,{ok:false,error:"That name is already in the room. Pick another one."});
      player={playerId:requestedId,name,socketId:socket.id,score:0,correctCount:0,connected:true};
      room.players.set(requestedId,player);
    }else{
      player.name=name;
      player.socketId=socket.id;
      player.connected=true;
    }
    socket.join(code);
    socket.data.live={code,playerId:requestedId};
    emitAck(ack,{ok:true,code,playerId:requestedId,room:roomSummary(room),phase:room.phase});
    if(room.status==="playing"&&room.phase==="question"){
      const q=currentQuestion(room);
      socket.emit("live:question",{
        index:room.index,total:room.questions.length,question:{id:q.id,q:q.q,o:q.o},seconds:room.seconds,deadline:room.deadline,leaderboard:leaderboard(room),resumed:true
      });
    }else if(room.status==="finished"){
      socket.emit("live:finish",{code:room.code,title:room.title,leaderboard:leaderboard(room),total:room.questions.length});
    }
    emitLobby(room);
  });

  socket.on("live:start",({code,playerId}={},ack)=>{
    const room=liveRooms.get(clean(code,8).toUpperCase());
    if(!room) return emitAck(ack,{ok:false,error:"Room not found."});
    if(room.hostPlayerId!==playerId) return emitAck(ack,{ok:false,error:"Only the host can start the round."});
    if(room.status!=="lobby"&&room.status!=="finished") return emitAck(ack,{ok:false,error:"A round is already running."});
    if(connectedPlayers(room).length<1) return emitAck(ack,{ok:false,error:"No players are connected."});
    emitAck(ack,{ok:true});
    startGame(room);
  });

  socket.on("live:answer",(payload={},ack)=>{
    const room=liveRooms.get(clean(payload.code,8).toUpperCase());
    if(!room||room.status!=="playing"||room.phase!=="question") return emitAck(ack,{ok:false,error:"That question is closed."});
    if(Number(payload.index)!==room.index) return emitAck(ack,{ok:false,error:"That question is no longer active."});
    const player=room.players.get(String(payload.playerId||""));
    if(!player||!player.connected) return emitAck(ack,{ok:false,error:"Rejoin the room first."});
    if(room.answers.has(player.playerId)) return emitAck(ack,{ok:false,error:"Answer already locked."});
    const q=currentQuestion(room);
    const choice=Number(payload.choice);
    if(!Number.isInteger(choice)||choice<0||choice>=q.o.length) return emitAck(ack,{ok:false,error:"Choose an answer first."});
    const now=Date.now();
    const elapsed=Math.max(0,now-room.questionStartedAt);
    const correct=choice===q.a;
    const speed=Math.max(0,1-(elapsed/(room.seconds*1000)));
    const points=correct?500+Math.round(500*speed):0;
    if(correct){player.score+=points;player.correctCount=(player.correctCount||0)+1;}
    room.answers.set(player.playerId,{choice,correct,points,timeMs:elapsed});
    emitAck(ack,{ok:true,locked:true,pointsPending:correct});
    io.to(room.code).emit("live:answer-count",{answered:room.answers.size,total:connectedPlayers(room).length});
    if(room.answers.size>=connectedPlayers(room).length){
      clearRoomTimer(room);
      room.timer=setTimeout(()=>revealQuestion(room),450);
    }
  });

  socket.on("live:leave",({code,playerId}={})=>{
    const room=liveRooms.get(clean(code,8).toUpperCase());
    if(!room) return;
    const p=room.players.get(String(playerId||""));
    if(p){p.connected=false;p.socketId=null;}
    socket.leave(room.code);
    transferHostIfNeeded(room);
    emitLobby(room);
  });

  socket.on("disconnect",()=>{
    const info=socket.data.live;
    if(!info) return;
    const room=liveRooms.get(info.code);
    if(!room) return;
    const p=room.players.get(info.playerId);
    if(p&&p.socketId===socket.id){p.connected=false;p.socketId=null;}
    transferHostIfNeeded(room);
    emitLobby(room);
  });
});

setInterval(()=>{
  const now=Date.now();
  for(const [code,room] of liveRooms){
    if(now-room.updatedAt>ROOM_TTL_MS){
      clearRoomTimer(room);
      io.to(code).emit("live:closed",{message:"This study room expired after being inactive."});
      liveRooms.delete(code);
    }
  }
},10*60*1000).unref();

const port=process.env.PORT||10000;
server.listen(port,()=>{
  console.log(
    "Arman listening on",
    port,
    "| Gemini key configured:",
    Boolean(process.env.GEMINI_API_KEY),
    "| model:",
    modelName(),
    "| PCP Live ready"
  );
});
