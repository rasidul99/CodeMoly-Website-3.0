/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import React from "react";
import { getPayload } from "payload";
import ScrambleText from "@/components/ScrambleText";
import config from "@/payload.config";
import OfficeTourVideo from "@/components/OfficeTourVideo";
import CoreServices from "@/components/CoreServices";
import PortfolioSection from "@/components/PortfolioSection";
import TalentSection from "@/components/TalentSection";
import AiDevelopment from "@/components/AiDevelopment";
import DevToolkit from "@/components/DevToolkit";
import Technologies from "@/components/Technologies";
import CtaSection from "@/components/CtaSection";
import GlobalEvents from "@/components/GlobalEvents";
import TestimonialSection from "@/components/TestimonialSection";
import FaqSection from "@/components/FaqSection";
import ContactFormSection from "@/components/ContactFormSection";
import BlogSection from "@/components/BlogSection";
import FooterSection from "@/components/FooterSection";
import NavbarScrollBehavior from "@/components/NavbarScrollBehavior";
import ScrollRevealBehavior from "@/components/ScrollRevealBehavior";
import AnimatedMetric from "@/components/AnimatedMetric";
import Navbar from "@/components/Navbar";
import ContactModal from "@/components/ContactModal";
import EnterpriseProductSection from "@/components/EnterpriseProductSection";
import WorkforceUpskilling from "@/components/WorkforceUpskilling";
import ScrollToTop from "@/components/ScrollToTop";


const brandSlugs: Record<string, string> = {
  airbnb: "airbnb",
  figma: "figma",
  framer: "framer",
  hubspot: "hubspot",
  linear: "linear",
  loom: "loom",
  notion: "notion",
  shopify: "shopify",
  stripe: "stripe",
  vercel: "vercel",
};

const brandTextColors: Record<string, string> = {
  airbnb: "#FF5A5F",
  figma: "#1E1E1E",
  framer: "#000000",
  hubspot: "#33475B",
  linear: "#16181D",
  loom: "#252529",
  notion: "#000000",
  shopify: "#5E8E3E",
  stripe: "#635BFF",
  vercel: "#000000",
};

const FigmaIcon = () => (
  <svg className="brand-logo-icon" viewBox="0 0 38 57" aria-hidden="true">
    <path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1 1 9.5 9.5H19v-9.5Z" />
    <path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0Z" />
    <path fill="#FF7262" d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5Z" />
    <path fill="#F24E1E" d="M19 0h9.5a9.5 9.5 0 1 1 0 19H19V0Z" />
    <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5Z" />
  </svg>
);

const BrandLogo = ({ name, slug, iconOnly = false }: { name: string; slug?: string; iconOnly?: boolean }) => (
  <span
    className="brand-logo-mark"
    aria-label={name}
    style={{ "--brand-text-color": slug ? brandTextColors[slug] : undefined } as React.CSSProperties}
  >
    {slug === "figma" ? (
      <FigmaIcon />
    ) : slug ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`https://cdn.simpleicons.org/${slug}`}
        alt=""
        aria-hidden="true"
        className="brand-logo-icon"
      />
    ) : null}
    {!iconOnly && <span className="brand-logo-text">{name}</span>}
  </span>
);

const getBrandIcon = (name: string) => {
  const normalized = name.toLowerCase();

  for (const [key, slug] of Object.entries(brandSlugs)) {
    if (normalized.includes(key)) {
      const displayName = key === "hubspot"
        ? "HubSpot"
        : key.charAt(0).toUpperCase() + key.slice(1);

      return <BrandLogo name={displayName} slug={slug} />;
    }
  }
  
  return <BrandLogo name={name} />;
};

const fallbackPartners = [
  { name: "Stripe", imageUrl: null },
  { name: "Figma", imageUrl: null },
  { name: "Shopify", imageUrl: null },
  { name: "Vercel", imageUrl: null },
  { name: "HubSpot", imageUrl: null },
  { name: "Airbnb", imageUrl: null },
  { name: "Notion", imageUrl: null },
  { name: "Loom", imageUrl: null },
  { name: "Linear", imageUrl: null },
  { name: "Framer", imageUrl: null },
];

