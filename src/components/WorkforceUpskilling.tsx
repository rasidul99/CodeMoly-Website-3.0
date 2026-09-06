"use client";

import React, { useState, useEffect, useRef } from "react";
import ScrambleText from "./ScrambleText";
import { 
  Bot, 
  UserCheck, 
  Globe, 
  Code2, 
  Sparkles,
  Zap,
  Cpu,
  Layers,
  BarChart3,
  ShieldCheck,
  Terminal,
  FileText,
  Briefcase,
  Users,
  Database,
  Cloud,
  Brain,
  MessageSquare,
  Send,
  TrendingUp,
  Box,
  ChevronRight
} from "lucide-react";

// ══════════════════════════════════════════════════════════════
// REAL BRAND LOGO SVG COMPONENTS
// ══════════════════════════════════════════════════════════════

/** Real OpenAI / ChatGPT Logo SVG */
const ChatGptLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 23a6.0462 6.0462 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0813 4.779-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4952 4.4952zm-10.12-4.4365a4.4755 4.4755 0 0 1-.535-3.0037l.142.083 4.779 2.7583a.7948.7948 0 0 0 .7854 0l5.8352-3.3687v2.3372a.071.071 0 0 1-.0332.0617L9.006 19.529a4.504 4.504 0 0 1-5.8661-1.5363zm-1.0969-10.9a4.4755 4.4755 0 0 1 2.3414-1.9629l-.001.1636v5.5164a.7948.7948 0 0 0 .3927.6813l5.8352 3.3687-2.02 1.1686a.071.071 0 0 1-.0711.0095l-4.836-2.793a4.504 4.504 0 0 1-1.6412-6.1522zm16.5166 2.3687l-5.8352-3.3687 2.02-1.1686a.071.071 0 0 1 .0711-.0095l4.836 2.793a4.504 4.504 0 0 1 1.6412 6.1522 4.4755 4.4755 0 0 1-2.3414 1.9629l.001-.1636v-5.5164a.7948.7948 0 0 0-.3927-.6813zm2.1466-4.6644a4.4755 4.4755 0 0 1 .535 3.0037l-.142-.083-4.779-2.7583a.7948.7948 0 0 0-.7854 0L9.92 11.2227V8.8855a.071.071 0 0 1 .0332-.0617l4.836-2.793a4.504 4.504 0 0 1 5.8661 1.5363zm-11.4429-4.8021a4.4755 4.4755 0 0 1 2.8764 1.0408l-.1419.0813-4.779 2.7582a.7948.7948 0 0 0-.3927.6813v6.7369l-2.02-1.1686a.071.071 0 0 1-.038-.052V8.0827a4.504 4.504 0 0 1 4.4952-4.4952zM12 14.3015l2.6738-1.5434 2.6738 1.5434v3.0868L14.6738 18.932 12 17.3884v-3.0869z" />
  </svg>
);

/** Real Google Gemini 4-Point Star Logo SVG */
const GeminiLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" fill="url(#gemini-logo-grad)" />
    <defs>
      <linearGradient id="gemini-logo-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4285F4" />
        <stop offset="0.5" stopColor="#9B51E0" />
        <stop offset="1" stopColor="#E94235" />
      </linearGradient>
    </defs>
  </svg>
);

interface TrainingCategory {
  id: number;
  title: string;
  subtitle: string;
  icon: any;
  topics: {
    title: string;
    sub: string;
    icon: any;
  }[];
}

