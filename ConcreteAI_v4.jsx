import { useState } from "react";

// ─── Brand & Config ──────────────────────────────────────────────
const CEK_B64  = "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";
const KMUTT_B64 = "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";

const API_BASE = (typeof process !== "undefined" && process.env?.REACT_APP_API_BASE)
  || "http://localhost:8000/v1";
const CO2F = { OPC:0.83,FA:0.04,BA:0.04,BFS:0.07,SF:0.02,MK:0.33,CC:0.05,SP:0.20,fine_agg:0.01,coarse_agg:0.01 };

const BINDER_META = {
  OPC:{name:"Ordinary Portland Cement",color:"#FA4616",co2:0.83},
  FA: {name:"Fly Ash (Class F)",        color:"#3B82F6",co2:0.04},
  BA: {name:"Bottom Ash",               color:"#8B5CF6",co2:0.04},
  BFS:{name:"GGBS / Blast Furnace Slag",color:"#10B981",co2:0.07},
  SF: {name:"Silica Fume",              color:"#EC4899",co2:0.02},
  MK: {name:"Metakaolin",               color:"#F59E0B",co2:0.33},
  CC: {name:"Calcium Carbonate",        color:"#94A3B8",co2:0.05},
};

const TYPES = [
  {id:"NC",   label:"Normal Concrete",          sub:"คอนกรีตทั่วไป",          icon:"🏗",  minMpa:15, maxMpa:60,  color:"#3B82F6", workMin:50,  workMax:200, workDef:100, workType:"slump"},
  {id:"HPC",  label:"High Performance Concrete",         sub:"คอนกรีตสมรรถนะสูง",      icon:"⚡",  minMpa:60, maxMpa:95,  color:"#FA4616", workMin:150, workMax:750, workDef:400, workType:"flow"},
  {id:"SCC",  label:"Self Compacting Concrete",          sub:"คอนกรีตเทได้ง่าย",       icon:"💧",  minMpa:20, maxMpa:100, color:"#8B5CF6", workMin:450, workMax:750, workDef:600, workType:"flow"},
  {id:"UHPC", label:"Ultra-High Performance Concrete",   sub:"UHPC — f′c > 100 MPa",   icon:"🔬",  minMpa:100,maxMpa:150, color:"#0D9488", workMin:150, workMax:400, workDef:200, workType:"flow"},
  {id:"GEO",  label:"Geopolymer Concrete / AAM",         sub:"Non-cement base",         icon:"🌿",  minMpa:5,  maxMpa:55,  color:"#22C55E", workMin:50,  workMax:200, workDef:80,  workType:"slump"},
  {id:"HSLWC",label:"High-Strength Lightweight Concrete",sub:"Lightweight aggregate",   icon:"🪶",  minMpa:20, maxMpa:55,  color:"#F59E0B", workMin:50,  workMax:180, workDef:100, workType:"slump"},
];

const RMSE_MAP = {NC:4.35,HPC:5.62,SCC:6.98,UHPC:4.30,GEO:12.60,HSLWC:5.0};
const R2_MAP   = {NC:0.782,HPC:0.739,SCC:0.927,UHPC:0.928,GEO:0.037,HSLWC:null};
const DEFAULT_BINDERS = {
  NC:{OPC:100}, HPC:{OPC:85,FA:15}, SCC:{OPC:75,FA:25},
  UHPC:{OPC:85,FA:15}, GEO:{FA:100}, HSLWC:{OPC:100}
};

const GUIDE_SLIDES = [
  { icon:"🧱", title:"① เลือกประเภทคอนกรีต",
    body:"แต่ละประเภทเหมาะกับงานต่างกัน: NC งานทั่วไป (15–60 MPa), HPC สมรรถนะสูง (60–95 MPa), SCC เทง่าย, UHPC กำลังอัด > 100 MPa, HSLWC น้ำหนักเบา",
    tip:"GEO (Geopolymer) ไม่ใช้ซีเมนต์ — ใช้ได้เฉพาะ Research Mode เท่านั้น" },
  { icon:"🏗", title:"② Normal Mode",
    body:"กรอกแค่ 3 ค่า: ประเภทคอนกรีต + f′c เป้าหมาย + Slump/Flow แล้วกดคำนวณ สามารถเพิ่ม Binder เสริมได้ 1 ตัว (optional) เช่น FA หรือ SF",
    tip:"เหมาะสำหรับผู้รับเหมาที่ต้องการผลเร็ว — AI ยืนยัน fc พร้อม ±RMSE confidence interval" },
  { icon:"🔬", title:"③ Research Mode",
    body:"กำหนด Binder ได้หลายตัว (สูงสุด 10) พร้อมสัดส่วน GEO ต้องกำหนด Alkaline Activator: NaOH Molarity + SS/SH Ratio ด้วย",
    tip:"sum ของ Binder ต้องรวมได้ 100% พอดี — ถ้าไม่ครบปุ่มคำนวณจะ disable" },
  { icon:"📊", title:"④ อ่านผลลัพธ์",
    body:"ผลแสดง proportion (kg/m³), W/B ratio, AI prediction ±RMSE พร้อม R² badge และ Carbon Footprint แยกตามวัสดุ บันทึกอัตโนมัติใน History tab",
    tip:"ต้องทำ trial mix ก่อนใช้งานจริงเสมอ — AI เป็นแนวทางประมาณ ไม่ใช่การรับประกัน" },
];

// ─── ACI Engine ──────────────────────────────────────────────
// Bug2 fix: accept workType; convert flow→equivalent slump (EFNARC 2002: flow ≈ slump×2.5)
// HPC is flow-only — force workType="flow" regardless of state
function aciWater(slump_mm, type, workType="slump"){
  const resolvedWorkType = type==="HPC" ? "flow" : workType; // HPC: flow-only lock
  const effectiveSlump = resolvedWorkType==="flow"
    ? Math.min(slump_mm/2.5, 200)   // cap at 200mm (ACI table upper bound)
    : slump_mm;
  const s=effectiveSlump/10;        // mm → cm
  let w=s<=5?175:s<=10?193:s<=15?202:s<=20?210:217;
  if(type==="HPC"||type==="SCC") w*=0.88;
  if(type==="UHPC") w*=0.72;
  if(type==="HSLWC") w*=1.05;
  return w;
}
function aciWC(fcr, type){
  // UHPC: ACI 239R-18 — w/b = 0.15–0.25 linear interpolation (fc 100–250 MPa)
  if(type==="UHPC") return Math.max(0.15, Math.min(0.25, 0.25 - ((fcr - 100) / 150) * 0.10));
  if(type==="HPC")  return Math.max(0.25,Math.min(0.42,38/fcr));
  if(type==="HSLWC")return Math.max(0.28,Math.min(0.50,38/fcr));
  const tbl=[[48,0.38],[41,0.44],[34,0.50],[28,0.56],[21,0.62],[17,0.67],[14,0.71]];
  for(let i=0;i<tbl.length-1;i++){
    const[f1,w1]=tbl[i],[f2,w2]=tbl[i+1];
    // Bug5 fix: renamed 't' → 'ratio' to avoid shadowing outer 't' (TYPES item)
    if(fcr>=f2&&fcr<=f1){const ratio=(fcr-f2)/(f1-f2);return w2+ratio*(w1-w2);}
  }
  return fcr>48?0.35:0.72;
}
// Bug2 fix: added workType param so aciWater can distinguish slump vs flow
function calcLocal(fc_mpa, slump_mm, type, binderPct, workType="slump"){
  const fcr = type==="UHPC"?fc_mpa*1.1+5:fc_mpa<35?fc_mpa+8.5:fc_mpa+10;
  const wc  = aciWC(fcr, type);
  const water = aciWater(slump_mm, type, workType);  // Bug2 fix: pass workType
  const tb  = Math.round(water/wc);
  const binders={};
  Object.entries(binderPct).forEach(([k,v])=>binders[k]=Math.round(tb*(v/100)));
  const sp  = type==="UHPC"?tb*0.03:type==="HPC"?tb*0.015:type==="SCC"?tb*0.02:0;
  const caRaw = type==="UHPC"?0:type==="HSLWC"?Math.round(600-(fc_mpa-20)*2):Math.round(800-(fc_mpa-25)*2.5);
  const coarseAgg = Math.max(0,caRaw);
  const useLWA = type==="HSLWC";
  const vol = (kg,sg)=>kg/sg;
  const used = Object.entries(binders).reduce((s,[,v])=>s+vol(v,3150),0)
    + vol(water,1000) + vol(coarseAgg,useLWA?1400:2700) + vol(sp,1050);
  const fineAgg = Math.max(0,Math.round((1-used)*(useLWA?1600:2650)));
  const co2 = Object.entries(binders).reduce((s,[k,v])=>s+(CO2F[k]||0)*v,0)
    + sp*CO2F.SP + fineAgg*CO2F.fine_agg + coarseAgg*CO2F.coarse_agg;
  const uw = Object.values(binders).reduce((a,b)=>a+b,0)+water+fineAgg+coarseAgg+sp;
  const noise=(Math.random()-0.5)*3;
  const rmse=RMSE_MAP[type]||5;
  const aiPred=Math.max(5,Math.round((fc_mpa*0.97+noise)*10)/10);
  return{ wc:Math.round(wc*100)/100,water:Math.round(water),tb,
    binders,sp:Math.round(sp*10)/10,fineAgg,coarseAgg,co2:Math.round(co2*10)/10,
    unitWeight:Math.round(uw),
    ai:{fc:aiPred,lower:Math.round((aiPred-rmse)*10)/10,upper:Math.round((aiPred+rmse)*10)/10,rmse,r2:R2_MAP[type]??0.8,source:"local"}
  };
}

