"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ShieldCheck, 
  Check, 
  AlertCircle, 
  Lock, 
  CheckCircle2, 
  Zap,
  Calculator,
  History
} from "lucide-react";

const solutionsData = [
  {
    id: "01",
    challenge: "Scattered Details",
    title: "Centralized Job File",
    description: "Every shipment lives in one Job File — tracking operational statuses, tasks, timelines, documents, and finance details side-by-side.",
    renderMockup: () => (
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 flex flex-col gap-2.5 text-left text-xs font-sans h-full justify-between">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-slate-800">Job #JF-2026-889</span>
          </div>
          <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">LCL Sea Freight</span>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center bg-slate-50 p-2 rounded-lg border border-slate-100">
            <span className="text-slate-500 text-[11px]">Carrier Booking</span>
            <span className="font-bold text-slate-700 text-[11px] flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-500" /> Maersk Line
            </span>
          </div>
          <div className="flex justify-between items-center bg-slate-50 p-2 rounded-lg border border-slate-100">
            <span className="text-slate-500 text-[11px]">HBL Declaration</span>
            <span className="font-bold text-slate-700 text-[11px] flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-500" /> Auto-Generated
            </span>
          </div>
          <div className="flex justify-between items-center bg-slate-50 p-2 rounded-lg border border-slate-100">
            <span className="text-slate-500 text-[11px]">Status Milestone</span>
            <span className="font-bold text-emerald-600 text-[11px] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
              Vessel On-Schedule
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-100 pt-2 font-mono">
          <span>Updated 2m ago</span>
          <span className="text-blue-600 font-bold">View File →</span>
        </div>
      </div>
    )
  },
  {
    id: "02",
    challenge: "Document Chaos",
    title: "Document Compliance Engine",
    description: "System auto-detects required documents by sea/air cargo types and destination, triggering automated missing-document alerts.",
    renderMockup: () => (
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 flex flex-col gap-2 text-left text-xs font-sans h-full justify-between">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <span className="font-bold text-slate-800 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" /> Cargo Compliance
          </span>
          <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">95% Verified</span>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded-lg border border-slate-100 text-[11px]">
            <span className="text-slate-700 font-medium flex items-center gap-1.5">
              <Check className="w-3 h-3 text-emerald-600" /> Commercial Invoice
            </span>
            <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">VERIFIED</span>
          </div>
          <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded-lg border border-slate-100 text-[11px]">
            <span className="text-slate-700 font-medium flex items-center gap-1.5">
              <Check className="w-3 h-3 text-emerald-600" /> Packing List PDF
            </span>
            <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">VERIFIED</span>
          </div>
          <div className="flex items-center justify-between p-1.5 bg-amber-50/80 rounded-lg border border-amber-200/80 text-[11px]">
            <span className="text-slate-800 font-bold flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-amber-500" /> Certificate of Origin
            </span>
            <span className="text-[9px] font-extrabold text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded">REQUIRED</span>
          </div>
        </div>

        <div className="bg-blue-600 text-white rounded-lg py-1.5 px-3 text-[11px] font-semibold text-center flex items-center justify-center gap-1">
          <Zap className="w-3 h-3 text-yellow-300" />
          <span>Auto-Generate HBL</span>
        </div>
      </div>
    )
  },
  {
    id: "03",
    challenge: "Margin Blind Spots",
    title: "Shipment Profit Tracker",
    description: "Computes margin calculations at quotation and monitors shipment-level profitability through live carrier vendor bills matching.",
    renderMockup: () => (
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 flex flex-col gap-2.5 text-left text-xs font-sans h-full justify-between">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <span className="font-bold text-slate-800">Job Profitability</span>
          <span className="text-[10px] font-extrabold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">Live Margin</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
            <span className="text-[10px] text-slate-400 block font-medium">Customer Quote</span>
            <span className="font-extrabold text-slate-900 text-sm">$14,250.00</span>
          </div>
          <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
            <span className="text-[10px] text-slate-400 block font-medium">Vendor Cost</span>
            <span className="font-extrabold text-slate-900 text-sm">$11,800.00</span>
          </div>
        </div>

        <div className="bg-slate-900 text-white p-2.5 rounded-lg flex items-center justify-between">
          <div>
            <span className="text-[9px] uppercase font-bold text-slate-400 block">Net Profit Margin</span>
            <span className="font-black text-base leading-tight">$2,450.00</span>
          </div>
          <span className="bg-blue-600 px-2.5 py-1 rounded text-xs font-extrabold text-white">
            17.2% ROI
          </span>
        </div>
      </div>
    )
  },
  {
    id: "04",
    challenge: "Client Inquiries",
    title: "Isolated Client Portal",
    description: "Clients self-serve to track shipping milestones and view approved docs. Carrier rates, vendor margins, and internal operations are fully hidden.",
    renderMockup: () => (
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 flex flex-col gap-2 text-left text-xs font-sans h-full justify-between">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span className="font-bold text-slate-800 text-[11px]">Apex Garments Portal</span>
          </div>
          <span className="text-[9px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-100">Client View</span>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between p-2 bg-slate-50 rounded-lg border border-slate-100 text-[11px]">
            <span className="text-slate-600 font-medium">Milestone:</span>
            <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">Vessel Departure</span>
          </div>
          <div className="flex items-center justify-between p-2 bg-slate-50 rounded-lg border border-slate-100 text-[11px]">
            <span className="text-slate-600 font-medium">Original HBL PDF:</span>
            <span className="font-bold text-blue-600 underline">Download HBL</span>
          </div>
        </div>

        <div className="bg-slate-900 text-slate-300 p-2 rounded-lg text-[10px] flex items-center justify-between border border-slate-800">
          <span className="flex items-center gap-1 font-mono text-slate-400">
            <Lock className="w-3 h-3 text-red-400" /> Rates & Margins
          </span>
          <span className="text-[9px] font-bold text-red-400 uppercase tracking-wider">PROTECTED</span>
        </div>
      </div>
    )
  },
  {
    id: "05",
    challenge: "Disconnected Accounting",
    title: "Integrated Finance Closeout",
    description: "Ties client invoicing and vendor freight payments directly to the shipment job, enforcing audit-safe lockouts once completed.",
    renderMockup: () => (
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 flex flex-col gap-2.5 text-left text-xs font-sans h-full justify-between">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <span className="font-bold text-slate-800 flex items-center gap-1">
            <Calculator className="w-4 h-4 text-blue-600" /> Finance Closeout
          </span>
          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">Audit-Safe</span>
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between items-center p-2 bg-slate-50 rounded-lg border border-slate-100 text-[11px]">
            <span className="text-slate-600">Client Invoice #INV-402</span>
            <span className="font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">PAID FULL</span>
          </div>
          <div className="flex justify-between items-center p-2 bg-slate-50 rounded-lg border border-slate-100 text-[11px]">
            <span className="text-slate-600">Vendor Bill #VB-911</span>
            <span className="font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">MATCHED</span>
          </div>
        </div>

        <div className="bg-emerald-600 text-white p-2 rounded-lg text-[11px] font-bold text-center flex items-center justify-center gap-1.5">
          <Lock className="w-3.5 h-3.5 text-emerald-200" />
          <span>Job File Locked</span>
        </div>
      </div>
    )
  },
  {
    id: "06",
    challenge: "Audit Uncertainties",
    title: "Activity Auditing Log",
    description: "Enforces full activity timelines, documenting edits, user login audits, invoice alterations, and document versionings automatically.",
    renderMockup: () => (
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 flex flex-col gap-2 text-left text-xs font-sans h-full justify-between">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <span className="font-bold text-slate-800 flex items-center gap-1">
            <History className="w-4 h-4 text-blue-600" /> Audit Log
          </span>
          <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full font-mono border border-slate-200">Immutable</span>
        </div>

        <div className="space-y-1.5 text-[11px]">
          <div className="flex items-start gap-2 p-1.5 bg-slate-50 rounded-lg border border-slate-100">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1 shrink-0" />
            <div>
              <span className="font-bold text-slate-800">John (Doc Officer)</span> updated HBL v2.0
              <span className="text-[9px] text-slate-400 block font-mono">10:42 AM</span>
            </div>
          </div>
          <div className="flex items-start gap-2 p-1.5 bg-slate-50 rounded-lg border border-slate-100">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1 shrink-0" />
            <div>
              <span className="font-bold text-slate-800">Finance Manager</span> matched vendor bill
              <span className="text-[9px] text-slate-400 block font-mono">11:15 AM</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-100 pt-1.5 font-mono">
          <span>100% Traceable Logs</span>
          <span className="text-emerald-600 font-bold">Encrypted</span>
        </div>
      </div>
    )
  }
];

export default function OperationalSolutionsScroll() {
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
    <section ref={containerRef} className="relative h-[130vh] bg-[#f6f7f9] border-t border-b border-slate-200/60 text-left overflow-x-clip py-16 md:py-24" aria-labelledby="sol-heading">
      <div className="sticky top-24 md:top-28 overflow-hidden relative z-10">
        
        {/* Header Title (Aligned to Navbar left edge) */}
        <div 
          style={{ paddingLeft: navbarLeftEdge, paddingRight: navbarLeftEdge }} 
          className="w-full mb-6 md:mb-8 shrink-0 transition-all duration-150"
        >
          <span className="font-sans text-xs md:text-sm font-bold uppercase tracking-wider text-blue-600 mb-2 block">
            Operational Solutions
          </span>
          <h2 id="sol-heading" className="font-sans font-black text-3xl md:text-5xl tracking-tight text-slate-900">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#aebcff] via-[#2546c7] to-[#09164f]">
              How Freito Solves It
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
              {solutionsData.map((item) => (
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
