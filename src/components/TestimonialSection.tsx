"use client";

import React, { useRef, useState } from "react";
import ScrambleText from "./ScrambleText";

const testimonials = [
  {
    id: 1,
    name: "Ted Nash",
    company: "Yenex",
    role: "Founder & CEO",
    industry: "Renewable Energy",
    services: "UI/UX Design, Product MVP",
    shortQuote: "I never expected building a complex platform to feel this easy and smooth.",
    fullReview:
      "I've had the pleasure of collaborating with CodeMoly for a while now on my new project. They're lightning-quick in addressing any questions or feedback I have, and they consistently go the extra mile to make sure I'm thrilled with the final outcome. I wholeheartedly endorse them.",
    avatar: "/testimonials/ted_nash.png",
  },
  {
    id: 2,
    name: "Sofia Gouveia",
    company: "Esdiac",
    role: "Design Director",
    industry: "Telecom",
    services: "UI/UX Design, Product MVP",
    shortQuote: "We relied on them to build our online store with AI-enhanced features that improve customer experience.",
    fullReview:
      "Working with CodeMoly on our ESDIAC app and group websites was an excellent experience. They were patient, attentive to feedback, and delivered clean, consistent, high-quality work. We're proud of the results and happy to continue our long-term partnership with them.",
    avatar: "/testimonials/sofia_gouveia.png",
  },
  {
    id: 3,
    name: "Anika",
    company: "Coin Pulse",
    role: "Founder",
    industry: "Fintech",
    services: "UI/UX Design, Product MVP",
    shortQuote: "Their team truly understood our vision and brought it to life through a stunning digital identity.",
    fullReview:
      "CodeMoly is a professional, reliable partner for end-to-end product builds. From clean, modern designs to seamless development, they exceeded my expectations. I couldn't be happier with the collaboration!",
    avatar: "/testimonials/anika.png",
  },
  {
    id: 4,
    name: "Austin",
    company: "Clarity LLC",
    role: "CEO",
    industry: "Fintech",
    services: "UI/UX Design, Product MVP",
    shortQuote: "Working with CodeMoly completely changed how we approached building our app from scratch.",
    fullReview:
      "I've worked with CodeMoly on three websites, and they've been nothing but exceptional. Their design is top-notch, development is reliable, and communication is always smooth. They quickly act on feedback and deliver exactly what I need. A 10/10 partner.",
    avatar: "/testimonials/austin.png",
  },
  {
    id: 5,
    name: "James",
    company: "TechFlow",
    role: "CTO",
    industry: "SaaS",
    services: "Web Development, AI Integration",
    shortQuote: "CodeMoly delivered a scalable SaaS platform that exceeded every technical requirement we had.",
    fullReview:
      "From architecture planning to final deployment, the CodeMoly team was exceptional. They understood our complex technical requirements and executed flawlessly. Our platform handles thousands of concurrent users without a hitch. Highly recommend for any serious tech project.",
    avatar: "/testimonials/james.png",
  },
  {
    id: 6,
    name: "Maria Santos",
    company: "Bloom Health",
    role: "Product Manager",
    industry: "Healthcare",
    services: "Mobile App, UI/UX Design",
    shortQuote: "They turned our complex healthcare workflows into a beautifully simple mobile experience.",
    fullReview:
      "Building a healthcare app comes with enormous responsibility. CodeMoly not only understood the regulatory requirements but also crafted an interface patients genuinely love. Our user retention went up by 60% after the redesign. Incredible team to work with.",
    avatar: "/testimonials/maria.png",
  },
  {
    id: 7,
    name: "David Kim",
    company: "NexGen",
    role: "Co-Founder",
    industry: "EdTech",
    services: "Full-Stack Development, Product MVP",
    shortQuote: "Our EdTech platform went from concept to launch in record time thanks to CodeMoly.",
    fullReview:
      "As a startup founder, speed and quality both matter. CodeMoly delivered on both. They built our learning management system from scratch in just 10 weeks, and it was polished enough to impress our Series A investors. Outstanding execution and professionalism.",
    avatar: "/testimonials/david.png",
  },
  {
    id: 8,
    name: "Sarah Mitchell",
    company: "CloudBase",
    role: "Engineering Lead",
    industry: "Cloud Infrastructure",
    services: "Backend Development, DevOps",
    shortQuote: "CodeMoly's engineering team integrated seamlessly with ours and shipped quality code every sprint.",
    fullReview:
      "We brought CodeMoly in as an extension of our engineering team. Their developers were senior-level, wrote clean code, and were proactive about flagging technical debt. They felt like colleagues rather than a vendor. We continue working with them to this day.",
    avatar: "/testimonials/sarah.png",
  },
  {
    id: 9,
    name: "Raj Patel",
    company: "PaySync",
    role: "Founder",
    industry: "Payments",
    services: "Fintech Development, API Integration",
    shortQuote: "They built our payment infrastructure with security and speed I didn't think was possible in this timeframe.",
    fullReview:
      "CodeMoly tackled one of the most complex technical challenges in fintech — real-time payment reconciliation — and made it look easy. Their team's attention to security protocols and compliance requirements was exemplary. A trustworthy partner for any fintech product.",
    avatar: "/testimonials/raj.png",
  },
  {
    id: 10,
    name: "Emma Clarke",
    company: "Designly",
    role: "Creative Director",
    industry: "Creative & Design",
    services: "UI/UX Design, Brand Identity",
    shortQuote: "As a design agency ourselves, our standards are high — CodeMoly cleared every bar we set.",
    fullReview:
      "We needed a development partner who could execute our high-fidelity designs with pixel-perfect precision. CodeMoly delivered exactly that. Every animation, every transition, every micro-interaction was implemented exactly as we envisioned. Rarely do you find developers who truly respect design.",
    avatar: "/testimonials/emma.png",
  },
];

