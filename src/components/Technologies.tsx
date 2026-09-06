"use client";

import React, { useState, useEffect } from "react";
import ScrambleText from "./ScrambleText";
import { ChevronDown } from "lucide-react";

interface TechItem {
  name: string;
  category: string;
  image: string;
}

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [tabClicked, setTabClicked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const categories = ["All","Analytics","AI","DevOps","Cloud","Mobile","Database","Backend","Frontend"];

  const items: TechItem[] = [
    // Row 1 (8 logos)
    { name: "Sentry", category: "Analytics", image: "/tech/69a1e056ebd4818c6e76f700_Tech_sentry_color.svg" },
    { name: "Mixpanel", category: "Analytics", image: "/tech/69a1e04661ed4c6e18698a75_Tech_mixpanel_color.svg" },
    { name: "Meta", category: "Analytics", image: "/tech/69a1e035750cf95a0795136f_Tech_meta_color.svg" },
    { name: "Hotjar", category: "Analytics", image: "/tech/69a1e01bb78a1aa4a3cd5845_Tech_hotjar_color.svg" },
    { name: "Google Analytics", category: "Analytics", image: "/tech/69a1e00cb52f97013a2dd48d_Tech_googleanalytics_color.svg" },
    { name: "Firebase", category: "Analytics", image: "/tech/69a1dffab16a8af506309e7a_Tech_firebase_color.svg" },
    { name: "Datadog", category: "Analytics", image: "/tech/69a1dfdcc4c9539181999dc3_Tech_datadog_color.svg" },
    { name: "Amplitude", category: "Analytics", image: "/tech/69a1dfa9abd16ed117046b79_Tech_amplitude_color.svg" },
    // Row 2 (8 logos)
    { name: "Replicate", category: "AI", image: "/tech/69a1df63d8ddeaf1b08c776e_Tech_replicate_color.svg" },
    { name: "Pinecone", category: "AI", image: "/tech/69a1df3e8206c36e04a56d4e_Tech_pinecode_color.svg" },
    { name: "pgvector", category: "AI", image: "/tech/69a1df2d347a03c4fde5345b_Tech_pgvector_color.svg" },
    { name: "OpenAI", category: "AI", image: "/tech/69a1df05640048751d0a0d7c_Tech_openai_color.svg" },
    { name: "Ollama", category: "AI", image: "/tech/69a1def5a7438019c7b6f81e_Tech_ollama_color.svg" },
    { name: "LangChain", category: "AI", image: "/tech/69a1dee690e90062fa51256c_Tech_langchain_color.svg" },
    { name: "Hugging Face", category: "AI", image: "/tech/69a1de9670c19ae9733cf5fd_Tech_huggingface_color.svg" },
    { name: "Gemini", category: "AI", image: "/tech/69a1de769845cbdfff2aa56f_Tech_gemini_color.svg" },
    // Row 3 (8 logos)
    { name: "fal.ai", category: "AI", image: "/tech/69a1de62680980af07473b6f_Tech_falai_color.svg" },
    { name: "CrewAI", category: "AI", image: "/tech/69a1de52da3f764922e3738c_Tech_crewai_color.svg" },
    { name: "ChromaDB", category: "AI", image: "/tech/69a1de4055206e70f954ae81_Tech_chromadb_color.svg" },
    { name: "Anthropic", category: "AI", image: "/tech/69a1de24b47e7f63cd6ecee8_Tech_anthropic_color.svg" },
    { name: "Terraform", category: "DevOps", image: "/tech/69a1dde3521621acef924791_Tech_terraform_color.svg" },
    { name: "Nginx", category: "DevOps", image: "/tech/69a1ddcc3431c8353311f390_Tech_nginx_color.svg" },
    { name: "Linux", category: "DevOps", image: "/tech/69a1ddbb7912055373725016_Tech_linux_color.svg" },
    { name: "Kubernetes", category: "DevOps", image: "/tech/69a1dda8d3c9e80e95971437_Tech_kubernetes_color.svg" },
    // Row 4 onwards
    { name: "Jenkins", category: "DevOps", image: "/tech/69a1dd9691033fcf85be969c_Tech_jenkins_color.svg" },
    { name: "GitHub Actions", category: "DevOps", image: "/tech/69a1dd81a12f097f9b2afaa1_Tech_githubactions_color.svg" },
    { name: "GitLab", category: "DevOps", image: "/tech/69a1dd6c0c1b13962f8b77f7_Tech_gitlab_color.svg" },
    { name: "Git", category: "DevOps", image: "/tech/69a1dd57a7438019c7b6a694_Tech_git_color.svg" },
    { name: "Docker", category: "DevOps", image: "/tech/69a1dd1f666687af91c45a3a_Tech_docker_color.svg" },
    { name: "Vercel", category: "Cloud", image: "/tech/69a1dc6ef535b2da9ed17b50_Tech_vercel_color.svg" },
    { name: "Netify", category: "Cloud", image: "/tech/69a1dc5d80c50c68802f3024_Tech_netify_color.svg" },
    { name: "Heroku", category: "Cloud", image: "/tech/69a1dc48c124339fc67a0979_Tech_heroku_color.svg" },
    { name: "Google Cloud", category: "Cloud", image: "/tech/69a1dc34f535b2da9ed17304_Tech_googlecloud_color.svg" },
    { name: "DigitalOcean", category: "Cloud", image: "/tech/69a1dc23f00ebfc8813bf20d_Tech_digitalocean_color.svg" },
    { name: "Cloudflare", category: "Cloud", image: "/tech/69a1dc11d89d6fab0d7a486a_Tech_cloudflare_color.svg" },
    { name: "AWS", category: "Cloud", image: "/tech/69a1dc0075569b371377053b_Tech_aws_color.svg" },
    { name: "Swift", category: "Mobile", image: "/tech/69a1db62666687af91c3fe1e_Tech_swift_color.svg" },
    { name: "Kotlin", category: "Mobile", image: "/tech/69a1dae8982b3f2728c4d4e8_Tech_kotlin_color.svg" },
    { name: "iOS", category: "Mobile", image: "/tech/69a1daaadbdebcaf091fc481_Tech_ios_color.svg" },
    { name: "Flutter", category: "Mobile", image: "/tech/69a6b7899946240db764e0f4_Tech_flutter_color.svg" },
    { name: "Dart", category: "Mobile", image: "/tech/69a1da311ed3b598a0ed8b79_Tech_dart_color.svg" },
    { name: "Expo", category: "Mobile", image: "/tech/69a1da0666b5c2be0b98d347_Tech_axpo_color.svg" },
    { name: "Android", category: "Mobile", image: "/tech/69a1d9f1ad461e50f09be9d6_Tech_android_color.svg" },
    { name: "Supabase", category: "Database", image: "/tech/69a1d903e8919b37e2770a4b_Tech_supabase_color.svg" },
    { name: "SQLite", category: "Database", image: "/tech/69a1d791fc1425b356fb3381_Tech_sqlite_color.svg" },
    { name: "Redis", category: "Database", image: "/tech/69a1d64c52ae6c91dc6ad71a_Tech_redis_color.svg" },
    { name: "PostgreSQL", category: "Database", image: "/tech/69a1d5db75569b371375d1ce_Tech_postgreSQL_color.svg" },
    { name: "MySQL", category: "Database", image: "/tech/69a1d5b82b0ecfb5fc70b834_Tech_mysql_color.svg" },
    { name: "MongoDB", category: "Database", image: "/tech/69a1d568ae116bd00635f9ad_Tech_mongodb_color.svg" },
    { name: "Firebase DB", category: "Database", image: "/tech/69a1d5535c126a08090cde43_Tech_firebase_color.svg" },
    { name: "Elasticsearch", category: "Database", image: "/tech/69a1d53c5c126a08090cd4fd_Tech_elastic_color.svg" },
    { name: "REST API", category: "Backend", image: "/tech/69a1d49af36435fea7f74e0e_Tech_restapi_color.svg" },
    { name: "Python", category: "Backend", image: "/tech/69a1d4783d238be01fc2090e_Tech_python_color.svg" },
    { name: "Node.js", category: "Backend", image: "/tech/69a1d45faa26de6158ff07c8_Tech_nodejs_color.svg" },
    { name: "Nest", category: "Backend", image: "/tech/69a1d44dc7d7a31f18137832_Tech_nest_color.svg" },
    { name: "GraphQL", category: "Backend", image: "/tech/69a1d431cbbf7b0da9333cc9_Tech_graphql_color.svg" },
    { name: "FastAPI", category: "Backend", image: "/tech/69a1d41ae1318fe46f11b176_Tech_fastapi_color.svg" },
    { name: "Express", category: "Backend", image: "/tech/69a1d4057feaaf2a1d41b922_Tech_express_color.svg" },
    { name: "Django REST", category: "Backend", image: "/tech/69a1d3d9152de6b9e53a4e69_Tech_djangorestframework_color.svg" },
    { name: "Django", category: "Backend", image: "/tech/69a1d3bb779b6d486da82ae3_Tech_django_color.svg" },
    { name: "Celery", category: "Backend", image: "/tech/69a1d3956bff4b364483e27a_Tech_celery_color.svg" },
    { name: "Vue.js", category: "Frontend", image: "/tech/69a1812f464a661c50707b84_Tech_vuejs_color.svg" },
    { name: "TypeScript", category: "Frontend", image: "/tech/69a180fb2bc01359c80a26db_Tech_typescript_color.svg" },
    { name: "Angular", category: "Frontend", image: "/tech/69a17f83eae6cb490bc72eaa_Tech_angular_color.svg" },
    { name: "Bootstrap", category: "Frontend", image: "/tech/69a17fccc876cacab4d7b4fb_Tech_bootstrap_color.svg" },
    { name: "CSS", category: "Frontend", image: "/tech/69a6b7602d0ebb8dd46614f3_Tech_css_color.svg" },
    { name: "Framer", category: "Frontend", image: "/tech/69a18003856b05e6278d79f1_Tech_framer_color.svg" },
    { name: "HTML", category: "Frontend", image: "/tech/69a18016e8340537dba3fd08_Tech_html_color.svg" },
    { name: "JavaScript", category: "Frontend", image: "/tech/69a18041b6968f6f4c5af0f4_Tech_javascript_color.svg" },
    { name: "Next.js", category: "Frontend", image: "/tech/69ae62ea3dfb49a872096056_Tech_nextjs_color.svg" },
    { name: "Nuxt.js", category: "Frontend", image: "/tech/69ae627e60521291d24b9fd8_Tech_nuxtjs_color.svg" },
    { name: "Tailwind CSS", category: "Frontend", image: "/tech/69a180ec6026242135e4b37e_Tech_tailwind_color.svg" },
    { name: "Storybook", category: "Frontend", image: "/tech/69a180d664cb13aec15066e2_Tech_storybook_color.svg" },
    { name: "React", category: "Frontend", image: "/tech/69a180b8ae1dbcd9fec6b98b_Tech_react_color.svg" },
    { name: "Sass", category: "Frontend", image: "/tech/69a180a2478c619c12aafc0f_Tech_sass_color.svg" }
  ];

  const filteredItems = items.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  const limitCount = isMobile ? 12 : 24;

  const displayItems = (activeCategory === "All" && !isExpanded)
    ? filteredItems.slice(0, limitCount)
    : filteredItems;

  return (
    <section className="section-reveal technologies-reveal relative w-full py-12 md:py-28 px-4 md:px-20 bg-white border-t border-slate-100 overflow-hidden text-slate-800" aria-labelledby="tech-heading">
      {/* Background Subtle Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.12] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10 text-center">
        
        {/* Header Block: Aligned with the page's design system */}
        <div className="reveal-item reveal-up reveal-delay-1 max-w-4xl mx-auto text-center mb-6 md:mb-10">
          <span className="font-sans text-xs md:text-sm font-bold uppercase tracking-[0.15em] text-blue-600 mb-2 md:mb-4 block">
            <ScrambleText text="Technologies" />
          </span>
          <h2 id="tech-heading" className="font-sans text-2xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900 mb-3 md:mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#aebcff] via-[#2546c7] to-[#09164f] md:whitespace-nowrap">
              Engineered with Modern Tech Stacks
            </span>
          </h2>
          <p className="font-sans text-xs md:text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
            Our applications are engineered using cutting-edge, secure, and scalable technologies to ensure optimal performance.
          </p>
        </div>

        {/* Categories Tabs Filter */}
        <div className="reveal-item reveal-soft reveal-delay-2 flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-6 md:mb-10 max-w-5xl mx-auto">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setTabClicked(true);
                }}
                className={`font-sans text-[11px] md:text-sm font-bold tracking-wider px-3.5 py-2 md:px-5 md:py-2.5 rounded-full border transition-all duration-300 uppercase cursor-pointer ${
                  isActive
                    ? "bg-blue-600 border-blue-600 text-white shadow-sm scale-105"
                    : "bg-white border-slate-200 text-slate-400 hover:text-slate-600 hover:border-slate-300"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Tech Logos Flex Container */}
        <div className="technologies-logo-grid flex flex-wrap items-center justify-center gap-x-4 md:gap-x-12 gap-y-3 md:gap-y-4 max-w-6xl mx-auto transition-all duration-500">
          {displayItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className={`flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105 ${
                tabClicked ? "is-visible" : ""
              }`}
              style={{ "--tech-reveal-order": index } as React.CSSProperties}
              title={item.name}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.name}
                className="h-9 md:h-16 max-w-[85px] md:max-w-[150px] w-auto object-contain grayscale-0 opacity-100"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* See More / See Less Toggle Button */}
        {activeCategory === "All" && filteredItems.length > limitCount && (
          <div className="mt-6 md:mt-10 flex justify-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 md:px-7 md:py-3 rounded-full font-sans text-xs md:text-sm font-bold tracking-wider uppercase text-blue-600 border border-blue-200 bg-blue-50/60 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer"
            >
              <span>{isExpanded ? "See Less" : "See More"}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : "group-hover:translate-y-0.5"}`} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
