"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavigationItem {
  label: string;
  link: string;
}

interface NavbarProps {
  navigation: NavigationItem[];
  logoUrl?: string | null;
  logoAlt?: string;
  logoTranslateY?: number;
  ctaLabel?: string;
  ctaLink?: string;
  showCta?: boolean;
  mobileMenuFooter?: string;
}

export default function Navbar({
  navigation,
  logoUrl,
  logoAlt = "CodeMoly",
  logoTranslateY = 2,
  ctaLabel = "Start a project",
  ctaLink = "#",
  showCta = true,
  mobileMenuFooter = "CODEMOLY AI LABS",
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="navbar" aria-label="Primary navigation">
        {/* Left side: Hamburger (mobile only) + Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 text-white transition-all active:scale-95 md:hidden cursor-pointer"
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <div className="hidden md:block">
            <a className="brand flex-shrink-0" href="/" aria-label="CodeMoly home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoUrl || "/CodeMoly White Logo.svg"}
                alt={logoAlt}
                className="h-[20px] w-auto select-none pointer-events-none flex-shrink-0"
                style={{ transform: `translateY(${logoTranslateY}px)` }}
              />
            </a>
          </div>
        </div>

        {/* Desktop nav links */}
        <div className="nav-links">
          {navigation.map((item, idx) => (
            <a
              key={idx}
              href={item.link && item.link.startsWith("#") ? (item.link === "#" ? "/" : `/${item.link}`) : (item.link || "/")}
              className="font-medium text-white/90 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Actions wrapper */}
        {showCta && (
          <div className="nav-actions flex items-center gap-4">
            <div className="cta-contact-wrapper">
              <a
                href={ctaLink}
                className="cta-contact"
                style={{ width: "190px", height: "44px", fontSize: "12px", letterSpacing: "1.5px" }}
              >
                {ctaLabel}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu Side Drawer Overlay */}
      <div
        className={`fixed inset-0 z-[100] md:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Translucent backdrop overlay on the right */}
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        />

        {/* Left Side Drawer Content (Covers ~70% width on left, right side empty) */}
        <div
          className={`relative z-10 w-[70vw] max-w-[320px] h-full bg-[#09102a]/95 backdrop-blur-2xl border-r border-white/10 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            <a className="brand" href="/" onClick={() => setIsOpen(false)} aria-label="CodeMoly home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoUrl || "/CodeMoly White Logo.svg"}
                alt={logoAlt}
                className="h-[18px] w-auto select-none pointer-events-none"
              />
            </a>
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 text-white transition-all active:scale-95 cursor-pointer"
              aria-label="Close navigation menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 flex flex-col justify-center items-start gap-6 p-6 overflow-y-auto">
            <div className="flex flex-col items-start gap-2.5 w-full">
              {navigation.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link && item.link.startsWith("#") ? (item.link === "#" ? "/" : `/${item.link}`) : (item.link || "/")}
                  onClick={() => setIsOpen(false)}
                  className="w-full text-left font-sans text-base font-bold transition-all duration-200 py-2 px-4 rounded-xl text-white/80 hover:text-white hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {showCta && (
              <div className="cta-contact-wrapper w-full mt-4">
                <a
                  href={ctaLink}
                  onClick={() => setIsOpen(false)}
                  className="cta-contact w-full text-center"
                  style={{ height: "46px", fontSize: "12px", letterSpacing: "1.5px" }}
                >
                  {ctaLabel}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
