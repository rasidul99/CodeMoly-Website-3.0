"use client";

import React, { useEffect, useRef, useState } from "react";

export default function HeroInteractiveBg() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const parent = containerRef.current?.parentElement;
    if (!parent) return;

    // Track mouse position relative to the hero section container
    const handleMouseMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    // Attach listeners directly to parent container
    parent.addEventListener("mousemove", handleMouseMove);
    parent.addEventListener("mouseenter", handleMouseEnter);
    parent.addEventListener("mouseleave", handleMouseLeave);

    // Check if mouse is already hovering upon mount
    const currentRect = parent.getBoundingClientRect();
    const cursorInside = (
      window.event && 
      (window.event as MouseEvent).clientX >= currentRect.left && 
      (window.event as MouseEvent).clientX <= currentRect.right && 
      (window.event as MouseEvent).clientY >= currentRect.top && 
      (window.event as MouseEvent).clientY <= currentRect.bottom
    );
    if (cursorInside) {
      setIsHovered(true);
    }

    return () => {
      parent.removeEventListener("mousemove", handleMouseMove);
      parent.removeEventListener("mouseenter", handleMouseEnter);
      parent.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-1000 ease-out"
      style={{
        backgroundImage: "url('/homepagesd.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: isHovered ? 0.08 : 0.0,
        maskImage: `radial-gradient(circle 350px at ${mousePos.x}% ${mousePos.y}%, black 20%, transparent 100%)`,
        WebkitMaskImage: `radial-gradient(circle 350px at ${mousePos.x}% ${mousePos.y}%, black 20%, transparent 100%)`,
      }}
    />
  );
}
