"use client";

import React from "react";
import ScrambleText from "./ScrambleText";
import { Code2, ShieldCheck, Zap, Activity, Check, ArrowRight } from "lucide-react";

export default function AiDevelopment() {
  const stats = [
    { value: "500+", label: "Projects", sublabel: "Successfully delivered" },
    { value: "100%", label: "IP Protection", sublabel: "Enterprise security" },
    { value: "Top 1%", label: "Talent", sublabel: "Global developers" }
  ];

  const features = [
    {
      title: "Intelligent Coding",
      stat: "70%",
      statLabel: "Faster Development",
      description: "AI-powered code synthesis and auto-completion reduce manual effort while maintaining enterprise-grade standards.",
      bullets: [
        "Context-aware code generation",
        "Intelligent auto-completion",
        "Best practice enforcement"
      ],
      icon: Code2,
      color: "blue",
      highlighted: true
    },
    {
      title: "Bulletproof QA",
      stat: "99.9%",
      statLabel: "Defect-Free Releases",
      description: "Self-learning test suites detect bugs early, with automated fixes for flawless deployments.",
      bullets: [
        "Predictive bug detection",
        "Automated test generation",
        "Self-healing code"
      ],
      icon: ShieldCheck,
      color: "emerald",
      highlighted: false
    },
    {
      title: "Peak Performance",
      stat: "40%",
      statLabel: "Higher Efficiency",
      description: "ML algorithms optimize resource allocation, predict scaling needs, and eliminate bottlenecks in real-time.",
      bullets: [
        "Real-time optimization",
        "Predictive scaling",
        "Resource intelligence"
      ],
      icon: Zap,
      color: "amber",
      highlighted: false
    },
    {
      title: "Zero-Downtime DevOps",
      stat: "90%",
      statLabel: "Faster Deployments",
      description: "AI-driven CI/CD pipelines automate rollbacks and canary releases for seamless updates.",
      bullets: [
        "Intelligent rollbacks",
        "Automated canary releases",
        "Risk prediction"
      ],
      icon: Activity,
      color: "purple",
      highlighted: false
    }
  ];

  return (
    <section id="features" className="section-reveal ai-development-reveal relative w-full py-12 md:py-28 px-4 md:px-20 bg-[#f6f7f9] border-t border-slate-100 overflow-hidden text-slate-800" aria-labelledby="ai-excellence-heading">
      {/* 3D Flip Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .flip-card-container {
          perspective: 1000px;
          height: 210px;
        }
        @media (min-width: 768px) {
          .flip-card-container {
            height: 360px;
          }
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }
        .flip-card-container:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1rem;
          box-sizing: border-box;
        }
        @media (min-width: 768px) {
          .flip-card-front, .flip-card-back {
            border-radius: 24px;
            padding: 2rem;
          }
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}} />

      {/* Background Subtle Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.18] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header Area (Centered at the top) */}
        <div className="reveal-item reveal-up reveal-delay-1 flex flex-col items-center justify-center text-center mb-6 md:mb-16 max-w-6xl mx-auto">
          <span className="font-sans text-[11px] md:text-sm font-bold uppercase tracking-[0.15em] text-blue-600 mb-1.5 md:mb-4 block">
            <ScrambleText text="AI-Driven Development Excellence" />
          </span>
          <h2 id="ai-excellence-heading" className="font-sans text-xl md:text-[42px] lg:text-[46px] font-extrabold leading-tight tracking-tight text-center mb-0">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#aebcff] via-[#2546c7] to-[#09164f]">
              AI-Powered Features for Accelerated Development
            </span>
          </h2>
        </div>

        {/* Bento Grid Area */}
        <div className="ai-development-grid grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 w-full">
          
          {/* First Card: Stats Card */}
          <div className="col-span-2 lg:col-span-2 md:col-span-2 bg-white border border-slate-200/60 rounded-[18px] md:rounded-[24px] p-4 md:p-10 flex flex-col md:flex-row justify-between gap-4 md:gap-8 hover:shadow-[0_20px_40px_rgba(0,0,0,0.03)] transition-all duration-300 h-auto md:h-[360px] lg:h-[360px]">
            
            {/* Left Inner Column: Button and Description */}
            <div className="flex flex-col justify-between items-start text-left w-full md:w-[50%] h-full">
              <div className="flex justify-start mb-1.5 md:mb-4">
                <span className="inline-flex items-center px-3 py-0.5 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold bg-blue-50 border border-blue-200 text-blue-600 uppercase tracking-wider">
                  10X Faster Delivery
                </span>
              </div>
              
              <p className="font-sans text-xs md:text-sm text-slate-600 leading-relaxed font-normal mt-0.5 mb-1.5 md:mb-0">
                We integrate cutting-edge AI across the development lifecycle - delivering solutions 10X faster with unmatched reliability. Our engineers augment human expertise with AI to automate, optimize, and future-proof your software.
              </p>
            </div>

            {/* Right Inner Column: Stats in 1 row on mobile */}
            <div className="grid grid-cols-3 md:flex md:flex-col justify-between w-full md:w-[45%] h-full border-t md:border-t-0 md:border-l border-slate-100 pt-3 md:pt-0 md:pl-8 gap-2 md:gap-0">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col md:flex-row items-center md:items-center gap-1 md:gap-4 text-center md:text-left border-r last:border-r-0 md:border-r-0 md:border-b md:last:border-b-0 pr-1 md:pr-0 pb-0 md:pb-3 last:pb-0 h-full">
                  <div className="min-w-0 md:min-w-[100px]">
                    <span className="font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#09164f] tracking-tight">
                      {stat.value}
                    </span>
                  </div>
                  <div>
                    <span className="block font-sans text-[11px] md:text-base font-bold text-slate-800 leading-tight">
                      {stat.label}
                    </span>
                    <span className="block font-sans text-[9px] md:text-xs text-slate-500 leading-normal hidden sm:block">
                      {stat.sublabel}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Feature Flip Cards (2-cols on mobile) */}
          {features.map((feat, i) => {
            const IconComponent = feat.icon;
            
            const colorClasses = {
              blue: {
                text: "text-blue-300",
                bg: "bg-white/10 border-white/20",
                darkBg: "bg-[#07113e] text-white border-2 border-blue-500/30",
                frontBg: "bg-[#09164f] text-white border-2 border-blue-500/30 shadow-lg shadow-blue-900/10",
                statText: "text-blue-400",
                promptText: "text-blue-300",
                bulletBg: "bg-blue-900/30 border-blue-800/40"
              },
              emerald: {
                text: "text-blue-300",
                bg: "bg-white/10 border-white/20",
                frontBg: "bg-[#09164f] text-white border-2 border-blue-500/30 shadow-lg shadow-blue-900/10",
                darkBg: "bg-[#07113e] text-white border-2 border-blue-500/30",
                statText: "text-blue-400",
                promptText: "text-blue-300",
                bulletBg: "bg-blue-900/30 border-blue-800/40"
              },
              amber: {
                text: "text-blue-300",
                bg: "bg-white/10 border-white/20",
                frontBg: "bg-[#09164f] text-white border-2 border-blue-500/30 shadow-lg shadow-blue-900/10",
                darkBg: "bg-[#07113e] text-white border-2 border-blue-500/30",
                statText: "text-blue-400",
                promptText: "text-blue-300",
                bulletBg: "bg-blue-900/30 border-blue-800/40"
              },
              purple: {
                text: "text-blue-300",
                bg: "bg-white/10 border-white/20",
                frontBg: "bg-[#09164f] text-white border-2 border-blue-500/30 shadow-lg shadow-blue-900/10",
                darkBg: "bg-[#07113e] text-white border-2 border-blue-500/30",
                statText: "text-blue-400",
                promptText: "text-blue-300",
                bulletBg: "bg-blue-900/30 border-blue-800/40"
              }
            }[feat.color as 'blue' | 'emerald' | 'amber' | 'purple'] || {
              text: "text-blue-600",
              bg: "bg-blue-50 border-blue-100/50",
              frontBg: "bg-white text-slate-800 border border-slate-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.01)]",
              darkBg: "bg-slate-50 text-slate-800 border border-slate-200/60",
              statText: "text-blue-600",
              promptText: "text-slate-400",
              bulletBg: "bg-blue-50 border-blue-100/50"
            };

            return (
              <div key={i} className="flip-card-container col-span-1 lg:col-span-1 md:col-span-1 hover:-translate-y-1 transition-all duration-300">
                <div className="flip-card-inner">
                  
                  {/* FRONT FACE */}
                  <div className={`flip-card-front ${colorClasses.frontBg}`}>
                    {/* Top Content */}
                    <div className="w-full">
                      <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-5">
                        <div className={`w-7 h-7 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center ${colorClasses.bg} border flex-shrink-0`}>
                          <IconComponent className={`w-3.5 h-3.5 md:w-6 md:h-6 ${colorClasses.text}`} />
                        </div>
                        <h3 className="font-sans font-bold text-xs md:text-lg text-white leading-tight">
                          {feat.title}
                        </h3>
                      </div>

                      {/* Stat display */}
                      <div className="mb-1.5 md:mb-4">
                        <span className={`inline-block font-sans text-xl md:text-4xl font-black ${colorClasses.statText} tracking-tight mr-1`}>
                          {feat.stat}
                        </span>
                        <span className="font-sans text-[10px] md:text-sm font-bold text-slate-200">
                          {feat.statLabel}
                        </span>
                      </div>

                      <p className="font-sans text-[11px] md:text-sm leading-tight text-slate-300 line-clamp-2 md:line-clamp-none">
                        {feat.description}
                      </p>
                    </div>

                    {/* Bottom Prompt */}
                    <div className="w-full flex items-center gap-1 pt-1.5 md:pt-4 border-t border-slate-100/10">
                      <span className={`font-sans text-[10px] md:text-xs font-semibold tracking-wide ${colorClasses.promptText}`}>
                        Tap to reveal &rarr;
                      </span>
                    </div>
                  </div>

                  {/* BACK FACE */}
                  <div className={`flip-card-back ${colorClasses.darkBg}`}>
                    {/* Header */}
                    <div className="w-full">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${colorClasses.bg} border`}>
                          <IconComponent className={`w-5 h-5 ${colorClasses.text}`} />
                        </div>
                        <h3 className="font-sans font-bold text-base text-white">
                          {feat.title} - Features
                        </h3>
                      </div>
                    </div>

                    {/* Bullets content list */}
                    <div className="w-full flex flex-col gap-3 my-auto">
                      {feat.bullets.map((bullet, bulletIdx) => (
                        <div key={bulletIdx} className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center ${colorClasses.bulletBg} border`}>
                            <Check className={`w-3 h-3 ${colorClasses.text}`} strokeWidth={3} />
                          </div>
                          <span className="font-sans text-xs font-semibold text-slate-200">
                            {bullet}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Back Prompts */}
                    <div className="w-full pt-4 border-t border-slate-100/10">
                      <span className={`font-sans text-[11px] font-semibold uppercase tracking-wider ${colorClasses.statText}`}>
                        Accelerating Success
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
