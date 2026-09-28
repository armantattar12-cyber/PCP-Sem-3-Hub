const BANKS={
"pcth-w1":{
 classCode:"PCTH 308",week:"Week 1",title:"Introduction to ECG",source:"PCTH Week 1 lecture",questions:[
{id:"w1q1",q:"Which cardiac-cell property describes the ability to initiate an electrical impulse without stimulation from another source?",o:["Automaticity","Contractility","Conductivity","Refractoriness"],a:0,e:"Automaticity is the ability of a pacemaker cell to generate an impulse spontaneously."},
{id:"w1q2",q:"Which property describes a cardiac cell's ability to receive an electrical stimulus and transmit it to an adjacent cell?",o:["Excitability","Conductivity","Chronotropy","Contractility"],a:1,e:"Conductivity is the ability to conduct an impulse from cell to cell."},
{id:"w1q3",q:"What does positive chronotropy mean?",o:["Increased myocardial contractile force","Faster AV-junction conduction","Increased heart rate","Increased refractory period"],a:2,e:"Chronotropy refers to heart rate; positive chronotropy means the rate increases."},
{id:"w1q4",q:"What does positive inotropy mean?",o:["Increased myocardial contractile force","Increased heart rate","Faster repolarization only","Faster AV conduction only"],a:0,e:"Inotropy refers to myocardial contractility; positive inotropy means stronger contraction."},
{id:"w1q5",q:"What does dromotropy refer to?",o:["Electrical amplitude on ECG paper","Speed of conduction through the AV junction","Strength of ventricular contraction","Spontaneous pacemaker firing"],a:1,e:"Dromotropy describes conduction velocity, especially through the AV junction."},
{id:"w1q6",q:"Which sequence best represents normal cardiac conduction?",o:["AV node → SA node → Purkinje → His","SA node → atria → AV node → His → bundle branches → Purkinje","Purkinje → bundle branches → AV node → atria","SA node → Purkinje → atria → AV node"],a:1,e:"Normal activation begins in the SA node, spreads through the atria, crosses the AV junction, then travels through His, the bundle branches and Purkinje system."},
{id:"w1q7",q:"Why does the AV node normally delay conduction?",o:["To allow the ventricles to repolarize before atrial activation","To allow the atria time to empty into the ventricles before ventricular contraction","To increase QRS width","To prevent all sympathetic activity"],a:1,e:"The AV nodal delay helps atrial emptying occur before ventricular contraction."},
{id:"w1q8",q:"What intrinsic pacemaker rate range does the lecture give for the SA node?",o:["20–40/min","40–60/min","60–100/min","100–150/min"],a:2,e:"The SA node is the dominant pacemaker and is taught with an intrinsic rate of about 60–100/min."},
{id:"w1q9",q:"What intrinsic rate range does the lecture give for the AV junction?",o:["20–40/min","40–60/min","60–100/min","100–180/min"],a:1,e:"The AV junction is taught with an intrinsic backup rate of about 40–60/min."},
{id:"w1q10",q:"What intrinsic rate range does the lecture give for distal ventricular/Purkinje pacemakers?",o:["20–40/min","40–60/min","60–100/min","80–120/min"],a:0,e:"Distal ventricular/Purkinje backup pacemakers are taught at about 20–40/min."},
{id:"w1q11",q:"At the standard ECG paper speed of 25 mm/s, how much time does one small box represent?",o:["0.02 s","0.04 s","0.10 s","0.20 s"],a:1,e:"One small box is 0.04 seconds at 25 mm/s."},
{id:"w1q12",q:"At 25 mm/s, how much time does one large ECG box represent?",o:["0.04 s","0.10 s","0.20 s","1.00 s"],a:2,e:"One large box contains five small boxes, so it represents 5 × 0.04 = 0.20 seconds."},
{id:"w1q13",q:"Thirty large ECG boxes represent approximately how much time?",o:["3 seconds","6 seconds","10 seconds","30 seconds"],a:1,e:"Thirty large boxes equal about 6 seconds at 25 mm/s."},
{id:"w1q14",q:"What does the ECG directly record?",o:["Mechanical myocardial contraction","Cardiac output","Electrical voltage changes associated with cardiac depolarization","Coronary blood flow"],a:2,e:"The ECG records electrical activity. It does not directly measure mechanical contraction or cardiac output."},
{id:"w1q15",q:"If an electrical wave travels toward a lead's positive electrode, what deflection is generally produced?",o:["Positive/upward","Negative/downward","No deflection","Always biphasic"],a:0,e:"A wave moving toward the positive electrode generally produces a positive deflection."},
{id:"w1q16",q:"Which refractory period is characterized by cardiac cells being unable to respond to another stimulus regardless of stimulus strength?",o:["Relative refractory period","Absolute refractory period","Plateau period","Hyperpolarization period"],a:1,e:"During the absolute refractory period, the cell cannot be re-stimulated to depolarize."},
{id:"w1q17",q:"During which period can a sufficiently strong stimulus trigger depolarization even though the cell is still recovering?",o:["Absolute refractory period","Relative refractory period","Resting phase only","AV nodal delay"],a:1,e:"During the relative refractory period, a strong enough stimulus may trigger another depolarization."},
{id:"w1q18",q:"Which ECG component corresponds mainly to ventricular depolarization?",o:["P wave","PR segment","QRS complex","T wave"],a:2,e:"The QRS complex represents ventricular depolarization."},
{id:"w1q19",q:"Which ECG component corresponds mainly to ventricular repolarization?",o:["P wave","QRS complex","T wave","PR interval"],a:2,e:"The T wave represents ventricular repolarization."},
{id:"w1q20",q:"Which statement about an ECG is most accurate?",o:["An organized rhythm guarantees a pulse","The ECG directly measures stroke volume","Electrical activity must still be correlated with pulse and perfusion","A narrow QRS proves normal cardiac output"],a:2,e:"ECG electrical activity does not prove effective mechanical output; pulse and perfusion must be assessed clinically."}
]},
"pcth-w2":{
 classCode:"PCTH 308",week:"Week 2",title:"Sinus, Atrial, Junctional Rhythms & AV Blocks",source:"PCTH Week 2 lecture/review",questions:[
{id:"w2q1",q:"Which pattern is most consistent with normal sinus rhythm?",o:["Rate 60–100, regular, sinus P before each QRS, constant PR 0.12–0.20 s","Irregularly irregular, no organized P waves","Progressively lengthening PR followed by a dropped QRS","Regular wide QRS with no visible P waves at 35/min"],a:0,e:"Normal sinus rhythm is regular at 60–100/min with a sinus P before each QRS, constant normal PR and narrow QRS."},
{id:"w2q2",q:"Sinus bradycardia differs from normal sinus rhythm primarily by which feature?",o:["The P waves are absent","The rate is below 60/min","The PR must be prolonged","The QRS must be wide"],a:1,e:"Sinus bradycardia retains sinus features but the rate is below 60/min."},
{id:"w2q3",q:"What is the best first question when you identify sinus tachycardia?",o:["Which accessory pathway is present?","What physiologic stress or demand is driving the SA node faster?","Which AV block is present?","Why are all P waves absent?"],a:1,e:"Sinus tachycardia is often a response to demand, such as fever, pain, volume loss or adrenergic stimulation."},
{id:"w2q4",q:"Which finding best supports respiratory sinus arrhythmia rather than atrial fibrillation?",o:["No organized P waves","Uniform sinus P waves with cyclic R–R variation","Constantly wide QRS complexes","Progressive PR prolongation"],a:1,e:"Sinus arrhythmia keeps consistent sinus P waves while the R–R interval varies, often cyclically with respiration."},
{id:"w2q5",q:"What timing clue favors SA exit block over sinus arrest?",o:["The pause is typically a multiple of the baseline P–P interval","The QRS is always wide","The ventricular rate is always above 150","The PR progressively lengthens"],a:0,e:"In SA exit block, the SA node fires but the impulse does not exit; the pause often equals a multiple of the normal P–P cycle."},
{id:"w2q6",q:"What distinguishes a junctional escape beat from a premature junctional complex (PJC)?",o:["An escape beat occurs late after an expected higher pacemaker impulse fails; a PJC occurs early","An escape beat is always wide; a PJC is always narrow","A PJC always has an upright sinus P wave","An escape beat always occurs above 100/min"],a:0,e:"Escape beats are protective late beats; premature junctional complexes occur earlier than expected."},
{id:"w2q7",q:"What rate range is most typical for a junctional escape rhythm?",o:["20–40/min","40–60/min","60–100/min","150–250/min"],a:1,e:"A junctional escape rhythm is typically around 40–60/min."},
{id:"w2q8",q:"Which finding best characterizes a premature atrial complex (PAC)?",o:["A premature P wave that may have a different morphology, with a usually narrow QRS","No P waves and an irregularly irregular rhythm","A progressively lengthening PR interval","Complete AV dissociation"],a:0,e:"A PAC begins from an ectopic atrial focus and appears early; its P wave may look different or be buried in the prior T wave."},
{id:"w2q9",q:"Which rhythm is classically irregularly irregular with no organized P waves?",o:["Atrial flutter","Atrial fibrillation","Mobitz I","Junctional escape rhythm"],a:1,e:"Atrial fibrillation has chaotic atrial activity, absent organized P waves and an irregularly irregular ventricular response."},
{id:"w2q10",q:"Atrial flutter with 2:1 AV conduction commonly produces a ventricular rate near:",o:["50/min","75/min","100/min","150/min"],a:3,e:"Flutter is commonly around 300 atrial beats/min; 2:1 conduction often produces a ventricular rate near 150/min."},
{id:"w2q11",q:"Which feature is shared by wandering atrial pacemaker (WAP) and multifocal atrial tachycardia (MAT)?",o:["At least 3 different P-wave morphologies","No visible P waves","A delta wave","Progressive PR prolongation"],a:0,e:"Both WAP and MAT show at least three different P-wave morphologies; rate helps distinguish them."},
{id:"w2q12",q:"What primarily distinguishes MAT from WAP in the lecture?",o:["QRS width","Rate of 100/min or faster","Presence of a delta wave","Complete AV dissociation"],a:1,e:"WAP is under 100/min; MAT is 100/min or faster."},
{id:"w2q13",q:"AVNRT most directly involves which mechanism?",o:["Re-entry within/around the AV node","Multiple chaotic atrial foci","Complete failure of AV conduction","Ventricular ectopy from Purkinje fibres"],a:0,e:"AVNRT is an AV-nodal re-entry tachycardia involving functionally distinct pathways in or near the AV node."},
{id:"w2q14",q:"AVRT differs from AVNRT because AVRT uses:",o:["A ventricular escape focus","An accessory atrioventricular pathway outside the AV node","Only the SA node","No re-entry circuit"],a:1,e:"AVRT uses an accessory pathway outside the normal AV-nodal route as part of its re-entry circuit."},
{id:"w2q15",q:"Which ECG combination is classic for manifest Wolff-Parkinson-White (WPW) pre-excitation?",o:["Long PR, narrow QRS, no delta wave","Short PR, delta wave, widened QRS","Irregularly irregular rhythm with no P waves","Progressively longer PR then dropped QRS"],a:1,e:"Classic manifest WPW shows a short PR, delta wave and widened QRS from ventricular pre-excitation."},
{id:"w2q16",q:"Which finding defines first-degree AV block?",o:["Every P conducts with a constant PR longer than 0.20 s","Progressive PR lengthening until a QRS drops","Constant PR with intermittent dropped QRS complexes","No relationship between P waves and QRS complexes"],a:0,e:"First-degree AV block has 1:1 conduction but a prolonged, constant PR interval."},
{id:"w2q17",q:"Which pattern defines Mobitz I (Wenckebach)?",o:["Constant PR followed by random dropped beats","Progressive PR lengthening followed by a non-conducted P wave","No P-QRS relationship at all","Short PR with a delta wave"],a:1,e:"Mobitz I progressively lengthens the PR interval until one atrial impulse fails to conduct."},
{id:"w2q18",q:"Which pattern best describes Mobitz II?",o:["Progressively longer PR before every dropped beat","Constant PR intervals on conducted beats with intermittent non-conducted P waves","All P waves conduct with prolonged PR","No relationship between P waves and QRS complexes"],a:1,e:"Mobitz II shows constant PR intervals for conducted beats with sudden dropped QRS complexes."},
{id:"w2q19",q:"What is the defining relationship in third-degree AV block?",o:["Every P wave conducts after a long PR","Atria and ventricles depolarize independently with no consistent P-QRS relationship","Only every second P wave conducts with a constant PR","P waves are completely absent"],a:1,e:"Complete heart block creates AV dissociation: atrial and ventricular rhythms continue independently."},
{id:"w2q20",q:"Which statement about a 2:1 AV block is most accurate?",o:["It always proves Mobitz II","It always proves Mobitz I","A 2:1 pattern alone may not let you determine Mobitz I vs Mobitz II","It is the same as third-degree AV block"],a:2,e:"With 2:1 conduction, there are not enough consecutive conducted PR intervals to reliably assess progressive lengthening, so subtype may remain uncertain."}
]},
"phrm-sga":{
 classCode:"PHRM 208",week:"Week 1",title:"Supraglottic Airway Medical Directive",source:"PHRM Week 1 SGA lecture",questions:[
{id:"sgaq1",q:"Which supraglottic airway device is specifically highlighted in the Week 1 lecture?",o:["I-GEL","Nasopharyngeal airway","Endotracheal tube","Simple face mask"],a:0,e:"The Week 1 supraglottic airway lecture specifically highlights the I-GEL."},
{id:"sgaq2",q:"What maximum number of SGA attempts is highlighted in the lecture?",o:["1","2","3","Unlimited if ventilation is difficult"],a:1,e:"The lecture highlights a maximum of two attempts; exact current directive wording should still be checked in ALS PCS."},
{id:"sgaq3",q:"After an advanced airway is established during cardiac arrest, what is the key CPR change emphasized by the lecture?",o:["Stop compressions for every breath","Continue chest compressions while ventilations are delivered asynchronously","Switch to 15:2 for adults","Stop ventilations until ROSC"],a:1,e:"With an advanced airway established, compressions continue while breaths are given asynchronously at the appropriate rate."},
{id:"sgaq4",q:"What adult ventilation interval does the lecture highlight with an advanced airway during CPR?",o:["1 breath every 2 seconds","1 breath every 3 seconds","1 breath every 6 seconds","1 breath every 10 seconds"],a:2,e:"The lecture highlights approximately one breath every six seconds for adults."},
{id:"sgaq5",q:"What pediatric ventilation interval does the lecture highlight with an advanced airway during CPR?",o:["1 breath every 2 seconds","1 breath every 3 seconds","1 breath every 6 seconds","1 breath every 10 seconds"],a:1,e:"The lecture highlights approximately one breath every three seconds for pediatric patients."},
{id:"sgaq6",q:"Which approach best matches the lecture's ventilation guidance?",o:["Ventilate until visible chest rise and avoid hyperventilation","Give the largest tidal volume possible","Pause compressions for each breath after SGA placement","Ignore chest rise if oxygen saturation is unknown"],a:0,e:"The lecture emphasizes visible chest rise and avoiding excessive ventilation."},
{id:"sgaq7",q:"Why is confirming SGA placement important?",o:["To verify the airway is functioning as intended and ventilation is effective","To determine the patient's blood glucose","To diagnose an AV block","To estimate cardiac ejection fraction"],a:0,e:"Placement confirmation helps ensure effective ventilation and detect misplacement or displacement."},
{id:"sgaq8",q:"Which source should control if a summary and the exact current SGA directive wording differ?",o:["A classmate's notes","The current ALS PCS/Companion Document","An old flashcard","A generic internet summary"],a:1,e:"Exact indications, contraindications, attempt limits and considerations should be learned from the current official standard and Companion Document."},
{id:"sgaq9",q:"What is the main practical purpose of a supraglottic airway?",o:["Provide an airway route for ventilation above the glottic opening","Measure blood pressure continuously","Deliver defibrillation energy","Create vascular access"],a:0,e:"An SGA provides an airway conduit for ventilation without passing a tube through the vocal cords."},
{id:"sgaq10",q:"Which monitoring method can provide continuous information about ventilation after advanced-airway placement?",o:["Capnography","Blood glucose testing","Pupil size","Skin temperature alone"],a:0,e:"Capnography provides continuous information about exhaled carbon dioxide and is useful for ongoing airway/ventilation assessment."},
{id:"sgaq11",q:"Which statement best reflects how to study the SGA directive for exams?",o:["Memorize only the device name","Focus on exact directive wording, limitations and considerations as well as the concept","Ignore the Companion Document","Rely only on the summary page"],a:1,e:"Directive-heavy testing often depends on exact wording, contraindications, limits and considerations, so the current source documents matter."},
{id:"sgaq12",q:"If the lecture summary and a newer official directive conflict, what should you do?",o:["Use the lecture because it is easier to remember","Use whichever rule is less restrictive","Verify and follow the current official directive/standards","Average the two versions"],a:2,e:"Current official clinical standards take precedence over older educational summaries."}
]},
"phrm-mca":{
 classCode:"PHRM 208",week:"Week 1",title:"Medical Cardiac Arrest Medical Directive",source:"PHRM Week 1 cardiac-arrest lecture",questions:[
{id:"mcaq1",q:"Which pair consists of shockable cardiac-arrest rhythms?",o:["Asystole and PEA","VF and pulseless VT","PEA and pulseless VT","Asystole and VF"],a:1,e:"Ventricular fibrillation and pulseless ventricular tachycardia are the shockable arrest rhythms."},
{id:"mcaq2",q:"Which pair consists of non-shockable cardiac-arrest states?",o:["VF and pulseless VT","Asystole and PEA","VF and PEA","Pulseless VT and asystole"],a:1,e:"Asystole and PEA are non-shockable."},
{id:"mcaq3",q:"What is pulseless electrical activity (PEA)?",o:["Any wide-complex tachycardia","Organized electrical activity without a palpable pulse","A rhythm with no electrical activity at all","Another name for ventricular fibrillation"],a:1,e:"PEA is a clinical state in which organized electrical activity is present but no pulse is detected."},
{id:"mcaq4",q:"Which statement about PEA is most accurate?",o:["PEA is one specific ECG morphology","PEA is diagnosed from the ECG alone","PEA requires organized electrical activity plus absence of a pulse","PEA is always shockable"],a:2,e:"PEA requires a clinical pulse check; the ECG alone cannot establish it."},
{id:"mcaq5",q:"A patient has a regular wide-complex ventricular tachycardia and a palpable pulse. Which statement is correct?",o:["This is automatically pulseless VT","This is not cardiac arrest solely because the rhythm is VT","The rhythm must be treated as asystole","PEA is confirmed"],a:1,e:"VT with a pulse is not cardiac arrest; management differs from pulseless VT."},
{id:"mcaq6",q:"What ventilation technique is emphasized in the Week 1 cardiac-arrest lecture?",o:["Ventilate only until visible chest rise","Give rapid large breaths to maximize oxygen delivery","Deliver every breath over less than 0.25 seconds","Hyperventilate after every shock"],a:0,e:"The lecture emphasizes ventilating only to visible chest rise."},
{id:"mcaq7",q:"Approximately how long should each ventilation be delivered according to the lecture update?",o:["About 0.2 seconds","About 1 second","About 4 seconds","About 10 seconds"],a:1,e:"The lecture update recommends delivering each breath over approximately one second."},
{id:"mcaq8",q:"Why should hyperventilation be avoided during resuscitation?",o:["It can worsen hemodynamics and increase gastric insufflation/aspiration risk","It always causes ventricular fibrillation","It eliminates the need for compressions","It guarantees a low ETCO₂"],a:0,e:"Excessive ventilation can impair venous return/hemodynamics and increase gastric insufflation and aspiration risk."},
{id:"mcaq9",q:"In the pediatric symptomatic-bradycardia section, what heart-rate threshold is highlighted when cardiopulmonary compromise is present?",o:["Below 40/min","Below 50/min","Below 60/min","Below 100/min"],a:2,e:"The lecture highlights a heart rate below 60/min with cardiopulmonary compromise."},
{id:"mcaq10",q:"Before starting CPR for pediatric bradycardia with compromise, what intervention focus does the lecture emphasize first?",o:["Optimize airway, oxygenation and ventilation while correcting causes","Immediately give a shock regardless of rhythm","Delay treatment for a full two minutes","Give fluids before assessing breathing"],a:0,e:"Pediatric bradycardia is often driven by hypoxia, so effective airway, oxygenation and ventilation are central initial priorities while causes are addressed."},
{id:"mcaq11",q:"Which is a classic reversible cause to consider during cardiac arrest?",o:["Hypoxia","Chronic myopia","Seasonal allergies","Simple tension headache"],a:0,e:"Hypoxia is a major reversible cause of cardiac arrest."},
{id:"mcaq12",q:"Which condition is another potentially reversible cause of PEA/arrest?",o:["Tension pneumothorax","Stable sinus arrhythmia","First-degree AV block alone","Normal respiratory variation"],a:0,e:"Tension pneumothorax can cause obstructive shock and cardiac arrest and is a critical reversible cause."},
{id:"mcaq13",q:"For a pregnant patient at or beyond 20 weeks in cardiac arrest, what special action is highlighted in the lecture?",o:["Manual uterine displacement and early transport consideration","Avoid all defibrillation","Place the patient prone","Delay CPR until obstetric assessment"],a:0,e:"The lecture highlights high-quality CPR, manual uterine displacement and early transport consideration in later pregnancy."},
{id:"mcaq14",q:"Which statement best reflects the lecture's approach to suspected opioid-related cardiac arrest?",o:["Naloxone replaces standard cardiac-arrest care","Evidence for naloxone during established arrest is uncertain; standard resuscitation priorities remain central","Naloxone must always be given before CPR","Defibrillation is contraindicated"],a:1,e:"The lecture notes conflicting evidence and keeps high-quality standard resuscitation as the priority."},
{id:"mcaq15",q:"What does a sudden sustained rise in ETCO₂ during CPR potentially suggest?",o:["Return of spontaneous circulation","Guaranteed tube displacement","Atrial flutter","Hyperkalemia"],a:0,e:"A sudden rise in ETCO₂ can be a clue that perfusion has improved and ROSC may have occurred."},
{id:"mcaq16",q:"Which statement about DNR is most accurate?",o:["DNR always means no treatment of any kind","DNR concerns resuscitation decisions and is not the same as 'do not treat'","DNR only applies to traumatic arrest","DNR is the same as a termination-of-resuscitation order made by paramedics"],a:1,e:"A DNR addresses resuscitation in the appropriate legal context; it does not automatically prohibit other indicated care."},
{id:"mcaq17",q:"Where should you learn the exact current criteria for termination of resuscitation (TOR)?",o:["From a remembered one-line summary","From the current applicable ALS PCS/medical directive and Companion Document","From any old textbook","From the ECG rhythm alone"],a:1,e:"Exact TOR criteria are directive-specific and should come from the current official standards and Companion Document."},
{id:"mcaq18",q:"Which finding alone is insufficient to diagnose PEA?",o:["An organized rhythm on the monitor","An organized rhythm plus no palpable pulse","A clinical pulse check","Assessment of perfusion"],a:0,e:"An organized rhythm alone does not establish PEA; absence of a pulse must also be determined clinically."},
{id:"mcaq19",q:"What is the main purpose of searching for reversible causes during PEA/asystole?",o:["To identify a treatable mechanism that may be causing the arrest","To decide whether the ECG paper speed is correct","To classify all patients as VF","To avoid chest compressions"],a:0,e:"Correcting a reversible cause can be essential to restoring circulation in non-shockable arrest."},
{id:"mcaq20",q:"Which statement best summarizes the role of the ECG during cardiac arrest?",o:["The ECG replaces pulse assessment","The ECG identifies electrical rhythm, while pulse/perfusion determine whether mechanical circulation is present","The ECG measures cardiac output directly","A normal-looking rhythm guarantees ROSC"],a:1,e:"The monitor shows electrical activity; pulse and perfusion remain clinical assessments."}
]}
};

