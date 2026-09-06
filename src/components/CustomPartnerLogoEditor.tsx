"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  ArrowLeft, Save, Eye, FileText, Globe, Layers, Sparkles, 
  Settings, Clock, CheckCircle2, ChevronRight, Upload, Plus, AlertCircle, Trash2,
  ChevronDown, RefreshCw, Search
} from "lucide-react";

interface MediaDoc {
  id: string;
  filename: string;
  url: string;
  alt: string;
}

export default function CustomPartnerLogoEditor() {
  const router = useRouter();
  const [id, setId] = useState<string | null>(null);
  const [isCreate, setIsCreate] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [mediaList, setMediaList] = useState<MediaDoc[]>([]);
  
  // Form States
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [hidden, setHidden] = useState(false);
  
  // Custom dropdown states
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mediaSearch, setMediaSearch] = useState("");
  
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

  // 2. Fetch logo details and media files
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch media list
        const mediaRes = await fetch("/api/media?limit=100");
        if (mediaRes.ok) {
          const mediaData = await mediaRes.json();
          setMediaList(mediaData.docs || []);
        }

        // Fetch logo details if editing
        if (id) {
          const res = await fetch(`/api/partner-logos/${id}`);
          if (res.ok) {
            const data = await res.json();
            setName(data.name || "");
            setImage(data.image?.id || data.image || "");
            setHidden(data.hidden || false);
            setCreatedAt(data.createdAt || "");
            setUpdatedAt(data.updatedAt || "");
          } else {
            showToast("Failed to load partner logo data.", "error");
          }
        }
      } catch (err) {
        console.error("Fetch details error:", err);
        showToast("Error loading logo resources.", "error");
      } finally {
        setLoading(false);
      }
    };

    if (id || isCreate) {
      fetchData();
    }
  }, [id, isCreate]);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 4000);
  };

  // 3. Save handler
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      showToast("Partner Name is required.", "error");
      return;
    }

    setSaving(true);
    
    // Construct payload body
    const bodyPayload = {
      name,
      image: image || null,
      hidden
    };

    try {
      const url = isCreate ? "/api/partner-logos" : `/api/partner-logos/${id}`;
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
        showToast(isCreate ? "Partner logo created successfully!" : "Partner logo saved successfully!", "success");
        setUpdatedAt(new Date().toISOString());
        
        if (isCreate && data.doc?.id) {
          // Redirect to the edit view of the newly created logo
          setTimeout(() => {
            router.push(`/admin/collections/partner-logos/${data.doc.id}`);
          }, 1000);
        }
      } else {
        const errorData = await res.json();
        showToast(errorData.errors?.[0]?.message || "Failed to save changes.", "error");
      }
    } catch (err) {
      console.error("Save logo error:", err);
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

  // Helper to get preview logo image (SVG fallbacks included)
  const getEditorPreviewLogo = () => {
    if (image) {
      const selected = mediaList.find(m => m.id === image);
      return selected ? <img src={selected.url} alt="preview" /> : <span>No Image</span>;
    }
    
    const normalized = name.toLowerCase();
    if (normalized === "figma") {
      return (
        <svg viewBox="0 0 38 57" aria-hidden="true" style={{ height: "30px" }}>
          <path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1 1 9.5 9.5H19v-9.5Z" />
          <path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0Z" />
          <path fill="#FF7262" d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5Z" />
          <path fill="#F24E1E" d="M19 0h9.5a9.5 9.5 0 1 1 0 19H19V0Z" />
          <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5Z" />
        </svg>
      );
    }
    
    for (const [key, slug] of Object.entries(brandSlugs)) {
      if (normalized.includes(key)) {
        return <img src={`https://cdn.simpleicons.org/${slug}`} alt="" style={{ height: "26px" }} />;
      }
    }
    
    return <span>No Image</span>;
  };

  const filteredMediaList = mediaList.filter(media => 
    media.filename.toLowerCase().includes(mediaSearch.toLowerCase())
  );

  const selectedMedia = mediaList.find(m => m.id === image);

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

        .btn-save {
          display: flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #133bc9 0%, #3b82f6 100%);
          color: #ffffff;
          border: none;
          padding: 11px 24px;
          border-radius: 9999px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 12px rgba(19, 59, 201, 0.2);
        }

        .btn-save:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(19, 59, 201, 0.3);
        }

        .btn-save:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        /* 2. Bento Grid Form */
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 24px;
          padding: 0 32px;
          box-sizing: border-box;
        }

        .bento-card {
          background: #ffffff;
          border-radius: 24px;
          border: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.01), 0 10px 30px -10px rgba(0, 0, 0, 0.03);
          padding: 28px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        .col-8 { grid-column: span 8; }
        .col-4 { grid-column: span 4; }

        @media (max-width: 1024px) {
          .col-8, .col-4 {
            grid-column: span 12;
          }
        }

        /* Inner card header */
        .card-header-inner {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .card-icon-wrapper {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(19, 59, 201, 0.05);
          color: #133bc9;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-title {
          font-size: 16px;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
        }

        /* 3. Form Input elements styling */
        .form-group {
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          text-align: left;
        }

        .form-group:last-child {
          margin-bottom: 0;
        }

        .field-label {
          font-size: 12.5px;
          font-weight: 700;
          color: #475569;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .required {
          color: #ef4444;
          margin-left: 2px;
        }

        .text-input, .select-input {
          width: 100% !important;
          background: #f8fafc !important;
          border: 1px solid rgba(0, 0, 0, 0.08) !important;
          border-radius: 12px !important;
          padding: 11px 16px !important;
          font-size: 13.5px !important;
          color: #0f172a !important;
          outline: none !important;
          transition: all 0.2s ease !important;
          font-family: 'Inter', sans-serif !important;
          box-sizing: border-box !important;
        }

        .text-input:focus, .select-input:focus {
          border-color: #133bc9 !important;
          background: #ffffff !important;
          box-shadow: 0 4px 12px rgba(19, 59, 201, 0.06) !important;
        }

        /* Media Selector & Thumbnail */
        .media-select-row {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .media-thumbnail-preview {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.08);
          overflow: hidden;
          background-color: #f1f5f9;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          box-sizing: border-box;
        }

        .media-thumbnail-preview img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .media-thumbnail-preview span {
          font-size: 9px;
          color: #94a3b8;
          font-weight: 700;
          text-transform: uppercase;
        }

        /* 4. Sidebar specific styling */
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
          font-size: 12.5px;
          color: #64748b;
          margin-bottom: 12px;
          border-bottom: 1px dashed rgba(0, 0, 0, 0.04);
          padding-bottom: 10px;
        }

        .info-row:last-child {
          margin-bottom: 0;
          border: none;
          padding-bottom: 0;
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

        /* Interactive status badge toggle */
        .status-badge-toggle {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 800;
          padding: 6px 14px;
          border-radius: 9999px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: all 0.2s ease;
          user-select: none;
        }
        
        .status-badge-toggle.published {
          background-color: rgba(16, 185, 129, 0.1);
          color: #10b981;
        }
        
        .status-badge-toggle.published:hover {
          background-color: rgba(16, 185, 129, 0.2);
          transform: scale(1.03);
        }
        
        .status-badge-toggle.draft {
          background-color: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }
        
        .status-badge-toggle.draft:hover {
          background-color: rgba(239, 68, 68, 0.2);
          transform: scale(1.03);
        }
      ` }} />

      {/* Floating blocker to close dropdown when clicking outside */}
      {isDropdownOpen && (
        <div 
          style={{ position: "fixed", inset: 0, zIndex: 99, cursor: "default" }} 
          onClick={() => setIsDropdownOpen(false)} 
        />
      )}

      {/* Floating Bento Header Card */}
      <div className="bento-header-card">
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Link href="/admin/collections/partner-logos" className="circular-back-btn" title="Back to Partner Logos Directory">
            <ArrowLeft width={18} height={18} />
          </Link>
          <div className="bento-header-left">
            <div className="bento-breadcrumb">
              <span className="folder-icon">📁</span>
              <span className="crumb">Partner Logos</span>
              <span className="separator">/</span>
              <span className="crumb active">{isCreate ? "Create" : name}</span>
            </div>
            <h1 className="bento-header-title">
              {isCreate ? "Create Partner Logo" : `Edit ${name} Logo`}
            </h1>
            <p className="bento-header-desc">
              {isCreate ? "Add a new brand logo to the database" : "Modify logo details and update homepage rendering"}
            </p>
          </div>
        </div>
        <div className="bento-header-right">
          <button 
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="btn-save"
          >
            <Save width={16} height={16} />
            {saving ? "Saving Changes..." : "Save Changes"}
          </button>
        </div>
      </div>

      {/* Bento Grid Form Content */}
      <form onSubmit={handleSave} className="bento-grid">
        
        {/* Left Column: Form Details (Col-8) */}
        <div className="bento-card col-8">
          <div className="card-header-inner">
            <div className="card-icon-wrapper">
              <FileText width={16} height={16} />
            </div>
            <h3 className="card-title">Logo Details</h3>
          </div>
          
          <div className="form-group" style={{ marginBottom: "24px" }}>
            <label className="field-label">
              Partner Name <span className="required">*</span>
            </label>
            <input 
              type="text" 
              placeholder="e.g. Figma, Stripe, Shopify" 
              className="text-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="field-label">Logo Image Selection</label>
            <div className="media-select-row">
              <div className="media-thumbnail-preview">
                {getEditorPreviewLogo()}
              </div>

              {/* Custom Searchable Bento Dropdown Selector */}
              <div className="media-select-container">
                <div 
                  className="custom-dropdown-trigger" 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <div className="dropdown-trigger-left">
                    {selectedMedia ? (
                      <>
                        <img src={selectedMedia.url} className="dropdown-preview-thumb" alt="" />
                        <span className="dropdown-selected-text">{selectedMedia.filename}</span>
                      </>
                    ) : (
                      <span className="dropdown-selected-text placeholder">-- Fallback Brand SVG (SimpleIcons) --</span>
                    )}
                  </div>
                  <ChevronDown className={`dropdown-chevron ${isDropdownOpen ? "open" : ""}`} />
                </div>

                {isDropdownOpen && (
                  <div className="custom-dropdown-menu" style={{ zIndex: 100 }}>
                    <div className="dropdown-search-wrapper" onClick={(e) => e.stopPropagation()}>
                      <Search className="dropdown-search-icon" />
                      <input 
                        type="text" 
                        placeholder="Search uploaded media files..." 
                        className="dropdown-search-input"
                        value={mediaSearch}
                        onChange={(e) => setMediaSearch(e.target.value)}
                      />
                      <button
                        type="button"
                        onClick={handleRefreshMedia}
                        className="btn-refresh-media"
                        title="Refresh Media Files"
                      >
                        <RefreshCw width={12} height={12} />
                      </button>
                    </div>
                    
                    <div className="dropdown-options-list">
                      <div 
                        className={`dropdown-option ${!image ? "selected" : ""}`}
                        onClick={() => {
                          setImage("");
                          setIsDropdownOpen(false);
                          setMediaSearch("");
                        }}
                      >
                        <div className="option-thumb fallback">
                          <Sparkles width={14} height={14} />
                        </div>
                        <span className="option-text font-bold text-blue-600">-- Fallback Brand SVG (SimpleIcons) --</span>
                      </div>
                      
                      {filteredMediaList.map(media => (
                        <div 
                          key={media.id}
                          className={`dropdown-option ${image === media.id ? "selected" : ""}`}
                          onClick={() => {
                            setImage(media.id);
                            setIsDropdownOpen(false);
                            setMediaSearch("");
                          }}
                        >
                          <img src={media.url} className="option-thumb" alt="" />
                          <span className="option-text">{media.filename}</span>
                        </div>
                      ))}
                      
                      {filteredMediaList.length === 0 && mediaSearch && (
                        <div className="dropdown-no-results">No media files found</div>
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
                        Upload New Logo File
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <p style={{ fontSize: "11px", color: "#64748b", margin: "4px 0 0 0", fontStyle: "italic" }}>
              Optional: select an uploaded image file. If left blank, simpleicons official vector color SVG will be used.
            </p>
          </div>
        </div>

        {/* Right Column: Metadata & Sidebar (Col-4) */}
        <div className="bento-card col-4">
          <div className="card-header-inner">
            <div className="card-icon-wrapper">
              <Settings width={16} height={16} />
            </div>
            <h3 className="card-title">Logo Info & Settings</h3>
          </div>

          <div className="form-group" style={{ marginBottom: "20px" }}>
            <label className="field-label">Home Page Visibility</label>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "4px" }}>
              <button
                type="button"
                className={`status-badge-toggle ${hidden ? "draft" : "published"}`}
                onClick={() => setHidden(!hidden)}
                style={{ cursor: "pointer", border: "none", outline: "none" }}
              >
                <span className="status-dot"></span>
                {hidden ? "Hidden (Inactive)" : "Visible (Active)"}
              </button>
            </div>
            <p style={{ fontSize: "11px", color: "#64748b", margin: "4px 0 0 0" }}>
              Click badge to toggle visibility of this logo in the homepage ticker.
            </p>
          </div>

          {!isCreate && (
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
              <div className="info-row">
                <span className="info-label">Document ID</span>
                <span className="info-value" style={{ fontFamily: "monospace", fontSize: "11px" }}>{id}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Created At</span>
                <span className="info-value">{formatDate(createdAt)}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Last Updated</span>
                <span className="info-value">{formatDate(updatedAt)}</span>
              </div>
            </div>
          )}
        </div>

      </form>

      {/* Floating Toast Notification */}
      <div className={`toast-notification ${toast.show ? "active" : ""}`}>
        {toast.type === "success" ? (
          <CheckCircle2 className="toast-icon success" />
        ) : (
          <AlertCircle className="toast-icon error" />
        )}
        <span className="toast-message">{toast.message}</span>
      </div>
    </div>
  );
}
