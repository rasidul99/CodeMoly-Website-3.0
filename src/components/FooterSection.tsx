"use client";

import React from "react";
import Ballpit from "./Ballpit";

/* ─── Nav Data ─────────────────────────────────────────────────────────── */
const NAV = [
  {
    heading: "Services",
    links: [
      { label: "Web Development", href: "#" },
      { label: "Mobile Apps", href: "#" },
      { label: "AI Solutions", href: "#" },
      { label: "Ecommerce Automation", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Career", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Delivery Policy", href: "#" },
    ],
  },
];

/* ─── Office Data ───────────────────────────────────────────────────────── */
const OFFICES = [
  {
    flag: "/bd-flag.svg",
    country: "Bangladesh",
    city: "Dhaka",
    tag: "HQ — APAC",
    address: "14/1 BTI Emporium Tower, Mirpur Road, Shyamoli, Dhaka",
    phone: "+01894 955 494",
    email: "hello@codemoly.com",
  },
  {
    flag: "/fr-flag.svg",
    country: "France",
    city: "Paris",
    tag: "EU Product Hub",
    address: "78 Avenue des Champs-Élysées, 75008 Paris",
    phone: "+33 743 579 692",
    email: "hello@codemoly.com",
  },
  {
    flag: "/at-flag.svg",
    country: "Austria",
    city: "Vienna",
    tag: "Engineering",
    address: "Sonnwendgasse 30/2/11, 1100 Wien",
    phone: "+43 664 875 8864",
    email: "hello@codemoly.com",
  },
];

/* ─── Social Icons ──────────────────────────────────────────────────────── */
const TwitterX = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.254 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const Facebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const Instagram = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);