const categories: TrainingCategory[] = [
  {
    id: 1,
    title: "AI Training",
    subtitle: "Master AI. Transform Work. Deliver Impact.",
    icon: Brain,
    topics: [
      { 
        title: "Generative AI", 
        sub: "ChatGPT, Claude, Gemini & Copilot", 
        icon: ChatGptLogo
      },
      { 
        title: "AI for Business Excellence", 
        sub: "AI-Powered Productivity", 
        icon: Briefcase
      },
      { 
        title: "Prompt Engineering Level 1", 
        sub: "Foundation Prompts", 
        icon: Send
      },
      { 
        title: "Prompt Engineering Level 2", 
        sub: "Advanced Prompting", 
        icon: TrendingUp
      },
      { 
        title: "Prompt Engineering Level 3", 
        sub: "Advanced & Expert Prompts", 
        icon: Box
      },
      { 
        title: "AI Agents & Automation", 
        sub: "Automate • Optimize • Scale", 
        icon: Bot
      }
    ]
  },
  {
    id: 2,
    title: "Role-Based AI Training",
    subtitle: "Tailored AI Skills for Every Enterprise Domain.",
    icon: UserCheck,
    topics: [
      { title: "AI + Sales Training", sub: "Leads & CRM Automation", icon: Users },
      { title: "AI + Marketing Training", sub: "Ad Copy & Content Scale", icon: Sparkles },
      { title: "AI + HR Training", sub: "Talent Acquisition", icon: UserCheck },
      { title: "AI + Supply Chain", sub: "Logistics Intelligence", icon: BarChart3 },
      { title: "AI + Finance Training", sub: "Ledger & Risk Forecasting", icon: Briefcase },
      { title: "AI + Product Management", sub: "User Stories & Roadmaps", icon: Box },
      { title: "AI + Customer Service", sub: "Autonomous Support Agents", icon: MessageSquare },
      { title: "AI + Foundation", sub: "Enterprise AI Principles", icon: Cpu }
    ]
  },
  {
    id: 3,
    title: "Digital Training",
    subtitle: "Modernize Corporate Capabilities with Cloud & BI.",
    icon: Globe,
    topics: [
      { title: "Digital Transformation", sub: "Enterprise Modernization", icon: Globe },
      { title: "Data Analytics & BI", sub: "Real-Time Dashboards", icon: BarChart3 },
      { title: "Cloud Computing", sub: "AWS, Azure & Google Cloud", icon: Cloud },
      { title: "Cybersecurity Awareness", sub: "Zero-Trust Threat Defense", icon: ShieldCheck },
      { title: "Workspace Tools", sub: "M365 & Google Workspace", icon: FileText },
      { title: "Digital Marketing", sub: "Omnichannel Growth Engine", icon: TrendingUp }
    ]
  },
  {
    id: 4,
    title: "Technology Training",
    subtitle: "Software Engineering, Full-Stack & QA Automation.",
    icon: Code2,
    topics: [
      { title: "Full-Stack Web Dev", sub: "MERN / MEAN Architecture", icon: Code2 },
      { title: "Mobile App Dev", sub: "Flutter & React Native", icon: Layers },
      { title: "Database Admin", sub: "SQL, PostgreSQL, MySQL", icon: Database },
      { title: "Software Testing & QA", sub: "Automated Suite Testing", icon: ShieldCheck },
      { title: "IoT Fundamentals", sub: "Hardware & Edge Sensing", icon: Cpu },
      { title: "UI/UX & Security", sub: "Design Systems & Defense", icon: Terminal }
    ]
  }
];

