/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import type { Metadata } from "next";
import React from "react";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import config from "@/payload.config";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NavbarScrollBehavior from "@/components/NavbarScrollBehavior";
import ScrollRevealBehavior from "@/components/ScrollRevealBehavior";
import ContactModal from "@/components/ContactModal";
import ScrambleText from "@/components/ScrambleText";
import GridDistortion from "@/components/GridDistortion";
import { Calendar, User, ArrowLeft, Mail } from "lucide-react";

// Mock database for detailed posts
const blogPostsData: Record<string, {
  title: string;
  category: string;
  date: string;
  image: string;
  description: string;
  author: string;
  authorRole: string;
  readTime: string;
  content: React.ReactNode;
}> = {
  "psychology-of-colors-web-design": {
    title: "The Psychology of Colors in Web Design: What You Need to Know",
    category: "Design",
    date: "Jun 18, 2025",
    image: "/blogs/blue_stripes.png",
    description: "Explore how color choices affect user emotions, brand perception, and conversion rates. Learn best practices for constructing harmonious palettes.",
    author: "Elena Rostova",
    authorRole: "Head of Brand Design",
    readTime: "5 min read",
    content: (
      <div className="flex flex-col gap-6">
        <p className="text-slate-600 leading-relaxed text-base md:text-lg">
          Every time a user visits your website, they make a subconscious judgment within the first 90 seconds. Up to 90% of that initial assessment is based on color alone. Colors are not just aesthetic choices; they are powerful psychological triggers that communicate values, emotions, and trust.
        </p>
        
        <h2 className="font-sans font-bold text-2xl text-slate-900 mt-4">Understanding Color Associations</h2>
        <p className="text-slate-600 leading-relaxed">
          Different colors trigger different neural pathways and associations. Here is a quick breakdown of how key colors behave in digital product environments:
        </p>

        <ul className="list-disc pl-6 text-slate-600 flex flex-col gap-2">
          <li><strong>Blue (Trust, Security, Calm):</strong> Widely used by banking and SaaS platforms (e.g. Stripe, PayPal) because it conveys stability and professionalism.</li>
          <li><strong>Cyan & Teal (Innovation, Energy, Clarity):</strong> Conveys next-gen capability. Used frequently in AI, modern dev tools, and creative agencies.</li>
          <li><strong>Orange & Amber (Friendly, Creative, Energetic):</strong> A high-visibility color that draws focus. Often used to signal productivity, warnings, or creative hubs.</li>
          <li><strong>Purple (Luxury, Creativity, Mystery):</strong> Signals prestige and high quality. Frequently used to show premium product upgrades or futuristic designs.</li>
        </ul>

        <blockquote className="border-l-4 border-blue-600 bg-blue-50/50 p-4 rounded-r-xl italic text-slate-700 font-medium my-4">
          "Contrast draws the eye, but harmony builds the trust. Never pick a color simply because you like it—pick it because your audience expects it."
        </blockquote>

        <h2 className="font-sans font-bold text-2xl text-slate-900 mt-4">The 60-30-10 Rule in Layout Design</h2>
        <p className="text-slate-600 leading-relaxed">
          To build clean interface experiences, web designers use the classic interior design formula:
        </p>
        <ul className="list-decimal pl-6 text-slate-600 flex flex-col gap-2">
          <li><strong>60% Dominant Tone:</strong> Usually the clean page background (white, light slate, or deep dark obsidian).</li>
          <li><strong>30% Secondary Color:</strong> Applied to structure and card boxes (borders, secondary texts, neutral grids).</li>
          <li><strong>10% Accent Callouts:</strong> Reserved strictly for primary action CTA buttons, active status dots, and key highlights.</li>
        </ul>
      </div>
    )
  },
  "ui-affects-user-engagement-2025": {
    title: "How UI Affects User Engagement: Best Practices for 2025",
    category: "Development",
    date: "Jun 20, 2025",
    image: "/blogs/silver_metallic.png",
    description: "A deep dive into UX/UI patterns that drive engagement. Discover how micro-interactions, responsive sizing, and modern layouts hold attention.",
    author: "Marc Andreessen",
    authorRole: "Principal Developer",
    readTime: "7 min read",
    content: (
      <div className="flex flex-col gap-6">
        <p className="text-slate-600 leading-relaxed text-base md:text-lg">
          In 2025, user engagement is measured in milliseconds. The bounce rate of static, sluggish web layouts is hitting all-time highs. Users expect digital interfaces to feel fluid, responsive, and alive.
        </p>
        
        <h2 className="font-sans font-bold text-2xl text-slate-900 mt-4">1. Dynamic Micro-Interactions</h2>
        <p className="text-slate-600 leading-relaxed">
          Micro-interactions are subtle visual responses to a user's action—like button hover translations, glowing gradient states, or cards that tilt dynamically in response to mouse coordinates. These interactions provide instant cognitive feedback, making the app feel premium and engaging.
        </p>

        <h2 className="font-sans font-bold text-2xl text-slate-900 mt-4">2. Glassmorphism and Depth Layers</h2>
        <p className="text-slate-600 leading-relaxed">
          Using semi-transparent panel boxes with backdrop filters (blur) creates a hierarchy of depth. By styling cards with a frosted-glass look, we keep the page background visible while focusing user attention on overlay items.
        </p>

        <pre className="bg-slate-900 text-slate-200 rounded-xl p-4 overflow-x-auto text-xs font-mono my-4">
{`.frosted-card {
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
}`}
        </pre>

        <h2 className="font-sans font-bold text-2xl text-slate-900 mt-4">3. Performance Optimization is UI</h2>
        <p className="text-slate-600 leading-relaxed">
          No matter how beautiful your gradients are, users will leave if the page takes longer than 2 seconds to load. Modern developers prioritize core web vitals by lazy-loading heavy canvas segments, utilizing optimized formats, and minimizing CSS bundle sizes.
        </p>
      </div>
    )
  },
  "redesigned-website-increase-conversions": {
    title: "How We Redesigned a Website to Increase Conversions by 40%",
    category: "Brand",
    date: "Jun 22, 2025",
    image: "/blogs/neon_waves.png",
    description: "A case study examining our iterative redesign process. Learn how UX auditing and analytics led to a 40% increase in checkout completions.",
    author: "Sarah Jenkins",
    authorRole: "Director of Product Growth",
    readTime: "6 min read",
    content: (
      <div className="flex flex-col gap-6">
        <p className="text-slate-600 leading-relaxed text-base md:text-lg">
          Many businesses struggle with low conversions, blaming their product or pricing. Often, the roadblock lies in the checkout funnel itself. Here is a case study of how we audited, rebuilt, and optimized our client's web store to secure a massive 40% uptick in customer conversions.
        </p>
        
        <h2 className="font-sans font-bold text-2xl text-slate-900 mt-4">Phase 1: Funnel Friction Audit</h2>
        <p className="text-slate-600 leading-relaxed">
          By utilizing scroll-heatmaps and behavioral logs, we identified three major friction points:
        </p>
        <ul className="list-disc pl-6 text-slate-600 flex flex-col gap-2">
          <li><strong>Overwhelming Forms:</strong> The checkout page demanded 12 inputs (including fax numbers and company details).</li>
          <li><strong>Silent Failures:</strong> Validation errors were shown at the top of the form, forcing users to scroll up to find out what went wrong.</li>
          <li><strong>SMS Delays:</strong> Delivery of verification OTPs was inconsistent, resulting in abandoned orders.</li>
        </ul>

        <h2 className="font-sans font-bold text-2xl text-slate-900 mt-4">Phase 2: Implementing AI & SMS Automation</h2>
        <p className="text-slate-600 leading-relaxed">
          We streamlined the checkout from 12 fields to only 4. Additionally, we integrated high-speed automated OTP calls and instantly routed booking data to local shipping panels (Steadfast/Pathao).
        </p>

        <blockquote className="border-l-4 border-emerald-600 bg-emerald-50/50 p-4 rounded-r-xl italic text-slate-700 font-medium my-4">
          "Simplifying the user choice path is the single most profitable design change you can ever make."
        </blockquote>
      </div>
    )
  },
  "webpack-turbopack-migration-guide": {
    title: "Unlocking Next-Gen Performance: Webpack to Turbopack Migration Guide",
    category: "Engineering",
    date: "Jul 02, 2025",
    image: "/blogs/blue_stripes.png",
    description: "Learn how we transitioned our enterprise monorepo from Webpack to Turbopack, achieving 5x faster local server boots and hot updates.",
    author: "Rayhan Kabir",
    authorRole: "Lead DevOps Architect",
    readTime: "8 min read",
    content: (
      <div className="flex flex-col gap-6">
        <p className="text-slate-600 leading-relaxed text-base md:text-lg">
          As codebase monorepos grow, the local development compilation times often degrade to a crawl. Discover how migrating our enterprise Next.js setup to Turbopack saved our engineers hours of wait time every single week.
        </p>
        
        <h2 className="font-sans font-bold text-2xl text-slate-900 mt-4">Why Turbopack?</h2>
        <p className="text-slate-600 leading-relaxed">
          Turbopack is an incremental bundler written in Rust. Because it targets Next.js out of the box, it caches functions and imports aggressively. In our testing, local dev servers booted 5x faster, and Hot Module Replacement (HMR) speeds dropped to under 100ms.
        </p>

        <pre className="bg-slate-900 text-slate-200 rounded-xl p-4 overflow-x-auto text-xs font-mono my-4">
{`# Starting Next.js Dev Server with Turbopack
next dev --turbo`}
        </pre>

        <h2 className="font-sans font-bold text-2xl text-slate-900 mt-4">Migration Challenges</h2>
        <p className="text-slate-600 leading-relaxed">
          While simple apps migrate instantly, enterprise projects often encounter loader conflicts (e.g. custom SVG configurations). We resolved these by mapping custom loaders into our `next.config.js` settings block.
        </p>
      </div>
    )
  },
  "ai-lead-scoring-predictive-models": {
    title: "Demystifying AI Lead Scoring: How Predictive Models Filter Real Buyers",
    category: "AI & Data",
    date: "Jul 08, 2025",
    image: "/blogs/silver_metallic.png",
    description: "An insider look into our custom AI lead score engine, scoring user behavior metrics to prioritize hot pipeline deals automatically.",
    author: "Dr. Farhan Alam",
    authorRole: "Chief AI Data Scientist",
    readTime: "6 min read",
    content: (
      <div className="flex flex-col gap-6">
        <p className="text-slate-600 leading-relaxed text-base md:text-lg">
          Not all leads are created equal. Sales agents often waste 60% of their working hours dialling cold numbers. Learn how predictive lead scoring filters hot buyers automatically using behavioral vectors.
        </p>
        
        <h2 className="font-sans font-bold text-2xl text-slate-900 mt-4">How Predictive Scoring Works</h2>
        <p className="text-slate-600 leading-relaxed">
          Instead of relying on manual classifications, the AI scores inbound leads in real-time by analyzing:
        </p>
        <ul className="list-disc pl-6 text-slate-600 flex flex-col gap-2">
          <li><strong>Interactions:</strong> Pages visited, pricing sliders adjusted, documentation read.</li>
          <li><strong>Email Domain Quality:</strong> Corporate business domains rank significantly higher than free providers (Gmail/Yahoo).</li>
          <li><strong>Behavioral Velocity:</strong> Fast, repeated site visits suggest an immediate corporate buying intent.</li>
        </ul>
      </div>
    )
  },
  "nextjs-server-actions-guide": {
    title: "Mastering Next.js 15 Server Actions: Safe Form Submissions Without APIs",
    category: "NextJS",
    date: "Jul 12, 2025",
    image: "/blogs/neon_waves.png",
    description: "Review safety protocols, optimistic state bindings, and rate-limiting controls when using Next.js server actions in production.",
    author: "Tasnim Rahman",
    authorRole: "Senior NextJS Lead",
    readTime: "6 min read",
    content: (
      <div className="flex flex-col gap-6">
        <p className="text-slate-600 leading-relaxed text-base md:text-lg">
          Next.js Server Actions allow you to submit forms, edit databases, and update layout views directly on the server without writing custom HTTP route handlers. However, with this power comes the need for strict security audits.
        </p>
        
        <h2 className="font-sans font-bold text-2xl text-slate-900 mt-4">Writing a Secure Server Action</h2>
        <p className="text-slate-600 leading-relaxed">
          Never trust client inputs. A secure server action must validate data parameters inside the action function and check session permissions before writing to the database.
        </p>

        <pre className="bg-slate-900 text-slate-200 rounded-xl p-4 overflow-x-auto text-xs font-mono my-4">
{`"use server";

import { z } from "zod";
import { auth } from "@/lib/auth";

const formSchema = z.object({
  email: z.string().email(),
});

export async function submitEmailAction(formData: FormData) {
  const session = await auth();
  if (!session) throw new Error("Unauthorized");

  const validated = formSchema.parse({
    email: formData.get("email"),
  });
  
  // Safe to write to database
}`}
        </pre>
      </div>
    )
  }
};

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsData[slug];
  if (!post) return { title: "Article Not Found" };
  return {
    title: `${post.title} | CodeMoly Insights`,
    description: post.description,
  };
}

