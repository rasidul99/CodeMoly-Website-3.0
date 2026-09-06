import React from "react";
import { getPayload } from "payload";
import config from "@/payload.config";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ContactModal from "@/components/ContactModal";

import NavbarScrollBehavior from "@/components/NavbarScrollBehavior";
import ScrollRevealBehavior from "@/components/ScrollRevealBehavior";
import LaserFlow from "@/components/LaserFlow";
import HeroSpotlightBackground from "@/components/HeroSpotlightBackground";
import ScrambleText from "@/components/ScrambleText";
import GridDistortion from "@/components/GridDistortion";
import AnimatedMetric from "@/components/AnimatedMetric";
import FaqSection, { FaqItem } from "@/components/FaqSection";
import HrUpSkillRolesStepper from "@/components/HrUpSkillRolesStepper";
import HrUpSkillComparisonTable from "@/components/HrUpSkillComparisonTable";
import HrUpSkillModulesDark from "@/components/HrUpSkillModulesDark";
import HrUpSkillPanelsScroll from "@/components/HrUpSkillPanelsScroll";
import { 
  ArrowRight, 
  Check, 
  X, 
  ShieldCheck, 
  Users, 
  GraduationCap, 
  Video, 
  Lock,
  Layers,
  AlertCircle
} from "lucide-react";

export async function generateMetadata() {
  return {
    title: "HR UpSkill - Corporate Learning & Compliance LMS | CodeMoly",
    description: "HR UpSkill unifies course delivery, live proctored assessments, compliance tracking, and workforce reporting in one platform with a native Line Manager role.",
  };
}

