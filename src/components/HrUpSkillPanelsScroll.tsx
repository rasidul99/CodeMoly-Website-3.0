"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ShieldCheck, 
  Users, 
  UserCheck, 
  GraduationCap, 
  BookOpen, 
  Check, 
  CheckCircle2, 
  Zap, 
  Video, 
  Award
} from "lucide-react";

const panelData = [
  {
    id: "01",
    challenge: "Separated Tools & Manual Roster Tracking",
    title: "Learning Admin & HR Governance",
    description: "Configures catalog catalogs, assigns mandatory compliance training by department, and syncs employee rosters via HRIS API.",
    renderMockup: () => (
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 flex flex-col gap-2.5 text-left text-xs font-sans h-full justify-between shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span className="font-bold text-slate-800">HR Compliance Overview</span>
          </div>
          <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">HRIS Live</span>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center bg-slate-50 p-2 rounded-lg border border-slate-100">
            <span className="text-slate-500 text-[11px]">Safety Training Compliance</span>
            <span className="font-bold text-emerald-600 text-[11px] flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> 98.4% Passed
            </span>
          </div>
          <div className="flex justify-between items-center bg-slate-50 p-2 rounded-lg border border-slate-100">
            <span className="text-slate-500 text-[11px]">Bulk Audit Export</span>
            <span className="font-bold text-blue-700 text-[11px] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
              ISO / OSHA Ready
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-100 pt-2 font-mono">
          <span>Roster Sync: 2,450 Users</span>
          <span className="text-blue-600 font-bold">Auto-Enrolled</span>
        </div>
      </div>
    )
  },
  {
    id: "02",
    challenge: "Zero Supervisor Visibility Into Team Progress",
    title: "Line Manager & Supervisor Panel",
    description: "Gives supervisors direct report progress drilldowns, approval workflows for practical skills, and escalation alerts for overdue modules.",
    renderMockup: () => (
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 flex flex-col gap-2.5 text-left text-xs font-sans h-full justify-between shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <div className="flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-emerald-600" />
            <span className="font-bold text-slate-800">Supervisor Team Console</span>
          </div>
          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
            12 Direct Reports
          </span>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded-lg border border-slate-100 text-[11px]">
            <span className="text-slate-700 font-medium">Alex Smith (Operator)</span>
            <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">100% COMPLETE</span>
          </div>
          <div className="flex items-center justify-between p-1.5 bg-amber-50 rounded-lg border border-amber-200/60 text-[11px]">
            <span className="text-slate-800 font-bold">Rahim Ahmed (Technician)</span>
            <span className="text-[9px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">APPROVAL PENDING</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-100 pt-1.5 font-mono">
          <span>Gap Analysis</span>
          <span className="text-blue-600 font-bold">94% Skill Match</span>
        </div>
      </div>
    )
  },
  {
    id: "03",
    challenge: "Online Exam Cheating & Credential Inflation",
    title: "AI Live Exam Proctoring Studio",
    description: "Webcam identity verification, browser lockdown mode, screen monitoring, and AI-flagged alerts for tab switching or multiple persons.",
    renderMockup: () => (
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 flex flex-col gap-2.5 text-left text-xs font-sans h-full justify-between shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <div className="flex items-center gap-2">
            <Video className="w-4 h-4 text-blue-600" />
            <span className="font-bold text-slate-800">AI Guard Proctoring</span>
          </div>
          <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
            Webcam Verified
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between bg-slate-900 text-white p-2 rounded-lg border border-slate-800">
            <span className="text-[10px] font-mono flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Live Feed Integrity
            </span>
            <span className="text-[9px] font-bold text-emerald-400">99.8% TRUST SCORE</span>
          </div>
          
          <div className="flex justify-between items-center text-[11px] bg-slate-50 p-2 rounded-lg border border-slate-100">
            <span className="text-slate-500">Lockdown Mode</span>
            <span className="font-bold text-slate-800">Tab Switching Blocked</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-100 pt-2 font-mono">
          <span>Session Logged</span>
          <span className="text-emerald-600 font-bold">Tamper-Proof</span>
        </div>
      </div>
    )
  },
  {
    id: "04",
    challenge: "Manual Course Authoring & Fragmented Files",
    title: "Drag-and-Drop Course Authoring",
    description: "Visual syllabus builder supporting video streams, slides, PDF workbooks, SCORM 1.2/2004 packages, and auto-graded question banks.",
    renderMockup: () => (
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 flex flex-col gap-2.5 text-left text-xs font-sans h-full justify-between shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-blue-600" />
            <span className="font-bold text-slate-800">Course Studio Builder</span>
          </div>
          <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
            SCORM 2004
          </span>
        </div>

        <div className="space-y-1.5 text-[11px]">
          <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded-lg border border-slate-100">
            <span className="font-semibold text-slate-800">Module 1: Safety Protocol</span>
            <span className="text-[9px] font-bold text-slate-500">VIDEO + PDF</span>
          </div>
          <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded-lg border border-slate-100">
            <span className="font-semibold text-slate-800">Module 2: Proctored Exam</span>
            <span className="text-[9px] font-bold text-blue-600">8 QUESTION TYPES</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-100 pt-1.5 font-mono">
          <span>Question Bank: 1,200 Items</span>
          <span className="text-blue-600 font-bold">Auto-Graded</span>
        </div>
      </div>
    )
  },
  {
    id: "05",
    challenge: "Cluttered User Experience & Unrecognized Certificates",
    title: "Learner Portal & Verifiable Certificates",
    description: "Responsive mobile/desktop player, career progress badges, guided learning paths, and downloadable PDF certificates with unique QR codes.",
    renderMockup: () => (
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 flex flex-col gap-2.5 text-left text-xs font-sans h-full justify-between shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-emerald-600" />
            <span className="font-bold text-slate-800">Learner Passport</span>
          </div>
          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
            12 Certificates
          </span>
        </div>

        <div className="bg-gradient-to-r from-blue-950 to-slate-900 text-white p-2.5 rounded-xl border border-blue-800/60 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-blue-300 block">CERTIFICATE VERIFIED</span>
            <span className="font-bold text-xs">ISO 45001 Safety Spec</span>
          </div>
          <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center font-mono text-[9px] font-bold">
            QR
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-100 pt-1.5 font-mono">
          <span>WCAG 2.1 AA Compliant</span>
          <span className="text-blue-600 font-bold">Mobile Ready</span>
        </div>
      </div>
    )
  }
];

export default function HrUpSkillPanelsScroll() {
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
    <section ref={containerRef} className="relative h-[130vh] bg-[#f6f7f9] border-t border-b border-slate-200/60 text-left overflow-x-clip py-16 md:py-24" aria-labelledby="hr-panels-scroll-heading">
      <div className="sticky top-24 md:top-28 overflow-hidden relative z-10">
        
        {/* Header Title (Aligned to Navbar left edge) */}
        <div 
          style={{ paddingLeft: navbarLeftEdge, paddingRight: navbarLeftEdge }} 
          className="w-full mb-6 md:mb-8 shrink-0 transition-all duration-150"
        >
          <span className="font-sans text-xs md:text-sm font-bold uppercase tracking-wider text-blue-600 mb-2 block">
            FEATURE PANELS & WORKFLOWS
          </span>
          <h2 id="hr-panels-scroll-heading" className="font-sans font-black text-3xl md:text-5xl tracking-tight text-slate-900">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#aebcff] via-[#2546c7] to-[#09164f]">
              How HR UpSkill Unifies Your Workforce Training
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
              {panelData.map((item) => (
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
