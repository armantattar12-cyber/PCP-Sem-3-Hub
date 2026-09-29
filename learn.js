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
},
"phrm-w2":{
  classCode:"PHRM 208",week:"Week 2",title:"Trauma, TXA & ROSC",sub:"Traumatic hemorrhage • trauma arrest • TOR • ROSC",
  test:"test.html?class=phrm&material=phrm-w2&length=10&start=1",
  cards:[
    {id:"ftt-priority",f:"Major trauma: what should happen on scene?",b:"Provide only valuable immediate treatment and initiate transport as soon as possible.",n:"The lecture highlights pneumothorax/tension pneumothorax and catastrophic bleeds as valuable scene treatment."},
    {id:"ftt-close-ed",f:"When does the FTT slide say to use the closest ED?",b:"If the airway cannot be secured or survival to the LTH/regional equivalent is unlikely, unless penetrating torso or head/neck trauma.",n:"The slide also says to consider Trauma TOR as per ALS PCS."},
    {id:"diamond",f:"Lethal diamond of death in trauma",b:"Acidosis • hypothermia • coagulopathy • hypocalcemia.",n:"These problems interact and worsen hemorrhage physiology."},
    {id:"acidosis",f:"How does hemorrhage drive acidosis?",b:"Blood loss/shock ↓ tissue oxygen delivery → anaerobic metabolism → lactic acid buildup → metabolic acidosis.",n:"The lecture says this further impairs cellular function and clotting factors/enzymes."},
    {id:"hypothermia",f:"Why is hypothermia dangerous in trauma?",b:"It impairs clotting enzymes and platelet function, worsening coagulopathy.",n:"The lecture states clotting decreases about 10% for every 1°C drop."},
    {id:"coagulopathy",f:"What perpetuates traumatic coagulopathy?",b:"Blood loss, dilution of clotting factors and hypothermia impair clot formation and increase ongoing hemorrhage.",n:"The cycle feeds back into more bleeding, hypothermia and acidosis."},
    {id:"hypocalcemia",f:"Lecture effects of hypocalcemia",b:"Decreased coagulation, decreased cardiac signaling/arrhythmia, and decreased smooth-muscle contraction/hypotension.",n:"The lecture links this to reduced ionized calcium."},
    {id:"normal-saline",f:"0.9% NaCl values highlighted in Week 2",b:"Na⁺ 154 mmol/L • Cl⁻ 154 mmol/L • pH 5.5 • room temperature.",n:"These are the values shown on the fluid-resuscitation slide."},
    {id:"crash2-purpose",f:"What did CRASH-2 study?",b:"Whether early TXA reduces death in trauma patients bleeding or at risk of significant bleeding.",n:"The lecture describes it as a large international randomized controlled trial."},
    {id:"crash2-pop",f:"CRASH-2 population in the lecture",b:"20,127 trauma patients • 274 hospitals • 40 countries.",n:"Patients were randomized to TXA or placebo."},
    {id:"crash2-time",f:"When was TXA most effective in the CRASH-2 slides?",b:"Early—best within 1 hour; benefit declined after 3 hours.",n:"The lecture emphasizes administration within 3 hours of injury."},
    {id:"txa-class",f:"TXA classification",b:"Antifibrinolytic agent.",n:"Other name shown: Cyklokapron."},
    {id:"txa-moa",f:"TXA mechanism of action",b:"Reversibly blocks lysine-binding sites on plasminogen, reducing fibrinolysis and stabilizing formed fibrin clot.",n:"The lecture also states this prevents plasminogen-to-plasmin activity involved in clot breakdown."},
    {id:"hemostasis1",f:"Hemostasis Stage 1",b:"Vasoconstriction.",n:"The damaged vessel decreases nitric oxide and increases endothelin, promoting local vasoconstriction."},
    {id:"hemostasis2",f:"Hemostasis Stage 2",b:"Primary hemostasis — platelet plug formation.",n:"Platelet adhesion/activation and aggregation build the plug."},
    {id:"hemostasis3",f:"Hemostasis Stage 3",b:"Secondary hemostasis — fibrin blood clot formation.",n:"Thrombin converts fibrinogen to fibrin; fibrin forms a stabilizing web."},
    {id:"hemostasis4",f:"Hemostasis Stage 4",b:"Fibrinolysis — dissolution/breakdown of the clot.",n:"t-PA converts plasminogen to plasmin; this is where TXA is emphasized."},
    {id:"txa-stage",f:"Where does TXA act in the lecture’s hemostasis sequence?",b:"Stage 4: fibrinolysis.",n:"TXA interferes with plasminogen binding and subsequent fibrin breakdown."},
    {id:"txa-ae",f:"Adverse effects of TXA listed in Week 2",b:"Hypotension with rapid administration, thromboembolic events, nausea/vomiting, dizziness, seizures, diarrhea.",n:"The lecture especially flags hypotension with rapid administration."},
    {id:"hem-indication",f:"Traumatic Hemorrhage MD indication",b:"Suspected hemorrhage due to trauma AND hemodynamic instability.",n:"Both parts are shown together in the lecture directive table."},
    {id:"hem-age",f:"Traumatic Hemorrhage MD age condition",b:"Age ≥16 years.",n:"This is the age condition shown for TXA in the lecture."},
    {id:"hem-hemo",f:"Hemodynamic condition highlighted for TXA",b:"HR >110 BPM or hypotension.",n:"Shown in the lecture’s Traumatic Hemorrhage directive table."},
    {id:"hem-contra-time",f:"TXA time contraindication",b:"Greater than 3 hours from injury to administration OR unknown time of injury.",n:"The lecture explains the later shift away from early hyperfibrinolysis."},
    {id:"hem-contra-head",f:"TXA head-injury contraindication",b:"Isolated head injury.",n:"The lecture lists this as a Traumatic Hemorrhage directive contraindication."},
    {id:"txa-dose",f:"TXA dose in the Week 2 directive",b:"1000 mg IV or IM • maximum single dose 1000 mg • maximum 1 dose.",n:"No repeat dosing interval is shown."},
    {id:"txa-iv",f:"How should IV TXA be administered?",b:"Slow IV injection over at least 5 minutes.",n:"Rapid administration can cause hypotension; IV route applies only when authorized for PCP Autonomous IV."},
    {id:"txa-im",f:"IM TXA practical point",b:"Lecture: vial is 1000 mg/10 mL; maximum 5 mL per vastus lateralis, so use both vastus lateralis sites.",n:"The lecture emphasizes SLOW PUSH."},
    {id:"txa-transport",f:"Should TXA delay trauma transport?",b:"No. Do not delay transport to obtain IV access or administer TXA; it can be done en route.",n:"Hemorrhage control and other reversible causes remain the priority."},
    {id:"txa-internal",f:"Can TXA be considered for internal traumatic bleeding?",b:"Yes—the lecture says it is not limited to obvious external bleeding.",n:"Example given: an MVC patient who is tachycardic/hypotensive."},
    {id:"txa-vsa",f:"TXA in traumatic cardiac arrest",b:"The lecture says TXA is not included in the current traumatic-arrest algorithm presented.",n:"Immediate correction of reversible causes is emphasized instead."},
    {id:"trauma-vsa-causes",f:"Most common reversible cause of Trauma VSA on the slide",b:"Uncontrolled hemorrhage — 48%.",n:"The same slide lists tension pneumothorax 13%, asphyxia 13%, cardiac tamponade 10%."},
    {id:"tca-indication",f:"Traumatic Cardiac Arrest MD indication",b:"Cardiac arrest secondary to severe blunt or penetrating trauma.",n:"This is the indication shown in the lecture directive table."},
    {id:"tca-cpr",f:"Traumatic arrest CPR condition",b:"CPR performed in 2-minute intervals.",n:"The directive slide lists age/HR/RR/SBP as N/A for CPR."},
    {id:"tca-defib",f:"When is manual defibrillation considered in traumatic arrest?",b:"For VF or pulseless VT when available and authorized.",n:"Other rhythms are listed as a contraindication to manual defibrillation."},
    {id:"tca-peddefib",f:"Trauma arrest defibrillation: ≥24 h to <8 y",b:"One defibrillation at 2 J/kg.",n:"The lecture table shows a maximum of 1 dose/defibrillation."},
    {id:"tor-core",f:"Trauma TOR: core rhythm/pulse conditions",b:"Age ≥16, no palpable pulse, no defibrillation delivered, then the asystole/PEA pathway depends on signs of life and transport time.",n:"This is a Mandatory Provincial Patch Point in the lecture."},
    {id:"tor-contra",f:"Trauma TOR contraindications highlighted",b:"Age <16, defibrillation delivered, signs of life since full extrication, specified PEA/transport situations, and certain penetrating trauma cases.",n:"Use the current directive for exact operational wording."},
    {id:"signs-life",f:"Signs of life listed in the trauma-arrest lecture",b:"Spontaneous movement, respiratory efforts, organized electrical activity on ECG, and reactive pupils.",n:"These are the signs explicitly listed on the clinical-considerations slide."},
    {id:"rosc-indication",f:"ROSC Medical Directive indication",b:"Patient with return of spontaneous circulation after resuscitation was initiated.",n:"This is the lecture directive indication."},
    {id:"rosc-o2",f:"ROSC oxygen saturation target",b:"SpO₂ 94–98%.",n:"The lecture says to optimize oxygenation while avoiding unnecessary 100% oxygen."},
    {id:"rosc-etco2",f:"ROSC ETCO₂ target",b:"30–40 mmHg.",n:"Avoid hyperventilation; continuous waveform capnography is preferred if available."},
    {id:"rosc-fluid",f:"ROSC 0.9% NaCl bolus",b:"10 mL/kg IV for hypotension when chest auscultation is clear; maximum 1000 mL.",n:"Fluid overload is listed as a contraindication."},
    {id:"rosc-reassess",f:"ROSC fluid reassessment intervals",b:"Age ≥2 to <12: every 100 mL • age ≥12: every 250 mL.",n:"Both groups have a maximum volume of 1000 mL in the lecture table."},
    {id:"rosc-map",f:"MAP targets highlighted after ROSC",b:"Adults ≥65 mmHg • pediatrics ≥55 mmHg.",n:"The lecture frames MAP as a global perfusion marker."},
    {id:"rosc-12lead",f:"Post-ROSC ECG action",b:"Consider 12-lead ECG acquisition and interpretation.",n:"The final checklist says approximately 10 minutes post ROSC."},
    {id:"rosc-checklist",f:"Core post-ROSC sequence",b:"Note ROSC time → repeat primary survey → monitor → ventilation/oxygenation → hemodynamics → 12-lead/STEMI assessment → reassess/transport.",n:"This follows the final Week 2 ROSC checklist."}
  ]
},
"quizlet-q1-combined":{
  classCode:"PCTH 308 + PHRM 208",week:"Quiz 1",title:"Quiz 1 Prep — PCTH / PHRM",sub:"49 cleaned Quizlet cards • directives • ECG • rhythms • ROSC • TXA • SGA",
  test:"test.html",
  cards:[
  {
    "id": "quiz1-01",
    "f": "ACLS UPDATE — Suspected Opioid Overdose",
    "b": "Not suggesting naloxone during suspected opioid-related cardiac arrest.",
    "n": "PHRM Quiz 1 • Imported from the pasted Quizlet set. Verify exact directive wording against current ALS PCS/BLS PCS/Companion."
  },
  {
    "id": "quiz1-02",
    "f": "ACLS UPDATE — CPR",
    "b": "Infant CPR: 1 hand OR two-thumb encircling technique. Adult/ped choking: alternate 5 back blows + 5 abdominal thrusts. Ventilate to visible chest rise over ~1 sec; avoid hyperventilation.",
    "n": "PHRM Quiz 1 • Imported from the pasted Quizlet set. Verify exact directive wording against current ALS PCS/BLS PCS/Companion."
  },
  {
    "id": "quiz1-03",
    "f": "ACLS UPDATE — Trauma/Pregnancy/Moving Vehicle",
    "b": "No TXA for traumatic VSA. Pregnancy >20 weeks: consider early transport, CPR, early defib, manual uterine displacement. Analyze/defib while moving only if safe and rhythm is clear.",
    "n": "PHRM Quiz 1 • Imported from the pasted Quizlet set. Verify exact directive wording against current ALS PCS/BLS PCS/Companion."
  },
  {
    "id": "quiz1-04",
    "f": "Pediatric Symptomatic Bradycardia",
    "b": "HR <60 with cardiopulmonary compromise: support airway, ventilation and oxygenation. If compromise persists despite effective oxygenation/ventilation, initiate CPR.",
    "n": "PHRM Quiz 1 • Imported from the pasted Quizlet set. Verify exact directive wording against current ALS PCS/BLS PCS/Companion."
  },
  {
    "id": "quiz1-05",
    "f": "Obviously Dead Standard",
    "b": "Decapitation, transection, visible decomposition/putrefaction OR absent vital signs with gross charring, open head/torso with gross outpouring, gross rigor mortis, or dependent lividity.",
    "n": "PHRM Quiz 1 • Imported from the pasted Quizlet set. Verify exact directive wording against current ALS PCS/BLS PCS/Companion."
  },
  {
    "id": "quiz1-06",
    "f": "Medical Cardiac Arrest Medical Directive",
    "b": "Indication: non-traumatic cardiac arrest. Primary considerations include pregnancy >20 weeks and known reversible cause unable to be addressed. Refractory VF/pVT: consider DSED or VCD; transport after 3 doses.",
    "n": "PHRM Quiz 1 • Imported from the pasted Quizlet set. Verify exact directive wording against current ALS PCS/BLS PCS/Companion."
  },
  {
    "id": "quiz1-07",
    "f": "Medical Cardiac Arrest — Manual Defibrillation",
    "b": "Indication: non-traumatic cardiac arrest. Conditions: age >24 h, altered LOA, VF or pulseless VT. Contraindications: none in pasted set.",
    "n": "PHRM Quiz 1 • Imported from the pasted Quizlet set. Verify exact directive wording against current ALS PCS/BLS PCS/Companion."
  },
  {
    "id": "quiz1-08",
    "f": "Medical Cardiac Arrest — Manual Defib Treatment",
    "b": "Age >24 h to <8 y: initial 2 J/kg, subsequent 4 J/kg, 2-min intervals. Age >8 y: as per RBHP/manufacturer.",
    "n": "PHRM Quiz 1 • Imported from the pasted Quizlet set. Verify exact directive wording against current ALS PCS/BLS PCS/Companion."
  },
  {
    "id": "quiz1-09",
    "f": "Medical Cardiac Arrest — Medical TOR",
    "b": "Age >16, arrest not witnessed by paramedic, no ROSC after 20 min, no defibrillation. Contra: pregnancy >20 wks, suspected hypothermia, airway obstruction, non-opioid overdose/toxicology.",
    "n": "PHRM Quiz 1 • Imported from the pasted Quizlet set. Verify exact directive wording against current ALS PCS/BLS PCS/Companion."
  },
  {
    "id": "quiz1-10",
    "f": "Medical Cardiac Arrest — Epinephrine",
    "b": "Non-traumatic arrest; age >24 h; altered; anaphylaxis suspected as causative event. Contraindication: allergy/sensitivity to epinephrine.",
    "n": "PHRM Quiz 1 • Imported from the pasted Quizlet set. Verify exact directive wording against current ALS PCS/BLS PCS/Companion."
  },
  {
    "id": "quiz1-11",
    "f": "Medical Cardiac Arrest — DSED/VCD",
    "b": "Age >18, non-traumatic VF/pulseless VT of presumed cardiac origin, after 3 consecutive standard shocks by paramedics/fire services.",
    "n": "PHRM Quiz 1 • Imported from the pasted Quizlet set. Verify exact directive wording against current ALS PCS/BLS PCS/Companion."
  },
  {
    "id": "quiz1-12",
    "f": "Trauma Cardiac Arrest — CPR",
    "b": "Cardiac arrest secondary to severe blunt or penetrating trauma. CPR in 2-min intervals. Contra: obviously dead per BLS PCS or meets DNR conditions.",
    "n": "PHRM Quiz 1 • Imported from the pasted Quizlet set. Verify exact directive wording against current ALS PCS/BLS PCS/Companion."
  },
  {
    "id": "quiz1-13",
    "f": "Trauma Cardiac Arrest — Manual Defibrillation",
    "b": "Severe blunt/penetrating trauma arrest; age >24 h; altered; VF or pulseless VT. Contra: rhythms other than VF/pVT.",
    "n": "PHRM Quiz 1 • Imported from the pasted Quizlet set. Verify exact directive wording against current ALS PCS/BLS PCS/Companion."
  },
  {
    "id": "quiz1-14",
    "f": "TXA — Traumatic Hemorrhage Directive",
    "b": "Suspected traumatic hemorrhage AND hemodynamic instability. Age ≥16; HR ≥110 or hypotensive. Contra: TXA allergy, >3 h/unknown injury time, isolated head injury.",
    "n": "PHRM Quiz 1 • Imported from the pasted Quizlet set. Verify exact directive wording against current ALS PCS/BLS PCS/Companion."
  },
  {
    "id": "quiz1-15",
    "f": "TXA Dose",
    "b": "1000 mg split into 2 doses (as written in the pasted Quizlet set).",
    "n": "PHRM Quiz 1 • Imported from the pasted Quizlet set. Verify exact directive wording against current ALS PCS/BLS PCS/Companion."
  },
  {
    "id": "quiz1-16",
    "f": "Reversible Causes — Early Transport Considerations",
    "b": "Hypoxia; hypo/hyperkalemia; hypo/hyperthermia; hypovolemia; hydrogen ion/acidosis; tension pneumothorax; tamponade; thrombosis; toxins.",
    "n": "PHRM Quiz 1 • Imported from the pasted Quizlet set. Verify exact directive wording against current ALS PCS/BLS PCS/Companion."
  },
  {
    "id": "quiz1-17",
    "f": "Trauma TOR — Conditions",
    "b": "Age >16; altered; no palpable pulses AND no defib AND no signs of life since full extrication OR signs of life with closest ED >30 min OR PEA with closest ED >30 min.",
    "n": "PHRM Quiz 1 • Imported from the pasted Quizlet set. Verify exact directive wording against current ALS PCS/BLS PCS/Companion."
  },
  {
    "id": "quiz1-18",
    "f": "Trauma TOR — Contraindications",
    "b": "Age <16; defib delivered; signs of life since full extrication; PEA + closest ED <30 min; penetrating torso/head/neck + lead trauma hospital <30 min.",
    "n": "PHRM Quiz 1 • Imported from the pasted Quizlet set. Verify exact directive wording against current ALS PCS/BLS PCS/Companion."
  },
  {
    "id": "quiz1-19",
    "f": "Supraglottic Airway Medical Directive",
    "b": "Need ventilatory assistance/airway control AND other airway management ineffective. Condition: absent gag. Contra: foreign-body obstruction, esophageal disease/varices, oropharyngeal trauma, caustic ingestion.",
    "n": "PHRM Quiz 1 • Imported from the pasted Quizlet set. Verify exact directive wording against current ALS PCS/BLS PCS/Companion."
  },
  {
    "id": "quiz1-20",
    "f": "ROSC Checklist",
    "b": "Note ROSC time; repeat primary survey; plan egress; monitoring; address ventilation (ETCO₂ 30–40), oxygen (SpO₂ 94–98), hemodynamics, STEMI/12-lead; reassess en route and update hospital.",
    "n": "PHRM Quiz 1 • Imported from the pasted Quizlet set. Verify exact directive wording against current ALS PCS/BLS PCS/Companion."
  },
  {
    "id": "quiz1-21",
    "f": "Sympathetic nervous system — ganglionic",
    "b": "Preganglionic fibre short; postganglionic fibre long; preganglionic neurotransmitter acetylcholine; postganglionic neurotransmitter norepinephrine.",
    "n": "PCTH Quiz 1 • Imported and cleaned from the pasted Quizlet set."
  },
  {
    "id": "quiz1-22",
    "f": "Parasympathetic nervous system — ganglionic",
    "b": "Preganglionic fibre long; postganglionic fibre short; pre- and postganglionic neurotransmitter acetylcholine.",
    "n": "PCTH Quiz 1 • Imported and cleaned from the pasted Quizlet set."
  },
  {
    "id": "quiz1-23",
    "f": "Chronotropic / Inotropic / Dromotropic",
    "b": "Chronotropic = change in heart rate. Inotropic = change in myocardial contractility. Dromotropic = conduction speed through the AV junction.",
    "n": "PCTH Quiz 1 • Imported and cleaned from the pasted Quizlet set."
  },
  {
    "id": "quiz1-24",
    "f": "Cardiac Action Potential — Phases 0–1",
    "b": "Phase 0: depolarization; Na+ rapidly enters. Phase 1: early repolarization; Na+ channels partly close and K+ leaves.",
    "n": "PCTH Quiz 1 • Imported and cleaned from the pasted Quizlet set."
  },
  {
    "id": "quiz1-25",
    "f": "Cardiac Action Potential — Phases 2–4",
    "b": "Phase 2: plateau; K+ leaves slowly, Ca++ enters slowly. Phase 3: rapid repolarization; K+ leaves quickly. Phase 4: return to resting; K+ closes and Ca++ is transported out/into SR.",
    "n": "PCTH Quiz 1 • Imported and cleaned from the pasted Quizlet set."
  },
  {
    "id": "quiz1-26",
    "f": "Conduction System",
    "b": "SA node 60–100 → AV node 40–60 → Bundle of His 40–60 → R/L bundle branches → Purkinje fibres 20–40.",
    "n": "PCTH Quiz 1 • Imported and cleaned from the pasted Quizlet set."
  },
  {
    "id": "quiz1-27",
    "f": "Limb & Augmented Leads",
    "b": "6 limb leads: I, II, III plus aVR, aVL, aVF. Pasted set: right arm electrode negative; left leg positive. aVR views from right arm, aVL left arm, aVF left leg.",
    "n": "PCTH Quiz 1 • Imported and cleaned from the pasted Quizlet set."
  },
  {
    "id": "quiz1-28",
    "f": "ECG Boxes",
    "b": "1 small box = 0.04 s. 1 large box = 0.20 s. 5 large = 1 s. 15 large = 3 s. 30 large = 6 s.",
    "n": "PCTH Quiz 1 • Imported and cleaned from the pasted Quizlet set."
  },
  {
    "id": "quiz1-29",
    "f": "Sinus Bradycardia",
    "b": "Like NSR but <60 bpm: regular, P present, PR normal, QRS narrow. Clue: slow NSR; common in athletes or sleep.",
    "n": "PCTH Quiz 1 • Imported and cleaned from the pasted Quizlet set."
  },
  {
    "id": "quiz1-30",
    "f": "Sinus Tachycardia",
    "b": "Like NSR but >100 bpm: regular, P present, narrow QRS. Clue: fast NSR; consider exercise, stress, fever.",
    "n": "PCTH Quiz 1 • Imported and cleaned from the pasted Quizlet set."
  },
  {
    "id": "quiz1-31",
    "f": "Junctional Escape Rhythm",
    "b": "Regular 40–60 bpm; P absent/inverted and may be before/after QRS; QRS narrow. Clue: AV-junction backup rhythm.",
    "n": "PCTH Quiz 1 • Imported and cleaned from the pasted Quizlet set."
  },
  {
    "id": "quiz1-32",
    "f": "Atrial Flutter",
    "b": "Saw-tooth flutter waves; often 2:1 conduction. Pasted set describes rhythm as regular or irregular depending on conduction.",
    "n": "PCTH Quiz 1 • Imported and cleaned from the pasted Quizlet set."
  },
  {
    "id": "quiz1-33",
    "f": "Atrial Fibrillation",
    "b": "Irregularly irregular; no distinct P waves; chaotic baseline; usually narrow QRS.",
    "n": "PCTH Quiz 1 • Imported and cleaned from the pasted Quizlet set."
  },
  {
    "id": "quiz1-34",
    "f": "Ventricular Fibrillation",
    "b": "Chaotic irregular waveform with no organized P/QRS/T and no pulse.",
    "n": "PCTH Quiz 1 • Imported and cleaned from the pasted Quizlet set."
  },
  {
    "id": "quiz1-35",
    "f": "Ventricular Tachycardia",
    "b": "Fast, usually regular, wide QRS; P may not be visible; pulse may be present or absent.",
    "n": "PCTH Quiz 1 • Imported and cleaned from the pasted Quizlet set."
  },
  {
    "id": "quiz1-36",
    "f": "Torsades de Pointes",
    "b": "Irregular polymorphic VT with QRS complexes twisting around the baseline; associated with prolonged QT.",
    "n": "PCTH Quiz 1 • Imported and cleaned from the pasted Quizlet set."
  },
  {
    "id": "quiz1-37",
    "f": "Asystole",
    "b": "Flatline / no electrical activity and no pulse; non-shockable arrest rhythm.",
    "n": "PCTH Quiz 1 • Imported and cleaned from the pasted Quizlet set."
  },
  {
    "id": "quiz1-38",
    "f": "Sinus Arrhythmia",
    "b": "Irregular sinus rhythm with P before QRS, normal PR, narrow QRS; commonly varies with respiration.",
    "n": "PCTH Quiz 1 • Imported and cleaned from the pasted Quizlet set."
  },
  {
    "id": "quiz1-39",
    "f": "1st-Degree AV Block",
    "b": "Regular rhythm; PR >0.20 s (>5 small boxes); every P conducts to QRS. Clue: 'P far from R.'",
    "n": "PCTH Quiz 1 • Imported and cleaned from the pasted Quizlet set."
  },
  {
    "id": "quiz1-40",
    "f": "2nd-Degree AV Block Type I",
    "b": "PR progressively lengthens until a QRS drops, then resets. Clue: 'longer, longer, drop.'",
    "n": "PCTH Quiz 1 • Imported and cleaned from the pasted Quizlet set."
  },
  {
    "id": "quiz1-41",
    "f": "2nd-Degree AV Block Type II",
    "b": "PR stays constant on conducted beats with intermittent dropped QRS complexes. Clue: 'same, same, drop.'",
    "n": "PCTH Quiz 1 • Imported and cleaned from the pasted Quizlet set."
  },
  {
    "id": "quiz1-42",
    "f": "3rd-Degree AV Block",
    "b": "P waves and QRS complexes each march regularly but independently; no consistent P-QRS relationship.",
    "n": "PCTH Quiz 1 • Imported and cleaned from the pasted Quizlet set."
  },
  {
    "id": "quiz1-43",
    "f": "Premature Ventricular Complex (PVC)",
    "b": "Early, wide/bizarre QRS (>0.12 s), usually no preceding P; may occur in bigeminy/trigeminy.",
    "n": "PCTH Quiz 1 • Imported and cleaned from the pasted Quizlet set."
  },
  {
    "id": "quiz1-44",
    "f": "Premature Atrial Complex (PAC)",
    "b": "Early abnormal P wave (may be flattened/notched); PR can vary; QRS usually normal/narrow.",
    "n": "PCTH Quiz 1 • Imported and cleaned from the pasted Quizlet set."
  },
  {
    "id": "quiz1-45",
    "f": "Premature Junctional Complex (PJC)",
    "b": "Early junctional beat; P absent/inverted and may be before/after QRS; QRS narrow.",
    "n": "PCTH Quiz 1 • Imported and cleaned from the pasted Quizlet set."
  },
  {
    "id": "quiz1-46",
    "f": "Atrial Pacing",
    "b": "Pacing spike precedes the P wave.",
    "n": "PCTH Quiz 1 • Imported and cleaned from the pasted Quizlet set."
  },
  {
    "id": "quiz1-47",
    "f": "Ventricular Pacing",
    "b": "Pacing spike precedes the QRS complex.",
    "n": "PCTH Quiz 1 • Imported and cleaned from the pasted Quizlet set."
  },
  {
    "id": "quiz1-48",
    "f": "Dual-Chamber Pacing",
    "b": "May show atrial pacing, ventricular pacing, or both.",
    "n": "PCTH Quiz 1 • Imported and cleaned from the pasted Quizlet set."
  },
  {
    "id": "quiz1-49",
    "f": "Idioventricular Rhythm (IVR)",
    "b": "Slow 20–40 bpm, wide QRS, no visible P waves. Clue: 'slow & low, P's don't show.'",
    "n": "PCTH Quiz 1 • Imported and cleaned from the pasted Quizlet set."
  }
]
}
};