const TOTAL = testimonials.length; // 10

const QuoteIconOpen = () => (
  <svg width="32" height="26" viewBox="0 0 36 28" fill="currentColor" aria-hidden="true">
    <path d="M0 28V17.2C0 12.48 1.04 8.64 3.12 5.68C5.28 2.72 8.56 0.96 13 0.4L14.2 3.44C11.64 3.92 9.72 4.96 8.44 6.56C7.16 8.08 6.52 9.96 6.52 12.2H13.48V28H0ZM21.52 28V17.2C21.52 12.48 22.56 8.64 24.64 5.68C26.8 2.72 30.08 0.96 34.52 0.4L35.72 3.44C33.16 3.92 31.24 4.96 29.96 6.56C28.68 8.08 28.04 9.96 28.04 12.2H35V28H21.52Z" />
  </svg>
);

const QuoteIconClose = () => (
  <svg width="32" height="26" viewBox="0 0 36 28" fill="currentColor" aria-hidden="true">
    <path d="M36 0V10.8C36 15.52 34.96 19.36 32.88 22.32C30.72 25.28 27.44 27.04 23 27.6L21.8 24.56C24.36 24.08 26.28 23.04 27.56 21.44C28.84 19.92 29.48 18.04 29.48 15.8H22.52V0H36ZM14.48 0V10.8C14.48 15.52 13.44 19.36 11.36 22.32C9.2 25.28 5.92 27.04 1.48 27.6L0.28 24.56C2.84 24.08 4.76 23.04 6.04 21.44C7.32 19.92 7.96 18.04 7.96 15.8H1V0H14.48Z" />
  </svg>
);

