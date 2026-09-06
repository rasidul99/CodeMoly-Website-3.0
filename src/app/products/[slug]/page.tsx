import React from "react";
import Link from "next/link";
import { getPayload } from "payload";
import config from "@/payload.config";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ContactModal from "@/components/ContactModal";
import RoiCalculator from "@/components/RoiCalculator";
import NavbarScrollBehavior from "@/components/NavbarScrollBehavior";
import ScrollRevealBehavior from "@/components/ScrollRevealBehavior";
import LaserFlow from "@/components/LaserFlow";
import GridDistortion from "@/components/GridDistortion";
import AnimatedMetric from "@/components/AnimatedMetric";
import PixelCard from "@/components/PixelCard";
import ProductTestimonials from "@/components/ProductTestimonials";
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
  Users, 
  Clock,
  Package,
  AlertTriangle
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Fetch site settings for global shell syncing
  let siteSettings: any = null;
  try {
    const payload = await getPayload({ config });
    siteSettings = await payload.findGlobal({
      slug: "site-settings",
    });
  } catch (error) {
    console.error("Failed to fetch site settings in product page:", error);
  }

  // Fallbacks for header shell
  const navigation = siteSettings?.navigation && siteSettings.navigation.length > 0
    ? siteSettings.navigation
    : [
        { label: "Home", link: "/" },
        { label: "Services", link: "/#services" },
        { label: "Products", link: "/#products" },
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

  // Product content mapping
  const isPremiumProduct = slug === "molyecom" || slug === "bebsadar" || slug === "logistic-management" || slug === "molylearn" || slug === "molyflow";
  const isMolyEcom = slug === "molyecom";
  const isBebsadar = slug === "bebsadar";
  const isLogisticManagement = slug === "logistic-management";
  const isMolyLearn = slug === "molylearn";
  const isMolyFlow = slug === "molyflow";

  if (!isPremiumProduct) {
    // Return standard fallback template for other products to avoid 404
    const fallbacks: Record<string, { title: string; desc: string; accent: string }> = {
      molylearn: {
        title: "MolyLearn - Smart LMS Platform",
        desc: "Intelligent learning management system with AI-powered course creation, personalized paths, and advanced student analytics.",
        accent: "linear-gradient(to bottom, #d97706, #b25211)"
      },
      molyflow: {
        title: "MolyFlow - CRM Automation System",
        desc: "Comprehensive CRM solution with intelligent lead management, automated sales workflows, and AI customer insights.",
        accent: "linear-gradient(to bottom, #06b6d4, #0e9abb)"
      }
    };

    const currentFallback = fallbacks[slug] || {
      title: `${slug.charAt(0).toUpperCase() + slug.slice(1)} - Premium Product`,
      desc: "Cutting-edge software solution designed and developed by CodeMoly to streamline business operations.",
      accent: "linear-gradient(to bottom, #1d4ed8, #3b82f6)"
    };

    return (
      <main className="min-h-screen bg-white text-slate-800 flex flex-col justify-between">
        <NavbarScrollBehavior />
        <ScrollRevealBehavior />
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

        <div className="flex-grow flex items-center justify-center py-32 px-6">
          <div className="max-w-xl text-center flex flex-col items-center">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-semibold mb-8 group transition-colors">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </Link>
            <h1 className="font-sans font-black text-3xl md:text-5xl text-slate-900 mb-6 tracking-tight">
              {currentFallback.title}
            </h1>
            <p className="font-sans text-base text-slate-600 mb-8 leading-relaxed">
              {currentFallback.desc}
            </p>
            <div className="w-full h-1 bg-slate-100 rounded-full mb-8" />
            <a
              href="#contact"
              className="open-contact-modal px-8 py-3.5 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer text-center inline-flex items-center justify-center"
              style={{ backgroundImage: currentFallback.accent }}
            >
              Request Custom Consultation
            </a>
          </div>
        </div>

        <FooterSection />
        <ContactModal />
      </main>
    );
  }

  // Define configuration mapping for MolyEcom vs Bebsadar vs MolyLearn vs MolyFlow
  const pageTheme = {
    heroBg: isMolyEcom ? "bg-[#080510]" : isMolyLearn ? "bg-[#100705]" : isMolyFlow ? "bg-[#050b10]" : isLogisticManagement ? "bg-[#09102a]" : "bg-[#050b10]",
    heroBorderColor: isMolyEcom ? "border-purple-950/20" : isMolyLearn ? "border-amber-950/20" : isMolyFlow ? "border-cyan-950/20" : isLogisticManagement ? "border-blue-950/20" : "border-emerald-950/20",
    laserColor: isMolyEcom ? "#c985ff" : isMolyLearn ? "#f97316" : isMolyFlow ? "#06b6d4" : isLogisticManagement ? "#3b82f6" : "#6ee7b7",
    badgeClass: isMolyEcom 
      ? "bg-purple-950/40 text-purple-300 border-purple-800/50" 
      : isMolyLearn 
        ? "bg-amber-950/40 text-amber-300 border-amber-800/50" 
        : isMolyFlow
          ? "bg-cyan-950/40 text-cyan-300 border-cyan-800/50"
          : isLogisticManagement
            ? "bg-blue-950/40 text-blue-300 border-blue-800/50"
            : "bg-emerald-950/40 text-emerald-300 border-emerald-800/50",
    badgeText: isMolyEcom 
      ? "Ecommerce Automation Partner" 
      : isMolyLearn 
        ? "Smart LMS Platform" 
        : isMolyFlow
          ? "CRM & Sales Automation"
          : isLogisticManagement
            ? "Freight Forwarding ERP"
            : "Cloud POS & Inventory Solution",
    headline: isMolyEcom 
      ? ["Convert 30% More Orders", "with 360° Automated", "System"]
      : isMolyLearn 
        ? ["Empower Learning", "with AI-Powered", "LMS Platform"]
        : isMolyFlow
          ? ["Automate Sales Pipeline", "with Intelligent", "CRM Platform"]
          : isLogisticManagement
            ? ["Run Your Entire", "Freight Forwarding Business", "From One Platform"]
            : ["Streamline Retail Sales", "with Cloud-Powered", "POS & Inventory"],
    description: isMolyEcom
      ? "Reduce return rates, filters fake orders automatically, syncs package logistics in one click, and scales your e-commerce operations in Bangladesh with ease."
      : isMolyLearn
        ? "Intelligent learning management system with AI-powered course creation, personalized paths, and advanced student analytics."
        : isMolyFlow
          ? "Comprehensive CRM solution with intelligent lead management, automated sales workflows, and AI customer insights."
          : isLogisticManagement
            ? "From customer inquiry to quotation, booking, documentation, operations, delivery, billing, and finance closeout — Freito replaces email, Excel, WhatsApp, and PDF folders with one connected system built for freight forwarders."
            : "Manage multi-branch stock levels, scan barcodes for ultra-fast checkout, track customer accounts, and access deep business analytics from anywhere, anytime.",
    liveUrl: isMolyEcom ? "https://molyecom.com/" : isMolyLearn ? "https://molylearn.com/" : isMolyFlow ? "https://molyflow.com/" : isLogisticManagement ? "#contact" : "https://bebshadar.com/",
    showcaseImage: isMolyEcom ? "/portfolio/logo-design.png" : isMolyLearn ? "/portfolio/website-design.png" : isMolyFlow ? "/portfolio/tailored-solutions.png" : isLogisticManagement ? "/portfolio/logistic_erp.jpg" : "/portfolio/pos-inventory.png",
    lightOverlayClass: isMolyEcom
      ? "absolute top-[-8px] left-[calc(50%+300px)] -translate-x-1/2 -translate-y-1/2 w-1/2 h-20 object-fill pointer-events-none mix-blend-screen z-10"
      : isMolyLearn
        ? "absolute top-[-8px] left-[calc(50%+300px)] -translate-x-1/2 -translate-y-1/2 w-1/2 h-20 object-fill pointer-events-none mix-blend-screen z-10 hue-rotate-[45deg] saturate-150"
        : isMolyFlow
          ? "absolute top-[-8px] left-[calc(50%+300px)] -translate-x-1/2 -translate-y-1/2 w-1/2 h-20 object-fill pointer-events-none mix-blend-screen z-10 hue-rotate-[190deg] saturate-150"
          : isLogisticManagement
            ? "absolute top-[-8px] left-[calc(50%+300px)] -translate-x-1/2 -translate-y-1/2 w-1/2 h-20 object-fill pointer-events-none mix-blend-screen z-10 hue-rotate-[0deg] saturate-150"
            : "absolute top-[-8px] left-[calc(50%+300px)] -translate-x-1/2 -translate-y-1/2 w-1/2 h-20 object-fill pointer-events-none mix-blend-screen z-10 hue-rotate-[140deg] saturate-150",
    
    // Stats Block
    statNumberColor: "text-[#09164f]",
    stats: isMolyEcom
      ? [
          { end: 100, suffix: "+", title: "Bangladeshi Sellers", desc: "scaling their shop operations" },
          { end: 180, suffix: "%", prefix: "+", title: "Revenue Boost", desc: "via automated recovery checkout" },
          { end: 35, suffix: "%", title: "Sales Conversion", desc: "through smart IVR confirmation" },
          { end: 24, suffix: "/7", title: "SMS & IVR Automation", desc: "for automated notifications" }
        ]
      : isMolyLearn
        ? [
            { end: 50, suffix: "+", title: "Schools & Academies", desc: "scaling their online learning" },
            { end: 120, suffix: "%", prefix: "+", title: "Student Engagement", desc: "boosted via interactive modules" },
            { end: 95, suffix: "%", title: "Course Completion", desc: "rate achieved on average" },
            { end: 24, suffix: "/7", title: "AI Grading & Support", desc: "powered by automatic evaluation" }
          ]
        : isMolyFlow
          ? [
              { end: 200, suffix: "+", title: "Active Businesses", desc: "running sales pipelines" },
              { end: 70, suffix: "%", prefix: "+", title: "Deal Velocity", desc: "boosted via automatic leads" },
              { end: 40, suffix: "%", title: "Time Saved", desc: "via automated follow-up tasks" },
              { end: 24, suffix: "/7", title: "AI Lead Routing", desc: "routing qualified opportunities" }
            ]
          : isLogisticManagement
            ? [
                { end: 10, suffix: "x", title: "Quoting Speed", desc: "calculate freight & local charges in seconds" },
                { end: 100, suffix: "%", title: "Margin Visibility", desc: "track shipment-level profitability live" },
                { end: 0, prefix: "Zero", title: "Lost Documents", desc: "intelligent compliance document alerts" },
                { end: 24, suffix: "/7", title: "Real-Time Tracking", desc: "milestones, container and vessel updates" }
              ]
            : [
                { end: 1000, suffix: "+", title: "Retail Outlets", desc: "scaling shop operations" },
                { end: 60, suffix: "%", prefix: "+", title: "Billing Speed Boost", desc: "via automated barcode billing" },
                { end: 35, suffix: "%", title: "Reduced Shrinkage", desc: "via auto-reorder audits" },
                { end: 24, suffix: "/7", title: "Real-Time Stock Sync", desc: "across all active branches" }
              ],

    // Bento Grid Section
    bentoLabelColor: "text-blue-600",
    bentoTitleGradient: "from-[#aebcff] via-[#2546c7] to-[#09164f]",
    bentoTitle: isMolyEcom ? "Powerful Automation Built for Bangladesh" : isMolyLearn ? "Smart Learning & AI Course Production" : isMolyFlow ? "Sales Intelligence & Pipeline Control" : isLogisticManagement ? "Freight Forwarding Control Center" : "Next-Gen Retail POS & Inventory Control",
    bentoSubtitle: isMolyEcom
      ? "Say goodbye to manual calls and address entry. MolyEcom automates your checkout workflow end-to-end."
      : isMolyLearn
        ? "Say goodbye to static files and manual grading. MolyLearn powers your digital training end-to-end."
        : isMolyFlow
          ? "Say goodbye to lost leads and messy spreadsheets. MolyFlow manages your sales journey end-to-end."
          : isLogisticManagement
            ? "Replace email chains and manual booking files with one connected logistics operations center."
            : "Say goodbye to manual stock audits and billing delays. Bebsadar manages your retail store end-to-end.",
      
    // ROI Calculator Section
    roiLabelColor: "text-blue-600",
    roiTitleGradient: "from-[#aebcff] via-[#2546c7] to-[#09164f]",
    roiSubtitle: isMolyEcom
      ? "Adjust the sliders below to calculate your estimated savings based on shipping costs and automated recovery rates."
      : isMolyLearn
        ? "Adjust the sliders below to calculate your estimated savings based on teacher hours saved, student retention rates, and course production fees."
        : isMolyFlow
          ? "Adjust the sliders below to calculate your estimated savings based on sales conversion rate boosts and manual follow-up hours saved."
          : isLogisticManagement
            ? "Adjust the sliders below to calculate your estimated annual savings in operations and document coordination."
            : "Adjust the sliders below to calculate your estimated savings based on transaction volume, average basket size, and inventory shrinkage control.",
    roiProductName: isMolyEcom ? "MolyEcom" : isMolyLearn ? "MolyLearn" : isMolyFlow ? "MolyFlow" : isLogisticManagement ? "Freito" : "Bebsadar",

    // FAQ Section
    faqLabelColor: "text-blue-600",
    faqs: isMolyEcom
      ? [
          {
            q: "How does MolyEcom work?",
            a: "MolyEcom integrates seamlessly with your e-commerce checkout form. Once an order is placed, it filters fake or duplicate entries using automated OTP and WhatsApp verifications, and generates parcel bookings in your courier panel instantly."
          },
          {
            q: "Is courier booking fully automated?",
            a: "Yes, after verifying the customer's address, the order is automatically booked as a shipment in your Steadfast, Pathao, or Paperfly courier panel without manual intervention. The tracking ID is then sent to the customer."
          },
          {
            q: "How are SMS and IVR call charges calculated?",
            a: "The costs for automated confirmation calls and OTP SMS are calculated based on standard telecom API rates (e.g. GP, Robi, Teletalk) and are deducted directly from your merchant API account balance."
          }
        ]
      : isMolyLearn
        ? [
            {
              q: "Does MolyLearn support local payment gateways?",
              a: "Yes, MolyLearn integrates with Stripe and local payment gateways via SSLCommerz, allowing you to accept payments via bKash, Nagad, Rocket, and local credit cards."
            },
            {
              q: "How do instructors host live classes?",
              a: "Instructors can link their Zoom or Google Meet API credentials to host interactive live video lectures directly within the student dashboard with auto-recorded playback."
            },
            {
              q: "Is there a limit on student enrollments or course uploads?",
              a: "No. MolyLearn is built to scale, supporting unlimited courses, lessons, instructors, and student accounts on your dedicated cloud server."
            }
          ]
        : isMolyFlow
          ? [
              {
                q: "How does MolyFlow capture leads?",
                a: "MolyFlow integrates with Facebook Lead Ads, WooCommerce checkout, WhatsApp Business, and your website contact forms to capture leads instantly and route them to your sales agents."
              },
              {
                q: "Can I customize the sales pipelines?",
                a: "Yes, MolyFlow features a drag-and-drop Kanban pipeline builder. You can create custom sales stages, automate task generation, and trigger notifications when a deal moves from one stage to another."
              },
              {
                q: "Is there a mobile app for sales agents?",
                a: "Yes, MolyFlow provides a lightweight web app that agents can use on their phones to log call outcomes, update deal statuses, and send WhatsApp messages on the go."
              }
            ]
          : isLogisticManagement
            ? [
                {
                  q: "What types of shipments does Freito support?",
                  a: "Freito supports sea and air freight, import and export operations, door-to-door, and port-to-port shipments seamlessly."
                },
                {
                  q: "Can clients see our internal costs or margins?",
                  a: "No. The dedicated Client Portal only shows shipment status milestones and approved documents. Your internal costs, vendor pricing, and profit margins are never exposed."
                },
                {
                  q: "Does Freito generate shipping documents automatically?",
                  a: "Yes. House Bill of Lading (HBL), HAWB, Manifest, and Delivery Order documents are auto-numbered and auto-populated directly from shipment data with full version control."
                }
              ]
            : [
                {
                  q: "How does Bebsadar POS track inventory?",
                  a: "Bebsadar uses real-time barcode scanning and cloud database sync. When a product is sold at any counter or branch, the stock count is updated instantly across the system to prevent double selling."
                },
                {
                  q: "Does the POS work without internet?",
                  a: "Yes, Bebsadar's offline local caching allows your cashiers to continue scanning products and printing receipts when the internet is down. The system automatically syncs transactions to the cloud once connection is restored."
                },
                {
                  q: "Can I manage multiple branch stores?",
                  a: "Absolutely. Bebsadar Enterprise supports unlimited branches and warehouses. You can monitor sales, track stock movements, and transfer inventory between branches from a single unified admin panel."
                }
              ]
  };

  // Real MolyEcom Page Content (White Theme / Blue Accents)
  return (
    <main className="min-h-screen bg-white text-slate-800 flex flex-col justify-between overflow-x-hidden">
      
      {/* Scroll Behaviors */}
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
      {/* Hero Section */}
      <section className={`relative pt-32 pb-20 md:pt-40 md:pb-28 px-5 md:px-20 ${pageTheme.heroBg} border-b ${pageTheme.heroBorderColor} overflow-hidden`} aria-label="Product introduction">
        <div className="absolute left-[500px] right-0 -top-[338px] bottom-0 z-0 pointer-events-none overflow-hidden" style={{ opacity: 1.0 }}>
          <LaserFlow
            horizontalBeamOffset={0.0}
            verticalBeamOffset={0.0}
            color={pageTheme.laserColor}
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
          
          {/* Text & Buttons Block (Left Aligned) */}
          <div className="max-w-4xl text-left flex flex-col items-start w-full">
            <span className={`px-3.5 py-1.5 rounded-full text-xs font-bold ${pageTheme.badgeClass} mb-6 uppercase tracking-wider`}>
              {pageTheme.badgeText}
            </span>

            <h1 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-6">
              {pageTheme.headline.map((line, idx) => (
                <span key={idx} className={`block text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 ${line.includes("Freight Forwarding") ? "lg:whitespace-nowrap" : ""}`}>
                  {line}
                </span>
              ))}
            </h1>

            <p className="font-sans text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed mb-10">
              {pageTheme.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-start mb-16 md:mb-20">
              <a
                href={pageTheme.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-white/90 font-semibold text-[15px] rounded-lg border border-white/20 bg-white/5 hover:bg-white/5 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <span>Visit Live Website</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Interactive Laptop Showcase Grid (Left aligned, expanded width) */}
          <div className="w-full max-w-[1224px] mr-auto relative rounded-2xl shadow-2xl aspect-[1800/1352] -mt-[25px]">
            <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden">
              <GridDistortion 
                imageSrc={pageTheme.showcaseImage} 
                className="w-full h-full object-cover"
                grid={12}
                mouse={0.18}
                strength={0.15}
                relaxation={0.9}
              />
            </div>
            {/* Light Overlay (aligned to top border of the image card, 50% width, shifted 300px right and 8px up) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/light-overlay.png" 
              alt="" 
              className={pageTheme.lightOverlayClass} 
            />
            {/* Inner Border Overlay (on top of all overlays) */}
            <div className="absolute inset-0 border border-white/20 rounded-2xl pointer-events-none z-20" />
          </div>

        </div>
      </section>

      {/* Core Statistics Block */}
      <section className="section-reveal metrics-reveal relative w-full py-20 px-5 md:px-20 bg-[#ffffff] border-t border-slate-100 overflow-hidden text-slate-800" aria-label="Key Performance Indicators">
        {/* Subtle grid background identical to home page */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.12] pointer-events-none" />

        <div className="metrics-grid max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
          {pageTheme.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center">
              <span className={`font-sans text-5xl md:text-6xl font-extrabold ${pageTheme.statNumberColor} mb-3 tracking-tight`}>
                {stat.prefix}
                <AnimatedMetric end={stat.end} suffix={stat.suffix} />
              </span>
              <span className="font-sans text-lg md:text-xl font-bold text-slate-800 mb-1">{stat.title}</span>
              <span className="font-sans text-sm text-slate-500 font-normal leading-relaxed">{stat.desc}</span>
            </div>
          ))}
        </div>
      </section>
      {/* Bento Grid Features Showcase */}
      <section className="py-16 md:py-24 px-5 md:px-20 bg-slate-50 border-t border-b border-slate-100 overflow-hidden" aria-labelledby="features-heading">
        {/* Custom Keyframe Animations for Bento Cards */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes ivr-ripple {
            0% { transform: scale(0.95); opacity: 0.5; }
            50% { transform: scale(1.1); opacity: 0.1; }
            100% { transform: scale(0.95); opacity: 0.5; }
          }
          @keyframes ivr-pulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
          }
          @keyframes scanner-sweep {
            0%, 100% { top: 5%; }
            50% { top: 90%; }
          }
          @keyframes truck-drive {
            0% { transform: translateX(-120%); }
            45%, 55% { transform: translateX(0%); }
            100% { transform: translateX(120%); }
          }
          @keyframes cursor-click {
            0%, 100% { transform: scale(1) translate(0, 0); }
            40% { transform: scale(1) translate(12px, 8px); }
            50% { transform: scale(0.9) translate(12px, 8px); }
            60% { transform: scale(1) translate(12px, 8px); }
          }
          @keyframes chat-notif {
            0%, 100% { transform: translateY(-10px); opacity: 0; }
            10%, 90% { transform: translateY(0); opacity: 1; }
          }
          @keyframes stock-transfer {
            0% { transform: translateY(20px); opacity: 0; }
            15%, 85% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(-20px); opacity: 0; }
          }
          @keyframes pulse-dot {
            0%, 100% { transform: scale(1); opacity: 0.4; }
            50% { transform: scale(1.4); opacity: 1; }
          }
          @keyframes progress-fill {
            0% { width: 0%; }
            80%, 100% { width: 95%; }
          }
        `}} />

        <div className="max-w-[1400px] mx-auto">
          
          <div className="text-left mb-12 md:mb-16">
            <span className={`font-sans text-xs md:text-sm font-bold uppercase tracking-wider ${pageTheme.bentoLabelColor} mb-2 block`}>
              Core Capabilities
            </span>
            <h2 id="features-heading" className="font-sans font-black text-2xl md:text-4xl tracking-tight mb-2">
              <span className={`text-transparent bg-clip-text bg-gradient-to-b ${pageTheme.bentoTitleGradient}`}>
                {pageTheme.bentoTitle}
              </span>
            </h2>
            <p className="font-sans text-xs md:text-sm text-slate-600 mt-2">
              {pageTheme.bentoSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {isLogisticManagement ? (
              <>
                {/* Card 1: Control Tower Dashboard (col-span-2) */}
                <div 
                  className="md:col-span-2 border border-slate-200/80 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow relative overflow-hidden group"
                  style={{
                    backgroundImage: "radial-gradient(circle at 0% 0%, rgba(37, 99, 235, 0.22) 0%, transparent 20%), radial-gradient(circle at 0% 0%, rgba(56, 189, 248, 0.15) 0%, transparent 35%)",
                    backgroundColor: "#ffffff"
                  }}
                >
                  <div className="text-left md:max-w-[50%] flex flex-col justify-center">
                    <h3 className="font-sans font-bold text-xl text-slate-900 mb-3">Control Tower Dashboard</h3>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed">
                      Monitor your entire operations from one screen. Real-time KPIs, container tracking milestones, operational health alerts, and daily revenue statistics.
                    </p>
                  </div>
                  
                  {/* Dynamic UI Preview 1 */}
                  <PixelCard 
                    colors="#3b82f6,#2563eb,#1d4ed8,#1e40af,#1e3a8a"
                    gap={5}
                    speed={35}
                    className="w-full md:w-[45%] h-64 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center p-4 relative overflow-hidden shrink-0"
                  >
                    <div className="w-full max-w-[200px] bg-white rounded-xl border border-slate-200/60 shadow-lg p-3 relative z-10 flex flex-col gap-2">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <span className="text-[10px] font-bold text-slate-400">CONTROL TOWER</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      </div>
                      
                      <div className="flex flex-col gap-1">
                        <span className="text-[11px] font-bold text-slate-700">Active Shipments</span>
                        <span className="text-2xl font-black text-blue-600">142</span>
                      </div>

                      <div className="flex justify-between items-center bg-slate-50 p-2 rounded-lg border border-slate-100 text-[9px]">
                        <div className="flex flex-col">
                          <span className="text-slate-500 font-bold">SEA FREIGHT</span>
                          <span className="text-blue-600 font-extrabold">98 Jobs</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-slate-500 font-bold">AIR FREIGHT</span>
                          <span className="text-blue-600 font-extrabold">44 Jobs</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-[0.1] pointer-events-none z-10" />
                  </PixelCard>
                </div>

                {/* Card 2: Shipment Job File (col-span-1) */}
                <div 
                  className="md:col-span-1 border border-slate-200/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow relative overflow-hidden group"
                  style={{
                    backgroundImage: "radial-gradient(circle at 0% 0%, rgba(37, 99, 235, 0.22) 0%, transparent 20%), radial-gradient(circle at 0% 0%, rgba(56, 189, 248, 0.15) 0%, transparent 35%)",
                    backgroundColor: "#ffffff"
                  }}
                >
                  <div className="text-left">
                    <h3 className="font-sans font-bold text-xl text-slate-900 mb-3">Shipment Job File</h3>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed">
                      Every shipment gets a central Job File. Track commercial terms, operation logs, documents, finance closeouts, tasks, and audit history in one record.
                    </p>
                  </div>

                  {/* Dynamic UI Preview 2 */}
                  <PixelCard 
                    colors="#3b82f6,#2563eb,#1d4ed8,#1e40af,#1e3a8a"
                    gap={5}
                    speed={35}
                    className="w-full h-48 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center p-3 relative overflow-hidden shrink-0"
                  >
                    <div className="w-full max-w-[240px] bg-white rounded-lg border border-slate-200/60 shadow-md p-2.5 flex flex-col gap-2 relative z-10">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Central Shipment File</span>
                      
                      <div className="flex flex-col gap-1.5 text-[10px]">
                        <div className="flex justify-between items-center p-1 bg-slate-50 border border-slate-100 rounded">
                          <span className="text-slate-600">Job No:</span>
                          <span className="font-bold text-slate-800">JOB-2026-928A</span>
                        </div>
                        <div className="flex justify-between items-center p-1 bg-slate-50 border border-slate-100 rounded">
                          <span className="text-slate-600">Client:</span>
                          <span className="font-bold text-slate-800">Apex Garments Ltd</span>
                        </div>
                        <div className="flex justify-between items-center p-1 bg-blue-50 border border-blue-100 rounded text-blue-800 font-bold">
                          <span>Status:</span>
                          <span>In Customs</span>
                        </div>
                      </div>
                    </div>
                  </PixelCard>
                </div>

                {/* Card 3: Document Compliance Engine (col-span-1) */}
                <div 
                  className="md:col-span-1 border border-slate-200/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow relative overflow-hidden group"
                  style={{
                    backgroundImage: "radial-gradient(circle at 0% 0%, rgba(37, 99, 235, 0.22) 0%, transparent 20%), radial-gradient(circle at 0% 0%, rgba(56, 189, 248, 0.15) 0%, transparent 35%)",
                    backgroundColor: "#ffffff"
                  }}
                >
                  <div className="text-left">
                    <h3 className="font-sans font-bold text-xl text-slate-900 mb-3">Compliance Engine</h3>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed">
                      Auto-detects required shipping and customs documents by shipment type and mode, with automatic missing-document alerts and expiry flags.
                    </p>
                  </div>

                  {/* Dynamic UI Preview 3 */}
                  <PixelCard 
                    colors="#3b82f6,#2563eb,#1d4ed8,#1e40af,#1e3a8a"
                    gap={5}
                    speed={35}
                    className="w-full h-48 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center p-3 relative overflow-hidden shrink-0"
                  >
                    <div className="w-full max-w-[240px] bg-white rounded-lg border border-slate-200/60 shadow-md p-2.5 flex flex-col gap-2 relative z-10">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Document Checklist</span>
                      
                      <div className="flex flex-col gap-1.5 text-[9px]">
                        <div className="flex justify-between items-center text-slate-700 bg-slate-50 p-1 rounded">
                          <span>House Bill of Lading (HBL)</span>
                          <span className="text-emerald-600 font-bold">Uploaded</span>
                        </div>
                        <div className="flex justify-between items-center text-slate-700 bg-slate-50 p-1 rounded">
                          <span>Commercial Invoice</span>
                          <span className="text-emerald-600 font-bold">Uploaded</span>
                        </div>
                        <div className="flex justify-between items-center text-slate-700 bg-amber-50 border border-amber-100 p-1 rounded font-bold">
                          <span>Packing List</span>
                          <span className="text-amber-600 animate-pulse">Missing!</span>
                        </div>
                      </div>
                    </div>
                  </PixelCard>
                </div>

                {/* Card 4: Finance & Closeout (col-span-2) */}
                <div 
                  className="md:col-span-2 border border-slate-200/80 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow relative overflow-hidden group"
                  style={{
                    backgroundImage: "radial-gradient(circle at 0% 0%, rgba(37, 99, 235, 0.22) 0%, transparent 20%), radial-gradient(circle at 0% 0%, rgba(56, 189, 248, 0.15) 0%, transparent 35%)",
                    backgroundColor: "#ffffff"
                  }}
                >
                  <div className="text-left md:max-w-[50%] flex flex-col justify-center">
                    <h3 className="font-sans font-bold text-xl text-slate-900 mb-3">Finance & Closeout</h3>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed">
                      Ties customer invoices, vendor bills, receivables, and payables directly to the shipment file for real shipment-level profit calculations with audit-safe lockouts.
                    </p>
                  </div>

                  {/* Dynamic UI Preview 4 */}
                  <PixelCard 
                    colors="#3b82f6,#2563eb,#1d4ed8,#1e40af,#1e3a8a"
                    gap={5}
                    speed={35}
                    className="w-full md:w-[45%] h-64 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center p-4 relative overflow-hidden shrink-0"
                  >
                    <div className="w-full max-w-[220px] bg-white rounded-xl border border-slate-200/60 shadow-lg p-3 relative z-10 flex flex-col gap-3">
                      <span className="text-[10px] font-bold text-slate-400">FINANCIAL CLOSEOUT</span>
                      
                      <div className="flex flex-col gap-1.5 text-[9px] w-full">
                        <div className="flex justify-between bg-slate-50 p-1.5 rounded text-slate-600">
                          <span>Quoted Margin:</span>
                          <span className="font-bold text-slate-800">৳85,000</span>
                        </div>
                        <div className="flex justify-between bg-slate-50 p-1.5 rounded text-slate-600">
                          <span>Actual Expenses:</span>
                          <span className="font-bold text-slate-800">৳62,400</span>
                        </div>
                        <div className="flex justify-between bg-emerald-50 p-1.5 rounded border border-emerald-100 text-emerald-800 font-bold">
                          <span>Net Shipment Profit:</span>
                          <span>৳22,600</span>
                        </div>
                      </div>
                    </div>
                  </PixelCard>
                </div>
              </>
            ) : isMolyEcom ? (
              <>
                {/* Card 1: 3-Second Auto-Confirmation (col-span-2) */}
                <div 
                  className="md:col-span-2 border border-slate-200/80 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow relative overflow-hidden group"
                  style={{
                    backgroundImage: "radial-gradient(circle at 0% 0%, rgba(37, 99, 235, 0.22) 0%, transparent 20%), radial-gradient(circle at 0% 0%, rgba(56, 189, 248, 0.15) 0%, transparent 35%)",
                    backgroundColor: "#ffffff"
                  }}
                >
                  <div className="text-left md:max-w-[50%] flex flex-col justify-center">
                    <h3 className="font-sans font-bold text-xl text-slate-900 mb-3">3-Second Auto-Confirmation</h3>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed">
                      Confirm customer orders automatically via automated IVR calls and SMS within 3 seconds of order placement. No manual calls required.
                    </p>
                  </div>
                  
                  {/* Dynamic UI Preview 1: IVR/SMS Auto-Confirmation */}
                  <PixelCard 
                    colors="#e9d5ff,#c084fc,#a855f7,#8b5cf6,#6d28d9"
                    gap={5}
                    speed={35}
                    className="w-full md:w-[45%] h-64 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center p-4 relative overflow-hidden shrink-0"
                  >
                    <div className="w-full max-w-[200px] bg-white rounded-xl border border-slate-200/60 shadow-lg p-3 relative z-10 flex flex-col gap-2">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <span className="text-[10px] font-bold text-slate-400">ORDER CONFIRMATION</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      </div>
                      
                      <div className="flex flex-col gap-1">
                        <span className="text-[11px] font-bold text-slate-700">MolyEcom Smart IVR</span>
                        <span className="text-[9px] text-slate-400">Calling: +880 171***8849</span>
                      </div>

                      <div className="flex justify-between items-center bg-slate-50 p-2 rounded-lg border border-slate-100">
                        <div className="flex flex-col">
                          <span className="text-[9px] text-slate-500 font-bold">STATUS</span>
                          <span className="text-[10px] text-indigo-600 font-bold" style={{ animation: "ivr-pulse 2s infinite" }}>Verifying Call...</span>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center relative">
                          <div className="absolute inset-0 rounded-full bg-indigo-200 opacity-50" style={{ animation: "ivr-ripple 2s infinite" }} />
                          <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 relative z-10" />
                        </div>
                      </div>

                      <div className="text-[9px] text-slate-400 leading-tight bg-emerald-50/50 text-emerald-800 p-1.5 rounded border border-emerald-100/50 flex items-center gap-1">
                        <span className="font-bold">SMS Sent:</span> "Order Confirmed!"
                      </div>
                    </div>
                    
                    {/* Decorative background grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-[0.1] pointer-events-none z-10" />
                  </PixelCard>
                </div>

                {/* Card 2: Fake Order Blocker (col-span-1) */}
                <div 
                  className="md:col-span-1 border border-slate-200/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow relative overflow-hidden group"
                  style={{
                    backgroundImage: "radial-gradient(circle at 0% 0%, rgba(37, 99, 235, 0.22) 0%, transparent 20%), radial-gradient(circle at 0% 0%, rgba(56, 189, 248, 0.15) 0%, transparent 35%)",
                    backgroundColor: "#ffffff"
                  }}
                >
                  <div className="text-left">
                    <h3 className="font-sans font-bold text-xl text-slate-900 mb-3">Fake Order Blocker</h3>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed">
                      Our machine learning filter detects and blocks fake or duplicate order entries in real-time, significantly reducing return shipping fees.
                    </p>
                  </div>

                  {/* Dynamic UI Preview 2: Fraud Detection Scanner */}
                  <PixelCard 
                    colors="#e9d5ff,#c084fc,#a855f7,#8b5cf6,#6d28d9"
                    gap={5}
                    speed={35}
                    className="w-full h-48 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center p-3 relative overflow-hidden shrink-0"
                  >
                    <div className="w-full max-w-[240px] bg-white rounded-lg border border-slate-200/60 shadow-md p-2.5 flex flex-col gap-2 relative z-10">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">ML Fraud Detection Filter</span>
                      
                      <div className="flex flex-col gap-1.5">
                        <div className="flex justify-between items-center text-[11px] p-1.5 rounded bg-emerald-50/50 border border-emerald-100/50">
                          <span className="text-slate-700">Rahim K. - Dhaka</span>
                          <span className="text-[9px] font-bold text-emerald-600 uppercase">Verified</span>
                        </div>

                        <div className="flex justify-between items-center text-[11px] p-1.5 rounded bg-rose-50/60 border border-rose-100/50 relative overflow-hidden">
                          <span className="text-slate-700 font-medium">Spam Account - No Address</span>
                          <span className="text-[9px] font-bold text-rose-600 uppercase bg-rose-100/30 px-1 rounded">Spam Blocked</span>
                        </div>

                        <div className="flex justify-between items-center text-[11px] p-1.5 rounded bg-slate-50 border border-slate-100">
                          <span className="text-slate-700">Karim A. - Sylhet</span>
                          <span className="text-[9px] text-slate-400">Scanning...</span>
                        </div>
                      </div>
                    </div>

                    {/* Laser scan animation bar */}
                    <div className="absolute left-0 right-0 h-0.5 bg-rose-500/80 shadow-[0_0_10px_#f43f5e] z-20 pointer-events-none" style={{ animation: "scanner-sweep 4s infinite ease-in-out" }} />
                    
                    {/* Decorative background grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-[0.1] pointer-events-none z-10" />
                  </PixelCard>
                </div>

                {/* Card 3: Courier Booking Automation (col-span-1) */}
                <div 
                  className="md:col-span-1 border border-slate-200/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow relative overflow-hidden group"
                  style={{
                    backgroundImage: "radial-gradient(circle at 0% 0%, rgba(37, 99, 235, 0.22) 0%, transparent 20%), radial-gradient(circle at 0% 0%, rgba(56, 189, 248, 0.15) 0%, transparent 35%)",
                    backgroundColor: "#ffffff"
                  }}
                >
                  <div className="text-left">
                    <h3 className="font-sans font-bold text-xl text-slate-900 mb-3">Courier Booking Automation</h3>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed">
                      Connect directly with leading courier services in Bangladesh (Steadfast, Pathao, Paperfly) to book parcel shipments with a single click.
                    </p>
                  </div>

                  {/* Dynamic UI Preview 3: Courier Dispatch Driver */}
                  <PixelCard 
                    colors="#e9d5ff,#c084fc,#a855f7,#8b5cf6,#6d28d9"
                    gap={5}
                    speed={35}
                    className="w-full h-48 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center p-3 relative overflow-hidden shrink-0"
                  >
                    <div className="w-full max-w-[240px] bg-white rounded-lg border border-slate-200/60 shadow-md p-3 flex flex-col gap-2 relative z-10">
                      <div className="flex justify-between items-center border-b border-slate-100 pb-1.5">
                        <span className="text-[10px] font-bold text-slate-400">COURIER DISPATCH</span>
                        <span className="text-[10px] font-bold text-slate-800">Steadfast Courier</span>
                      </div>

                      <div className="relative h-10 w-full bg-slate-50 border border-slate-100 rounded-lg overflow-hidden flex items-center">
                        {/* Animated Truck Shape */}
                        <div className="absolute top-1/2 -translate-y-1/2 flex items-center gap-1" style={{ animation: "truck-drive 5s infinite ease-in-out" }}>
                          <div className="w-6 h-4 bg-blue-600 rounded-sm relative flex items-center justify-end pr-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-800 absolute -bottom-1 left-0.5" />
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-800 absolute -bottom-1 right-0.5" />
                          </div>
                          <div className="w-3 h-3 bg-blue-400 rounded-sm relative -ml-1">
                            <div className="w-1 h-1 bg-white absolute top-0.5 right-0.5" />
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-800 absolute -bottom-1.5 left-0.5" />
                          </div>
                        </div>
                        {/* Dotted path */}
                        <div className="w-full border-t-2 border-dashed border-slate-300 pointer-events-none" />
                      </div>

                      <div className="flex justify-between items-center text-[10px] bg-blue-50/50 p-1.5 rounded border border-blue-100/50">
                        <span className="text-blue-800 font-bold">SF-987293-BD</span>
                        <span className="text-blue-600 flex items-center gap-1 font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
                          Dispatching...
                        </span>
                      </div>
                    </div>
                    
                    {/* Decorative background grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-[0.1] pointer-events-none z-10" />
                  </PixelCard>
                </div>

                {/* Card 4: Cart Recovery & Remarketing (col-span-2) */}
                <div 
                  className="md:col-span-2 border border-slate-200/80 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow relative overflow-hidden group"
                  style={{
                    backgroundImage: "radial-gradient(circle at 0% 0%, rgba(37, 99, 235, 0.22) 0%, transparent 20%), radial-gradient(circle at 0% 0%, rgba(56, 189, 248, 0.15) 0%, transparent 35%)",
                    backgroundColor: "#ffffff"
                  }}
                >
                  <div className="text-left md:max-w-[50%] flex flex-col justify-center">
                    <h3 className="font-sans font-bold text-xl text-slate-900 mb-3">Cart Recovery & Remarketing</h3>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed">
                      Automatically send follow-up WhatsApp and SMS reminders with discount codes to customers who abandon their cart before checking out.
                    </p>
                  </div>

                  {/* Dynamic UI Preview 4: Chat Message Recovery */}
                  <PixelCard 
                    colors="#e9d5ff,#c084fc,#a855f7,#8b5cf6,#6d28d9"
                    gap={5}
                    speed={35}
                    className="w-full md:w-[45%] h-64 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center p-4 relative overflow-hidden shrink-0"
                  >
                    <div className="w-full max-w-[220px] bg-white rounded-xl border border-slate-200/60 shadow-lg p-3 relative z-10 flex flex-col gap-3">
                      <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        <span className="text-[10px] font-bold text-slate-700">MolyEcom Recovery Bot</span>
                      </div>

                      <div className="flex flex-col gap-1.5 relative">
                        <div className="bg-slate-50 border border-slate-100 rounded-lg p-2 flex flex-col gap-1 relative" style={{ animation: "chat-notif 6s infinite ease-in-out" }}>
                          <span className="text-[9px] font-semibold text-slate-400">WHATSAPP REMINDER</span>
                          <span className="text-[10px] text-slate-700 font-medium leading-normal">"Hi Rahim! You left items in your cart. Checkout with code <b>SAVE10</b> for 10% off!"</span>
                          <div className="mt-1 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[9px] py-1 rounded text-center cursor-pointer">
                            Recover Order
                          </div>
                        </div>

                        {/* Animated Cursor Clicker */}
                        <div className="absolute w-3 h-3 bg-slate-900 rounded-full border border-white shadow pointer-events-none z-30 opacity-70" style={{ animation: "cursor-click 6s infinite ease-in-out", left: "20%", top: "45%" }} />
                      </div>
                    </div>
                    
                    {/* Decorative background grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-[0.1] pointer-events-none z-10" />
                  </PixelCard>
                </div>
              </>
            ) : isMolyLearn ? (
              <>
                {/* Card 1: Dedicated Instructor Panel (col-span-2) */}
                <div 
                  className="md:col-span-2 border border-slate-200/80 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow relative overflow-hidden group"
                  style={{
                    backgroundImage: "radial-gradient(circle at 0% 0%, rgba(37, 99, 235, 0.22) 0%, transparent 20%), radial-gradient(circle at 0% 0%, rgba(56, 189, 248, 0.15) 0%, transparent 35%)",
                    backgroundColor: "#ffffff"
                  }}
                >
                  <div className="text-left md:max-w-[50%] flex flex-col justify-center">
                    <h3 className="font-sans font-bold text-xl text-slate-900 mb-3">Dedicated Instructor Panel</h3>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed">
                      Publish courses, manage student enrollments, generate interactive quizzes, and track instructor revenue reports.
                    </p>
                  </div>
                  
                  {/* Dynamic UI Preview 1: Instructor Panel */}
                  <PixelCard 
                    colors="#fdba74,#fb923c,#f97316,#ea580c,#c2410c"
                    gap={5}
                    speed={35}
                    className="w-full md:w-[45%] h-64 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center p-4 relative overflow-hidden shrink-0"
                  >
                    <div className="w-full max-w-[200px] bg-white rounded-xl border border-slate-200/60 shadow-lg p-3 relative z-10 flex flex-col gap-2">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <span className="text-[10px] font-bold text-slate-400">INSTRUCTOR PANEL</span>
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                      </div>
                      
                      <div className="flex flex-col gap-1 text-[11px] font-bold text-slate-700">
                        <span>Python Basics Course</span>
                        <span className="text-[9px] text-slate-400">Generating chapters...</span>
                      </div>

                      <div className="flex flex-col gap-1.5 bg-slate-50 p-2 rounded-lg border border-slate-100 text-[9px]">
                        <div className="flex justify-between font-bold text-slate-600">
                          <span>Chapter 1: Intro</span>
                          <span className="text-emerald-600">Published</span>
                        </div>
                        <div className="flex justify-between font-bold text-slate-600">
                          <span>Chapter 2: Variables</span>
                          <span className="text-amber-600 animate-pulse">Generating...</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-[0.1] pointer-events-none z-10" />
                  </PixelCard>
                </div>

                {/* Card 2: Advanced Student Portal (col-span-1) */}
                <div 
                  className="md:col-span-1 border border-slate-200/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow relative overflow-hidden group"
                  style={{
                    backgroundImage: "radial-gradient(circle at 0% 0%, rgba(37, 99, 235, 0.22) 0%, transparent 20%), radial-gradient(circle at 0% 0%, rgba(56, 189, 248, 0.15) 0%, transparent 35%)",
                    backgroundColor: "#ffffff"
                  }}
                >
                  <div className="text-left">
                    <h3 className="font-sans font-bold text-xl text-slate-900 mb-3">Advanced Student Portal</h3>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed">
                      Learn with an advanced course player, submit assignments, access your certificate vault, and join peer discussions.
                    </p>
                  </div>

                  {/* Dynamic UI Preview 2: Student Portal */}
                  <PixelCard 
                    colors="#fdba74,#fb923c,#f97316,#ea580c,#c2410c"
                    gap={5}
                    speed={35}
                    className="w-full h-48 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center p-3 relative overflow-hidden shrink-0"
                  >
                    <div className="w-full max-w-[240px] bg-white rounded-lg border border-slate-200/60 shadow-md p-2.5 flex flex-col gap-2.5 relative z-10">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">STUDENT PROGRESS</span>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mt-1">
                        <div className="bg-emerald-500 h-full rounded-full" style={{ animation: "progress-fill 4s infinite ease-in-out" }} />
                      </div>
                      <div className="flex justify-between text-[11px] font-bold text-slate-700 mt-1">
                        <span>Course Progress</span>
                        <span className="text-emerald-600">95%</span>
                      </div>
                    </div>
                  </PixelCard>
                </div>

                {/* Card 3: Robust Admin Control (col-span-1) */}
                <div 
                  className="md:col-span-1 border border-slate-200/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow relative overflow-hidden group"
                  style={{
                    backgroundImage: "radial-gradient(circle at 0% 0%, rgba(37, 99, 235, 0.22) 0%, transparent 20%), radial-gradient(circle at 0% 0%, rgba(56, 189, 248, 0.15) 0%, transparent 35%)",
                    backgroundColor: "#ffffff"
                  }}
                >
                  <div className="text-left">
                    <h3 className="font-sans font-bold text-xl text-slate-900 mb-3">Robust Admin Control</h3>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed">
                      Moderate courses, configure SMTP email automation, customize branding, and access detailed student analytics.
                    </p>
                  </div>

                  {/* Dynamic UI Preview 3: Admin Dashboard */}
                  <PixelCard 
                    colors="#fdba74,#fb923c,#f97316,#ea580c,#c2410c"
                    gap={5}
                    speed={35}
                    className="w-full h-48 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center p-3 relative overflow-hidden shrink-0"
                  >
                    <div className="w-full max-w-[240px] bg-white rounded-lg border border-slate-200/60 shadow-md p-3 flex flex-col gap-2 relative z-10 overflow-hidden h-28">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">SYSTEM LOGS</span>
                      <div className="flex flex-col gap-1.5 text-[9px] relative h-12 overflow-hidden mt-1.5">
                        <div className="absolute inset-x-0 flex flex-col gap-1.5" style={{ animation: "stock-transfer 6s infinite ease-in-out" }}>
                          <div className="flex justify-between font-bold text-slate-600">
                            <span>User Rahim enrolled</span>
                            <span className="text-slate-400">Just now</span>
                          </div>
                          <div className="flex justify-between font-bold text-slate-600">
                            <span>Course published</span>
                            <span className="text-slate-400">1m ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </PixelCard>
                </div>

                {/* Card 4: Third-Party Integrations (col-span-2) */}
                <div 
                  className="md:col-span-2 border border-slate-200/80 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow relative overflow-hidden group"
                  style={{
                    backgroundImage: "radial-gradient(circle at 0% 0%, rgba(37, 99, 235, 0.22) 0%, transparent 20%), radial-gradient(circle at 0% 0%, rgba(56, 189, 248, 0.15) 0%, transparent 35%)",
                    backgroundColor: "#ffffff"
                  }}
                >
                  <div className="text-left md:max-w-[50%] flex flex-col justify-center">
                    <h3 className="font-sans font-bold text-xl text-slate-900 mb-3">Third-Party Integrations</h3>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed">
                      Connect Zoom and Google Meet for live streaming classes, and integrate Stripe, bKash, and Nagad for billing.
                    </p>
                  </div>

                  {/* Dynamic UI Preview 4: Integrations */}
                  <PixelCard 
                    colors="#fdba74,#fb923c,#f97316,#ea580c,#c2410c"
                    gap={5}
                    speed={35}
                    className="w-full md:w-[45%] h-64 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center p-4 relative overflow-hidden shrink-0"
                  >
                    <div className="w-full max-w-[220px] bg-white rounded-xl border border-slate-200/60 shadow-lg p-3 relative z-10 flex flex-col gap-3">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <span className="text-[10px] font-bold text-slate-700">INTEGRATIONS</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      </div>
                      
                      <div className="relative h-8 w-full bg-slate-50 border border-slate-100 rounded-lg overflow-hidden flex items-center">
                        {/* Animated Data Packet */}
                        <div className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center w-4 h-4 bg-cyan-500 rounded-full border border-white shadow" style={{ animation: "truck-drive 4s infinite ease-in-out" }}>
                          <span className="text-[8px] text-white font-bold">↓</span>
                        </div>
                        {/* Dotted path */}
                        <div className="w-full border-t-2 border-dashed border-slate-200 pointer-events-none" />
                      </div>

                      <div className="flex justify-between items-center text-[10px] bg-cyan-50/50 p-1.5 rounded border border-cyan-100/50">
                        <span className="text-cyan-800 font-bold">Zoom API Sync</span>
                        <span className="text-cyan-600 flex items-center gap-1 font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping" />
                          Streaming...
                        </span>
                      </div>
                    </div>
                  </PixelCard>
                </div>
              </>
            ) : isMolyFlow ? (
              <>
                {/* Card 1: AI Lead Routing & Scoring (col-span-2) */}
                <div 
                  className="md:col-span-2 border border-slate-200/80 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow relative overflow-hidden group"
                  style={{
                    backgroundImage: "radial-gradient(circle at 0% 0%, rgba(37, 99, 235, 0.22) 0%, transparent 20%), radial-gradient(circle at 0% 0%, rgba(56, 189, 248, 0.15) 0%, transparent 35%)",
                    backgroundColor: "#ffffff"
                  }}
                >
                  <div className="text-left md:max-w-[50%] flex flex-col justify-center">
                    <h3 className="font-sans font-bold text-xl text-slate-900 mb-3">AI Lead Routing & Scoring</h3>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed">
                      Capture incoming leads, score them automatically based on user interaction, and distribute them to sales agents in real-time.
                    </p>
                  </div>
                  
                  {/* Dynamic UI Preview 1: Lead Router */}
                  <PixelCard 
                    colors="#22d3ee,#06b6d4,#0891b2,#0369a1,#0c4a6e"
                    gap={5}
                    speed={35}
                    className="w-full md:w-[45%] h-64 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center p-4 relative overflow-hidden shrink-0"
                  >
                    <div className="w-full max-w-[200px] bg-white rounded-xl border border-slate-200/60 shadow-lg p-3 relative z-10 flex flex-col gap-2">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <span className="text-[10px] font-bold text-slate-400">LEAD ROUTER</span>
                        <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                      </div>
                      <div className="flex flex-col gap-1 text-[11px] font-bold text-slate-700 relative h-16 overflow-hidden mt-1">
                        <div className="absolute inset-x-0 flex flex-col gap-1.5 bg-slate-50 p-1.5 rounded border border-slate-100" style={{ animation: "chat-notif 6s infinite ease-in-out" }}>
                          <span>New Lead: Rahim K.</span>
                          <span className="text-[9px] text-cyan-600 font-bold">Score: 98/100 (Hot)</span>
                        </div>
                      </div>
                      <div className="text-[9px] bg-slate-50 p-1.5 rounded border border-slate-100 text-slate-500 font-bold">
                        Assigned to Agent: <span className="text-cyan-600">Karim</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-[0.1] pointer-events-none z-10" />
                  </PixelCard>
                </div>

                {/* Card 2: Kanban Sales Pipeline (col-span-1) */}
                <div 
                  className="md:col-span-1 border border-slate-200/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow relative overflow-hidden group"
                  style={{
                    backgroundImage: "radial-gradient(circle at 0% 0%, rgba(37, 99, 235, 0.22) 0%, transparent 20%), radial-gradient(circle at 0% 0%, rgba(56, 189, 248, 0.15) 0%, transparent 35%)",
                    backgroundColor: "#ffffff"
                  }}
                >
                  <div className="text-left">
                    <h3 className="font-sans font-bold text-xl text-slate-900 mb-3">Drag-and-Drop Kanban</h3>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed">
                      Manage deals in visually structured pipelines. Drag deals between custom stages and trigger automatic tasks.
                    </p>
                  </div>

                  {/* Dynamic UI Preview 2: Kanban Stage */}
                  <PixelCard 
                    colors="#22d3ee,#06b6d4,#0891b2,#0369a1,#0c4a6e"
                    gap={5}
                    speed={35}
                    className="w-full h-48 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center p-3 relative overflow-hidden shrink-0"
                  >
                    <div className="w-full max-w-[240px] bg-white rounded-lg border border-slate-200/60 shadow-md p-2.5 flex flex-col gap-2 relative z-10 h-28 overflow-hidden">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Kanban Deal Board</span>
                      <div className="relative h-12 w-full bg-slate-50 border border-slate-100 rounded-lg flex items-center">
                        {/* Dragged Deal Card */}
                        <div className="absolute top-1 flex flex-col gap-0.5 bg-white p-1 rounded border border-slate-200 shadow-sm text-[8px] w-24" style={{ animation: "truck-drive 5s infinite ease-in-out" }}>
                          <span className="font-bold text-slate-700">Enterprise Deal</span>
                          <span className="text-cyan-600 font-bold">$12,400</span>
                        </div>
                        {/* Kanban columns separator line */}
                        <div className="absolute left-1/2 top-0 bottom-0 border-l border-dashed border-slate-200 pointer-events-none" />
                      </div>
                    </div>
                  </PixelCard>
                </div>

                {/* Card 3: Nurturing (col-span-1) */}
                <div 
                  className="md:col-span-1 border border-slate-200/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow relative overflow-hidden group"
                  style={{
                    backgroundImage: "radial-gradient(circle at 0% 0%, rgba(37, 99, 235, 0.22) 0%, transparent 20%), radial-gradient(circle at 0% 0%, rgba(56, 189, 248, 0.15) 0%, transparent 35%)",
                    backgroundColor: "#ffffff"
                  }}
                >
                  <div className="text-left">
                    <h3 className="font-sans font-bold text-xl text-slate-900 mb-3">Automated Follow-ups</h3>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed">
                      Nurture leads automatically via email, SMS, and WhatsApp alerts when deals sit idle in the sales pipeline for too long.
                    </p>
                  </div>

                  {/* Dynamic UI Preview 3: Nurturer */}
                  <PixelCard 
                    colors="#22d3ee,#06b6d4,#0891b2,#0369a1,#0c4a6e"
                    gap={5}
                    speed={35}
                    className="w-full h-48 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center p-3 relative overflow-hidden shrink-0"
                  >
                    <div className="w-full max-w-[240px] bg-white rounded-lg border border-slate-200/60 shadow-md p-2.5 flex flex-col gap-2 relative z-10 overflow-hidden h-28">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">AUTO ENGAGE BOT</span>
                      <div className="bg-emerald-50/50 border border-emerald-100/50 rounded-lg p-1.5 flex flex-col gap-0.5 relative mt-1" style={{ animation: "chat-notif 6s infinite ease-in-out" }}>
                        <span className="text-[9px] font-semibold text-emerald-800">AUTOMATED WHATSAPP</span>
                        <span className="text-[9px] text-slate-700 leading-snug">"Hi Rahim! Still thinking about our service? Here is 10% off!"</span>
                      </div>
                    </div>
                  </PixelCard>
                </div>

                {/* Card 4: Analytics (col-span-2) */}
                <div 
                  className="md:col-span-2 border border-slate-200/80 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow relative overflow-hidden group"
                  style={{
                    backgroundImage: "radial-gradient(circle at 0% 0%, rgba(37, 99, 235, 0.22) 0%, transparent 20%), radial-gradient(circle at 0% 0%, rgba(56, 189, 248, 0.15) 0%, transparent 35%)",
                    backgroundColor: "#ffffff"
                  }}
                >
                  <div className="text-left md:max-w-[50%] flex flex-col justify-center">
                    <h3 className="font-sans font-bold text-xl text-slate-900 mb-3">Pipeline Analytics</h3>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed">
                      Visualize team performances, pipeline conversions, average sales velocity, and predict future revenue based on current lead weights.
                    </p>
                  </div>

                  {/* Dynamic UI Preview 4: CRM Chat Bot */}
                  <PixelCard 
                    colors="#22d3ee,#06b6d4,#0891b2,#0369a1,#0c4a6e"
                    gap={5}
                    speed={35}
                    className="w-full md:w-[45%] h-64 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center p-4 relative overflow-hidden shrink-0"
                  >
                    <div className="w-full max-w-[220px] bg-white rounded-xl border border-slate-200/60 shadow-lg p-3 relative z-10 flex flex-col gap-3">
                      <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                        <span className="text-[10px] font-bold text-slate-700">AI Report Bot</span>
                      </div>
                      <div className="bg-slate-50 border border-slate-100 rounded-lg p-2.5 flex flex-col gap-1.5 text-[10px] text-slate-700 w-full">
                        <span className="font-semibold">Win Probability:</span>
                        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-cyan-500 h-full rounded-full" style={{ animation: "progress-fill 4s infinite ease-in-out" }} />
                        </div>
                        <span className="font-bold text-slate-900 mt-1">Projected: +95% Win</span>
                      </div>
                    </div>
                  </PixelCard>
                </div>
              </>
            ) : (
              <>
                {/* Card 1: Multi-Branch Inventory Sync (col-span-2) */}
                <div 
                  className="md:col-span-2 border border-slate-200/80 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow relative overflow-hidden group"
                  style={{
                    backgroundImage: "radial-gradient(circle at 0% 0%, rgba(37, 99, 235, 0.22) 0%, transparent 20%), radial-gradient(circle at 0% 0%, rgba(56, 189, 248, 0.15) 0%, transparent 35%)",
                    backgroundColor: "#ffffff"
                  }}
                >
                  <div className="text-left md:max-w-[50%] flex flex-col justify-center">
                    <h3 className="font-sans font-bold text-xl text-slate-900 mb-3">Multi-Branch Inventory Sync</h3>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed">
                      Synchronize your stocks across multiple branches and warehouses in real-time. Automated low-stock alerts and smart branch transfers keep your business running smoothly.
                    </p>
                  </div>
                  
                  {/* Dynamic UI Preview 1: Multi-branch Stock Tracker */}
                  <PixelCard 
                    colors="#a7f3d0,#6ee7b7,#34d399,#059669,#047857"
                    gap={5}
                    speed={35}
                    className="w-full md:w-[45%] h-64 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center p-4 relative overflow-hidden shrink-0"
                  >
                    <div className="w-full max-w-[210px] bg-white rounded-xl border border-slate-200/60 shadow-lg p-3 relative z-10 flex flex-col gap-2.5">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <span className="text-[10px] font-bold text-slate-400">INVENTORY TRACKER</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center bg-slate-50 p-1.5 rounded border border-slate-100 text-[10px]">
                          <span className="text-slate-600 font-bold">Mirpur Branch (HQ)</span>
                          <span className="text-slate-900 font-extrabold">1,248 Units</span>
                        </div>

                        <div className="flex justify-between items-center bg-amber-50/50 p-1.5 rounded border border-amber-100 text-[10px]">
                          <span className="text-slate-600 font-bold flex items-center gap-1">
                            Dhanmondi Branch
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                          </span>
                          <span className="text-amber-700 font-extrabold">8 Units (Low!)</span>
                        </div>
                      </div>

                      {/* Transfer log widget with animation */}
                      <div className="flex flex-col bg-emerald-50/50 p-2 rounded border border-emerald-100 text-[9px] relative overflow-hidden h-10 justify-center">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/10 via-emerald-200/30 to-emerald-100/10 pointer-events-none" style={{ animation: "ivr-ripple 3s infinite" }} />
                        <div className="flex items-center justify-between font-bold text-emerald-800 z-10" style={{ animation: "stock-transfer 4s infinite ease-in-out" }}>
                          <span>HQ &rarr; Dhanmondi</span>
                          <span>+150 Units Sent</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative background grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-[0.1] pointer-events-none z-10" />
                  </PixelCard>
                </div>

                {/* Card 2: Profit & Loss Analytics (col-span-1) */}
                <div 
                  className="md:col-span-1 border border-slate-200/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow relative overflow-hidden group"
                  style={{
                    backgroundImage: "radial-gradient(circle at 0% 0%, rgba(37, 99, 235, 0.22) 0%, transparent 20%), radial-gradient(circle at 0% 0%, rgba(56, 189, 248, 0.15) 0%, transparent 35%)",
                    backgroundColor: "#ffffff"
                  }}
                >
                  <div className="text-left">
                    <h3 className="font-sans font-bold text-xl text-slate-900 mb-3">Profit & Loss Analytics</h3>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed">
                      Monitor your daily retail sales, cost of goods sold, store expenses, and net profit margins automatically in a unified accounting ledger.
                    </p>
                  </div>

                  {/* Dynamic UI Preview 2: P&L Report Chart */}
                  <PixelCard 
                    colors="#a7f3d0,#6ee7b7,#34d399,#059669,#047857"
                    gap={5}
                    speed={35}
                    className="w-full h-48 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center p-3 relative overflow-hidden shrink-0"
                  >
                    <div className="w-full max-w-[240px] bg-white rounded-lg border border-slate-200/60 shadow-md p-2.5 flex flex-col gap-2 relative z-10">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">REAL-TIME P&L REPORT</span>
                      
                      <div className="flex flex-col gap-1.5">
                        <div className="flex justify-between items-center text-[10px] px-2 py-1 rounded bg-slate-50 border border-slate-100">
                          <span className="text-slate-500">Gross Sales</span>
                          <span className="text-slate-800 font-extrabold">৳2,84,350</span>
                        </div>

                        <div className="flex justify-between items-center text-[10px] px-2 py-1 rounded bg-slate-50 border border-slate-100">
                          <span className="text-slate-500">Cost & Expenses</span>
                          <span className="text-slate-800 font-extrabold">৳1,94,800</span>
                        </div>

                        <div className="flex justify-between items-center text-[11px] px-2 py-1.5 rounded bg-emerald-50 border border-emerald-100/50">
                          <span className="text-emerald-800 font-bold">Net Profit</span>
                          <div className="flex items-center gap-1.5">
                            <span className="text-emerald-950 font-black">৳89,550</span>
                            <span className="text-[9px] font-extrabold text-emerald-600 bg-emerald-100 px-1 rounded">+14.5%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Laser scan animation bar */}
                    <div className="absolute left-0 right-0 h-0.5 bg-emerald-500/80 shadow-[0_0_10px_#10b981] z-20 pointer-events-none" style={{ animation: "scanner-sweep 4s infinite ease-in-out" }} />
                    
                    {/* Decorative background grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-[0.1] pointer-events-none z-10" />
                  </PixelCard>
                </div>

                {/* Card 3: Offline POS Billing (col-span-1) */}
                <div 
                  className="md:col-span-1 border border-slate-200/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow relative overflow-hidden group"
                  style={{
                    backgroundImage: "radial-gradient(circle at 0% 0%, rgba(37, 99, 235, 0.22) 0%, transparent 20%), radial-gradient(circle at 0% 0%, rgba(56, 189, 248, 0.15) 0%, transparent 35%)",
                    backgroundColor: "#ffffff"
                  }}
                >
                  <div className="text-left">
                    <h3 className="font-sans font-bold text-xl text-slate-900 mb-3">Offline POS Billing</h3>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed">
                      Internet drops? No problem. Cashiers can continue barcode billing offline. Invoices are cached locally and synced to the cloud instantly once online.
                    </p>
                  </div>

                  {/* Dynamic UI Preview 3: Offline Sync status */}
                  <PixelCard 
                    colors="#a7f3d0,#6ee7b7,#34d399,#059669,#047857"
                    gap={5}
                    speed={35}
                    className="w-full h-48 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center p-3 relative overflow-hidden shrink-0"
                  >
                    <div className="w-full max-w-[240px] bg-white rounded-lg border border-slate-200/60 shadow-md p-3 flex flex-col gap-2.5 relative z-10">
                      <div className="flex justify-between items-center border-b border-slate-100 pb-1.5">
                        <span className="text-[10px] font-bold text-slate-400">POS BILLING STATUS</span>
                        <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-1.5 rounded flex items-center gap-1 border border-amber-100">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                          Offline Mode
                        </span>
                      </div>

                      <div className="flex flex-col gap-1 text-[10px]">
                        <div className="flex justify-between text-slate-500">
                          <span>Offline Invoices:</span>
                          <span className="font-bold text-slate-700">3 Receipts</span>
                        </div>
                        <div className="flex justify-between text-slate-500">
                          <span>Total Value:</span>
                          <span className="font-bold text-slate-700">৳6,820 BDT</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center text-[10px] bg-amber-50/30 p-1.5 rounded border border-amber-100/50">
                        <span className="text-amber-800 font-bold">Auto-Syncing</span>
                        <span className="text-amber-600 flex items-center gap-1 font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                          Waiting for Link...
                        </span>
                      </div>
                    </div>
                    
                    {/* Decorative background grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-[0.1] pointer-events-none z-10" />
                  </PixelCard>
                </div>

                {/* Card 4: Automated SMS Invoicing (col-span-2) */}
                <div 
                  className="md:col-span-2 border border-slate-200/80 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow relative overflow-hidden group"
                  style={{
                    backgroundImage: "radial-gradient(circle at 0% 0%, rgba(37, 99, 235, 0.22) 0%, transparent 20%), radial-gradient(circle at 0% 0%, rgba(56, 189, 248, 0.15) 0%, transparent 35%)",
                    backgroundColor: "#ffffff"
                  }}
                >
                  <div className="text-left md:max-w-[50%] flex flex-col justify-center">
                    <h3 className="font-sans font-bold text-xl text-slate-900 mb-3">Automated SMS Invoicing</h3>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed">
                      Send eco-friendly digital invoices directly to customer phones via SMS instantly upon counter checkout. Save paper costs while building buyer loyalty lists.
                    </p>
                  </div>

                  {/* Dynamic UI Preview 4: SMS Invoice Notification */}
                  <PixelCard 
                    colors="#a7f3d0,#6ee7b7,#34d399,#059669,#047857"
                    gap={5}
                    speed={35}
                    className="w-full md:w-[45%] h-64 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center p-4 relative overflow-hidden shrink-0"
                  >
                    <div className="w-full max-w-[220px] bg-white rounded-xl border border-slate-200/60 shadow-lg p-3 relative z-10 flex flex-col gap-3">
                      <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        <span className="text-[10px] font-bold text-slate-700">SMS Invoice Delivery</span>
                      </div>

                      <div className="flex flex-col gap-1.5 relative">
                        <div className="bg-slate-50 border border-slate-100 rounded-lg p-2 flex flex-col gap-1 relative" style={{ animation: "chat-notif 6s infinite ease-in-out" }}>
                          <span className="text-[9px] font-semibold text-slate-400">CUSTOMER RECEIPT</span>
                          <span className="text-[10px] text-slate-700 font-medium leading-normal">"Thanks for shopping at Organic Foods! Invoice #INV-9283 for <b>৳3,450 BDT</b> is paid. Coupon: <b>THANKS10</b>"</span>
                          <div className="mt-1 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[9px] py-1 rounded text-center cursor-pointer">
                            Invoice Delivered
                          </div>
                        </div>

                        {/* Animated Cursor Clicker */}
                        <div className="absolute w-3 h-3 bg-slate-900 rounded-full border border-white shadow pointer-events-none z-30 opacity-70" style={{ animation: "cursor-click 6s infinite ease-in-out", left: "20%", top: "45%" }} />
                      </div>
                    </div>
                    
                    {/* Decorative background grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-[0.1] pointer-events-none z-10" />
                  </PixelCard>
                </div>
              </>
            )}
          </div>

        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-16 md:py-24 px-5 md:px-20 w-full" aria-labelledby="calc-heading">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="text-center mb-12">
            <span className={`font-sans text-xs md:text-sm font-bold uppercase tracking-wider ${pageTheme.roiLabelColor} mb-2 block`}>
              ROI Calculation
            </span>
            <h2 id="calc-heading" className="font-sans font-black text-2xl md:text-4xl tracking-tight mb-2">
              <span className={`text-transparent bg-clip-text bg-gradient-to-b ${pageTheme.roiTitleGradient}`}>
                See How Much You Can Save
              </span>
            </h2>
            <p className="font-sans text-xs md:text-sm text-slate-600 mt-2 mx-auto">
              {pageTheme.roiSubtitle}
            </p>
          </div>

          <RoiCalculator productName={pageTheme.roiProductName} />
        </div>
      </section>

      {/* Client Testimonial & Case Study Details */}
      <ProductTestimonials slug={slug} />

      {/* FAQ Accordions Section */}
      <section className="py-16 md:py-24 px-6 max-w-[800px] mx-auto w-full" aria-labelledby="faq-heading">
        <div className="text-center mb-12">
          <span className={`font-sans text-xs md:text-sm font-bold uppercase tracking-wider ${pageTheme.faqLabelColor} mb-2 block`}>
            Support Questions
          </span>
          <h2 id="faq-heading" className="font-sans font-black text-2xl md:text-4xl tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#aebcff] via-[#2546c7] to-[#09164f]">
              Frequently Asked Questions
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-5 text-left">
          {pageTheme.faqs.map((faq, idx) => (
            <details key={idx} className="group border border-slate-200 rounded-xl p-5 bg-slate-50 [&_summary::-webkit-details-marker]:hidden cursor-pointer" open={idx === 0}>
              <summary className="flex items-center justify-between gap-4 font-sans font-bold text-slate-900">
                <span>{faq.q}</span>
                <span className="transition-transform duration-300 group-open:rotate-180 text-slate-500">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </span>
              </summary>
              <p className="font-sans text-sm text-slate-600 mt-3 leading-relaxed">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <FooterSection />

      {/* Global Contact Modal Portal */}
      <ContactModal />

    </main>
  );
}