// ─── API Call (v4: Bug1 fix normal-mode workability + Bug2 workType propagation) ──
async function callAPI(mode, type, fc, slump, workabilityType, binderPct, activator, secBinder, secRatio){
  const body = mode==="normal"
    ? { mode:"normal", concrete_type:type, target_fc:fc,
        workability_type: workabilityType,                        // Bug1 fix: tell API which type
        ...(workabilityType==="slump"                             // Bug1 fix: conditional field
            ? {target_slump:slump}
            : {target_flow:slump}),
        ...(secBinder&&secBinder!=="none"?{secondary_binder:{name:secBinder,ratio:secRatio/100}}:{})
      }
    : { mode:"research", concrete_type:type, target_fc:fc,
        workability_type:workabilityType,
        ...(workabilityType==="slump"?{target_slump:slump}:{target_flow:slump}),
        binders:Object.entries(binderPct).map(([name,pct])=>({name,ratio:pct/100})),
        ...(type==="GEO"&&activator?{admixtures:[
          {type:"NaOH",molarity_M:activator.naohM,kg_per_kg_binder:0.08},
          {type:"Na2SiO3",SS_SH_ratio:activator.ssSh,kg_per_kg_binder:0.20}
        ]}:{})
      };
  const r = await fetch(`${API_BASE}/mix/calculate`,{
    method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(body)
  });
  if(!r.ok) throw new Error(`API ${r.status}`);
  return r.json();
}

