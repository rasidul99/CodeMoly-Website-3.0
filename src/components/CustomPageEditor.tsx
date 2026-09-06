"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  ArrowLeft, Save, Eye, FileText, Globe, Layers, Sparkles, 
  Settings, Clock, CheckCircle2, ChevronRight, Upload, Plus, AlertCircle,
  ChevronDown, RefreshCw, Search
} from "lucide-react";

interface MediaDoc {
  id: string;
  filename: string;
  url: string;
  alt: string;
}

export default function CustomPageEditor() {
  const router = useRouter();
  const [id, setId] = useState<string | null>(null);
  const [isCreate, setIsCreate] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [mediaList, setMediaList] = useState<MediaDoc[]>([]);
  
  // Form States
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [isSlugManual, setIsSlugManual] = useState(false);
  
  // Custom dropdown states
  const [isOgImageDropdownOpen, setIsOgImageDropdownOpen] = useState(false);
  const [ogImageSearch, setOgImageSearch] = useState("");
  const [isHeroVideoDropdownOpen, setIsHeroVideoDropdownOpen] = useState(false);
  const [heroVideoSearch, setHeroVideoSearch] = useState("");
  
  // SEO States
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [ogImage, setOgImage] = useState("");
  
  // Layout Block States (Hero block fields)
  const [heroShowRating, setHeroShowRating] = useState(true);
  const [heroRatingScore, setHeroRatingScore] = useState("4.9");
  const [heroRatingLabel, setHeroRatingLabel] = useState("Rated 4.9 out of 5 stars based on Capterra and Google reviews");
  const [heroLabel, setHeroLabel] = useState("Transforming Business Through AI");
  const [heroH1, setHeroH1] = useState("Transforming businesses");
  const [heroH2, setHeroH2] = useState("through vision & AI innovation");
  const [heroDesc, setHeroDesc] = useState("A leading software company reshaping industries across the globe through AI automation, seamless integrations, and intelligent solutions that drive business growth.");
  const [heroCtaText, setHeroCtaText] = useState("Book a Free Consultant");
  const [heroCtaLink, setHeroCtaLink] = useState("#");
  const [heroContactText, setHeroContactText] = useState("Contact Us");
  const [heroContactLink, setHeroContactLink] = useState("#");
  const [heroSecCtaText, setHeroSecCtaText] = useState("EXPLORE WORK");
  const [heroSecCtaLink, setHeroSecCtaLink] = useState("#products");
  const [heroVideo, setHeroVideo] = useState("");

  // Metadata timestamps
  const [createdAt, setCreatedAt] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");

  // Toast States
  const [toast, setToast] = useState<{ show: boolean; message: string; type: "success" | "error" }>({
    show: false,
    message: "",
    type: "success"
  });

  // 1. Determine action and fetch page ID on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const pathname = window.location.pathname;
      const parts = pathname.split("/");
      const lastPart = parts[parts.length - 1];
      
      if (lastPart === "create") {
        setIsCreate(true);
        setLoading(false);
      } else {
        setId(lastPart);
      }
    }
  }, []);

  // 2. Fetch page details and media files
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch media list
        const mediaRes = await fetch("/api/media?limit=100");
        if (mediaRes.ok) {
          const mediaData = await mediaRes.json();
          setMediaList(mediaData.docs || []);
        }

        // Fetch page details if editing
        if (id) {
          const pageRes = await fetch(`/api/pages/${id}`);
          if (pageRes.ok) {
            const page = await pageRes.json();
            setTitle(page.title || "");
            setSlug(page.slug || "");
            setIsSlugManual(true);

            // Populate SEO
            if (page.seo) {
              setMetaTitle(page.seo.metaTitle || "");
              setMetaDescription(page.seo.metaDescription || "");
              // Handle relationship object or ID string
              setOgImage(page.seo.ogImage?.id || page.seo.ogImage || "");
            }

            // Populate layout block (Hero)
            if (page.layout && page.layout.length > 0) {
              const hero = page.layout.find((block: any) => block.blockType === "hero");
              if (hero) {
                setHeroShowRating(hero.showRating !== false);
                setHeroRatingScore(hero.ratingScore || "4.9");
                setHeroRatingLabel(hero.ratingLabel || "Rated 4.9 out of 5 stars based on Capterra and Google reviews");
                setHeroLabel(hero.label || "");
                setHeroH1(hero.headingLine1 || "");
                setHeroH2(hero.headingLine2 || "");
                setHeroDesc(hero.description || "");
                setHeroCtaText(hero.ctaText || "");
                setHeroCtaLink(hero.ctaLink || "");
                setHeroContactText(hero.contactCtaText || "");
                setHeroContactLink(hero.contactCtaLink || "");
                setHeroSecCtaText(hero.secondaryCtaText || "");
                setHeroSecCtaLink(hero.secondaryCtaLink || "");
                setHeroVideo(hero.video?.id || hero.video || "");
              }
            }

            setCreatedAt(page.createdAt);
            setUpdatedAt(page.updatedAt);
          } else {
            showToast("Failed to load page data.", "error");
          }
        }
      } catch (err) {
        console.error("Fetch details error:", err);
        showToast("Error loading page resources.", "error");
      } finally {
        setLoading(false);
      }
    };

    if (id || isCreate) {
      fetchData();
    }
  }, [id, isCreate]);

  // 3. Auto-slug generation from Title
  useEffect(() => {
    if (isCreate && !isSlugManual) {
      const generated = title
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
        .replace(/\s+/g, "-") // collapse whitespace and replace by -
        .replace(/-+/g, "-"); // collapse dashes
      setSlug(generated);
    }
  }, [title, isCreate, isSlugManual]);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 4000);
  };

  // 4. Save handler
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      showToast("Page Title is required.", "error");
      return;
    }
    if (!slug.trim()) {
      showToast("Page Slug is required.", "error");
      return;
    }

    setSaving(true);
    
    // Construct payload body
    const bodyPayload = {
      title,
      slug,
      seo: {
        metaTitle: metaTitle || null,
        metaDescription: metaDescription || null,
        ogImage: ogImage || null
      },
      layout: [
        {
          blockType: "hero",
          showRating: heroShowRating,
          ratingScore: heroRatingScore,
          ratingLabel: heroRatingLabel,
          label: heroLabel,
          headingLine1: heroH1,
          headingLine2: heroH2,
          description: heroDesc,
          ctaText: heroCtaText,
          ctaLink: heroCtaLink,
          contactCtaText: heroContactText,
          contactCtaLink: heroContactLink,
          secondaryCtaText: heroSecCtaText,
          secondaryCtaLink: heroSecCtaLink,
          video: heroVideo || null
        }
      ]
    };

    try {
      const url = isCreate ? "/api/pages" : `/api/pages/${id}`;
      const method = isCreate ? "POST" : "PATCH";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyPayload)
      });

      if (res.ok) {
        const data = await res.json();
        showToast(isCreate ? "Page created successfully!" : "Page layout saved successfully!", "success");
        setUpdatedAt(new Date().toISOString());
        
        if (isCreate && data.doc?.id) {
          // Redirect to the edit view of the newly created page
          setTimeout(() => {
            router.push(`/admin/collections/pages/${data.doc.id}`);
          }, 1000);
        }
      } else {
        const errorData = await res.json();
        showToast(errorData.errors?.[0]?.message || "Failed to save changes.", "error");
      }
    } catch (err) {
      console.error("Save page error:", err);
      showToast("Error connecting to server API.", "error");
    } finally {
      setSaving(false);
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "Not Available";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  // Helper to refresh media dynamically
  const handleRefreshMedia = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const mediaRes = await fetch("/api/media?limit=100");
      if (mediaRes.ok) {
        const mediaData = await mediaRes.json();
        setMediaList(mediaData.docs || []);
        showToast("Media list refreshed!", "success");
      }
    } catch (err) {
      console.error(err);
      showToast("Failed to refresh media list.", "error");
    }
  };

  // Filter media lists based on search criteria
  const filteredOgImageMedia = mediaList.filter(media =>
    media.filename.toLowerCase().includes(ogImageSearch.toLowerCase())
  );

  const filteredHeroVideoMedia = mediaList.filter(media =>
    media.filename.toLowerCase().includes(heroVideoSearch.toLowerCase())
  );

  if (loading) {
    return (
      <div className="custom-editor-loading">
        <div className="loading-spinner-wrapper">
          <div className="spinner"></div>
          <p>Loading editor canvas...</p>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .custom-editor-loading {
            background-color: #f4f6fa;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Inter', sans-serif;
          }
          .loading-spinner-wrapper {
            text-align: center;
            color: #64748b;
          }
          .spinner {
            width: 40px;
            height: 40px;
            border: 3.5px solid rgba(19, 59, 201, 0.15);
            border-top-color: #133bc9;
            border-radius: 50%;
            animation: spin 1s infinite linear;
            margin: 0 auto 16px auto;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        ` }} />
      </div>
    );
  }

  return (
    <div className="vault-editor-wrapper">
      {/* Floating blocker overlay to close dropdowns when clicking outside */}
      {(isOgImageDropdownOpen || isHeroVideoDropdownOpen) && (
        <div 
          style={{ position: "fixed", inset: 0, zIndex: 99, cursor: "default" }} 
          onClick={() => {
            setIsOgImageDropdownOpen(false);
            setIsHeroVideoDropdownOpen(false);
          }} 
        />
      )}
      {/* Dynamic CSS Styling for Premium Bento Editor Layout */}
      <style dangerouslySetInnerHTML={{ __html: `
        .vault-editor-wrapper {
          background-color: #f4f6fa;
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          padding: 0 0 40px 0;
          color: #1e293b;
        }

        /* 1. Bento Header Styling */
        .bento-header-card {
          background: #ffffff !important;
          border-radius: 24px !important;
          border: 1px solid rgba(0, 0, 0, 0.05) !important;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.01), 0 10px 30px -10px rgba(0, 0, 0, 0.03) !important;
          padding: 24px 32px !important;
          display: flex !important;
          justify-content: space-between !important;
          align-items: center !important;
          transition: all 0.3s ease !important;
          margin: 24px 32px 24px 32px !important;
          box-sizing: border-box !important;
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

        /* Action Buttons */
        .circular-back-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: #f8fafc;
          border: 1px solid rgba(0, 0, 0, 0.08);
          color: #0f172a;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          text-decoration: none;
          flex-shrink: 0;
        }

        .circular-back-btn:hover {
          background-color: #f1f5f9;
          border-color: rgba(0, 0, 0, 0.15);
          transform: translateX(-4px);
          color: #133bc9;
          box-shadow: 0 4px 12px rgba(19, 59, 201, 0.08);
        }

        .btn-preview {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #ffffff;
          border: 1px solid rgba(19, 59, 201, 0.15);
          color: #133bc9;
          padding: 10px 20px;
          border-radius: 9999px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .btn-preview:hover {
          background-color: rgba(19, 59, 201, 0.03);
          border-color: rgba(19, 59, 201, 0.25);
        }

        .btn-save-changes {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #133bc9 0%, #3b82f6 100%);
          color: #ffffff;
          border: none;
          padding: 10px 24px;
          border-radius: 9999px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 12px rgba(19, 59, 201, 0.25);
        }

        .btn-save-changes:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(19, 59, 201, 0.35);
        }

        .btn-save-changes:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* 2. Form Bento Grid */
        .editor-form-container {
          padding: 0 32px;
          box-sizing: border-box;
          max-width: none;
          width: 100%;
        }

        .bento-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 24px;
        }

        .col-8 { grid-column: span 8; }
        .col-4 { grid-column: span 4; }

        .bento-card {
          background: #ffffff;
          border-radius: 24px;
          border: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.01), 0 10px 30px -10px rgba(0, 0, 0, 0.03);
          padding: 28px;
          margin-bottom: 24px;
          box-sizing: border-box;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .bento-card:hover {
          border-color: rgba(19, 59, 201, 0.12);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }

        .card-header-inner {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.04);
        }

        .card-icon-wrapper {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(19, 59, 201, 0.05);
          color: #133bc9;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-title {
          font-family: 'Sora', sans-serif;
          font-size: 15px;
          font-weight: 750;
          color: #0f172a;
          margin: 0;
        }

        /* Form Controls */
        .form-group {
          margin-bottom: 20px;
        }

        .form-group:last-child {
          margin-bottom: 0;
        }

        .field-label {
          font-family: 'Sora', sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: #334155;
          margin-bottom: 8px;
          display: block;
          text-transform: capitalize;
        }

        .field-label span.required {
          color: #ef4444;
          margin-left: 3px;
        }

        .text-input,
        .select-input,
        .textarea-input {
          font-family: 'Inter', sans-serif;
          border-radius: 12px !important;
          border: 1.5px solid rgba(0, 0, 0, 0.08) !important;
          background-color: #ffffff !important;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
          font-size: 13.5px !important;
          padding: 10px 14px !important;
          box-sizing: border-box !important;
          width: 100% !important;
          color: #0f172a !important;
        }

        .text-input:focus,
        .select-input:focus,
        .textarea-input:focus {
          border-color: #133bc9 !important;
          box-shadow: 0 0 0 3px rgba(19, 59, 201, 0.12) !important;
          outline: none !important;
        }

        .textarea-input {
          resize: vertical;
          min-height: 100px;
        }

        /* 3. Nested Block Editor styling */
        .block-builder-wrapper {
          border: 1px solid rgba(0, 0, 0, 0.06);
          background-color: #f8fafc;
          border-radius: 16px;
          overflow: hidden;
        }

        .block-header-bar {
          background-color: #f1f5f9;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          padding: 14px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .block-name {
          font-family: 'Sora', sans-serif;
          font-weight: 750;
          color: #1e293b;
          font-size: 13px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .block-badge {
          background-color: #133bc9;
          color: #ffffff;
          font-size: 9.5px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 2.5px 7px;
          border-radius: 6px;
        }

        .block-body {
          padding: 24px;
          background: #ffffff;
        }

        .sub-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 16px;
        }

        .sub-col-6 { grid-column: span 6; }
        .sub-col-12 { grid-column: span 12; }

        /* Media Dropdown Select with Preview Thumbnail */
        .media-select-wrapper {
          position: relative;
        }

        .media-select-row {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .media-thumbnail-preview {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          border: 1px solid rgba(0,0,0,0.08);
          overflow: hidden;
          background-color: #f1f5f9;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .media-thumbnail-preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .media-thumbnail-preview span {
          font-size: 10px;
          color: #94a3b8;
          font-weight: 600;
        }

        /* 4. Sidebar Badge status */
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

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: currentColor;
        }

        .info-row {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: #64748b;
          margin-bottom: 12px;
        }

        .info-row:last-child {
          margin-bottom: 0;
        }

        .info-label {
          font-weight: 500;
        }

        .info-value {
          font-weight: 700;
          color: #334155;
        }

        /* 5. Animated Toasts */
        .toast-notification {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 12px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          border-radius: 16px;
          padding: 16px 24px;
          transform: translateY(100px);
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          pointer-events: none;
        }

        .toast-notification.active {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }

        .toast-icon {
          width: 20px;
          height: 20px;
        }

        .toast-notification.success .toast-icon {
          color: #10b981;
        }

        .toast-notification.error .toast-icon {
          color: #ef4444;
        }

        .toast-message {
          font-size: 13.5px;
          font-weight: 700;
          color: #1e293b;
        }

        /* Custom Dropdown Media Selector Styling */
        .media-select-container {
          position: relative;
          width: 100%;
        }

        .custom-dropdown-trigger {
          width: 100%;
          background: #f8fafc;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 12px;
          padding: 10px 16px;
          font-size: 13.5px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          transition: all 0.2s ease;
          box-sizing: border-box;
          user-select: none;
        }

        .custom-dropdown-trigger:hover {
          border-color: #133bc9;
          background: #ffffff;
          box-shadow: 0 4px 12px rgba(19, 59, 201, 0.04);
        }

        .dropdown-trigger-left {
          display: flex;
          align-items: center;
          gap: 12px;
          overflow: hidden;
        }

        .dropdown-preview-thumb {
          width: 24px;
          height: 24px;
          border-radius: 6px;
          object-fit: contain;
          background: #f1f5f9;
          border: 1px solid rgba(0,0,0,0.06);
          flex-shrink: 0;
        }

        .dropdown-selected-text {
          font-weight: 700;
          color: #0f172a;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .dropdown-selected-text.placeholder {
          color: #64748b;
          font-weight: 500;
        }

        .dropdown-chevron {
          width: 16px;
          height: 16px;
          color: #94a3b8;
          transition: transform 0.2s ease;
          flex-shrink: 0;
        }

        .dropdown-chevron.open {
          transform: rotate(180deg);
        }

        /* Floating Menu styling */
        .custom-dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          margin-top: 8px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 16px;
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.01);
          z-index: 100;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: slideDown 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes slideDown {
          from { transform: translateY(-4px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .dropdown-search-wrapper {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.04);
          background: #f8fafc;
          position: relative;
        }

        .dropdown-search-icon {
          width: 14px;
          height: 14px;
          color: #94a3b8;
          flex-shrink: 0;
        }

        .dropdown-search-input {
          flex: 1;
          background: transparent !important;
          border: none !important;
          outline: none !important;
          font-size: 13px !important;
          color: #0f172a !important;
          padding: 0 !important;
          font-family: 'Inter', sans-serif !important;
        }

        .btn-refresh-media {
          background: transparent;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .btn-refresh-media:hover {
          color: #133bc9;
          background: rgba(19, 59, 201, 0.05);
        }

        .dropdown-options-list {
          max-height: 200px;
          overflow-y: auto;
          padding: 8px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .dropdown-option {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 12px;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.15s ease;
          user-select: none;
        }

        .dropdown-option:hover {
          background-color: #f1f5f9;
        }

        .dropdown-option.selected {
          background-color: rgba(19, 59, 201, 0.05);
        }

        .option-thumb {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          object-fit: contain;
          background-color: #f8fafc;
          border: 1px solid rgba(0,0,0,0.04);
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .option-thumb.fallback {
          color: #133bc9;
          background-color: rgba(19, 59, 201, 0.05);
        }

        .option-text {
          font-size: 13px;
          font-weight: 600;
          color: #334155;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: left;
        }

        .dropdown-option.selected .option-text {
          color: #133bc9;
          font-weight: 750;
        }

        .dropdown-no-results {
          padding: 16px;
          font-size: 13px;
          color: #64748b;
          text-align: center;
        }

        .dropdown-footer {
          padding: 10px 16px;
          border-top: 1px solid rgba(0, 0, 0, 0.04);
          background: #f8fafc;
          display: flex;
          justify-content: center;
        }

        .btn-upload-new-media {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11.5px;
          font-weight: 700;
          color: #133bc9;
          text-decoration: none;
          padding: 6px 12px;
          border-radius: 6px;
          transition: all 0.2s ease;
        }

        .btn-upload-new-media:hover {
          background-color: rgba(19, 59, 201, 0.05);
          color: #09164f;
        }
      ` }} />

      {/* Floating Bento Header Card */}
      <div className="bento-header-card">
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Link href="/admin/collections/pages" className="circular-back-btn" title="Back to Pages Directory">
            <ArrowLeft width={18} height={18} />
          </Link>
          <div className="bento-header-left">
            <div className="bento-breadcrumb">
              <span className="folder-icon">📁</span>
              <Link href="/admin/collections/pages" className="crumb">Pages</Link>
              <span className="separator">/</span>
              <span className="crumb active">{isCreate ? "Create Page" : title}</span>
            </div>
            <h1 className="bento-header-title">{isCreate ? "Create Page" : title}</h1>
            <p className="bento-header-desc">
              {isCreate 
                ? "Deploy a new custom route layout into the site database" 
                : `Customize details, SEO tags, and page layout blocks for /${slug === "home" ? "" : slug}`}
            </p>
          </div>
        </div>
        
        <div className="bento-header-right">
          {!isCreate && (
            <a 
              href={slug === "home" ? "/" : `/${slug}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-preview"
            >
              <Eye width={14} height={14} />
              Live Preview
            </a>
          )}
          
          <button 
            type="submit" 
            form="custom-page-form"
            disabled={saving} 
            className="btn-save-changes"
          >
            <Save width={14} height={14} />
            {saving ? "Saving Changes..." : "Save Changes"}
          </button>
        </div>
      </div>

      {/* Main Form Bento Layout */}
      <div className="editor-form-container">
        <form id="custom-page-form" onSubmit={handleSave}>
          <div className="bento-grid">
            
            {/* Left Area (Fields & Blocks) - col-8 */}
            <div className="col-8">
              
              {/* Card 1: Page Details */}
              <div className="bento-card">
                <div className="card-header-inner">
                  <div className="card-icon-wrapper">
                    <FileText width={16} height={16} />
                  </div>
                  <h3 className="card-title">Page Details</h3>
                </div>
                
                <div className="form-group">
                  <label className="field-label">
                    Page Title <span className="required">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Home, About Us, Contact" 
                    className="text-input"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Card 2: SEO / Search Engine Metadata */}
              <div className="bento-card">
                <div className="card-header-inner">
                  <div className="card-icon-wrapper">
                    <Globe width={16} height={16} />
                  </div>
                  <h3 className="card-title">SEO / Search Engine Metadata</h3>
                </div>

                <div className="form-group" style={{ marginBottom: "20px" }}>
                  <label className="field-label">Meta Title</label>
                  <input 
                    type="text" 
                    placeholder="e.g. CodeMoly - Transforming Business Through AI" 
                    className="text-input"
                    value={metaTitle}
                    onChange={(e) => setMetaTitle(e.target.value)}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: "20px" }}>
                  <label className="field-label">Meta Description</label>
                  <textarea 
                    placeholder="A leading software company..." 
                    className="text-input"
                    rows={4}
                    style={{ resize: "vertical", minHeight: "80px" }}
                    value={metaDescription}
                    onChange={(e) => setMetaDescription(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="field-label">Open Graph (Social Share) Image</label>
                  <div className="media-select-row">
                    <div className="media-thumbnail-preview">
                      {ogImage ? (
                        <img 
                          src={mediaList.find(m => m.id === ogImage)?.url || ""} 
                          alt="preview" 
                        />
                      ) : (
                        <span>No Image</span>
                      )}
                    </div>

                    {/* Custom Searchable Bento Dropdown Selector for OG Image */}
                    <div className="media-select-container">
                      <div 
                        className="custom-dropdown-trigger" 
                        onClick={() => setIsOgImageDropdownOpen(!isOgImageDropdownOpen)}
                      >
                        <div className="dropdown-trigger-left">
                          {mediaList.find(m => m.id === ogImage) ? (
                            <>
                              <img src={mediaList.find(m => m.id === ogImage)?.url} className="dropdown-preview-thumb" alt="" />
                              <span className="dropdown-selected-text">{mediaList.find(m => m.id === ogImage)?.filename}</span>
                            </>
                          ) : (
                            <span className="dropdown-selected-text placeholder">-- Choose Share Image --</span>
                          )}
                        </div>
                        <ChevronDown className={`dropdown-chevron ${isOgImageDropdownOpen ? "open" : ""}`} />
                      </div>

                      {isOgImageDropdownOpen && (
                        <div className="custom-dropdown-menu" style={{ zIndex: 100 }}>
                          <div className="dropdown-search-wrapper" onClick={(e) => e.stopPropagation()}>
                            <Search className="dropdown-search-icon" />
                            <input 
                              type="text" 
                              placeholder="Search images..." 
                              className="dropdown-search-input"
                              value={ogImageSearch}
                              onChange={(e) => setOgImageSearch(e.target.value)}
                            />
                            <button
                              type="button"
                              onClick={handleRefreshMedia}
                              className="btn-refresh-media"
                              title="Refresh Files"
                            >
                              <RefreshCw width={12} height={12} />
                            </button>
                          </div>
                          
                          <div className="dropdown-options-list">
                            <div 
                              className={`dropdown-option ${!ogImage ? "selected" : ""}`}
                              onClick={() => {
                                setOgImage("");
                                setIsOgImageDropdownOpen(false);
                                setOgImageSearch("");
                              }}
                            >
                              <div className="option-thumb fallback">
                                <Sparkles width={14} height={14} />
                              </div>
                              <span className="option-text font-bold text-blue-600">-- None / Use Fallback --</span>
                            </div>
                            
                            {filteredOgImageMedia.map(media => (
                              <div 
                                key={media.id}
                                className={`dropdown-option ${ogImage === media.id ? "selected" : ""}`}
                                onClick={() => {
                                  setOgImage(media.id);
                                  setIsOgImageDropdownOpen(false);
                                  setOgImageSearch("");
                                }}
                              >
                                <img src={media.url} className="option-thumb" alt="" />
                                <span className="option-text">{media.filename}</span>
                              </div>
                            ))}
                            
                            {filteredOgImageMedia.length === 0 && ogImageSearch && (
                              <div className="dropdown-no-results">No images found</div>
                            )}
                          </div>
                          
                          <div className="dropdown-footer" onClick={(e) => e.stopPropagation()}>
                            <a 
                              href="/admin/collections/media/create" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="btn-upload-new-media"
                            >
                              <Upload width={12} height={12} />
                              Upload New Image
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Layout Blocks Builder */}
              <div className="bento-card">
                <div className="card-header-inner">
                  <div className="card-icon-wrapper">
                    <Layers width={16} height={16} />
                  </div>
                  <h3 className="card-title">Layout Section Blocks</h3>
                </div>

                {/* Hero Section Block Editor */}
                <div className="block-builder-wrapper">
                  <div className="block-header-bar">
                    <div className="block-name">
                      <Sparkles width={14} height={14} className="text-amber-500" />
                      Hero Section
                      <span className="block-badge">layout block</span>
                    </div>
                  </div>
                  
                  <div className="block-body">
                    <div className="sub-grid" style={{ marginBottom: "20px", borderBottom: "1px solid rgba(0,0,0,0.04)", paddingBottom: "16px" }}>
                      <div className="sub-col-6 form-group" style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "12px" }}>
                        <input 
                          type="checkbox" 
                          id="heroShowRating"
                          style={{ width: "18px", height: "18px", cursor: "pointer" }}
                          checked={heroShowRating}
                          onChange={(e) => setHeroShowRating(e.target.checked)}
                        />
                        <label htmlFor="heroShowRating" className="field-label" style={{ margin: 0, cursor: "pointer" }}>
                          Show Clutch/Google Rating Badge
                        </label>
                      </div>
                      
                      {heroShowRating && (
                        <>
                          <div className="sub-col-6 form-group">
                            <label className="field-label">Rating Score</label>
                            <input 
                              type="text" 
                              placeholder="e.g. 4.9"
                              className="text-input"
                              value={heroRatingScore}
                              onChange={(e) => setHeroRatingScore(e.target.value)}
                            />
                          </div>
                          <div className="sub-col-12 form-group">
                            <label className="field-label">Accessibility Hover Label</label>
                            <input 
                              type="text" 
                              placeholder="Accessibility label text..."
                              className="text-input"
                              value={heroRatingLabel}
                              onChange={(e) => setHeroRatingLabel(e.target.value)}
                            />
                          </div>
                        </>
                      )}
                    </div>

                    <div className="form-group">
                      <label className="field-label">Section Tag Label</label>
                      <input 
                        type="text" 
                        className="text-input"
                        value={heroLabel}
                        onChange={(e) => setHeroLabel(e.target.value)}
                      />
                    </div>

                    <div className="sub-grid">
                      <div className="sub-col-6 form-group">
                        <label className="field-label">Main Heading Line 1</label>
                        <input 
                          type="text" 
                          className="text-input"
                          value={heroH1}
                          onChange={(e) => setHeroH1(e.target.value)}
                        />
                      </div>
                      <div className="sub-col-6 form-group">
                        <label className="field-label">Main Heading Line 2</label>
                        <input 
                          type="text" 
                          className="text-input"
                          value={heroH2}
                          onChange={(e) => setHeroH2(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="field-label">Description Text</label>
                      <textarea 
                        className="textarea-input"
                        value={heroDesc}
                        onChange={(e) => setHeroDesc(e.target.value)}
                      />
                    </div>

                    <div className="sub-grid">
                      <div className="sub-col-6 form-group">
                        <label className="field-label">Primary Button Text</label>
                        <input 
                          type="text" 
                          className="text-input"
                          value={heroCtaText}
                          onChange={(e) => setHeroCtaText(e.target.value)}
                        />
                      </div>
                      <div className="sub-col-6 form-group">
                        <label className="field-label">Primary Button URL</label>
                        <input 
                          type="text" 
                          className="text-input"
                          value={heroCtaLink}
                          onChange={(e) => setHeroCtaLink(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="sub-grid">
                      <div className="sub-col-6 form-group">
                        <label className="field-label">Contact Button Text</label>
                        <input 
                          type="text" 
                          className="text-input"
                          value={heroContactText}
                          onChange={(e) => setHeroContactText(e.target.value)}
                        />
                      </div>
                      <div className="sub-col-6 form-group">
                        <label className="field-label">Contact Button URL</label>
                        <input 
                          type="text" 
                          className="text-input"
                          value={heroContactLink}
                          onChange={(e) => setHeroContactLink(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="sub-grid">
                      <div className="sub-col-6 form-group">
                        <label className="field-label">Secondary Action Button Text</label>
                        <input 
                          type="text" 
                          className="text-input"
                          value={heroSecCtaText}
                          onChange={(e) => setHeroSecCtaText(e.target.value)}
                        />
                      </div>
                      <div className="sub-col-6 form-group">
                        <label className="field-label">Secondary Action Button URL</label>
                        <input 
                          type="text" 
                          className="text-input"
                          value={heroSecCtaLink}
                          onChange={(e) => setHeroSecCtaLink(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="field-label">Hero Background Video Asset</label>
                      <div className="media-select-row">
                        <div className="media-thumbnail-preview">
                          {heroVideo ? (
                            <div style={{ fontSize: "11px", fontWeight: "bold", color: "#133bc9" }}>MP4</div>
                          ) : (
                            <span>WebM</span>
                          )}
                        </div>

                        {/* Custom Searchable Bento Dropdown Selector for Hero Video */}
                        <div className="media-select-container">
                          <div 
                            className="custom-dropdown-trigger" 
                            onClick={() => setIsHeroVideoDropdownOpen(!isHeroVideoDropdownOpen)}
                          >
                            <div className="dropdown-trigger-left">
                              {mediaList.find(m => m.id === heroVideo) ? (
                                <>
                                  <span className="dropdown-selected-text">{mediaList.find(m => m.id === heroVideo)?.filename}</span>
                                </>
                              ) : (
                                <span className="dropdown-selected-text placeholder">-- Choose Video Asset (Default Fallback Video Used) --</span>
                              )}
                            </div>
                            <ChevronDown className={`dropdown-chevron ${isHeroVideoDropdownOpen ? "open" : ""}`} />
                          </div>

                          {isHeroVideoDropdownOpen && (
                            <div className="custom-dropdown-menu" style={{ zIndex: 100 }}>
                              <div className="dropdown-search-wrapper" onClick={(e) => e.stopPropagation()}>
                                <Search className="dropdown-search-icon" />
                                <input 
                                  type="text" 
                                  placeholder="Search video assets..." 
                                  className="dropdown-search-input"
                                  value={heroVideoSearch}
                                  onChange={(e) => setHeroVideoSearch(e.target.value)}
                                />
                                <button
                                  type="button"
                                  onClick={handleRefreshMedia}
                                  className="btn-refresh-media"
                                  title="Refresh Files"
                                >
                                  <RefreshCw width={12} height={12} />
                                </button>
                              </div>
                              
                              <div className="dropdown-options-list">
                                <div 
                                  className={`dropdown-option ${!heroVideo ? "selected" : ""}`}
                                  onClick={() => {
                                    setHeroVideo("");
                                    setIsHeroVideoDropdownOpen(false);
                                    setHeroVideoSearch("");
                                  }}
                                >
                                  <div className="option-thumb fallback">
                                    <Sparkles width={14} height={14} />
                                  </div>
                                  <span className="option-text font-bold text-blue-600">-- Default Video (0602 (1).webm) --</span>
                                </div>
                                
                                {filteredHeroVideoMedia.map(media => (
                                  <div 
                                    key={media.id}
                                    className={`dropdown-option ${heroVideo === media.id ? "selected" : ""}`}
                                    onClick={() => {
                                      setHeroVideo(media.id);
                                      setIsHeroVideoDropdownOpen(false);
                                      setHeroVideoSearch("");
                                    }}
                                  >
                                    <div className="option-thumb fallback" style={{ color: "#475569" }}>
                                      MP4
                                    </div>
                                    <span className="option-text">{media.filename}</span>
                                  </div>
                                ))}
                                
                                {filteredHeroVideoMedia.length === 0 && heroVideoSearch && (
                                  <div className="dropdown-no-results">No videos found</div>
                                )}
                              </div>
                              
                              <div className="dropdown-footer" onClick={(e) => e.stopPropagation()}>
                                <a 
                                  href="/admin/collections/media/create" 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="btn-upload-new-media"
                                >
                                  <Upload width={12} height={12} />
                                  Upload New Video
                                </a>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Area (Sidebar details) - col-4 */}
            <div className="col-4">
              
              {/* Card 4: URL Slug Settings */}
              <div className="bento-card">
                <div className="card-header-inner">
                  <div className="card-icon-wrapper">
                    <Globe width={16} height={16} />
                  </div>
                  <h3 className="card-title">Routing Slug</h3>
                </div>

                <div className="form-group">
                  <label className="field-label">
                    URL Slug <span className="required">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. home, services" 
                    className="text-input"
                    value={slug}
                    onChange={(e) => {
                      setSlug(e.target.value);
                      setIsSlugManual(true);
                    }}
                    required
                  />
                  <div style={{ fontSize: "11px", color: "#64748b", marginTop: "8px" }}>
                    Public Route: <strong style={{ color: "#133bc9" }}>/{slug === "home" ? "" : slug}</strong>
                  </div>
                </div>
              </div>

              {/* Card 5: Page Control Settings */}
              <div className="bento-card">
                <div className="card-header-inner">
                  <div className="card-icon-wrapper">
                    <Settings width={16} height={16} />
                  </div>
                  <h3 className="card-title">Publishing & Meta</h3>
                </div>

                <div className="form-group" style={{ marginBottom: "20px" }}>
                  <label className="field-label">Page Status</label>
                  <span className="status-badge published">
                    <span className="status-dot"></span>
                    Published
                  </span>
                </div>

                <div className="info-row">
                  <span className="info-label">Database ID</span>
                  <span className="info-value" style={{ fontFamily: "monospace", fontSize: "11px" }}>
                    {isCreate ? "Generated on Save" : id}
                  </span>
                </div>

                <div className="info-row">
                  <span className="info-label">Created At</span>
                  <span className="info-value">
                    {isCreate ? "Not Created Yet" : formatDate(createdAt)}
                  </span>
                </div>

                <div className="info-row">
                  <span className="info-label">Last Modified</span>
                  <span className="info-value">
                    {isCreate ? "Not Modified Yet" : formatDate(updatedAt)}
                  </span>
                </div>
              </div>

            </div>

          </div>
        </form>
      </div>

      {/* Floating Animated Toast Notification */}
      <div className={`toast-notification ${toast.show ? "active" : ""} ${toast.type}`}>
        {toast.type === "success" ? (
          <CheckCircle2 className="toast-icon" />
        ) : (
          <AlertCircle className="toast-icon" />
        )}
        <span className="toast-message">{toast.message}</span>
      </div>
    </div>
  );
}