export default function WorkforceUpskilling() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const cardRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  useEffect(() => {
    // Only run intersection observer on desktop
    if (window.innerWidth < 1024) return;

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -35% 0px",
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = Number(entry.target.getAttribute("data-step-id"));
          if (id) {
            setActiveStep(id);
          }
        }
      });
    }, observerOptions);

    categories.forEach((cat) => {
      const el = cardRefs.current[cat.id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToStep = (id: number) => {
    setActiveStep(id);
    const element = cardRefs.current[id];
    if (element && window.innerWidth >= 1024) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section 
      id="workforce-upskilling" 
      className="section-reveal relative w-full py-6 sm:py-10 md:py-28 px-3.5 sm:px-6 md:px-20 bg-white text-slate-800"
      aria-labelledby="upskilling-heading"
    >
      {/* Background Subtle Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.14] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-6 lg:gap-16 items-start text-slate-800 relative">
          
          {/* Left Column (Sticky Sidebar containing Headline, Description & Interactive Headlines List) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 z-20 flex flex-col items-start text-left">
            <span className="font-sans text-xs md:text-sm font-bold uppercase tracking-[0.15em] text-blue-600 mb-1.5 md:mb-4 block">
              <ScrambleText text="Workforce Upskilling" />
            </span>

            <h2 id="upskilling-heading" className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[46px] leading-[1.15] tracking-tight mb-2 md:mb-5">
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#aebcff] via-[#2546c7] to-[#09164f]">
                Professional Training
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#aebcff] via-[#2546c7] to-[#09164f] mt-0.5 md:mt-1">
                Programs
              </span>
            </h2>

            <p className="font-sans text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-lg mb-3.5 lg:mb-8">
              Comprehensive corporate upskilling programs designed to empower teams with practical AI mastery, digital capabilities, and core professional skills.
            </p>

            {/* Mobile View 4 Tab Row (< lg) */}
            <div className="flex lg:hidden overflow-x-auto no-scrollbar gap-1.5 sm:gap-2 w-full py-0.5 mb-3.5 -mx-1 px-1">
              {categories.map((cat) => {
                const isActive = cat.id === activeStep;
                const IconComponent = cat.icon;

                return (
                  <button
                    key={cat.id}
                    onClick={() => scrollToStep(cat.id)}
                    className={`flex items-center gap-1.5 whitespace-nowrap px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold transition-all duration-300 shrink-0 cursor-pointer ${
                      isActive
                        ? "bg-[#09164f] text-white shadow-md border border-blue-400/40"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 border border-slate-200/60"
                    }`}
                  >
                    <IconComponent className={`w-3.5 h-3.5 ${isActive ? "text-blue-300" : "text-slate-500"}`} />
                    <span>{cat.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Left Side 4 Card Headline Navigation List (Desktop Only) */}
            <div className="hidden lg:flex flex-col gap-2.5 w-full border-l-2 border-slate-200/80 pl-4 py-1">
              {categories.map((cat) => {
                const isActive = cat.id === activeStep;
                const IconComponent = cat.icon;

                return (
                  <button
                    key={cat.id}
                    onClick={() => scrollToStep(cat.id)}
                    aria-label={`Scroll to ${cat.title}`}
                    className={`group relative flex items-center gap-3 text-left transition-all duration-300 py-2 px-3 rounded-xl cursor-pointer ${
                      isActive
                        ? "text-blue-600 font-extrabold text-base -ml-[18px] pl-[16px] border-l-2 border-blue-600 bg-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900 font-semibold text-sm hover:bg-slate-100/70"
                    }`}
                  >
                    <div className={`p-1.5 rounded-lg transition-colors ${
                      isActive ? "bg-blue-50 text-blue-600" : "bg-slate-100 text-slate-400 group-hover:text-slate-700"
                    }`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span>{cat.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column (4 Cards matching Core AI Automation Services background gradient) */}
          <div className="lg:col-span-7 flex flex-col gap-8 lg:gap-16 w-full">
            
            {/* ══════════════════════════════════════════════════════════════
               CARD 1: AI Training
            ══════════════════════════════════════════════════════════════ */}
            <div 
              ref={(el) => { cardRefs.current[1] = el; }}
              data-step-id="1"
              className={`scroll-mt-28 flex-col text-left ${activeStep === 1 ? 'flex' : 'hidden lg:flex'}`}
            >
              <div 
                className="relative w-full rounded-[20px] sm:rounded-[32px] overflow-hidden border border-blue-900/15 p-3.5 sm:p-6 md:p-9 group transition-all duration-500 shadow-none hover:-translate-y-1 hover:border-blue-400/40"
                style={{
                  background: "radial-gradient(circle at bottom right, rgba(255, 255, 255, 0.28) 0%, transparent 55%), linear-gradient(135deg, #09164f 0%, #2546c7 100%)"
                }}
              >
                {/* Bottom Right Corner Glow Outline */}
                <div 
                  className="absolute inset-0 border border-transparent rounded-[20px] sm:rounded-[32px] pointer-events-none z-20"
                  style={{
                    borderRightWidth: "2px",
                    borderBottomWidth: "2px",
                    borderRightColor: "rgba(255, 255, 255, 0.8)",
                    borderBottomColor: "rgba(255, 255, 255, 0.8)",
                    WebkitMaskImage: "radial-gradient(circle at bottom right, black 25%, transparent 60%)",
                    maskImage: "radial-gradient(circle at bottom right, black 25%, transparent 60%)"
                  }}
                />

                {/* Card Top Header */}
                <div className="relative z-10 flex items-center gap-3 sm:gap-4 mb-3 sm:mb-8">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-sm shrink-0">
                    <Brain className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-sans font-extrabold text-xl sm:text-2xl md:text-3xl text-white tracking-tight">
                      {categories[0].title}
                    </h3>
                    <p className="font-sans text-[11px] sm:text-xs md:text-sm text-blue-100/90 font-medium mt-0.5">
                      {categories[0].subtitle}
                    </p>
                  </div>
                </div>

                {/* Middle Vector Graphic Stage */}
                <div className="relative z-10 w-full h-[170px] sm:h-[240px] md:h-[270px] rounded-xl sm:rounded-2xl bg-[#09164f]/40 backdrop-blur-sm border border-white/15 mb-3 sm:mb-8 overflow-hidden select-none flex items-center justify-center">
                  
                  {/* Concentric Circle Orbit Lines */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[180px] h-[180px] sm:w-[320px] sm:h-[320px] rounded-full border border-blue-300/20 flex items-center justify-center animate-[spin_40s_linear_infinite]">
                      <div className="w-[120px] h-[120px] sm:w-[220px] sm:h-[220px] rounded-full border border-blue-200/25 flex items-center justify-center" />
                    </div>
                    <div className="w-[80px] h-[80px] sm:w-[140px] sm:h-[140px] rounded-full bg-blue-500/10 border border-blue-300/30 blur-[2px] absolute" />
                  </div>

                  {/* SVG Connecting Ray Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 500 270" fill="none">
                    <line x1="250" y1="135" x2="80" y2="60" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
                    <line x1="250" y1="135" x2="420" y2="60" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
                    <line x1="250" y1="135" x2="80" y2="210" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
                    <line x1="250" y1="135" x2="420" y2="210" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />

                    {/* Animated Moving Particles on Rays */}
                    <circle r="3.5" fill="#10b981" className="filter drop-shadow-[0_0_8px_#10b981]">
                      <animateMotion dur="2.5s" repeatCount="indefinite" path="M 250 135 L 80 60" />
                    </circle>
                    <circle r="3.5" fill="#60a5fa" className="filter drop-shadow-[0_0_8px_#60a5fa]">
                      <animateMotion dur="2.8s" repeatCount="indefinite" path="M 250 135 L 420 60" />
                    </circle>
                    <circle r="3.5" fill="#a855f7" className="filter drop-shadow-[0_0_8px_#a855f7]">
                      <animateMotion dur="2.3s" repeatCount="indefinite" path="M 250 135 L 80 210" />
                    </circle>
                    <circle r="3.5" fill="#14b8a6" className="filter drop-shadow-[0_0_8px_#14b8a6]">
                      <animateMotion dur="2.7s" repeatCount="indefinite" path="M 250 135 L 420 210" />
                    </circle>
                  </svg>

                  {/* Central 3D Isometric AI Chip */}
                  <div className="relative z-20 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <div className="relative w-14 h-14 sm:w-28 sm:h-28 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-3xl bg-blue-500/30 blur-xl animate-pulse" />
                      
                      <div className="relative w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-tr from-blue-600 via-blue-500 to-indigo-400 rounded-xl sm:rounded-2xl p-0.5 shadow-[0_15px_35px_rgba(37,99,235,0.5)] transform -rotate-12 rotate-x-12 flex items-center justify-center border border-white/40">
                        <div className="w-full h-full rounded-xl sm:rounded-2xl bg-gradient-to-b from-blue-600 to-blue-900 flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-1 border border-white/20 rounded-lg sm:rounded-xl" />
                          <span className="font-sans font-black text-base sm:text-3xl text-white tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                            AI
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Pill Card 1: Top-Left */}
                  <div className="absolute left-1 top-1.5 sm:left-3 sm:top-4 z-10 px-1.5 py-1 sm:px-3.5 sm:py-2.5 rounded-lg sm:rounded-2xl bg-[#09164f]/90 border border-emerald-400/40 shadow-md flex items-center gap-1 sm:gap-3 backdrop-blur-md">
                    <div className="w-5 h-5 sm:w-8 sm:h-8 rounded-md sm:rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0">
                      <ChatGptLogo className="w-3 h-3 sm:w-5 sm:h-5 text-emerald-300" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[9px] sm:text-xs font-bold text-white leading-snug">ChatGPT & Claude</span>
                      <span className="text-[8px] sm:text-[10px] font-medium text-emerald-300 hidden sm:inline">Generative AI</span>
                    </div>
                  </div>

                  {/* Floating Pill Card 2: Top-Right */}
                  <div className="absolute right-1 top-1.5 sm:right-3 sm:top-4 z-10 px-1.5 py-1 sm:px-3.5 sm:py-2.5 rounded-lg sm:rounded-2xl bg-[#09164f]/90 border border-blue-400/40 shadow-md flex items-center gap-1 sm:gap-3 backdrop-blur-md">
                    <div className="w-5 h-5 sm:w-8 sm:h-8 rounded-md sm:rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center shrink-0">
                      <GeminiLogo className="w-3 h-3 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[9px] sm:text-xs font-bold text-white leading-snug">Gemini & Copilot</span>
                      <span className="text-[8px] sm:text-[10px] font-medium text-blue-300 hidden sm:inline">LLM Platforms</span>
                    </div>
                  </div>

                  {/* Floating Pill Card 3: Bottom-Left */}
                  <div className="absolute left-1 bottom-1.5 sm:left-3 sm:bottom-4 z-10 px-1.5 py-1 sm:px-3.5 sm:py-2.5 rounded-lg sm:rounded-2xl bg-[#09164f]/90 border border-purple-400/40 shadow-md flex items-center gap-1 sm:gap-3 backdrop-blur-md">
                    <div className="w-5 h-5 sm:w-8 sm:h-8 rounded-md sm:rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center shrink-0">
                      <Zap className="w-3 h-3 sm:w-4.5 sm:h-4.5 text-purple-300" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[9px] sm:text-xs font-bold text-white leading-snug">Prompt Eng</span>
                      <span className="text-[8px] sm:text-[10px] font-medium text-purple-300 hidden sm:inline">Mastery Courses</span>
                    </div>
                  </div>

                  {/* Floating Pill Card 4: Bottom-Right */}
                  <div className="absolute right-1 bottom-1.5 sm:right-3 sm:bottom-4 z-10 px-1.5 py-1 sm:px-3.5 sm:py-2.5 rounded-lg sm:rounded-2xl bg-[#09164f]/90 border border-teal-400/40 shadow-md flex items-center gap-1 sm:gap-3 backdrop-blur-md">
                    <div className="w-5 h-5 sm:w-8 sm:h-8 rounded-md sm:rounded-xl bg-teal-500/20 border border-teal-400/40 flex items-center justify-center shrink-0">
                      <Layers className="w-3 h-3 sm:w-4.5 sm:h-4.5 text-teal-300" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[9px] sm:text-xs font-bold text-white leading-snug">AI Agents</span>
                      <span className="text-[8px] sm:text-[10px] font-medium text-teal-300 hidden sm:inline">Autopilot Workflows</span>
                    </div>
                  </div>

                </div>

                {/* Bottom Course Grid */}
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-3.5">
                  {categories[0].topics.map((topic, idx) => {
                    const IconComponent = topic.icon;
                    return (
                      <div 
                        key={idx}
                        className="group/pill relative flex items-center justify-between p-2 sm:p-3.5 rounded-lg sm:rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md hover:bg-white/20 transition-all duration-300 cursor-pointer shadow-sm"
                      >
                        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                          <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-md sm:rounded-xl bg-white/10 border border-white/20 shrink-0 flex items-center justify-center text-white">
                            <IconComponent className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white" />
                          </div>

                          <div className="flex flex-col text-left min-w-0">
                            <span className="font-sans text-[11px] sm:text-sm font-bold text-white truncate group-hover/pill:text-blue-200 transition-colors">
                              {topic.title}
                            </span>
                            <span className="font-sans text-[9px] sm:text-[11px] text-blue-100/80 font-medium truncate mt-0.5">
                              {topic.sub}
                            </span>
                          </div>
                        </div>

                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-blue-200/60 group-hover/pill:text-white group-hover/pill:translate-x-1 transition-all shrink-0 ml-1" />
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>

            {/* ══════════════════════════════════════════════════════════════
               CARD 2: Role-Based AI Training
            ══════════════════════════════════════════════════════════════ */}
            <div 
              ref={(el) => { cardRefs.current[2] = el; }}
              data-step-id="2"
              className={`scroll-mt-28 flex-col text-left ${activeStep === 2 ? 'flex' : 'hidden lg:flex'}`}
            >
              <div 
                className="relative w-full rounded-[20px] sm:rounded-[32px] overflow-hidden border border-blue-900/15 p-3.5 sm:p-6 md:p-9 group transition-all duration-500 shadow-none hover:-translate-y-1 hover:border-blue-400/40"
                style={{
                  background: "radial-gradient(circle at bottom right, rgba(255, 255, 255, 0.28) 0%, transparent 55%), linear-gradient(135deg, #09164f 0%, #2546c7 100%)"
                }}
              >
                {/* Bottom Right Corner Glow Outline */}
                <div 
                  className="absolute inset-0 border border-transparent rounded-[20px] sm:rounded-[32px] pointer-events-none z-20"
                  style={{
                    borderRightWidth: "2px",
                    borderBottomWidth: "2px",
                    borderRightColor: "rgba(255, 255, 255, 0.8)",
                    borderBottomColor: "rgba(255, 255, 255, 0.8)",
                    WebkitMaskImage: "radial-gradient(circle at bottom right, black 25%, transparent 60%)",
                    maskImage: "radial-gradient(circle at bottom right, black 25%, transparent 60%)"
                  }}
                />

                {/* Card Header */}
                <div className="relative z-10 flex items-center gap-3 sm:gap-4 mb-3 sm:mb-8">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-sm shrink-0">
                    <UserCheck className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-sans font-extrabold text-xl sm:text-2xl md:text-3xl text-white tracking-tight">
                      {categories[1].title}
                    </h3>
                    <p className="font-sans text-[11px] sm:text-xs md:text-sm text-blue-100/90 font-medium mt-0.5">
                      {categories[1].subtitle}
                    </p>
                  </div>
                </div>

                {/* Vector Stage */}
                <div className="relative z-10 w-full h-[170px] sm:h-[240px] md:h-[270px] rounded-xl sm:rounded-2xl bg-[#09164f]/40 backdrop-blur-sm border border-white/15 mb-3 sm:mb-8 overflow-hidden select-none">
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 500 270" fill="none">
                    <path d="M 250 50 L 250 120" stroke="#93c5fd" strokeWidth="2" strokeDasharray="4 4" />
                    <path d="M 250 120 L 90 120 M 250 120 L 410 120" stroke="#93c5fd" strokeWidth="2" />
                    <path d="M 90 120 L 90 190" stroke="#93c5fd" strokeWidth="2" strokeDasharray="4 4" />
                    <path d="M 410 120 L 410 190" stroke="#93c5fd" strokeWidth="2" strokeDasharray="4 4" />

                    <circle r="4" fill="#60a5fa" className="filter drop-shadow-[0_0_8px_#60a5fa]">
                      <animateMotion dur="2s" repeatCount="indefinite" path="M 250 50 L 250 120" />
                    </circle>
                  </svg>

                  <div className="absolute left-1/2 -translate-x-1/2 top-2.5 sm:top-4 z-10 px-2.5 py-1 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl bg-[#09164f]/95 border border-white/20 shadow-md flex items-center gap-1.5 sm:gap-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] sm:text-xs font-extrabold text-white">Enterprise AI Engine</span>
                  </div>

                  <div className="absolute left-2 sm:left-4 bottom-2 sm:bottom-4 z-10 w-[130px] sm:w-[200px] p-1.5 sm:p-3 rounded-lg sm:rounded-2xl bg-[#09164f]/95 border border-blue-400/40 shadow-md flex flex-col gap-0.5 sm:gap-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] sm:text-xs font-extrabold text-white">Sales & Marketing</span>
                      <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-300" />
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-[7px] sm:text-[9px] font-bold px-1 py-0.5 bg-blue-500/20 text-blue-300 rounded">CRM</span>
                      <span className="text-[7px] sm:text-[9px] font-bold px-1 py-0.5 bg-purple-500/20 text-purple-300 rounded">Copy</span>
                    </div>
                  </div>

                  <div className="absolute right-2 sm:right-4 bottom-2 sm:bottom-4 z-10 w-[130px] sm:w-[200px] p-1.5 sm:p-3 rounded-lg sm:rounded-2xl bg-[#09164f]/95 border border-indigo-400/40 shadow-md flex flex-col gap-0.5 sm:gap-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] sm:text-xs font-extrabold text-white">HR & Finance</span>
                      <Briefcase className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-indigo-300" />
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-[7px] sm:text-[9px] font-bold px-1 py-0.5 bg-emerald-500/20 text-emerald-300 rounded">Payroll</span>
                      <span className="text-[7px] sm:text-[9px] font-bold px-1 py-0.5 bg-amber-500/20 text-amber-300 rounded">Ledger</span>
                    </div>
                  </div>
                </div>

                {/* Course Grid */}
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-3.5">
                  {categories[1].topics.map((topic, idx) => {
                    const IconComponent = topic.icon;
                    return (
                      <div 
                        key={idx}
                        className="group/pill relative flex items-center justify-between p-2 sm:p-3.5 rounded-lg sm:rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md hover:bg-white/20 transition-all duration-300 cursor-pointer shadow-sm"
                      >
                        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                          <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-md sm:rounded-xl bg-white/10 border border-white/20 shrink-0 flex items-center justify-center text-white">
                            <IconComponent className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white" />
                          </div>

                          <div className="flex flex-col text-left min-w-0">
                            <span className="font-sans text-[11px] sm:text-sm font-bold text-white truncate group-hover/pill:text-blue-200 transition-colors">
                              {topic.title}
                            </span>
                            <span className="font-sans text-[9px] sm:text-[11px] text-blue-100/80 font-medium truncate mt-0.5">
                              {topic.sub}
                            </span>
                          </div>
                        </div>

                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-blue-200/60 group-hover/pill:text-white group-hover/pill:translate-x-1 transition-all shrink-0 ml-1" />
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>

            {/* ══════════════════════════════════════════════════════════════
               CARD 3: Digital Training
            ══════════════════════════════════════════════════════════════ */}
            <div 
              ref={(el) => { cardRefs.current[3] = el; }}
              data-step-id="3"
              className={`scroll-mt-28 flex-col text-left ${activeStep === 3 ? 'flex' : 'hidden lg:flex'}`}
            >
              <div 
                className="relative w-full rounded-[20px] sm:rounded-[32px] overflow-hidden border border-blue-900/15 p-3.5 sm:p-6 md:p-9 group transition-all duration-500 shadow-none hover:-translate-y-1 hover:border-blue-400/40"
                style={{
                  background: "radial-gradient(circle at bottom right, rgba(255, 255, 255, 0.28) 0%, transparent 55%), linear-gradient(135deg, #09164f 0%, #2546c7 100%)"
                }}
              >
                {/* Bottom Right Corner Glow Outline */}
                <div 
                  className="absolute inset-0 border border-transparent rounded-[20px] sm:rounded-[32px] pointer-events-none z-20"
                  style={{
                    borderRightWidth: "2px",
                    borderBottomWidth: "2px",
                    borderRightColor: "rgba(255, 255, 255, 0.8)",
                    borderBottomColor: "rgba(255, 255, 255, 0.8)",
                    WebkitMaskImage: "radial-gradient(circle at bottom right, black 25%, transparent 60%)",
                    maskImage: "radial-gradient(circle at bottom right, black 25%, transparent 60%)"
                  }}
                />

                {/* Card Header */}
                <div className="relative z-10 flex items-center gap-3 sm:gap-4 mb-3 sm:mb-8">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-sm shrink-0">
                    <Globe className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-sans font-extrabold text-xl sm:text-2xl md:text-3xl text-white tracking-tight">
                      {categories[2].title}
                    </h3>
                    <p className="font-sans text-[11px] sm:text-xs md:text-sm text-blue-100/90 font-medium mt-0.5">
                      {categories[2].subtitle}
                    </p>
                  </div>
                </div>

                {/* Vector Stage */}
                <div className="relative z-10 w-full h-[170px] sm:h-[240px] md:h-[270px] rounded-xl sm:rounded-2xl bg-[#09164f]/40 backdrop-blur-sm border border-white/15 mb-3 sm:mb-8 overflow-hidden select-none flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 500 270" fill="none">
                    <path d="M 80 65 H 250 V 135" stroke="#93c5fd" strokeWidth="1.5" />
                    <path d="M 420 65 H 250 V 135" stroke="#93c5fd" strokeWidth="1.5" />
                    <path d="M 80 205 H 250 V 135" stroke="#93c5fd" strokeWidth="1.5" />
                    <path d="M 420 205 H 250 V 135" stroke="#93c5fd" strokeWidth="1.5" />

                    <circle r="4" fill="#60a5fa" className="filter drop-shadow-[0_0_8px_#60a5fa]">
                      <animateMotion dur="2.5s" repeatCount="indefinite" path="M 80 65 H 250 V 135" />
                    </circle>
                  </svg>

                  <div className="relative z-20 w-10 h-10 sm:w-16 sm:h-16 rounded-lg sm:rounded-2xl bg-gradient-to-tr from-sky-500 to-blue-600 p-0.5 shadow-md flex items-center justify-center">
                    <div className="w-full h-full rounded-lg sm:rounded-2xl bg-sky-600 flex items-center justify-center text-white">
                      <ShieldCheck className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
                    </div>
                  </div>

                  <div className="absolute left-1.5 top-1.5 sm:left-3 sm:top-3 z-10 px-2 py-1 sm:px-3.5 sm:py-2.5 rounded-lg sm:rounded-2xl bg-[#09164f]/90 border border-emerald-400/40 shadow-md flex items-center gap-1 sm:gap-2.5">
                    <FileText className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-300" />
                    <span className="text-[9px] sm:text-xs font-bold text-white">Google Workspace</span>
                  </div>

                  <div className="absolute right-1 top-1.5 sm:right-3 sm:top-3 z-10 px-2 py-1 sm:px-3.5 sm:py-2.5 rounded-lg sm:rounded-2xl bg-[#09164f]/90 border border-blue-400/40 shadow-md flex items-center gap-1 sm:gap-2.5">
                    <Cloud className="w-3 h-3 sm:w-4 sm:h-4 text-blue-300" />
                    <span className="text-[9px] sm:text-xs font-bold text-white">Microsoft 365</span>
                  </div>

                  <div className="absolute left-1 bottom-1.5 sm:left-3 sm:bottom-3 z-10 px-2 py-1 sm:px-3.5 sm:py-2.5 rounded-lg sm:rounded-2xl bg-[#09164f]/90 border border-sky-400/40 shadow-md flex items-center gap-1 sm:gap-2.5">
                    <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 text-sky-300" />
                    <span className="text-[9px] sm:text-xs font-bold text-white">Data BI</span>
                  </div>

                  <div className="absolute right-1 bottom-1.5 sm:right-3 sm:bottom-3 z-10 px-2 py-1 sm:px-3.5 sm:py-2.5 rounded-lg sm:rounded-2xl bg-[#09164f]/90 border border-teal-400/40 shadow-md flex items-center gap-1 sm:gap-2.5">
                    <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-teal-300" />
                    <span className="text-[9px] sm:text-xs font-bold text-white">Cybersecurity</span>
                  </div>
                </div>

                {/* Course Grid */}
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-3.5">
                  {categories[2].topics.map((topic, idx) => {
                    const IconComponent = topic.icon;
                    return (
                      <div 
                        key={idx}
                        className="group/pill relative flex items-center justify-between p-2 sm:p-3.5 rounded-lg sm:rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md hover:bg-white/20 transition-all duration-300 cursor-pointer shadow-sm"
                      >
                        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                          <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-md sm:rounded-xl bg-white/10 border border-white/20 shrink-0 flex items-center justify-center text-white">
                            <IconComponent className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white" />
                          </div>

                          <div className="flex flex-col text-left min-w-0">
                            <span className="font-sans text-[11px] sm:text-sm font-bold text-white truncate group-hover/pill:text-blue-200 transition-colors">
                              {topic.title}
                            </span>
                            <span className="font-sans text-[9px] sm:text-[11px] text-blue-100/80 font-medium truncate mt-0.5">
                              {topic.sub}
                            </span>
                          </div>
                        </div>

                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-blue-200/60 group-hover/pill:text-white group-hover/pill:translate-x-1 transition-all shrink-0 ml-1" />
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>

            {/* ══════════════════════════════════════════════════════════════
               CARD 4: Technology Training
            ══════════════════════════════════════════════════════════════ */}
            <div 
              ref={(el) => { cardRefs.current[4] = el; }}
              data-step-id="4"
              className={`scroll-mt-28 flex-col text-left ${activeStep === 4 ? 'flex' : 'hidden lg:flex'}`}
            >
              <div 
                className="relative w-full rounded-[20px] sm:rounded-[32px] overflow-hidden border border-blue-900/15 p-3.5 sm:p-6 md:p-9 group transition-all duration-500 shadow-none hover:-translate-y-1 hover:border-blue-400/40"
                style={{
                  background: "radial-gradient(circle at bottom right, rgba(255, 255, 255, 0.28) 0%, transparent 55%), linear-gradient(135deg, #09164f 0%, #2546c7 100%)"
                }}
              >
                {/* Bottom Right Corner Glow Outline */}
                <div 
                  className="absolute inset-0 border border-transparent rounded-[20px] sm:rounded-[32px] pointer-events-none z-20"
                  style={{
                    borderRightWidth: "2px",
                    borderBottomWidth: "2px",
                    borderRightColor: "rgba(255, 255, 255, 0.8)",
                    borderBottomColor: "rgba(255, 255, 255, 0.8)",
                    WebkitMaskImage: "radial-gradient(circle at bottom right, black 25%, transparent 60%)",
                    maskImage: "radial-gradient(circle at bottom right, black 25%, transparent 60%)"
                  }}
                />

                {/* Card Header */}
                <div className="relative z-10 flex items-center gap-3 sm:gap-4 mb-3 sm:mb-8">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-sm shrink-0">
                    <Code2 className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-sans font-extrabold text-xl sm:text-2xl md:text-3xl text-white tracking-tight">
                      {categories[3].title}
                    </h3>
                    <p className="font-sans text-[11px] sm:text-xs md:text-sm text-blue-100/90 font-medium mt-0.5">
                      {categories[3].subtitle}
                    </p>
                  </div>
                </div>

                {/* Vector Stage */}
                <div className="relative z-10 w-full h-[170px] sm:h-[240px] md:h-[270px] rounded-xl sm:rounded-2xl bg-[#09164f]/40 backdrop-blur-sm border border-white/15 mb-3 sm:mb-8 overflow-hidden select-none flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 500 270" fill="none">
                    <path d="M 90 65 C 180 65, 180 135, 250 135" stroke="#93c5fd" strokeWidth="1.5" />
                    <path d="M 410 65 C 320 65, 320 135, 250 135" stroke="#93c5fd" strokeWidth="1.5" />
                    <path d="M 90 205 C 180 205, 180 135, 250 135" stroke="#93c5fd" strokeWidth="1.5" />
                    <path d="M 410 205 C 320 205, 320 135, 250 135" stroke="#93c5fd" strokeWidth="1.5" />

                    <circle r="4" fill="#60a5fa" className="filter drop-shadow-[0_0_8px_#60a5fa]">
                      <animateMotion dur="2.2s" repeatCount="indefinite" path="M 90 65 C 180 65, 180 135, 250 135" />
                    </circle>
                  </svg>

                  <div className="relative z-20 w-10 h-10 sm:w-16 sm:h-16 rounded-lg sm:rounded-2xl bg-gradient-to-tr from-teal-600 to-emerald-500 p-0.5 shadow-md flex items-center justify-center">
                    <div className="w-full h-full rounded-lg sm:rounded-2xl bg-teal-600 flex items-center justify-center text-white">
                      <Terminal className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
                    </div>
                  </div>

                  <div className="absolute left-1 top-1.5 sm:left-3 sm:top-3 z-10 px-2 py-1 sm:px-3.5 sm:py-2.5 rounded-lg sm:rounded-2xl bg-[#09164f]/90 border border-teal-400/40 shadow-md flex items-center gap-1 sm:gap-2.5">
                    <Code2 className="w-3 h-3 sm:w-4 sm:h-4 text-teal-300" />
                    <span className="text-[9px] sm:text-xs font-bold text-white">MERN / MEAN</span>
                  </div>

                  <div className="absolute right-1 top-1.5 sm:right-3 sm:top-3 z-10 px-2 py-1 sm:px-3.5 sm:py-2.5 rounded-lg sm:rounded-2xl bg-[#09164f]/90 border border-cyan-400/40 shadow-md flex items-center gap-1 sm:gap-2.5">
                    <Layers className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-300" />
                    <span className="text-[9px] sm:text-xs font-bold text-white">Flutter & React</span>
                  </div>

                  <div className="absolute left-1 bottom-1.5 sm:left-3 sm:bottom-3 z-10 px-2 py-1 sm:px-3.5 sm:py-2.5 rounded-lg sm:rounded-2xl bg-[#09164f]/90 border border-blue-400/40 shadow-md flex items-center gap-1 sm:gap-2.5">
                    <Database className="w-3 h-3 sm:w-4 sm:h-4 text-blue-300" />
                    <span className="text-[9px] sm:text-xs font-bold text-white">PostgreSQL</span>
                  </div>

                  <div className="absolute right-1 bottom-1.5 sm:right-3 sm:top-3 z-10 px-2 py-1 sm:px-3.5 sm:py-2.5 rounded-lg sm:rounded-2xl bg-[#09164f]/90 border border-emerald-400/40 shadow-md flex items-center gap-1 sm:gap-2.5">
                    <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-300" />
                    <span className="text-[9px] sm:text-xs font-bold text-white">QA Automation</span>
                  </div>
                </div>

                {/* Course Grid */}
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-3.5">
                  {categories[3].topics.map((topic, idx) => {
                    const IconComponent = topic.icon;
                    return (
                      <div 
                        key={idx}
                        className="group/pill relative flex items-center justify-between p-2 sm:p-3.5 rounded-lg sm:rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md hover:bg-white/20 transition-all duration-300 cursor-pointer shadow-sm"
                      >
                        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                          <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-md sm:rounded-xl bg-white/10 border border-white/20 shrink-0 flex items-center justify-center text-white">
                            <IconComponent className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white" />
                          </div>

                          <div className="flex flex-col text-left min-w-0">
                            <span className="font-sans text-[11px] sm:text-sm font-bold text-white truncate group-hover/pill:text-blue-200 transition-colors">
                              {topic.title}
                            </span>
                            <span className="font-sans text-[9px] sm:text-[11px] text-blue-100/80 font-medium truncate mt-0.5">
                              {topic.sub}
                            </span>
                          </div>
                        </div>

                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-blue-200/60 group-hover/pill:text-white group-hover/pill:translate-x-1 transition-all shrink-0 ml-1" />
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
