"use client";

import React from "react";
import Link from "next/link";
import ScrambleText from "./ScrambleText";
import GridDistortion from "./GridDistortion";

// Enterprise Card Component (similar to PortfolioCard but customized)
interface EnterpriseCardProps {
  label?: string;
  title: React.ReactNode;
  description: string;
  image: string;
  gradient: string;
  borderColor: string;
  stats?: { value: string; label: string }[];
  buttons?: { label: string; primary: boolean; href?: string; isExternal?: boolean }[];
}

function EnterpriseCard({ 
  label,
  title, 
  description, 
  image, 
  gradient, 
  borderColor,
  stats,
  buttons
}: EnterpriseCardProps) {
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
          
          {/* Key Statistics widgets */}
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
              href="#contact-us"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 text-white font-semibold text-[14px] md:text-[16px] rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 w-fit cursor-pointer mt-2" 
              style={{ backgroundImage: "linear-gradient(rgb(29, 78, 216), rgb(59, 130, 246))" }}
            >
              Book a Demo
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

export function EnterpriseProductSection() {
  const imgLogisticErp = "/portfolio/logistic_erp.jpg";
  const imgRmgErp = "/portfolio/rmg_erp.jpg";
  const imgHrUpskill = "/portfolio/hr_upskill.jpg";

  return (
    <section id="enterprise-products" className="section-reveal products-reveal relative bg-[#f6f7f9] w-full py-16 md:py-24 px-5 md:px-20 text-slate-800 border-t border-slate-100" aria-label="Enterprise Products Showcase">
      {/* Subtle Background Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.18] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="reveal-item reveal-up reveal-delay-1 mb-10 md:mb-16 text-center flex flex-col items-center justify-center">
          {/* Label Text - Aligned with other sections */}
          <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-blue-600 mb-4 block">
            <ScrambleText text="OUR ENTERPRISE PRODUCTS" />
          </span>
          
          {/* Headline Text */}
          <h2 className="font-sans font-extrabold text-3xl md:text-5xl leading-tight tracking-tight text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#aebcff] via-[#2546c7] to-[#09164f]">
              Scale your operations with our enterprise solutions.
            </span>
          </h2>
        </div>

        {/* Portfolio Cards with Sticky Scrolling Effect */}
        <div className="products-card-stack flex flex-col relative gap-8 md:gap-16 lg:gap-20">
          {/* Card 1 - Logistic Management Software */}
          <div className="w-full h-auto md:h-[428px] md:sticky" style={{ top: "100px" }}>
            <EnterpriseCard 
              label="LOGISTICS & FREIGHT FORWARDING"
              title={<>Freito - Freight <br className="hidden md:inline" /> Forwarding ERP</>}
              description="Run your entire freight forwarding business from one platform. Replaces email, Excel, and WhatsApp with one connected system for quotation, booking, compliance documents, finance closeout, and tracking."
              image={imgLogisticErp}
              gradient="linear-gradient(-28.7067deg, rgb(255, 255, 255) 4.0606%, rgb(37, 99, 235) 54.775%, rgb(1, 12, 39) 78.551%, rgb(10, 10, 10) 94.761%)"
              borderColor="#2563eb"
              stats={[
                { value: "10x", label: "quoting speed" },
                { value: "100%", label: "margin visibility" },
                { value: "Zero", label: "lost documents" }
              ]}
              buttons={[
                { label: "Book a Demo", primary: true, href: "#" },
                { label: "Learn More", primary: false, href: "/products/logistic-management" }
              ]}
            />
          </div>
          
          {/* Card 2 - RMG ERP Software */}
          <div className="w-full h-auto md:h-[428px] md:sticky z-[3]" style={{ top: "160px" }}>
            <EnterpriseCard 
              label="GARMENTS & EXPORT ERP"
              title={<>CodeMoly RMG ERP - <br className="hidden md:inline" /> Garments ERP Solution</>}
              description="Run your entire export garments factory from one platform. Replaces scattered spreadsheets with one connected system for merchandising, TNA tracking, production WIP, QC, and commercial LC/bond."
              image={imgRmgErp}
              gradient="linear-gradient(153.854deg, rgb(10, 10, 10) 2.7819%, rgb(1, 12, 39) 19.322%, #b91c1c 43.583%, rgb(255, 255, 255) 95.331%)"
              borderColor="#b91c1c"
              stats={[
                { value: "26+", label: "active modules" },
                { value: "Bilingual", label: "reports & interface" },
                { value: "100%", label: "buyer compliance" }
              ]}
              buttons={[
                { label: "Book a Demo", primary: true, href: "#" },
                { label: "Learn More", primary: false, href: "/products/rmg-erp" }
              ]}
            />
          </div>
          
          {/* Card 3 - HR UpSkill Software */}
          <div className="w-full h-auto md:h-[428px] md:sticky z-[4]" style={{ top: "216px" }}>
            <EnterpriseCard 
              label="CORPORATE LMS & COMPLIANCE"
              title={<>HR UpSkill - Corporate <br className="hidden md:inline" /> Learning Platform</>}
              description="Unifies workforce training and compliance in one platform. Replaces fragmented tools with automated course delivery, AI-proctored assessments, and native line manager panels for skill audits."
              image={imgHrUpskill}
              gradient="linear-gradient(153.854deg, rgb(10, 10, 10) 2.7819%, rgb(1, 12, 39) 19.322%, #0f766e 43.583%, rgb(255, 255, 255) 95.331%)"
              borderColor="#0f766e"
              stats={[
                { value: "5 Roles", label: "access control" },
                { value: "AI-Guard", label: "proctored exams" },
                { value: "WCAG 2.1", label: "accessibility" }
              ]}
              buttons={[
                { label: "Book a Demo", primary: true, href: "#" },
                { label: "Learn More", primary: false, href: "/products/hr-upskill" }
              ]}
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default EnterpriseProductSection;
