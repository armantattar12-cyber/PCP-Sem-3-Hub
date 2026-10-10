(()=>{
const API="https://pcp-sem-3-tutor.onrender.com";
const $=s=>document.querySelector(s);
const esc=s=>String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]));
const letters=["A","B","C","D","E","F"];
let BANKS={};
let socket=null;
let room=null;
let playerId=localStorage.getItem("pcpLivePlayerId.v1")||("p"+Math.random().toString(36).slice(2)+Date.now().toString(36));
localStorage.setItem("pcpLivePlayerId.v1",playerId);
let myName=localStorage.getItem("pcpLiveName.v1")||"";
let currentQuestion=null;
let selectedChoice=null;
let currentIndex=-1;
let timerRAF=0;
let timerDeadline=0;
let timerDuration=0;
let lastLeaderboard=[];
let currentCode="";
let isHost=false;
let locked=false;

function show(id){["homeScreen","lobbyScreen","gameScreen","finishScreen"].forEach(x=>$("#"+x)?.classList.add("hidden"));$("#"+id)?.classList.remove("hidden")}
function toast(msg){const el=$("#errorToast");el.textContent=msg;el.classList.remove("hidden");clearTimeout(toast.t);toast.t=setTimeout(()=>el.classList.add("hidden"),4200)}
function setConnect(text,cls=""){const el=$("#connectStatus");if(!el)return;el.textContent=text;el.className="live-status "+cls}
function saveName(name){myName=name.trim().slice(0,28);localStorage.setItem("pcpLiveName.v1",myName);$("#hostName").value=myName;$("#joinName").value=myName}
function saveSession(){localStorage.setItem("pcpLiveSession.v1",JSON.stringify({code:currentCode,playerId,isHost,name:myName}))}
function clearSession(){localStorage.removeItem("pcpLiveSession.v1")}
function getSession(){try{return JSON.parse(localStorage.getItem("pcpLiveSession.v1")||"null")}catch{return null}}