export default async function BlogPostDetailPage({ params }: Params) {
  const { slug } = await params;
  const post = blogPostsData[slug];
  if (!post) {
    notFound();
  }

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

  // Filter out the current post to get related posts (max 3)
  const relatedPosts = Object.entries(blogPostsData)
    .filter(([key]) => key !== slug)
    .slice(0, 3)
    .map(([key, value]) => ({
      slug: key,
      ...value
    }));

  return (
    <main className="page-shell bg-slate-50 min-h-screen flex flex-col text-slate-800">
      <NavbarScrollBehavior />
      <ScrollRevealBehavior />

      {/* Hero Header Segment */}
      <header className="relative w-full bg-[#0b0f19] border-b border-slate-900 overflow-hidden pb-16 pt-28 px-5 md:px-20 text-white">
        {/* Subtle grid lines background overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.03] pointer-events-none" />
        
        <Navbar
          navigation={navigation}
          logoUrl={logoUrl}
          logoAlt={logoAlt}
          logoTranslateY={logoTranslateY}
          ctaLabel={ctaLabel}
        />

        <div className="max-w-[1400px] mx-auto relative z-10 mt-8">
          {/* Back button */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200 text-sm font-semibold mb-8 group">
            <ArrowLeft className="w-4 h-4 transform transition-transform duration-200 group-hover:-translate-x-1" />
            Back to Insights
          </Link>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-slate-400 text-xs md:text-sm">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="text-slate-500 text-xs md:text-sm">
              • {post.readTime}
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-sans font-black text-3xl md:text-5xl leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-[#aebcff] to-blue-500 mb-6">
            {post.title}
          </h1>

          {/* Author Card info */}
          <div className="flex items-center gap-3 border-t border-slate-800 pt-6">
            <div className="w-10 h-10 rounded-full bg-blue-600/30 border border-blue-500/40 flex items-center justify-center font-bold text-blue-300">
              {post.author.charAt(0)}
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-slate-200">{post.author}</p>
              <p className="text-xs text-slate-400">{post.authorRole}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main content body segment */}
      <section className="relative w-full py-16 md:py-24 px-5 md:px-20 bg-white grow overflow-hidden" aria-label="Article Body">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.08] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col lg:flex-row gap-12 xl:gap-16">
          
          {/* Left Column: Post image and content text */}
          <div className="w-full lg:w-[65%] flex flex-col">
            {/* Main Post Distorted Image */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[460px] rounded-[32px] overflow-hidden border border-slate-200/50 shadow-md mb-8">
              <GridDistortion 
                imageSrc={post.image} 
                className="absolute inset-0 w-full h-full object-cover"
                grid={12}
                mouse={0.18}
                strength={0.15}
                relaxation={0.9}
              />
            </div>

            {/* Content Body */}
            <article className="prose prose-slate max-w-none text-left">
              {post.content}
            </article>
          </div>

          {/* Right Column: Sticky newsletter & related posts sidebar */}
          <div className="w-full lg:w-[32%] flex flex-col gap-8 lg:sticky lg:top-28 h-fit">
            
            {/* Newsletter Sign Up Card */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 md:p-8 text-left shadow-sm">
              <div className="w-10 h-10 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-bold text-lg text-slate-900 mb-2">
                Subscribe to Insights
              </h3>
              <p className="font-sans text-xs md:text-sm text-slate-500 leading-relaxed mb-6">
                Get the latest articles on AI automation, web performance, and developer tools sent directly to your inbox.
              </p>
              <form className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full h-11 px-4 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
                <button 
                  type="submit" 
                  className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-colors cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Popular/Related Articles List */}
            <div className="flex flex-col text-left">
              <h3 className="font-sans font-bold text-lg text-slate-900 mb-4 px-1">
                Popular Articles
              </h3>
              <div className="flex flex-col gap-4">
                {relatedPosts.map((rPost, idx) => (
                  <Link href={`/blog/${rPost.slug}`} key={idx} className="flex gap-4 p-2.5 rounded-2xl hover:bg-slate-50/80 border border-transparent hover:border-slate-100 transition-all duration-200 group">
                    <div className="w-20 h-20 rounded-xl overflow-hidden relative shrink-0 border border-slate-100">
                      <img src={rPost.image} alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1">
                        {rPost.category}
                      </span>
                      <h4 className="font-sans text-xs md:text-sm font-extrabold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                        {rPost.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Footer Section */}
      <FooterSection />
      <ContactModal />
    </main>
  );
}
