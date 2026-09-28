(function(){
  const API="https://pcp-sem-3-tutor.onrender.com/api/chat";
  const KEY="pcpTutorHistory.v1";
  const MASTERY_W2="https://pcth-308-week-2-mastery-quiz.lovable.app";

  let history=[];
  try{history=JSON.parse(localStorage.getItem(KEY)||"[]")}catch(e){history=[]}

  const wrap=document.createElement("div");
  wrap.className="tutor-wrap";
  wrap.innerHTML=`
    <button class="tutor-fab" id="tutorFab" aria-label="Open Arman">
      <span class="tutor-pulse"></span>
      <span class="tutor-icon">✦</span>
      <span class="tutor-fab-label">Arman</span>
    </button>
    <section class="tutor-panel" id="tutorPanel" aria-label="Arman chat">
      <header class="tutor-head">
        <div>
          <div class="tutor-title"><span class="tutor-dot"></span>Arman</div>
          <div class="tutor-sub">Tutor + guide • learn, quiz, or jump to the right material</div>
        </div>
        <div class="tutor-head-actions">
          <button id="tutorClear" title="Clear chat">↺</button>
          <button id="tutorClose" title="Close">×</button>
        </div>
      </header>
      <div class="tutor-quick">
        <button data-q="I don't know where to start. Guide me through the study material available on this site and give me the best next step.">Guide me</button>
        <button data-q="Explain the key ideas on this page simply, but do not leave out testable details.">Explain this</button>
        <button data-q="Quiz me on this page one question at a time. Do not reveal the answer until I respond.">Quiz me</button>
        <button data-q="What are the highest-yield test traps and confusing look-alikes on this page?">Test traps</button>
      </div>
      <div class="tutor-messages" id="tutorMessages"></div>
      <form class="tutor-form" id="tutorForm">
        <textarea id="tutorInput" rows="1" placeholder="Try: I want to learn PCTH Week 2…" autocomplete="off"></textarea>
        <button type="submit" id="tutorSend" aria-label="Send">↑</button>
      </form>
      <div class="tutor-note">Study aid only • verify exact directive wording in current Ontario standards.</div>
    </section>`;
  document.body.appendChild(wrap);

  const fab=document.getElementById("tutorFab"), panel=document.getElementById("tutorPanel"),
        close=document.getElementById("tutorClose"), clear=document.getElementById("tutorClear"),
        form=document.getElementById("tutorForm"), input=document.getElementById("tutorInput"),
        messages=document.getElementById("tutorMessages"), send=document.getElementById("tutorSend");

  function esc(s){return String(s||"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]))}
  function renderText(s){return esc(s).replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\n/g,"<br>")}
  function save(){localStorage.setItem(KEY,JSON.stringify(history.slice(-16)))}

  function add(role,text,saveIt=true){
    const d=document.createElement("div");
    d.className="tutor-msg "+role;
    d.innerHTML='<div class="tutor-bubble">'+renderText(text)+'</div>';
    messages.appendChild(d);
    messages.scrollTop=messages.scrollHeight;
    if(saveIt){history.push({role,text});save()}
  }

  function addActions(actions){
    if(!actions||!actions.length)return;
    const row=document.createElement("div");
    row.className="tutor-actions";
    actions.forEach(a=>{
      const link=document.createElement("a");
      link.className="tutor-action";
      link.href=a.href;
      link.textContent=a.label;
      if(a.external){link.target="_blank";link.rel="noopener"}
      row.appendChild(link);
    });
    messages.appendChild(row);
    messages.scrollTop=messages.scrollHeight;
  }

  function renderHistory(){
    messages.innerHTML="";
    if(!history.length){
      add("assistant","I’m **Arman** — your tutor and study guide. Tell me what you want to learn and I can teach it, quiz you, or take you straight to the right notes/test. Try: **I want to learn PCTH Week 2.**",false);
    }else history.forEach(x=>add(x.role,x.text,false));
  }

  function open(){panel.classList.add("open");fab.classList.add("hidden");setTimeout(()=>input.focus(),80)}
  function shut(){panel.classList.remove("open");fab.classList.remove("hidden")}
  fab.onclick=open; close.onclick=shut;
  clear.onclick=()=>{history=[];save();renderHistory();input.focus()}
  document.querySelectorAll(".tutor-quick button").forEach(b=>b.onclick=()=>{open();sendMessage(b.dataset.q)});
  input.addEventListener("input",()=>{input.style.height="auto";input.style.height=Math.min(input.scrollHeight,120)+"px"});
  input.addEventListener("keydown",e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();form.requestSubmit()}});
  form.addEventListener("submit",e=>{e.preventDefault();const q=input.value.trim();if(q)sendMessage(q)});

  function pageContext(){
    const clone=document.body.cloneNode(true);
    clone.querySelectorAll(".tutor-wrap,script,style,nav,header.top,footer").forEach(x=>x.remove());
    return (document.title+"\n"+clone.innerText).replace(/\s+/g," ").slice(0,14000);
  }

  function has(s,...xs){return xs.some(x=>s.includes(x))}
  function pcthWeek(s,n){return has(s,"pcth","patient care theory") && (s.includes("week "+n)||s.includes("week"+n)||s.includes("w"+n));}
  function phrm(s){return has(s,"phrm","pharm","pharmacology");}

  function guideActions(q){
    const s=String(q||"").toLowerCase();

    if(pcthWeek(s,2)){
      return [
        {label:"Learn • PCTH Week 2",href:"pcth.html#w2"},
        {label:"Start • Standard 10",href:"test.html?class=pcth&material=pcth-w2&length=10&start=1"},
        {label:"Master • 89-Q Exam ↗",href:MASTERY_W2,external:true}
      ];
    }
    if(pcthWeek(s,1)){
      return [
        {label:"Learn • PCTH Week 1",href:"pcth.html#w1"},
        {label:"Start • Standard 10",href:"test.html?class=pcth&material=pcth-w1&length=10&start=1"}
      ];
    }
    if(phrm(s)&&has(s,"sga","supraglottic","i-gel","igel","airway")){
      return [
        {label:"Learn • SGA Directive",href:"phrm.html#sga"},
        {label:"Start • SGA Quiz",href:"test.html?class=phrm&material=phrm-sga&length=10&start=1"}
      ];
    }
    if(phrm(s)&&has(s,"cardiac arrest","mca","pea","vf","vt","tor")){
      return [
        {label:"Learn • Cardiac Arrest",href:"phrm.html#mca"},
        {label:"Start • Cardiac Arrest Quiz",href:"test.html?class=phrm&material=phrm-mca&length=10&start=1"}
      ];
    }
    if(phrm(s)&&has(s,"week 1","week1","w1")){
      return [
        {label:"Learn • SGA",href:"phrm.html#sga"},
        {label:"Learn • Cardiac Arrest",href:"phrm.html#mca"},
        {label:"Start • Mixed Week 1 Quiz",href:"test.html?class=phrm&material=phrm-mixed&length=10&start=1"}
      ];
    }
    if(has(s,"guide me","where do i start","where should i start","don't know where","dont know where","what should i do","what do i study","show me what","available on this site")){
      return [
        {label:"PCTH • Week 1",href:"pcth.html#w1"},
        {label:"PCTH • Week 2",href:"pcth.html#w2"},
        {label:"PHRM • Week 1",href:"phrm.html"},
        {label:"Open Test Center",href:"test.html"}
      ];
    }
    if(has(s,"quiz","test","practice questions")&&has(s,"what","where","open","show","find")){
      return [{label:"Open Test Center",href:"test.html"}];
    }
    return [];
  }

  function directRoute(q){
    const s=String(q||"").toLowerCase();
    const explicit=/(take me|go to|open|launch|start|bring me|send me)/.test(s);
    if(!explicit)return null;

    if(pcthWeek(s,2)){
      if(has(s,"89","mastery","full exam")) return {label:"PCTH Week 2 • 89-Q Mastery Exam",href:MASTERY_W2,external:true};
      if(has(s,"quiz","test","questions")) return {label:"PCTH Week 2 • Standard 10",href:"test.html?class=pcth&material=pcth-w2&length=10&start=1"};
      return {label:"PCTH Week 2",href:"pcth.html#w2"};
    }
    if(pcthWeek(s,1)){
      if(has(s,"quiz","test","questions")) return {label:"PCTH Week 1 • Standard 10",href:"test.html?class=pcth&material=pcth-w1&length=10&start=1"};
      return {label:"PCTH Week 1",href:"pcth.html#w1"};
    }
    if(phrm(s)&&has(s,"sga","supraglottic","i-gel","igel","airway")){
      if(has(s,"quiz","test","questions")) return {label:"PHRM • SGA Quiz",href:"test.html?class=phrm&material=phrm-sga&length=10&start=1"};
      return {label:"PHRM • SGA Directive",href:"phrm.html#sga"};
    }
    if(phrm(s)&&has(s,"cardiac arrest","mca","pea","vf","vt","tor")){
      if(has(s,"quiz","test","questions")) return {label:"PHRM • Cardiac Arrest Quiz",href:"test.html?class=phrm&material=phrm-mca&length=10&start=1"};
      return {label:"PHRM • Cardiac Arrest",href:"phrm.html#mca"};
    }
    if(has(s,"test center","quiz center")) return {label:"Test Center",href:"test.html"};
    return null;
  }

  function navigate(route){
    add("assistant","Taking you to **"+route.label+"**…");
    setTimeout(()=>{
      if(route.external) window.open(route.href,"_blank","noopener");
      else window.location.href=route.href;
    },450);
  }

  async function sendMessage(q){
    input.value="";
    input.style.height="auto";
    add("user",q);

    const route=directRoute(q);
    if(route){navigate(route);return}

    send.disabled=true;
    send.textContent="…";
    const thinking=document.createElement("div");
    thinking.className="tutor-msg assistant thinking";
    thinking.innerHTML='<div class="tutor-bubble"><span></span><span></span><span></span></div>';
    messages.appendChild(thinking);
    messages.scrollTop=messages.scrollHeight;

    try{
      const r=await fetch(API,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          message:q,
          pageTitle:document.title,
          pageUrl:location.href,
          pageContext:pageContext(),
          history:history.slice(-10)
        })
      });
      const j=await r.json().catch(()=>({}));
      thinking.remove();
      if(!r.ok) throw new Error(j.error||"Tutor is not available yet.");
      add("assistant",j.answer||"I couldn't generate an answer.");
      addActions(guideActions(q));
    }catch(err){
      thinking.remove();
      const msg=String(err&&err.message||"");
      add("assistant",msg && msg!=="Failed to fetch" ? msg : "Arman couldn't connect to the tutor service. Please try again in a moment.");
      addActions(guideActions(q));
    }finally{
      send.disabled=false;
      send.textContent="↑";
    }
  }

  renderHistory();
})();