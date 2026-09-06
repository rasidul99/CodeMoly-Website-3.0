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
import RmgStepper from "@/components/RmgStepper";
import RmgChallengeTable from "@/components/RmgChallengeTable";
import RmgModulesDark from "@/components/RmgModulesDark";
import RmgCommitmentsBento from "@/components/RmgCommitmentsBento";
import RmgComplianceScroll from "@/components/RmgComplianceScroll";
import { 
  ArrowRight, 
  Check, 
  X, 
  ShieldCheck, 
  Languages, 
  Cloud, 
  WifiOff, 
  Users, 
  Building2, 
  FileText, 
  BarChart3, 
  AlertTriangle,
  Clock,
  FileSpreadsheet,
  Boxes,
  FolderX,
  EyeOff
} from "lucide-react";

export const metadata = {
  title: "CodeMoly RMG ERP — Garments & Export ERP Solution",
  description:
    "Purpose-built for Bangladeshi RMG exporters — Knit, Woven, Sweater, Denim, Lingerie, Sportswear, and Composite factories. Merchandising, TNA, production WIP, QC, commercial LC/bond, compliance, HR, and finance in one connected system.",
};

const rmgFaqs: FaqItem[] = [
  {
    id: 1,
    question: "Does CodeMoly support both knit and woven factories?",
    answer:
      "Yes — Knit, Woven, Sweater, Denim, Lingerie, Sportswear, and Outerwear are all supported, along with Composite factories that include their own knitting, dyeing, and fabric finishing operations."
  },
  {
    id: 2,
    question: "Can CodeMoly handle our LC and bond documentation?",
    answer:
      "Yes — Export LC, BTB/Margin LC, EXP, UD, bond license register, bond pass book, and bond utilization/reconciliation are all built directly into the Commercial module."
  },
  {
    id: 3,
    question: "Does the system track buyer compliance requirements like BSCI or Higg?",
    answer:
      "Yes — audit calendars, CAP tracking, and certificate expiry alerts cover SEDEX/SMETA, BSCI, Higg FEM/FSLM, SLCP, OEKO-TEX, GOTS, GRS, and BCI."
  },
  {
    id: 4,
    question: "Is the system available in Bangla?",
    answer:
      "Yes — full interface and report localization in English and Bangla, including Bangla number-to-words for financial and administrative documents."
  },
  {
    id: 5,
    question: "Can buyers and suppliers access the system directly?",
    answer:
      "Yes, through dedicated web portals — buyers see order status, samples, and shipment progress; suppliers see POs and submit quotations. Neither sees your internal costing or margins."
  },
  {
    id: 6,
    question: "Do you support offline use on the factory floor?",
    answer:
      "Yes — production, QC, attendance, and barcode entry work offline and automatically sync once network connectivity is restored."
  },
  {
    id: 7,
    question: "Can we deploy on our own servers instead of the cloud?",
    answer:
      "Yes — CodeMoly RMG ERP is available for cloud (VPS) or on-premise deployment depending on your factory's IT policy."
  }
];

