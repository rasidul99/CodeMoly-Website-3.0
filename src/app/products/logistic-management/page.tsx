import React from "react";
import Link from "next/link";
import { getPayload } from "payload";
import config from "@/payload.config";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ContactModal from "@/components/ContactModal";

import NavbarScrollBehavior from "@/components/NavbarScrollBehavior";
import ScrollRevealBehavior from "@/components/ScrollRevealBehavior";
import LaserFlow from "@/components/LaserFlow";
import HeroSpotlightBackground from "@/components/HeroSpotlightBackground";
import GridDistortion from "@/components/GridDistortion";
import AnimatedMetric from "@/components/AnimatedMetric";
import PixelCard from "@/components/PixelCard";
import ProductTestimonials from "@/components/ProductTestimonials";
import OperationalSolutionsScroll from "@/components/OperationalSolutionsScroll";
import SystemCapabilitiesDark from "@/components/SystemCapabilitiesDark";
import OurCommitmentsBento from "@/components/OurCommitmentsBento";
import FaqSection from "@/components/FaqSection";
import FreightStepper from "@/components/FreightStepper";

const logisticFaqs = [
  {
    id: 1,
    question: "What types of shipments does Freito support?",
    answer: "Freito supports sea and air freight, import and export operations, door-to-door, and port-to-port shipments seamlessly."
  },
  {
    id: 2,
    question: "Can my clients see our vendor costs or margins through the client portal?",
    answer: "No. The client portal shows shipment status milestones and approved documents only. Internal vendor costs, carrier rates, and margins are strictly hidden."
  },
  {
    id: 3,
    question: "Does Freito generate shipping documents automatically?",
    answer: "Yes. HBL, HAWB, Manifest, and Delivery Order documents are auto-numbered and auto-populated directly from shipment Job File data with full version logs."
  },
  {
    id: 4,
    question: "Can different team members have different access levels?",
    answer: "Yes. Role-based permissions cover Company Admins, Operations Officers, Documentation Officers, Finance Officers, Sales Executives, and Client Users."
  },
  {
    id: 5,
    question: "Is shipment profitability tracked automatically?",
    answer: "Yes. Margins are calculated during quote creation and tracked through to operations release and closeout at the shipment job level."
  },
  {
    id: 6,
    question: "How is data secured and audited?",
    answer: "Every document upload, invoice release, user cost update, and operation status update is logged in a secure activity timeline."
  }
];
import { 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  MessageSquare, 
  Truck, 
  Zap, 
  TrendingUp,
  TrendingDown,
  Users, 
  Clock,
  Package,
  AlertTriangle,
  Lock,
  ArrowRight,
  AlertCircle,
  FileText,
  UserCheck,
  Check,
  Info,
  Layers,
  FileX,
  PhoneCall,
  Calculator,
  History
} from "lucide-react";

