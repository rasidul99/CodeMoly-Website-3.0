"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrambleText from "./ScrambleText";

interface EventSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  location: string;
  description: string;
}

const events: EventSlide[] = [
  {
    id: 0,
    image: "/Event/download (13).jpg",
    title: "VivaTech 2025",
    subtitle: "In Paris",
    location: "Paris, France",
    description: "CodeMoly keynotes and exhibits AI automation solutions at VivaTech Paris.",
  },
  {
    id: 1,
    image: "/Event/download (14).jpg",
    title: "VivaTech 2025",
    subtitle: "In Paris",
    location: "Paris, France",
    description: "Connecting with global tech innovators, startups, and enterprise leaders.",
  },
  {
    id: 2,
    image: "/Event/download (15).jpg",
    title: "VivaTech 2025",
    subtitle: "In Paris",
    location: "Paris, France",
    description: "Showcasing next-generation intelligent software & workflow integrations.",
  },
  {
    id: 3,
    image: "/Event/download - 2026-06-07T111512.540.png",
    title: "VivaTech 2025",
    subtitle: "In Paris",
    location: "Paris, France",
    description: "Expanding international developer networks and global business partnerships.",
  },
];

export default function GlobalEvents() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const count = events.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % count);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + count) % count);
  };

  // Auto-play timer
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(timer);
  }, [isHovered]);

  // Handle Touch Swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 40) {
      prevSlide();
    } else if (deltaX < -40) {
      nextSlide();
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="global-events"
      className="section-reveal global-events-reveal relative w-full py-20 md:py-28 bg-[#f6f7f9] text-slate-800 border-t border-slate-100 overflow-hidden"
      aria-labelledby="global-events-heading"
    >
      {/* Light Grid Background & Soft Accent Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.15]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-500/10 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10 flex flex-col items-center text-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center max-w-2xl mb-12 md:mb-16">
          <span className="font-sans text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-blue-600 mb-3 block">
            <ScrambleText text="Global Events & Conferences" />
          </span>
          <h2
            id="global-events-heading"
            className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#aebcff] via-[#2546c7] to-[#09164f]">
              CodeMoly Around The World
            </span>
          </h2>
          <p className="font-sans text-xs sm:text-base text-slate-600 leading-relaxed">
            Experience CodeMoly on the global stage. We connect with innovators, tech leaders, and partners across premier global technology events.
          </p>
        </div>

        {/* ── 3D COVERFLOW CAROUSEL CONTAINER (Pauses animation on image hover) ── */}
        <div
          className="relative w-full max-w-[1100px] h-[360px] sm:h-[430px] md:h-[470px] flex items-center justify-center select-none"
          style={{ perspective: "1200px" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {events.map((event, idx) => {
            // Calculate relative offset from active slide
            let diff = idx - activeIndex;
            if (diff < -Math.floor(count / 2)) diff += count;
            if (diff > Math.floor(count / 2)) diff -= count;

            const isActive = diff === 0;
            const isLeft = diff === -1 || (count === 4 && diff === 3);
            const isRight = diff === 1 || (count === 4 && diff === -3);
            const isBack = Math.abs(diff) === 2;

            // Compute 3D coverflow transforms
            let transform = "translate3d(0,0,-400px) rotateY(0deg) scale(0)";
            let opacity = 0;
            let zIndex = 0;
            let filter = "brightness(0.5)";

            if (isActive) {
              transform = "translate3d(0%, 0, 0px) rotateY(0deg) scale(1)";
              opacity = 1;
              zIndex = 40;
              filter = "brightness(1)";
            } else if (isLeft) {
              transform = "translate3d(-68%, 0, -160px) rotateY(38deg) scale(0.85)";
              opacity = 0.85;
              zIndex = 20;
              filter = "brightness(0.65)";
            } else if (isRight) {
              transform = "translate3d(68%, 0, -160px) rotateY(-38deg) scale(0.85)";
              opacity = 0.85;
              zIndex = 20;
              filter = "brightness(0.65)";
            } else if (isBack) {
              transform = "translate3d(0%, 0, -280px) rotateY(0deg) scale(0.72)";
              opacity = 0.4;
              zIndex = 10;
              filter = "brightness(0.4)";
            }

            return (
              <div
                key={event.id}
                onClick={() => setActiveIndex(idx)}
                className={`absolute w-[280px] sm:w-[340px] md:w-[400px] h-[340px] sm:h-[410px] md:h-[450px] rounded-[24px] sm:rounded-[32px] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border ${
                  isActive ? "shadow-[0_25px_60px_rgba(15,23,42,0.22)] border-slate-200/90" : "shadow-[0_15px_35px_rgba(15,23,42,0.12)] border-slate-300/50"
                }`}
                style={{
                  transform,
                  opacity,
                  zIndex,
                  filter,
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative w-full h-full bg-slate-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover block"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 pointer-events-none" />

                  {/* Bottom Event Title & Subtitle */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 pointer-events-none text-left">
                    <p className="font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-tight">
                      {event.title}
                    </p>
                    <p className="font-sans font-bold text-xs sm:text-sm text-blue-300 uppercase tracking-widest mt-1.5">
                      {event.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── CAROUSEL CONTROLS & PAGINATION ── */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            onClick={prevSlide}
            className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm hover:bg-slate-50 hover:border-slate-300 text-slate-700 flex items-center justify-center transition-all active:scale-95 cursor-pointer"
            aria-label="Previous Event"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {events.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  i === activeIndex
                    ? "w-8 h-2.5 bg-blue-600"
                    : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to event ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm hover:bg-slate-50 hover:border-slate-300 text-slate-700 flex items-center justify-center transition-all active:scale-95 cursor-pointer"
            aria-label="Next Event"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