function TestimonialCard({ t, animClass, animKey }: {
  t: typeof testimonials[0];
  animClass: string;
  animKey: number;
}) {
  return (
    <div
      key={animKey}
      className={`relative flex flex-col bg-[#f6f7f9] rounded-2xl p-4 sm:p-6 md:p-10 h-full ${animClass}`}
    >
      <div className="text-slate-300 mb-2 md:mb-6">
        <QuoteIconOpen />
      </div>

      <p className="font-sans text-sm sm:text-base md:text-lg font-bold text-slate-900 leading-snug mb-2 md:mb-4">
        {t.shortQuote}
      </p>

      {/* Red Box 1: Full review text - Hidden on mobile view */}
      <p className="font-sans text-sm md:text-[15px] leading-relaxed text-slate-500 flex-1 hidden md:block">
        {t.fullReview}
      </p>

      <div className="flex justify-end mt-1 md:mt-6 text-slate-300">
        <QuoteIconClose />
      </div>

      <div className="border-t border-slate-200 my-3 md:my-6" />

      <div className="flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={t.avatar}
          alt={t.name}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover object-top flex-shrink-0 border-2 border-white shadow"
        />
        <div>
          <p className="font-sans text-xs md:text-sm font-bold text-slate-900 leading-tight">
            {t.name}
            <span className="text-slate-400 font-normal"> @ {t.company}</span>
          </p>
          <p className="font-sans text-[11px] md:text-xs text-slate-500 mt-0.5">{t.role}</p>
        </div>
      </div>

      {/* Red Box 2 & 3: Industry & Services blocks - Hidden on mobile view */}
      <div className="hidden md:grid grid-cols-2 gap-x-6 gap-y-1 mt-6">
        <p className="font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">Industry</p>
        <p className="font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">Services</p>
        <p className="font-sans text-sm font-bold text-slate-800 leading-snug">{t.industry}</p>
        <p className="font-sans text-sm font-bold text-slate-800 leading-snug">{t.services}</p>
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  // Index of the LEFT card currently shown
  const [leftIdx, setLeftIdx]     = useState(0);
  // Tracks which card changed: "left" or "right" column
  const [changedSide, setChangedSide] = useState<"left" | "right">("right");
  // Direction of slide: "right" = new card comes from right, "left" = from left
  const dirRef                    = useRef<"right" | "left">("right");
  // Separate anim keys for left and right card so only the changed one animates
  const [leftKey, setLeftKey]     = useState(0);
  const [rightKey, setRightKey]   = useState(0);

  // Right arrow → left card becomes old right card, new card slides in from the right (right column)
  const goNext = () => {
    dirRef.current = "right";
    setLeftIdx((i) => (i + 1) % TOTAL);
    setChangedSide("right");
    setRightKey((k) => k + 1); // only right card animates
  };

  // Left arrow → right card becomes old left card, new card slides in from the left (left column)
  const goPrev = () => {
    dirRef.current = "left";
    setLeftIdx((i) => (i - 1 + TOTAL) % TOTAL);
    setChangedSide("left");
    setLeftKey((k) => k + 1); // only left card animates
  };

  const rightIdx     = (leftIdx + 1) % TOTAL;
  const leftCard     = testimonials[leftIdx];
  const rightCard    = testimonials[rightIdx];

  const slideRight   = "testimonial-slide-right";
  const slideLeft    = "testimonial-slide-left";

  return (
    <section
      className="section-reveal client-review-reveal relative w-full py-10 md:py-28 px-4 md:px-20 bg-white border-t border-slate-100 overflow-hidden text-slate-800"
      aria-labelledby="testimonial-heading"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.12] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* Header */}
        <div className="reveal-item reveal-up reveal-delay-1 flex items-start justify-between mb-6 md:mb-12 gap-4">
          <div className="flex flex-col items-start">
            <span className="font-sans text-xs md:text-sm font-bold uppercase tracking-[0.15em] text-blue-600 mb-2 md:mb-4 block">
              <ScrambleText text="Client Review" />
            </span>
            <h2
              id="testimonial-heading"
              className="font-sans text-2xl md:text-5xl font-extrabold leading-tight tracking-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#aebcff] via-[#2546c7] to-[#09164f]">
                What Our Clients Think of Us
              </span>
            </h2>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-2 md:gap-3 flex-shrink-0 pt-2 md:pt-8">
            {/* → Next: new card slides in from right */}
            <button
              onClick={goNext}
              aria-label="Next testimonial"
              className="w-9 h-9 md:w-12 md:h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-200 shadow-sm cursor-pointer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-5 md:h-5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            {/* ← Prev: new card slides in from left */}
            <button
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="w-9 h-9 md:w-12 md:h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-200 shadow-sm cursor-pointer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-5 md:h-5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* 2-card grid — only the incoming card plays its slide animation */}
        <div className="client-review-grid grid grid-cols-1 md:grid-cols-2 gap-6">
          <TestimonialCard
            t={leftCard}
            animClass={changedSide === "left" ? slideLeft : ""}
            animKey={leftKey}
          />
          <TestimonialCard
            t={rightCard}
            animClass={changedSide === "right" ? slideRight : ""}
            animKey={rightKey}
          />
        </div>



      </div>
    </section>
  );
}
