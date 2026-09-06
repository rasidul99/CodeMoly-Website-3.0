"use client";

import React from "react";
import { motion } from "framer-motion";

interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  paths: string[];
  delay: number;
}

const capabilitiesData: CapabilityItem[] = [
  {
    id: "plm-merch",
    title: "Product Development & PLM",
    description: "Central style bank, buyer tech pack onboarding, proto/fit sample tracking, and lab dip approval management.",
    paths: [
      "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      "M9 2h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z",
      "M9 12l2 2 4-4"
    ],
    delay: 0
  },
  {
    id: "order-mgmt",
    title: "Merchandising & Order File",
    description: "Master factory order files, buyer PO allocations, size/color assortments, and export sales contract tracking.",
    paths: [
      "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z",
      "M3 6h18",
      "M16 10a4 4 0 0 1-8 0"
    ],
    delay: 0.2
  },
  {
    id: "costing-margin",
    title: "Costing & Margin Control",
    description: "Pre-costing, fabric consumption, trim sheets, CM calculations, and version history to protect factory profit margins.",
    paths: [
      "M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z",
      "M16 8H8",
      "M16 12h.01",
      "M12 12h.01",
      "M8 12h.01",
      "M16 16h.01",
      "M12 16h.01",
      "M8 16h.01"
    ],
    delay: 0.4
  },
  {
    id: "tna-calendar",
    title: "TNA Critical Path",
    description: "Auto-generated Time & Action calendar with critical path milestone tracking and proactive delay risk alerts.",
    paths: [
      "M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z",
      "M16 2v4",
      "M8 2v4",
      "M3 10h18"
    ],
    delay: 0.6
  },
  {
    id: "mps-planning",
    title: "Master Production Planning (MPS)",
    description: "Line-wise sewing capacity allocation, cutting plan scheduling, and target delivery milestone forecasting.",
    paths: [
      "M3 3h7v7H3z",
      "M14 3h7v4h-7z",
      "M14 11h7v10h-7z",
      "M3 14h7v7H3z"
    ],
    delay: 0.8
  },
  {
    id: "mrp-procurement",
    title: "Procurement & MRP Run",
    description: "Yarn, fabric & trims booking requisitions linked directly to order BOM limits with live material shortage alerts.",
    paths: [
      "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
      "M3.27 6.96L12 12.01l8.73-5.05",
      "M12 22.08V12"
    ],
    delay: 1.0
  },
  {
    id: "store-inventory",
    title: "Yarn, Fabric & Trims Store",
    description: "MRR receiving, 4-Point fabric inspection, shade roll grading, bin allocation, and barcode store requisition.",
    paths: [
      "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 8 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2z",
      "M8 10v4",
      "M12 10v2",
      "M16 10v6"
    ],
    delay: 1.2
  },
  {
    id: "shopfloor-wip",
    title: "Shop Floor WIP Output",
    description: "Cutting bundle tickets, hourly line sewing display, washing/embroidery progress, and finishing/packing tracking.",
    paths: [
      "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
      "M14 2v6h6",
      "M16 13H8",
      "M16 17H8",
      "M10 9H8"
    ],
    delay: 1.4
  },
  {
    id: "quality-aql",
    title: "Inline & AQL Quality Control",
    description: "Endline defect logging, line DHU Pareto analytics, fabric lab test logs, and final AQL 2.5 buyer inspection reports.",
    paths: [
      "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
      "M9 12l2 2 4-4"
    ],
    delay: 1.6
  },
  {
    id: "commercial-lc",
    title: "Commercial, LC & Customs",
    description: "Export LC, BTB LC, EXP, UD, bond pass book registers, customs clearance, and container shipping dispatch.",
    paths: [
      "M20 13V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7m16 0v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5m16 0h-2.586a1 1 0 0 0-.707.293l-2.414 2.414a1 1 0 0 1-.707.293h-3.172a1 1 0 0 1-.707-.293l-2.414-2.414A1 1 0 0 0 6.586 13H4"
    ],
    delay: 1.8
  },
  {
    id: "finance-nbr",
    title: "NBR VAT & Labour Act Finance",
    description: "NBR Mushak 6.3/9.1 VAT, TDS/AIT, biometric payroll, Labour Act WPPF/maternity benefits, and buyer audit CAP tracking.",
    paths: [
      "M7 11V7a5 5 0 0 1 10 0v4",
      "M5 11h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z"
    ],
    delay: 2.0
  },
  {
    id: "bilingual-access",
    title: "Bilingual Portals & Access",
    description: "English & Bangla localized UI, dedicated Buyer & Supplier web portals, role-based security, and offline floor barcode sync.",
    paths: [
      "M12 20h9",
      "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
    ],
    delay: 2.2
  }
];

function LineAnimatedIcon({ paths, delay }: { paths: string[]; delay: number }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="w-14 h-14 md:w-16 md:h-16 text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.35)]"
    >
      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: [0, 1]
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse" as const,
            duration: 4.5,
            ease: [0.4, 0.0, 0.2, 1],
            delay: delay + i * 0.15
          }}
        />
      ))}
    </svg>
  );
}

export default function RmgModulesDark() {
  return (
    <section className="py-20 md:py-28 px-5 md:px-20 bg-[#070b19] border-t border-b border-slate-800/80 overflow-hidden relative" aria-labelledby="rmg-capabilities-heading">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-indigo-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-[1400px] mx-auto text-left relative z-10">
        
        {/* Header Title */}
        <div className="mb-14 md:mb-20 text-center lg:text-left">
          <span className="font-sans text-xs md:text-sm font-bold uppercase tracking-widest text-blue-400 mb-3 block">
            System Capabilities
          </span>
          <h2 id="rmg-capabilities-heading" className="font-sans font-black text-3xl md:text-5xl tracking-tight text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400">
              Core Modules & Features
            </span>
          </h2>
        </div>

        {/* 12 Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {capabilitiesData.map((item) => (
            <div 
              key={item.id}
              className="bg-slate-900/60 border border-slate-800/90 hover:border-blue-500/40 p-7 md:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                {/* Frameless Large Animated Icon */}
                <div className="mb-6 inline-block">
                  <LineAnimatedIcon paths={item.paths} delay={item.delay} />
                </div>

                {/* Title */}
                <h3 className="font-bold text-white text-lg md:text-xl tracking-tight mb-2.5 group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
