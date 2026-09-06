"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  ShieldCheck, 
  Users, 
  UserCheck, 
  GraduationCap, 
  BookOpen,
  CheckCircle2, 
  Sparkles
} from "lucide-react";

interface RoleStep {
  id: number;
  role: string;
  badge: string;
  icon: any;
  title: string;
  desc: string;
  responsibilities: string[];
  mockupStats: { label: string; val: string }[];
}

const roles: RoleStep[] = [
  {
    id: 1,
    role: "Learning Admin",
    badge: "SYSTEM CONFIGURATION",
    icon: ShieldCheck,
    title: "Platform Governance & Catalog Controls",
    desc: "Configures global platform settings, manages multi-tenant course catalogs, enforces security permissions, and audits system access logs.",
    responsibilities: [
      "Multi-tenant catalog & bulk course assignment",
      "Visual drag-and-drop course authoring studio",
      "REST APIs, webhooks & SAML/OAuth SSO",
      "Tamper-evident immutable audit logs"
    ],
    mockupStats: [
      { label: "Active Seats", val: "2,450 / 3,000" },
      { label: "SSO Status", val: "SAML 2.0 Active" },
      { label: "Audit Trail", val: "100% Immutable" }
    ]
  },
  {
    id: 2,
    role: "HR Manager",
    badge: "WORKFORCE COMPLIANCE",
    icon: Users,
    title: "Workforce Training & Compliance Oversight",
    desc: "Assigns mandatory compliance learning paths by department or location, tracks completion deadlines, and exports audit-ready certificates.",
    responsibilities: [
      "Department workforce completion analytics",
      "Automated compliance deadline alerts",
      "Bulk export of employee audit records",
      "Automated roster sync via HRIS connectors"
    ],
    mockupStats: [
      { label: "Compliance Rate", val: "98.4% Passed" },
      { label: "Pending Audits", val: "0 Overdue" },
      { label: "HRIS Sync", val: "Live Roster" }
    ]
  },
  {
    id: 3,
    role: "Line Manager",
    badge: "NATIVE SUPERVISOR ROLE",
    icon: UserCheck,
    title: "Direct Report Accountability & Skill Gaps",
    desc: "Native supervisor role for tracking direct report progress, approving skill completions, and receiving escalation alerts for overdue training.",
    responsibilities: [
      "Direct report drilldown & team dashboard",
      "Practical skill assessment approvals",
      "Skill gap analysis & learning paths",
      "Automated manager escalation alerts"
    ],
    mockupStats: [
      { label: "Direct Reports", val: "12 Members" },
      { label: "Team Velocity", val: "94% On-Track" },
      { label: "Pending Sign-off", val: "2 Approvals" }
    ]
  },
  {
    id: 4,
    role: "Instructor",
    badge: "PROCTORED STUDIO",
    icon: GraduationCap,
    title: "Course Authoring & AI Live Exam Proctoring",
    desc: "Builds interactive courses, manages question banks, monitors live proctored exams with webcam verification, and grades student assessments.",
    responsibilities: [
      "Syllabus builder (Videos, Slides, SCORM)",
      "Webcam ID & screen lockdown proctoring",
      "8 Question types with automated scoring",
      "Item difficulty analytics & gradebook"
    ],
    mockupStats: [
      { label: "AI Proctoring", val: "Webcam Active" },
      { label: "Question Bank", val: "1,200 Items" },
      { label: "Avg Test Score", val: "86.5%" }
    ]
  },
  {
    id: 5,
    role: "Learner",
    badge: "PERSONALIZED PORTAL",
    icon: BookOpen,
    title: "Frictionless Mobile & Desktop Learning",
    desc: "Personalized portal for accessing assigned courses, completing proctored quizzes, tracking career badges, and downloading PDF certificates.",
    responsibilities: [
      "Personalized portal with deadline countdowns",
      "Adaptive course player with auto-save",
      "Instant quiz feedback & historical attempts",
      "Verifiable PDF certificates with QR codes"
    ],
    mockupStats: [
      { label: "Career Badges", val: "8 Earned" },
      { label: "Certificates", val: "12 Issued" },
      { label: "Next Module", val: "Due in 3 Days" }
    ]
  }
];

