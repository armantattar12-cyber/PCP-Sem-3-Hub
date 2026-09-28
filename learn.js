const DECKS={
"pcth-w1":{
  classCode:"PCTH 308",week:"Week 1",title:"Introduction to ECG",sub:"Cardiac cells • conduction • ECG basics",
  test:"test.html?class=pcth&material=pcth-w1&length=10&start=1",
  cards:[
    {id:"auto",f:"Automaticity",b:"The ability of pacemaker cells to initiate an electrical impulse without needing another nerve to trigger every beat.",n:"Think: the cell can start the impulse on its own."},
    {id:"excite",f:"Excitability",b:"The ability of cardiac cells to respond to a chemical, mechanical, or electrical stimulus.",n:"Stimulus comes in → the cell can respond."},
    {id:"conduct",f:"Conductivity",b:"The ability of cardiac cells to receive an electrical impulse and pass it to adjacent cells.",n:"This is about transmitting the signal."},
    {id:"contract",f:"Contractility",b:"The ability of myocardial cells to shorten and generate force after electrical activation.",n:"Electrical activation is not the same thing as mechanical contraction."},
    {id:"refract",f:"Refractoriness",b:"The recovery period after depolarization during which a cardiac cell cannot respond normally to another stimulus.",n:"This protects the heart from being continuously re-stimulated."},
    {id:"chrono",f:"Chronotropy",b:"A change in heart rate.",n:"Positive chronotropy = faster heart rate."},
    {id:"ino",f:"Inotropy",b:"A change in myocardial contractile force.",n:"Positive inotropy = stronger contraction."},
    {id:"dromo",f:"Dromotropy",b:"A change in conduction speed, especially through the AV junction.",n:"Positive dromotropy = faster conduction."},
    {id:"symp",f:"Sympathetic effect on the heart",b:"Generally increases heart rate, AV conduction, and myocardial contractile force.",n:"Think fight-or-flight: faster and stronger."},
    {id:"para",f:"Parasympathetic / vagal effect",b:"Generally slows heart rate and AV nodal conduction.",n:"Strong vagal effects are especially important at the SA and AV nodes."},
    {id:"sa-rate",f:"SA node intrinsic rate",b:"About 60–100 beats/min in the lecture.",n:"Highest normal pacemaker rate → usually dominates."},
    {id:"av-rate",f:"AV junction intrinsic rate",b:"About 40–60 beats/min.",n:"A slower backup pacemaker."},
    {id:"vent-rate",f:"Ventricular / Purkinje backup rate",b:"About 20–40 beats/min.",n:"The slowest major intrinsic backup range."},
    {id:"path",f:"Normal cardiac conduction pathway",b:"SA node → atrial myocardium → AV node/junction → Bundle of His → right & left bundle branches → Purkinje fibres → ventricular myocardium.",n:"Say it in order until it is automatic."},
    {id:"avdelay",f:"Why does the AV node delay conduction?",b:"It gives the atria time to finish emptying into the ventricles before ventricular contraction.",n:"The delay improves filling sequence."},
    {id:"depol",f:"Depolarization",b:"Electrical activation of cardiac cells.",n:"Activation first; mechanical contraction follows through excitation-contraction coupling."},
    {id:"repol",f:"Repolarization",b:"Electrical recovery of cardiac cells after depolarization.",n:"The cell is resetting its electrical state."},
    {id:"absref",f:"Absolute refractory period",b:"A period when the cardiac cell cannot be re-stimulated to depolarize, regardless of stimulus strength.",n:"No effective second depolarization can be triggered here."},
    {id:"relref",f:"Relative refractory period",b:"A recovery period when a sufficiently strong stimulus may trigger another depolarization.",n:"The cell is partly recovered, not fully recovered."},
    {id:"paper",f:"ECG paper timing at 25 mm/s",b:"1 small box = 0.04 s • 1 large box = 0.20 s • 5 large boxes = 1 s • 30 large boxes = 6 s.",n:"Horizontal = time. Vertical = voltage."},
    {id:"ecg",f:"What does an ECG directly measure?",b:"Electrical voltage changes associated with cardiac depolarization and repolarization.",n:"An ECG does NOT directly prove a pulse, mechanical contraction, or adequate cardiac output."},
    {id:"qrs",f:"QRS complex",b:"Mainly represents ventricular depolarization.",n:"Atrial repolarization is usually hidden within it."},
    {id:"twave",f:"T wave",b:"Mainly represents ventricular repolarization.",n:"Ventricles electrically recover here."}
  ]
},
"pcth-w2":{
  classCode:"PCTH 308",week:"Week 2",title:"Sinus, Atrial, Junctional Rhythms & AV Blocks",sub:"Rhythm discrimination • SVT • WPW • AV blocks",
  test:"test.html?class=pcth&material=pcth-w2&length=10&start=1",
  cards:[
    {id:"framework",f:"The 10-step rhythm framework",b:"Patient/pulse → rate → regularity → P waves → P:QRS relation → PR behaviour → QRS width → mechanism → name the rhythm → closest mimic.",n:"Do not name the rhythm before collecting the evidence."},
    {id:"nsr",f:"Normal sinus rhythm",b:"60–100/min, regular, sinus P before every QRS, constant PR about 0.12–0.20 s, narrow QRS.",n:"All the sinus features are present at a normal rate."},
    {id:"sb",f:"Sinus bradycardia",b:"A sinus rhythm with a rate below 60/min.",n:"Same sinus morphology; the rate is the differentiator."},
    {id:"st",f:"Sinus tachycardia",b:"A sinus rhythm above 100/min.",n:"Ask what physiologic demand is driving the SA node faster."},
    {id:"sa",f:"Sinus arrhythmia",b:"Consistent sinus P waves with variable R–R intervals, commonly changing with respiration.",n:"The P waves stay sinus even though the spacing changes."},
    {id:"exit",f:"SA exit block",b:"The SA node generates an impulse but it fails to leave the node; the pause tends to equal a multiple of the baseline P–P interval.",n:"Timing is the clue: the pause fits the underlying clock."},
    {id:"arrest",f:"Sinus arrest",b:"The SA node fails to generate the expected impulse; the pause does not neatly equal a multiple of the prior P–P interval.",n:"Compare the pause to SA exit block."},
    {id:"pjc",f:"Premature junctional complex (PJC)",b:"A junctional beat that occurs earlier than expected.",n:"Premature = early. Escape = late/protective."},
    {id:"jeb",f:"Junctional escape beat",b:"A late protective beat that appears after a higher pacemaker fails to fire or conduct.",n:"Escape rhythms rescue the rate rather than interrupt it early."},
    {id:"jer",f:"Junctional escape rhythm",b:"A series of junctional beats, usually around 40–60/min.",n:"P waves may be inverted, hidden in QRS, after QRS, or absent from view."},
    {id:"ajr",f:"Accelerated junctional rhythm",b:"A junctional rhythm around 60–100/min.",n:"Origin is junctional; rate is faster than the usual junctional escape range."},
    {id:"jt",f:"Junctional tachycardia",b:"A junctional rhythm above 100/min.",n:"Rate separates it from accelerated junctional and junctional escape rhythm."},
    {id:"pac",f:"Premature atrial complex (PAC)",b:"An early beat from an ectopic atrial focus; the premature P wave may look different or be buried in the preceding T wave, with a usually narrow QRS.",n:"Find the early atrial impulse."},
    {id:"af",f:"Atrial fibrillation",b:"No organized P waves with an irregularly irregular ventricular rhythm.",n:"No repeating atrial organization + no repeating R–R pattern."},
    {id:"flutter",f:"Atrial flutter",b:"Organized rapid atrial re-entry, often around 250–350/min, with flutter waves; 2:1 conduction commonly produces a ventricular rate near 150/min.",n:"Organized atrial activity separates flutter from AF."},
    {id:"wap",f:"Wandering atrial pacemaker (WAP)",b:"At least 3 different P-wave morphologies with a rate under 100/min.",n:"Same multi-focus concept as MAT, but slower."},
    {id:"mat",f:"Multifocal atrial tachycardia (MAT)",b:"At least 3 different P-wave morphologies with a rate 100/min or faster.",n:"Rate is the main WAP-vs-MAT separator in this lecture."},
    {id:"avnrt",f:"AVNRT",b:"A supraventricular tachycardia caused by a re-entry circuit within or around the AV node.",n:"The circuit is centered on AV nodal pathways."},
    {id:"avrt",f:"AVRT",b:"A re-entry tachycardia that uses an accessory atrioventricular pathway outside the AV node.",n:"Accessory pathway = the big distinction from AVNRT."},
    {id:"wpw",f:"Classic manifest WPW pattern",b:"Short PR interval + delta wave + widened QRS.",n:"Pre-excitation allows ventricular activation to begin early."},
    {id:"first",f:"1st-degree AV block",b:"Every P wave conducts, but the PR interval is prolonged beyond 0.20 s and stays constant.",n:"Delayed conduction, not dropped conduction."},
    {id:"m1",f:"Mobitz I / Wenckebach",b:"PR interval progressively lengthens until a P wave is not followed by a QRS; then the cycle resets.",n:"Longer, longer, longer, drop."},
    {id:"m2",f:"Mobitz II",b:"Conducted beats have a constant PR interval, with intermittent non-conducted P waves / dropped QRS complexes.",n:"Constant PR, then sudden drop."},
    {id:"2to1",f:"Why can 2:1 AV block be hard to subtype?",b:"There are not enough consecutive conducted beats to determine whether the PR interval is progressively lengthening.",n:"A 2:1 pattern alone does not automatically prove Mobitz II."},
    {id:"third",f:"3rd-degree AV block",b:"Complete AV dissociation: atria and ventricles depolarize independently with no consistent P-to-QRS relationship.",n:"Two independent clocks."},
    {id:"pea",f:"Complete heart block vs PEA",b:"Complete heart block is an electrical conduction diagnosis. PEA is organized electrical activity with no palpable pulse.",n:"You cannot diagnose PEA from the ECG alone; you need the patient/pulse."},
    {id:"shock",f:"Shockable vs non-shockable arrest rhythms",b:"VF and pulseless VT are shockable. Asystole and PEA are non-shockable.",n:"VT with a pulse is not a cardiac-arrest rhythm."}
  ]
},
"phrm-sga":{
  classCode:"PHRM 208",week:"Week 1",title:"Supraglottic Airway Medical Directive",sub:"I-GEL • airway • ventilation",
  test:"test.html?class=phrm&material=phrm-sga&length=10&start=1",
  cards:[
    {id:"purpose",f:"Main purpose of an SGA",b:"Provide an airway conduit for ventilation above the glottic opening without passing a tube through the vocal cords.",n:"The Week 1 lecture uses the I-GEL as the main device example."},
    {id:"igel",f:"Primary SGA highlighted in the lecture",b:"I-GEL.",n:"Know the device, but also know the directive structure around its use."},
    {id:"attempts",f:"Attempt limit highlighted in the lecture",b:"Maximum of 2 attempts.",n:"Verify exact current wording in the ALS PCS / Companion Document."},
    {id:"confirm",f:"Why confirm SGA placement?",b:"To ensure the airway is functioning as intended and ventilation is effective, and to detect displacement or misplacement.",n:"Use the confirmation methods required by current standards."},
    {id:"capno",f:"Role of capnography after advanced airway placement",b:"Provides continuous information about exhaled CO₂ and supports ongoing assessment of ventilation and airway position.",n:"Also useful during resuscitation for changes in perfusion."},
    {id:"cpr",f:"CPR after an advanced airway is established",b:"Chest compressions can continue continuously while ventilations are delivered asynchronously.",n:"No routine pause in compressions for each breath."},
    {id:"adultvent",f:"Adult ventilation interval highlighted with advanced airway during CPR",b:"About 1 breath every 6 seconds.",n:"Avoid hyperventilation."},
    {id:"pedvent",f:"Pediatric ventilation interval highlighted with advanced airway during CPR",b:"About 1 breath every 3 seconds.",n:"Follow current standards for exact age/context wording."},
    {id:"volume",f:"How much volume should be delivered?",b:"Enough to produce visible chest rise.",n:"More is not better; avoid excessive ventilation."},
    {id:"source",f:"What controls if lecture notes and a current directive conflict?",b:"The current official ALS PCS / BLS PCS / Companion Document.",n:"Exact indications, contraindications, permissions and wording should come from the current source document."}
  ]
},
"phrm-mca":{
  classCode:"PHRM 208",week:"Week 1",title:"Medical Cardiac Arrest Medical Directive",sub:"VF/VT • PEA/asystole • CPR • DNR • TOR",
  test:"test.html?class=phrm&material=phrm-mca&length=10&start=1",
  cards:[
    {id:"shockable",f:"Shockable cardiac-arrest rhythms",b:"Ventricular fibrillation (VF) and pulseless ventricular tachycardia (pVT).",n:"The word pulseless matters for VT in cardiac arrest."},
    {id:"nonshock",f:"Non-shockable cardiac-arrest rhythms",b:"Asystole and pulseless electrical activity (PEA).",n:"Do not shock PEA or asystole."},
    {id:"pea",f:"Pulseless electrical activity (PEA)",b:"Organized electrical activity on the monitor with no palpable pulse.",n:"It is a clinical state, not one specific ECG morphology."},
    {id:"vtpulse",f:"VT with a palpable pulse",b:"Not cardiac arrest solely because the rhythm is VT.",n:"Management differs from pulseless VT."},
    {id:"ecg",f:"Role of ECG during cardiac arrest",b:"The monitor identifies electrical rhythm; pulse and perfusion determine whether mechanical circulation is present.",n:"Electrical organization does not guarantee output."},
    {id:"vent",f:"Ventilation technique emphasized in the lecture",b:"Deliver each breath over about 1 second and only enough volume for visible chest rise.",n:"Avoid hyperventilation."},
    {id:"hyper",f:"Why avoid hyperventilation during CPR?",b:"It can worsen hemodynamics and increase gastric insufflation / aspiration risk.",n:"Excessive ventilation can reduce venous return."},
    {id:"pedbrady",f:"Pediatric bradycardia threshold highlighted with cardiopulmonary compromise",b:"Heart rate below 60/min.",n:"First optimize airway, oxygenation and ventilation while addressing causes; follow current directive wording."},
    {id:"preg",f:"Pregnancy ≥20 weeks in cardiac arrest",b:"Lecture emphasizes high-quality CPR, early defibrillation when indicated, manual uterine displacement, and early transport consideration.",n:"Use current standards for exact procedural details."},
    {id:"opioid",f:"Suspected opioid-related cardiac arrest",b:"The lecture notes uncertain/conflicting evidence for naloxone during established arrest; standard resuscitation priorities remain central.",n:"Naloxone does not replace high-quality resuscitation."},
    {id:"etco2",f:"Sudden sustained rise in ETCO₂ during CPR",b:"May suggest improved perfusion and possible return of spontaneous circulation.",n:"Correlate with clinical assessment."},
    {id:"dnr",f:"What does DNR mean?",b:"It addresses resuscitation decisions in the appropriate legal context; it does not automatically mean 'do not treat.'",n:"Other indicated care may still be appropriate."},
    {id:"tor",f:"Where should exact TOR criteria come from?",b:"The current applicable ALS PCS / medical directive and Companion Document.",n:"Do not rely on a remembered one-line summary for exact criteria."},
    {id:"reversible",f:"Why search for reversible causes in PEA/asystole?",b:"A treatable mechanism may be driving the arrest, and correcting it can be essential to restoring circulation.",n:"Examples include hypoxia and tension pneumothorax."}
  ]
}
};