// ─── Styles ───────────────────────────────────────────────────
const S = `
@import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;700&family=Kanit:wght@400;600;700;800&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--red:#7A1A21;--red-dk:#5c1219;--red-md:#8B1E27;--orange:#FA4616;--orange-lt:#ff6235;
  --bg:#F8F9FA;--card:#fff;--border:#E2E6EA;--text:#1a1a2e;--text2:#555;--text3:#888;
  --r:14px;--sh:0 2px 12px rgba(0,0,0,0.07);}
body{font-family:'Sarabun',sans-serif;background:var(--bg);color:var(--text);min-height:100vh}
.app{max-width:480px;margin:0 auto;padding:0 0 48px}
.hdr{background:linear-gradient(150deg,#4a0e13 0%,var(--red-dk) 40%,#7A1A21 100%);
  padding:18px 18px 24px;position:relative;overflow:hidden}
.hdr::before{content:'';position:absolute;top:-60px;right:-60px;width:220px;height:220px;background:rgba(250,70,22,0.12);border-radius:50%}
.hdr::after{content:'';position:absolute;bottom:-30px;left:30%;width:120px;height:120px;background:rgba(255,255,255,0.04);border-radius:50%}
.logo-row{display:flex;align-items:center;gap:10px;margin-bottom:14px;position:relative;z-index:1}
.logo-img{height:44px;width:auto;border-radius:8px;object-fit:contain;background:rgba(255,255,255,0.95);padding:4px 8px}
.logo-sep{width:1px;height:36px;background:rgba(255,255,255,0.2);flex-shrink:0}
.hdr-txt h1{font-family:'Kanit',sans-serif;font-size:16px;font-weight:700;color:#fff;line-height:1.2}
.hdr-txt p{font-size:11px;color:rgba(255,255,255,0.65);margin-top:2px}
.hdr-bottom{position:relative;z-index:1;display:flex;align-items:center;justify-content:space-between}
.hdr-chip{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,0.1);
  border:1px solid rgba(255,255,255,0.18);border-radius:20px;padding:4px 12px;font-size:11px;color:rgba(255,255,255,0.8)}
.dot-live{width:7px;height:7px;border-radius:50%;background:#4ade80;box-shadow:0 0 6px #4ade80;flex-shrink:0}
.api-status{font-size:11px;display:flex;align-items:center;gap:5px}
.api-dot{width:7px;height:7px;border-radius:50%;flex-shrink:0}
.help-btn{background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.25);border-radius:50%;
  width:28px;height:28px;display:flex;align-items:center;justify-content:center;cursor:pointer;
  font-size:13px;font-weight:700;color:rgba(255,255,255,0.85);flex-shrink:0;transition:all 0.2s}
.help-btn:hover{background:rgba(255,255,255,0.25)}
.mode-wrap{padding:14px 16px 0}
.mode-bar{display:flex;background:#fff;border-radius:12px;padding:3px;gap:3px;border:1px solid var(--border);box-shadow:var(--sh)}
.mode-btn{flex:1;padding:9px 4px;border-radius:10px;border:none;cursor:pointer;font-size:12px;font-weight:600;
  font-family:'Kanit',sans-serif;color:var(--text3);background:transparent;transition:all 0.2s;white-space:nowrap}
.mode-btn.on{background:linear-gradient(135deg,var(--orange),var(--orange-lt));color:#fff;box-shadow:0 4px 14px rgba(250,70,22,0.35)}
.mode-btn.hist.on{background:linear-gradient(135deg,#1a1a2e,#3a3a5e);box-shadow:0 4px 14px rgba(26,26,46,0.35)}
.sec{padding:14px 16px 0}
.sec-lbl{font-family:'Kanit',sans-serif;font-size:11px;font-weight:700;color:var(--red);
  letter-spacing:0.8px;text-transform:uppercase;display:flex;align-items:center;gap:8px;margin-bottom:10px}
.sec-lbl::after{content:'';flex:1;height:1px;background:linear-gradient(to right,var(--border),transparent)}
.card{background:var(--card);border-radius:var(--r);box-shadow:var(--sh);padding:16px;border:1px solid var(--border)}
.type-grid{display:flex;flex-direction:column;gap:8px}
.tc{border:1.5px solid var(--border);border-radius:12px;padding:12px 14px;cursor:pointer;
  transition:all 0.22s;background:#fff;display:flex;align-items:center;gap:12px}
.tc.on{border-color:var(--orange);background:#FFF5F0;box-shadow:0 4px 18px rgba(250,70,22,0.15)}
.tc-icon{width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0}
.tc-info{flex:1}
.tc-name{font-family:'Kanit',sans-serif;font-size:13px;font-weight:700;color:var(--text)}
.tc-sub{font-size:11px;color:var(--text3);margin-top:1px}
.tc-r{text-align:right;flex-shrink:0}
.tc-range{font-size:12px;font-weight:700;font-family:'Kanit',sans-serif}
.tc-chk{width:20px;height:20px;border-radius:50%;border:1.5px solid var(--border);
  display:flex;align-items:center;justify-content:center;font-size:10px;margin-top:4px;margin-left:auto;transition:all 0.18s;font-weight:700}
.tc.on .tc-chk{background:var(--orange);border-color:var(--orange);color:#fff}
.geo-warn{font-size:11px;color:#92400E;background:#FFFBEB;border:1px solid #FDE68A;border-radius:8px;
  padding:8px 12px;margin-top:8px;display:flex;gap:8px;line-height:1.5}
.ig{margin-bottom:14px}.ig:last-child{margin-bottom:0}
.ig-lbl{font-size:13px;font-weight:600;color:var(--text2);margin-bottom:7px;display:flex;justify-content:space-between;align-items:center}
.unit-toggle{display:flex;background:#f0f0f0;border-radius:8px;padding:2px;gap:2px}
.u-btn{padding:5px 11px;border-radius:6px;border:none;cursor:pointer;font-size:12px;font-weight:700;
  font-family:'Kanit',sans-serif;color:var(--text3);background:transparent;transition:all 0.15s}
.u-btn.on{background:var(--orange);color:#fff;box-shadow:0 2px 8px rgba(250,70,22,0.35)}
.fc-row{display:flex;gap:8px}
.fc-inp{flex:1;padding:11px 14px;border-radius:10px;border:1.5px solid var(--border);font-size:18px;
  font-weight:700;font-family:'Kanit',sans-serif;color:var(--text);outline:none;transition:border 0.2s;background:#fafafa}
.fc-inp:focus{border-color:var(--orange);background:#fff}
.fc-inp.err{border-color:#E53E3E;background:#FFF5F5}
.hint{font-size:11px;color:var(--text3);margin-top:5px}.hint.warn{color:#E53E3E;font-weight:600}
.sl-row{display:flex;align-items:center;gap:10px}
.sl-val{min-width:58px;text-align:center;padding:8px 10px;border-radius:9px;
  background:var(--red);color:#fff;font-family:'Kanit',sans-serif;font-weight:700;font-size:14px}
input[type=range]{flex:1;-webkit-appearance:none;height:5px;border-radius:3px;outline:none;
  background:linear-gradient(to right,var(--orange) 0%,var(--orange) var(--pct,50%),#e0e0e0 var(--pct,50%),#e0e0e0 100%)}
input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:20px;height:20px;border-radius:50%;
  background:var(--orange);box-shadow:0 2px 8px rgba(250,70,22,0.4);cursor:pointer;border:2px solid #fff}
.wt-toggle{display:flex;gap:6px;margin-bottom:9px}
.wt-btn{flex:1;padding:8px;border-radius:9px;border:1.5px solid var(--border);font-size:12px;font-weight:600;
  font-family:'Kanit',sans-serif;cursor:pointer;background:#fafafa;color:var(--text2);transition:all 0.18s}
.wt-btn.on{border-color:var(--orange);color:var(--orange);background:#FFF5F0}
.b-row{display:flex;align-items:center;gap:8px;padding:10px 12px;background:#fff;
  border-radius:10px;border:1px solid var(--border);margin-bottom:7px}
.b-row.primary{border:1.5px solid var(--orange)}
.b-dot{width:10px;height:10px;border-radius:50%;flex-shrink:0}
.b-name{font-size:13px;font-weight:600;color:var(--text);flex:1}
.b-sub{font-size:11px;color:var(--text3)}
.b-pct{width:64px;padding:7px 8px;border-radius:7px;border:1px solid var(--border);font-size:14px;
  font-weight:700;font-family:'Kanit',sans-serif;text-align:right;color:var(--text);background:#fafafa;outline:none}
.b-pct:focus{border-color:var(--orange)}
.b-sum{font-size:12px;padding:7px 10px;border-radius:8px;margin-top:8px;display:flex;align-items:center;gap:6px;font-weight:600}
.b-sum.ok{background:#F0FDF4;color:#166534}.b-sum.err{background:#FFF5F5;color:#C53030}
.add-b{width:100%;padding:10px;border-radius:10px;border:1.5px dashed var(--border);font-size:13px;
  font-weight:600;font-family:'Kanit',sans-serif;cursor:pointer;background:#fafafa;
  color:var(--text3);display:flex;align-items:center;justify-content:center;gap:6px;transition:all 0.18s;margin-top:9px}
.add-b:hover{border-color:var(--orange);color:var(--orange)}
.picker{background:#fff;border-radius:10px;border:1px solid var(--border);padding:8px;display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}
.p-opt{padding:7px 12px;border-radius:8px;border:1px solid var(--border);font-size:12px;font-weight:600;
  cursor:pointer;font-family:'Kanit',sans-serif;background:#fafafa;color:var(--text2);transition:all 0.15s}
.p-opt:hover{border-color:var(--orange);color:var(--orange)}
.rm{background:none;border:none;cursor:pointer;color:var(--text3);font-size:16px;padding:2px 4px;border-radius:4px;line-height:1}
.rm:hover{color:#E53E3E}
.act-card{background:#FFFBEB;border-radius:10px;border:1px solid #FDE68A;padding:12px 14px;margin-top:12px}
.act-row{display:flex;align-items:center;gap:8px;margin-bottom:9px}.act-row:last-child{margin-bottom:0}
.act-lbl{font-size:12px;color:var(--text2);flex:1;font-weight:500}
.act-inp{width:72px;padding:6px 8px;border-radius:7px;border:1px solid var(--border);font-size:13px;
  font-weight:700;font-family:'Kanit',sans-serif;text-align:right;color:var(--text);background:#fff;outline:none}
.act-inp:focus{border-color:var(--orange)}.act-u{font-size:11px;color:var(--text3);min-width:40px}
.sec-b-grid{display:flex;flex-wrap:wrap;gap:7px}
.sb-btn{padding:8px 13px;border-radius:9px;border:1.5px solid var(--border);font-size:12px;font-weight:600;
  font-family:'Kanit',sans-serif;cursor:pointer;background:#fafafa;color:var(--text2);transition:all 0.18s}
.sb-btn.on{border-color:var(--orange);color:var(--orange);background:#FFF5F0}
.calc{width:100%;margin-top:8px;padding:16px;background:linear-gradient(135deg,var(--orange),var(--orange-lt));
  color:#fff;border:none;border-radius:14px;cursor:pointer;font-family:'Kanit',sans-serif;
  font-size:17px;font-weight:700;box-shadow:0 6px 24px rgba(250,70,22,0.38);
  transition:all 0.2s;display:flex;align-items:center;justify-content:center;gap:8px}
.calc:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 8px 32px rgba(250,70,22,0.5)}
.calc:disabled{opacity:0.45;cursor:not-allowed;transform:none}
.loading{display:flex;align-items:center;justify-content:center;gap:8px;
  padding:24px;color:var(--text3);font-size:14px;font-weight:600}
.spin{width:20px;height:20px;border:2px solid var(--border);border-top-color:var(--orange);
  border-radius:50%;animation:spin 0.8s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.res-wrap{padding:14px 16px 0;animation:fadeUp 0.4s ease}
@keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
.res-hdr{background:linear-gradient(135deg,var(--red-dk),var(--red-md));border-radius:14px;
  padding:14px 16px;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center}
.rh-l h3{font-family:'Kanit',sans-serif;font-size:15px;font-weight:700;color:#fff}
.rh-l p{font-size:11px;color:rgba(255,255,255,0.65);margin-top:3px}
.wc-box{background:rgba(255,255,255,0.12);border-radius:10px;padding:8px 14px;text-align:center}
.wc-v{font-family:'Kanit',sans-serif;font-size:22px;font-weight:700;color:#fff;line-height:1}
.wc-l{font-size:10px;color:rgba(255,255,255,0.65);margin-top:2px}
.mix-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-bottom:10px}
.mi{background:#fff;border-radius:11px;padding:12px 14px;border:1px solid var(--border);position:relative;overflow:hidden}
.mi::before{content:'';position:absolute;top:0;left:0;width:4px;height:100%;background:var(--c,var(--border))}
.mi.full{grid-column:1/-1}.mi.geo{background:#FFFBEB;border-color:#FDE68A}
.mi-n{font-size:12px;color:var(--text3);margin-bottom:2px}
.mi-v{font-family:'Kanit',sans-serif;font-size:22px;font-weight:700;color:var(--text);line-height:1}
.mi-u{font-size:11px;color:var(--text3);margin-top:2px}
.ai-box{background:#fff;border-radius:14px;border:1px solid var(--border);padding:14px 16px;margin-bottom:10px;box-shadow:var(--sh)}
.ai-hd{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}
.ai-title{font-size:13px;font-weight:700;color:var(--text);display:flex;align-items:center;gap:6px}
.ai-r2{font-size:11px;padding:3px 9px;border-radius:6px;font-weight:700}
.ai-r2.hi{background:#F0FDF4;color:#166534}.ai-r2.mid{background:#FFFBEB;color:#92400E}.ai-r2.lo{background:#FFF5F5;color:#C53030}
.ai-fc{display:flex;align-items:baseline;gap:8px;margin-bottom:4px}
.ai-fc-v{font-family:'Kanit',sans-serif;font-size:30px;font-weight:700;color:var(--text)}
.ai-fc-u{font-size:13px;color:var(--text2)}
.ai-range{font-size:12px;color:var(--text3);margin-bottom:12px}
.ai-bar{height:8px;background:#F0F0F0;border-radius:4px;position:relative;overflow:visible}
.ai-bar-fill{position:absolute;height:100%;border-radius:4px;background:#BBF7D0}
.ai-bar-pt{position:absolute;width:14px;height:14px;border-radius:50%;background:var(--orange);
  top:-3px;transform:translateX(-50%);box-shadow:0 2px 6px rgba(250,70,22,0.4)}
.ai-disc{font-size:11px;color:#92400E;background:#FFFBEB;border-radius:6px;
  padding:7px 10px;margin-top:10px;display:flex;gap:6px;align-items:flex-start;line-height:1.5}
.api-src{font-size:10px;color:var(--text3);margin-top:8px;text-align:right}
.co2-card{background:#fff;border-radius:14px;border:1px solid var(--border);overflow:hidden;margin-bottom:10px;box-shadow:var(--sh)}
.co2-hd{background:#1a1a2e;padding:11px 16px;display:flex;justify-content:space-between;align-items:center}
.co2-hd h4{font-family:'Kanit',sans-serif;font-size:14px;color:#fff;font-weight:700}
.co2-tot{font-family:'Kanit',sans-serif;font-size:13px;font-weight:700;color:#4ade80}
.co2-body{padding:12px 16px}
.co2-row{display:flex;align-items:center;gap:8px;margin-bottom:8px}.co2-row:last-child{margin-bottom:0}
.co2-l{font-size:12px;color:var(--text2);min-width:110px}
.co2-bw{flex:1;height:8px;background:#F0F0F0;border-radius:4px;overflow:hidden}
.co2-b{height:100%;border-radius:4px;background:linear-gradient(to right,var(--orange),var(--orange-lt))}
.co2-v{font-size:11px;font-weight:700;font-family:'Kanit',sans-serif;min-width:46px;text-align:right;color:var(--text2)}
.disc{margin:14px 16px 0;padding:12px 14px;background:#fff;border-radius:12px;
  border:1px solid var(--border);border-left:4px solid var(--red)}
.disc h5{font-family:'Kanit',sans-serif;font-size:11px;font-weight:700;color:var(--red);
  margin-bottom:8px;text-transform:uppercase;letter-spacing:0.5px}
.disc ol{padding-left:16px}
.disc li{font-size:11px;color:var(--text3);line-height:1.6;margin-bottom:3px}
.footer{text-align:center;padding:20px 16px 0;font-size:11px;color:var(--text3)}
.hist-empty{padding:48px 24px;text-align:center;color:var(--text3);font-size:13px;line-height:2}
.hist-item{background:#fff;border-radius:12px;border:1px solid var(--border);margin-bottom:10px;overflow:hidden;box-shadow:var(--sh)}
.hist-top{display:flex;align-items:center;gap:10px;padding:12px 14px;border-bottom:1px solid var(--border)}
.hist-dot{width:10px;height:10px;border-radius:50%;flex-shrink:0}
.hist-label{flex:1;font-family:'Kanit',sans-serif;font-size:13px;font-weight:700;color:var(--text)}
.hist-time{font-size:11px;color:var(--text3)}
.hist-meta{padding:7px 14px;font-size:11px;color:var(--text3);display:flex;gap:10px;flex-wrap:wrap}
.hist-badge{font-size:10px;font-weight:700;padding:2px 8px;border-radius:6px}
.hist-actions{display:flex;gap:6px;padding:10px 14px;background:#fafafa;border-top:1px solid var(--border)}
.h-btn{flex:1;padding:8px 4px;border-radius:8px;border:1.5px solid var(--border);font-size:11px;
  font-weight:600;font-family:'Kanit',sans-serif;cursor:pointer;background:#fff;
  color:var(--text2);transition:all 0.15s;text-align:center}
.h-btn:hover{border-color:var(--orange);color:var(--orange)}
.h-btn.cmp-on{border-color:#3B82F6;color:#1d4ed8;background:#EFF6FF}
.h-btn.del{color:#E53E3E}.h-btn.del:hover{border-color:#E53E3E;background:#FFF5F5}
.cmp-bar{background:#1a1a2e;padding:12px 16px;display:flex;align-items:center;
  justify-content:space-between;gap:10px;border-radius:12px;margin:0 16px 16px}
.cmp-bar-txt{font-size:12px;font-weight:600;color:rgba(255,255,255,0.8)}
.cmp-go{padding:10px 18px;border-radius:9px;background:var(--orange);color:#fff;border:none;
  font-size:13px;font-weight:700;font-family:'Kanit',sans-serif;cursor:pointer;
  box-shadow:0 4px 12px rgba(250,70,22,0.4)}
.cmp-go:disabled{opacity:0.4;cursor:not-allowed}
.cmp-back{padding:12px 16px;display:flex;align-items:center;gap:8px;
  font-size:13px;color:var(--text2);cursor:pointer;font-weight:600}
.cmp-back:hover{color:var(--orange)}
.cmp-head{display:grid;grid-template-columns:100px 1fr 1fr;background:var(--red-dk);
  border-radius:12px 12px 0 0;overflow:hidden}
.cmp-hcell{padding:10px 10px;font-size:12px;font-weight:700;color:rgba(255,255,255,0.9);font-family:'Kanit',sans-serif}
.cmp-hcell.a{background:rgba(59,130,246,0.3);text-align:center}
.cmp-hcell.b{background:rgba(250,70,22,0.3);text-align:center}
.cmp-row-r{display:grid;grid-template-columns:100px 1fr 1fr;background:#fff;border-bottom:1px solid var(--border);align-items:center}
.cmp-row-r:last-child{border-bottom:none;border-radius:0 0 12px 12px}
.cmp-key{padding:10px 10px;font-size:12px;color:var(--text2);background:#fafafa;font-weight:500;border-right:1px solid var(--border)}
.cmp-val{padding:10px 10px;font-size:13px;font-weight:700;font-family:'Kanit',sans-serif;color:var(--text);text-align:center}
.cmp-val.better{color:#166534;background:#F0FDF4}
.cmp-val.worse{color:var(--text3)}
.cmp-box{border-radius:12px;border:1px solid var(--border);overflow:hidden;box-shadow:var(--sh)}
.guide-ov{position:fixed;inset:0;background:rgba(0,0,0,0.55);
  display:flex;align-items:flex-end;justify-content:center;z-index:9999}
.guide-card{background:#fff;border-radius:20px 20px 0 0;padding:24px 20px 32px;
  width:100%;max-width:480px;animation:slideUp 0.3s ease}
@keyframes slideUp{from{transform:translateY(40px);opacity:0}to{transform:translateY(0);opacity:1}}
.guide-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:18px}
.guide-step{font-size:11px;color:var(--text3);font-weight:600;letter-spacing:0.5px;text-transform:uppercase}
.guide-cls{background:none;border:none;cursor:pointer;font-size:18px;color:var(--text3);
  padding:4px 8px;border-radius:6px;line-height:1}
.guide-cls:hover{background:#f0f0f0;color:var(--text)}
.guide-icon{font-size:44px;margin-bottom:12px;display:block;text-align:center}
.guide-title{font-family:'Kanit',sans-serif;font-size:18px;font-weight:700;color:var(--text);
  margin-bottom:10px;text-align:center}
.guide-body{font-size:13px;color:var(--text2);line-height:1.7;margin-bottom:14px;text-align:center}
.guide-tip{font-size:12px;color:#92400E;background:#FFFBEB;border-radius:8px;
  padding:10px 12px;margin-bottom:20px;line-height:1.6}
.guide-tip::before{content:"💡 "}
.guide-dots{display:flex;gap:8px;justify-content:center;margin-bottom:20px}
.gdot{width:8px;height:8px;border-radius:50%;background:var(--border);cursor:pointer;transition:all 0.2s}
.gdot.on{background:var(--orange);width:20px;border-radius:4px}
.guide-nav{display:flex;gap:10px}
.gnav-prev{flex:1;padding:12px;border-radius:12px;border:1.5px solid var(--border);
  font-size:14px;font-weight:600;font-family:'Kanit',sans-serif;cursor:pointer;
  background:#fafafa;color:var(--text2);transition:all 0.15s}
.gnav-prev:disabled{opacity:0.35;cursor:not-allowed}
.gnav-next{flex:2;padding:12px;border-radius:12px;border:none;
  background:linear-gradient(135deg,var(--orange),var(--orange-lt));
  color:#fff;font-size:14px;font-weight:700;font-family:'Kanit',sans-serif;cursor:pointer;
  box-shadow:0 4px 14px rgba(250,70,22,0.35)}
`;

