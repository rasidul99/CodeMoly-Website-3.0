"use client";

import React, { useEffect, useState, useRef } from "react";

interface ScrambleTextProps {
  text: string;
  delay?: number; // delay in ms before starting
  duration?: number; // total duration in ms
}

export default function ScrambleText({
  text,
  delay = 100,
  duration = 800,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) {
      setDisplayText(text);
      return;
    }

    let isCancelled = false;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+?#*@$!%";
    const originalText = text;
    const length = originalText.length;
    const framesPerChar = 3;
    const totalFrames = length * framesPerChar;
    const frameInterval = duration / totalFrames;

    let frame = 0;

    const run = () => {
      if (isCancelled) return;

      const progress = frame / totalFrames;
      const lettersResolved = Math.floor(progress * length);

      let currentText = "";
      for (let i = 0; i < length; i++) {
        if (i < lettersResolved) {
          currentText += originalText[i];
        } else if (originalText[i] === " ") {
          currentText += " ";
        } else {
          currentText += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      setDisplayText(currentText);

      if (frame < totalFrames) {
        frame++;
        setTimeout(run, frameInterval);
      } else {
        setDisplayText(originalText);
      }
    };

    const startTimeout = setTimeout(run, delay);

    return () => {
      isCancelled = true;
      clearTimeout(startTimeout);
    };
  }, [isInView, text, delay, duration]);

  return (
    <span ref={elementRef}>
      {displayText}
    </span>
  );
}
