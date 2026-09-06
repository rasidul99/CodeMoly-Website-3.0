"use client";

import { useEffect } from "react";

export default function NavbarScrollBehavior() {
  useEffect(() => {
    const navbar = document.querySelector<HTMLElement>(".navbar");
    if (!navbar) return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateNavbar = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;

      if (currentScrollY < 24 || delta < -6) {
        navbar.classList.remove("navbar-hidden");
      } else if (delta > 6) {
        navbar.classList.add("navbar-hidden");
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