export default async function RmgErpPage() {
  let siteSettings: any = null;
  try {
    const payload = await getPayload({ config });
    siteSettings = await payload.findGlobal({
      slug: "site-settings",
    });
  } catch (error) {
    console.error("Failed to fetch site settings in RMG ERP page:", error);
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
  const ctaLabel = siteSettings?.ctaLabel || "Start a project";
  const ctaLink = siteSettings?.ctaLink || "#";
  const showCta = siteSettings?.showCta !== false;
  const mobileMenuFooter = siteSettings?.mobileMenuFooter || "CODEMOLY AI LABS";

  return (
    <div className="min-h-screen bg-slate-900 font-sans text-slate-100 selection:bg-blue-500 selection:text-white relative">
      
      {/* Dynamic Scroll & Navbar Behaviors */}
      <NavbarScrollBehavior />
      <ScrollRevealBehavior />

      {/* Header Shell */}
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
      <section className="group relative pt-32 pb-20 md:pt-40 md:pb-28 px-5 md:px-20 bg-[#09102a] border-b border-blue-950/20 overflow-hidden" aria-label="RMG ERP introduction">
        
        {/* Background Image Layer with Touchlight/Spotlight Mouse Torch Effect */}
        <HeroSpotlightBackground 
          imageSrc="/portfolio/rmg_erp.jpg"
          altText="Garments Export Factory Floor"
          spotlightRadius={220}
          glowColor="rgba(239, 68, 68, 0.4)"
        />

        <div className="absolute left-[500px] right-0 -top-[338px] bottom-0 z-0 pointer-events-none overflow-hidden" style={{ opacity: 1.0 }}>
          <LaserFlow
            horizontalBeamOffset={0.0}
            verticalBeamOffset={0.0}
            color="#ef4444"
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
          <div className="max-w-5xl text-left flex flex-col items-start w-full">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-red-950/50 text-red-400 border border-red-800/50 mb-6 uppercase tracking-wider">
              RMG / GARMENTS ERP — BUILT FOR BANGLADESH EXPORT FACTORIES
            </span>

            <h1 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight tracking-tight mb-6">
              <span className="block lg:whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400">
                The All-in-One Garment ERP —
              </span>
              <span className="block lg:whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400">
                From Buyer Inquiry to Floor WIP
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400">
                to Audit-Ready Accounts
              </span>
            </h1>

            <p className="font-sans text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed mb-10">
              Purpose-built for Bangladeshi RMG exporters — Knit, Woven, Sweater, Denim, Lingerie, Sportswear, and Composite factories. Merchandising, TNA, production, QC, commercial LC/bond, compliance, HR, and finance — in one connected system, in English and Bangla.
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

          {/* Sourced Visual: RMG ERP Dashboard Showcase */}
          <div className="w-full max-w-[1224px] mr-auto relative rounded-2xl shadow-2xl aspect-[1800/1352] -mt-[25px]">
            <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-slate-900">
              <GridDistortion 
                imageSrc="/portfolio/rmg_erp.jpg" 
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
              <AnimatedMetric end={26} suffix="+" />
            </span>
            <span className="font-sans text-lg md:text-xl font-bold text-slate-800 mb-1">Active Modules</span>
            <span className="font-sans text-sm text-slate-500 font-normal leading-relaxed">end-to-end export garments ERP</span>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <span className="font-sans text-5xl md:text-6xl font-extrabold text-[#09164f] mb-3 tracking-tight">
              Bilingual
            </span>
            <span className="font-sans text-lg md:text-xl font-bold text-slate-800 mb-1">English & Bangla</span>
            <span className="font-sans text-sm text-slate-500 font-normal leading-relaxed">localized UI & number-to-words</span>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <span className="font-sans text-5xl md:text-6xl font-extrabold text-[#09164f] mb-3 tracking-tight">
              <AnimatedMetric end={100} suffix="%" />
            </span>
            <span className="font-sans text-lg md:text-xl font-bold text-slate-800 mb-1">Buyer Compliance Ready</span>
            <span className="font-sans text-sm text-slate-500 font-normal leading-relaxed">SEDEX, BSCI, Higg & NBR VAT</span>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <span className="font-sans text-5xl md:text-6xl font-extrabold text-[#09164f] mb-3 tracking-tight">
              Real-Time
            </span>
            <span className="font-sans text-lg md:text-xl font-bold text-slate-800 mb-1">Line WIP Output</span>
            <span className="font-sans text-sm text-slate-500 font-normal leading-relaxed">live shop floor hourly tracking</span>
          </div>

        </div>
      </section>

      {/* Section 2: Pain Points (Sound Familiar?) */}
      <section className="section-reveal challenges-reveal relative w-full py-16 md:py-24 px-5 md:px-20 bg-white border-t border-slate-100 overflow-hidden" aria-label="Operational Challenges">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="mb-12 md:mb-16 text-center flex flex-col items-center">
            <span className="font-sans text-xs md:text-sm font-bold uppercase tracking-wider text-red-600 mb-2 block">
              ARE YOU DEALING WITH THIS?
            </span>

            <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-red-600 to-black pb-2 text-center">
              The Problems RMG Factories Deal With Every Day
            </h2>

            <p className="font-sans text-xs md:text-sm text-slate-500 max-w-2xl mt-2 leading-relaxed text-center">
              Recognize any of these bottlenecks in your daily factory operations?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-left">
            
            {/* Card 1 */}
            <div className="group relative bg-gradient-to-br from-red-50/40 to-white border border-red-100/70 hover:border-red-300 rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-red-500/5 flex flex-col justify-start items-start text-left overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-xl pointer-events-none" />
              <div className="p-4 bg-red-100/60 text-red-600 rounded-2xl w-fit mb-6 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-red-500/20">
                <Clock className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-6deg]" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-slate-800 text-sm md:text-base mb-2 group-hover:text-red-700 transition-colors">Unseen TNA Slippage</h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  TNA tracked in someone's notebook or a WhatsApp group — nobody sees the critical path until it's already late.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-gradient-to-br from-red-50/40 to-white border border-red-100/70 hover:border-red-300 rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-red-500/5 flex flex-col justify-start items-start text-left overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-xl pointer-events-none" />
              <div className="p-4 bg-red-100/60 text-red-600 rounded-2xl w-fit mb-6 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-red-500/20">
                <FileSpreadsheet className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-slate-800 text-sm md:text-base mb-2 group-hover:text-red-700 transition-colors">Unverified Excel Costings</h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Costing done in Excel, and nobody's sure which version the buyer actually approved.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-gradient-to-br from-red-50/40 to-white border border-red-100/70 hover:border-red-300 rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-red-500/5 flex flex-col justify-start items-start text-left overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-xl pointer-events-none" />
              <div className="p-4 bg-red-100/60 text-red-600 rounded-2xl w-fit mb-6 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-red-500/20">
                <Boxes className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-slate-800 text-sm md:text-base mb-2 group-hover:text-red-700 transition-colors">Unknown Material Shortages</h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Fabric and trims booked, but nobody knows real stock coverage until production is already blocked.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative bg-gradient-to-br from-red-50/40 to-white border border-red-100/70 hover:border-red-300 rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-red-500/5 flex flex-col justify-start items-start text-left overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-xl pointer-events-none" />
              <div className="p-4 bg-red-100/60 text-red-600 rounded-2xl w-fit mb-6 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-red-500/20">
                <FolderX className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-slate-800 text-sm md:text-base mb-2 group-hover:text-red-700 transition-colors">Scattered Compliance Audits</h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Compliance documents (audit certs, Higg, BSCI, SLCP) scattered across folders, discovered expired only during a buyer audit.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group relative bg-gradient-to-br from-red-50/40 to-white border border-red-100/70 hover:border-red-300 rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-red-500/5 flex flex-col justify-start items-start text-left overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-xl pointer-events-none" />
              <div className="p-4 bg-red-100/60 text-red-600 rounded-2xl w-fit mb-6 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-red-500/20">
                <FileText className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-slate-800 text-sm md:text-base mb-2 group-hover:text-red-700 transition-colors">Manual LC & UD Risk</h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  LC, bond, and UD tracked manually — a single missed EXP or UD deadline can freeze the next shipment.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="group relative bg-gradient-to-br from-red-50/40 to-white border border-red-100/70 hover:border-red-300 rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-red-500/5 flex flex-col justify-start items-start text-left overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-xl pointer-events-none" />
              <div className="p-4 bg-red-100/60 text-red-600 rounded-2xl w-fit mb-6 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-red-500/20">
                <EyeOff className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-0.5" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-slate-800 text-sm md:text-base mb-2 group-hover:text-red-700 transition-colors">Blind Floor WIP Status</h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  WIP status — cut, sewn, finished, packed — only known by walking the floor and asking.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Section 3: Before vs. With CodeMoly Workflow Evolution */}
      <section className="section-reveal evolution-reveal relative w-full py-20 md:py-28 px-5 md:px-20 bg-white text-slate-800 border-t border-slate-100" aria-label="Workflow Evolution Comparison">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="mb-14 md:mb-20 text-center flex flex-col items-center">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-blue-600 mb-4 block">
              <ScrambleText text="WORKFLOW EVOLUTION" />
            </span>

            <h2 className="font-sans font-extrabold text-3xl md:text-5xl leading-tight tracking-tight text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#aebcff] via-[#2546c7] to-[#09164f]">
                Before CodeMoly vs. With CodeMoly
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* Card 1: Traditional Factory Chaos */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col gap-6 text-left justify-between">
              
              {/* IMAGE with 20px top-left padding frame */}
              <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm bg-white pt-[20px] pl-[20px] pr-0 pb-0 group">
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-tl-xl border-t border-l border-slate-200/60">
                  <GridDistortion 
                    imageSrc="/portfolio/rmg_before.jpg" 
                    className="absolute inset-0 w-full h-full object-cover object-left-top"
                    grid={12}
                    mouse={0.18}
                    strength={0.15}
                    relaxation={0.9}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs font-bold text-red-500 uppercase tracking-wider block">
                    BEFORE CODEMOLY
                  </span>
                  <span className="text-xs font-bold text-slate-400">TRADITIONAL FACTORY CHAOS</span>
                </div>

                <ul className="flex flex-col gap-3 font-sans text-sm text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <div className="p-1 bg-red-50 text-red-500 rounded-md shrink-0 mt-0.5 border border-red-100">
                      <X className="w-3.5 h-3.5" />
                    </div>
                    <span>TNA tracked in notebooks or WhatsApp groups with missed milestones.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="p-1 bg-red-50 text-red-500 rounded-md shrink-0 mt-0.5 border border-red-100">
                      <X className="w-3.5 h-3.5" />
                    </div>
                    <span>Costing versions unclear; unverified buyer approvals.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="p-1 bg-red-50 text-red-500 rounded-md shrink-0 mt-0.5 border border-red-100">
                      <X className="w-3.5 h-3.5" />
                    </div>
                    <span>Stock coverage unknown until production is already blocked.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="p-1 bg-red-50 text-red-500 rounded-md shrink-0 mt-0.5 border border-red-100">
                      <X className="w-3.5 h-3.5" />
                    </div>
                    <span>LC, bond pass book, and UD tracked manually on paper registers.</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Card 2: Connected Export Factory */}
            <div className="bg-white border border-blue-200/90 rounded-3xl p-6 md:p-8 shadow-[0_10px_30px_rgba(37,99,235,0.06)] flex flex-col gap-6 text-left justify-between">
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-blue-100 pb-3">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
                    WITH CODEMOLY RMG ERP
                  </span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                    100% CONNECTED SYSTEM
                  </span>
                </div>

                <ul className="flex flex-col gap-3 font-sans text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <div className="p-1 bg-emerald-50 text-emerald-600 rounded-md shrink-0 mt-0.5 border border-emerald-100">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Auto-generated TNA with critical path view and delay risk alerts.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="p-1 bg-emerald-50 text-emerald-600 rounded-md shrink-0 mt-0.5 border border-emerald-100">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Pre-costing to quotation to final costing with full version history.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="p-1 bg-emerald-50 text-emerald-600 rounded-md shrink-0 mt-0.5 border border-emerald-100">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>MRP run shows real shortage before it becomes a shipment risk.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="p-1 bg-emerald-50 text-emerald-600 rounded-md shrink-0 mt-0.5 border border-emerald-100">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Export LC, BTB LC, bond pass book, and UD linked to master order.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="p-1 bg-emerald-50 text-emerald-600 rounded-md shrink-0 mt-0.5 border border-emerald-100">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Cut, sewn, finished, packed visible per style, per line in real time.</span>
                  </li>
                </ul>
              </div>

              {/* IMAGE with 20px top-left padding frame */}
              <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm bg-white pt-[20px] pl-[20px] pr-0 pb-0 group">
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-tl-xl border-t border-l border-slate-200/60">
                  <GridDistortion 
                    imageSrc="/portfolio/rmg_after.jpg" 
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

      {/* Section 4: Core Workflow Stepper (RmgStepper) */}
      <section id="rmg-lifecycle" className="section-reveal relative bg-[#f6f7f9] w-full py-16 md:py-24 px-5 md:px-20 text-slate-800 border-t border-b border-slate-100" aria-label="RMG Lifecycle Workflow">
        {/* Subtle Background Grid Layer */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.18] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <RmgStepper />
        </div>
      </section>

      {/* Section 5: Challenge vs Solution Interactive Table */}
      <section className="section-reveal solution-reveal relative w-full py-20 md:py-28 px-5 md:px-20 bg-[#ffffff] text-slate-800 border-t border-slate-100" aria-label="Challenge Solution Table">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-14 md:mb-20 text-center flex flex-col items-center">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-blue-600 mb-4 block">
              <ScrambleText text="CHALLENGE VS SOLUTION" />
            </span>

            <h2 className="font-sans font-extrabold text-3xl md:text-5xl leading-tight tracking-tight text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#aebcff] via-[#2546c7] to-[#09164f]">
                How CodeMoly Solves Your Factory Pain Points
              </span>
            </h2>
          </div>

          <RmgChallengeTable />
        </div>
      </section>

      {/* Section 6: Core Modules & Features Grid (RmgModulesDark) */}
      <RmgModulesDark />

      {/* Section 7: Special Section: Bangladesh & Buyer Compliance Depth (Horizontal Scroll Track) */}
      <RmgComplianceScroll />

      {/* Section 8: Buyer & Supplier Portal Callout */}
      <section className="section-reveal portal-reveal relative w-full py-20 md:py-28 px-5 md:px-20 bg-[#080b11] border-t border-slate-900/60 overflow-hidden text-white flex items-center justify-center" aria-label="Buyer Supplier Portals">
        
        {/* Background Video Layer */}
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-85 z-0"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/0604 (1).mp4" type="video/mp4" />
          <source src="/0602 (1).mp4" type="video/mp4" />
          <source src="/0602 (1).webm" type="video/webm" />
        </video>

        {/* Soft Contrast Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080b11]/40 via-transparent to-[#080b11]/70 pointer-events-none z-0" />

        {/* Background Subtle Grid Layer */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.06] pointer-events-none z-0" />

        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 blur-[130px] rounded-full pointer-events-none z-0" />

        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <div className="bg-slate-950/50 border border-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <span className="font-sans text-xs md:text-sm font-bold uppercase tracking-wider text-blue-400 block">
                PORTAL ACCESS & TRUST
              </span>

              <h2 className="font-sans font-extrabold text-2xl md:text-4xl text-white tracking-tight">
                Give Buyers and Suppliers Visibility — Without Giving Up Control
              </h2>

              <p className="font-sans text-sm md:text-base text-slate-300 leading-relaxed max-w-3xl">
                Your buyers can track order status, sample approvals, production progress, and shipment documents through a dedicated portal. Your suppliers can submit quotations, acknowledge POs, and update delivery status through theirs. Internal costing, margins, and vendor pricing stay exactly where they belong — inside your factory.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3.5 bg-slate-900/60 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="font-sans text-sm font-bold text-slate-200">Buyer Order & Sample Tracking</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="font-sans text-sm font-bold text-slate-200">Supplier PO Acknowledgment</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="font-sans text-sm font-bold text-slate-200">Zero Cost / Margin Exposure</span>
              </div>
            </div>
          </div>
        </div>

      </section>



      {/* Section 10: Our Commitments Bento Grid */}
      <RmgCommitmentsBento />

      {/* Section 11: FAQ Section */}
      <FaqSection 
        faqs={rmgFaqs} 
        subtitle="SUPPORT QUESTIONS"
        title="Frequently Asked Questions"
        bgImage="/portfolio/rmg_erp.jpg"
      />



      {/* Contact Modal */}
      <ContactModal />

      {/* Footer Shell */}
      <FooterSection />

    </div>
  );
}
