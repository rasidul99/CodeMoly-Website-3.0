"use client";

import React, { useState, useEffect, useRef } from "react";
import ScrambleText from "./ScrambleText";
import GridDistortion from "./GridDistortion";

const tools = [
  {
    title: "AI Documentation",
    description: "Auto-generated docs & comments",
    image: "/ai_docs_card.png",
  },
  {
    title: "Smart Debugging",
    description: "AI-powered error resolution",
    image: "/smart_debug_card.png",
  },
  {
    title: "Code Refactoring",
    description: "Intelligent code optimization",
    image: "/code_refactor_card.png",
  },
  {
    title: "Security Scanning",
    description: "Automated vulnerability detection",
    image: "/security_scan_card.png",
  }
];

export default function DevToolkit() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setActiveIndex(0);
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    }, { threshold: 0.25 });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tools.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <section ref={sectionRef} className="section-reveal developer-experience-reveal relative w-full py-12 md:py-28 px-5 md:px-20 bg-white border-t border-slate-100 overflow-hidden text-slate-800" aria-labelledby="toolkit-heading">
      {/* Background Subtle Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.12] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header Area: 2-column layout (Headline left, body text right) */}
        <div className="reveal-item reveal-up reveal-delay-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-8 md:mb-16">
          <div className="flex flex-col items-start text-left lg:col-span-7">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-blue-600 mb-4">
              <ScrambleText text="AI-Powered Developer Experience" />
            </span>
            <h2 id="toolkit-heading" className="font-sans text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-left">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#aebcff] via-[#2546c7] to-[#09164f] lg:whitespace-nowrap">
                Complete Development Toolkit
              </span>
            </h2>
          </div>
          
          <div className="text-left lg:text-right w-full flex justify-start lg:justify-end lg:col-span-5">
            <p className="font-sans text-base md:text-xl leading-relaxed text-slate-600">
              Comprehensive AI-powered tools that cover every aspect of modern software development.
            </p>
          </div>
        </div>

        {/* Horizontal Line tracking the active card */}
        <div className="reveal-item reveal-soft reveal-delay-2 w-full h-[2px] bg-slate-100 relative mb-8 md:mb-16 hidden md:block">
          <div 
            className="absolute top-0 h-[3px] -translate-y-[0.5px] bg-slate-500 rounded-full transition-all duration-700 ease-in-out" 
            style={{ 
              left: `${activeIndex * 25}%`, 
              width: "25%" 
            }} 
          />
        </div>

        {/* 4 Cards Grid */}
        <div className="developer-experience-grid grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 w-full">
          {tools.map((tool, i) => {
            const isActive = i === activeIndex;

            return (
              <div 
                key={i}
                className="flex flex-col text-left group cursor-pointer"
                onClick={() => setActiveIndex(i)}
              >
                {/* Real Image Card (Portrait ratio 3:4, transition handled on img to keep grayscale crisp without browser blur) */}
                <div className={`relative overflow-hidden rounded-2xl aspect-[3/4] border-2 transition-all duration-700 group-hover:border-blue-400/60 group-hover:shadow-[0_20px_45px_rgba(37,70,199,0.18)] group-hover:scale-[1.02] ${
                  isActive 
                    ? "border-slate-400 shadow-lg scale-[1.02] z-10" 
                    : "border-slate-100 scale-100"
                }`}>
                  <GridDistortion 
                    imageSrc={tool.image} 
                    className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100 [backface-visibility:hidden] [transform:translate3d(0,0,0)] ${
                      isActive 
                        ? "grayscale-0 contrast-100 opacity-100" 
                        : "grayscale contrast-[1.08] opacity-90"
                    }`}
                    grid={12}
                    mouse={0.18}
                    strength={0.15}
                    relaxation={0.9}
                  />
                  
                  {/* Subtle overlay when active */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 via-transparent to-transparent pointer-events-none" />
                  )}
                </div>

                {/* Card Info Below */}
                <div className="mt-3 md:mt-5 transition-all duration-500">
                  <h3 className={`font-sans font-bold text-base md:text-xl mb-1 md:mb-1.5 transition-colors duration-500 ${
                    isActive ? "text-[#09164f]" : "text-slate-400 group-hover:text-[#2546c7]"
                  }`}>
                    {tool.title}
                  </h3>
                  <p className={`font-sans text-xs md:text-sm transition-colors duration-500 leading-normal ${
                    isActive ? "text-slate-600" : "text-slate-400 group-hover:text-slate-600"
                  }`}>
                    {tool.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
