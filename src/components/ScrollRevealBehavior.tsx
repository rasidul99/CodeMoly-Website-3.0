"use client";

import { useEffect } from "react";

export default function ScrollRevealBehavior() {
  useEffect(() => {
    const selectors = [
      ".section-reveal",
      ".section-reveal .reveal-item",
      ".section-reveal .reveal-center",
      ".section-reveal .core-center-node",
      ".section-reveal .services-card-grid > div",
      ".section-reveal .metrics-grid > div",
      ".section-reveal .products-card-stack > div",
      ".section-reveal .benefits-grid > div",
      ".section-reveal .ai-development-grid > div",
      ".section-reveal .developer-experience-grid > div",
      ".section-reveal .technologies-logo-grid > div",
      ".section-reveal .client-review-grid > div",
      ".section-reveal .faq-list > div",
      ".section-reveal .blogs-grid > article",
      ".section-reveal .presence-grid > div",
      ".solution-reveal",
      ".solution-reveal > div"
    ];

    const staggerSelectors = [
      ".services-card-grid > div",
      ".metrics-grid > div",
      ".products-card-stack > div",
      ".benefits-grid > div",
      ".ai-development-grid > div",
      ".developer-experience-grid > div",
      ".client-review-grid > div",
      ".faq-list > div",
      ".blogs-grid > article",
      ".presence-grid > div"
    ];

    const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length === 0) return;

        // Group intersecting elements by closest .section-reveal container
        const groups = new Map<HTMLElement, HTMLElement[]>();
        visibleEntries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          const section = (el.closest(".section-reveal") as HTMLElement) || document.body;
          if (!groups.has(section)) {
            groups.set(section, []);
          }
          groups.get(section)!.push(el);
        });

        groups.forEach((groupItems) => {
          const sortedItems = [...groupItems].sort((a, b) => {
            const rectA = a.getBoundingClientRect();
            const rectB = b.getBoundingClientRect();
            if (Math.abs(rectA.top - rectB.top) < 15) {
              return rectA.left - rectB.left;
            }
            return rectA.top - rectB.top;
          });

          let staggerIndex = 0;
          sortedItems.forEach((element) => {
            const isStaggered = staggerSelectors.some((sel) => element.matches(sel));
            const hasExplicitDelay = Array.from(element.classList).some((cls) =>
              cls.startsWith("reveal-delay-")
            );

            if (isStaggered && !hasExplicitDelay) {
              element.style.transitionDelay = `${staggerIndex * 90}ms`;
              staggerIndex++;
            }

            element.classList.add("is-visible");
            observer.unobserve(element);
          });
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -60px 0px", // Only reveal when user scrolls into the section
      }
    );

    let rafId: number | null = null;
    const observeNewItems = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        const items = Array.from(document.querySelectorAll<HTMLElement>(selectors.join(", ")));
        if (prefersReducedMotion) {
          items.forEach((item) => item.classList.add("is-visible"));
        } else {
          items.forEach((item) => {
            if (!item.classList.contains("is-visible")) {
              observer.observe(item);
            }
          });
        }
        rafId = null;
      });
    };

    // Run initial observation
    observeNewItems();

    // Setup MutationObserver to watch for additions/replacements of DOM nodes
    const mutationObserver = new MutationObserver(() => {
      observeNewItems();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return null;
}
