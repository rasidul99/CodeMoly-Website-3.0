"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Building2, 
  Users, 
  FileText, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Zap, 
  Check,
  FileSpreadsheet,
  Award
} from "lucide-react";

const complianceData = [
  {
    id: "01",
    challenge: "Manual VAT & TDS Penalties",
    title: "NBR Tax & VAT Compliance",
    description: "Mushak 6.3 challans, Mushak 9.1 monthly VAT returns, and automatic TDS deduction on supplier bills & salaries.",
    renderMockup: () => (
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 flex flex-col gap-2.5 text-left text-xs font-sans h-full justify-between shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-blue-600" />
            <span className="font-bold text-slate-800">NBR VAT Mushak 6.3</span>
          </div>
          <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
            Automated
          </span>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center bg-slate-50 p-2 rounded-lg border border-slate-100">
            <span className="text-slate-500 text-[11px]">Mushak 9.1 Return</span>
            <span className="font-bold text-slate-700 text-[11px] flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-500" /> NBR Generated
            </span>
          </div>
          <div className="flex justify-between items-center bg-slate-50 p-2 rounded-lg border border-slate-100">
            <span className="text-slate-500 text-[11px]">TDS Rate (Supplier)</span>
            <span className="font-bold text-blue-600 text-[11px] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
              5.0% Auto-Deducted
            </span>
          </div>
          <div className="flex justify-between items-center bg-slate-50 p-2 rounded-lg border border-slate-100">
            <span className="text-slate-500 text-[11px]">Salary AIT Tax</span>
            <span className="font-bold text-emerald-600 text-[11px]">
              NBR Form 108 Sync
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-100 pt-2 font-mono">
          <span>Mushak Chalan #MC-8821</span>
          <span className="text-blue-600 font-bold">100% Tax Compliant</span>
        </div>
      </div>
    )
  },
  {
    id: "02",
    challenge: "Labour Act Audit Non-Compliance",
    title: "Bangladesh Labour Act",
    description: "WPPF (Workers Profit Fund) allocation, statutory maternity benefit calculations, safety committee logs, and attendance rules.",
    renderMockup: () => (
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 flex flex-col gap-2.5 text-left text-xs font-sans h-full justify-between shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-indigo-600" />
            <span className="font-bold text-slate-800">Labour Act 2006</span>
          </div>
          <span className="text-[10px] font-extrabold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
            Statutory Log
          </span>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded-lg border border-slate-100 text-[11px]">
            <span className="text-slate-700 font-medium flex items-center gap-1.5">
              <Check className="w-3 h-3 text-emerald-600" /> WPPF Allocation
            </span>
            <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">5% FUND LOCKED</span>
          </div>
          <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded-lg border border-slate-100 text-[11px]">
            <span className="text-slate-700 font-medium flex items-center gap-1.5">
              <Check className="w-3 h-3 text-emerald-600" /> Maternity Pay Rules
            </span>
            <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">16 WEEKS CALC</span>
          </div>
          <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded-lg border border-slate-100 text-[11px]">
            <span className="text-slate-700 font-medium flex items-center gap-1.5">
              <Check className="w-3 h-3 text-emerald-600" /> Safety Committee
            </span>
            <span className="text-[9px] font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">LOGGED</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-100 pt-1.5 font-mono">
          <span>Biometric Attendance</span>
          <span className="text-emerald-600 font-bold">Audit Verified</span>
        </div>
      </div>
    )
  },
  {
    id: "03",
    challenge: "UD & Member Discrepancies",
    title: "BGMEA / BKMEA Formats",
    description: "Standardized Utilization Declaration (UD) tracking, association membership registers, and export statistics documentation.",
    renderMockup: () => (
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 flex flex-col gap-2.5 text-left text-xs font-sans h-full justify-between shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <div className="flex items-center gap-2">
            <FileSpreadsheet className="w-4 h-4 text-blue-600" />
            <span className="font-bold text-slate-800">BGMEA / BKMEA UD</span>
          </div>
          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
            Validated
          </span>
        </div>

        <div className="space-y-2">
          <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
            <div className="flex justify-between text-[10px] text-slate-500 mb-1">
              <span>UD No: UD-2026-9810</span>
              <span className="text-emerald-600 font-bold">BGMEA Approved</span>
            </div>
            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full w-[85%]" />
            </div>
          </div>
          
          <div className="flex justify-between items-center text-[11px] bg-slate-50 p-2 rounded-lg border border-slate-100">
            <span className="text-slate-500">Fabric Consumption</span>
            <span className="font-semibold text-slate-800">12.5 Yds / Doz</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-100 pt-2 font-mono">
          <span>Master LC Linked</span>
          <span className="text-blue-600 font-bold">Zero Mismatch</span>
        </div>
      </div>
    )
  },
  {
    id: "04",
    challenge: "Customs Blockage & Stock Mismatches",
    title: "Bond & Customs Register",
    description: "Bond license pass book tracking, bonded warehouse raw material balance reconciliation, and raw stock utilization monitoring.",
    renderMockup: () => (
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 flex flex-col gap-2.5 text-left text-xs font-sans h-full justify-between shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="font-bold text-slate-800">Bond Pass Book</span>
          </div>
          <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
            Customs Sync
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center bg-slate-50 p-2 rounded-lg border border-slate-100">
            <span className="text-slate-500 text-[11px]">Bond License No</span>
            <span className="font-mono text-slate-800 font-bold text-[11px]">NBR-BOND-4491</span>
          </div>
          <div className="flex justify-between items-center bg-slate-50 p-2 rounded-lg border border-slate-100">
            <span className="text-slate-500 text-[11px]">Raw Yarn Balance</span>
            <span className="font-bold text-emerald-600 text-[11px]">42.5 Metric Tons</span>
          </div>
          <div className="flex justify-between items-center bg-slate-50 p-2 rounded-lg border border-slate-100">
            <span className="text-slate-500 text-[11px]">Duty-Free Allowance</span>
            <span className="font-bold text-slate-700 text-[11px]">Within Limit</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-100 pt-2 font-mono">
          <span>Warehouse Audit</span>
          <span className="text-emerald-600 font-bold">100% Reconciled</span>
        </div>
      </div>
    )
  },
  {
    id: "05",
    challenge: "Scattered Buyer Certificates",
    title: "Global Buyer Frameworks",
    description: "SEDEX/SMETA, BSCI, Higg FEM/FSLM, SLCP, OEKO-TEX, GOTS, and BCI certificate central repository & expiry tracking.",
    renderMockup: () => (
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 flex flex-col gap-2.5 text-left text-xs font-sans h-full justify-between shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-emerald-600" />
            <span className="font-bold text-slate-800">Buyer Certificate Stack</span>
          </div>
          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
            7 Active
          </span>
        </div>

        <div className="grid grid-cols-2 gap-1.5 text-[10px]">
          <div className="bg-slate-50 p-1.5 rounded border border-slate-100 flex items-center justify-between">
            <span className="font-bold text-slate-700">SEDEX</span>
            <span className="text-emerald-600 font-bold">4-Pillar</span>
          </div>
          <div className="bg-slate-50 p-1.5 rounded border border-slate-100 flex items-center justify-between">
            <span className="font-bold text-slate-700">BSCI</span>
            <span className="text-emerald-600 font-bold">Grade A</span>
          </div>
          <div className="bg-slate-50 p-1.5 rounded border border-slate-100 flex items-center justify-between">
            <span className="font-bold text-slate-700">Higg FEM</span>
            <span className="text-blue-600 font-bold">88.5%</span>
          </div>
          <div className="bg-slate-50 p-1.5 rounded border border-slate-100 flex items-center justify-between">
            <span className="font-bold text-slate-700">SLCP</span>
            <span className="text-emerald-600 font-bold">Verified</span>
          </div>
        </div>

        <div className="bg-emerald-600 text-white rounded-lg py-1 px-3 text-[10px] font-semibold text-center flex items-center justify-center gap-1">
          <Zap className="w-3 h-3 text-yellow-300" />
          <span>Buyer Passport Ready</span>
        </div>
      </div>
    )
  },
  {
    id: "06",
    challenge: "Unprepared Buyer Audit Visits",
    title: "Automated Audit Alerts",
    description: "Proactive certificate expiry warnings (60/30 days) and Corrective Action Plan (CAP) tracking for zero audit failure.",
    renderMockup: () => (
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 flex flex-col gap-2.5 text-left text-xs font-sans h-full justify-between shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <span className="font-bold text-slate-800 flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-blue-600" /> Audit CAP Center
          </span>
          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
            0 Open Findings
          </span>
        </div>

        <div className="space-y-1.5 text-[11px]">
          <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded-lg border border-slate-100">
            <span className="text-slate-700 font-medium">BSCI Audit Renewal</span>
            <span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">60 DAYS LEFT</span>
          </div>
          <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded-lg border border-slate-100">
            <span className="text-slate-700 font-medium">CAP Resolution</span>
            <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">100% CLOSED</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-100 pt-1.5 font-mono">
          <span>Buyer Readiness</span>
          <span className="text-emerald-600 font-bold">100% Audit-Ready</span>
        </div>
      </div>
    )
  }
];

