"use client";

import React from "react";
import ScrambleText from "./ScrambleText";

export default function CtaSection() {
  return (
    <section className="section-reveal growth-cta-reveal relative w-full py-28 md:py-36 border-t border-slate-900/60 overflow-hidden text-white flex items-center justify-center" aria-labelledby="cta-heading">
      
      {/* Solid Background Base Layer */}
      <div className="absolute inset-0 bg-[#080b11] -z-30" />

      {/* Background Video Layer */}
      <video
        className="absolute inset-0 w-full h-full object-cover pointer-events-none -z-20 opacity-60"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/0604 (1).mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay layers for high text readability */}
      <div className="absolute inset-0 bg-slate-950/40 pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080b11]/90 via-transparent to-[#080b11]/70 pointer-events-none -z-10" />

      {/* Background Subtle Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.04] pointer-events-none" />

      {/* Cyberpunk background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-[1400px] mx-auto text-center relative z-10 px-5 md:px-20">
        
        {/* Sub-headline/Label */}
        <span className="reveal-item reveal-up reveal-delay-1 inline-block font-sans text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-blue-400 mb-6 animate-pulse">
          <ScrambleText text="Start Your Growth Journey Today" />
        </span>

        {/* Main Headline */}
        <h2 id="cta-heading" className="reveal-item reveal-up reveal-delay-2 font-sans text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-8 max-w-4xl mx-auto">
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400">
            Ready to Scale Your Team
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400">
            & Automate Your Business?
          </span>
        </h2>

        {/* Description Body Text */}
        <p className="reveal-item reveal-up reveal-delay-3 font-sans text-base md:text-xl leading-relaxed text-slate-300 max-w-3xl mx-auto mb-12 opacity-95">
          Join hundreds of companies already cutting costs and saving up to 70% of their time with our staff augmentation and intelligent automation solutions.
        </p>

        {/* Premium Skeuomorphic Action Button */}
        <div className="reveal-item reveal-soft reveal-delay-4 flex justify-center items-center mt-4">
          <div className="cta-contact-wrapper">
            <a href="#" className="cta-contact cta-contact-wide">
              Book a Free Strategy Call
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
