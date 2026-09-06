"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Plus, Search, Edit3, Trash2, ExternalLink, 
  Sparkles, CheckCircle2, ShieldAlert, Image as ImageIcon,
  Layers, BarChart2, Globe, Eye, EyeOff
} from "lucide-react";

interface MediaDoc {
  id: string;
  filename: string;
  url: string;
  alt: string;
}

interface PartnerLogoDoc {
  id: string;
  name: string;
  image?: string | MediaDoc | null;
  hidden?: boolean;
  updatedAt: string;
  createdAt: string;
}

const fallbackPartners = [
  { name: "Stripe" },
  { name: "Figma" },
  { name: "Shopify" },
  { name: "Vercel" },
  { name: "HubSpot" },
  { name: "Airbnb" },
  { name: "Notion" },
  { name: "Loom" },
  { name: "Linear" },
  { name: "Framer" }
];

const brandSlugs: Record<string, string> = {
  stripe: "stripe",
  figma: "figma",
  shopify: "shopify",
  vercel: "vercel",
  hubspot: "hubspot",
  airbnb: "airbnb",
  notion: "notion",
  loom: "loom",
  linear: "linear",
  framer: "framer"
};

export default function CustomPartnerLogosList() {
  const [logos, setLogos] = useState<PartnerLogoDoc[]>([]);
  const [mediaMap, setMediaMap] = useState<Record<string, MediaDoc>>({});
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [initializing, setInitializing] = useState(false);
  const [toast, setToast] = useState<{ show: boolean; message: string; type: "success" | "error" }>({
    show: false,
    message: "",
    type: "success"
  });

  // 1. Fetch logos and media lookup map
  const fetchLogos = async () => {
    try {
      const res = await fetch("/api/partner-logos?limit=100&depth=1");
      if (res.ok) {
        const data = await res.json();
        setLogos(data.docs || []);
      }
    } catch (err) {
      console.error("Failed to fetch partner logos:", err);
      showToast("Error loading partner logos.", "error");
    }
  };

  const fetchMedia = async () => {
    try {
      const res = await fetch("/api/media?limit=100");
      if (res.ok) {
        const data = await res.json();
        const map: Record<string, MediaDoc> = {};
        (data.docs || []).forEach((m: MediaDoc) => {
          map[m.id] = m;
        });
        setMediaMap(map);
      }
    } catch (err) {
      console.error("Failed to fetch media map:", err);
    }
  };

  useEffect(() => {
    const initData = async () => {
      setLoading(true);
      await Promise.all([fetchLogos(), fetchMedia()]);
      setLoading(false);
    };
    initData();
  }, []);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 4000);
  };

  // 2. Initialize defaults if database empty
  const initializeDefaultLogos = async () => {
    setInitializing(true);
    try {
      // Create logos sequentially to avoid sqlite write lock issues
      for (const item of fallbackPartners) {
        const res = await fetch("/api/partner-logos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: item.name
          })
        });
        if (!res.ok) {
          console.error(`Failed to create logo for ${item.name}`);
        }
      }
      showToast("Default logos initialized successfully!", "success");
      await fetchLogos();
    } catch (err) {
      console.error("Seeding error:", err);
      showToast("Failed to seed default logos.", "error");
    } finally {
      setInitializing(false);
    }
  };

  // 3. Delete logo handler
  const handleDelete = async (id: string, name: string) => {
    if (!window.confirm(`Are you sure you want to delete the logo for "${name}"?`)) {
      return;
    }
    
    setDeletingId(id);
    try {
      const res = await fetch(`/api/partner-logos/${id}`, {
        method: "DELETE"
      });
      if (res.ok) {
        showToast(`"${name}" logo deleted successfully!`, "success");
        setLogos(prev => prev.filter(logo => logo.id !== id));
      } else {
        showToast(`Failed to delete logo.`, "error");
      }
    } catch (err) {
      console.error("Delete error:", err);
      showToast("Error connecting to server API.", "error");
    } finally {
      setDeletingId(null);
    }
  };

  // Toggle hide/show logo handler
  const handleToggleHide = async (id: string, name: string, newHiddenState: boolean) => {
    try {
      const res = await fetch(`/api/partner-logos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          hidden: newHiddenState
        })
      });
      if (res.ok) {
        showToast(`"${name}" is now ${newHiddenState ? "hidden from" : "visible on"} the homepage ticker.`, "success");
        setLogos(prev => prev.map(l => l.id === id ? { ...l, hidden: newHiddenState } : l));
      } else {
        showToast(`Failed to update logo status.`, "error");
      }
    } catch (err) {
      console.error("Toggle hide error:", err);
      showToast("Error connecting to server API.", "error");
    }
  };

  // 4. Logo resolver (uploaded media URL -> SimpleIcons fallback -> text representation)
  const getLogoImageSource = (logo: PartnerLogoDoc) => {
    // Check if image is standard populated object
    if (logo.image && typeof logo.image === "object" && "url" in logo.image) {
      return logo.image.url;
    }
    // Check if image is an ID and look it up in mediaMap
    if (logo.image && typeof logo.image === "string" && mediaMap[logo.image]) {
      return mediaMap[logo.image].url;
    }
    
    // Check if it matches fallback SimpleIcons slug
    const normalized = logo.name.toLowerCase();
    for (const [key, slug] of Object.entries(brandSlugs)) {
      if (normalized.includes(key)) {
        return `https://cdn.simpleicons.org/${slug}`;
      }
    }

    return null;
  };

  const filteredLogos = logos.filter(logo => 
    logo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };

  return (
    <div className="vault-logos-wrapper">
      {/* Dynamic Scoped CSS Styles for White Bento Grid UI */}
      <style dangerouslySetInnerHTML={{ __html: `
        .vault-logos-wrapper {
          background-color: #f4f6fa;
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          padding: 24px 32px 40px 32px;
          color: #1e293b;
        }

        /* Bento Header Card */
        .bento-header-card {
          background: #ffffff !important;
          border-radius: 24px !important;
          border: 1px solid rgba(0, 0, 0, 0.05) !important;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.01), 0 10px 30px -10px rgba(0, 0, 0, 0.03) !important;
          padding: 24px 32px !important;
          display: flex !important;
          justify-content: space-between !important;
          align-items: center !important;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, border-color 0.3s ease !important;
          margin-bottom: 24px !important;
          width: 100% !important;
          box-sizing: border-box !important;
        }

        .bento-header-card:hover {
          transform: translateY(-4px) scale(1.002) !important;
          box-shadow: 0 20px 40px -15px rgba(19, 59, 201, 0.08) !important;
          border-color: rgba(19, 59, 201, 0.15) !important;
        }

        .bento-header-left {
          display: flex !important;
          flex-direction: column !important;
          gap: 4px !important;
          text-align: left !important;
        }

        .bento-breadcrumb {
          display: flex !important;
          align-items: center !important;
          gap: 6px !important;
          font-size: 11px !important;
          color: #94a3b8 !important;
          font-weight: 700 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.05em !important;
          margin-bottom: 2px !important;
        }

        .bento-breadcrumb .folder-icon {
          font-size: 12px !important;
          filter: grayscale(1) opacity(0.7) !important;
        }

        .bento-breadcrumb .separator {
          color: #cbd5e1 !important;
          margin: 0 2px !important;
        }

        .bento-breadcrumb .crumb.active {
          color: #133bc9 !important;
        }

        .bento-header-title {
          font-size: 26px !important;
          font-weight: 850 !important;
          color: #0f172a !important;
          margin: 0 !important;
          letter-spacing: -0.02em !important;
          font-family: 'Sora', sans-serif !important;
        }

        .bento-header-desc {
          font-size: 13px !important;
          color: #64748b !important;
          margin: 0 !important;
          font-weight: 500 !important;
        }

        .bento-header-right {
          display: flex !important;
          align-items: center !important;
          gap: 16px !important;
        }

        .bento-search-container {
          position: relative !important;
          width: 260px !important;
        }

        .bento-search-container input[type="text"] {
          width: 100% !important;
          background: #f8fafc !important;
          border: 1px solid rgba(0, 0, 0, 0.05) !important;
          border-radius: 9999px !important;
          padding: 9px 16px 9px 40px !important;
          font-size: 13px !important;
          color: #0f172a !important;
          outline: none !important;
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.02) !important;
          transition: all 0.2s ease !important;
          font-family: 'Inter', sans-serif !important;
        }

        .bento-search-container input[type="text"]:focus {
          border-color: #133bc9 !important;
          background: #ffffff !important;
          box-shadow: 0 4px 12px rgba(19, 59, 201, 0.08) !important;
        }

        .bento-search-icon {
          position: absolute !important;
          left: 14px !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          color: #94a3b8 !important;
          width: 16px !important;
          height: 16px !important;
        }

        .btn-create-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #133bc9 0%, #3b82f6 100%);
          color: #ffffff;
          border: none;
          padding: 10px 20px;
          border-radius: 9999px;
          font-size: 13.5px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 12px rgba(19, 59, 201, 0.25);
          text-decoration: none;
        }

        .btn-create-logo:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(19, 59, 201, 0.35);
          color: #ffffff !important;
        }

        /* Bento Grid */
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 24px;
        }

        .bento-card {
          background: #ffffff;
          border-radius: 24px;
          border: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.01), 0 10px 30px -10px rgba(0, 0, 0, 0.03);
          padding: 24px;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, border-color 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .bento-card:hover {
          transform: translateY(-6px) scale(1.005);
          box-shadow: 0 20px 40px -15px rgba(19, 59, 201, 0.08);
          border-color: rgba(19, 59, 201, 0.15);
        }

        .col-4 { grid-column: span 4; }
        .col-12 { grid-column: span 12; }

        @media (max-width: 1024px) {
          .col-4 { grid-column: span 6; }
        }
        @media (max-width: 640px) {
          .col-4 { grid-column: span 12; }
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 9999px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .status-badge.published {
          background-color: rgba(16, 185, 129, 0.1);
          color: #10b981;
        }

        .status-badge.draft {
          background-color: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: currentColor;
        }

        /* Stats Card Specific */
        .stats-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
        }

        .stat-item {
          text-align: left;
        }

        .stat-number {
          font-size: 38px;
          font-weight: 850;
          color: #0f172a;
          line-height: 1;
          margin-bottom: 6px;
        }

        .stat-label {
          font-size: 13px;
          color: #64748b;
          font-weight: 600;
        }

        .stat-divider {
          width: 1px;
          height: 50px;
          background-color: rgba(0, 0, 0, 0.05);
        }

        /* Logo Card Specific */
        .logo-preview-box {
          width: 100%;
          height: 100px;
          background-color: #f8fafc;
          border-radius: 16px;
          border: 1px solid rgba(0, 0, 0, 0.03);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          overflow: hidden;
          padding: 16px;
          position: relative;
        }

        .logo-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .bento-card:hover .logo-img {
          transform: scale(1.06);
        }

        .logo-text-fallback {
          font-size: 20px;
          font-weight: 800;
          color: #09164f;
          letter-spacing: -0.02em;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }

        .logo-title {
          font-size: 16px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 4px 0;
          letter-spacing: -0.01em;
        }

        .logo-meta {
          font-size: 11.5px;
          color: #94a3b8;
          font-weight: 600;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        .logo-card-actions {
          display: flex;
          gap: 10px;
          margin-top: auto;
        }

        .action-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px 12px;
          font-size: 12.5px;
          font-weight: 700;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
          border: 1px solid rgba(0, 0, 0, 0.06);
        }

        .action-btn.edit-btn {
          background-color: #f8fafc;
          color: #0f172a;
        }

        .action-btn.edit-btn:hover {
          background-color: #f1f5f9;
          border-color: rgba(0, 0, 0, 0.1);
        }

        .action-btn.delete-btn {
          background-color: #ffffff;
          color: #ef4444;
          border-color: rgba(239, 68, 68, 0.15);
        }

        .action-btn.delete-btn:hover {
          background-color: rgba(239, 68, 68, 0.03);
          border-color: rgba(239, 68, 68, 0.25);
        }

        /* Create Logo Bento CTA Card */
        .create-card-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          text-align: center;
          padding: 20px;
          border: 2px dashed rgba(19, 59, 201, 0.15);
          border-radius: 20px;
          transition: all 0.3s ease;
          cursor: pointer;
          min-height: 180px;
        }

        .bento-card:hover .create-card-inner {
          border-color: #133bc9;
          background-color: rgba(19, 59, 201, 0.01);
        }

        .create-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(19, 59, 201, 0.05);
          color: #133bc9;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          transition: all 0.3s ease;
        }

        .bento-card:hover .create-icon-wrapper {
          background: #133bc9;
          color: #ffffff;
          transform: scale(1.1);
        }

        .create-card-title {
          font-size: 15px;
          font-weight: 750;
          color: #0f172a;
          margin-bottom: 4px;
        }

        .create-card-sub {
          font-size: 12px;
          color: #64748b;
        }

        /* Empty state & onboarding */
        .onboarding-card {
          text-align: center !important;
          padding: 40px !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
          background-color: #ffffff !important;
          min-height: 250px;
        }

        .onboarding-icon {
          width: 48px !important;
          height: 48px !important;
          color: #133bc9 !important;
          margin-bottom: 16px !important;
          animation: bounce 2s infinite !important;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        .onboarding-title {
          font-size: 18px !important;
          font-weight: 850 !important;
          color: #0f172a !important;
          margin-bottom: 8px !important;
          font-family: 'Sora', sans-serif !important;
        }

        .onboarding-desc {
          font-size: 13.5px !important;
          color: #64748b !important;
          max-width: 380px !important;
          margin-bottom: 24px !important;
          line-height: 1.6 !important;
        }

        .btn-initialize {
          background: linear-gradient(135deg, #133bc9 0%, #3b82f6 100%) !important;
          color: #ffffff !important;
          border: none !important;
          padding: 12px 24px !important;
          border-radius: 9999px !important;
          font-size: 13.5px !important;
          font-weight: 700 !important;
          cursor: pointer !important;
          box-shadow: 0 4px 12px rgba(19, 59, 201, 0.2) !important;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
        }

        .btn-initialize:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 18px rgba(19, 59, 201, 0.3) !important;
        }

        .btn-initialize:disabled {
          opacity: 0.6 !important;
          cursor: not-allowed !important;
          transform: none !important;
          box-shadow: none !important;
        }

        .empty-state-card {
          text-align: center;
          padding: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .empty-icon {
          width: 56px;
          height: 56px;
          color: #94a3b8;
          margin-bottom: 16px;
        }

        .empty-title {
          font-size: 16px;
          font-weight: 750;
          color: #334155;
          margin-bottom: 6px;
        }

        .empty-desc {
          font-size: 13px;
          color: #64748b;
          max-width: 280px;
          margin-bottom: 20px;
          line-height: 1.5;
        }

        /* Toast notifications */
        .toast-notification {
          position: fixed;
          bottom: 24px;
          right: 24px;
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1);
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 9999;
          transform: translateY(120px);
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .toast-notification.show {
          transform: translateY(0);
          opacity: 1;
        }

        .toast-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
        }

        .toast-icon.success {
          color: #10b981;
        }

        .toast-icon.error {
          color: #ef4444;
        }

        .toast-text {
          font-size: 13.5px;
          font-weight: 650;
          color: #1e293b;
        }
      ` }} />

      {/* Bento Header Card */}
      <div className="bento-header-card">
        <div className="bento-header-left">
          <div className="bento-breadcrumb">
            <span className="folder-icon">📁</span>
            <span className="crumb">Partner Logos</span>
            <span className="separator">/</span>
            <span className="crumb active">Directory</span>
          </div>
          <h1 className="bento-header-title">Partner Logos</h1>
          <p className="bento-header-desc">Manage brand logos rendered in the scrolling ticker on the home page hero section</p>
        </div>
        <div className="bento-header-right">
          <div className="bento-search-container">
            <Search className="bento-search-icon" />
            <input 
              type="text" 
              placeholder="Search by name..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Link href="/admin/collections/partner-logos/create" className="btn-create-logo">
            <Plus width={16} height={16} />
            Create Logo
          </Link>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="bento-grid">
        
        {/* Stats Card */}
        <div className="bento-card col-12" style={{ marginBottom: "8px" }}>
          <div className="stats-inner">
            <div className="stat-item">
              <div className="stat-number">{loading ? "..." : logos.length}</div>
              <div className="stat-label">Total Logos</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">{loading ? "..." : Math.min(logos.length || 10, 12)}</div>
              <div className="stat-label">Home Page Ticker Slots</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Globe className="w-8 h-8 text-emerald-500" style={{ transform: "translateY(2px)" }} />
              </div>
              <div className="stat-label">Connection: Online</div>
            </div>
          </div>
        </div>

        {/* Dynamic Cards for Existing Partner Logos */}
        {loading ? (
          // Skeleton loader
          [...Array(3)].map((_, i) => (
            <div key={`skeleton-${i}`} className="bento-card col-4" style={{ opacity: 0.6 }}>
              <div className="logo-preview-box" style={{ background: "#f1f5f9" }}></div>
              <div style={{ height: "18px", width: "50%", background: "#f1f5f9", marginBottom: "8px", borderRadius: "4px" }}></div>
              <div style={{ height: "12px", width: "30%", background: "#f1f5f9", marginBottom: "20px", borderRadius: "4px" }}></div>
              <div style={{ height: "40px", background: "#f1f5f9", borderRadius: "10px", marginTop: "auto" }}></div>
            </div>
          ))
        ) : logos.length === 0 ? (
          /* Empty Database Onboarding State */
          <div className="bento-card col-12 onboarding-card">
            <Sparkles className="onboarding-icon" />
            <h3 className="onboarding-title">No partner logos uploaded yet</h3>
            <p className="onboarding-desc">
              Your logo directory is empty. Seed the default brand list (Stripe, Figma, HubSpot, Shopify, etc.) to immediately populate the homepage ticker, or create a custom entry.
            </p>
            <button 
              onClick={initializeDefaultLogos}
              disabled={initializing}
              className="btn-initialize"
            >
              {initializing ? "Initializing Logos..." : "Initialize Default Brand Set"}
            </button>
          </div>
        ) : filteredLogos.length > 0 ? (
          filteredLogos.map((logo) => {
            const imgSrc = getLogoImageSource(logo);
            return (
              <div key={logo.id} className="bento-card col-4">
                <div className="logo-preview-box">
                  {logo.name.toLowerCase() === "figma" && !logo.image ? (
                    <svg className="logo-img" viewBox="0 0 38 57" aria-hidden="true" style={{ height: "40px" }}>
                      <path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1 1 9.5 9.5H19v-9.5Z" />
                      <path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0Z" />
                      <path fill="#FF7262" d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5Z" />
                      <path fill="#F24E1E" d="M19 0h9.5a9.5 9.5 0 1 1 0 19H19V0Z" />
                      <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5Z" />
                    </svg>
                  ) : imgSrc ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img 
                      src={imgSrc} 
                      alt={logo.name} 
                      className="logo-img" 
                    />
                  ) : (
                    <span className="logo-text-fallback">{logo.name}</span>
                  )}
                </div>
                
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <h3 className="logo-title" style={{ margin: 0 }}>{logo.name}</h3>
                  <span className={`status-badge ${logo.hidden ? "draft" : "published"}`} style={{ padding: "3px 8px", fontSize: "10px", margin: 0 }}>
                    <span className="status-dot"></span>
                    {logo.hidden ? "Hidden" : "Active"}
                  </span>
                </div>
                <div className="logo-meta">
                  Updated {formatDate(logo.updatedAt)}
                </div>

                <div className="logo-card-actions">
                  <Link href={`/admin/collections/partner-logos/${logo.id}`} className="action-btn edit-btn">
                    <Edit3 className="w-3.5 h-3.5" />
                    Edit
                  </Link>
                  <button 
                    onClick={() => handleToggleHide(logo.id, logo.name, !logo.hidden)}
                    className="action-btn status-toggle-btn"
                    title={logo.hidden ? "Show on Homepage" : "Hide from Homepage"}
                    style={{ 
                      backgroundColor: logo.hidden ? "rgba(16, 185, 129, 0.05)" : "rgba(239, 68, 68, 0.05)", 
                      color: logo.hidden ? "#10b981" : "#ef4444", 
                      borderColor: logo.hidden ? "rgba(16, 185, 129, 0.15)" : "rgba(239, 68, 68, 0.15)",
                      flex: "none",
                      width: "38px"
                    }}
                  >
                    {logo.hidden ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                  </button>
                  <button 
                    onClick={() => handleDelete(logo.id, logo.name)}
                    disabled={deletingId === logo.id}
                    className="action-btn delete-btn"
                    style={{ flex: "none", width: "38px" }}
                    title="Delete Brand Logo"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          /* Empty Search Results State */
          <div className="bento-card col-12 empty-state-card">
            <ShieldAlert className="empty-icon" />
            <div className="empty-title">No matching brand logos found</div>
            <div className="empty-desc">
              No partner logos match "{searchQuery}". Try editing your search query or create a new logo.
            </div>
          </div>
        )}

        {/* Bento Grid: Create New Logo Card (CTA Card, fills col-4 when list is not empty) */}
        {logos.length > 0 && (
          <Link href="/admin/collections/partner-logos/create" className="bento-card col-4" style={{ textDecoration: "none" }}>
            <div className="create-card-inner">
              <div className="create-icon-wrapper">
                <Plus className="w-5 h-5" />
              </div>
              <div className="create-card-title">Add Partner Logo</div>
              <div className="create-card-sub">Upload a new partner brand logo</div>
            </div>
          </Link>
        )}

      </div>

      {/* Floating Toast Notification */}
      <div className={`toast-notification ${toast.show ? "show" : ""}`}>
        {toast.type === "success" ? (
          <CheckCircle2 className="toast-icon success" />
        ) : (
          <ShieldAlert className="toast-icon error" />
        )}
        <span className="toast-text">{toast.message}</span>
      </div>
    </div>
  );
}
