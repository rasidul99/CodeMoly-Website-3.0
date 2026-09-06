"use client";

import { useEffect } from "react";

export default function ScrollRevealBehavior() {
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      document.querySelectorAll(".section-reveal, .solution-reveal").forEach((el) => {
        el.classList.add("is-visible");
      });
      return;
    }

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(".section-reveal, .solution-reveal, section[id]")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target as HTMLElement;
            section.classList.add("is-visible");

            // Also mark inner reveal items with stagger
            const childItems = Array.from(
              section.querySelectorAll<HTMLElement>(
                ".reveal-item, .services-card-grid > div, .metrics-grid > div, .products-card-stack > div, .benefits-grid > div, .ai-development-grid > div, .developer-experience-grid > div, .technologies-logo-grid > div, .client-review-grid > div, .faq-list > div, .blogs-grid > article, .presence-grid > div"
              )
            );

            childItems.forEach((child, index) => {
              child.style.transitionDelay = `${index * 80}ms`;
              child.classList.add("is-visible");
            });

            // Unobserve so section stays revealed after first entrance
            observer.unobserve(section);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -80px 0px", // Triggers only when section is genuinely scrolled into view
      }
    );

    sections.forEach((sec) => {
      // Ensure hero (first section) is visible immediately if at top of page
      const rect = sec.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight * 0.7) {
        sec.classList.add("is-visible");
        const children = sec.querySelectorAll<HTMLElement>(
          ".reveal-item, .services-card-grid > div, .metrics-grid > div, .products-card-stack > div"
        );
        children.forEach((c) => c.classList.add("is-visible"));
      } else {
        observer.observe(sec);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
