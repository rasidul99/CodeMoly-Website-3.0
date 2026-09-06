"use client";

import React from "react";
import { Zap, ShieldCheck, Languages, Lock } from "lucide-react";
import GridDistortion from "./GridDistortion";

export default function RmgCommitmentsBento() {
  return (
    <section className="py-20 md:py-28 px-5 md:px-20 bg-white border-t border-b border-slate-200/70 overflow-hidden text-left" aria-labelledby="rmg-guarantee-heading">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Title */}
        <div className="mb-14 md:mb-20 text-center lg:text-left">
          <span className="font-sans text-xs md:text-sm font-bold uppercase tracking-wider text-blue-600 mb-2.5 block">
            Our Commitments
          </span>
          <h2 id="rmg-guarantee-heading" className="font-sans font-black text-3xl md:text-5xl tracking-tight text-slate-900">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#aebcff] via-[#2546c7] to-[#09164f]">
              What You Can Expect From CodeMoly
            </span>
          </h2>
        </div>

        {/* Bento Grid Layout (12 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          
          {/* Card 1: Built Specifically for Export Factories (Span 7) */}
          <div className="md:col-span-7 bg-[#f8fafc] border border-slate-200/90 rounded-3xl p-7 md:p-9 transition-all duration-300 flex flex-col justify-between group">
            
            {/* Top Content */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-blue-600" /> Export Factory Native
                </span>
                <span className="text-xs font-mono text-slate-400 font-semibold">01 / COMMITMENT</span>
              </div>
              <h3 className="font-sans font-black text-2xl md:text-3xl text-slate-900 tracking-tight mb-3 group-hover:text-blue-600 transition-colors">
                Built Specifically for Export Factories
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal max-w-xl">
                Not a generic ERP with a garments label added on. Designed specifically for Bangladeshi Knit, Woven, Denim, Sweater, and Composite export operations.
              </p>
            </div>

            {/* GridDistortion Image Container: 20px top & left padding, 0px right & bottom padding */}
            <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200/80 bg-white pt-[20px] pl-[20px] pr-0 pb-0 relative">
              <div className="relative w-full h-full overflow-hidden rounded-tl-xl border-t border-l border-slate-200/60">
                <GridDistortion 
                  imageSrc="/portfolio/rmg_erp.jpg" 
                  className="absolute inset-0 w-full h-full object-cover object-left-top"
                  grid={12}
                  mouse={0.18}
                  strength={0.15}
                  relaxation={0.9}
                />
              </div>
            </div>

          </div>

          {/* Card 2: Real Compliance Depth (Span 5) */}
          <div className="md:col-span-5 bg-[#f8fafc] border border-slate-200/90 rounded-3xl p-7 md:p-9 transition-all duration-300 flex flex-col justify-between group">
            
            {/* Top Content */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" /> NBR & Audit Ready
                </span>
                <span className="text-xs font-mono text-slate-400 font-semibold">02 / COMMITMENT</span>
              </div>
              <h3 className="font-sans font-black text-2xl md:text-3xl text-slate-900 tracking-tight mb-3 group-hover:text-blue-600 transition-colors">
                Real Compliance Depth
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                NBR Mushak VAT, BGMEA/BKMEA reports, bond pass book, and buyer audit frameworks (SEDEX, BSCI, Higg) built directly into the workflow.
              </p>
            </div>

            {/* GridDistortion Image Container: 20px top & left padding, 0px right & bottom padding */}
            <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200/80 bg-white pt-[20px] pl-[20px] pr-0 pb-0 relative">
              <div className="relative w-full h-full overflow-hidden rounded-tl-xl border-t border-l border-slate-200/60">
                <GridDistortion 
                  imageSrc="/portfolio/freight_role_training.jpg" 
                  className="absolute inset-0 w-full h-full object-cover object-left-top"
                  grid={12}
                  mouse={0.18}
                  strength={0.15}
                  relaxation={0.9}
                />
              </div>
            </div>

          </div>

          {/* Card 3: Bilingual English & Bangla (Span 5) */}
          <div className="md:col-span-5 bg-[#f8fafc] border border-slate-200/90 rounded-3xl p-7 md:p-9 transition-all duration-300 flex flex-col justify-between group">
            
            {/* Top Content */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 flex items-center gap-1.5">
                  <Languages className="w-3.5 h-3.5 text-blue-600" /> English & Bangla
                </span>
                <span className="text-xs font-mono text-slate-400 font-semibold">03 / COMMITMENT</span>
              </div>
              <h3 className="font-sans font-black text-2xl md:text-3xl text-slate-900 tracking-tight mb-3 group-hover:text-blue-600 transition-colors">
                Bilingual From Day One
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Your shop floor operators and finance officers both get an interface they can actually read, including Bangla number-to-words.
              </p>
            </div>

            {/* GridDistortion Image Container: 20px top & left padding, 0px right & bottom padding */}
            <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200/80 bg-white pt-[20px] pl-[20px] pr-0 pb-0 relative">
              <div className="relative w-full h-full overflow-hidden rounded-tl-xl border-t border-l border-slate-200/60">
                <GridDistortion 
                  imageSrc="/portfolio/freight_risk_trial.jpg" 
                  className="absolute inset-0 w-full h-full object-cover object-left-top"
                  grid={12}
                  mouse={0.18}
                  strength={0.15}
                  relaxation={0.9}
                />
              </div>
            </div>

          </div>

          {/* Card 4: Risk-Free Sandbox & Transparent Pricing (Span 7) */}
          <div className="md:col-span-7 bg-[#f8fafc] border border-slate-200/90 rounded-3xl p-7 md:p-9 transition-all duration-300 flex flex-col justify-between group">
            
            {/* Top Content */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-blue-600" /> Cloud or On-Premise
                </span>
                <span className="text-xs font-mono text-slate-400 font-semibold">04 / COMMITMENT</span>
              </div>
              <h3 className="font-sans font-black text-2xl md:text-3xl text-slate-900 tracking-tight mb-3 group-hover:text-blue-600 transition-colors">
                Flexible Deployment & Sandbox
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal max-w-xl">
                Deploy on cloud (VPS) or on-premise servers with offline floor barcode entry capability and transparent monthly pricing.
              </p>
            </div>

            {/* GridDistortion Image Container: 20px top & left padding, 0px right & bottom padding */}
            <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200/80 bg-white pt-[20px] pl-[20px] pr-0 pb-0 relative">
              <div className="relative w-full h-full overflow-hidden rounded-tl-xl border-t border-l border-slate-200/60">
                <GridDistortion 
                  imageSrc="/portfolio/freight_transparent_pricing.jpg" 
                  className="absolute inset-0 w-full h-full object-cover object-left-top"
                  grid={12}
                  mouse={0.18}
                  strength={0.15}
                  relaxation={0.9}
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
