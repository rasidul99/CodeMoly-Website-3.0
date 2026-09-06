"use client";

import React, { useState } from "react";
import ScrambleText from "./ScrambleText";
import GridDistortion from "./GridDistortion";

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs?: FaqItem[];
  subtitle?: string;
  title?: string;
  bgImage?: string;
}

const defaultFaqs: FaqItem[] = [
  {
    id: 1,
    question: "What types of projects do you work on?",
    answer:
      "We work on a wide range of digital products — from MVPs and SaaS platforms to mobile apps, AI integrations, e-commerce stores, and enterprise web applications. Whether you're a startup validating an idea or an enterprise scaling a product, we tailor our approach to your needs.",
  },
  {
    id: 2,
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on the project scope. A landing page or MVP can be delivered in 2–4 weeks, while a full-scale product typically takes 6–16 weeks. We provide a detailed roadmap at the start of every engagement so you always know what to expect.",
  },
  {
    id: 3,
    question: "Do you work with startups and enterprises?",
    answer:
      "Yes — we work with both. For startups, we focus on rapid iteration and cost-effective delivery. For enterprises, we bring process maturity, scalable architecture, and dedicated team augmentation. Our flexible engagement models suit companies at every stage.",
  },
  {
    id: 4,
    question: "How do you approach AI integration in projects?",
    answer:
      "We assess where AI can genuinely add value — whether that's through automation, intelligent recommendations, NLP, or generative features. We work with leading AI providers (OpenAI, Anthropic, Gemini) and open-source models to build tailored solutions that fit your product and budget.",
  },
  {
    id: 5,
    question: "Can you help build a design system for my team?",
    answer:
      "Absolutely. We design and document comprehensive design systems including component libraries, typography, color tokens, and interaction guidelines — built in Figma and ready for handoff to development. We can also implement them directly in code.",
  },
  {
    id: 6,
    question: "What is your process for collaboration?",
    answer:
      "We follow a transparent, agile workflow. You get a dedicated project manager, weekly progress updates, and access to a shared workspace. We prioritise fast feedback loops so nothing is ever a surprise.",
  },
  {
    id: 7,
    question: "Do you offer post-launch support?",
    answer:
      "Yes. We offer ongoing maintenance, performance monitoring, feature additions, and bug fixes after launch. Many clients retain us on a monthly basis to continuously improve their product as their user base grows.",
  },
  {
    id: 8,
    question: "How do you handle project pricing?",
    answer:
      "We offer both fixed-price and time-and-materials models depending on how well-defined the scope is. After an initial discovery call, we provide a detailed proposal with transparent pricing — no hidden fees, no surprises.",
  },
];

export default function FaqSection({ 
  faqs = defaultFaqs, 
  subtitle = "FAQ",
  title = "Frequently Asked Questions",
  bgImage
}: FaqSectionProps) {
  const [openId, setOpenId] = useState<number | null>(faqs[0]?.id || 1);
  const toggle = (id: number) => setOpenId((p) => (p === id ? null : id));

  const itemsToRender = faqs.slice(0, 6);

  return (
    <section
      className="section-reveal faq-reveal relative w-full py-20 md:py-28 px-5 md:px-20 bg-white overflow-hidden text-slate-800"
      aria-labelledby="faq-heading"
    >
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.12] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT CONTAINER — Label, Headline, and Media in background/flow */}
          <div className={`lg:sticky lg:top-28 flex flex-col justify-start relative ${!bgImage ? "min-h-[350px] md:min-h-[450px]" : ""}`}>
            <div className={`relative z-10 text-left ${!bgImage ? "pointer-events-none" : ""}`}>
              <span className="reveal-item reveal-up font-sans text-sm font-bold uppercase tracking-[0.15em] text-blue-600 mb-4 block">
                <ScrambleText text={subtitle} />
              </span>
              <h2
                id="faq-heading"
                className="reveal-item reveal-up reveal-delay-1 font-sans text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900 mb-6"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#aebcff] via-[#2546c7] to-[#09164f]">
                  {title}
                </span>
              </h2>
            </div>

            {bgImage ? (
              /* Image in normal flow with GridDistortion hover effect for product page */
              <div className="reveal-item reveal-up reveal-delay-2 w-full mt-5 aspect-[16/10.2] rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 relative z-10 shadow-sm">
                <GridDistortion 
                  imageSrc={bgImage} 
                  className="absolute inset-0 w-full h-full object-cover"
                  grid={12}
                  mouse={0.18}
                  strength={0.15}
                  relaxation={0.9}
                />
              </div>
            ) : (
              /* Original 16:9 aspect ratio video container in background (Home page default) */
              <div className="reveal-item reveal-left reveal-delay-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[70px] md:mt-[40px] w-[160%] sm:w-[130%] md:w-[125%] aspect-video pointer-events-none z-0 mix-blend-multiply opacity-90">
                <video
                  className="w-full h-full object-contain"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  aria-label="FAQ video showcase"
                >
                  <source src="/0611.webm" type="video/webm" />
                  <source src="/0611.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>

          {/* RIGHT CONTAINER — FAQ Questions */}
          <div className="flex flex-col justify-between h-full relative z-10 bg-transparent">
            <div className="faq-list flex flex-col divide-y divide-slate-300/60 w-full h-full justify-start">
              {itemsToRender.map((faq, idx) => {
                const isOpen = openId === faq.id;
                const isLast = idx === itemsToRender.length - 1;

                return (
                  <div key={faq.id} className={`${idx === 0 ? "pb-5" : isLast ? "pt-5" : "py-5"}`}>
                    <button
                      onClick={() => toggle(faq.id)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 text-left group"
                    >
                      {/* Question Text */}
                      <span className="font-sans text-base md:text-[17px] font-bold text-slate-800 leading-snug group-hover:text-blue-600 transition-colors duration-150">
                        {faq.question}
                      </span>

                      {/* Toggle Button pill */}
                      <span
                        className={`flex-shrink-0 w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center transition-all duration-300 shadow-sm ${
                          isOpen ? "rotate-45 bg-slate-900 border-slate-900" : ""
                        }`}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 13 13"
                          fill="none"
                          stroke={isOpen ? "#fff" : "#555"}
                          strokeWidth="2"
                          strokeLinecap="round"
                        >
                          <line x1="6.5" y1="0" x2="6.5" y2="13" />
                          <line x1="0"   y1="6.5" x2="13" y2="6.5" />
                        </svg>
                      </span>
                    </button>

                    {/* Answer Accordion */}
                    <div
                      style={{
                        maxHeight: isOpen ? 320 : 0,
                        opacity:   isOpen ? 1 : 0,
                        overflow:  "hidden",
                        transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease",
                      }}
                    >
                      <p className="font-sans text-sm md:text-[15px] text-slate-500 leading-relaxed pt-4 pr-6">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
