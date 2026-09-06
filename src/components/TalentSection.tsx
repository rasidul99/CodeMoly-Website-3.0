"use client";

import React from "react";
import ScrambleText from "./ScrambleText";
import GridDistortion from "./GridDistortion";
import { ArrowRight, Clock, Star } from "lucide-react";

export default function TalentSection() {
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&h=150&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
    "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=150&h=150&q=80",
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80",
    "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=150&h=150&q=80"
  ];

  return (
    <section className="section-reveal benefits-reveal relative w-full py-10 md:py-28 px-4 md:px-20 bg-[#f6f7f9] border-t border-slate-100 overflow-hidden text-slate-800" aria-labelledby="bento-heading">
      {/* Background Subtle Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.12] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="reveal-item reveal-up reveal-delay-1 mb-6 md:mb-14 text-center flex flex-col items-center justify-center">
          {/* Label Text - Aligned with other sections */}
          <span className="font-sans text-xs md:text-sm font-bold uppercase tracking-[0.15em] text-blue-600 mb-2 md:mb-4 block">
            <ScrambleText text="Benefits" />
          </span>
          
          {/* Headline Text with standard page gradient */}
          <h2 id="bento-heading" className="font-sans text-2xl md:text-[40px] lg:text-[48px] font-extrabold leading-tight tracking-tight text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#aebcff] via-[#2546c7] to-[#09164f]">
              Scale Your Development Team in Just 4 Weeks
            </span>
          </h2>
        </div>

        {/* Bento Grid Area */}
        <div className="benefits-grid grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 w-full">
          
          {/* Card 1: 24/7 Support (Top-Left) */}
          <div className="col-span-1 relative overflow-hidden rounded-2xl md:rounded-3xl min-h-[160px] sm:min-h-[200px] md:min-h-[290px] p-4 md:p-8 flex flex-col justify-between text-white bg-[#09164f] group hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300">
            {/* Background Image with Grid Distortion */}
            <GridDistortion 
              imageSrc="/portfolio/developer-workspace.png" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
              grid={12}
              mouse={0.18}
              strength={0.15}
              relaxation={0.9}
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#09164f]/95 via-[#0c1e69]/75 to-[#1d4ed8]/35 z-0" />
            
            {/* Top Clock Icon overlay */}
            <div className="relative z-10 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-sm">
              <Clock className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>

            {/* Bottom Text */}
            <div className="relative z-10">
              <h3 className="font-sans font-bold text-base sm:text-xl md:text-2xl leading-tight text-white mb-1">
                24/7 Support
              </h3>
              <p className="font-sans text-xs md:text-sm text-white/80 font-medium">
                Available for clients worldwide
              </p>
            </div>
          </div>

          {/* Card 2: 85%+ Retention (Top-Middle) */}
          <div className="col-span-1 bg-white border border-slate-200/60 rounded-2xl md:rounded-3xl p-4 md:p-8 flex flex-col justify-between min-h-[160px] sm:min-h-[200px] md:min-h-[290px] relative overflow-hidden group hover:shadow-[0_20px_40px_rgba(59,130,246,0.06)] hover:border-blue-200/40 hover:-translate-y-1 transition-all duration-300">
            {/* Center Metric */}
            <div className="my-auto">
              <span className="block font-sans text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#09164f] mb-1 md:mb-2">
                85%+
              </span>
              <span className="block font-sans text-xs sm:text-base font-bold text-slate-800">
                Retention
              </span>
              <span className="block font-sans text-[10px] md:text-sm text-slate-500 mt-0.5">
                Employee Success Rate
              </span>
            </div>

            {/* Bottom Green Up-Arrows Grid */}
            <div className="flex gap-1.5 md:gap-2.5 pt-2 md:pt-4 border-t border-slate-100 overflow-hidden">
              {[...Array(12)].map((_, i) => (
                <span 
                  key={i} 
                  className="text-emerald-500 font-extrabold text-xs sm:text-lg select-none transform group-hover:-translate-y-1 transition-all duration-300"
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  ↑
                </span>
              ))}
            </div>
          </div>

          {/* Card 3: Trusted Partner (Right Column) */}
          <div className="col-span-2 md:col-span-1 md:row-span-2 bg-white border border-slate-200/60 rounded-2xl md:rounded-3xl p-4 md:p-8 flex flex-col justify-between min-h-[220px] md:min-h-[604px] group hover:shadow-[0_20px_40px_rgba(59,130,246,0.06)] hover:border-blue-200/40 hover:-translate-y-1 transition-all duration-300">
            
            {/* Top Area - Profile Avatar Horizontal Marquees */}
            <div>
              <div className="relative -mx-4 md:-mx-8 overflow-hidden mt-3 md:mt-20 flex flex-col gap-2 md:gap-3" style={{
                maskImage: 'linear-gradient(to right, transparent, #000 20%, #000 80%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, #000 20%, #000 80%, transparent)'
              }}>
                <style dangerouslySetInnerHTML={{__html: `
                  @keyframes marquee-left {
                    0% { transform: translate3d(0, 0, 0); }
                    100% { transform: translate3d(-25%, 0, 0); }
                  }
                  @keyframes marquee-right {
                    0% { transform: translate3d(-25%, 0, 0); }
                    100% { transform: translate3d(0, 0, 0); }
                  }
                  .animate-marquee-left {
                    display: flex;
                    width: max-content;
                    animation: marquee-left 25s linear infinite;
                    will-change: transform;
                  }
                  .animate-marquee-right {
                    display: flex;
                    width: max-content;
                    animation: marquee-right 25s linear infinite;
                    will-change: transform;
                  }
                `}} />

                {/* Row 1 - Right to Left */}
                <div className="w-full overflow-hidden">
                  <div className="animate-marquee-left">
                    {[...Array(4)].map((_, groupIdx) => (
                      <div key={groupIdx} className="flex gap-2.5 pr-2.5" aria-hidden={groupIdx > 0 ? "true" : undefined}>
                        {avatars.slice(0, 5).map((imgUrl, idx) => (
                          <div key={idx} className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-slate-200 object-cover overflow-hidden flex-shrink-0 shadow-xs">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={imgUrl} alt="Dev avatar" className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Row 2 - Left to Right */}
                <div className="w-full overflow-hidden">
                  <div className="animate-marquee-right">
                    {[...Array(4)].map((_, groupIdx) => (
                      <div key={groupIdx} className="flex gap-2.5 pr-2.5" aria-hidden={groupIdx > 0 ? "true" : undefined}>
                        {avatars.slice(5, 10).map((imgUrl, idx) => (
                          <div key={idx} className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-slate-200 object-cover overflow-hidden flex-shrink-0 shadow-xs">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={imgUrl} alt="Dev avatar" className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Row 3 - Right to Left */}
                <div className="w-full overflow-hidden hidden md:block">
                  <div className="animate-marquee-left">
                    {[...Array(4)].map((_, groupIdx) => (
                      <div key={groupIdx} className="flex gap-2.5 pr-2.5" aria-hidden={groupIdx > 0 ? "true" : undefined}>
                        {avatars.slice(10, 15).map((imgUrl, idx) => (
                          <div key={idx} className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-slate-200 object-cover overflow-hidden flex-shrink-0 shadow-xs">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={imgUrl} alt="Dev avatar" className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Area - 5 Stars and Value Text */}
            <div className="mt-3 md:mt-auto">
              <div className="flex gap-1 mb-2 md:mb-4 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                ))}
              </div>

              <h3 className="font-sans font-bold text-lg md:text-2xl leading-tight text-[#09164f] mb-1 md:mb-3">
                Fortune 500
              </h3>
              <p className="font-sans text-xs md:text-base font-bold text-slate-800 mb-1 md:mb-2">
                Trusted Partner
              </p>
              <p className="font-sans text-[11px] md:text-sm text-slate-500 leading-relaxed">
                Reliable delivery of enterprise-grade solutions meeting rigorous code quality and safety specifications.
              </p>
            </div>
          </div>

          {/* Card 4: Onboard Time (Bottom-Left - Spans 2 Columns) */}
          <div className="col-span-2 md:col-span-2 bg-white border border-slate-200/60 rounded-2xl md:rounded-3xl p-4 md:p-8 flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-8 min-h-[180px] md:min-h-[290px] relative overflow-hidden group hover:shadow-[0_20px_40px_rgba(59,130,246,0.06)] hover:border-blue-200/40 hover:-translate-y-1 transition-all duration-300">
            
            {/* Left Content Column */}
            <div className="flex flex-col items-start text-left w-full sm:w-[55%] z-10">
              <span className="font-sans text-xs md:text-sm font-bold text-blue-600 mb-1 md:mb-2">
                <ScrambleText text="Onboard Time: 1–4 Weeks" />
              </span>
              <h3 className="font-sans font-bold text-lg md:text-2xl leading-tight text-slate-900 mb-2 md:mb-3">
                Connect with Top 1% Bangladesh Talent
              </h3>
              <p className="font-sans text-xs md:text-sm text-slate-500 leading-relaxed mb-4 md:mb-6">
                From startups to enterprises—build scalable, secure software with our expert teams.
              </p>

              {/* Free Trial CTA Button */}
              <a 
                href="#" 
                className="open-contact-modal group/btn relative flex items-center justify-center h-10 md:h-12 px-5 md:px-6 rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 text-white font-bold text-xs md:text-sm tracking-wide cursor-pointer"
              >
                <div 
                  className="absolute inset-0 transition-transform duration-500 group-hover/btn:scale-110" 
                  style={{ backgroundImage: "linear-gradient(rgb(29, 78, 216), rgb(59, 130, 246))" }}
                />
                <div className="relative flex items-center gap-2">
                  <span>Free 3 Day Developers Trial</span>
                  <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </div>
              </a>
            </div>

            {/* Right Stack Grid Column */}
            <div className="relative flex justify-center items-center w-full sm:w-[40%] h-[120px] sm:h-[180px] z-10 select-none pointer-events-none hidden sm:flex">
              <div className="grid grid-cols-3 gap-3 transform rotate-6 scale-95 origin-center">
                {/* Empty grid filler */}
                <div className="w-12 h-12 bg-slate-100/50 border border-slate-200/40 rounded-xl" />
                
                {/* React */}
                <div className="w-12 h-12 bg-white border border-slate-200/80 rounded-xl flex items-center justify-center shadow-md">
                  <svg className="w-6 h-6 text-cyan-500 animate-[spin_10s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="2" />
                    <path d="M12 5C6 5 2 12 12 12S18 5 12 5z" transform="rotate(30 12 12)" />
                    <path d="M12 5C6 5 2 12 12 12S18 5 12 5z" transform="rotate(90 12 12)" />
                    <path d="M12 5C6 5 2 12 12 12S18 5 12 5z" transform="rotate(150 12 12)" />
                  </svg>
                </div>
                
                {/* Empty grid filler */}
                <div className="w-12 h-12 bg-slate-100/50 border border-slate-200/40 rounded-xl" />
                
                {/* Next.js text identifier */}
                <div className="w-12 h-12 bg-white border border-slate-200/80 rounded-xl flex items-center justify-center shadow-md font-bold text-slate-800 text-base">
                  N
                </div>

                {/* Postgres Database Icon */}
                <div className="w-12 h-12 bg-white border border-slate-200/80 rounded-xl flex items-center justify-center shadow-md">
                  <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 20c-.17.34-.03.76.31.93.1.05.21.07.31.07h12c.41 0 .75-.34.75-.75 0-.1.02-.21-.07-.31l-.63-2.38C18.26 16.07 19 14.12 19 12c0-4.97-4.03-9-9-9z" />
                  </svg>
                </div>

                {/* Node.js identifier */}
                <div className="w-12 h-12 bg-white border border-slate-200/80 rounded-xl flex items-center justify-center shadow-md text-emerald-600 font-bold text-sm">
                  JS
                </div>

                {/* Empty grid filler */}
                <div className="w-12 h-12 bg-slate-100/50 border border-slate-200/40 rounded-xl" />
                
                {/* Python identifier */}
                <div className="w-12 h-12 bg-white border border-slate-200/80 rounded-xl flex items-center justify-center shadow-md text-yellow-600 text-sm font-mono font-bold">
                  Py
                </div>
                
                {/* Empty grid filler */}
                <div className="w-12 h-12 bg-slate-100/50 border border-slate-200/40 rounded-xl" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
