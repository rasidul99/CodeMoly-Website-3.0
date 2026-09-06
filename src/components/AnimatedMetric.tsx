"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedMetricProps = {
  end: number;
  suffix?: string;
  finalText?: string;
  className?: string;
};

export default function AnimatedMetric({
  end,
  suffix = "",
  finalText,
  className,
}: AnimatedMetricProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setValue(end);
      setIsComplete(true);
      return;
    }

    let frameId = 0;
    let started = false;

    const startCount = () => {
      if (started) return;
      started = true;

      const duration = 1400;
      const startTime = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        setValue(Math.round(end * eased));

        if (progress < 1) {
          frameId = requestAnimationFrame(tick);
        } else {
          setIsComplete(true);
        }
      };

      frameId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        startCount();
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [end]);

  return (
    <span ref={ref} className={className}>
      {finalText && isComplete ? finalText : `${value}${suffix}`}
    </span>
  );
}
