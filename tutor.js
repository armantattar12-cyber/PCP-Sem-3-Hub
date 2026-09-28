(function(){
  const API="https://pcp-sem-3-tutor.onrender.com/api/chat";
  const KEY="pcpTutorHistory.v1";
  const MASTERY_W2="https://pcth-308-week-2-mastery-quiz.lovable.app";
  const CONTROL_META={
    "pcth-w1":{
      label:"PCTH Week 1",total:23,quizKey:"pcth-w1",
      learn:"learn.html?deck=pcth-w1",
      quiz:"test.html?class=pcth&material=pcth-w1&length=10&start=1",
      topics:{
        cells:{label:"cardiac cell properties",cards:["auto","excite","conduct","contract","refract","chrono","ino","dromo","symp","para"]},
        pacemakers:{label:"pacemaker hierarchy",cards:["sa-rate","av-rate","vent-rate"]},
        conduction:{label:"conduction & AV delay",cards:["path","avdelay"]},
        electrical:{label:"depolarization & refractory periods",cards:["depol","repol","absref","relref"]},
        ecg:{label:"ECG fundamentals",cards:["paper","ecg","qrs","twave"]}
      }
    },
    "pcth-w2":{
      label:"PCTH Week 2",total:27,quizKey:"pcth-w2",
      learn:"learn.html?deck=pcth-w2",
      quiz:"test.html?class=pcth&material=pcth-w2&length=10&start=1",
      mastery:MASTERY_W2,
      topics:{
        sinus:{label:"sinus rhythms",cards:["nsr","sb","st","sa","exit","arrest"]},
        junctional:{label:"junctional rhythms",cards:["pjc","jeb","jer","ajr","jt"]},
        atrial:{label:"atrial rhythms",cards:["pac","af","flutter","wap","mat"]},
        svt:{label:"SVT / WPW",cards:["avnrt","avrt","wpw"]},
        "av-blocks":{label:"AV blocks",cards:["first","m1","m2","2to1","third"]},
        arrest:{label:"PEA / shockability",cards:["pea","shock"]},
        framework:{label:"rhythm interpretation framework",cards:["framework"]}
      }
    },
    "phrm-sga":{
      label:"PHRM SGA",total:10,quizKey:"phrm-sga",
      learn:"learn.html?deck=phrm-sga",
      quiz:"test.html?class=phrm&material=phrm-sga&length=10&start=1",
      topics:{
        airway:{label:"SGA indications & placement",cards:["purpose","igel","attempts","confirm","capno","source"]},
        ventilation:{label:"advanced-airway ventilation",cards:["cpr","adultvent","pedvent","volume"]}
      }
    },
    "phrm-mca":{
      label:"PHRM Cardiac Arrest",total:14,quizKey:"phrm-mca",
      learn:"learn.html?deck=phrm-mca",
      quiz:"test.html?class=phrm&material=phrm-mca&length=10&start=1",
      topics:{
        rhythms:{label:"arrest rhythm recognition",cards:["shockable","nonshock","pea","vtpulse","ecg"]},
        cpr:{label:"CPR / ventilation",cards:["vent","hyper","etco2"]},
        special:{label:"special arrest considerations",cards:["pedbrady","preg","opioid"]},
        directives:{label:"DNR / TOR / reversible causes",cards:["dnr","tor","reversible"]}
      }
    },
    "phrm-w2":{
      label:"PHRM Week 2",total:46,quizKey:"phrm-w2",
      learn:"learn.html?deck=phrm-w2",
      quiz:"test.html?class=phrm&material=phrm-w2&length=10&start=1",
      topics:{
        trauma:{label:"trauma physiology & priorities",cards:["ftt-priority","ftt-close-ed","diamond","acidosis","hypothermia","coagulopathy","hypocalcemia","normal-saline"]},
        txa:{label:"TXA & hemostasis",cards:["crash2-purpose","crash2-pop","crash2-time","txa-class","txa-moa","hemostasis1","hemostasis2","hemostasis3","hemostasis4","txa-stage","txa-ae"]},
        hemorrhage:{label:"Traumatic Hemorrhage directive",cards:["hem-indication","hem-age","hem-hemo","hem-contra-time","hem-contra-head","txa-dose","txa-iv","txa-im","txa-transport","txa-internal"]},
        "trauma-arrest":{label:"Traumatic Cardiac Arrest",cards:["txa-vsa","trauma-vsa-causes","tca-indication","tca-cpr","tca-defib","tca-peddefib","signs-life"]},
        "trauma-tor":{label:"Trauma TOR",cards:["tor-core","tor-contra"]},
        rosc:{label:"ROSC care",cards:["rosc-indication","rosc-o2","rosc-etco2","rosc-fluid","rosc-reassess","rosc-map","rosc-12lead","rosc-checklist"]}
      }
    }
  };

  const QUIZ_TOPIC_IDS={
    "pcth-w1":{
      cells:["w1q1","w1q2","w1q3","w1q4","w1q5","w1q8","w1q9","w1q10"],
      conduction:["w1q6","w1q7"],
      electrical:["w1q16","w1q17"],
      ecg:["w1q11","w1q12","w1q13","w1q14","w1q15","w1q18","w1q19","w1q20"]
    },
    "pcth-w2":{
      sinus:["w2q1","w2q2","w2q3","w2q4","w2q5"],
      junctional:["w2q6","w2q7"],
      atrial:["w2q8","w2q9","w2q10","w2q11","w2q12"],
      svt:["w2q13","w2q14","w2q15"],
      "av-blocks":["w2q16","w2q17","w2q18","w2q19","w2q20"]
    },
    "phrm-sga":{
      airway:["sgaq1","sgaq2","sgaq7","sgaq8","sgaq9","sgaq10","sgaq11","sgaq12"],
      ventilation:["sgaq3","sgaq4","sgaq5","sgaq6"]
    },
    "phrm-mca":{
      rhythms:["mcaq1","mcaq2","mcaq3","mcaq4","mcaq5","mcaq18","mcaq20"],
      cpr:["mcaq6","mcaq7","mcaq8","mcaq15"],
      special:["mcaq9","mcaq10","mcaq13","mcaq14"],
      directives:["mcaq11","mcaq12","mcaq16","mcaq17","mcaq19"]
    },
    "phrm-w2":{
      trauma:["p2q1","p2q2","p2q3","p2q4","p2q5","p2q6","p2q7","p2q8"],
      txa:["p2q9","p2q10","p2q11","p2q12","p2q13","p2q14","p2q15"],
      hemorrhage:["p2q16","p2q17","p2q18","p2q19","p2q20","p2q21","p2q22","p2q23","p2q24","p2q25","p2q26"],
      "trauma-arrest":["p2q27","p2q28","p2q29","p2q30","p2q31","p2q32","p2q34"],
      "trauma-tor":["p2q33","p2q34"],
      rosc:["p2q35","p2q36","p2q37","p2q38","p2q39","p2q40","p2q41","p2q42","p2q43","p2q44"]
    }
  };

  function safeJSON(key,fallback){
    try{return JSON.parse(localStorage.getItem(key)||JSON.stringify(fallback))}catch(e){return fallback}
  }

  function getStudyState(){
    const learn=safeJSON("pcpLearnProgress.v1",{});
    const attempts=safeJSON("pcpQuizAttempts.v1",[]);
    const decks={};
    const weakness={};

    Object.entries(CONTROL_META).forEach(([id,m])=>{
      const l=learn[id]||{};
      const known=Array.isArray(l.known)?l.known:[];
      const learning=Array.isArray(l.learning)?l.learning:[];
      const recentAttempts=(Array.isArray(attempts)?attempts:[]).filter(a=>a&&a.key===m.quizKey).slice(0,8);
      const latest=recentAttempts[0]||null;
      decks[id]={
        label:m.label,total:m.total,known:known.length,learning:learning.length,
        unreviewed:Math.max(0,m.total-known.length-learning.length),
        latestQuiz:latest?{pct:latest.pct,score:latest.score,total:latest.total,date:latest.date}:null,
        updated:l.updated||null
      };

      Object.entries(m.topics).forEach(([slug,t])=>{
        const k=id+"::"+slug;
        let score=0;
        learning.forEach(card=>{if(t.cards.includes(card))score+=2});
        recentAttempts.forEach((a,idx)=>{
          const ids=((QUIZ_TOPIC_IDS[id]||{})[slug]||[]);
          (a.wrong||[]).forEach(q=>{if(ids.includes(q))score+=Math.max(1,3-idx*.25)});
        });
        if(score>0) weakness[k]={deck:id,topic:slug,label:t.label,score:Math.round(score*10)/10};
      });
    });

    const weakAreas=Object.values(weakness).sort((a,b)=>b.score-a.score).slice(0,6);
    const latestQuiz=(Array.isArray(attempts)?attempts:[])[0]||null;
    const totals=Object.values(decks).reduce((a,d)=>({
      known:a.known+d.known,learning:a.learning+d.learning,total:a.total+d.total
    }),{known:0,learning:0,total:0});

    return {decks,weakAreas,latestQuiz,totals,source:"browser-local Learn + Test history"};
  }

  function preferredDeck(state){
    const p=new URLSearchParams(location.search);
    if(location.pathname.endsWith("/learn.html")&&CONTROL_META[p.get("deck")])return p.get("deck");
    if(location.pathname.endsWith("/test.html")){
      const mat=p.get("material");
      if(CONTROL_META[mat])return mat;
    }
    if(location.pathname.endsWith("/pcth.html")){
      if(location.hash==="#w1")return "pcth-w1";
      return "pcth-w2";
    }
    if(location.pathname.endsWith("/phrm.html")){
      if(location.hash==="#w2")return "phrm-w2";
      if(location.hash==="#mca")return "phrm-mca";
      return "phrm-sga";
    }
    if(state.latestQuiz&&CONTROL_META[state.latestQuiz.key])return state.latestQuiz.key;
    const updated=Object.entries(state.decks)
      .filter(([,d])=>d.updated)
      .sort((a,b)=>String(b[1].updated).localeCompare(String(a[1].updated)));
    return updated[0]?.[0]||"pcth-w1";
  }

  function parseMinutes(q){
    const s=String(q||"").toLowerCase();
    let m=s.match(/(\d{1,3})\s*(?:min|mins|minute|minutes)\b/);
    if(m)return Math.max(5,Math.min(180,+m[1]));
    m=s.match(/(\d(?:\.\d)?)\s*(?:hour|hours|hr|hrs)\b/);
    if(m)return Math.max(5,Math.min(180,Math.round(+m[1]*60)));
    if(/half (?:an )?hour/.test(s))return 30;
    if(/an hour|one hour/.test(s))return 60;
    return null;
  }

  function planIntent(q){
    const s=String(q||"").toLowerCase();
    return parseMinutes(q)!==null || /plan my study|what should i (?:study|do)|what do i study|build me a study|how should i study right now|what should i work on/.test(s);
  }

  function topicQuizHref(deckId,topic,minutes){
    const meta=CONTROL_META[deckId];
    const ids=((QUIZ_TOPIC_IDS[deckId]||{})[topic]||[]);
    const n=Math.min(ids.length,minutes<25?5:10);
    const cls=deckId.startsWith("pcth")?"pcth":"phrm";
    return "test.html?class="+cls+"&material="+meta.quizKey+"&length="+(n||5)+"&topic="+encodeURIComponent(topic)+"&start=1";
  }

  function buildStudyPlan(minutes,state){
    const deckId=(state.weakAreas[0]&&state.weakAreas[0].deck)||preferredDeck(state);
    const meta=CONTROL_META[deckId];
    const topWeak=state.weakAreas.find(w=>w.deck===deckId)||null;
    const topic=topWeak?topWeak.topic:Object.keys(meta.topics)[0];
    const topicLabel=topWeak?topWeak.label:meta.topics[topic].label;
    const topicCount=((QUIZ_TOPIC_IDS[deckId]||{})[topic]||[]).length;
    const m=Math.max(10,minutes||30);

    let learnM,quizM,drillM,reviewM;
    if(m<=20){learnM=Math.max(5,Math.round(m*.4));quizM=Math.max(5,Math.round(m*.35));drillM=Math.max(3,m-learnM-quizM);reviewM=0}
    else if(m<=45){learnM=Math.round(m*.28);quizM=Math.round(m*.32);drillM=Math.round(m*.25);reviewM=m-learnM-quizM-drillM}
    else{learnM=Math.round(m*.25);quizM=Math.round(m*.30);drillM=Math.round(m*.25);reviewM=m-learnM-quizM-drillM}

    const hasWeak=!!topWeak;
    const learnHref=meta.learn+(hasWeak?"&mode=weak&topic="+encodeURIComponent(topic):"&topic="+encodeURIComponent(topic));
    const quizHref=topicCount?topicQuizHref(deckId,topic,m):meta.quiz;
    const steps=[
      {mins:learnM,title:"Repair "+topicLabel,desc:hasWeak?"Start with the concepts this browser has marked weak.":"Build recall on this topic first.",action:{label:"Open focused Learn",href:learnHref}},
      {mins:quizM,title:(topicCount?Math.min(topicCount,m<25?5:10):10)+"-question check",desc:"Test the same area before moving on.",action:{label:"Start targeted quiz",href:quizHref}},
      {mins:drillM,title:"Arman discrimination drill",desc:"Three one-at-a-time cases/questions that force you to explain the difference.",action:{label:"Start 3-case drill",prompt:"Run a 3-question discrimination drill on "+meta.label+" — "+topicLabel+". Ask one question at a time, make me commit to an answer, then explain the discriminator before moving on."}}
    ];
    if(reviewM>0){
      steps.push({mins:reviewM,title:"Close the loop",desc:"Return only to misses, then finish with a teach-back.",action:{label:"Teach-back with Arman",prompt:"Make me teach back "+topicLabel+" from memory. Grade my explanation for missing or inaccurate points, but do not give me the answer before I try."}});
    }

    return {minutes:m,deckId,deckLabel:meta.label,topic,topicLabel,weak:hasWeak,steps};
  }

  function progressLine(state){
    const d=state.decks[preferredDeck(state)];
    if(!d)return "Progress tracking ready";
    const quiz=d.latestQuiz?" • latest quiz "+d.latestQuiz.pct+"%":"";
    return d.label+": "+d.known+"/"+d.total+" known • "+d.learning+" learning"+quiz;
  }

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
          <div class="tutor-sub">Tutor + guide • uses your progress when it helps</div>
        </div>
        <div class="tutor-head-actions">
          <button id="tutorClear" title="Clear chat">↺</button>
          <button id="tutorClose" title="Close">×</button>
        </div>
      </header>
      <div class="tutor-quick">
        <button data-q="I have 45 minutes. What should I do?">Plan 45 min</button>
        <button data-q="What are my weakest areas right now based on my saved progress?">Weak areas</button>
        <button data-q="I don't know where to start. Guide me through the study material available on this site and give me the best next step.">Guide me</button>
        <button data-q="Explain the key ideas on this page simply, but do not leave out testable details.">Explain this</button>
        <button data-q="Quiz me on this page one question at a time. Do not reveal the answer until I respond.">Quiz me</button>
        <button data-q="What are the highest-yield test traps and confusing look-alikes on this page?">Test traps</button>
      </div>
      <div class="tutor-messages" id="tutorMessages"></div>
      <form class="tutor-form" id="tutorForm">
        <textarea id="tutorInput" rows="1" placeholder="Try: I have 45 minutes. What should I do?" autocomplete="off"></textarea>
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
      let el;
      if(a.prompt){
        el=document.createElement("button");
        el.type="button";
        el.onclick=()=>sendMessage(a.prompt);
      }else{
        el=document.createElement("a");
        el.href=a.href;
        if(a.external){el.target="_blank";el.rel="noopener"}
      }
      el.className="tutor-action";
      el.textContent=a.label;
      row.appendChild(el);
    });
    messages.appendChild(row);
    messages.scrollTop=messages.scrollHeight;
  }

  function addPlan(plan,state){
    const reason=plan.weak
      ?"Your saved progress points to **"+plan.topicLabel+"**."
      :"I don't have enough misses yet to call a true weak area, so I'm using your current/recent material.";
    const steps=plan.steps.slice(0,3);
    const summary=reason+"\n\n**"+plan.minutes+" min:** "+
      steps.map(s=>s.mins+" min "+s.title.toLowerCase()).join(" → ")+".";
    add("assistant",summary);
    addActions(steps.map(s=>s.action));
  }

  function renderHistory(){
    messages.innerHTML="";
    if(!history.length){
      const state=getStudyState();
      add("assistant","I’m **Arman**. I can teach, quiz you, and use the Learn/Test progress saved in this browser when you ask what to work on.\n\n**"+progressLine(state)+"**\n\nTry: **I have 45 minutes. What should I do?**",false);
    }else history.forEach(x=>add(x.role,x.text,false));
  }

  function open(){panel.classList.add("open");fab.classList.add("hidden");setTimeout(()=>input.focus(),80)}
  function shut(){panel.classList.remove("open");fab.classList.remove("hidden")}
  fab.onclick=open; close.onclick=shut;
  clear.onclick=()=>{history=[];save();renderHistory();input.focus()}
  document.querySelectorAll(".tutor-quick button").forEach(b=>b.onclick=()=>{open();sendMessage(b.dataset.q)});
  document.querySelectorAll("[data-arman-plan]").forEach(b=>b.onclick=e=>{e.preventDefault();open();sendMessage("I have 45 minutes. What should I do?")});
  input.addEventListener("input",()=>{input.style.height="auto";input.style.height=Math.min(input.scrollHeight,120)+"px"});
  input.addEventListener("keydown",e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();form.requestSubmit()}});
  form.addEventListener("submit",e=>{e.preventDefault();const q=input.value.trim();if(q)sendMessage(q)});

  function pageContext(){
    const clone=document.body.cloneNode(true);
    clone.querySelectorAll(".tutor-wrap,script,style,nav,header.top,footer").forEach(x=>x.remove());
    return (document.title+"\n"+clone.innerText).replace(/\s+/g," ").slice(0,24000);
  }

  function has(s,...xs){return xs.some(x=>s.includes(x))}
  function pcthWeek(s,n){return has(s,"pcth","patient care theory") && (s.includes("week "+n)||s.includes("week"+n)||s.includes("w"+n));}
  function phrm(s){return has(s,"phrm","pharm","pharmacology");}
  function phrmWeek(s,n){return phrm(s)&&(s.includes("week "+n)||s.includes("week"+n)||s.includes("w"+n));}
  function phrmW2Topic(s){return has(s,"txa","tranexamic","traumatic hemorrhage","trauma hemorrhage","traumatic cardiac arrest","trauma cardiac arrest","trauma tor","rosc","return of spontaneous circulation","lethal diamond","hypocalcemia","coagulopathy");}

  function guideActions(q){
    const s=String(q||"").toLowerCase();

    if(pcthWeek(s,2)){
      return [
        {label:"Learn • PCTH Week 2",href:"learn.html?deck=pcth-w2"},
        {label:"Start • Standard 10",href:"test.html?class=pcth&material=pcth-w2&length=10&start=1"},
        {label:"Master • 89-Q Exam ↗",href:MASTERY_W2,external:true}
      ];
    }
    if(pcthWeek(s,1)){
      return [
        {label:"Learn • PCTH Week 1",href:"learn.html?deck=pcth-w1"},
        {label:"Start • Standard 10",href:"test.html?class=pcth&material=pcth-w1&length=10&start=1"}
      ];
    }
    if(phrmWeek(s,2)||phrmW2Topic(s)){
      return [
        {label:"Learn • PHRM Week 2",href:"learn.html?deck=phrm-w2"},
        {label:"Start • Week 2 Quiz",href:"test.html?class=phrm&material=phrm-w2&length=10&start=1"},
        {label:"Open • Week 2 Review",href:"phrm.html#w2"}
      ];
    }
    if(phrm(s)&&has(s,"sga","supraglottic","i-gel","igel","airway")){
      return [
        {label:"Learn • SGA Directive",href:"learn.html?deck=phrm-sga"},
        {label:"Start • SGA Quiz",href:"test.html?class=phrm&material=phrm-sga&length=10&start=1"}
      ];
    }
    if(phrm(s)&&has(s,"cardiac arrest","mca","pea","vf","vt","tor")){
      return [
        {label:"Learn • Cardiac Arrest",href:"learn.html?deck=phrm-mca"},
        {label:"Start • Cardiac Arrest Quiz",href:"test.html?class=phrm&material=phrm-mca&length=10&start=1"}
      ];
    }
    if(phrm(s)&&has(s,"week 1","week1","w1")){
      return [
        {label:"Learn • SGA",href:"learn.html?deck=phrm-sga"},
        {label:"Learn • Cardiac Arrest",href:"learn.html?deck=phrm-mca"},
        {label:"Start • Mixed Week 1 Quiz",href:"test.html?class=phrm&material=phrm-mixed&length=10&start=1"}
      ];
    }
    if(has(s,"guide me","where do i start","where should i start","don't know where","dont know where","what should i do","what do i study","show me what","available on this site")){
      return [
        {label:"Learn • PCTH Week 1",href:"learn.html?deck=pcth-w1"},
        {label:"Learn • PCTH Week 2",href:"learn.html?deck=pcth-w2"},
        {label:"Learn • PHRM Week 1",href:"learn.html?deck=phrm-sga"},
        {label:"Learn • PHRM Week 2",href:"learn.html?deck=phrm-w2"},
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
      if(has(s,"learn","flashcard","flashcards","cards")) return {label:"PCTH Week 2 • Learn",href:"learn.html?deck=pcth-w2"};
      if(has(s,"89","mastery","full exam")) return {label:"PCTH Week 2 • 89-Q Mastery Exam",href:MASTERY_W2,external:true};
      if(has(s,"quiz","test","questions")) return {label:"PCTH Week 2 • Standard 10",href:"test.html?class=pcth&material=pcth-w2&length=10&start=1"};
      return {label:"PCTH Week 2",href:"pcth.html#w2"};
    }
    if(pcthWeek(s,1)){
      if(has(s,"learn","flashcard","flashcards","cards")) return {label:"PCTH Week 1 • Learn",href:"learn.html?deck=pcth-w1"};
      if(has(s,"quiz","test","questions")) return {label:"PCTH Week 1 • Standard 10",href:"test.html?class=pcth&material=pcth-w1&length=10&start=1"};
      return {label:"PCTH Week 1",href:"pcth.html#w1"};
    }
    if(phrmWeek(s,2)||phrmW2Topic(s)){
      let topic="";
      if(has(s,"txa","tranexamic","hemostasis"))topic="txa";
      else if(has(s,"hemorrhage","bleeding"))topic="hemorrhage";
      else if(has(s,"trauma tor"))topic="trauma-tor";
      else if(has(s,"rosc","return of spontaneous circulation"))topic="rosc";
      else if(has(s,"traumatic cardiac arrest","trauma cardiac arrest"))topic="trauma-arrest";
      else if(has(s,"lethal diamond","hypocalcemia","coagulopathy","hypothermia","acidosis"))topic="trauma";
      const suffix=topic?"&topic="+encodeURIComponent(topic):"";
      if(has(s,"directive image","directive visual","show directive","medical directive","algorithm")){
        const anchor=topic==="hemorrhage"?"#w2-traumatic-hemorrhage":topic==="trauma-tor"?"#w2-trauma-tor":topic==="rosc"?"#w2-rosc":topic==="trauma-arrest"?"#w2-trauma-arrest":"#w2-directives";
        return {label:"PHRM Week 2 • Directive Visual",href:"phrm.html"+anchor};
      }
      if(has(s,"learn","flashcard","flashcards","cards")) return {label:"PHRM Week 2 • Learn",href:"learn.html?deck=phrm-w2"+suffix};
      if(has(s,"quiz","test","questions")) return {label:"PHRM Week 2 • Quiz",href:"test.html?class=phrm&material=phrm-w2&length=10"+suffix+"&start=1"};
      return {label:"PHRM Week 2",href:"phrm.html#w2"};
    }
    if(phrm(s)&&has(s,"sga","supraglottic","i-gel","igel","airway")){
      if(has(s,"learn","flashcard","flashcards","cards")) return {label:"PHRM • SGA Learn",href:"learn.html?deck=phrm-sga"};
      if(has(s,"quiz","test","questions")) return {label:"PHRM • SGA Quiz",href:"test.html?class=phrm&material=phrm-sga&length=10&start=1"};
      return {label:"PHRM • SGA Directive",href:"phrm.html#sga"};
    }
    if(phrm(s)&&has(s,"cardiac arrest","mca","pea","vf","vt","tor")){
      if(has(s,"learn","flashcard","flashcards","cards")) return {label:"PHRM • Cardiac Arrest Learn",href:"learn.html?deck=phrm-mca"};
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

    const state=getStudyState();
    if(planIntent(q)){
      const mins=parseMinutes(q)||30;
      const plan=buildStudyPlan(mins,state);
      addPlan(plan,state);
      return;
    }

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
          history:history.slice(-10),
          studyState:getStudyState()
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