export default async function HrUpSkillPage() {
  // Fetch CMS Data for Navbar and Footer
  let siteSettings: any = null;
  try {
    const payload = await getPayload({ config });
    siteSettings = await payload.findGlobal({
      slug: "site-settings",
    });
  } catch (error) {
    console.error("Failed to fetch site settings for HR UpSkill page:", error);
  }

  const navigation = siteSettings?.navigation && siteSettings.navigation.length > 0
    ? siteSettings.navigation
    : [
        { label: "Home", link: "/" },
        { label: "Enterprise", link: "/#enterprise-products" },
        { label: "Products", link: "/#products" },
        { label: "Services", link: "/#services" },
        { label: "Features", link: "/#features" },
        { label: "Blog", link: "/#blog" },
      ];

  const logoUrl = siteSettings?.logoImage && typeof siteSettings.logoImage === "object" && "url" in siteSettings.logoImage
    ? (siteSettings.logoImage.url as string)
    : null;
  const logoAlt = siteSettings?.logoText || "CodeMoly";
  const logoTranslateY = typeof siteSettings?.logoTranslateY === "number" ? siteSettings.logoTranslateY : 2;

  const hrFaqs: FaqItem[] = [
    {
      id: 1,
      question: "Does HR UpSkill include exam proctoring, or is that a separate cost?",
      answer: "Live proctoring — webcam identity verification, screen monitoring, and AI-flagged suspicious behavior alerts — is built into the platform, not sold as an add-on."
    },
    {
      id: 2,
      question: "Can line managers see their team's training progress?",
      answer: "Yes — Line Manager is a native role with direct-report drill-down, approval workflows, and escalation alerts for overdue training, not something bolted on through a workaround."
    },
    {
      id: 3,
      question: "Does it integrate with our existing HR system?",
      answer: "Yes — HRIS connectors, SSO (SAML/OAuth), REST APIs, and webhooks are built in for seamless operational fit with existing enterprise systems."
    },
    {
      id: 4,
      question: "What question types are supported in assessments?",
      answer: "MCQ, True/False, Short Answer, Essay, Coding, File Upload, Matching, and Fill-in-the-blank, with manual and automated scoring."
    },
    {
      id: 5,
      question: "Is the platform accessible and mobile-friendly?",
      answer: "Yes — full desktop, tablet, and mobile browser support with WCAG 2.1 AA accessibility compliance and keyboard navigation."
    },
    {
      id: 6,
      question: "Can we customize branding and workflows for our organization?",
      answer: "Yes — branding, roles, approval workflows, and integrations are all part of the customization process, starting with a discovery call."
    },
    {
      id: 7,
      question: "Is this a one-time purchase or a subscription?",
      answer: "Lifetime platform ownership is available as a one-time investment, with an optional service and support plan for ongoing updates and maintenance."
    }
  ];

  return (
    <main className="min-h-screen bg-[#070b19] text-white selection:bg-teal-500 selection:text-white font-sans antialiased relative">
      
      {/* Dynamic Navbar Scroll Listener */}
      <NavbarScrollBehavior />

      {/* Dynamic Scroll Reveal Animations */}
      <ScrollRevealBehavior />

      {/* Navbar Header */}
      <Navbar
        logoAlt={logoAlt}
        logoUrl={logoUrl}
        navigation={navigation}
        ctaLabel="Book a Free Demo"
        ctaLink="#contact"
        logoTranslateY={logoTranslateY}
      />

      {/* Section 1: Hero Section */}
      <section className="group relative pt-32 pb-20 md:pt-40 md:pb-28 px-5 md:px-20 bg-[#09102a] border-b border-teal-950/20 overflow-hidden" aria-label="HR UpSkill introduction">
        
        {/* Background Image Layer with Touchlight/Spotlight Mouse Torch Effect */}
        <HeroSpotlightBackground 
          imageSrc="/portfolio/hr_upskill.jpg"
          altText="Corporate LMS Learning"
          spotlightRadius={220}
        />

        <div className="absolute left-[500px] right-0 -top-[338px] bottom-0 z-0 pointer-events-none overflow-hidden" style={{ opacity: 1.0 }}>
          <LaserFlow
            horizontalBeamOffset={0.0}
            verticalBeamOffset={0.0}
            color="#0d9488"
            horizontalSizing={0.25}
            verticalSizing={1.2}
            wispDensity={1.8}
            wispSpeed={29}
            wispIntensity={20}
            flowSpeed={0.66}
            flowStrength={0.11}
            fogIntensity={0.25}
            fogScale={0.16}
            fogFallSpeed={2}
            decay={3}
            falloffStart={1.39}
          />
        </div>
        
        <div className="max-w-[1400px] mx-auto w-full relative z-10 flex flex-col items-start text-left">
          <div className="max-w-4xl text-left flex flex-col items-start w-full">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-teal-950/60 text-teal-300 border border-teal-800/50 mb-6 uppercase tracking-wider">
              Corporate LMS — Workforce Learning & Compliance
            </span>

            <h1 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-6 text-left">
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400">
                A Learning Platform Your
              </span>
              <span className="block lg:whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400">
                HR Team, Managers, and Employees
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400">
                Actually Use
              </span>
            </h1>

            <p className="font-sans text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed mb-10 text-left">
              HR UpSkill unifies course delivery, live proctored assessments, compliance tracking, and workforce reporting in one platform — with a dedicated Line Manager role most LMS platforms don't offer at all.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-start mb-16 md:mb-20">
              <a
                href="#contact"
                className="open-contact-modal w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-white font-semibold text-[15px] rounded-lg bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105 cursor-pointer text-center"
              >
                <span>Book a Free Demo</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Sourced Visual: Corporate Learning Dashboard Mockup */}
          <div className="w-full max-w-[1224px] mr-auto relative rounded-2xl shadow-2xl aspect-[1800/1352] -mt-[25px]">
            <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-slate-900">
              <GridDistortion 
                imageSrc="/portfolio/hr_upskill.jpg" 
                className="w-full h-full object-cover"
                grid={12}
                mouse={0.18}
                strength={0.15}
                relaxation={0.9}
              />
            </div>
            {/* Light Overlay */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/light-overlay.png" 
              alt="" 
              className="absolute top-[-8px] left-[calc(50%+300px)] -translate-x-1/2 -translate-y-1/2 w-1/2 h-20 object-fill pointer-events-none mix-blend-screen z-10 hue-rotate-[0deg] saturate-150" 
            />
            <div className="absolute inset-0 border border-white/20 rounded-2xl pointer-events-none z-20" />
          </div>
        </div>
      </section>

      {/* Section 2: Core Statistics Bar */}
      <section className="section-reveal metrics-reveal relative w-full py-16 px-5 md:px-20 bg-[#ffffff] border-t border-b border-slate-100 overflow-hidden text-slate-800" aria-label="Core Performance Metrics">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.12] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10 text-center">
          <div className="flex flex-col items-center justify-center">
            <AnimatedMetric end={5} suffix=" Roles" className="font-sans text-5xl md:text-6xl font-extrabold text-[#09164f] mb-2 tracking-tight" />
            <span className="font-sans text-base md:text-lg font-bold text-slate-800">Native Access Control</span>
            <span className="font-sans text-xs text-slate-500 font-normal">Admin, HR, Line Manager, Instructor, Learner</span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <AnimatedMetric end={100} suffix="%" className="font-sans text-5xl md:text-6xl font-extrabold text-[#09164f] mb-2 tracking-tight" />
            <span className="font-sans text-base md:text-lg font-bold text-slate-800">AI Exam Integrity</span>
            <span className="font-sans text-xs text-slate-500 font-normal">Webcam ID & screen lockdown proctoring</span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <AnimatedMetric end={100} suffix="%" className="font-sans text-5xl md:text-6xl font-extrabold text-[#09164f] mb-2 tracking-tight" />
            <span className="font-sans text-base md:text-lg font-bold text-slate-800">Audit Readiness</span>
            <span className="font-sans text-xs text-slate-500 font-normal">Tamper-evident logs & exportable certs</span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <AnimatedMetric end={0} finalText="WCAG 2.1" className="font-sans text-5xl md:text-6xl font-extrabold text-[#09164f] mb-2 tracking-tight" />
            <span className="font-sans text-base md:text-lg font-bold text-slate-800">AA Accessibility</span>
            <span className="font-sans text-xs text-slate-500 font-normal">Full desktop, tablet & mobile support</span>
          </div>
        </div>
      </section>

      {/* Section 3: Operational Challenges */}
      <section className="section-reveal painpoints-reveal relative w-full py-20 md:py-28 px-5 md:px-20 bg-white text-slate-800 border-t border-slate-100" aria-label="Operational Challenges">
        <div className="max-w-[1400px] mx-auto text-left">
          
          <div className="mb-14 md:mb-20 text-center flex flex-col items-center">
            <span className="font-sans text-xs md:text-sm font-bold uppercase tracking-wider text-red-600 mb-3 block">
              CORPORATE TRAINING BOTTLENECKS
            </span>

            <h2 id="pain-heading" className="font-sans font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-red-600 to-black pb-2 text-center">
              Corporate Training Teams Are Fighting Fragmented Tools
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            
            {/* Challenge Card 1 */}
            <div className="group relative bg-gradient-to-br from-red-50/40 to-white border border-red-100/70 hover:border-red-300 rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-red-500/5 flex flex-col justify-start items-start text-left overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-xl pointer-events-none" />
              <div className="p-4 bg-red-100/60 text-red-600 rounded-2xl w-fit mb-6 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-red-500/20">
                <Layers className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-slate-800 text-sm md:text-base mb-2 group-hover:text-red-700 transition-colors">Fragmented Data Systems</h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Training content, HR records, and employee assessments live in separate systems that don't talk to each other.
                </p>
              </div>
            </div>

            {/* Challenge Card 2 */}
            <div className="group relative bg-gradient-to-br from-red-50/40 to-white border border-red-100/70 hover:border-red-300 rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-red-500/5 flex flex-col justify-start items-start text-left overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-xl pointer-events-none" />
              <div className="p-4 bg-red-100/60 text-red-600 rounded-2xl w-fit mb-6 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-red-500/20">
                <Users className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-0.5" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-slate-800 text-sm md:text-base mb-2 group-hover:text-red-700 transition-colors">Zero Manager Visibility</h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Line managers have no real-time visibility into their own direct reports' learning progress or skill gaps.
                </p>
              </div>
            </div>

            {/* Challenge Card 3 */}
            <div className="group relative bg-gradient-to-br from-red-50/40 to-white border border-red-100/70 hover:border-red-300 rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-red-500/5 flex flex-col justify-start items-start text-left overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-xl pointer-events-none" />
              <div className="p-4 bg-red-100/60 text-red-600 rounded-2xl w-fit mb-6 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-red-500/20">
                <Video className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-slate-800 text-sm md:text-base mb-2 group-hover:text-red-700 transition-colors">Exam Cheating & Inflation</h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Online exams are easily gamed without proctoring — making certifications and credentials lose internal credibility.
                </p>
              </div>
            </div>

            {/* Challenge Card 4 */}
            <div className="group relative bg-gradient-to-br from-red-50/40 to-white border border-red-100/70 hover:border-red-300 rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-red-500/5 flex flex-col justify-start items-start text-left overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-xl pointer-events-none" />
              <div className="p-4 bg-red-100/60 text-red-600 rounded-2xl w-fit mb-6 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-red-500/20">
                <GraduationCap className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-slate-800 text-sm md:text-base mb-2 group-hover:text-red-700 transition-colors">Manual Course Authoring</h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Instructors spend hours building courses manually with no visual drag-and-drop authoring or question banks.
                </p>
              </div>
            </div>

            {/* Challenge Card 5 */}
            <div className="group relative bg-gradient-to-br from-red-50/40 to-white border border-red-100/70 hover:border-red-300 rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-red-500/5 flex flex-col justify-start items-start text-left overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-xl pointer-events-none" />
              <div className="p-4 bg-red-100/60 text-red-600 rounded-2xl w-fit mb-6 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-red-500/20">
                <ShieldCheck className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-6deg]" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-slate-800 text-sm md:text-base mb-2 group-hover:text-red-700 transition-colors">Scattered Audit Evidence</h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Audit evidence for mandatory compliance training is difficult to compile, export, and defend during external audits.
                </p>
              </div>
            </div>

            {/* Challenge Card 6 */}
            <div className="group relative bg-gradient-to-br from-red-50/40 to-white border border-red-100/70 hover:border-red-300 rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-red-500/5 flex flex-col justify-start items-start text-left overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-xl pointer-events-none" />
              <div className="p-4 bg-red-100/60 text-red-600 rounded-2xl w-fit mb-6 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-red-500/20">
                <Lock className="w-6 h-6 transition-all duration-300 group-hover:scale-110" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-slate-800 text-sm md:text-base mb-2 group-hover:text-red-700 transition-colors">Rigid Enterprise Integration</h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  LMS tools don't fit existing corporate HRIS, SAML/OAuth SSO, or regional compliance standards out of the box.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 4: Built Around Every Role in Corporate Learning */}
      <section id="roles-stepper" className="section-reveal relative bg-[#f6f7f9] w-full py-16 md:py-24 px-5 md:px-20 text-slate-800 border-t border-b border-slate-100" aria-label="Corporate Roles Stepper">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.18] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <HrUpSkillRolesStepper />
        </div>
      </section>

      {/* Section 5: Before vs. With HR UpSkill Evolution */}
      <section className="section-reveal relative py-16 md:py-24 px-5 md:px-20 bg-white border-t border-b border-slate-100 overflow-hidden" aria-labelledby="comparison-heading">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="font-sans text-xs md:text-sm font-bold uppercase tracking-wider text-blue-600 mb-2 block">
              Workflow Evolution
            </span>
            <h2 id="comparison-heading" className="font-sans font-black text-3xl md:text-5xl leading-tight tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#aebcff] via-[#2546c7] to-[#09164f]">
                Before HR UpSkill vs. With HR UpSkill
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch text-left">
            
            {/* Card 1: Traditional Operations (FIRST Image, THEN Text) */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col gap-6 text-left justify-between">
              
              {/* 1st: IMAGE */}
              <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm bg-white pt-[20px] pl-[20px] pr-0 pb-0 group">
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-tl-xl border-t border-l border-slate-200/60">
                  <GridDistortion 
                    imageSrc="/portfolio/freight_before.jpg" 
                    className="absolute inset-0 w-full h-full object-cover object-left-top"
                    grid={12}
                    mouse={0.18}
                    strength={0.15}
                    relaxation={0.9}
                  />
                </div>
              </div>

              {/* 2nd: TEXT CONTENT */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs font-bold text-red-500 uppercase tracking-wider block">
                    OLD WAY • FRAGMENTED
                  </span>
                  <span className="text-xs text-slate-400 font-medium">Traditional LMS</span>
                </div>

                <h3 className="font-sans font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight">
                  Traditional Fragmented LMS
                </h3>

                <ul className="flex flex-col gap-3">
                  <li className="flex gap-3 text-xs md:text-sm text-slate-600 leading-relaxed items-start">
                    <div className="p-1 bg-red-50 text-red-500 rounded-md shrink-0 mt-0.5 border border-red-100">
                      <AlertCircle className="w-3.5 h-3.5" />
                    </div>
                    <span>Course completions and test scores are scattered across Excel sheets and manual logs.</span>
                  </li>
                  <li className="flex gap-3 text-xs md:text-sm text-slate-600 leading-relaxed items-start">
                    <div className="p-1 bg-red-50 text-red-500 rounded-md shrink-0 mt-0.5 border border-red-100">
                      <AlertCircle className="w-3.5 h-3.5" />
                    </div>
                    <span>Line managers have zero visibility into overdue mandatory compliance training.</span>
                  </li>
                  <li className="flex gap-3 text-xs md:text-sm text-slate-600 leading-relaxed items-start">
                    <div className="p-1 bg-red-50 text-red-500 rounded-md shrink-0 mt-0.5 border border-red-100">
                      <AlertCircle className="w-3.5 h-3.5" />
                    </div>
                    <span>Exams lack webcam or screen proctoring, leading to credential inflation and gaming.</span>
                  </li>
                  <li className="flex gap-3 text-xs md:text-sm text-slate-600 leading-relaxed items-start">
                    <div className="p-1 bg-red-50 text-red-500 rounded-md shrink-0 mt-0.5 border border-red-100">
                      <AlertCircle className="w-3.5 h-3.5" />
                    </div>
                    <span>Instructors build courses manually with no visual drag-and-drop authoring or question banks.</span>
                  </li>
                  <li className="flex gap-3 text-xs md:text-sm text-slate-600 leading-relaxed items-start">
                    <div className="p-1 bg-red-50 text-red-500 rounded-md shrink-0 mt-0.5 border border-red-100">
                      <AlertCircle className="w-3.5 h-3.5" />
                    </div>
                    <span>Audit evidence for compliance training is difficult to compile, export, and defend during audits.</span>
                  </li>
                  <li className="flex gap-3 text-xs md:text-sm text-slate-600 leading-relaxed items-start">
                    <div className="p-1 bg-red-50 text-red-500 rounded-md shrink-0 mt-0.5 border border-red-100">
                      <AlertCircle className="w-3.5 h-3.5" />
                    </div>
                    <span>No API connectors exist to automatically synchronize employee rosters with HRIS software.</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Card 2: Connected Learning Hub (FIRST Text, THEN Image) */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col gap-6 text-left justify-between">
              
              {/* 1st: TEXT CONTENT */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block font-bold">
                    HR UPSKILL WAY • AUTOMATED
                  </span>
                  <span className="text-xs text-blue-600 font-semibold">100% Audit Ready</span>
                </div>

                <h3 className="font-sans font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight">
                  Connected HR UpSkill Hub
                </h3>

                <ul className="flex flex-col gap-3">
                  <li className="flex gap-3 text-xs md:text-sm text-slate-700 leading-relaxed items-start">
                    <div className="p-1 bg-emerald-50 text-emerald-600 rounded-md shrink-0 mt-0.5 border border-emerald-100">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Unified course delivery, live assessments, compliance tracking, and tamper-proof audit logs.</span>
                  </li>
                  <li className="flex gap-3 text-xs md:text-sm text-slate-700 leading-relaxed items-start">
                    <div className="p-1 bg-emerald-50 text-emerald-600 rounded-md shrink-0 mt-0.5 border border-emerald-100">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Native Line Manager role with direct-report drill-down & escalation alerts for overdue training.</span>
                  </li>
                  <li className="flex gap-3 text-xs md:text-sm text-slate-700 leading-relaxed items-start">
                    <div className="p-1 bg-emerald-50 text-emerald-600 rounded-md shrink-0 mt-0.5 border border-emerald-100">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>AI-Guard proctoring with webcam ID check, browser lockdown mode & screen monitoring.</span>
                  </li>
                  <li className="flex gap-3 text-xs md:text-sm text-slate-700 leading-relaxed items-start">
                    <div className="p-1 bg-emerald-50 text-emerald-600 rounded-md shrink-0 mt-0.5 border border-emerald-100">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Drag-and-drop course studio supporting video streams, slides, PDFs, SCORM & 8 question types.</span>
                  </li>
                  <li className="flex gap-3 text-xs md:text-sm text-slate-700 leading-relaxed items-start">
                    <div className="p-1 bg-emerald-50 text-emerald-600 rounded-md shrink-0 mt-0.5 border border-emerald-100">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Auto-generated PDF certificates with unique QR verification codes and instant audit export.</span>
                  </li>
                  <li className="flex gap-3 text-xs md:text-sm text-slate-700 leading-relaxed items-start">
                    <div className="p-1 bg-emerald-50 text-emerald-600 rounded-md shrink-0 mt-0.5 border border-emerald-100">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>REST APIs, webhooks, SAML/OAuth SSO, and native HRIS connectors built in out of the box.</span>
                  </li>
                </ul>
              </div>

              {/* 2nd: IMAGE */}
              <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm bg-white pt-[20px] pl-[20px] pr-0 pb-0 group">
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-tl-xl border-t border-l border-slate-200/60">
                  <GridDistortion 
                    imageSrc="/portfolio/freight_after.jpg" 
                    className="absolute inset-0 w-full h-full object-cover object-left-top"
                    grid={12}
                    mouse={0.18}
                    strength={0.15}
                    relaxation={0.9}
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Section 6: Enterprise Controls Comparison Matrix */}
      <section className="section-reveal solution-reveal relative w-full py-20 md:py-28 px-5 md:px-20 bg-[#ffffff] text-slate-800 border-t border-slate-100" aria-label="Enterprise Comparison Table">
        <div className="max-w-[1400px] mx-auto">
          <HrUpSkillComparisonTable />
        </div>
      </section>

      {/* Section 7: Core Platform Modules & Features (Dark Redesign with Animated Icons) */}
      <HrUpSkillModulesDark />

      {/* Section 8: Feature Panels Horizontal Scroll Track */}
      <HrUpSkillPanelsScroll />

      {/* Section 9: FAQ Section */}
      <FaqSection 
        faqs={hrFaqs} 
        subtitle="CORPORATE L&D QUESTIONS"
        title="Frequently Asked Questions"
        bgImage="/portfolio/hr_upskill.jpg"
      />

      {/* Footer Section */}
      <FooterSection />

      {/* Contact Modal */}
      <ContactModal />

    </main>
  );
}