/* ─── Email Icon ────────────────────────────────────────────────────────── */
const MailIcon = () => (
  <svg className="w-3.5 h-3.5 shrink-0 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-3.5 h-3.5 shrink-0 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498A1 1 0 0 1 21 16.72V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const PinIcon = () => (
  <svg className="w-3.5 h-3.5 shrink-0 text-blue-400 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

/* ══════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════════════════════ */
export default function FooterSection() {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    setIsDesktop(media.matches);
    
    const listener = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <footer className="section-reveal footer-reveal relative w-full bg-[#09102a] text-white overflow-hidden" aria-label="Site footer">

      {/* Interactive Ballpit Background */}
      {isDesktop && (
        <div className="hidden md:block" style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.45, pointerEvents: "none" }}>
          <Ballpit
            count={60}
            gravity={0.08}
            friction={0.995}
            wallBounce={0.95}
            followCursor={true}
            colors={["#133bc9", "#3b82f6", "#1e40af", "#60a5fa"]}
            minSize={0.12}
            maxSize={0.32}
          />
        </div>
      )}

      {/* ── Top Nav Band ─────────────────────────────────────────────────── */}
      <div className="relative z-10">
        <div className="footer-container-aligned py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

          {/* Brand Column — spans 2 cols on lg */}
          <div className="reveal-item reveal-up lg:col-span-2 lg:row-span-2 flex flex-col gap-6">
            {/* Logo — same as navbar */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/CodeMoly White Logo.svg"
              alt="CodeMoly"
              className="h-[22px] w-auto select-none self-start block"
            />

            {/* Tagline */}
            <p className="font-sans text-sm leading-relaxed text-white/50 max-w-xs">
              Empowering developers to build amazing applications with cutting-edge tools and technologies.
            </p>

            {/* Contact Details */}
            <ul className="flex flex-col gap-3 mt-1">
              <li className="flex items-center gap-2.5">
                <MailIcon />
                <a
                  href="mailto:hello@codemoly.com"
                  className="font-sans text-sm text-white/60 hover:text-blue-400 transition-colors duration-200"
                >
                  hello@codemoly.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneIcon />
                <a
                  href="tel:+01894955494"
                  className="font-sans text-sm text-white/60 hover:text-blue-400 transition-colors duration-200"
                >
                  +01894 955 494
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <PinIcon />
                <span className="font-sans text-sm text-white/60 leading-relaxed">
                  A-5, 14/1, The Emporium Tower,<br />Mirpur Road, Shyamoli, Dhaka
                </span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-2 mt-2 lg:mt-auto">
              {[
                { Icon: Facebook, label: "Facebook", href: "#" },
                { Icon: LinkedIn, label: "LinkedIn", href: "#" },
                { Icon: TwitterX, label: "X (Twitter)", href: "#" },
                { Icon: Instagram, label: "Instagram", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/[0.06] transition-all duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Columns */}
          {NAV.map((col, idx) => (
            <div key={col.heading} className={`reveal-item reveal-up reveal-delay-${idx + 1} flex flex-col gap-5`}>
              <h3 className="font-sans text-[11px] font-extrabold uppercase tracking-[0.18em] text-white">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-sans text-sm text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA Card Column — spans 3 cols on lg, starts at col 3 */}
          <div className="reveal-item reveal-up reveal-delay-3 lg:col-span-3 flex flex-col justify-end mt-4 lg:mt-6">
            <div className="relative -top-[10px] overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] py-4 px-6 md:py-5 md:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 group hover:border-blue-500/30 transition-all duration-300">
              
              {/* Glow backdrop effect */}
              <div 
                className="absolute right-[-10%] top-[-20%] w-[180px] h-[180px] rounded-full bg-blue-500/10 blur-[45px] pointer-events-none group-hover:scale-110 transition-transform duration-700" 
                style={{
                  background: "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.1) 0%, transparent 70%)"
                }}
              />
              
              <div className="flex flex-col max-w-md relative z-10">
                <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-blue-400">
                  AI Development Platform
                </span>
                <h4 className="font-sans text-base md:text-lg font-extrabold text-white mt-1 leading-tight">
                  Ready to build 10X faster?
                </h4>
              </div>

              <div className="cta-contact-wrapper relative z-10 shrink-0 self-start sm:self-center">
                <a
                  href="#"
                  className="cta-contact cta-contact-wide inline-flex items-center gap-2 whitespace-nowrap"
                >
                  <span>Start Building Today</span>
                  <ArrowIcon />
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ── Giant Wordmark ───────────────────────────────────────────────── */}
      <div
        className="relative z-10 w-full overflow-hidden select-none"
        aria-hidden="true"
      >
        <div className="footer-container-aligned">
          <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={(e) => {
              if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setMousePos({
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top,
                });
              }
              setIsHovered(true);
            }}
            onMouseLeave={() => setIsHovered(false)}
            className="reveal-item reveal-up reveal-delay-3 relative cursor-default"
          >
            {/* Faint Base Logo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/CodeMoly White text Logo.svg"
              alt="CodeMoly"
              className="w-full h-auto opacity-[0.06] select-none block"
            />

            {/* Hover Reveal Logo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/CodeMoly White text Logo.svg"
              alt="CodeMoly"
              className="absolute top-0 left-0 w-full h-auto select-none pointer-events-none block"
              style={{
                maskImage: `radial-gradient(circle 180px at ${mousePos.x}px ${mousePos.y}px, black 0%, rgba(0,0,0,0.8) 25%, transparent 100%)`,
                WebkitMaskImage: `radial-gradient(circle 180px at ${mousePos.x}px ${mousePos.y}px, black 0%, rgba(0,0,0,0.8) 25%, transparent 100%)`,
                opacity: isHovered ? 1 : 0,
                transition: "opacity 0.4s ease",
              }}
            />
          </div>
        </div>
      </div>

      {/* ── Our Presence Band ────────────────────────────────────────────── */}
      <div className="relative z-10">
        <div className="footer-container-aligned pb-14 md:pb-16 pt-0">



          {/* Office Presence Card Box */}
          <div className="reveal-item reveal-up reveal-delay-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] overflow-hidden">
            <div className="presence-grid grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
              {OFFICES.map((office) => (
                <div
                  key={office.city}
                  className="group relative p-6 sm:p-8 hover:bg-white/[0.02] transition-all duration-300 cursor-default flex flex-col gap-5"
                >
                  {/* Subtle glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.04) 0%, transparent 70%)"
                    }}
                  />

                  {/* Header */}
                  <div className="relative z-10 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={office.flag}
                        alt={`${office.country} Flag`}
                        className="w-[54px] h-[36px] object-cover rounded-[4px] select-none border border-white/10 shrink-0"
                      />
                      <div>
                        <p className="font-sans text-base font-extrabold text-white leading-tight">
                          {office.city}
                        </p>
                        <p className="font-sans text-xs text-white/50 mt-1">
                          {office.country}
                        </p>
                      </div>
                    </div>
                    <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-400/10 border border-blue-400/20 px-2.5 py-1 rounded-full shrink-0">
                      {office.tag}
                    </span>
                  </div>

                  {/* Details */}
                  <ul className="relative z-10 flex flex-col gap-3">
                    <li className="flex items-start gap-2.5">
                      <PinIcon />
                      <span className="font-sans text-xs text-white/50 leading-relaxed">
                        {office.address}
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <PhoneIcon />
                      <a
                        href={`tel:${office.phone.replace(/\s/g, "")}`}
                        className="font-sans text-xs text-white/60 hover:text-blue-400 transition-colors duration-200"
                      >
                        {office.phone}
                      </a>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <MailIcon />
                      <a
                        href={`mailto:${office.email}`}
                        className="font-sans text-xs text-white/60 hover:text-blue-400 transition-colors duration-200"
                      >
                        {office.email}
                      </a>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Copyright Bar ────────────────────────────────────────────────── */}
      <div className="relative z-10 border-t border-white/[0.07]">
        <div className="footer-container-aligned py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/30">
            © 2026 CodeMoly. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-5 sm:gap-6">
            <div className="flex items-center gap-5">
              {["Privacy Policy", "Terms of Service", "Delivery Policy"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-sans text-xs text-white/30 hover:text-white/70 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Back to Top Button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-blue-600 hover:border-blue-500 hover:text-white text-white/70 font-sans text-xs font-semibold transition-all duration-300 shadow-sm cursor-pointer group shrink-0"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}