// ─── Main Component ──────────────────────────────────────────
export default function App() {
  const [mode, setMode]             = useState("normal");
  const [activeView, setActiveView] = useState("calc"); // calc | history | compare
  const [selType, setSelType]       = useState("NC");
  const [unit, setUnit]             = useState("mpa");
  const [fc, setFc]                 = useState(25);
  const [slump, setSlump]           = useState(100);
  const [workType, setWorkType]     = useState("slump");
  const [binders, setBinders]       = useState([{id:"OPC",pct:100}]);
  const [showPicker, setShowPicker] = useState(false);
  const [secBinder, setSecBinder]   = useState("none");
  const [secRatio, setSecRatio]     = useState(20);
  const [activator, setActivator]   = useState({naohM:10, ssSh:2.5, actRatio:0.45});
  const [result, setResult]         = useState(null);
  const [loading, setLoading]       = useState(false);
  const [apiStatus, setApiStatus]   = useState("unknown");
  const [fcErr, setFcErr]           = useState(false);
  // ── new ──
  const [history, setHistory]         = useState([]);
  const [compareIds, setCompareIds]   = useState([]);
  const [showGuide, setShowGuide]     = useState(true); // auto-show first render
  const [guideSlide, setGuideSlide]   = useState(0);

  const t = TYPES.find(x=>x.id===selType);
  const toMpa  = v => unit==="mpa" ? v : v/10.197;
  const fromMpa = v => unit==="mpa" ? Math.round(v) : Math.round(v*10.197);
  const minD = unit==="mpa" ? t.minMpa : Math.round(t.minMpa*10.197);
  const maxD = unit==="mpa" ? t.maxMpa : Math.round(t.maxMpa*10.197);
  const slumpPct = ((slump - t.workMin)/(t.workMax - t.workMin))*100;

  // ── FIXED: Normal Mode hides GEO ──────────────────────────
  const visibleTypes = mode==="normal" ? TYPES.filter(x=>x.id!=="GEO") : TYPES;

  function handleTypeSelect(id) {
    const nt = TYPES.find(x=>x.id===id);
    setSelType(id);
    const mid = Math.round((nt.minMpa+nt.maxMpa)/2);
    setFc(unit==="mpa"?mid:Math.round(mid*10.197));
    setSlump(nt.workDef); setWorkType(nt.workType);
    setResult(null); setFcErr(false);
    setBinders(Object.entries(DEFAULT_BINDERS[id]||{OPC:100}).map(([id,pct])=>({id,pct})));
  }
  function handleUnit(u) {
    if(u===unit) return;
    const mpa = unit==="mpa" ? fc : fc/10.197;
    setUnit(u); setFc(u==="mpa"?Math.round(mpa):Math.round(mpa*10.197));
  }
  function validateFc(v) {
    const mpa = unit==="mpa" ? Number(v) : Number(v)/10.197;
    const ok = mpa >= t.minMpa && mpa <= t.maxMpa;
    setFcErr(!ok); return ok;
  }
  const binderSum = binders.reduce((a,b)=>a+Number(b.pct),0);
  const binderOk  = Math.abs(binderSum-100)<1;
  function setBPct(i, v){ setBinders(prev=>prev.map((b,j)=>j===i?{...b,pct:Number(v)}:b)); }
  function removeBinder(i){ setBinders(prev=>prev.filter((_,j)=>j!==i)); }
  function addBinder(id){
    const remaining = 100 - binderSum;
    setBinders(prev=>[...prev,{id,pct:Math.max(5,Math.round(remaining))}]);
    setShowPicker(false);
  }
  function getBinderPct() {
    if (mode==="research") {
      const r={};binders.forEach(b=>r[b.id]=Number(b.pct));return r;
    }
    const def = {...(DEFAULT_BINDERS[selType]||{OPC:100})};
    if (secBinder!=="none") {
      const base = 100-secRatio;
      Object.keys(def).forEach(k=>def[k]=def[k]*(base/100));
      def[secBinder]=(def[secBinder]||0)+secRatio;
    }
    return def;
  }

  // ── History management ─────────────────────────────────────
  function addToHistory(mixResult) {
    const bp = getBinderPct();
    const item = {
      id: Date.now().toString(),
      time: new Date().toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"}),
      type: selType,
      mode,
      fcMpa: toMpa(fc),
      slump,
      workType,
      binderPct: bp,
      binderState: mode==="research" ? [...binders] : [],
      secBinder: mode==="normal" ? secBinder : "none",
      secRatio: mode==="normal" ? secRatio : 20,
      label: `${selType} · f′c ${Math.round(toMpa(fc))} MPa`,
      binderLabel: Object.entries(bp).filter(([,v])=>v>0)
                    .map(([k,v])=>`${k} ${Math.round(v)}%`).join(", "),
      result: mixResult,
    };
    setHistory(prev => [item,...prev].slice(0,10));
  }
  function removeFromHistory(id) {
    setHistory(prev=>prev.filter(x=>x.id!==id));
    setCompareIds(prev=>prev.filter(x=>x!==id));
  }
  function loadFromHistory(item) {
    setSelType(item.type); setMode(item.mode);
    setFc(unit==="mpa"?Math.round(item.fcMpa):Math.round(item.fcMpa*10.197));
    setSlump(item.slump); setWorkType(item.workType);
    if(item.mode==="research") {
      setBinders(item.binderState?.length ? item.binderState
        : Object.entries(DEFAULT_BINDERS[item.type]||{OPC:100}).map(([id,pct])=>({id,pct})));
    } else {
      setSecBinder(item.secBinder||"none"); setSecRatio(item.secRatio||20);
    }
    setResult(item.result); setFcErr(false); setActiveView("calc");
  }
  function toggleCompare(id) {
    setCompareIds(prev => {
      if(prev.includes(id)) return prev.filter(x=>x!==id);
      if(prev.length>=2) return [prev[1],id];
      return [...prev,id];
    });
  }

  // ── Calculate ──────────────────────────────────────────────
  async function calculate() {
    const mpa = toMpa(fc);
    if (!validateFc(fc)) return;
    if (mode==="research" && !binderOk) return;
    setLoading(true); setResult(null);
    const bp = getBinderPct();
    let res;
    if (selType==="HSLWC") {
      // HSLWC: local ACI only, no AI prediction
      res = {...calcLocal(mpa,slump,selType,bp,workType), _src:"local", _noAI:true}; // Bug2 fix
      setApiStatus("unknown");
    } else {
      try {
        const apiRes = await callAPI(mode,selType,mpa,slump,workType,bp,activator,secBinder,secRatio);
        setApiStatus("ok");
        const local = calcLocal(mpa,slump,selType,bp,workType); // Bug2 fix
        // Smart merge: use API proportions if available, keep local as fallback
        res = {
          ...local,
          ...apiRes,
          ai: apiRes.ai_prediction ? {
            fc:     apiRes.ai_prediction.fc_28d,
            lower:  apiRes.ai_prediction.fc_lower,
            upper:  apiRes.ai_prediction.fc_upper,
            rmse:   apiRes.ai_prediction.rmse_used,
            r2:     R2_MAP[selType] ?? 0.8,
            source: "api"
          } : local.ai,
          _src:"api"
        };
      } catch(e) {
        setApiStatus("err");
        res = {...calcLocal(mpa,slump,selType,bp,workType), _src:"local"}; // Bug2 fix
      }
    }
    setLoading(false); setResult(res);
    addToHistory(res);
  }

  const canCalc = !fcErr && (mode==="normal" || binderOk);
  const usedIds = binders.map(b=>b.id);
  const availBinders = Object.keys(BINDER_META).filter(id=>{
    if(selType==="GEO"&&id==="OPC") return false;
    return !usedIds.includes(id);
  });

  // ── Build result display ───────────────────────────────────
  function buildMixItems(r) {
    const bp = getBinderPct();
    const items = [];
    const tb = r.tb || r.total_binder_kg;
    Object.entries(bp).forEach(([id,pct])=>{
      const kg = r.binders?.[id] ?? r.proportions_kg_m3?.[id] ?? Math.round((tb||400)*(pct/100));
      if(kg>0) items.push({n:`${id} (${Math.round(pct)}%)`,v:Math.round(kg),c:BINDER_META[id]?.color||"#888"});
    });
    const w=r.water||r.proportions_kg_m3?.water||0;
    const fa=r.fineAgg||r.proportions_kg_m3?.fine_agg||0;
    const ca=r.coarseAgg||r.proportions_kg_m3?.coarse_agg||0;
    const sp=r.sp||r.proportions_kg_m3?.SP||0;
    if(w) items.push({n:"น้ำ",v:Math.round(w),c:"#3B82F6"});
    if(ca) items.push({n:selType==="HSLWC"?"มวลรวมหยาบ (LWA)":"มวลรวมหยาบ",v:Math.round(ca),c:"#64748B"});
    items.push({n:"ทราย / มวลรวมละเอียด",v:Math.round(fa),c:"#22C55E",full:true});
    if(sp>0) items.push({n:"Superplasticizer",v:sp,c:"#A855F7"});
    if(selType==="GEO"&&mode==="research"){
      const actKg=Math.round((tb||400)*activator.actRatio);
      items.push({n:`NaOH ${activator.naohM}M + Na₂SiO₃ (SS/SH=${activator.ssSh})`,v:actKg,c:"#F59E0B",full:true,geo:true});
    }
    return items;
  }
  function buildCo2Items(r) {
    const bp = getBinderPct();
    const tb = r.tb||r.total_binder_kg||400;
    const out=[];
    Object.entries(bp).forEach(([id,pct])=>{
      const kg=r.binders?.[id] ?? Math.round(tb*(pct/100)); // Bug3 fix: ?? not ||
      const c=Math.round(kg*(CO2F[id]||0)*10)/10;
      if(c>0) out.push({l:id,v:c});
    });
    const sp=r.sp||r.proportions_kg_m3?.SP||0;
    const fa=r.fineAgg||r.proportions_kg_m3?.fine_agg||0;
    const ca=r.coarseAgg||r.proportions_kg_m3?.coarse_agg||0;
    if(sp>0) out.push({l:"SP",v:Math.round(sp*CO2F.SP*10)/10});
    const aggCo2=Math.round((fa*0.01+ca*0.01)*10)/10;
    if(aggCo2>0) out.push({l:"มวลรวม",v:aggCo2});
    return out.filter(x=>x.v>0);
  }

  // ── AI display values ──────────────────────────────────────
  const aiData = result ? (result.ai || {}) : {};
  const aiFc   = aiData.fc || 0;
  const aiLo   = aiData.lower || 0;
  const aiHi   = aiData.upper || 0;
  const aiRmse = aiData.rmse || RMSE_MAP[selType]||5;
  const aiR2   = aiData.r2 ?? R2_MAP[selType] ?? 0.8;
  const aiSrc  = result?._src||"local";
  const noAI   = result?._noAI||false;
  const r2cls  = aiR2>=0.9?"hi":aiR2>=0.7?"mid":"lo";
  const maxFc=200;
  const barL  = Math.max(0,Math.min(100,(aiLo/maxFc)*100));
  const barW  = Math.max(3,Math.min(100,(aiHi/maxFc)*100)-barL);
  const barPt = Math.min(99,(aiFc/maxFc)*100);
  const co2Total = result ? (result.co2||result.CO2_kg_per_m3||0) : 0;
  const wcVal    = result ? (result.wc||result.w_b_ratio||0) : 0;
  const uwVal    = result ? (result.unitWeight||result.unit_weight||0) : 0;
  const fcMpa    = toMpa(fc);

  // ── Compare data ───────────────────────────────────────────
  const cmpItems = history.filter(h=>compareIds.includes(h.id));
  function cmpVal(h) {
    const r=h.result;
    return {
      fc:  (r.ai||{}).fc || 0,
      co2: r.co2||r.CO2_kg_per_m3||0,
      wc:  r.wc||r.w_b_ratio||0,
      uw:  r.unitWeight||r.unit_weight||0,
      tb:  r.tb||r.total_binder_kg||0,
    };
  }

  return (
    <>
      <style>{S}</style>

      {/* ── Guide Popup ─────────────────────────────── */}
      {showGuide && (
        <div className="guide-ov" onClick={()=>setShowGuide(false)}>
          <div className="guide-card" onClick={e=>e.stopPropagation()}>
            <div className="guide-top">
              <span className="guide-step">คู่มือการใช้งาน · {guideSlide+1}/{GUIDE_SLIDES.length}</span>
              <button className="guide-cls" onClick={()=>setShowGuide(false)}>✕</button>
            </div>
            <span className="guide-icon">{GUIDE_SLIDES[guideSlide].icon}</span>
            <div className="guide-title">{GUIDE_SLIDES[guideSlide].title}</div>
            <div className="guide-body">{GUIDE_SLIDES[guideSlide].body}</div>
            <div className="guide-tip">{GUIDE_SLIDES[guideSlide].tip}</div>
            <div className="guide-dots">
              {GUIDE_SLIDES.map((_,i)=>(
                <div key={i} className={`gdot${i===guideSlide?" on":""}`} onClick={()=>setGuideSlide(i)} />
              ))}
            </div>
            <div className="guide-nav">
              <button className="gnav-prev" disabled={guideSlide===0} onClick={()=>setGuideSlide(s=>s-1)}>← ก่อนหน้า</button>
              {guideSlide<GUIDE_SLIDES.length-1
                ? <button className="gnav-next" onClick={()=>setGuideSlide(s=>s+1)}>ถัดไป →</button>
                : <button className="gnav-next" onClick={()=>setShowGuide(false)}>เริ่มใช้งาน ✓</button>
              }
            </div>
          </div>
        </div>
      )}

      <div className="app">

        {/* ── Header ──────────────────────────────────── */}
        <div className="hdr">
          <div className="logo-row">
            <img src={`data:image/jpeg;base64,${CEK_B64}`} alt="CEKMUTT" className="logo-img" />
            <div className="logo-sep" />
            <img src={`data:image/png;base64,${KMUTT_B64}`} alt="KMUTT" className="logo-img" style={{background:"rgba(255,255,255,0.95)",padding:"4px 6px"}} />
            <div style={{flex:1}} />
            <button className="help-btn" onClick={()=>{setGuideSlide(0);setShowGuide(true);}}>?</button>
          </div>
          <div className="hdr-txt" style={{marginBottom:14,position:"relative",zIndex:1}}>
            <h1>Concrete Mix Proportion Designer</h1>
            <p>คณะวิศวกรรมศาสตร์ · King Mongkut's University of Technology Thonburi</p>
          </div>
          <div className="hdr-bottom">
            <div className="hdr-chip"><div className="dot-live" />ACI 211.1 · AI-Assisted</div>
            <div className="api-status">
              <div className="api-dot" style={{background:apiStatus==="ok"?"#4ade80":apiStatus==="err"?"#f87171":"#facc15"}} />
              <span style={{color:"rgba(255,255,255,0.7)"}}>
                {apiStatus==="ok"?"API Connected":apiStatus==="err"?"Local Mode":"API..."}
              </span>
            </div>
          </div>
        </div>

        {/* ── 3-Tab Nav ───────────────────────────────── */}
        <div className="mode-wrap">
          <div className="mode-bar">
            <button className={`mode-btn${activeView==="calc"&&mode==="normal"?" on":""}`}
              onClick={()=>{setMode("normal");setActiveView("calc");setFcErr(false);}}>🏗 Normal</button>
            <button className={`mode-btn${activeView==="calc"&&mode==="research"?" on":""}`}
              onClick={()=>{setMode("research");setActiveView("calc");setFcErr(false);
                setBinders(Object.entries(DEFAULT_BINDERS[selType]||{OPC:100}).map(([id,pct])=>({id,pct})));
                setShowPicker(false);}}>🔬 Research</button>
            <button className={`mode-btn hist${activeView==="history"||activeView==="compare"?" on":""}`}
              onClick={()=>setActiveView("history")}>
              📋 History{history.length>0?` (${history.length})`:""}</button>
          </div>
        </div>

        {/* ══════════════════════════════════════════════ */}
        {/* ── CALC VIEW ─────────────────────────────── */}
        {/* ══════════════════════════════════════════════ */}
        {activeView==="calc" && (<>

          {/* Type */}
          <div className="sec">
            <div className="sec-lbl">🧱 ประเภทคอนกรีต</div>
            <div className="type-grid">
              {visibleTypes.map(ty=>(
                <div key={ty.id} className={`tc${selType===ty.id?" on":""}`} onClick={()=>handleTypeSelect(ty.id)}>
                  <div className="tc-icon" style={{background:ty.color+"22"}}>
                    {ty.id==="HSLWC" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 200 200">
                        <circle cx="100" cy="100" r="96" fill="#FEF9EC" stroke="#F59E0B" strokeWidth="1.5"/>
                        <rect x="52" y="158" width="96" height="8" rx="3" fill="#854F0B"/>
                        <rect x="62" y="122" width="76" height="34" rx="4" fill="#EF9F27" stroke="#BA7517" strokeWidth="1"/>
                        <circle cx="80" cy="134" r="4" fill="#FEF3C7"/><circle cx="95" cy="139" r="3" fill="#FEF3C7"/>
                        <circle cx="110" cy="133" r="4.5" fill="#FEF3C7"/><circle cx="122" cy="140" r="3" fill="#FEF3C7"/>
                        <circle cx="73" cy="146" r="2.5" fill="#FEF3C7"/><circle cx="102" cy="148" r="2" fill="#FEF3C7"/>
                        <circle cx="118" cy="148" r="3" fill="#FEF3C7"/>
                        <rect x="62" y="85" width="76" height="34" rx="4" fill="#EF9F27" stroke="#BA7517" strokeWidth="1"/>
                        <circle cx="76" cy="97" r="4.5" fill="#FEF3C7"/><circle cx="92" cy="103" r="3" fill="#FEF3C7"/>
                        <circle cx="107" cy="96" r="4" fill="#FEF3C7"/><circle cx="120" cy="104" r="3" fill="#FEF3C7"/>
                        <circle cx="82" cy="110" r="2.5" fill="#FEF3C7"/><circle cx="113" cy="112" r="2.5" fill="#FEF3C7"/>
                        <rect x="62" y="48" width="76" height="34" rx="4" fill="#FAC775" stroke="#EF9F27" strokeWidth="1"/>
                        <circle cx="79" cy="60" r="4" fill="#FEF3C7"/><circle cx="96" cy="67" r="3.5" fill="#FEF3C7"/>
                        <circle cx="113" cy="60" r="4" fill="#FEF3C7"/><circle cx="85" cy="73" r="2.5" fill="#FEF3C7"/>
                        <circle cx="107" cy="74" r="3" fill="#FEF3C7"/>
                        <rect x="52" y="42" width="96" height="8" rx="3" fill="#854F0B"/>
                        <line x1="36" y1="148" x2="36" y2="52" stroke="#FA4616" strokeWidth="3" strokeLinecap="round"/>
                        <polygon points="36,40 29,56 43,56" fill="#FA4616"/>
                        <line x1="164" y1="148" x2="164" y2="52" stroke="#FA4616" strokeWidth="3" strokeLinecap="round"/>
                        <polygon points="164,40 157,56 171,56" fill="#FA4616"/>
                        <g transform="translate(136,18) rotate(-30)">
                          <ellipse cx="0" cy="0" rx="7" ry="18" fill="none" stroke="#854F0B" strokeWidth="1.5"/>
                          <line x1="0" y1="-18" x2="0" y2="18" stroke="#854F0B" strokeWidth="1" strokeDasharray="2,2"/>
                          <line x1="-5" y1="-10" x2="5" y2="-12" stroke="#854F0B" strokeWidth="1"/>
                          <line x1="-6" y1="-4" x2="6" y2="-6" stroke="#854F0B" strokeWidth="1"/>
                          <line x1="-6" y1="2" x2="6" y2="0" stroke="#854F0B" strokeWidth="1"/>
                          <line x1="-5" y1="8" x2="5" y2="6" stroke="#854F0B" strokeWidth="1"/>
                        </g>
                      </svg>
                    ) : <span style={{fontSize:20}}>{ty.icon}</span>}
                  </div>
                  <div className="tc-info">
                    <div className="tc-name">{ty.label}</div>
                    <div className="tc-sub">{ty.sub}</div>
                  </div>
                  <div className="tc-r">
                    <div className="tc-range" style={{color:ty.color}}>{ty.minMpa}–{ty.maxMpa} MPa</div>
                    <div className="tc-chk">{selType===ty.id?"✓":""}</div>
                  </div>
                </div>
              ))}
              {selType==="GEO" && mode==="research" && (
                <div className="geo-warn">⚠️ GEO ไม่ใช้ซีเมนต์ — ต้องการสารละลายด่างกระตุ้น (NaOH + Na₂SiO₃) กำหนดได้ด้านล่าง</div>
              )}
            </div>
          </div>

          {/* Design Values */}
          <div className="sec">
            <div className="sec-lbl">📐 ค่าออกแบบ</div>
            <div className="card">
              <div className="ig">
                <div className="ig-lbl">
                  <span>กำลังอัด 28 วัน (f′c)</span>
                  <div className="unit-toggle">
                    <button className={`u-btn${unit==="mpa"?" on":""}`} onClick={()=>handleUnit("mpa")}>MPa</button>
                    <button className={`u-btn${unit==="ksc"?" on":""}`} onClick={()=>handleUnit("ksc")}>ksc</button>
                  </div>
                </div>
                <div className="fc-row">
                  <input type="number" className={`fc-inp${fcErr?" err":""}`} value={fc}
                    min={minD} max={maxD}
                    onChange={e=>{setFc(Number(e.target.value));setFcErr(false);setResult(null)}}
                    onBlur={e=>validateFc(e.target.value)} />
                </div>
                <div className={`hint${fcErr?" warn":""}`}>
                  {fcErr?`⚠ กรุณาใส่ค่าระหว่าง ${minD}–${maxD} ${unit.toUpperCase()}`
                    :`ช่วงที่ใช้ได้: ${minD}–${maxD} ${unit.toUpperCase()} · ${t.sub}`}
                </div>
              </div>
              <div className="ig">
                <div className="ig-lbl">{workType==="flow"?"ค่าการไหลแผ่ (Flow)":"ค่าการยุบตัว (Slump)"}</div>
                {/* HPC: flow-only, no toggle. SCC/UHPC: user can switch slump↔flow */}
                {(selType==="SCC"||selType==="UHPC") && (
                  <div className="wt-toggle">
                    <button className={`wt-btn${workType==="slump"?" on":""}`} onClick={()=>setWorkType("slump")}>Slump (mm)</button>
                    <button className={`wt-btn${workType==="flow"?" on":""}`} onClick={()=>setWorkType("flow")}>Flow (mm)</button>
                  </div>
                )}
                <div className="sl-row">
                  <input type="range" min={t.workMin} max={t.workMax} value={slump} step={10}
                    style={{"--pct":`${slumpPct}%`}}
                    onChange={e=>{setSlump(Number(e.target.value));setResult(null);}} />
                  <div className="sl-val">{slump} mm</div>
                </div>
              </div>
            </div>
          </div>

          {/* Research: Binders */}
          {mode==="research" && (
            <div className="sec">
              <div className="sec-lbl">🧪 Binders</div>
              <div className="card" style={{paddingBottom:12}}>
                {binders.map((b,i)=>(
                  <div key={i} className={`b-row${i===0?" primary":""}`}>
                    <div className="b-dot" style={{background:BINDER_META[b.id]?.color||"#888"}} />
                    <div style={{flex:1}}>
                      <div className="b-name">{b.id}</div>
                      <div className="b-sub">{BINDER_META[b.id]?.name||b.id}</div>
                    </div>
                    <input type="number" className="b-pct" value={b.pct} min={5} max={100} step={5}
                      onChange={e=>setBPct(i,e.target.value)} />
                    <span style={{fontSize:12,color:"var(--text3)",minWidth:18}}>%</span>
                    {(binders.length>1&&!(selType==="GEO"&&i===0)) && (
                      <button className="rm" onClick={()=>removeBinder(i)}>×</button>
                    )}
                  </div>
                ))}
                <div className={`b-sum${binderOk?" ok":" err"}`}>
                  {binderOk?"✓":"⚠"} รวม {Math.round(binderSum)}% {binderOk?"":"— ต้องรวมได้ 100%"}
                </div>
                {binders.length<10 && (
                  <button className="add-b" onClick={()=>setShowPicker(p=>!p)}>+ เพิ่ม Binder</button>
                )}
                {showPicker && availBinders.length>0 && (
                  <div className="picker">
                    {availBinders.map(id=>(
                      <button key={id} className="p-opt" onClick={()=>addBinder(id)}>
                        {id}<br/><span style={{fontSize:10,color:"var(--text3)"}}>{BINDER_META[id].co2} kgCO₂/kg</span>
                      </button>
                    ))}
                  </div>
                )}
                {selType==="GEO" && (
                  <div className="act-card">
                    <div style={{fontSize:12,fontWeight:700,color:"#92400E",marginBottom:10}}>⚗ Alkaline Activator</div>
                    {[
                      {l:"NaOH Molarity",k:"naohM",min:4,max:16,step:1,u:"mol/L"},
                      {l:"SS / SH Ratio",k:"ssSh",min:0.5,max:4,step:0.5,u:"ratio"},
                      {l:"Activator / Binder",k:"actRatio",min:0.3,max:0.6,step:0.05,u:"kg/kg"},
                    ].map(({l,k,min,max,step,u})=>(
                      <div key={k} className="act-row">
                        <div className="act-lbl">{l}</div>
                        <input type="number" className="act-inp" value={activator[k]}
                          min={min} max={max} step={step}
                          onChange={e=>setActivator(a=>({...a,[k]:Number(e.target.value)}))} />
                        <div className="act-u">{u}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Normal: Secondary binder */}
          {mode==="normal" && selType!=="HSLWC" && (
            <div className="sec">
              <div className="sec-lbl">🔩 Binder เสริม (optional)</div>
              <div className="card">
                <div className="ig">
                  <div className="ig-lbl">เลือก Binder เสริม</div>
                  <div className="sec-b-grid">
                    {["none","FA","BA","BFS","SF","CC"].map(b=>(
                      <button key={b} className={`sb-btn${secBinder===b?" on":""}`}
                        onClick={()=>setSecBinder(b)}>
                        {b==="none"?"ไม่ใช้":b}
                      </button>
                    ))}
                  </div>
                </div>
                {secBinder!=="none" && (
                  <div className="ig">
                    <div className="ig-lbl">สัดส่วน {secBinder}</div>
                    <div className="sl-row">
                      <input type="range" min={5} max={40} value={secRatio} step={5}
                        style={{"--pct":`${((secRatio-5)/35)*100}%`}}
                        onChange={e=>{setSecRatio(Number(e.target.value));setResult(null);}} />
                      <div className="sl-val">{secRatio}%</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Calc Button */}
          <div className="sec">
            <button className="calc" onClick={calculate} disabled={!canCalc||loading}>
              {loading ? <><span className="spin" />กำลังคำนวณ...</> : <>🔩 คำนวณส่วนผสมคอนกรีต</>}
            </button>
          </div>

          {/* Results */}
          {result && (
            <div className="res-wrap">
              <div className="sec-lbl" style={{padding:"0 0 10px"}}>📊 ผลการคำนวณ (1 m³)</div>
              <div className="res-hdr">
                <div className="rh-l">
                  <h3>{t.label}</h3>
                  <p>f′c = {Math.round(fcMpa)} MPa · น้ำหนัก ≈ {uwVal} kg/m³ · CO₂ = {co2Total} kg/m³</p>
                </div>
                <div className="wc-box"><div className="wc-v">{wcVal}</div><div className="wc-l">W/B Ratio</div></div>
              </div>
              <div className="mix-grid">
                {buildMixItems(result).map((item,i)=>(
                  <div key={i} className={`mi${item.full?" full":""}${item.geo?" geo":""}`} style={{"--c":item.c}}>
                    <div className="mi-n">{item.n}</div>
                    <div className="mi-v">{item.v}</div>
                    <div className="mi-u">kg/m³</div>
                  </div>
                ))}
              </div>

              {/* AI Prediction — hidden for HSLWC */}
              {!noAI && (
                <div className="ai-box">
                  <div className="ai-hd">
                    <div className="ai-title">🤖 AI Prediction (MLP)</div>
                    {R2_MAP[selType]!=null
                      ? <div className={`ai-r2 ${r2cls}`}>R² = {R2_MAP[selType]}</div>
                      : <div className="ai-r2 mid">R² N/A</div>}
                  </div>
                  <div className="ai-fc">
                    <div className="ai-fc-v">{aiFc}</div>
                    <div className="ai-fc-u">MPa (predicted f′c)</div>
                  </div>
                  <div className="ai-range">95% CI: {aiLo} – {aiHi} MPa (±{aiRmse} RMSE)</div>
                  <div className="ai-bar">
                    <div className="ai-bar-fill" style={{left:`${barL}%`,width:`${barW}%`}} />
                    <div className="ai-bar-pt" style={{left:`${barPt}%`}} />
                  </div>
                  {selType==="GEO" && <div className="ai-disc">⚠️ GEO R²=0.037 — model ยังอยู่ระหว่างพัฒนา ต้องการข้อมูล activator เพิ่มเพื่อความแม่นยำ</div>}
                  {selType==="HPC" && <div className="ai-disc">⚠️ HPC R²=0.739 — ข้อมูล train มีน้อย (26 rows) ควรเพิ่มข้อมูลจาก literature</div>}
                  <div className="api-src">{aiSrc==="api"?"✓ ผลจาก FastAPI Backend":"⚙ Local ACI (Backend ไม่ตอบสนอง)"}</div>
                </div>
              )}
              {noAI && (
                <div className="ai-box">
                  <div className="ai-hd">
                    <div className="ai-title">🤖 AI Prediction</div>
                    <div className="ai-r2 mid">HSLWC</div>
                  </div>
                  <div className="ai-disc" style={{marginTop:0}}>⚙ HSLWC ใช้ local ACI คำนวณ — ยังไม่มีข้อมูลสำหรับ AI model ผล R² จะอัปเดตเมื่อมีชุดข้อมูล HSLWC</div>
                </div>
              )}

              {/* CO2 */}
              <div className="co2-card">
                <div className="co2-hd">
                  <h4>🌿 Carbon Footprint</h4>
                  <div className="co2-tot">รวม {co2Total} kg CO₂/m³</div>
                </div>
                <div className="co2-body">
                  {buildCo2Items(result).map((item,i)=>{
                    const mx=Math.max(...buildCo2Items(result).map(x=>x.v),1);
                    return(
                      <div key={i} className="co2-row">
                        <div className="co2-l">{item.l}</div>
                        <div className="co2-bw"><div className="co2-b" style={{width:`${Math.round((item.v/mx)*100)}%`}} /></div>
                        <div className="co2-v">{item.v} kg</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </>)}

        {/* ══════════════════════════════════════════════ */}
        {/* ── HISTORY VIEW ──────────────────────────── */}
        {/* ══════════════════════════════════════════════ */}
        {activeView==="history" && (<>
          <div className="sec">
            <div className="sec-lbl">📋 ประวัติการคำนวณ ({history.length}/10)</div>
            {history.length===0
              ? <div className="hist-empty">
                  ยังไม่มีประวัติ<br/>
                  <span style={{fontSize:11}}>ทำการคำนวณก่อน แล้วผลจะบันทึกที่นี่อัตโนมัติ</span>
                </div>
              : history.map(h=>{
                  const ty = TYPES.find(x=>x.id===h.type);
                  const isCmp = compareIds.includes(h.id);
                  const v = cmpVal(h);
                  return (
                    <div key={h.id} className="hist-item" style={{borderColor:isCmp?"#3B82F6":"var(--border)",borderWidth:isCmp?"2px":"1px"}}>
                      <div className="hist-top">
                        <div className="hist-dot" style={{background:ty?.color||"#888"}} />
                        <div style={{flex:1}}>
                          <div className="hist-label">{h.label}</div>
                        </div>
                        <div className="hist-time">{h.time}</div>
                      </div>
                      <div className="hist-meta">
                        <span className="hist-badge" style={{background:h.mode==="research"?"#FFFBEB":"#EFF6FF",color:h.mode==="research"?"#854F0B":"#1d4ed8"}}>
                          {h.mode==="research"?"🔬 Research":"🏗 Normal"}
                        </span>
                        <span>{h.binderLabel}</span>
                        {v.fc>0 && <span>AI: {v.fc} MPa</span>}
                        {v.co2>0 && <span>CO₂: {v.co2} kg</span>}
                      </div>
                      <div className="hist-actions">
                        <button className="h-btn" onClick={()=>loadFromHistory(h)}>↺ โหลด</button>
                        <button className={`h-btn${isCmp?" cmp-on":""}`} onClick={()=>toggleCompare(h.id)}>
                          {isCmp?"☑ เปรียบ":"☐ เปรียบ"}
                        </button>
                        <button className="h-btn del" onClick={()=>removeFromHistory(h.id)}>🗑</button>
                      </div>
                    </div>
                  );
                })
            }
          </div>

          {/* Compare bar */}
          {history.length>0 && (
            <div className="sec">
              <div className="cmp-bar">
                <div className="cmp-bar-txt">
                  {compareIds.length===0?"เลือก 2 สูตรเพื่อเปรียบเทียบ"
                    :compareIds.length===1?"เลือกอีก 1 สูตร"
                    :"เลือกแล้ว 2 สูตร — พร้อมเปรียบเทียบ"}
                </div>
                <button className="cmp-go" disabled={compareIds.length<2}
                  onClick={()=>setActiveView("compare")}>
                  เปรียบเทียบ →
                </button>
              </div>
            </div>
          )}
        </>)}

        {/* ══════════════════════════════════════════════ */}
        {/* ── COMPARE VIEW ──────────────────────────── */}
        {/* ══════════════════════════════════════════════ */}
        {activeView==="compare" && (<>
          <div className="cmp-back" onClick={()=>setActiveView("history")}>← กลับ History</div>
          {cmpItems.length===2 ? (() => {
            const [a,b] = cmpItems;
            const va = cmpVal(a), vb = cmpVal(b);
            const rows = [
              {k:"AI f'c (MPa)",  av:va.fc,   bv:vb.fc,  higherBetter:true,  unit:"MPa"},
              {k:"CO₂ (kg/m³)",   av:va.co2,  bv:vb.co2, higherBetter:false, unit:"kg"},
              {k:"W/B Ratio",     av:va.wc,   bv:vb.wc,  higherBetter:false, unit:""},
              {k:"Unit Weight",   av:va.uw,   bv:vb.uw,  higherBetter:false, unit:"kg/m³"},
              {k:"Total Binder",  av:va.tb,   bv:vb.tb,  higherBetter:false, unit:"kg"},
            ];
            return (
              <div className="sec">
                <div className="sec-lbl">📊 เปรียบเทียบ Mix</div>
                <div className="cmp-box">
                  <div className="cmp-head">
                    <div className="cmp-hcell" />
                    <div className="cmp-hcell a">🔵 A<br/><span style={{fontSize:10,fontWeight:400}}>{a.label}</span></div>
                    <div className="cmp-hcell b">🔴 B<br/><span style={{fontSize:10,fontWeight:400}}>{b.label}</span></div>
                  </div>
                  {rows.map((r,i)=>{
                    const aBetter = r.higherBetter ? r.av>r.bv : r.av<r.bv;
                    const bBetter = r.higherBetter ? r.bv>r.av : r.bv<r.av;
                    const diff = r.av>0&&r.bv>0 ? Math.abs(((r.bv-r.av)/r.av)*100).toFixed(1) : null;
                    return (
                      <div key={i} className="cmp-row-r">
                        <div className="cmp-key">{r.k}</div>
                        <div className={`cmp-val${aBetter?" better":r.av!==r.bv?" worse":""}`}>
                          {r.av}{r.unit?` ${r.unit}`:""}
                        </div>
                        <div className={`cmp-val${bBetter?" better":r.av!==r.bv?" worse":""}`}>
                          {r.bv}{r.unit?` ${r.unit}`:""}
                          {diff&&bBetter&&<div style={{fontSize:9,marginTop:2}}>↓ {diff}%</div>}
                          {diff&&aBetter&&<div style={{fontSize:9,marginTop:2,color:"var(--text3)"}}>↑ {diff}%</div>}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Binder breakdown */}
                <div style={{marginTop:10}}>
                  <div className="sec-lbl">🧱 Binder Composition</div>
                  <div className="cmp-box">
                    <div className="cmp-head">
                      <div className="cmp-hcell" />
                      <div className="cmp-hcell a">🔵 A</div>
                      <div className="cmp-hcell b">🔴 B</div>
                    </div>
                    {Array.from(new Set([...Object.keys(a.binderPct||{}),...Object.keys(b.binderPct||{})])).map((k,i)=>(
                      <div key={i} className="cmp-row-r">
                        <div className="cmp-key" style={{display:"flex",alignItems:"center",gap:5}}>
                          <div style={{width:8,height:8,borderRadius:"50%",background:BINDER_META[k]?.color||"#888",flexShrink:0}} />
                          {k}
                        </div>
                        <div className="cmp-val">{a.binderPct?.[k]?Math.round(a.binderPct[k])+"%":"—"}</div>
                        <div className="cmp-val">{b.binderPct?.[k]?Math.round(b.binderPct[k])+"%":"—"}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{fontSize:11,color:"var(--text3)",padding:"10px 0",textAlign:"center"}}>
                  สีเขียว = ค่าที่ดีกว่า · เปรียบเทียบแบบสัมพันธ์ ไม่ใช่ค่ามาตรฐาน
                </div>
              </div>
            );
          })() : (
            <div style={{padding:"32px 16px",textAlign:"center",color:"var(--text3)"}}>
              เลือกสูตร 2 รายการจาก History ก่อน
            </div>
          )}
        </>)}

        {/* ── Disclaimer + Footer ─────────────────────── */}
        <div className="disc">
          <h5>⚠️ ข้อจำกัดและหมายเหตุ</h5>
          <ol>
            <li>Normal Concrete อ้างอิง ACI 211.1 — มวลรวมในสภาพ SSD ค่าความถ่วงจำเพาะวัสดุจริงอาจแตกต่างกัน</li>
            <li>GEO (Geopolymer) ใช้สมการประมาณ — ความแม่นยำต่ำกว่า cement-based; R²=0.037</li>
            <li>High-Strength Lightweight Concrete ใช้ lightweight aggregate (LWA) ค่า density อาจต่างจาก normal concrete · ยังไม่มี AI model</li>
            <li><strong>AI Prediction ใช้ MLP model (R² overall=0.93) — ต้องทำ trial mix ก่อนใช้งานจริงเสมอ</strong></li>
            <li><strong>Appication นี้เป็นแค่ DEMO รอการพัฒนาต่อไป</strong></li>
          </ol>
        </div>
        <div className="footer">King Mongkut's University of Technology Thonburi · Faculty of Engineering<br/>Concrete Technology Laboratory · ConcreteAI v4.0 (Bug-Fixed)</div>
      </div>
    </>
  );
}
