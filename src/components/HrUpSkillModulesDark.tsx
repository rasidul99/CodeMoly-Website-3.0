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
    id: "admin-portal",
    title: "Learning Admin Portal",
    description: "Course catalog management, enrollment rules, course builder with SCORM support, and tamper-evident audit logs.",
    paths: [
      "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
      "M12 8v4",
      "M12 16h.01"
    ],
    delay: 0
  },
  {
    id: "hr-manager",
    title: "HR Manager Control",
    description: "Workforce completion dashboards, mandatory compliance learning path assignment, and HRIS roster synchronization.",
    paths: [
      "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
      "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
      "M22 21v-2a4 4 0 0 0-3-3.87",
      "M16 3.13a4 4 0 0 1 0 7.75"
    ],
    delay: 0.2
  },
  {
    id: "line-manager",
    title: "Line Manager & Supervisor",
    description: "Direct-report drilldown, approval workflows for practical skill completion, and escalation alerts for overdue training.",
    paths: [
      "M9 11l3 3L22 4",
      "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
    ],
    delay: 0.4
  },
  {
    id: "proctored-exam",
    title: "AI Live Exam Proctoring",
    description: "Webcam identity verification, browser lockdown, tab switching detection, and AI-flagged suspicious behavior logs.",
    paths: [
      "M15 10l5 5-5 5",
      "M4 4v7a4 4 0 0 0 4 4h12"
    ],
    delay: 0.6
  },
  {
    id: "course-studio",
    title: "Drag-and-Drop Course Studio",
    description: "Visual curriculum authoring with video lessons, slides, PDFs, quizzes, and automated certificate generation rules.",
    paths: [
      "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 8 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2z",
      "M8 10v4",
      "M12 10v2",
      "M16 10v6"
    ],
    delay: 0.8
  },
  {
    id: "question-bank",
    title: "Question Bank & Gradebook",
    description: "8 Question types (MCQ, Essay, Coding, Matching, File Upload), automated scoring, and CSV/Excel import/export.",
    paths: [
      "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
      "M14 2v6h6",
      "M16 13H8",
      "M16 17H8",
      "M10 9H8"
    ],
    delay: 1.0
  },
  {
    id: "learner-portal",
    title: "Learner Portal & Player",
    description: "Personalized course player with playback speed control, bookmarks, auto-save progress, and guided learning paths.",
    paths: [
      "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",
      "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
    ],
    delay: 1.2
  },
  {
    id: "pdf-certificates",
    title: "Verifiable PDF Certificates",
    description: "Auto-generated completion certificates with unique QR verification codes, customizable branding, and expiry rules.",
    paths: [
      "M12 15l-2 5l3 -2l3 2l-2 -5",
      "M12 3a6 6 0 1 0 0 12a6 6 0 1 0 0 -12"
    ],
    delay: 1.4
  },
  {
    id: "api-integrations",
    title: "REST APIs & Webhooks",
    description: "API-first architecture connecting seamlessly to existing HRIS, ERP, payroll, Slack, Teams, and SAML/OAuth SSO.",
    paths: [
      "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
      "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
    ],
    delay: 1.6
  },
  {
    id: "wcag-accessibility",
    title: "WCAG 2.1 AA & Responsive",
    description: "Full desktop, tablet, and mobile browser support with WCAG 2.1 AA accessibility compliance and keyboard navigation.",
    paths: [
      "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z",
      "M12 14v4",
      "M12 8h.01"
    ],
    delay: 1.8
  },
  {
    id: "audit-evidence",
    title: "Audit Evidence & Security",
    description: "Immutable activity logs, role-based access security, session auto-logout on inactivity, and encrypted data storage.",
    paths: [
      "M7 11V7a5 5 0 0 1 10 0v4",
      "M5 11h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z"
    ],
    delay: 2.0
  },
  {
    id: "localization-branding",
    title: "Branding & Localization",
    description: "Custom logo, brand colors, email templates, multi-language UI with RTL support, and regional date/time formats.",
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

export default function HrUpSkillModulesDark() {
  return (
    <section className="py-20 md:py-28 px-5 md:px-20 bg-[#070b19] border-t border-b border-slate-800/80 overflow-hidden relative text-left" aria-labelledby="hr-capabilities-heading">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-[1400px] mx-auto text-left relative z-10">
        
        {/* Header Title */}
        <div className="mb-14 md:mb-20 text-center lg:text-left">
          <span className="font-sans text-xs md:text-sm font-bold uppercase tracking-widest text-blue-400 mb-3 block">
            System Capabilities
          </span>
          <h2 id="hr-capabilities-heading" className="font-sans font-black text-3xl md:text-5xl tracking-tight text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400">
              Core Platform Modules & Features
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
