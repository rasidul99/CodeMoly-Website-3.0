"use client";

import React, { useEffect, useRef } from 'react';
import './PixelCard.css';

class Pixel {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  x: number;
  y: number;
  color: string;
  speed: number;
  size: number;
  sizeStep: number;
  minSize: number;
  maxSizeInteger: number;
  maxSize: number;
  delay: number;
  counter: number;
  counterStep: number;
  isIdle: boolean;
  isReverse: boolean;
  isShimmer: boolean;

  constructor(
    canvas: HTMLCanvasElement, 
    context: CanvasRenderingContext2D, 
    x: number, 
    y: number, 
    color: string, 
    speed: number, 
    delay: number
  ) {
    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;
    this.ctx = context;
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = this.getRandomValue(0.1, 0.9) * speed;
    this.size = 0;
    this.sizeStep = Math.random() * 0.4;
    this.minSize = 1.5;
    this.maxSizeInteger = 5;
    this.maxSize = this.getRandomValue(this.minSize, this.maxSizeInteger);
    this.delay = delay;
    this.counter = 0;
    this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01;
    this.isIdle = false;
    this.isReverse = false;
    this.isShimmer = false;
  }

  getRandomValue(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  draw() {
    const centerOffset = this.maxSizeInteger * 0.5 - this.size * 0.5;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x + centerOffset, this.y + centerOffset, this.size, this.size);
  }

  appear() {
    this.isIdle = false;
    if (this.counter <= this.delay) {
      this.counter += this.counterStep;
      return;
    }
    if (this.size >= this.maxSize) {
      this.isShimmer = true;
    }
    if (this.isShimmer) {
      this.shimmer();
    } else {
      this.size += this.sizeStep;
    }
    this.draw();
  }

  disappear() {
    this.isShimmer = false;
    this.counter = 0;
    if (this.size <= 0) {
      this.isIdle = true;
      return;
    } else {
      this.size -= 0.1;
    }
    this.draw();
  }

  shimmer() {
    if (this.size >= this.maxSize) {
      this.isReverse = true;
    } else if (this.size <= this.minSize) {
      this.isReverse = false;
    }
    if (this.isReverse) {
      this.size -= this.speed;
    } else {
      this.size += this.speed;
    }
  }
}

function getEffectiveSpeed(value: number, reducedMotion: boolean): number {
  const min = 0;
  const max = 100;
  const throttle = 0.001;
  
  if (value <= min || reducedMotion) {
    return min;
  } else if (value >= max) {
    return max * throttle;
  } else {
    return value * throttle;
  }
}

interface VariantConfig {
  activeColor: string | null;
  gap: number;
  speed: number;
  colors: string;
  noFocus: boolean;
}

const VARIANTS: Record<string, VariantConfig> = {
  default: {
    activeColor: null,
    gap: 5,
    speed: 35,
    colors: '#cbd5e1,#94a3b8,#64748b,#475569',
    noFocus: false
  },
  blue: {
    activeColor: '#0ea5e9',
    gap: 10,
    speed: 25,
    colors: '#7dd3fc,#0ea5e9,#0284c7,#0369a1',
    noFocus: false
  },
  yellow: {
    activeColor: '#eab308',
    gap: 5,
    speed: 20,
    colors: '#fde047,#eab308,#ca8a04,#854d0e',
    noFocus: false
  },
  pink: {
    activeColor: '#e11d48',
    gap: 6,
    speed: 80,
    colors: '#fda4af,#e11d48,#be123c,#9f1239',
    noFocus: true
  }
};

