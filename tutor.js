(function(){
  const API="https://pcp-sem-3-tutor.onrender.com/api/chat";
  const KEY="pcpTutorHistory.v1";
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
          <div class="tutor-sub">Ask about what you're studying on this page</div>
        </div>
        <div class="tutor-head-actions">
          <button id="tutorClear" title="Clear chat">↺</button>
          <button id="tutorClose" title="Close">×</button>
        </div>
      </header>
      <div class="tutor-quick">
        <button data-q="Explain the key ideas on this page simply, but do not leave out testable details.">Explain this</button>
        <button data-q="Quiz me on this page one question at a time. Do not reveal the answer until I respond.">Quiz me</button>
        <button data-q="What are the highest-yield test traps and confusing look-alikes on this page?">Test traps</button>
        <button data-q="Give me a short clinical example that makes the main concept on this page click.">Clinical example</button>
      </div>
      <div class="tutor-messages" id="tutorMessages"></div>
      <form class="tutor-form" id="tutorForm">
        <textarea id="tutorInput" rows="1" placeholder="Ask Arman…" autocomplete="off"></textarea>
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
    messages.appendChild(d); messages.scrollTop=messages.scrollHeight;
    if(saveIt){history.push({role,text});save()}
  }
  function renderHistory(){
    messages.innerHTML="";
    if(!history.length)add("assistant","I’m your Arman. Ask me about the class page you’re on, or hit **Quiz me** and I’ll test you.",false);
    else history.forEach(x=>add(x.role,x.text,false));
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
  async function sendMessage(q){
    input.value="";input.style.height="auto";add("user",q);
    send.disabled=true;send.textContent="…";
    const thinking=document.createElement("div");thinking.className="tutor-msg assistant thinking";thinking.innerHTML='<div class="tutor-bubble"><span></span><span></span><span></span></div>';messages.appendChild(thinking);messages.scrollTop=messages.scrollHeight;
    try{
      const r=await fetch(API,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
        message:q,
        pageTitle:document.title,
        pageUrl:location.href,
        pageContext:pageContext(),
        history:history.slice(-10)
      })});
      const j=await r.json().catch(()=>({}));
      thinking.remove();
      if(!r.ok) throw new Error(j.error||"Tutor is not available yet.");
      add("assistant",j.answer||"I couldn't generate an answer.");
    }catch(err){
      thinking.remove();
      const msg=String(err&&err.message||"");
      add("assistant",msg && msg!=="Failed to fetch" ? msg : "Arman couldn't connect to the tutor service. Please try again in a moment.");
    }finally{send.disabled=false;send.textContent="↑"}
  }
  renderHistory();
})();