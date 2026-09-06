"use client";

import { useEffect } from "react";

export default function SidebarController() {
  useEffect(() => {
    // 1. Restore collapsed state from localStorage
    const isCollapsed = localStorage.getItem("sidebar-collapsed") === "true";
    if (isCollapsed) {
      document.body.classList.add("sidebar-collapsed");
    }

    // 2. Function to inject custom header
    const injectHeader = () => {
      const navScroll = document.querySelector(".nav__scroll");
      if (!navScroll) return;

      // Check if already injected
      let header = document.querySelector(".custom-sidebar-header");
      if (!header) {
        header = document.createElement("div");
        header.className = "custom-sidebar-header";

        // Create Collapse Button
        const toggleBtn = document.createElement("button");
        toggleBtn.className = "custom-collapse-btn";
        toggleBtn.setAttribute("aria-label", "Toggle Sidebar");
        toggleBtn.setAttribute("title", "Collapse Sidebar");
        toggleBtn.innerHTML = `
          <svg class="collapse-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        `;

        // Create Logo container
        const logoContainer = document.createElement("div");
        logoContainer.className = "custom-logo-container";
        logoContainer.setAttribute("title", "CodeMoly Dashboard");
        
        const logoImg = document.createElement("div");
        logoImg.className = "custom-sidebar-logo";
        logoContainer.appendChild(logoImg);

        // Insert elements
        header.appendChild(toggleBtn);
        header.appendChild(logoContainer);

        // Insert at the very top of navScroll
        navScroll.insertBefore(header, navScroll.firstChild);

        // Toggle Sidebar Function
        const toggleSidebar = () => {
          const collapsed = document.body.classList.toggle("sidebar-collapsed");
          localStorage.setItem("sidebar-collapsed", String(collapsed));
          
          // Update titles
          if (collapsed) {
            logoContainer.setAttribute("title", "Expand Sidebar");
          } else {
            logoContainer.setAttribute("title", "CodeMoly Dashboard");
          }
        };

        // Event listeners
        toggleBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          toggleSidebar();
        });

        logoContainer.addEventListener("click", (e) => {
          if (document.body.classList.contains("sidebar-collapsed")) {
            e.stopPropagation();
            toggleSidebar();
          }
        });
      }

      // Update titles based on current body class
      const currentCollapsed = document.body.classList.contains("sidebar-collapsed");
      const logoContainer = header.querySelector(".custom-logo-container");
      if (logoContainer) {
        logoContainer.setAttribute("title", currentCollapsed ? "Expand Sidebar" : "CodeMoly Dashboard");
      }
    };

    injectHeader();

    // Observe changes to the DOM to re-inject if Payload navigation re-renders
    const observer = new MutationObserver(() => {
      injectHeader();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