export default async function FreitoProductPage() {
  // Fetch global site settings for navbar & footer syncing
  let siteSettings: any = null;
  try {
    const payload = await getPayload({ config });
    siteSettings = await payload.findGlobal({
      slug: "site-settings",
    });
  } catch (error) {
    console.error("Failed to fetch site settings in logistics page:", error);
  }

  // Fallbacks for header shell
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
  const ctaLabel = siteSettings?.ctaLabel || "Start a project";
  const ctaLink = siteSettings?.ctaLink || "#contact";
  const showCta = siteSettings?.showCta !== false;
  const mobileMenuFooter = siteSettings?.mobileMenuFooter || "CODEMOLY AI LABS";

  return (
    <main className="min-h-screen bg-white text-slate-800 flex flex-col justify-between overflow-x-clip">
      
      {/* Scroll & Reveal Behaviors */}
      <NavbarScrollBehavior />
      <ScrollRevealBehavior />

      {/* Navigation */}
      <Navbar
        navigation={navigation}
        logoUrl={logoUrl}
        logoAlt={logoAlt}
        logoTranslateY={logoTranslateY}
        ctaLabel={ctaLabel}
        ctaLink={ctaLink}
        showCta={showCta}
        mobileMenuFooter={mobileMenuFooter}
      />

      {/* Section 1: Hero Section */}
      <section className="group relative pt-32 pb-20 md:pt-40 md:pb-28 px-5 md:px-20 bg-[#09102a] border-b border-blue-950/20 overflow-hidden" aria-label="Freito introduction">
        
        {/* Background Image Layer with Touchlight/Spotlight Mouse Torch Effect */}
        <HeroSpotlightBackground 
          imageSrc="/portfolio/freight_faq.jpg"
          altText="Freight Cargo Operations"
          spotlightRadius={220}
        />

        <div className="absolute left-[500px] right-0 -top-[338px] bottom-0 z-0 pointer-events-none overflow-hidden" style={{ opacity: 1.0 }}>
          <LaserFlow
            horizontalBeamOffset={0.0}
            verticalBeamOffset={0.0}
            color="#3b82f6"
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
        
        <div className="max-w-[1400px] mx-auto w-full relative z-10 flex flex-col items-start">
          <div className="max-w-4xl text-left flex flex-col items-start w-full">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-950/40 text-blue-300 border border-blue-800/50 mb-6 uppercase tracking-wider">
              Freight Forwarding ERP
            </span>

            <h1 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-6">
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400">
                Run Your Entire
              </span>
              <span className="block lg:whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400">
                Freight Forwarding Business
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400">
                From One Platform
              </span>
            </h1>

            <p className="font-sans text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed mb-10">
              From customer inquiry to quotation, booking, documentation, operations, delivery, billing, and finance closeout — Freito replaces email, Excel, WhatsApp, and PDF folders with one connected system built for freight forwarders.
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

          {/* Sourced Visual: Control Tower Dashboard Mockup */}
          <div className="w-full max-w-[1224px] mr-auto relative rounded-2xl shadow-2xl aspect-[1800/1352] -mt-[25px]">
            <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-slate-900">
              <GridDistortion 
                imageSrc="/portfolio/logistic_erp.jpg" 
                className="w-full h-full object-cover"
                grid={12}
                mouse={0.18}
                strength={0.15}
                relaxation={0.9}
              />
            </div>
            {/* Light Overlay */}
            <img 
              src="/light-overlay.png" 
              alt="" 
              className="absolute top-[-8px] left-[calc(50%+300px)] -translate-x-1/2 -translate-y-1/2 w-1/2 h-20 object-fill pointer-events-none mix-blend-screen z-10 hue-rotate-[0deg] saturate-150" 
            />
            <div className="absolute inset-0 border border-white/20 rounded-2xl pointer-events-none z-20" />
          </div>
        </div>
      </section>

      {/* Core Statistics Block */}
      <section className="section-reveal metrics-reveal relative w-full py-16 px-5 md:px-20 bg-[#ffffff] border-t border-slate-100 overflow-hidden text-slate-800" aria-label="Key Performance Indicators">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.12] pointer-events-none" />
        <div className="metrics-grid max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
          <div className="flex flex-col items-center justify-center text-center">
            <span className="font-sans text-5xl md:text-6xl font-extrabold text-[#09164f] mb-3 tracking-tight">
              <AnimatedMetric end={10} suffix="x" />
            </span>
            <span className="font-sans text-lg md:text-xl font-bold text-slate-800 mb-1">Quoting Speed Boost</span>
            <span className="font-sans text-sm text-slate-500 font-normal leading-relaxed">calculate freight & local charges in seconds</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <span className="font-sans text-5xl md:text-6xl font-extrabold text-[#09164f] mb-3 tracking-tight">
              <AnimatedMetric end={100} suffix="%" />
            </span>
            <span className="font-sans text-lg md:text-xl font-bold text-slate-800 mb-1">Margin Visibility</span>
            <span className="font-sans text-sm text-slate-500 font-normal leading-relaxed">track shipment-level profitability live</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <span className="font-sans text-5xl md:text-6xl font-extrabold text-[#09164f] mb-3 tracking-tight">
              Zero
            </span>
            <span className="font-sans text-lg md:text-xl font-bold text-slate-800 mb-1">Lost Documents</span>
            <span className="font-sans text-sm text-slate-500 font-normal leading-relaxed">intelligent compliance document alerts</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <span className="font-sans text-5xl md:text-6xl font-extrabold text-[#09164f] mb-3 tracking-tight">
              <AnimatedMetric end={24} suffix="/7" />
            </span>
            <span className="font-sans text-lg md:text-xl font-bold text-slate-800 mb-1">Real-Time Tracking</span>
            <span className="font-sans text-sm text-slate-500 font-normal leading-relaxed">milestones, container and vessel updates</span>
          </div>
        </div>
      </section>

      {/* Section 2: Pain Points Section */}
      <section className="py-16 md:py-24 px-5 md:px-20 bg-white border-t border-slate-100 overflow-hidden" aria-labelledby="pain-heading">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="font-sans text-xs md:text-sm font-bold uppercase tracking-wider text-red-600 mb-2 block">
              Are You Dealing With This?
            </span>
            <h2 id="pain-heading" className="font-sans font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-red-600 to-black pb-2">
              Sound Familiar?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="group relative bg-gradient-to-br from-red-50/40 to-white border border-red-100/70 hover:border-red-300 rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-red-500/5 flex flex-col justify-start items-start text-left overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-xl pointer-events-none" />
              <div className="p-4 bg-red-100/60 text-red-600 rounded-2xl w-fit mb-6 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-red-500/20">
                <Layers className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-slate-800 text-sm md:text-base mb-2 group-hover:text-red-700 transition-colors">Scattered Shipment Details</h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">Shipment details are scattered across email, WhatsApp, and someone's inbox, causing confusion.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-gradient-to-br from-red-50/40 to-white border border-red-100/70 hover:border-red-300 rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-red-500/5 flex flex-col justify-start items-start text-left overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-xl pointer-events-none" />
              <div className="p-4 bg-red-100/60 text-red-600 rounded-2xl w-fit mb-6 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-red-500/20">
                <FileX className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-6deg]" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-slate-800 text-sm md:text-base mb-2 group-hover:text-red-700 transition-colors">Missing Shipping Documents</h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">Missing documents are discovered only when it's already too late for customs clearing.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-gradient-to-br from-red-50/40 to-white border border-red-100/70 hover:border-red-300 rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-red-500/5 flex flex-col justify-start items-start text-left overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-xl pointer-events-none" />
              <div className="p-4 bg-red-100/60 text-red-600 rounded-2xl w-fit mb-6 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-red-500/20">
                <TrendingDown className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-slate-800 text-sm md:text-base mb-2 group-hover:text-red-700 transition-colors">Unknown Shipment Margins</h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">You have no idea what a shipment actually earned until it's fully closed out and audited.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative bg-gradient-to-br from-red-50/40 to-white border border-red-100/70 hover:border-red-300 rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-red-500/5 flex flex-col justify-start items-start text-left overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-xl pointer-events-none" />
              <div className="p-4 bg-red-100/60 text-red-600 rounded-2xl w-fit mb-6 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-red-500/20">
                <PhoneCall className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-slate-800 text-sm md:text-base mb-2 group-hover:text-red-700 transition-colors">Endless Client Status Calls</h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">Clients constantly calling for shipment status updates that you don't have in front of you.</p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group relative bg-gradient-to-br from-red-50/40 to-white border border-red-100/70 hover:border-red-300 rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-red-500/5 flex flex-col justify-start items-start text-left overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-xl pointer-events-none" />
              <div className="p-4 bg-red-100/60 text-red-600 rounded-2xl w-fit mb-6 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-red-500/20">
                <Calculator className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-slate-800 text-sm md:text-base mb-2 group-hover:text-red-700 transition-colors">Slow, Inaccurate Quotes</h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">Quotes take hours to build manually, and operators still get the profit margin wrong.</p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="group relative bg-gradient-to-br from-red-50/40 to-white border border-red-100/70 hover:border-red-300 rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-red-500/5 flex flex-col justify-start items-start text-left overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-xl pointer-events-none" />
              <div className="p-4 bg-red-100/60 text-red-600 rounded-2xl w-fit mb-6 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-red-500/20">
                <History className="w-6 h-6 transition-all duration-700 group-hover:rotate-[360deg]" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-slate-800 text-sm md:text-base mb-2 group-hover:text-red-700 transition-colors">Missing Audit Trails</h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">Reconstructing "who approved what cost" after the fact is a painful operational nightmare.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Core Workflow Stepper */}
      <section id="freight-lifecycle" className="section-reveal relative bg-[#f6f7f9] w-full py-16 md:py-24 px-5 md:px-20 text-slate-800 border-t border-b border-slate-100" aria-label="Freight Lifecycle Workflow">
        {/* Subtle Background Grid Layer */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.18] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <FreightStepper />
        </div>
      </section>

      {/* Section 4: Before / After Comparison */}
      <section className="section-reveal relative py-16 md:py-24 px-5 md:px-20 bg-white border-t border-b border-slate-100 overflow-hidden" aria-labelledby="comparison-heading">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="font-sans text-xs md:text-sm font-bold uppercase tracking-wider text-blue-600 mb-2 block">
              Workflow Evolution
            </span>
            <h2 id="comparison-heading" className="font-sans font-black text-3xl md:text-5xl leading-tight tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#aebcff] via-[#2546c7] to-[#09164f]">
                Before Freito vs. With Freito
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* Card 1: Traditional Messy Operations (FIRST Image, THEN Text) */}
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
                  <span className="text-xs text-slate-400 font-medium">Traditional Operations</span>
                </div>

                <h3 className="font-sans font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight">
                  Traditional Messy Operations
                </h3>

                <ul className="flex flex-col gap-3">
                  <li className="flex gap-3 text-xs md:text-sm text-slate-600 leading-relaxed items-start">
                    <div className="p-1 bg-red-50 text-red-500 rounded-md shrink-0 mt-0.5 border border-red-100">
                      <AlertCircle className="w-3.5 h-3.5" />
                    </div>
                    <span>Shipment status lives in someone's personal email inbox, hidden from other team members.</span>
                  </li>
                  <li className="flex gap-3 text-xs md:text-sm text-slate-600 leading-relaxed items-start">
                    <div className="p-1 bg-red-50 text-red-500 rounded-md shrink-0 mt-0.5 border border-red-100">
                      <AlertCircle className="w-3.5 h-3.5" />
                    </div>
                    <span>Documents are tracked in local folders, often discovered missing only when it's already urgent.</span>
                  </li>
                  <li className="flex gap-3 text-xs md:text-sm text-slate-600 leading-relaxed items-start">
                    <div className="p-1 bg-red-50 text-red-500 rounded-md shrink-0 mt-0.5 border border-red-100">
                      <AlertCircle className="w-3.5 h-3.5" />
                    </div>
                    <span>Margin is calculated weeks later, only after full vendor invoice closeout.</span>
                  </li>
                  <li className="flex gap-3 text-xs md:text-sm text-slate-600 leading-relaxed items-start">
                    <div className="p-1 bg-red-50 text-red-500 rounded-md shrink-0 mt-0.5 border border-red-100">
                      <AlertCircle className="w-3.5 h-3.5" />
                    </div>
                    <span>Clients constantly call or WhatsApp for status updates because they have no direct access.</span>
                  </li>
                  <li className="flex gap-3 text-xs md:text-sm text-slate-600 leading-relaxed items-start">
                    <div className="p-1 bg-red-50 text-red-500 rounded-md shrink-0 mt-0.5 border border-red-100">
                      <AlertCircle className="w-3.5 h-3.5" />
                    </div>
                    <span>Reports must be manually rebuilt from scattered spreadsheets every month.</span>
                  </li>
                  <li className="flex gap-3 text-xs md:text-sm text-slate-600 leading-relaxed items-start">
                    <div className="p-1 bg-red-50 text-red-500 rounded-md shrink-0 mt-0.5 border border-red-100">
                      <AlertCircle className="w-3.5 h-3.5" />
                    </div>
                    <span>No clear audit trail exists for cost updates or document revisions.</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Card 2: Connected Logistics Hub (FIRST Text, THEN Image) */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col gap-6 text-left justify-between">
              
              {/* 1st: TEXT CONTENT */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
                    FREITO WAY • AUTOMATED
                  </span>
                  <span className="text-xs text-blue-600 font-semibold">10x Faster</span>
                </div>

                <h3 className="font-sans font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight">
                  Connected Logistics Hub
                </h3>

                <ul className="flex flex-col gap-3">
                  <li className="flex gap-3 text-xs md:text-sm text-slate-700 leading-relaxed items-start">
                    <div className="p-1 bg-emerald-50 text-emerald-600 rounded-md shrink-0 mt-0.5 border border-emerald-100">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>One centralized Job File, visible to the whole operations and management team instantly.</span>
                  </li>
                  <li className="flex gap-3 text-xs md:text-sm text-slate-700 leading-relaxed items-start">
                    <div className="p-1 bg-emerald-50 text-emerald-600 rounded-md shrink-0 mt-0.5 border border-emerald-100">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Automated compliance engine flags missing required cargo documents instantly.</span>
                  </li>
                  <li className="flex gap-3 text-xs md:text-sm text-slate-700 leading-relaxed items-start">
                    <div className="p-1 bg-emerald-50 text-emerald-600 rounded-md shrink-0 mt-0.5 border border-emerald-100">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Gross profit margins are visible right from the initial quotation stage onward.</span>
                  </li>
                  <li className="flex gap-3 text-xs md:text-sm text-slate-700 leading-relaxed items-start">
                    <div className="p-1 bg-emerald-50 text-emerald-600 rounded-md shrink-0 mt-0.5 border border-emerald-100">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Clients self-serve through a secure portal with zero vendor cost exposure.</span>
                  </li>
                  <li className="flex gap-3 text-xs md:text-sm text-slate-700 leading-relaxed items-start">
                    <div className="p-1 bg-emerald-50 text-emerald-600 rounded-md shrink-0 mt-0.5 border border-emerald-100">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Operational, sales, and financial reports are automatically generated from live data.</span>
                  </li>
                  <li className="flex gap-3 text-xs md:text-sm text-slate-700 leading-relaxed items-start">
                    <div className="p-1 bg-emerald-50 text-emerald-600 rounded-md shrink-0 mt-0.5 border border-emerald-100">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Every action is logged in an activity timeline, and every document has full version control.</span>
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

      {/* Section 5: Challenge & Solution Horizontal Scroll Track (Qarin Style) */}
      <OperationalSolutionsScroll />

      {/* Section 6: Core Modules & Features (Dark Redesign with Animated Frameless Icons) */}
      <SystemCapabilitiesDark />





      {/* Section 9: Our Commitments Bento Grid */}
      <OurCommitmentsBento />



      {/* Testimonials */}
      <ProductTestimonials slug="logistic-management" />

      {/* Section 11: FAQ Section (Matching Home Page Layout & Image) */}
      <FaqSection faqs={logisticFaqs} subtitle="SUPPORT QUESTIONS" title="Frequently Asked Questions" bgImage="/portfolio/freight_faq.jpg" />



      {/* Footer Section */}
      <FooterSection />

      {/* Global Contact Modal Portal */}
      <ContactModal />

    </main>
  );
}
