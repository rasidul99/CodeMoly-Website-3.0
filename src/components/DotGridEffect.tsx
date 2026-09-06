"use client";

import React, { useEffect, useRef } from "react";

export default function DotGridEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // Grid properties
    const spacing = 32;
    const dots: {
      x: number;
      y: number;
      ox: number;
      oy: number;
      vx: number;
      vy: number;
      color: string;
      size: number;
    }[] = [];

    // Initialize dots in a grid
    const initDots = () => {
      dots.length = 0;
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const ox = c * spacing;
          const oy = r * spacing;
          
          // Determine color based on X position to match antigravity.google color range:
          // Left: orange/red, Center: blue/indigo, Right: purple/pink
          const ratio = ox / width;
          let hue = 220; // Default blue
          let saturation = 85;
          let lightness = 55;

          if (ratio < 0.3) {
            // Gradient from Orange-Yellow to Orange-Red (Left side)
            const subRatio = ratio / 0.3;
            hue = 24 + subRatio * 16; // Hue 24 to 40
            saturation = 95;
            lightness = 52;
          } else if (ratio < 0.7) {
            // Gradient from Blue-Purple to Light Blue (Center area)
            const subRatio = (ratio - 0.3) / 0.4;
            hue = 215 + subRatio * 20; // Hue 215 to 235
            saturation = 85;
            lightness = 55;
          } else {
            // Gradient from Purple to Magenta-Pink (Right side)
            const subRatio = (ratio - 0.7) / 0.3;
            hue = 260 + subRatio * 40; // Hue 260 to 300
            saturation = 80;
            lightness = 58;
          }

          dots.push({
            x: ox,
            y: oy,
            ox: ox,
            oy: oy,
            vx: 0,
            vy: 0,
            color: `hsla(${hue}, ${saturation}%, ${lightness}%, 0.65)`,
            size: 2.5 + Math.random() * 1.2, // Tilted size variation
          });
        }
      }
    };

    initDots();

    // Physics parameters
    const repulsionRadius = 130;
    const repulsionStrength = 55;
    const springForce = 0.045; // Speed of return spring
    const friction = 0.86; // Damping

    // Animation Loop
    const tick = () => {
      ctx.clearRect(0, 0, width, height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const mouseActive = mouseRef.current.active;

      ctx.lineWidth = 2.5;
      ctx.lineCap = "round";

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        
        let targetX = dot.ox;
        let targetY = dot.oy;

        if (mouseActive) {
          const dx = dot.x - mx;
          const dy = dot.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < repulsionRadius) {
            const force = (repulsionRadius - dist) / repulsionRadius;
            const angle = Math.atan2(dy, dx);
            
            // Push dots away (repulsion)
            targetX = dot.ox + Math.cos(angle) * force * repulsionStrength;
            targetY = dot.oy + Math.sin(angle) * force * repulsionStrength;
          }
        }

        // Spring acceleration back to target
        const ax = (targetX - dot.x) * springForce;
        const ay = (targetY - dot.y) * springForce;

        dot.vx = (dot.vx + ax) * friction;
        dot.vy = (dot.vy + ay) * friction;

        dot.x += dot.vx;
        dot.y += dot.vy;

        // Draw tilted dash/dot matching screenshot (roughly 45 degree tilt)
        ctx.strokeStyle = dot.color;
        ctx.beginPath();
        // Drawing a small line at an angle creates the hand-drawn organic dash feel
        const length = dot.size;
        ctx.moveTo(dot.x - length * 0.7, dot.y - length * 0.7);
        ctx.lineTo(dot.x + length * 0.7, dot.y + length * 0.7);
        ctx.stroke();
      }

      animationId = requestAnimationFrame(tick);
    };

    tick();

    // Event handlers
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.touches[0].clientX - rect.left;
      mouseRef.current.y = e.touches[0].clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      initDots();
    };

    // Attach listeners
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full block pointer-events-none"
      style={{ mixBlendMode: "multiply", opacity: 0.85 }}
    />
  );
}