const ORDER=["quizlet-q1-combined","pcth-w1","pcth-w2","phrm-sga","phrm-mca","phrm-w2"];
const TOPIC_CARDS={
  "pcth-w1":{
    cells:["auto","excite","conduct","contract","refract","chrono","ino","dromo","symp","para"],
    pacemakers:["sa-rate","av-rate","vent-rate"],
    conduction:["path","avdelay"],
    electrical:["depol","repol","absref","relref"],
    ecg:["paper","ecg","qrs","twave"]
  },
  "pcth-w2":{
    framework:["framework"],
    sinus:["nsr","sb","st","sa","exit","arrest"],
    junctional:["pjc","jeb","jer","ajr","jt"],
    atrial:["pac","af","flutter","wap","mat"],
    svt:["avnrt","avrt","wpw"],
    "av-blocks":["first","m1","m2","2to1","third"],
    arrest:["pea","shock"]
  },
  "phrm-sga":{
    airway:["purpose","igel","attempts","confirm","capno","source"],
    ventilation:["cpr","adultvent","pedvent","volume"]
  },
  "phrm-mca":{
    rhythms:["shockable","nonshock","pea","vtpulse","ecg"],
    cpr:["vent","hyper","etco2"],
    special:["pedbrady","preg","opioid"],
    directives:["dnr","tor","reversible"]
  },
  "phrm-w2":{
    trauma:["ftt-priority","ftt-close-ed","diamond","acidosis","hypothermia","coagulopathy","hypocalcemia","normal-saline"],
    txa:["crash2-purpose","crash2-pop","crash2-time","txa-class","txa-moa","hemostasis1","hemostasis2","hemostasis3","hemostasis4","txa-stage","txa-ae"],
    hemorrhage:["hem-indication","hem-age","hem-hemo","hem-contra-time","hem-contra-head","txa-dose","txa-iv","txa-im","txa-transport","txa-internal"],
    "trauma-arrest":["txa-vsa","trauma-vsa-causes","tca-indication","tca-cpr","tca-defib","tca-peddefib","signs-life"],
    "trauma-tor":["tor-core","tor-contra"],
    rosc:["rosc-indication","rosc-o2","rosc-etco2","rosc-fluid","rosc-reassess","rosc-map","rosc-12lead","rosc-checklist"]
  }
};
const TOPIC_LABELS={
  framework:"rhythm framework",sinus:"sinus rhythms",junctional:"junctional rhythms",
  atrial:"atrial rhythms",svt:"SVT / WPW","av-blocks":"AV blocks",arrest:"PEA / shockability",
  cells:"cardiac cell properties",pacemakers:"pacemaker hierarchy",conduction:"conduction & AV delay",
  electrical:"depolarization & refractory periods",ecg:"ECG fundamentals",airway:"SGA indications & placement",
  ventilation:"advanced-airway ventilation",rhythms:"arrest rhythm recognition",cpr:"CPR / ventilation",
  special:"special arrest considerations",directives:"DNR / TOR / reversible causes",trauma:"trauma physiology & priorities",txa:"TXA & hemostasis",hemorrhage:"Traumatic Hemorrhage directive","trauma-arrest":"Traumatic Cardiac Arrest","trauma-tor":"Trauma TOR",rosc:"ROSC care"
};
const STORAGE="pcpLearnProgress.v1";
const $=s=>document.querySelector(s);