export default async function Home() {
  let siteSettings: any = null;
  let homePage: any = null;
  let partnerLogosList: any[] = [];

  try {
    const payload = await getPayload({ config });

    // 1. Fetch site settings
    siteSettings = await payload.findGlobal({
      slug: "site-settings",
    });

    // 2. Fetch home page
    const pages = await payload.find({
      collection: "pages",
      where: {
        slug: {
          equals: "home",
        },
      },
      limit: 1,
    });
    homePage = pages.docs?.[0];

    // 3. Fetch partner logos
    const partnersRes = await payload.find({
      collection: "partner-logos",
      limit: 100,
      where: {
        hidden: {
          not_equals: true,
        },
      },
    });
    partnerLogosList = partnersRes.docs || [];
  } catch (error) {
    console.error("Failed to fetch CMS data:", error);
  }

  // Fallbacks
  const brandText = siteSettings?.logoText || "adonis";
  
  const navigation = siteSettings?.navigation && siteSettings.navigation.length > 0
    ? siteSettings.navigation
    : [
        { label: "Home", link: "/" },
        { label: "Enterprise", link: "#enterprise-products" },
        { label: "Products", link: "#products" },
        { label: "Services", link: "#services" },
        { label: "Features", link: "#features" },
        { label: "Blog", link: "#blog" },
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

  const heroBlock = homePage?.layout?.find((block: any) => block.blockType === "hero");

  const heroData = {
    showRating: heroBlock?.showRating !== false,
    ratingScore: heroBlock?.ratingScore || "4.9",
    ratingLabel: heroBlock?.ratingLabel || "Rated 4.9 out of 5 stars based on Capterra and Google reviews",
    label: heroBlock?.label || "Transforming Business Through AI",
    headingLine1: heroBlock?.headingLine1 || "Transforming businesses",
    headingLine2: heroBlock?.headingLine2 || "through vision & AI innovation",
    description: heroBlock?.description || "A leading software company reshaping industries across the globe through AI automation, seamless integrations, and intelligent solutions that drive business growth.",
    ctaText: !heroBlock?.ctaText || heroBlock.ctaText.trim().toUpperCase() === "GET START"
      ? "Book a Free Consultant"
      : heroBlock.ctaText,
    ctaLink: heroBlock?.ctaLink || "#",
    contactCtaText: heroBlock?.contactCtaText || "Contact Us",
    contactCtaLink: heroBlock?.contactCtaLink || "#",
    secondaryCtaText: heroBlock?.secondaryCtaText || "EXPLORE WORK",
    secondaryCtaLink: !heroBlock?.secondaryCtaLink || heroBlock.secondaryCtaLink.trim() === "" || heroBlock.secondaryCtaLink === "#"
      ? "#products"
      : heroBlock.secondaryCtaLink,
    videoUrl: (typeof heroBlock?.video === "object" && heroBlock?.video !== null && "url" in heroBlock.video)
      ? (heroBlock.video.url as string)
      : "/0602 (1).webm",
  };

  // 1. Gather all unique logos from the database (excluding hidden, slack, zoom)
  const dbUniqueMap = new Map<string, any>();
  partnerLogosList.forEach((p: any) => {
    const name = p.name?.trim();
    if (!name) return;
    const lowerName = name.toLowerCase();
    if (lowerName.includes("slack") || lowerName.includes("zoom")) return;
    
    if (!dbUniqueMap.has(lowerName)) {
      dbUniqueMap.set(lowerName, {
        name,
        imageUrl: typeof p.image === "object" && p.image !== null && "url" in p.image ? p.image.url : null,
      });
    }
  });

  // 2. Put them in our unique list
  let uniqueLogos = Array.from(dbUniqueMap.values());

  // 3. Fill up with unique fallbacks if we have less than 12
  for (const fallback of fallbackPartners) {
    if (uniqueLogos.length >= 12) break;
    const lowerName = fallback.name.toLowerCase();
    if (!dbUniqueMap.has(lowerName)) {
      uniqueLogos.push(fallback);
      dbUniqueMap.set(lowerName, fallback);
    }
  }

  // 4. Use the unique logos list. We only need to pad if the number of unique elements
  // is extremely small (less than 8), to ensure the marquee fills the screen width.
  let logosToRender = [...uniqueLogos];
  if (logosToRender.length > 0) {
    if (logosToRender.length < 8) {
      let repeatIdx = 0;
      while (logosToRender.length < 8) {
        const candidate = uniqueLogos[repeatIdx % uniqueLogos.length];
        const lastElement = logosToRender[logosToRender.length - 1];
        const firstElement = logosToRender[0];
        
        const isDuplicateOfLast = lastElement && lastElement.name.toLowerCase() === candidate.name.toLowerCase();
        const isDuplicateOfFirst = (logosToRender.length === 7) && firstElement && firstElement.name.toLowerCase() === candidate.name.toLowerCase();
        
        if (!isDuplicateOfLast && !isDuplicateOfFirst) {
          logosToRender.push(candidate);
        } else {
          // If it matches a neighbor, look for the next available non-matching candidate
          let found = false;
          for (let offset = 1; offset < uniqueLogos.length; offset++) {
            const altCandidate = uniqueLogos[(repeatIdx + offset) % uniqueLogos.length];
            const isAltDuplicateOfLast = lastElement && lastElement.name.toLowerCase() === altCandidate.name.toLowerCase();
            const isAltDuplicateOfFirst = (logosToRender.length === 7) && firstElement && firstElement.name.toLowerCase() === altCandidate.name.toLowerCase();
            
            if (!isAltDuplicateOfLast && !isAltDuplicateOfFirst) {
              logosToRender.push(altCandidate);
              repeatIdx += offset;
              found = true;
              break;
            }
          }
          // Absolute fallback fallback if there is only 1 unique logo overall
          if (!found) {
            logosToRender.push(candidate);
          }
        }
        repeatIdx++;
      }
    }
  } else {
    logosToRender = [...fallbackPartners];
  }

  return (
    <main className="page-shell">
      <section className="hero-frame" aria-label={`${brandText} revenue intelligence`}>
        <div className="hero-panel">
          <video
            className="hero-bg-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            {heroData.videoUrl === "/0602 (1).webm" ? (
              <>
                <source src="/0602 (1).webm" type="video/webm" />
                <source src="/0602 (1).mp4" type="video/mp4" />
              </>
            ) : (
              <source
                src={heroData.videoUrl}
                type={heroData.videoUrl.endsWith(".webm") ? "video/webm" : "video/mp4"}
              />
            )}
          </video>
          <div className="hero-video-fade" aria-hidden="true"></div>
          <div className="hero-video-fade hero-video-fade-strong" aria-hidden="true"></div>
          <div className="hero-grid-lines" aria-hidden="true"></div>
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

          <div className="hero-content">
            <div className="hero-copy">
              {heroData.showRating && (
                <div className="hero-rating-badge" aria-label={heroData.ratingLabel}>
                  <div className="rating-logos">
                    <div className="rating-logo capterra-logo">
                      <svg viewBox="0 0 24 24" className="w-10 h-10 select-none pointer-events-none" aria-hidden="true">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.76 0 5.25-1.12 7.07-2.93l-2.83-2.83C15.02 17.46 13.6 18 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.6 0 3.02.54 4.24 1.76l2.83-2.83C17.25 3.12 14.76 2 12 2z" fill="#111116" />
                        <circle cx="12" cy="12" r="3" fill="#ff4c3b" />
                      </svg>
                    </div>
                    <div className="rating-logo google-logo">
                      <svg viewBox="0 0 24 24" className="w-10 h-10 select-none pointer-events-none" aria-hidden="true" fill="none">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                      </svg>
                    </div>
                  </div>
                  <div className="rating-details">
                    <span className="rating-score">{heroData.ratingScore}</span>
                    <div className="rating-stars" aria-hidden="true">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} viewBox="0 0 24 24" className="rating-star">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <p className="hero-label"><ScrambleText text={heroData.label} /></p>
              <h1>
                <span>{heroData.headingLine1}</span>
                <span>{heroData.headingLine2}</span>
              </h1>
              <p>{heroData.description}</p>
              <div className="cta-group">
                <div className="cta-contact-wrapper">
                  <Link className="cta-contact" href={heroData.ctaLink}>
                    {heroData.ctaText}
                  </Link>
                </div>
                <Link className="btn-secondary" href={heroData.secondaryCtaLink}>
                  {heroData.secondaryCtaText}
                </Link>
              </div>
            </div>
          </div>

          <div className="partner-strip" aria-label="Customer logos">
            <div className="partner-strip-track">
              <div className="partner-strip-group">
                {logosToRender.map((partner: any, idx: number) => (
                  <div key={`group1-${idx}`} className="partner-logo-item">
                    {partner.imageUrl ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={partner.imageUrl}
                        alt={partner.name}
                        className="partner-logo-img"
                      />
                    ) : (
                      getBrandIcon(partner.name)
                    )}
                  </div>
                ))}
              </div>
              <div className="partner-strip-group" aria-hidden="true">
                {logosToRender.map((partner: any, idx: number) => (
                  <div key={`group2-${idx}`} className="partner-logo-item">
                    {partner.imageUrl ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={partner.imageUrl}
                        alt={partner.name}
                        className="partner-logo-img"
                      />
                    ) : (
                      getBrandIcon(partner.name)
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnterpriseProductSection />

      <section className="section-reveal office-tour-reveal relative w-full pt-[100px] pb-[100px] px-5 md:px-20 bg-white border-t border-slate-100 text-slate-800 overflow-hidden" aria-labelledby="tour-heading">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          
          <div className="flex flex-col items-start text-left">
            <span className="reveal-item reveal-left reveal-delay-1 font-sans text-sm font-bold uppercase tracking-[0.15em] text-blue-600 mb-4">
              <ScrambleText text="Company Overview & Culture" />
            </span>
            <h2 id="tour-heading" className="reveal-item reveal-left reveal-delay-2 font-sans text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#aebcff] via-[#2546c7] to-[#09164f]">
                A Glimpse of
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#aebcff] via-[#2546c7] to-[#09164f]">
                CodeMoly Office Tour
              </span>
            </h2>
            <p className="reveal-item reveal-left reveal-delay-3 font-sans text-base md:text-lg leading-relaxed text-slate-600">
              Step inside the vibrant workspace of CodeMoly. Discover the collaborative environment
              where our engineering teams design, build, and scale intelligent AI automation
              solutions that transform businesses.
            </p>
          </div>

          <div className="reveal-item reveal-right reveal-delay-2 relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-slate-200/80">
            <OfficeTourVideo />
          </div>

        </div>
      </section>

      <CoreServices />

      <section className="section-reveal metrics-reveal relative w-full py-20 px-5 md:px-20 bg-[#ffffff] border-t border-slate-100 overflow-hidden text-slate-800" aria-label="Performance Metrics">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.12] pointer-events-none" />

        <div className="metrics-grid max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 relative z-10">
          <div className="flex flex-col items-center justify-center text-center">
            <AnimatedMetric end={400} suffix="+" className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#09164f] mb-2 tracking-tight" />
            <span className="font-sans text-base sm:text-lg md:text-xl font-bold text-slate-800 mb-1">App Integrations</span>
            <span className="font-sans text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">with n8n workflow automation</span>
          </div>
          
          <div className="flex flex-col items-center justify-center text-center">
            <AnimatedMetric end={75} suffix="%" className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#09164f] mb-2 tracking-tight" />
            <span className="font-sans text-base sm:text-lg md:text-xl font-bold text-slate-800 mb-1">Time Saved</span>
            <span className="font-sans text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">on repetitive business tasks</span>
          </div>
          
          <div className="flex flex-col items-center justify-center text-center">
            <AnimatedMetric end={24} suffix="/7" className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#09164f] mb-2 tracking-tight" />
            <span className="font-sans text-base sm:text-lg md:text-xl font-bold text-slate-800 mb-1">AI Agent Support</span>
            <span className="font-sans text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">automated customer service</span>
          </div>
          
          <div className="flex flex-col items-center justify-center text-center">
            <AnimatedMetric end={0} finalText="Zero" className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#09164f] mb-2 tracking-tight" />
            <span className="font-sans text-base sm:text-lg md:text-xl font-bold text-slate-800 mb-1">Code Required</span>
            <span className="font-sans text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">for most automation workflows</span>
          </div>
        </div>
      </section>

      <PortfolioSection />
      <TalentSection />
      <WorkforceUpskilling />
      <AiDevelopment />
      <DevToolkit />
      <CtaSection />
      <Technologies />
      <GlobalEvents />
      <TestimonialSection />
      <FaqSection />
      <ContactFormSection />
      <BlogSection />
      <FooterSection />
      <ContactModal />
      <ScrollToTop />

    </main>
  );
}
