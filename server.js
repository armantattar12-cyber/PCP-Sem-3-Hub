const express=require("express");
const app=express();
app.use(express.json({limit:"80kb"}));
const allowed=new Set(["https://pcp-sem-3-hub.onrender.com","http://localhost:3000","http://127.0.0.1:3000"]);
app.use((req,res,next)=>{
  const origin=req.headers.origin;
  if(origin&&allowed.has(origin)) res.setHeader("Access-Control-Allow-Origin",origin);
  res.setHeader("Vary","Origin");
  res.setHeader("Access-Control-Allow-Headers","Content-Type");
  res.setHeader("Access-Control-Allow-Methods","POST,OPTIONS,GET");
  if(req.method==="OPTIONS") return res.sendStatus(204);
  next();
});
app.get("/",(_,res)=>res.json({ok:true,service:"Arman"}));
app.get("/health",(_,res)=>res.json({ok:true,configured:Boolean(process.env.OPENAI_API_KEY),model:process.env.OPENAI_MODEL||null}));
app.post("/api/chat",async(req,res)=>{
  console.log("Arman chat request received | origin:",req.headers.origin||"none");
  try{
    if(!process.env.OPENAI_API_KEY){
      return res.status(503).json({error:"Arman is installed but needs one-time API activation."});
    }
    const {message,pageTitle,pageContext,history=[]}=req.body||{};
    if(!message||typeof message!=="string") return res.status(400).json({error:"Ask a question first."});
    const hist=Array.isArray(history)?history.slice(-10):[];
    const transcript=hist.map(x=>(x.role==="user"?"Student":"Tutor")+": "+String(x.text||"").slice(0,1800)).join("\n");
    const instructions=`You are Arman, an embedded study tutor for a Canadian Primary Care Paramedic Semester 3 study website.
Your job is to help the student learn actively, accurately, and efficiently.

STYLE:
- Be concise, clear, direct, and teach mechanism before memorization.
- Use headings/bullets only when they improve learning.
- Ask retrieval questions when the student asks to be quizzed. In quiz mode, ask ONE question at a time and do not reveal the answer before the student responds.
- When comparing ECG rhythms, explicitly identify the discriminating features.
- For clinical examples, keep them educational and clearly distinguish ECG interpretation from pulse/perfusion findings.

SOURCE PRIORITY:
1) Treat the PAGE CONTEXT supplied below as the course-material context for what the student is currently studying.
2) For exact Ontario BLS PCS / ALS PCS / medical-directive criteria, doses, contraindications, permissions, or wording: never invent details. If the exact wording is not present in PAGE CONTEXT, tell the student to verify the current official standard/Companion Document.
3) Correct obvious conceptual errors rather than repeating them blindly, and explain the correction briefly.

SAFETY:
This is a study tutor, not online medical control and not a substitute for current protocols or real-time patient care direction.
Do not claim the ECG alone proves mechanical output or a pulse.

PAGE: ${String(pageTitle||"").slice(0,300)}
PAGE CONTEXT:
${String(pageContext||"").slice(0,14000)}`;

    const input=(transcript?transcript+"\n":"")+"Student: "+message;
    const response=await fetch("https://api.openai.com/v1/responses",{
      method:"POST",
      headers:{"Authorization":"Bearer "+process.env.OPENAI_API_KEY,"Content-Type":"application/json"},
      body:JSON.stringify({
        model:process.env.OPENAI_MODEL||"gpt-6-luna",
        instructions,
        input,
        max_output_tokens:900
      })
    });
    const j=await response.json();
    if(!response.ok){
      console.error("OpenAI error",response.status,j?.error?.message||"unknown");
      return res.status(502).json({error:"Arman could not reach the AI service."});
    }
    let answer=j.output_text;
    if(!answer&&Array.isArray(j.output)){
      answer=j.output.flatMap(o=>o.content||[]).filter(c=>c.type==="output_text").map(c=>c.text).join("\n");
    }
    res.json({answer:answer||"I couldn't generate an answer."});
  }catch(e){console.error(e);res.status(500).json({error:"Arman hit a temporary error."})}
});
async function openAISelfTest(){
  if(!process.env.OPENAI_API_KEY){
    console.log("OpenAI self-test: skipped | key missing");
    return;
  }
  const model=process.env.OPENAI_MODEL||"gpt-5.6-luna";
  try{
    const r=await fetch("https://api.openai.com/v1/responses",{
      method:"POST",
      headers:{"Authorization":"Bearer "+process.env.OPENAI_API_KEY,"Content-Type":"application/json"},
      body:JSON.stringify({model,input:"Reply with exactly: OK",max_output_tokens:16})
    });
    const j=await r.json().catch(()=>({}));
    if(r.ok){
      console.log("OpenAI self-test: success | model:",model);
    }else{
      console.log("OpenAI self-test: failed | status:",r.status,"| type:",j?.error?.type||"unknown","| code:",j?.error?.code||"none","| message:",String(j?.error?.message||"unknown").slice(0,300));
    }
  }catch(e){
    console.log("OpenAI self-test: network error |",String(e?.message||e).slice(0,300));
  }
}
const port=process.env.PORT||10000;
app.listen(port,()=>{console.log("Arman listening on",port,"| OpenAI key configured:",Boolean(process.env.OPENAI_API_KEY),"| model:",process.env.OPENAI_MODEL||"default");openAISelfTest();});