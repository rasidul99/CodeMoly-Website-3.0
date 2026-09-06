/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import React from "react";
import { getPayload } from "payload";
import config from "@/payload.config";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NavbarScrollBehavior from "@/components/NavbarScrollBehavior";
import ScrollRevealBehavior from "@/components/ScrollRevealBehavior";
import ContactModal from "@/components/ContactModal";
import ScrambleText from "@/components/ScrambleText";
import GridDistortion from "@/components/GridDistortion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Articles | CodeMoly",
  description: "Stay updated with the latest trends in AI automation, NextJS developments, UI/UX designs, and tech innovations from CodeMoly.",
};

const blogPosts = [
  {
    id: 1,
    title: "The Psychology of Colors in Web Design What You Need to Know",
    category: "Design",
    date: "Jun 18, 2025",
    description: "Explore how color choices affect user emotions, brand perception, and conversion rates. Learn best practices for constructing harmonious palettes.",
    image: "/blogs/blue_stripes.png",
    slug: "psychology-of-colors-web-design",
  },
  {
    id: 2,
    title: "How UI Affects User Engagement Best Practices for 2025",
    category: "Development",
    date: "Jun 20, 2025",
    description: "A deep dive into UX/UI patterns that drive engagement. Discover how micro-interactions, responsive sizing, and modern layouts hold attention.",
    image: "/blogs/silver_metallic.png",
    slug: "ui-affects-user-engagement-2025",
  },
  {
    id: 3,
    title: "How We Redesigned a Website to Increase Conversions by 40%",
    category: "Brand",
    date: "Jun 22, 2025",
    description: "A case study examining our iterative redesign process. Learn how UX auditing and analytics led to a 40% increase in checkout completions.",
    image: "/blogs/neon_waves.png",
    slug: "redesigned-website-increase-conversions",
  },
  {
    id: 4,
    title: "Unlocking Next-Gen Performance: Webpack to Turbopack Migration Guide",
    category: "Engineering",
    date: "Jul 02, 2025",
    description: "Learn how we transitioned our enterprise monorepo from Webpack to Turbopack, achieving 5x faster local server boots and hot updates.",
    image: "/blogs/blue_stripes.png",
    slug: "webpack-turbopack-migration-guide",
  },
  {
    id: 5,
    title: "Demystifying AI Lead Scoring: How Predictive Models Filter Real Buyers",
    category: "AI & Data",
    date: "Jul 08, 2025",
    description: "An insider look into our custom AI lead score engine, scoring user behavior metrics to prioritize hot pipeline deals automatically.",
    image: "/blogs/silver_metallic.png",
    slug: "ai-lead-scoring-predictive-models",
  },
  {
    id: 6,
    title: "Mastering Next.js 15 Server Actions: Safe Form Submissions Without APIs",
    category: "NextJS",
    date: "Jul 12, 2025",
    description: "Review safety protocols, optimistic state bindings, and rate-limiting controls when using Next.js server actions in production.",
    image: "/blogs/neon_waves.png",
    slug: "nextjs-server-actions-guide",
  }
];

export default async function BlogPage() {
  // Fetch site settings from Payload config for navigation items
  const payload = await getPayload({ config });
  
  const siteSettings = await payload.findGlobal({
    slug: "site-settings",
    draft: false,
  }).catch(() => null) as any;

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

  const logoAlt = siteSettings?.logoImage && typeof siteSettings.logoImage === "object" && "alt" in siteSettings.logoImage
    ? (siteSettings.logoImage.alt as string)
    : "CodeMoly";

  const logoTranslateY = siteSettings?.logoTranslateY || 2;
  const ctaLabel = siteSettings?.ctaLabel || "Start a project";

  return (
    <main className="page-shell bg-slate-50 min-h-screen flex flex-col text-slate-800">
      {/* Dynamic styles to ensure page-shell fits */}
      <NavbarScrollBehavior />
      <ScrollRevealBehavior />

      {/* Header Panel with Dark Glass background to match Hero section style */}
      <header className="relative w-full bg-[#0b0f19] border-b border-slate-900 overflow-hidden pb-12 pt-28 px-5 md:px-20 text-white">
        {/* Subtle grid lines background overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.03] pointer-events-none" />
        
        <Navbar
          navigation={navigation}
          logoUrl={logoUrl}
          logoAlt={logoAlt}
          logoTranslateY={logoTranslateY}
          ctaLabel={ctaLabel}
        />

        {/* Hero title & text */}
        <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-start mt-8">
          <span className="font-sans text-xs md:text-sm font-bold uppercase tracking-[0.15em] text-blue-500 mb-4 block">
            <ScrambleText text="LATEST INSIGHTS" />
          </span>
          <h1 className="font-sans font-extrabold text-4xl md:text-6xl leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 mb-4">
            Insights & Engineering Blog
          </h1>
          <p className="font-sans text-slate-400 max-w-2xl text-base md:text-lg leading-relaxed">
            Stay updated with the latest trends in AI automation, NextJS developments, UI/UX designs, and tech innovations from CodeMoly.
          </p>
        </div>
      </header>

      {/* Main Blog Post Directory Grid */}
      <section className="relative w-full py-16 md:py-24 px-5 md:px-20 bg-white grow overflow-hidden" aria-label="Articles Grid">
        {/* Subtle background grid layer */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.1] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {blogPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id} className="group flex flex-col justify-between items-start cursor-pointer bg-white border border-slate-100/80 rounded-[28px] p-4 hover:shadow-[0_20px_50px_rgba(0,0,0,0.03)] transition-all duration-300">
                <article className="w-full flex flex-col justify-between h-full">
                  <div className="w-full">
                    {/* Blog Post Card Image (Uniform height across different widths) */}
                    <div className="relative w-full h-[200px] rounded-[22px] overflow-hidden border border-slate-200/40 shadow-sm mb-5">
                      <GridDistortion 
                        imageSrc={post.image} 
                        className="absolute inset-0 w-full h-full object-cover"
                        grid={12}
                        mouse={0.18}
                        strength={0.15}
                        relaxation={0.9}
                      />
                    </div>

                    {/* Tag and Date */}
                    <div className="flex items-center gap-3 mb-3 px-1">
                      <span className="px-3 py-1 rounded-lg bg-blue-50 text-blue-600 border border-blue-100/60 font-sans text-[11px] font-bold uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="font-sans text-xs md:text-sm text-slate-400 font-medium">
                        {post.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-sans text-lg md:text-xl font-extrabold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors duration-200 mb-3 px-1">
                      {post.title}
                    </h2>

                    {/* Description */}
                    <p className="font-sans text-slate-500 text-sm leading-relaxed mb-6 px-1">
                      {post.description}
                    </p>
                  </div>

                  {/* Read Button */}
                  <div className="w-full px-1 pt-2 border-t border-slate-50 flex items-center justify-between text-blue-600 font-bold text-sm tracking-wide mt-auto">
                    <span>Read Article</span>
                    <span className="transform transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer & Modals */}
      <FooterSection />
      <ContactModal />
    </main>
  );
}