const materials={
pcth:[
 {id:"pcth-w1",week:"Week 1",title:"Introduction to ECG",sub:"Cells • action potentials • conduction • ECG basics"},
 {id:"pcth-w2",week:"Week 2",title:"Sinus, Atrial, Junctional Rhythms & AV Blocks",sub:"Rhythm recognition • SVT • WPW • AV blocks"},
 {id:"pcth-w2-full",week:"Week 2",title:"89-Question Week 2 Mastery Exam",sub:"Full dedicated mastery quiz",external:"https://pcth-308-week-2-mastery-quiz.lovable.app"}
],
phrm:[
 {id:"phrm-sga",week:"Week 1",title:"Supraglottic Airway Medical Directive",sub:"I-GEL • attempts • confirmation • ventilation"},
 {id:"phrm-mca",week:"Week 1",title:"Medical Cardiac Arrest Medical Directive",sub:"VF/VT • PEA/asystole • CPR • DNR • TOR"},
 {id:"phrm-mixed",week:"Week 1",title:"Week 1 Mixed Review",sub:"SGA + cardiac arrest together",mixed:["phrm-sga","phrm-mca"]}
]};

let selectedClass="pcth",selectedMaterial="pcth-w1",selectedLength=10,currentQuestions=[],currentKey="";
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s||"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]));
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function getBank(id){
 const mat=[...materials.pcth,...materials.phrm].find(x=>x.id===id);
 if(mat?.mixed){let qs=[];mat.mixed.forEach(k=>qs=qs.concat(BANKS[k].questions));return {classCode:"PHRM 208",week:"Week 1",title:"Week 1 Mixed Review",source:"PHRM Week 1",questions:qs}}
 return BANKS[id];
}
function renderMaterials(){
 const box=$("#materialGrid");box.innerHTML="";
 materials[selectedClass].forEach((m,i)=>{
  const b=document.createElement("button");b.className="material-card "+(m.id===selectedMaterial?"active":"");b.innerHTML='<span class="material-week">'+m.week+'</span><b>'+m.title+'</b><small>'+m.sub+'</small>'+(m.external?'<span class="external-tag">FULL EXAM ↗</span>':'');
  b.onclick=()=>{selectedMaterial=m.id;renderMaterials();syncLaunch()};box.appendChild(b)
 });
}
function syncLaunch(){
 const m=[...materials.pcth,...materials.phrm].find(x=>x.id===selectedMaterial);
 $("#launchTitle").textContent=(selectedClass==="pcth"?"PCTH 308":"PHRM 208")+" • "+m.week;
 if(m.external){$("#launchSub").textContent=m.title+" • opens the dedicated 89-question quiz";$("#lengthSection").classList.add("muted-section");$("#startBtn").textContent="Open Full Exam ↗"}
 else{const bank=getBank(selectedMaterial),n=selectedLength==="full"?bank.questions.length:Math.min(+selectedLength,bank.questions.length);$("#launchSub").textContent=m.title+" • "+n+" question"+(n===1?"":"s");$("#lengthSection").classList.remove("muted-section");$("#startBtn").textContent="Start Quiz →"}
}
$$("[data-class]").forEach(b=>b.onclick=()=>{selectedClass=b.dataset.class;selectedMaterial=materials[selectedClass][0].id;$$("[data-class]").forEach(x=>x.classList.toggle("active",x===b));renderMaterials();syncLaunch()});
$$(".length-card").forEach(b=>b.onclick=()=>{selectedLength=b.dataset.length;$$(".length-card").forEach(x=>x.classList.toggle("active",x===b));syncLaunch()});
$("#startBtn").onclick=()=>{
 const m=[...materials.pcth,...materials.phrm].find(x=>x.id===selectedMaterial);
 if(m.external){window.open(m.external,"_blank");return}
 startQuiz(selectedMaterial,selectedLength);
};
function startQuiz(key,len,wrongOnly){
 const bank=getBank(key);currentKey=key;
 let pool=wrongOnly||bank.questions;
 const count=len==="full"?pool.length:Math.min(+len,pool.length);
 currentQuestions=shuffle(pool).slice(0,count);
 $("#builder").classList.add("hidden");$("#results").classList.add("hidden");$("#quizArea").classList.remove("hidden");
 $("#quizCourse").textContent=bank.classCode+" • "+bank.week;$("#quizTitle").textContent=bank.title;$("#quizMeta").textContent=count+" questions • answer everything you can, then grade";
 $("#questionCount").textContent=count+" total";renderQuestions();window.scrollTo({top:0,behavior:"smooth"});
}
function renderQuestions(){
 $("#questions").innerHTML=currentQuestions.map((x,i)=>'<article class="quiz-question card" data-id="'+x.id+'"><div class="question-top"><span class="qnum">QUESTION '+(i+1)+'</span><span class="qstate">Unanswered</span></div><h3>'+esc(x.q)+'</h3><div class="options">'+x.o.map((o,j)=>'<label class="option"><input type="radio" name="'+x.id+'" value="'+j+'"><span class="option-letter">'+String.fromCharCode(65+j)+'</span><span>'+esc(o)+'</span></label>').join("")+'</div><div class="feedback hidden"></div></article>').join("");
 $$("#questions input").forEach(x=>x.addEventListener("change",updateProgress));updateProgress();
}
function updateProgress(){
 let n=0;currentQuestions.forEach(q=>{const card=document.querySelector('[data-id="'+q.id+'"]');const picked=card.querySelector("input:checked");if(picked){n++;card.querySelector(".qstate").textContent="Answered"}});
 $("#answeredCount").textContent=n+" answered";$("#progressBar").style.width=(currentQuestions.length?n/currentQuestions.length*100:0)+"%";
}
$("#gradeBtn").onclick=grade;
function grade(){
 let correct=0,wrong=[];
 currentQuestions.forEach(q=>{
  const card=document.querySelector('[data-id="'+q.id+'"]'), picked=card.querySelector("input:checked"), val=picked?+picked.value:-1;
  if(val===q.a)correct++;else wrong.push(q);
  card.classList.add("graded");
  card.querySelectorAll(".option").forEach((op,j)=>{op.classList.remove("correct","wrong");if(j===q.a)op.classList.add("correct");if(j===val&&val!==q.a)op.classList.add("wrong");op.querySelector("input").disabled=true});
  const fb=card.querySelector(".feedback");fb.classList.remove("hidden");fb.innerHTML='<b>'+(val===q.a?"Why it works":"Review this")+'</b><p>'+esc(q.e)+'</p>';
  card.querySelector(".qstate").textContent=val===q.a?"Correct":"Review";
 });
 const pct=Math.round(correct/currentQuestions.length*100);
 saveAttempt({key:currentKey,score:correct,total:currentQuestions.length,pct,wrong:wrong.map(x=>x.id),date:new Date().toISOString()});
 showResults(correct,pct,wrong);renderHistory();
}
function showResults(correct,pct,wrong){
 const bank=getBank(currentKey);
 $("#results").classList.remove("hidden");
 $("#results").innerHTML='<div class="result-card card"><div class="result-ring"><b>'+pct+'%</b><span>'+correct+'/'+currentQuestions.length+'</span></div><div class="result-copy"><div class="code">'+bank.classCode+' • '+bank.week+'</div><h2>'+gradeMessage(pct)+'</h2><p>'+(wrong.length?wrong.length+" question"+(wrong.length===1?" needs":"s need")+" another pass.":"No misses on this set. Move forward or run another shuffled set.")+'</p><div class="actions">'+(wrong.length?'<button class="btn primary" id="wrongBtn">Retest only '+wrong.length+' missed</button>':'')+'<button class="btn" id="againBtn">New shuffled set</button><button class="btn soft" id="builderBtn">Choose another quiz</button></div></div></div>';
 if(wrong.length)$("#wrongBtn").onclick=()=>startQuiz(currentKey,"full",wrong);
 $("#againBtn").onclick=()=>startQuiz(currentKey,selectedLength);
 $("#builderBtn").onclick=()=>{$("#quizArea").classList.add("hidden");$("#results").classList.add("hidden");$("#builder").classList.remove("hidden");window.scrollTo({top:0,behavior:"smooth"})};
 $("#results").scrollIntoView({behavior:"smooth"});
}
function gradeMessage(p){if(p>=90)return"Mastery-level run.";if(p>=80)return"Strong — tighten the misses.";if(p>=70)return"Solid base — review weak points.";return"Go back through the misses, then retest."}
function attempts(){try{return JSON.parse(localStorage.getItem("pcpQuizAttempts.v1")||"[]")}catch(e){return[]}}
function saveAttempt(a){const xs=attempts();xs.unshift(a);localStorage.setItem("pcpQuizAttempts.v1",JSON.stringify(xs.slice(0,30)))}
function renderHistory(){
 const xs=attempts();if(!xs.length){$("#historySummary").innerHTML='<span>No quiz attempts yet — start with a Standard 10.</span>';return}
 const a=xs[0],bank=getBank(a.key);$("#historySummary").innerHTML='<span><b>Last result:</b> '+bank.classCode+' • '+bank.title+'</span><span class="history-score">'+a.pct+'%</span>';
}
renderMaterials();syncLaunch();renderHistory();