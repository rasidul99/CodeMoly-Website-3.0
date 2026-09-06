"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ComparisonItem {
  id: string;
  capability: string;
  hrUpSkill: string;
  typicalLms: string;
  advantage: string;
}

const items: ComparisonItem[] = [
  {
    id: "01",
    capability: "Live Exam Proctoring",
    hrUpSkill: "Webcam ID verification, screen monitoring & AI suspicious behavior alerts built in.",
    typicalLms: "Expensive third-party add-on with manual setup per exam.",
    advantage: "100% Exam Integrity"
  },
  {
    id: "02",
    capability: "Line Manager Visibility",
    hrUpSkill: "Native role with direct-report drilldown, approval workflows & escalation alerts.",
    typicalLms: "Not available or requires complex admin role workarounds.",
    advantage: "Zero Manager Gaps"
  },
  {
    id: "03",
    capability: "Course Syllabus Builder",
    hrUpSkill: "Visual drag-and-drop studio supporting videos, slides, PDFs & SCORM packages.",
    typicalLms: "Basic HTML text editor with rigid file upload limits.",
    advantage: "10x Faster Authoring"
  },
  {
    id: "04",
    capability: "Role Panel Architecture",
    hrUpSkill: "Unified application with 5 native role-tailored workspaces.",
    typicalLms: "Fragmented separate portals requiring distinct logins.",
    advantage: "Seamless User UX"
  },
  {
    id: "05",
    capability: "Audit Log & Evidence",
    hrUpSkill: "Tamper-evident immutable audit logs with automated QR certificate verification.",
    typicalLms: "Basic activity log with no exportable legal audit proof.",
    advantage: "100% Audit Readiness"
  },
  {
    id: "06",
    capability: "API-First Integrations",
    hrUpSkill: "REST APIs, webhooks, SAML/OAuth SSO & native HRIS connectors out of the box.",
    typicalLms: "Limited connectors & rigid manual CSV user imports.",
    advantage: "Seamless Enterprise Fit"
  }
];

export default function HrUpSkillComparisonTable() {
  return (
    <div className="w-full text-left">
      {/* Header */}
      <div className="mb-12 md:mb-16 text-center flex flex-col items-center">
        <span className="font-sans text-xs md:text-sm font-bold uppercase tracking-wider text-blue-600 mb-2 block">
          WHAT MAKES HR UPSKILL DIFFERENT
        </span>

        <h2 className="font-sans font-black text-3xl md:text-5xl leading-tight tracking-tight text-center max-w-4xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#aebcff] via-[#2546c7] to-[#09164f]">
            Enterprise Controls Most LMS Platforms Don't Have
          </span>
        </h2>
      </div>

      {/* Grid matching RmgChallengeTable */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white border border-slate-200/80 rounded-3xl p-7 md:p-8 flex flex-col justify-between hover:border-blue-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.04)] transition-all duration-300"
          >
            <div>
              {/* Card Header: Step Index & Advantage Badge */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <span className="font-mono text-xs font-bold text-slate-400">
                  {item.id}
                </span>
                <span className="text-[11px] font-extrabold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100/80 flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3 text-emerald-600" />
                  {item.advantage}
                </span>
              </div>

              {/* Challenge / Typical LMS Limitation */}
              <div className="mb-5">
                <span className="text-[10px] font-bold text-rose-500 uppercase tracking-wider block mb-1.5">
                  TYPICAL LMS LIMITATION
                </span>
                <p className="font-sans font-bold text-slate-800 text-sm md:text-base leading-snug">
                  {item.typicalLms}
                </p>
              </div>

              {/* Solution / HR UpSkill Capability */}
              <div className="mb-6 pt-4 border-t border-slate-100">
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block mb-1.5">
                  HR UPSKILL SOLUTION
                </span>
                <p className="font-sans font-semibold text-slate-900 text-sm md:text-base leading-relaxed">
                  {item.hrUpSkill}
                </p>
              </div>
            </div>

            {/* Bottom Module / Capability Pill */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">Enterprise Control:</span>
              <span className="text-xs font-bold text-slate-700 bg-slate-100/80 px-2.5 py-1 rounded-lg border border-slate-200/60">
                {item.capability}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