interface PixelCardProps {
  variant?: 'default' | 'blue' | 'yellow' | 'pink';
  gap?: number;
  speed?: number;
  colors?: string;
  noFocus?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export default function PixelCard({ 
  variant = 'default', 
  gap, 
  speed, 
  colors, 
  noFocus, 
  className = '', 
  style = {},
  children 
}: PixelCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pixelsRef = useRef<Pixel[]>([]);
  const animationRef = useRef<number | null>(null);
  const timePreviousRef = useRef<number>(performance.now());
  
  // Safe media query check for SSR environment
  const [reducedMotion, setReducedMotion] = React.useState(false);
  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  const variantCfg = VARIANTS[variant] || VARIANTS.default;
  const finalGap = gap ?? variantCfg.gap;
  const finalSpeed = speed ?? variantCfg.speed;
  const finalColors = colors ?? variantCfg.colors;
  const finalNoFocus = noFocus ?? variantCfg.noFocus;

  const initPixels = () => {
    if (!containerRef.current || !canvasRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const width = Math.floor(rect.width);
    const height = Math.floor(rect.height);
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    canvasRef.current.width = width;
    canvasRef.current.height = height;
    canvasRef.current.style.width = `${width}px`;
    canvasRef.current.style.height = `${height}px`;

    const colorsArray = finalColors.split(',');
    const pxs: Pixel[] = [];
    for (let x = 0; x < width; x += finalGap) {
      for (let y = 0; y < height; y += finalGap) {
        const color = colorsArray[Math.floor(Math.random() * colorsArray.length)];

        const dx = x - width / 2;
        const dy = y - height / 2;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const delay = reducedMotion ? 0 : distance;

        pxs.push(new Pixel(canvasRef.current, ctx, x, y, color, getEffectiveSpeed(finalSpeed, reducedMotion), delay));
      }
    }
    pixelsRef.current = pxs;
  };

  const doAnimate = (fnName: 'appear' | 'disappear') => {
    animationRef.current = requestAnimationFrame(() => doAnimate(fnName));
    const timeNow = performance.now();
    const timePassed = timeNow - timePreviousRef.current;
    const timeInterval = 1000 / 60;

    if (timePassed < timeInterval) return;
    timePreviousRef.current = timeNow - (timePassed % timeInterval);

    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx || !canvasRef.current) return;

    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    let allIdle = true;
    for (let i = 0; i < pixelsRef.current.length; i++) {
      const pixel = pixelsRef.current[i];
      pixel[fnName]();
      if (!pixel.isIdle) {
        allIdle = false;
      }
    }
    if (allIdle && animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleAnimation = (name: 'appear' | 'disappear') => {
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
    }
    animationRef.current = requestAnimationFrame(() => doAnimate(name));
  };

  useEffect(() => {
    initPixels();
    
    let observer: ResizeObserver | null = null;
    if (typeof window !== 'undefined' && window.ResizeObserver) {
      observer = new ResizeObserver(() => {
        initPixels();
      });
      if (containerRef.current) {
        observer.observe(containerRef.current);
      }
    }

    const container = containerRef.current;
    const triggerElement = container?.closest('.group') || container;

    const handleEnter = () => handleAnimation('appear');
    const handleLeave = () => handleAnimation('disappear');
    const handleFocus = () => handleAnimation('appear');
    const handleBlur = () => handleAnimation('disappear');

    if (triggerElement) {
      triggerElement.addEventListener('mouseenter', handleEnter);
      triggerElement.addEventListener('mouseleave', handleLeave);
      if (!finalNoFocus) {
        triggerElement.addEventListener('focusin', handleFocus);
        triggerElement.addEventListener('focusout', handleBlur);
      }
    }

    return () => {
      if (observer) observer.disconnect();
      if (triggerElement) {
        triggerElement.removeEventListener('mouseenter', handleEnter);
        triggerElement.removeEventListener('mouseleave', handleLeave);
        if (!finalNoFocus) {
          triggerElement.removeEventListener('focusin', handleFocus);
          triggerElement.removeEventListener('focusout', handleBlur);
        }
      }
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finalGap, finalSpeed, finalColors, finalNoFocus, reducedMotion]);

  return (
    <div
      ref={containerRef}
      className={`pixel-card ${className}`}
      style={style}
    >
      <canvas className="pixel-canvas" ref={canvasRef} />
      {children}
    </div>
  );
}