async function loadBanks(){
  try{
    const text=await fetch("test.js",{cache:"no-store"}).then(r=>{if(!r.ok)throw new Error("bank");return r.text()});
    const start=text.indexOf("const BANKS=");
    const end=text.indexOf("const QUIZ_TOPIC_IDS=");
    if(start<0||end<0) throw new Error("bank");
    const source=text.slice(start+"const BANKS=".length,end).trim().replace(/;\s*$/," ");
    BANKS=Function('"use strict";return ('+source+')')();
    if(BANKS["phrm-sga"]&&BANKS["phrm-mca"]){
      BANKS["phrm-mixed"]={classCode:"PHRM 208",week:"Week 1",title:"Week 1 Mixed Review",source:"PHRM Week 1",questions:[...BANKS["phrm-sga"].questions,...BANKS["phrm-mca"].questions]};
    }
    renderBankOptions();
  }catch(e){
    $("#bankSelect").innerHTML='<option value="">Quiz banks failed to load</option>';
    toast("Could not load the Sem 3 quiz banks. Refresh and try again.");
  }
}
function renderBankOptions(){
  const preferred=["pcth-w1","pcth-w2","phrm-sga","phrm-mca","phrm-mixed","phrm-w2"];
  const opts=preferred.filter(k=>BANKS[k]).map(k=>{
    const b=BANKS[k];return `<option value="${esc(k)}">${esc(b.classCode)} • ${esc(b.week)} — ${esc(b.title)} (${b.questions.length}Q)</option>`
  });
  $("#bankSelect").innerHTML=opts.join("");
}
function connect(){
  if(typeof io!=="function"){setConnect("Live server client failed to load. Refresh in a moment.","bad");return}
  socket=io(API,{transports:["websocket","polling"],reconnection:true,reconnectionAttempts:Infinity,reconnectionDelay:800,reconnectionDelayMax:4000,timeout:20000});
  socket.on("connect",()=>{
    setConnect("Live server connected. Ready to host or join.","good");
    const s=getSession();
    if(s?.code&&s?.playerId&&s?.name){
      socket.emit("live:join",{code:s.code,playerId:s.playerId,name:s.name},resp=>{
        if(resp?.ok){currentCode=resp.code;playerId=resp.playerId;myName=s.name;isHost=resp.room?.hostPlayerId===playerId;room=resp.room;saveSession();renderLobby(resp.room);if(resp.room?.status==="lobby")show("lobbyScreen")}
        else clearSession();
      });
    }
  });
  socket.on("connect_error",()=>setConnect("Live server is waking up or reconnecting…","bad"));
  socket.on("disconnect",()=>setConnect("Connection dropped — reconnecting automatically…","bad"));
  socket.on("live:lobby",data=>{room=data;isHost=data.hostPlayerId===playerId;if(data.status==="lobby"){show("lobbyScreen");renderLobby(data)}});
  socket.on("live:host-changed",data=>{isHost=data.hostPlayerId===playerId;toast(isHost?"You are the host now.":`${data.name} is now the host.`);if(room){room.hostPlayerId=data.hostPlayerId;renderLobby(room)}$("#againBtn")?.classList.toggle("hidden",!isHost)});
  socket.on("live:game-start",data=>{show("gameScreen");$("#gameTitle").textContent=data.title||"PCP LIVE";$("#myScore").textContent="0";$("#betweenSection").classList.add("hidden");$("#explanation").classList.add("hidden");});
  socket.on("live:question",renderQuestion);
  socket.on("live:answer-count",data=>{$("#answerCount").textContent=`${data.answered} / ${data.total} answered`});
  socket.on("live:reveal",renderReveal);
  socket.on("live:finish",renderFinish);
  socket.on("live:closed",data=>{toast(data?.message||"Room closed.");clearSession();currentCode="";show("homeScreen")});
}
function renderLobby(data){
  currentCode=data.code;room=data;isHost=data.hostPlayerId===playerId;saveSession();
  $("#roomCode").textContent=data.code;$("#roomTitle").textContent=`${data.title} • ${data.questionCount} questions • ${data.seconds}s each`;
  const connected=(data.players||[]).filter(p=>p.connected).length;
  $("#lobbyMeta").textContent=`${connected} player${connected===1?"":"s"} connected • ${data.questionCount} questions • ${data.seconds} sec each`;
  $("#playerList").innerHTML=(data.players||[]).map(p=>`<div class="player-row"><div class="player-id"><span class="player-dot ${p.connected?"":"off"}"></span><span>${esc(p.name)}</span>${p.playerId===data.hostPlayerId?'<span class="host-tag">HOST</span>':""}${p.playerId===playerId?'<span class="host-tag">YOU</span>':""}</div><span class="score">${p.score||0} XP</span></div>`).join("");
  $("#startBtn").classList.toggle("hidden",!isHost);$("#hostWait").classList.toggle("hidden",isHost);
}
function createRoom(){
  if(!socket?.connected)return toast("Live server is not connected yet. Give it a moment.");
  const name=$("#hostName").value.trim();if(!name)return toast("Enter your name first.");
  const key=$("#bankSelect").value,b=BANKS[key];if(!b)return toast("Choose a quiz bank.");
  saveName(name);
  const count=$("#countSelect").value;
  socket.emit("live:create",{name,playerId,bankKey:key,title:`${b.classCode} • ${b.week} — ${b.title}`,questions:b.questions,questionCount:count,seconds:+$("#timeSelect").value},resp=>{
    if(!resp?.ok)return toast(resp?.error||"Could not create room.");
    currentCode=resp.code;playerId=resp.playerId;localStorage.setItem("pcpLivePlayerId.v1",playerId);isHost=true;room=resp.room;saveSession();renderLobby(resp.room);show("lobbyScreen")
  });
}
function joinRoom(){
  if(!socket?.connected)return toast("Live server is not connected yet. Give it a moment.");
  const name=$("#joinName").value.trim(),code=$("#joinCode").value.trim().toUpperCase();
  if(!name)return toast("Enter your name first.");if(code.length!==6)return toast("Enter the 6-character room code.");
  saveName(name);
  socket.emit("live:join",{name,code,playerId},resp=>{
    if(!resp?.ok)return toast(resp?.error||"Could not join room.");
    currentCode=resp.code;playerId=resp.playerId;localStorage.setItem("pcpLivePlayerId.v1",playerId);isHost=resp.room?.hostPlayerId===playerId;room=resp.room;saveSession();renderLobby(resp.room);show(resp.room?.status==="lobby"?"lobbyScreen":"gameScreen")
  });
}
function startGame(){socket.emit("live:start",{code:currentCode,playerId},resp=>{if(!resp?.ok)toast(resp?.error||"Could not start round.")})}
function leaveRoom(){if(currentCode&&socket?.connected)socket.emit("live:leave",{code:currentCode,playerId});clearSession();currentCode="";room=null;show("homeScreen")}
function shareRoom(){const url=`${location.origin}${location.pathname.replace(/[^/]+$/,"")}live.html?room=${encodeURIComponent(currentCode)}`;const text=`Join my PCP Live study game. Room ${currentCode}`;if(navigator.share)navigator.share({title:"PCP Live",text,url}).catch(()=>{});else navigator.clipboard?.writeText(`${text}\n${url}`).then(()=>toast("Invite copied."))}
function copyCode(){navigator.clipboard?.writeText(currentCode).then(()=>toast("Room code copied."))}
function renderQuestion(data){
  show("gameScreen");currentQuestion=data.question;currentIndex=data.index;selectedChoice=null;locked=false;lastLeaderboard=data.leaderboard||lastLeaderboard;
  $("#betweenSection").classList.add("hidden");$("#explanation").classList.add("hidden");$("#explanation").textContent="";
  $("#gameProgress").textContent=`Question ${data.index+1} / ${data.total}`;$("#questionLabel").textContent=`QUESTION ${data.index+1}`;$("#questionText").textContent=data.question.q;$("#lockState").textContent="Pick one answer.";$("#answerCount").textContent="0 answered";
  updateMyScore(data.leaderboard||[]);
  $("#answerGrid").innerHTML=data.question.o.map((o,i)=>`<button class="answer-btn" data-choice="${i}"><span class="answer-letter">${letters[i]}</span>${esc(o)}</button>`).join("");
  [...document.querySelectorAll(".answer-btn")].forEach(btn=>btn.onclick=()=>submitAnswer(+btn.dataset.choice));
  startTimer(data.deadline,data.seconds);
}
function submitAnswer(choice){
  if(locked)return;selectedChoice=choice;locked=true;
  [...document.querySelectorAll(".answer-btn")].forEach((b,i)=>{b.disabled=true;b.classList.toggle("selected",i===choice)});$("#lockState").textContent="Answer locked — waiting for the room.";
  socket.emit("live:answer",{code:currentCode,playerId,index:currentIndex,choice},resp=>{if(!resp?.ok){locked=false;toast(resp?.error||"Answer could not be submitted.")}})
}
function startTimer(deadline,seconds){cancelAnimationFrame(timerRAF);timerDeadline=deadline;timerDuration=seconds*1000;const fill=$("#timerFill"),txt=$("#timeText");function tick(){const left=Math.max(0,timerDeadline-Date.now()),pct=Math.max(0,Math.min(100,left/timerDuration*100));fill.style.width=pct+"%";txt.textContent=(left/1000).toFixed(left>5000?0:1)+"s";if(left>0)timerRAF=requestAnimationFrame(tick)}tick()}
function renderReveal(data){
  cancelAnimationFrame(timerRAF);$("#timerFill").style.width="0%";lastLeaderboard=data.results||[];
  const resp=(data.responses||[]).find(x=>x.playerId===playerId);const correct=selectedChoice===data.answer;
  [...document.querySelectorAll(".answer-btn")].forEach((b,i)=>{b.disabled=true;b.classList.remove("selected");if(i===data.answer)b.classList.add("correct");else if(i===selectedChoice&&!correct)b.classList.add("wrong")});
  $("#lockState").textContent=resp?(resp.correct?`Correct +${resp.points} XP`:"Incorrect — 0 XP"):(selectedChoice==null?"No answer locked.":(correct?"Correct":"Incorrect"));
  const ex=$("#explanation");ex.innerHTML=`<b>${correct?"Correct.":"Answer: "+letters[data.answer]+"."}</b> ${esc(data.explanation||"")}`;ex.classList.remove("hidden");
  updateMyScore(data.results||[]);$("#betweenSection").classList.remove("hidden");renderLeaderboard($("#betweenLeaderboard"),data.results||[]);
}
function updateMyScore(board){const me=(board||[]).find(p=>p.playerId===playerId);if(me)$("#myScore").textContent=me.score||0}
function renderLeaderboard(el,board){el.innerHTML=(board||[]).map((p,i)=>`<div class="leader-row ${p.playerId===playerId?"me":""}"><div class="place ${i<3?"p"+(i+1):""}">#${i+1}</div><div><div class="leader-name">${esc(p.name)} ${p.playerId===playerId?"• YOU":""}</div><div class="leader-small">${p.correct||0} correct${p.connected===false?" • disconnected":""}</div></div><div class="score">${p.score||0} XP</div></div>`).join("")}
function renderFinish(data){
  show("finishScreen");lastLeaderboard=data.leaderboard||[];clearSession();
  const me=lastLeaderboard.findIndex(p=>p.playerId===playerId);$("#finishText").textContent=me>=0?`You finished #${me+1} with ${lastLeaderboard[me].score} XP.`:"Round complete.";
  const top=lastLeaderboard.slice(0,3),order=top.length>=3?[top[1],top[0],top[2]]:top;$("#podium").innerHTML=order.map(p=>{const real=lastLeaderboard.indexOf(p),emoji=real===0?"🥇":real===1?"🥈":"🥉";return `<div class="podium-card ${real===0?"first":""}"><div class="podium-place">${emoji}</div><div class="podium-name">${esc(p.name)}</div><div class="podium-score">${p.score} XP</div></div>`}).join("");
  renderLeaderboard($("#finalLeaderboard"),lastLeaderboard);$("#againBtn").classList.toggle("hidden",!isHost);currentCode=data.code||currentCode;saveSession();
}
function round2(){socket.emit("live:start",{code:currentCode,playerId},resp=>{if(!resp?.ok)toast(resp?.error||"Could not start another round.")})}

$("#createBtn").onclick=createRoom;$("#joinBtn").onclick=joinRoom;$("#startBtn").onclick=startGame;$("#leaveBtn").onclick=leaveRoom;$("#shareBtn").onclick=shareRoom;$("#copyBtn").onclick=copyCode;$("#againBtn").onclick=round2;
$("#joinCode").addEventListener("input",e=>e.target.value=e.target.value.toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,6));
$("#joinCode").addEventListener("keydown",e=>{if(e.key==="Enter")joinRoom()});
$("#hostName").value=myName;$("#joinName").value=myName;
const inviteCode=new URLSearchParams(location.search).get("room");if(inviteCode)$("#joinCode").value=inviteCode.toUpperCase().slice(0,6);
loadBanks();connect();
})();
