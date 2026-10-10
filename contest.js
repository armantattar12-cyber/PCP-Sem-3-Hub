(()=>{
  const API="https://pcp-sem-3-tutor.onrender.com";
  const $=s=>document.querySelector(s);
  const state={banks:null,code:"",playerId:"",room:null,lastIndex:-99,submitted:new Set(),poll:null,tick:null};

  function esc(s){return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]))}
  function shuffle(a){const x=[...a];for(let i=x.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[x[i],x[j]]=[x[j],x[i]]}return x}
  async function api(path,opts={}){
    const r=await fetch(API+path,{headers:{"Content-Type":"application/json",...(opts.headers||{})},...opts});
    const j=await r.json().catch(()=>({}));
    if(!r.ok)throw new Error(j.error||"Request failed.");
    return j;
  }
  function show(id){["setup","lobby","countdownScreen","game","finished"].forEach(x=>$("#"+x).classList.toggle("hidden",x!==id))}
  function saveSession(){localStorage.setItem("pcpContest.v1",JSON.stringify({code:state.code,playerId:state.playerId}))}
  function clearSession(){localStorage.removeItem("pcpContest.v1")}

  async function loadBanks(){
    const txt=await fetch("test.js",{cache:"no-store"}).then(r=>r.text());
    const a=txt.indexOf("const BANKS=");
    const b=txt.indexOf("const QUIZ_TOPIC_IDS=");
    if(a<0||b<0)throw new Error("Quiz banks could not be loaded.");
    const raw=txt.slice(a+"const BANKS=".length,b).trim().replace(/;\s*$/,"");
    const banks=Function('"use strict";return ('+raw+')')();
    banks["phrm-mixed"]={classCode:"PHRM 208",week:"Week 1",title:"Week 1 Mixed Review",source:"PHRM Week 1",questions:[...banks["phrm-sga"].questions,...banks["phrm-mca"].questions]};
    state.banks=banks;
    const sel=$("#bankSelect");
    sel.innerHTML=Object.entries(banks).map(([k,v])=>`<option value="${esc(k)}">${esc(v.classCode)} • ${esc(v.week)} • ${esc(v.title)}</option>`).join("");
  }

  function pickedQuestions(key,n){
    const bank=state.banks[key];
    if(!bank)throw new Error("That quiz bank is not available.");
    return shuffle(bank.questions).slice(0,Math.min(n,bank.questions.length));
  }

  async function createRoom(){
    try{
      const hostName=$("#hostName").value.trim();
      const quizKey=$("#bankSelect").value;
      const bank=state.banks[quizKey];
      const questions=pickedQuestions(quizKey,Number($("#lengthSelect").value));
      const j=await api("/api/contest/rooms",{method:"POST",body:JSON.stringify({hostName,quizKey,title:`${bank.classCode} • ${bank.week} • ${bank.title}`,questionMs:Number($("#timeSelect").value),questions})});
      state.code=j.code;state.playerId=j.playerId;state.room=j.room;saveSession();
      history.replaceState(null,"",`contest.html?room=${encodeURIComponent(state.code)}`);
      enterLobby();startPolling();
    }catch(e){alert(e.message)}
  }

  async function joinRoom(){
    try{
      const code=$("#joinCode").value.trim().toUpperCase();
      const name=$("#joinName").value.trim();
      const j=await api(`/api/contest/rooms/${encodeURIComponent(code)}/join`,{method:"POST",body:JSON.stringify({name})});
      state.code=code;state.playerId=j.playerId;state.room=j.room;saveSession();
      history.replaceState(null,"",`contest.html?room=${encodeURIComponent(code)}`);
      enterLobby();startPolling();
    }catch(e){alert(e.message)}
  }

  function enterLobby(){
    show("lobby");
    $("#roomCode").textContent=state.code;
    renderRoom(state.room);
  }

  function renderPlayers(el,players,showScores=false){
    el.innerHTML=players.map((p,i)=>`<div class="player-row ${i===0&&showScores?"leader":""}"><div><span class="rank">#${i+1}</span> <b>${esc(p.name)}</b>${p.isHost?' <small>HOST</small>':''}</div><div>${showScores?`<b>${p.score.toLocaleString()} pts</b><small style="display:block;text-align:right">${p.correct} correct</small>`:`<small>${p.answered} answered</small>`}</div></div>`).join("");
  }

  function renderRoom(room){
    if(!room)return;
    state.room=room;
    $("#roomTitle").textContent=`${room.title} • ${room.questions.length} questions • ${Math.round(room.questionMs/1000)} sec each`;
    const me=room.players.find(p=>p.id===state.playerId);
    $("#startBtn").classList.toggle("hidden",!me?.isHost||Boolean(room.startAt));
    renderPlayers($("#lobbyPlayers"),room.players,false);
    renderPlayers($("#leaderboard"),room.players,true);
    if(room.phase?.name==="lobby")show("lobby");
    else if(room.phase?.name==="countdown")show("countdownScreen");
    else if(room.phase?.name==="question")show("game");
    else if(room.phase?.name==="finished")renderFinished(room.players);
  }

  async function refresh(){
    if(!state.code)return;
    try{
      const j=await api(`/api/contest/rooms/${encodeURIComponent(state.code)}`);
      renderRoom(j.room);
    }catch(e){
      if(/not found|expired/i.test(e.message)){clearInterval(state.poll);clearInterval(state.tick);clearSession();alert(e.message);location.href="contest.html"}
    }
  }
  function startPolling(){
    clearInterval(state.poll);clearInterval(state.tick);
    state.poll=setInterval(refresh,1000);
    state.tick=setInterval(tick,120);
    refresh();tick();
  }

  async function startContest(){
    try{
      const j=await api(`/api/contest/rooms/${encodeURIComponent(state.code)}/start`,{method:"POST",body:JSON.stringify({playerId:state.playerId})});
      renderRoom(j.room);
    }catch(e){alert(e.message)}
  }

  function tick(){
    const room=state.room;if(!room?.startAt)return;
    const now=Date.now();
    if(now<room.startAt){
      const sec=Math.max(1,Math.ceil((room.startAt-now)/1000));
      $("#countdownNum").textContent=sec;
      if(!$("#countdownScreen").classList.contains("hidden"))return;
      show("countdownScreen");return;
    }
    const elapsed=now-room.startAt;
    const idx=Math.floor(elapsed/room.questionMs);
    if(idx>=room.questions.length){renderFinished(room.players);return}
    if($("#game").classList.contains("hidden"))show("game");
    if(idx!==state.lastIndex){state.lastIndex=idx;renderQuestion(idx)}
    const qStart=room.startAt+idx*room.questionMs;
    const left=Math.max(0,qStart+room.questionMs-now);
    $("#timer").textContent=(left/1000).toFixed(1);
    $("#timerBar").style.width=(left/room.questionMs*100)+"%";
    const me=room.players.find(p=>p.id===state.playerId);
    $("#gameStreak").textContent=`Streak: ${me?.streak||0} • Score: ${(me?.score||0).toLocaleString()}`;
    if(left<=0&&!state.submitted.has(idx)){
      state.submitted.add(idx);
      lockOptions();
      const f=$("#feedback");f.className="contest-feedback bad";f.textContent="Time. No points for this question.";
    }
  }

  function renderQuestion(idx){
    const room=state.room,q=room.questions[idx];
    $("#gameMeta").textContent=`QUESTION ${idx+1} / ${room.questions.length}`;
    $("#questionText").textContent=q.q;
    $("#feedback").className="contest-feedback hidden";
    $("#feedback").innerHTML="";
    $("#options").innerHTML=q.o.map((o,i)=>`<button class="contest-option" data-option="${i}"><span class="code">${String.fromCharCode(65+i)}</span><br>${esc(o)}</button>`).join("");
    $("#options").querySelectorAll(".contest-option").forEach(b=>b.onclick=()=>submitAnswer(idx,Number(b.dataset.option),b));
  }
  function lockOptions(){$("#options").querySelectorAll(".contest-option").forEach(b=>{b.disabled=true;b.classList.add("locked")})}
  async function submitAnswer(index,option,btn){
    if(state.submitted.has(index))return;
    state.submitted.add(index);btn.classList.add("selected");lockOptions();
    try{
      const j=await api(`/api/contest/rooms/${encodeURIComponent(state.code)}/answer`,{method:"POST",body:JSON.stringify({playerId:state.playerId,index,option})});
      const f=$("#feedback");
      f.className="contest-feedback "+(j.correct?"good":"bad");
      f.innerHTML=j.correct?`<b>Correct +${j.points.toLocaleString()}</b>${j.streak>1?` • ${j.streak}× streak`:""}<div>${esc(j.explanation)}</div>`:`<b>Not quite.</b> Correct answer: ${String.fromCharCode(65+j.correctOption)}<div>${esc(j.explanation)}</div>`;
      refresh();
    }catch(e){
      const f=$("#feedback");f.className="contest-feedback bad";f.textContent=e.message;
    }
  }

  function renderFinished(players){
    show("finished");
    clearInterval(state.tick);
    const sorted=[...players].sort((a,b)=>b.score-a.score||b.correct-a.correct);
    const slots=[sorted[1],sorted[0],sorted[2]];
    const cls=["second","first","third"],medals=["🥈","🥇","🥉"];
    $("#podium").innerHTML=slots.map((p,i)=>p?`<div class="${cls[i]}"><div style="font-size:28px">${medals[i]}</div><b>${esc(p.name)}</b><span>${p.score.toLocaleString()} pts • ${p.correct} correct</span></div>`:"").join("");
    renderPlayers($("#finalBoard"),sorted,true);
  }

  function shareUrl(){return `${location.origin}${location.pathname}?room=${encodeURIComponent(state.code)}`}
  async function copyLink(){try{await navigator.clipboard.writeText(shareUrl());$("#copyBtn").textContent="Copied ✓";setTimeout(()=>$("#copyBtn").textContent="Copy room link",1400)}catch{prompt("Copy this link:",shareUrl())}}
  async function nativeShare(){if(navigator.share)try{await navigator.share({title:"PCP Sem 3 Group Contest",text:`Join my study contest. Room ${state.code}`,url:shareUrl()})}catch{}else copyLink()}

  async function resumeOrPrefill(){
    const p=new URLSearchParams(location.search),room=p.get("room");
    if(room)$("#joinCode").value=room.toUpperCase();
    try{
      const saved=JSON.parse(localStorage.getItem("pcpContest.v1")||"null");
      if(saved?.code&&saved?.playerId&&(!room||saved.code===room.toUpperCase())){
        state.code=saved.code;state.playerId=saved.playerId;
        const j=await api(`/api/contest/rooms/${encodeURIComponent(state.code)}`);
        state.room=j.room;renderRoom(j.room);startPolling();
      }
    }catch{}
  }

  $("#createBtn").onclick=createRoom;
  $("#joinBtn").onclick=joinRoom;
  $("#startBtn").onclick=startContest;
  $("#copyBtn").onclick=copyLink;
  $("#shareBtn").onclick=nativeShare;
  $("#joinCode").addEventListener("input",e=>e.target.value=e.target.value.toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,6));

  loadBanks().then(resumeOrPrefill).catch(e=>{alert(e.message);$("#bankSelect").innerHTML='<option>Quiz banks unavailable</option>'});
})();
