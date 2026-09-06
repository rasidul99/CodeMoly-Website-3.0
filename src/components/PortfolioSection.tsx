"use client";

import React from "react";
import Link from "next/link";
import ScrambleText from "./ScrambleText";
import GridDistortion from "./GridDistortion";

// Portfolio Card Component
interface PortfolioCardProps {
  label?: string;
  title: React.ReactNode;
  description: string;
  image: string;
  gradient: string;
  borderColor: string;
  stats?: { value: string; label: string }[];
  buttons?: { label: string; primary: boolean; href?: string; isExternal?: boolean }[];
}

function PortfolioCard({ 
  label = "Explore Our Portfolio Of",
  title, 
  description, 
  image, 
  gradient, 
  borderColor,
  stats,
  buttons
}: PortfolioCardProps) {
  return (
    <div className="bg-white overflow-hidden relative rounded-[22px] w-full h-auto md:h-[428px] shadow-[0_15px_50px_rgba(0,0,0,0.03)] border-2" style={{ borderColor }}>
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 opacity-100" 
        style={{ backgroundImage: gradient }} 
      />
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full h-full p-6 md:p-10 gap-6 md:gap-8">
        {/* Left Content */}
        <div className="flex flex-col gap-4 md:gap-5 w-full md:w-[56%] md:max-w-[550px] text-left">
          <div className="flex flex-col gap-3">
            <p className="font-sans font-semibold leading-[21px] text-white/50 text-[12px] md:text-[14px] tracking-[1.4px] uppercase">
              {label}
            </p>
            <h3 className="font-sans font-bold leading-tight text-white text-[24px] sm:text-[28px] md:text-[30px] lg:text-[34px] tracking-[-0.64px]">
              {title}
            </h3>
            <p className="font-sans leading-[22px] text-white/80 text-[13px] md:text-[15px] tracking-[0.36px] max-w-full md:max-w-[420px]">
              {description}
            </p>
          </div>
          
          {/* Key Statistics widgets if provided */}
          {stats && stats.length > 0 && (
            <div className="flex gap-10 md:gap-14 border-t border-white/10 pt-4 mt-1">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-sans font-black text-xl md:text-2xl lg:text-3xl text-white leading-none tracking-tight">
                    {stat.value}
                  </span>
                  <span className="font-sans text-[10px] md:text-xs font-semibold tracking-wider text-white/60 uppercase mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Action buttons */}
          {buttons && buttons.length > 0 ? (
            <div className="flex flex-wrap items-center gap-3.5 mt-2">
              {buttons.map((btn, idx) => {
                const isExternal = btn.isExternal;
                const Component = btn.href ? (isExternal ? "a" : Link) : "button";
                const extraProps = btn.href
                  ? (isExternal
                    ? { href: btn.href, target: "_blank", rel: "noopener noreferrer" }
                    : { href: btn.href })
                  : {};

                return (
                  <Component
                    key={idx}
                    className={btn.primary 
                      ? "inline-flex items-center justify-center px-6 md:px-8 py-3 text-white font-semibold text-[14px] md:text-[16px] rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 w-fit cursor-pointer" 
                      : "inline-flex items-center justify-center px-6 md:px-8 py-3 text-white/90 font-semibold text-[14px] md:text-[16px] rounded-lg border border-white/20 hover:bg-white/5 transition-all duration-300 hover:scale-105 w-fit cursor-pointer bg-white/5"
                    }
                    style={btn.primary ? { backgroundImage: "linear-gradient(rgb(29, 78, 216), rgb(59, 130, 246))" } : undefined}
                    {...extraProps as any}
                  >
                    {btn.label}
                  </Component>
                );
              })}
            </div>
          ) : (
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 text-white font-semibold text-[14px] md:text-[16px] rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 w-fit cursor-pointer mt-2" 
              style={{ backgroundImage: "linear-gradient(rgb(29, 78, 216), rgb(59, 130, 246))" }}
            >
              View Case Studies
            </Link>
          )}
        </div>
        
        {/* Right Image Showcase */}
        <div className="flex items-center justify-center w-full md:w-[40%] md:max-w-[440px]">
          <div className="relative rounded-[12px] overflow-hidden w-full aspect-[16/10] md:aspect-auto md:h-[350px] shadow-2xl border border-white/10">
            <GridDistortion 
              imageSrc={image} 
              className="absolute inset-0 w-full h-full object-cover"
              grid={12}
              mouse={0.18}
              strength={0.15}
              relaxation={0.9}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function PortfolioSection() {
  const imgLogoDesign = "/portfolio/logo-design.png";
  const imgWebsiteDesign = "/portfolio/website-design.png";
  const imgTailoredSolutions = "/portfolio/tailored-solutions.png";
  const imgPosInventory = "/portfolio/pos-inventory.png";

  return (
    <section id="products" className="section-reveal products-reveal relative bg-[#0b0f19] w-full py-16 md:py-24 px-5 md:px-20 text-white border-t border-slate-900" aria-label="Portfolio Showcase">
      {/* Subtle Background Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.03] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="reveal-item reveal-left reveal-delay-1 mb-10 md:mb-16 text-left flex flex-col items-start">
          {/* Label Text - Aligned with other sections */}
          <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-blue-500 mb-4 block">
            <ScrambleText text="OUR PRODUCTS" />
          </span>
          
          {/* Headline Text */}
          <h2 className="font-sans font-extrabold text-3xl md:text-5xl leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-300">
            Explore our flagship products.
          </h2>
        </div>

        {/* Portfolio Cards with Sticky Scrolling Effect */}
        <div className="products-card-stack flex flex-col relative gap-8 md:gap-16 lg:gap-20">
          {/* Card 1 - MolyEcom */}
          <div className="w-full h-auto md:h-[428px] md:sticky" style={{ top: "100px" }}>
            <PortfolioCard 
              label="E-COMMERCE PLATFORM"
              title={<>MolyEcom - AI-Powered <br className="hidden md:inline" /> E-commerce Platform</>}
              description="Complete e-commerce solution with AI-driven product recommendations, automated inventory management, and intelligent customer analytics for maximum sales conversion."
              image={imgLogoDesign}
              gradient="linear-gradient(-28.7067deg, rgb(255, 255, 255) 4.0606%, rgb(109, 40, 217) 54.775%, rgb(1, 12, 39) 78.551%, rgb(10, 10, 10) 94.761%)"
              borderColor="#7C3AED"
              stats={[
                { value: "500+", label: "stores" },
                { value: "+180%", label: "revenue" },
                { value: "35%", label: "conversion" }
              ]}
              buttons={[
                { label: "View Demo", primary: true, href: "https://molyecom.com/", isExternal: true },
                { label: "Learn More", primary: false, href: "/products/molyecom" }
              ]}
            />
          </div>
          
          {/* Card 2 - MolyLearn */}
          <div className="w-full h-auto md:h-[428px] md:sticky z-[3]" style={{ top: "160px" }}>
            <PortfolioCard 
              label="LEARNING MANAGEMENT"
              title={<>MolyLearn - <br className="hidden md:inline" /> Smart LMS Platform</>}
              description="Intelligent learning management system with AI-powered course creation, personalized learning paths, and advanced analytics for enhanced educational outcomes."
              image={imgWebsiteDesign}
              gradient="linear-gradient(153.854deg, rgb(10, 10, 10) 2.7819%, rgb(1, 12, 39) 19.322%, rgb(155, 85, 31) 43.583%, rgb(255, 255, 255) 95.331%)"
              borderColor="rgba(178,82,17,0.8)"
              stats={[
                { value: "50K+", label: "students" },
                { value: "89%", label: "completion" },
                { value: "4.8/5", label: "satisfaction" }
              ]}
              buttons={[
                { label: "View Demo", primary: true, href: "https://molylearn.codemoly.io/", isExternal: true },
                { label: "Learn More", primary: false, href: "/products/molylearn" }
              ]}
            />
          </div>
          
          {/* Card 3 - MolyFlow */}
          <div className="w-full h-auto md:h-[428px] md:sticky z-[4]" style={{ top: "216px" }}>
            <PortfolioCard 
              label="CRM AUTOMATION"
              title={<>MolyFlow - <br className="hidden md:inline" /> CRM Automation System</>}
              description="Comprehensive CRM solution with intelligent lead management, automated sales workflows, and AI-powered customer insights for enhanced relationship management."
              image={imgTailoredSolutions}
              gradient="linear-gradient(153.854deg, rgb(10, 10, 10) 2.7819%, rgb(1, 12, 39) 19.322%, #0e9abb 43.583%, rgb(255, 255, 255) 95.331%)"
              borderColor="#0e9abb"
              stats={[
                { value: "25K+", label: "leads" },
                { value: "90%", label: "automation" },
                { value: "42%", label: "conversion" }
              ]}
              buttons={[
                { label: "View Demo", primary: true, href: "#" },
                { label: "Learn More", primary: false, href: "/products/molyflow" }
              ]}
            />
          </div>

          {/* Card 4 - Bebsadar */}
          <div className="w-full h-auto md:h-[428px] md:sticky z-[5]" style={{ top: "268px" }}>
            <PortfolioCard 
              label="POS & INVENTORY"
              title={<>Bebsadar - POS and <br className="hidden md:inline" /> Inventory Management System</>}
              description="Advanced point-of-sale and inventory management solution with real-time stock tracking, automated reordering, and comprehensive sales analytics for retail businesses."
              image={imgPosInventory}
              gradient="linear-gradient(153.854deg, rgb(10, 10, 10) 2.7819%, rgb(1, 12, 39) 19.322%, #10b981 43.583%, rgb(255, 255, 255) 95.331%)"
              borderColor="#10b981"
              stats={[
                { value: "24/7", label: "uptime" },
                { value: "99.8%", label: "accuracy" },
                { value: "1M+", label: "transactions" }
              ]}
              buttons={[
                { label: "View Demo", primary: true, href: "https://bebshadar.com/", isExternal: true },
                { label: "Learn More", primary: false, href: "/products/bebsadar" }
              ]}
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default PortfolioSection;