export default function HrUpSkillRolesStepper() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const stepRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      const triggerLine = window.innerHeight * 0.35;

      let currentActive = 1;
      for (let i = 1; i <= roles.length; i++) {
        const el = stepRefs.current[i];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerLine) {
            currentActive = i;
          }
        }
      }
      setActiveStep(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToStep = (id: number) => {
    setActiveStep(id);
    const el = stepRefs.current[id];
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start text-slate-800 relative">
      
      {/* Left Column (Sticky Sidebar matching FreightStepper) */}
      <div className="lg:col-span-4 lg:sticky lg:top-28 z-20 flex flex-col items-start text-left">
        <span className="font-sans text-xs md:text-sm font-bold uppercase tracking-wider text-blue-600 mb-2 block">
          BUILT FOR EVERY ROLE IN CORPORATE LEARNING
        </span>

        <h2 className="font-sans font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#aebcff] via-[#2546c7] to-[#09164f]">
            One Platform, Five Roles, Zero Gaps
          </span>
        </h2>

        {/* Minimalist Vertical Step List matching FreightStepper */}
        <div className="flex flex-col gap-2.5 w-full border-l-2 border-slate-200/80 pl-4 py-0.5">
          {roles.map((step) => {
            const isActive = step.id === activeStep;
            return (
              <button
                key={step.id}
                onClick={() => scrollToStep(step.id)}
                aria-label={`Scroll to ${step.role}`}
                className={`group relative flex items-center gap-3 text-left transition-all duration-300 py-1.5 px-3 rounded-lg cursor-pointer ${
                  isActive
                    ? "text-blue-600 font-extrabold text-base md:text-lg -ml-[18px] pl-[16px] border-l-2 border-blue-600 bg-blue-50/50"
                    : "text-slate-400 hover:text-slate-700 font-medium text-sm md:text-base hover:bg-slate-50/50"
                }`}
              >
                <span>{step.id}. {step.role}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Column (Scrollable Step Cards Stack matching FreightStepper) */}
      <div className="lg:col-span-8 flex flex-col gap-16 lg:gap-24 w-full">
        {roles.map((step) => {
          const IconComp = step.icon;
          return (
            <div
              key={step.id}
              ref={(el) => { stepRefs.current[step.id] = el; }}
              className="scroll-mt-32 flex flex-col gap-4 text-left"
            >
              {/* Step Header: Title & Description */}
              <div>
                <h3 className="font-sans font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight">
                  {step.role} Panel
                </h3>
                
                <p className="font-sans text-sm md:text-base text-slate-600 mt-2 leading-relaxed max-w-xl">
                  {step.desc}
                </p>
              </div>

              {/* Graphic Card Container: 20px top & left padding, 0px right & bottom padding */}
              <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.04)] bg-white pt-[20px] pl-[20px] pr-0 pb-0 group">
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-tl-xl border-t border-l border-slate-200/60 bg-gradient-to-br from-[#09102a] via-[#070b19] to-[#040814] p-6 md:p-8 text-white flex flex-col justify-between shadow-inner">
                  
                  {/* Top Bar */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-blue-500/20 text-blue-400 rounded-xl border border-blue-500/30">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="font-sans font-bold text-base text-white tracking-wide">{step.title}</span>
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-300 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800/60">
                      {step.badge}
                    </span>
                  </div>

                  {/* Stat Cards Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
                    {step.mockupStats.map((st, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col">
                        <span className="text-[10px] text-slate-400 font-medium">{st.label}</span>
                        <span className="font-sans font-bold text-xs md:text-sm text-blue-300 mt-0.5">{st.val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Capabilities List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                    {step.responsibilities.map((res, rIdx) => (
                      <div key={rIdx} className="flex items-center gap-2.5 bg-white/5 rounded-xl p-2.5 border border-white/5 text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="font-medium text-xs truncate">{res}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
