"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight > 0) {
        const rawPercent = (scrollY / docHeight) * 100;
        const percent = Math.min(100, Math.max(0, Math.round(rawPercent)));
        setScrollPercent(percent);

        // Strictly show button ONLY when user scrolls down 20% or more from top
        if (rawPercent >= 20) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // SVG Circle Parameters for Progress Ring
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollPercent / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#09164f]/95 text-white shadow-[0_10px_25px_rgba(9,22,79,0.6)] border border-blue-400/40 hover:border-blue-300 hover:scale-110 active:scale-95 transition-all duration-300 backdrop-blur-md cursor-pointer flex items-center justify-center group select-none ${
        isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      {/* SVG Circular Progress Ring */}
      <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-1" viewBox="0 0 52 52">
        {/* Background Track Circle */}
        <circle
          cx="26"
          cy="26"
          r={radius}
          fill="none"
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="2.5"
        />
        {/* Active Animated Progress Circle */}
        <circle
          cx="26"
          cy="26"
          r={radius}
          fill="none"
          stroke="#60a5fa"
          strokeWidth="2.5"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-[stroke-dashoffset] duration-150 ease-out"
        />
      </svg>

      {/* Arrow Up Icon Only */}
      <div className="relative z-10 flex items-center justify-center pointer-events-none">
        <ArrowUp className="w-5 h-5 text-white group-hover:text-blue-200 group-hover:-translate-y-1 transition-all duration-300" />
      </div>
    </button>
  );
}
