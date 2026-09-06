"use client";

import React, { useState, useEffect, useRef } from "react";

interface HeroSpotlightBackgroundProps {
  imageSrc: string;
  altText?: string;
  spotlightRadius?: number;
  glowColor?: string;
}

export default function HeroSpotlightBackground({
  imageSrc,
  altText = "Hero Background Image",
  spotlightRadius = 260,
  glowColor = "rgba(59, 130, 246, 0.3)",
}: HeroSpotlightBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Smooth position state for rendering
  const [smoothPos, setSmoothPos] = useState<{ x: number; y: number } | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Animation frame and target refs
  const targetPosRef = useRef<{ x: number; y: number } | null>(null);
  const currentPosRef = useRef<{ x: number; y: number } | null>(null);
  const isHoveredRef = useRef(false);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Find closest parent section or fallback to container
    const heroSection = container.closest("section") || container;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = heroSection.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Check if pointer is within hero section bounds
      if (x >= -50 && x <= rect.width + 50 && y >= -50 && y <= rect.height + 50) {
        targetPosRef.current = { x, y };
        isHoveredRef.current = true;
        setIsHovered(true);

        if (!currentPosRef.current) {
          currentPosRef.current = { x, y };
        }
      } else {
        isHoveredRef.current = false;
        setIsHovered(false);
      }
    };

    const handlePointerLeave = () => {
      isHoveredRef.current = false;
      setIsHovered(false);
    };

    heroSection.addEventListener("pointermove", handlePointerMove as EventListener, { passive: true });
    heroSection.addEventListener("pointerleave", handlePointerLeave, { passive: true });

    // Smooth Lerp Animation Loop
    let lastTime = performance.now();
    const updateLerp = () => {
      const now = performance.now();
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      if (targetPosRef.current && currentPosRef.current && isHoveredRef.current) {
        const lerpSpeed = 12.0; // Smooth inertia factor
        const factor = 1 - Math.exp(-lerpSpeed * dt);

        currentPosRef.current.x += (targetPosRef.current.x - currentPosRef.current.x) * factor;
        currentPosRef.current.y += (targetPosRef.current.y - currentPosRef.current.y) * factor;

        setSmoothPos({
          x: Math.round(currentPosRef.current.x * 10) / 10,
          y: Math.round(currentPosRef.current.y * 10) / 10,
        });
      } else if (!isHoveredRef.current) {
        setSmoothPos(null);
      }

      animFrameRef.current = requestAnimationFrame(updateLerp);
    };

    animFrameRef.current = requestAnimationFrame(updateLerp);

    return () => {
      heroSection.removeEventListener("pointermove", handlePointerMove as EventListener);
      heroSection.removeEventListener("pointerleave", handlePointerLeave);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
    >
      {/* Base Background Image (Hidden when not hovered) */}
      <img
        src={imageSrc}
        alt={altText}
        className="w-full h-full object-cover opacity-0 mix-blend-luminosity pointer-events-none"
      />

      {/* Smooth Torchlight Revealed Image */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 ease-out"
        style={{
          opacity: isHovered && smoothPos ? 0.8 : 0,
          maskImage: smoothPos
            ? `radial-gradient(circle ${spotlightRadius}px at ${smoothPos.x}px ${smoothPos.y}px, black 0%, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.2) 70%, transparent 100%)`
            : "none",
          WebkitMaskImage: smoothPos
            ? `radial-gradient(circle ${spotlightRadius}px at ${smoothPos.x}px ${smoothPos.y}px, black 0%, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.2) 70%, transparent 100%)`
            : "none",
        }}
      >
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-full object-cover mix-blend-luminosity scale-105"
        />
      </div>

      {/* Soft Glow Ambient Ring */}
      {isHovered && smoothPos && (
        <div
          className="absolute rounded-full pointer-events-none transition-opacity duration-500 border border-white/20"
          style={{
            width: `${spotlightRadius * 2}px`,
            height: `${spotlightRadius * 2}px`,
            transform: `translate3d(${smoothPos.x - spotlightRadius}px, ${smoothPos.y - spotlightRadius}px, 0)`,
            boxShadow: `0 0 50px ${glowColor}`,
          }}
        />
      )}

      {/* Hero dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09102a]/80 via-[#09102a]/50 to-[#09102a] pointer-events-none" />
    </div>
  );
}
