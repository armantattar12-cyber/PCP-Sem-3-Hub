const express=require("express");
const app=express();

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

const modelName=()=>process.env.GEMINI_MODEL||"gemini-3.5-flash-lite";

app.get("/",(_,res)=>res.json({
  ok:true,
  service:"Arman",
  provider:"Gemini"
}));

app.get("/health",(_,res)=>res.json({
  ok:true,
  configured:Boolean(process.env.GEMINI_API_KEY),
  provider:"Gemini",
  model:modelName()
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
- PCLB 308 and RESC 108 do not yet have full quiz banks loaded. Never pretend they do.

When a student says they do not know what to do, act as a guide. Give them a short sequence based only on material that exists. For a new topic, prefer:
1) Learn Center flashcards until the student can recall the core concepts,
2) use the full course review when a concept needs deeper explanation,
3) active recall with you,
4) a Standard 10 quiz,
5) review missed questions,
6) use a larger mastery quiz when one exists.
For PCTH Week 2 specifically, the ideal path is Learn flashcards → full Week 2 review for weak concepts → active rhythm discrimination → Standard 10 → missed-question retest → 89-question mastery exam.
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

PAGE CONTEXT:
${String(pageContext||"").slice(0,14000)}`;

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

const port=process.env.PORT||10000;
app.listen(port,()=>{
  console.log(
    "Arman listening on",
    port,
    "| Gemini key configured:",
    Boolean(process.env.GEMINI_API_KEY),
    "| model:",
    modelName()
  );
});