export default function RmgComplianceScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsTrackRef = useRef<HTMLDivElement>(null);
  const [maxShift, setMaxShift] = useState(0);
  const [navbarLeftEdge, setNavbarLeftEdge] = useState(0);

  useEffect(() => {
    const updateLayout = () => {
      if (cardsTrackRef.current) {
        const vw = window.innerWidth;
        const navbarWidth = vw >= 768 ? Math.min(vw - 160, 1400) : Math.min(vw - 40, 1400);
        const computedLeft = (vw - navbarWidth) / 2;

        setNavbarLeftEdge(computedLeft);

        const cardsTotalWidth = cardsTrackRef.current.scrollWidth;
        const shift = cardsTotalWidth - navbarWidth;
        setMaxShift(Math.max(0, shift));
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -maxShift]);

  return (
    <section ref={containerRef} className="relative h-[130vh] bg-[#f6f7f9] border-t border-b border-slate-200/60 text-left overflow-x-clip py-16 md:py-24" aria-labelledby="compliance-scroll-heading">
      <div className="sticky top-24 md:top-28 overflow-hidden relative z-10">
        
        {/* Header Title (Aligned to Navbar left edge) */}
        <div 
          style={{ paddingLeft: navbarLeftEdge, paddingRight: navbarLeftEdge }} 
          className="w-full mb-6 md:mb-8 shrink-0 transition-all duration-150"
        >
          <span className="font-sans text-xs md:text-sm font-bold uppercase tracking-wider text-blue-600 mb-2 block">
            BANGLADESH & BUYER COMPLIANCE
          </span>
          <h2 id="compliance-scroll-heading" className="font-sans font-black text-3xl md:text-5xl tracking-tight text-slate-900">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#aebcff] via-[#2546c7] to-[#09164f]">
              Compliance Built for Bangladeshi Export Standards
            </span>
          </h2>
        </div>

        {/* Full-width Horizontal Scroll Track */}
        <div className="w-full overflow-hidden">
          <motion.div 
            style={{ 
              x,
              paddingLeft: navbarLeftEdge,
              paddingRight: navbarLeftEdge
            }} 
            className="w-max"
          >
            <div ref={cardsTrackRef} className="flex gap-6 md:gap-8">
              {complianceData.map((item) => (
                <div 
                  key={item.id}
                  className="w-[320px] md:w-[380px] bg-transparent flex flex-col justify-between shrink-0"
                >
                  {/* Top UI Mockup Container */}
                  <div className="w-full h-[210px] md:h-[220px] mb-5 relative">
                    {item.renderMockup()}
                  </div>

                  {/* Bottom Content */}
                  <div className="flex flex-col gap-2 px-1">
                    <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider block">
                      CHALLENGE: {item.challenge}
                    </span>

                    <h3 className="font-sans font-extrabold text-lg md:text-xl text-slate-900 tracking-tight">
                      {item.title}
                    </h3>

                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
