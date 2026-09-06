"use client";

import React from "react";
import { ShieldCheck, Cpu, Layers, Palette } from "lucide-react";
import ScrambleText from "./ScrambleText";

export default function HrUpSkillCommitmentsBento() {
  return (
    <section className="section-reveal bento-reveal relative w-full py-20 md:py-28 px-5 md:px-20 bg-white text-slate-800 border-t border-slate-100" aria-label="What You Can Expect From CodeMoly">
      <div className="max-w-[1400px] mx-auto text-left">
        
        {/* Section Header */}
        <div className="mb-14 md:mb-20 text-center flex flex-col items-center">
          <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-teal-600 mb-4 block">
            <ScrambleText text="WHAT YOU CAN EXPECT FROM CODEMOLY" />
          </span>

          <h2 className="font-sans font-extrabold text-3xl md:text-5xl leading-tight tracking-tight text-center max-w-4xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#a1f0d5] via-[#0d9488] to-[#042f2e]">
              Built For Enterprise Training Teams — Not Rigid Generic Software
            </span>
          </h2>
        </div>

        {/* 4 Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <div className="bg-[#f8fafc] border border-slate-200/80 rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:border-teal-300 hover:shadow-lg transition-all duration-300 group">
            <div className="flex flex-col gap-4">
              <div className="p-3.5 bg-teal-100/70 text-teal-700 rounded-2xl w-fit group-hover:bg-teal-700 group-hover:text-white transition-colors">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="font-sans font-bold text-2xl text-slate-900">
                Built For Enterprise Organizations
              </h3>
              <p className="font-sans text-sm md:text-base text-slate-600 leading-relaxed">
                Designed specifically for corporate workforces, multi-department compliance rules, and scalable seats — not a generic course marketplace with a corporate tag.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-200/60 font-mono text-xs text-teal-700 font-bold">
              01 / ENTERPRISE L&D FIT
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f8fafc] border border-slate-200/80 rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:border-teal-300 hover:shadow-lg transition-all duration-300 group">
            <div className="flex flex-col gap-4">
              <div className="p-3.5 bg-teal-100/70 text-teal-700 rounded-2xl w-fit group-hover:bg-teal-700 group-hover:text-white transition-colors">
                <Cpu className="w-7 h-7" />
              </div>
              <h3 className="font-sans font-bold text-2xl text-slate-900">
                Live AI Proctoring Built-In
              </h3>
              <p className="font-sans text-sm md:text-base text-slate-600 leading-relaxed">
                Webcam identity verification, tab switching alerts, and browser lockdown mode are native capabilities — eliminating expensive third-party proctoring vendors.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-200/60 font-mono text-xs text-teal-700 font-bold">
              02 / INTEGRITY & PROCTORING
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f8fafc] border border-slate-200/80 rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:border-teal-300 hover:shadow-lg transition-all duration-300 group">
            <div className="flex flex-col gap-4">
              <div className="p-3.5 bg-teal-100/70 text-teal-700 rounded-2xl w-fit group-hover:bg-teal-700 group-hover:text-white transition-colors">
                <Layers className="w-7 h-7" />
              </div>
              <h3 className="font-sans font-bold text-2xl text-slate-900">
                Audit-Ready Evidence & Compliance
              </h3>
              <p className="font-sans text-sm md:text-base text-slate-600 leading-relaxed">
                Tamper-evident audit logs, automatic certificate verification codes, and ISO/OSHA mandatory training completion reports ready for external auditors.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-200/60 font-mono text-xs text-teal-700 font-bold">
              03 / AUDIT & COMPLIANCE
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#f8fafc] border border-slate-200/80 rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:border-teal-300 hover:shadow-lg transition-all duration-300 group">
            <div className="flex flex-col gap-4">
              <div className="p-3.5 bg-teal-100/70 text-teal-700 rounded-2xl w-fit group-hover:bg-teal-700 group-hover:text-white transition-colors">
                <Palette className="w-7 h-7" />
              </div>
              <h3 className="font-sans font-bold text-2xl text-slate-900">
                Custom Branding & API Integrations
              </h3>
              <p className="font-sans text-sm md:text-base text-slate-600 leading-relaxed">
                Custom domain, logo, colors, email templates, certificate designs, REST APIs, webhooks, and SAML/OAuth SSO integration matching your corporate IT ecosystem.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-200/60 font-mono text-xs text-teal-700 font-bold">
              04 / BRANDING & API FIT
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
