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
    id: "control-tower",
    title: "Control Tower Dashboard",
    description: "Real-time shipment KPIs, container counts, operational health updates, and financial margins at a glance.",
    paths: [
      "M3 3h7v7H3z",
      "M14 3h7v4h-7z",
      "M14 11h7v10h-7z",
      "M3 14h7v7H3z"
    ],
    delay: 0
  },
  {
    id: "crm",
    title: "Customer & CRM",
    description: "Customer profile directory, active cargo orders history, and quotation records tied to each account.",
    paths: [
      "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
      "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
      "M22 21v-2a4 4 0 0 0-3-3.87",
      "M16 3.13a4 4 0 0 1 0 7.75"
    ],
    delay: 0.3
  },
  {
    id: "quotation",
    title: "Quotation Management",
    description: "Freight estimates, vendor local charge calculations, and approval workflows showing margins instantly.",
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
    delay: 0.6
  },
  {
    id: "job-file",
    title: "Shipment Job File",
    description: "The single source of truth for cargo info, operation logs, documents, tasks, and audit logs.",
    paths: [
      "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 8 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2z",
      "M8 10v4",
      "M12 10v2",
      "M16 10v6"
    ],
    delay: 0.9
  },
  {
    id: "compliance",
    title: "Document Compliance",
    description: "Auto-selects custom and carrier documents required by shipment type, raising alerts for missing files.",
    paths: [
      "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
      "M9 12l2 2 4-4"
    ],
    delay: 1.2
  },
  {
    id: "doc-gen",
    title: "Freight Document Generator",
    description: "Auto-generates numbered HBL, HAWB, Manifest, and Delivery Order paperwork directly from shipment files.",
    paths: [
      "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
      "M14 2v6h6",
      "M16 13H8",
      "M16 17H8",
      "M10 9H8"
    ],
    delay: 1.5
  },
  {
    id: "tracking",
    title: "Vessel & Container Tracking",
    description: "Tracks container seals, vessel voyage details, and multi-leg transshipments routes in real-time.",
    paths: [
      "M3 11l19-9-9 19-2-8-8-2z"
    ],
    delay: 1.8
  },
  {
    id: "finance",
    title: "Finance & Closeout",
    description: "Links client invoicing and vendor bills to shipments. Locks calculations upon audit closeout.",
    paths: [
      "M7 11V7a5 5 0 0 1 10 0v4",
      "M5 11h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z"
    ],
    delay: 2.1
  },
  {
    id: "vendor",
    title: "Vendor Management",
    description: "Vendor carrier database, shipping lane rates histories, and accounting balances tracking.",
    paths: [
      "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18",
      "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-2",
      "M10 6h4",
      "M10 10h4",
      "M10 14h4",
      "M10 18h4"
    ],
    delay: 2.4
  },
  {
    id: "task",
    title: "Task Management",
    description: "Assign due dates, tasks, and follow-ups to operations, documentation, and clearing teams.",
    paths: [
      "M9 11l3 3L22 4",
      "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
    ],
    delay: 2.7
  },
  {
    id: "roles",
    title: "Role-Based Access",
    description: "Configurable portals for Admins, Operations, Documentation, Finance, Sales, and Clients.",
    paths: [
      "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
      "M12 8v4",
      "M12 16h.01"
    ],
    delay: 3.0
  },
  {
    id: "reports",
    title: "Reports & Analytics",
    description: "Export operations progress, executive sales charts, and margin reports from live data.",
    paths: [
      "M3 3v18h18",
      "M18 17V9",
      "M13 17V5",
      "M8 17v-3"
    ],
    delay: 3.3
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

export default function SystemCapabilitiesDark() {
  return (
    <section className="py-20 md:py-28 px-5 md:px-20 bg-[#070b19] border-t border-b border-slate-800/80 overflow-hidden relative" aria-labelledby="modules-heading">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-indigo-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-[1400px] mx-auto text-left relative z-10">
        
        {/* Header Title */}
        <div className="mb-14 md:mb-20 text-center lg:text-left">
          <span className="font-sans text-xs md:text-sm font-bold uppercase tracking-widest text-blue-400 mb-3 block">
            System Capabilities
          </span>
          <h2 id="modules-heading" className="font-sans font-black text-3xl md:text-5xl tracking-tight text-white">
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