let deckId="pcth-w1";
let queue=[];
let index=0;
let flipped=false;
let known=new Set();
let learning=new Set();
let activeTopic="";
let activeMode="";

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
function buildQueue(id){
  const all=[...DECKS[id].cards];
  const topicIds=(TOPIC_CARDS[id]||{})[activeTopic]||[];
  let base=topicIds.length?all.filter(c=>topicIds.includes(c.id)):all;
  if(activeMode==="weak"&&learning.size){
    const weak=base.filter(c=>learning.has(c.id));
    if(weak.length)base=weak;
  }
  return base.length?base:all;
}

function renderDeckGrid(){
  $("#deckGrid").innerHTML=ORDER.map(id=>{
    const d=DECKS[id],active=id===deckId?" active":"";
    return '<button class="learn-deck-card'+active+'" data-deck="'+id+'"><span class="material-week">'+d.week+'</span><span class="code">'+d.classCode+'</span><b>'+esc(d.title)+'</b><small>'+esc(d.sub)+'</small><span class="deck-count">'+d.cards.length+' cards</span></button>';
  }).join("");
  document.querySelectorAll("[data-deck]").forEach(b=>b.onclick=()=>selectDeck(b.dataset.deck));
}

function selectDeck(id,useLaunch=false){
  if(!DECKS[id])return;
  deckId=id;
  if(useLaunch){
    const p=new URLSearchParams(location.search);
    activeTopic=p.get("topic")||"";
    activeMode=p.get("mode")||"";
  }else{
    activeTopic="";
    activeMode="";
  }
  const saved=loadSaved()[deckId]||{};
  known=new Set(saved.known||[]);
  learning=new Set(saved.learning||[]);
  queue=buildQueue(deckId);
  index=0;
  flipped=false;
  renderDeckGrid();
  render();
  localStorage.setItem("pcpLearnLastDeck",deckId);
  if(!useLaunch)history.replaceState(null,"","learn.html?deck="+encodeURIComponent(deckId));
}

function current(){return queue[index]}

function render(){
  const d=deck(),c=current();
  $("#learnCourse").textContent=d.classCode+" • "+d.week;
  $("#learnTitle").textContent=d.title;
  const filterLabel=activeTopic?(TOPIC_LABELS[activeTopic]||activeTopic):"";
  $("#learnMeta").textContent=(filterLabel?queue.length+" focused cards • "+filterLabel:d.cards.length+" cards")+" • flip before you grade yourself";
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
selectDeck(DECKS[requested]?requested:"pcth-w1",true);