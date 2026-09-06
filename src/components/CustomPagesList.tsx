"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Plus, Search, FileText, Settings, ExternalLink, 
  Edit3, Clock, Sparkles, CheckCircle2, Eye, 
  Layers, BarChart2, ShieldAlert
} from "lucide-react";

interface PageDoc {
  id: string;
  title: string;
  slug: string;
  updatedAt: string;
  createdAt: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
  layout?: any[];
}

const AVAILABLE_BLOCKS = [
  { slug: "hero", label: "Hero Section" },
  { slug: "services", label: "Service List" },
  { slug: "portfolio", label: "Portfolio Carousel" },
  { slug: "faqs", label: "FAQ block" }
];

export default function CustomPagesList() {
  const [pages, setPages] = useState<PageDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBlockFilter, setSelectedBlockFilter] = useState<string | null>(null);
  const [initializing, setInitializing] = useState(false);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const res = await fetch("/api/pages?limit=100");
        if (res.ok) {
          const data = await res.json();
          setPages(data.docs || []);
        }
      } catch (err) {
        console.error("Failed to fetch pages:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPages();
  }, []);

  const initializeHomePage = async () => {
    setInitializing(true);
    try {
      const res = await fetch("/api/pages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "Home",
          slug: "home",
          layout: [
            {
              blockType: "hero",
              label: "Transforming Business Through AI",
              headingLine1: "Transforming businesses",
              headingLine2: "through vision & AI innovation",
              description: "A leading software company reshaping industries across the globe through AI automation, seamless integrations, and intelligent solutions that drive business growth.",
              ctaText: "Book a Free Consultant",
              ctaLink: "#",
              contactCtaText: "Contact Us",
              contactCtaLink: "#",
              secondaryCtaText: "EXPLORE WORK",
              secondaryCtaLink: "#products"
            }
          ],
          seo: {
            metaTitle: "CodeMoly - Transforming Business Through AI",
            metaDescription: "A leading software company reshaping industries across the globe through AI automation, seamless integrations, and intelligent solutions that drive business growth."
          }
        }),
      });

      if (res.ok) {
        const refetchRes = await fetch("/api/pages?limit=100");
        if (refetchRes.ok) {
          const data = await refetchRes.json();
          setPages(data.docs || []);
        }
      }
    } catch (err) {
      console.error("Error creating home page:", err);
    } finally {
      setInitializing(false);
    }
  };

  const filteredPages = pages.filter(page => {
    const matchesSearch = page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          page.slug.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (!selectedBlockFilter) return matchesSearch;
    
    const hasBlock = page.layout?.some(block => block.blockType === selectedBlockFilter);
    return matchesSearch && hasBlock;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  return (
    <div className="vault-pages-wrapper">
      {/* Scope CSS styling for premium white-themed list view */}
      <style dangerouslySetInnerHTML={{ __html: `
        .vault-pages-wrapper {
          background-color: #f4f6fa;
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          padding: 24px 32px 40px 32px;
          color: #1e293b;
        }

        /* Bento Header Card design */
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

        /* Action Buttons */
        .btn-create-page {
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

        .btn-create-page:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(19, 59, 201, 0.35);
          color: #ffffff !important;
        }

        .btn-create-page:active {
          transform: translateY(0);
        }

        /* Bento Grid Layout */
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

        /* Size Variants */
        .col-4 { grid-column: span 4; }
        .col-5 { grid-column: span 5; }
        .col-6 { grid-column: span 6; }
        .col-7 { grid-column: span 7; }
        .col-8 { grid-column: span 8; }
        .col-12 { grid-column: span 12; }

        @media (max-width: 1024px) {
          .col-4, .col-5, .col-6, .col-7, .col-8 {
            grid-column: span 6;
          }
        }

        @media (max-width: 640px) {
          .col-4, .col-5, .col-6, .col-7, .col-8, .col-6 {
            grid-column: span 12;
          }
        }

        /* Stats Card specific styling */
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

        /* Page Bento Card styling */
        .page-card {
          position: relative;
        }

        .page-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }

        .page-icon-wrapper {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(19, 59, 201, 0.05);
          color: #133bc9;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .status-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 9999px;
          font-size: 11px;
          font-weight: 750;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .status-badge.published {
          background-color: rgba(16, 185, 129, 0.1);
          color: #10b981;
        }

        .status-badge.draft {
          background-color: rgba(245, 158, 11, 0.1);
          color: #f59e0b;
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: currentColor;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { opacity: 0.4; }
          50% { opacity: 1; }
          100% { opacity: 0.4; }
        }

        .page-title {
          font-size: 18px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 6px 0;
          letter-spacing: -0.01em;
        }

        .page-slug {
          font-size: 13px;
          color: #64748b;
          font-family: monospace;
          margin: 0 0 20px 0;
          background: #f8fafc;
          padding: 4px 8px;
          border-radius: 6px;
          display: inline-block;
        }

        .page-meta-section {
          margin-top: auto;
          padding-top: 16px;
          border-t: 1px solid rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .meta-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #64748b;
        }

        .meta-row svg {
          width: 14px;
          height: 14px;
          color: #94a3b8;
        }

        .page-card-actions {
          display: flex;
          gap: 10px;
          margin-top: 20px;
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

        .action-btn.preview-btn {
          background-color: #ffffff;
          color: #133bc9;
          border-color: rgba(19, 59, 201, 0.15);
        }

        .action-btn.preview-btn:hover {
          background-color: rgba(19, 59, 201, 0.03);
          border-color: rgba(19, 59, 201, 0.25);
        }

        /* Create Page Bento CTA Card */
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

        /* Info & Documentation Bento Card */
        .info-card-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }

        .info-card-title {
          font-size: 15px;
          font-weight: 800;
          color: #0f172a;
        }

        .info-card-text {
          font-size: 12.5px;
          line-height: 1.6;
          color: #64748b;
          margin-bottom: 12px;
        }

        .info-tag-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: auto;
        }

        .info-tag {
          font-size: 11px;
          background: #f8fafc;
          border: 1px solid rgba(0, 0, 0, 0.04);
          color: #475569;
          padding: 4px 8px;
          border-radius: 6px;
          font-weight: 600;
        }

        .clickable-tag {
          cursor: pointer !important;
          transition: all 0.2s ease !important;
          user-select: none !important;
          display: inline-flex !important;
          align-items: center !important;
          gap: 6px !important;
        }

        .clickable-tag:hover {
          background-color: rgba(19, 59, 201, 0.05) !important;
          border-color: rgba(19, 59, 201, 0.15) !important;
          color: #133bc9 !important;
          transform: translateY(-1px) !important;
        }

        .clickable-tag.active {
          background: linear-gradient(135deg, #133bc9 0%, #3b82f6 100%) !important;
          border-color: transparent !important;
          color: #ffffff !important;
          box-shadow: 0 4px 10px rgba(19, 59, 201, 0.15) !important;
        }

        .clickable-tag.active:hover {
          background: linear-gradient(135deg, #09164f 0%, #133bc9 100%) !important;
          color: #ffffff !important;
        }

        .tag-active-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #ffffff;
        }

        /* Empty state design */
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

        /* Onboarding card styles */
        .onboarding-card {
          text-align: center !important;
          padding: 40px !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
          background-color: #ffffff !important;
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

        .btn-initialize-page {
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

        .btn-initialize-page:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 18px rgba(19, 59, 201, 0.3) !important;
        }

        .btn-initialize-page:active {
          transform: translateY(0) !important;
        }

        .btn-initialize-page:disabled {
          opacity: 0.6 !important;
          cursor: not-allowed !important;
          transform: none !important;
          box-shadow: none !important;
        }
      ` }} />

      {/* Bento Grid Header Card */}
      <div className="bento-header-card">
        <div className="bento-header-left">
          <div className="bento-breadcrumb">
            <span className="folder-icon">📁</span>
            <span className="crumb">Pages</span>
            <span className="separator">/</span>
            <span className="crumb active">Directory</span>
          </div>
          <h1 className="bento-header-title">Pages</h1>
          <p className="bento-header-desc">Create, manage and publish modular page layouts for your site</p>
        </div>
        <div className="bento-header-right">
          <div className="bento-search-container">
            <Search className="bento-search-icon" />
            <input 
              type="text" 
              placeholder="Search pages by title..." 
              className="bento-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Link href="/admin/collections/pages/create" className="btn-create-page">
            <Plus width={16} height={16} />
            Create Page
          </Link>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="bento-grid">
        
        {/* Card 1: Stats Overview Card (Col-8) */}
        <div className="bento-card col-8">
          <div className="stats-inner">
            <div className="stat-item">
              <div className="stat-number">{loading ? "..." : pages.length}</div>
              <div className="stat-label">Total Pages</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">{loading ? "..." : pages.filter(p => p.slug).length}</div>
              <div className="stat-label">Active Routes</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">{loading ? "..." : pages.length > 0 ? "100%" : "0%"}</div>
              <div className="stat-label">SEO Coverage</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">
                <BarChart2 className="w-8 h-8 text-emerald-500" style={{ transform: "translateY(2px)" }} />
              </div>
              <div className="stat-label">Site Status: Online</div>
            </div>
          </div>
        </div>

        {/* Card 2: Developer Tooling Quick Info Card (Col-4) */}
        <div className="bento-card col-4">
          <div className="info-card-header">
            <Layers className="w-5 h-5 text-indigo-500" />
            <div className="info-card-title">Page Builder blocks</div>
          </div>
          <div className="info-card-text">
            Pages are built using modular section blocks. Currently available layouts:
          </div>
          <div className="info-tag-list">
            {AVAILABLE_BLOCKS.map(block => {
              const isActive = selectedBlockFilter === block.slug;
              return (
                <button
                  key={block.slug}
                  onClick={() => setSelectedBlockFilter(isActive ? null : block.slug)}
                  className={`info-tag clickable-tag ${isActive ? "active" : ""}`}
                  title={isActive ? "Clear filter" : `Filter pages containing ${block.label}`}
                >
                  {block.label}
                  {isActive && <span className="tag-active-dot"></span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Cards for Existing Pages */}
        {loading ? (
          // Skeleton loader
          [...Array(2)].map((_, i) => (
            <div key={`skeleton-${i}`} className="bento-card col-4 page-card" style={{ opacity: 0.6 }}>
              <div className="page-card-header">
                <div className="page-icon-wrapper">
                  <FileText className="w-5 h-5" />
                </div>
              </div>
              <div style={{ height: "18px", width: "60%", background: "#f1f5f9", marginBottom: "8px", borderRadius: "4px" }}></div>
              <div style={{ height: "12px", width: "40%", background: "#f1f5f9", marginBottom: "20px", borderRadius: "4px" }}></div>
              <div style={{ height: "40px", background: "#f1f5f9", borderRadius: "10px", marginTop: "auto" }}></div>
            </div>
          ))
        ) : pages.length === 0 ? (
          /* Empty Database Onboarding State */
          <div className="bento-card col-8 onboarding-card">
            <Sparkles className="onboarding-icon" />
            <h3 className="onboarding-title">No pages created yet</h3>
            <p className="onboarding-desc">
              Your site database has no pages. Initialize the default <strong>Home Page</strong> template containing a Hero Section to start customizing layouts and testing filters.
            </p>
            <button 
              onClick={initializeHomePage}
              disabled={initializing}
              className="btn-initialize-page"
            >
              {initializing ? "Initializing..." : "Initialize Default Home Page"}
            </button>
          </div>
        ) : filteredPages.length > 0 ? (
          filteredPages.map((page) => (
            <div key={page.id} className="bento-card col-4 page-card">
              <div className="page-card-header">
                <div className="page-icon-wrapper">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="status-badge published">
                  <span className="status-dot"></span>
                  Published
                </div>
              </div>
              
              <h3 className="page-title">{page.title}</h3>
              <div className="page-slug">/{page.slug === "home" ? "" : page.slug}</div>

              <div className="page-meta-section">
                <div className="meta-row">
                  <Clock />
                  <span>Updated {formatDate(page.updatedAt)}</span>
                </div>
                <div className="meta-row">
                  <Sparkles />
                  <span>
                    {page.seo?.metaTitle ? "SEO Meta Set" : "No SEO Metadata"}
                  </span>
                </div>
              </div>

              <div className="page-card-actions">
                <Link href={`/admin/collections/pages/${page.id}`} className="action-btn edit-btn">
                  <Edit3 className="w-3.5 h-3.5" />
                  Edit Layout
                </Link>
                <a href={`/${page.slug === "home" ? "" : page.slug}`} target="_blank" rel="noopener noreferrer" className="action-btn preview-btn">
                  <Eye className="w-3.5 h-3.5" />
                  Preview
                </a>
              </div>
            </div>
          ))
        ) : (
          /* Empty Search/Filter Results State */
          <div className="bento-card col-8 empty-state-card">
            <ShieldAlert className="empty-icon" />
            <div className="empty-title">No matching pages found</div>
            <div className="empty-desc">
              No pages match "{searchQuery || (selectedBlockFilter ? AVAILABLE_BLOCKS.find(b => b.slug === selectedBlockFilter)?.label : "")}". Try clearing your filters or search.
            </div>
          </div>
        )}

        {/* Bento Grid: Create New Page Card (CTA Card, fills col-4) */}
        <Link href="/admin/collections/pages/create" className="bento-card col-4" style={{ textDecoration: "none" }}>
          <div className="create-card-inner">
            <div className="create-icon-wrapper">
              <Plus className="w-5 h-5" />
            </div>
            <div className="create-card-title">Create Page</div>
            <div className="create-card-sub">Deploy a new route layout</div>
          </div>
        </Link>

      </div>
    </div>
  );
}