const ORDER=["pcth-w1","pcth-w2","phrm-sga","phrm-mca"];
const STORAGE="pcpLearnProgress.v1";
const $=s=>document.querySelector(s);

let deckId="pcth-w1";
let queue=[];
let index=0;
let flipped=false;
let known=new Set();
let learning=new Set();

function loadSaved(){
  try{return JSON.parse(localStorage.getItem(STORAGE)||"{}")}catch(e){return{}}
}
function save(){
  const all=loadSaved();
  all[deckId]={known:[...known],learning:[...learning],updated:new Date().toISOString()};
  localStorage.setItem(STORAGE,JSON.stringify(all));
}
function deck(){return DECKS[deckId]}
function esc(s){return String(s||"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]))}
function shuffle(a){const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b}

function renderDeckGrid(){
  $("#deckGrid").innerHTML=ORDER.map(id=>{
    const d=DECKS[id],active=id===deckId?" active":"";
    return '<button class="learn-deck-card'+active+'" data-deck="'+id+'"><span class="material-week">'+d.week+'</span><span class="code">'+d.classCode+'</span><b>'+esc(d.title)+'</b><small>'+esc(d.sub)+'</small><span class="deck-count">'+d.cards.length+' cards</span></button>';
  }).join("");
  document.querySelectorAll("[data-deck]").forEach(b=>b.onclick=()=>selectDeck(b.dataset.deck));
}

function selectDeck(id){
  if(!DECKS[id])return;
  deckId=id;
  const saved=loadSaved()[deckId]||{};
  known=new Set(saved.known||[]);
  learning=new Set(saved.learning||[]);
  queue=[...deck().cards];
  index=0;
  flipped=false;
  renderDeckGrid();
  render();
  history.replaceState(null,"","learn.html?deck="+encodeURIComponent(deckId));
}

function current(){return queue[index]}

function render(){
  const d=deck(),c=current();
  $("#learnCourse").textContent=d.classCode+" • "+d.week;
  $("#learnTitle").textContent=d.title;
  $("#learnMeta").textContent=d.cards.length+" cards • flip before you grade yourself";
  $("#cardTotal").textContent=queue.length;
  $("#knownCount").textContent=known.size;
  $("#learningCount").textContent=learning.size;
  $("#testDeck").href=d.test;

  if(!c){finishRound();return}
  $("#learnStage").classList.remove("hidden");
  $("#learnComplete").classList.add("hidden");
  $("#cardIndex").textContent=index+1;
  $("#frontText").textContent=c.f;
  $("#backText").textContent=c.b;
  $("#backNote").textContent=c.n||"";
  $("#flashcard").classList.toggle("flipped",flipped);
  $("#againBtn").disabled=!flipped;
  $("#knowBtn").disabled=!flipped;
  $("#learnProgressBar").style.width=((index)/Math.max(queue.length,1)*100)+"%";
  $("#prevCard").disabled=index===0;
  renderHistory();
}

function flip(){
  if(!current())return;
  flipped=!flipped;
  $("#flashcard").classList.toggle("flipped",flipped);
  $("#againBtn").disabled=!flipped;
  $("#knowBtn").disabled=!flipped;
}

function grade(type){
  if(!flipped||!current())return;
  const id=current().id;
  if(type==="known"){known.add(id);learning.delete(id)}
  else{learning.add(id);known.delete(id)}
  save();
  next();
}

function next(){
  if(index<queue.length-1){
    index++;
    flipped=false;
    render();
  }else finishRound();
}

function prev(){
  if(index<=0)return;
  index--;
  flipped=false;
  render();
}

function finishRound(){
  $("#learnStage").classList.add("hidden");
  const box=$("#learnComplete");
  box.classList.remove("hidden");
  const d=deck();
  const weak=d.cards.filter(c=>learning.has(c.id));
  const mastered=d.cards.filter(c=>known.has(c.id));
  const pct=Math.round(mastered.length/d.cards.length*100);
  box.innerHTML='<div class="card learn-finish"><div class="finish-score"><b>'+pct+'%</b><span>known</span></div><div><div class="code">'+d.classCode+' • '+d.week+'</div><h2>'+(weak.length?"Run the weak cards again.":"Deck clean. Move to testing.")+'</h2><p>'+mastered.length+' of '+d.cards.length+' concepts are marked Know it'+(weak.length?'. '+weak.length+' are still learning.':'.')+'</p><div class="actions">'+(weak.length?'<button class="btn primary" id="weakRound">Study '+weak.length+' weak cards</button>':'')+'<button class="btn" id="fullRound">Run full deck</button><a class="btn soft" href="'+d.test+'">Test this deck →</a></div></div></div>';
  if(weak.length)$("#weakRound").onclick=()=>{queue=shuffle(weak);index=0;flipped=false;$("#learnProgressBar").style.width="0%";render()};
  $("#fullRound").onclick=()=>{queue=shuffle([...d.cards]);index=0;flipped=false;render()};
  box.scrollIntoView({behavior:"smooth",block:"start"});
  renderHistory();
}

function reset(){
  known=new Set();learning=new Set();queue=[...deck().cards];index=0;flipped=false;save();render();
}
function renderHistory(){
  const d=deck();
  $("#learnHistory").innerHTML='<span><b>'+d.classCode+' '+d.week+':</b> '+known.size+' known • '+learning.size+' learning</span><span>'+d.cards.length+' total concepts</span>';
}

$("#flashcard").onclick=flip;
$("#againBtn").onclick=()=>grade("learning");
$("#knowBtn").onclick=()=>grade("known");
$("#prevCard").onclick=prev;
$("#shuffleDeck").onclick=()=>{queue=shuffle(queue);index=0;flipped=false;render()};
$("#resetDeck").onclick=reset;

document.addEventListener("keydown",e=>{
  const tag=(document.activeElement&&document.activeElement.tagName)||"";
  if(tag==="TEXTAREA"||tag==="INPUT")return;
  if(e.code==="Space"){e.preventDefault();flip()}
  else if(e.key==="1")grade("learning");
  else if(e.key==="2")grade("known");
  else if(e.key==="ArrowLeft")prev();
  else if(e.key==="ArrowRight"){if(flipped)next();else flip()}
});

const requested=new URLSearchParams(location.search).get("deck");
selectDeck(DECKS[requested]?requested:"pcth-w1");