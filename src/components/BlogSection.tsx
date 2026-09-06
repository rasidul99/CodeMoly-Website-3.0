"use client";

import React from "react";
import Link from "next/link";
import ScrambleText from "./ScrambleText";
import GridDistortion from "./GridDistortion";

const blogPosts = [
  {
    id: 1,
    title: "The Psychology of Colors in Web Design What You Need to Know",
    category: "Design",
    date: "Jun 18, 2025",
    image: "/blogs/blue_stripes.png",
    slug: "psychology-of-colors-web-design",
  },
  {
    id: 2,
    title: "How UI Affects User Engagement Best Practices for 2025",
    category: "Development",
    date: "Jun 20, 2025",
    image: "/blogs/silver_metallic.png",
    slug: "ui-affects-user-engagement-2025",
  },
  {
    id: 3,
    title: "How We Redesigned a Website to Increase Conversions by 40%",
    category: "Brand",
    date: "Jun 22, 2025",
    image: "/blogs/neon_waves.png",
    slug: "redesigned-website-increase-conversions",
  },
];

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="section-reveal blog-reveal relative w-full py-[100px] px-5 md:px-20 bg-white overflow-hidden text-slate-800"
      aria-labelledby="blogs-heading"
    >
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.12] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header Block with 60px gap to content (mb-[60px]) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-[60px] gap-8">
          <div className="flex flex-col items-start max-w-2xl">
            <span className="reveal-item reveal-up font-sans text-sm font-bold uppercase tracking-[0.15em] text-blue-600 mb-4 block">
              <ScrambleText text="Latest Insights" />
            </span>
            <h2
              id="blogs-heading"
              className="reveal-item reveal-up reveal-delay-1 font-sans text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900 mb-4"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#aebcff] via-[#2546c7] to-[#09164f]">
                From Our Blog
              </span>
            </h2>
            <p className="reveal-item reveal-up reveal-delay-2 font-sans text-base md:text-lg leading-relaxed text-slate-600">
              Stay updated with the latest trends in AI, automation, and software development
            </p>
          </div>

          {/* Copied from OUR PRODUCTS blue button */}
          <Link
            href="/blog"
            className="reveal-item reveal-up reveal-delay-3 inline-flex items-center justify-center px-6 md:px-8 py-3 text-white font-semibold text-[14px] md:text-[16px] rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 w-fit cursor-pointer flex-shrink-0"
            style={{ backgroundImage: "linear-gradient(rgb(29, 78, 216), rgb(59, 130, 246))" }}
          >
            View All Blogs
          </Link>
        </div>

        {/* Blogs Grid (Asymmetric 4-column layout on desktop) */}
        <div className="blogs-grid grid grid-cols-1 lg:grid-cols-4 gap-3">
          {blogPosts.map((post) => {
            const colSpanClass = post.id === 1 ? "lg:col-span-2" : "lg:col-span-1";
            
            return (
              <Link href={`/blog/${post.slug}`} key={post.id} className={`${colSpanClass} flex flex-col group`}>
                <article className="w-full flex flex-col cursor-pointer h-full">
                  
                  {/* Blog Post Card Image (Uniform height across different widths) */}
                  <div className="relative w-full h-[240px] sm:h-[300px] md:h-[340px] lg:h-[280px] xl:h-[320px] rounded-[24px] overflow-hidden border border-slate-200/40 shadow-sm mb-5">
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
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-lg bg-blue-50 text-blue-600 border border-blue-100/60 font-sans text-[11px] font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="font-sans text-xs md:text-sm text-slate-400 font-medium">
                      {post.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-sans text-lg md:text-xl font-extrabold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </h3>

                </article>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
