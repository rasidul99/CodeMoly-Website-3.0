"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  ArrowLeft, Save, FileText, Globe, Layers, Sparkles, 
  Settings, Clock, CheckCircle2, ChevronRight, Upload, Plus, AlertCircle, Trash2,
  ChevronDown, RefreshCw, Search, Image, FileUp, File, ExternalLink, Video
} from "lucide-react";

interface MediaDoc {
  id: string;
  filename: string;
  url: string;
  alt: string;
  filesize: number;
  mimeType: string;
  width?: number;
  height?: number;
  createdAt: string;
  updatedAt: string;
}

export default function CustomMediaEditor() {
  const router = useRouter();
  const [id, setId] = useState<string | null>(null);
  const [isCreate, setIsCreate] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  // File upload state
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [localPreviewUrl, setLocalPreviewUrl] = useState<string>("");
  const [dragActive, setDragActive] = useState(false);

  // Form Fields
  const [alt, setAlt] = useState("");
  
  // Existing file metadata (when editing)
  const [filename, setFilename] = useState("");
  const [filesize, setFilesize] = useState(0);
  const [mimeType, setMimeType] = useState("");
  const [width, setWidth] = useState<number | undefined>(undefined);
  const [height, setHeight] = useState<number | undefined>(undefined);
  const [url, setUrl] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");

  // Toast States
  const [toast, setToast] = useState<{ show: boolean; message: string; type: "success" | "error" }>({
    show: false,
    message: "",
    type: "success"
  });

  // Local object URL generator for previewing new files
  useEffect(() => {
    if (!selectedFile) {
      setLocalPreviewUrl("");
      return;
    }
    const preview = URL.createObjectURL(selectedFile);
    setLocalPreviewUrl(preview);
    return () => URL.revokeObjectURL(preview);
  }, [selectedFile]);

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

  // 2. Fetch media details if editing
  useEffect(() => {
    const fetchMediaDetails = async () => {
      if (!id) return;
      try {
        const res = await fetch(`/api/media/${id}`);
        if (res.ok) {
          const data = await res.json();
          setAlt(data.alt || "");
          setFilename(data.filename || "");
          setFilesize(data.filesize || 0);
          setMimeType(data.mimeType || "");
          setWidth(data.width);
          setHeight(data.height);
          setUrl(data.url || "");
          setCreatedAt(data.createdAt || "");
          setUpdatedAt(data.updatedAt || "");
        } else {
          showToast("Failed to load media details.", "error");
        }
      } catch (err) {
        console.error("Fetch media error:", err);
        showToast("Error loading media file resources.", "error");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchMediaDetails();
    }
  }, [id]);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 4000);
  };

  const formatBytes = (bytes: number, decimals = 2) => {
    if (!bytes) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
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

  // Drag and drop event handlers
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      // Auto populate alt text if empty
      if (!alt) {
        const nameWithoutExt = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
        setAlt(nameWithoutExt.replace(/[-_]/g, ' '));
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      // Auto populate alt text if empty
      if (!alt) {
        const nameWithoutExt = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
        setAlt(nameWithoutExt.replace(/[-_]/g, ' '));
      }
    }
  };

  // Save/Upload handler
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isCreate && !selectedFile) {
      showToast("Please select or drop a file to upload.", "error");
      return;
    }
    if (!alt.trim()) {
      showToast("Alt Text is required.", "error");
      return;
    }

    setSaving(true);
    
    // Construct FormData for multipart upload
    const formData = new FormData();
    formData.append("alt", alt);
    if (selectedFile) {
      formData.append("file", selectedFile);
    }

    try {
      const urlEndpoint = isCreate ? "/api/media" : `/api/media/${id}`;
      const method = isCreate ? "POST" : "PATCH";

      const res = await fetch(urlEndpoint, {
        method,
        body: formData,
        // Content-Type is intentionally omitted for FormData
      });

      if (res.ok) {
        const data = await res.json();
        showToast(isCreate ? "File uploaded successfully!" : "Media saved successfully!", "success");
        
        if (isCreate && data.doc?.id) {
          // Redirect to the newly created media edit view
          setTimeout(() => {
            router.push(`/admin/collections/media/${data.doc.id}`);
          }, 1000);
        } else if (data.doc) {
          // Populate states with updated doc info
          setAlt(data.doc.alt || "");
          setFilename(data.doc.filename || "");
          setFilesize(data.doc.filesize || 0);
          setMimeType(data.doc.mimeType || "");
          setWidth(data.doc.width);
          setHeight(data.doc.height);
          setUrl(data.doc.url || "");
          setCreatedAt(data.doc.createdAt || "");
          setUpdatedAt(data.doc.updatedAt || "");
          setSelectedFile(null); // Clear selected file override
        }
      } else {
        const errorData = await res.json();
        showToast(errorData.errors?.[0]?.message || "Failed to upload/save file.", "error");
      }
    } catch (err) {
      console.error("Save media error:", err);
      showToast("Error connecting to server API.", "error");
    } finally {
      setSaving(false);
    }
  };

  // Helper to render media preview (local or server-side URL)
  const renderPreview = () => {
    const isImageMime = (mime: string) => mime.startsWith("image/");
    const isVideoMime = (mime: string) => mime.startsWith("video/");

    if (selectedFile) {
      // Local preview
      if (isImageMime(selectedFile.type)) {
        return <img src={localPreviewUrl} className="media-preview-display" alt="Preview" />;
      } else if (isVideoMime(selectedFile.type)) {
        return (
          <video src={localPreviewUrl} controls className="media-preview-display">
            Your browser does not support video previews.
          </video>
        );
      } else {
        return (
          <div className="media-non-image-preview">
            <File width={48} height={48} className="text-slate-400" />
            <span className="file-name-label">{selectedFile.name}</span>
            <span className="file-size-label">{formatBytes(selectedFile.size)}</span>
          </div>
        );
      }
    }

    if (!isCreate && url) {
      // Server-side preview
      if (isImageMime(mimeType)) {
        return <img src={url} className="media-preview-display" alt={alt} />;
      } else if (isVideoMime(mimeType)) {
        return (
          <video src={url} controls className="media-preview-display">
            Your browser does not support video previews.
          </video>
        );
      } else {
        return (
          <div className="media-non-image-preview">
            <File width={48} height={48} className="text-slate-400" />
            <span className="file-name-label">{filename}</span>
            <span className="file-size-label">{formatBytes(filesize)}</span>
          </div>
        );
      }
    }

    return null;
  };

  if (loading) {
    return (
      <div className="custom-editor-loading">
        <div className="loading-spinner-wrapper">
          <div className="spinner"></div>
          <p>Loading media editor...</p>
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

        .btn-save:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(19, 59, 201, 0.35);
        }

        .btn-save:disabled {
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
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.01), 0 10px 30px -10px rgba(0, 0, 0, 0.02);
          padding: 32px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        .card-header-inner {
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.04);
          padding-bottom: 16px;
          margin-bottom: 24px;
        }

        .card-icon-wrapper {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background-color: rgba(19, 59, 201, 0.06);
          color: #133bc9;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-title {
          font-size: 15px;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          letter-spacing: -0.01em;
        }

        /* Form Controls */
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 100%;
          box-sizing: border-box;
        }

        .field-label {
          font-size: 12px;
          font-weight: 750;
          color: #475569;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          text-align: left;
        }

        .required {
          color: #ef4444;
          font-weight: bold;
        }

        .text-input {
          width: 100%;
          background: #f8fafc;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 12px;
          padding: 12px 16px;
          font-size: 13.5px;
          font-weight: 600;
          color: #0f172a;
          transition: all 0.25s ease;
          box-sizing: border-box;
          outline: none;
          font-family: 'Inter', sans-serif;
        }

        .text-input:focus {
          border-color: #133bc9;
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(19, 59, 201, 0.08);
        }

        /* Dropzone component */
        .media-dropzone {
          width: 100%;
          border: 2px dashed rgba(19, 59, 201, 0.2);
          border-radius: 16px;
          padding: 48px 24px;
          text-align: center;
          background-color: #f8fafc;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          box-sizing: border-box;
        }

        .media-dropzone.drag-active {
          border-color: #133bc9;
          background-color: rgba(19, 59, 201, 0.04);
          transform: scale(1.01);
        }

        .media-dropzone:hover {
          border-color: #133bc9;
          background-color: rgba(19, 59, 201, 0.02);
        }

        .upload-icon-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: rgba(19, 59, 201, 0.06);
          color: #133bc9;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .media-dropzone:hover .upload-icon-circle {
          transform: translateY(-4px);
          background-color: #133bc9;
          color: #ffffff;
        }

        .dropzone-title {
          font-size: 14px;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
        }

        .dropzone-desc {
          font-size: 11.5px;
          color: #64748b;
          margin: 0;
        }

        /* Preview container */
        .media-preview-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          padding: 24px;
          background-color: #f8fafc;
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 16px;
          width: 100%;
          box-sizing: border-box;
        }

        .media-preview-display {
          max-width: 100%;
          max-height: 280px;
          border-radius: 12px;
          object-fit: contain;
          background-color: #ffffff;
          border: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 4px 12px rgba(0,0,0,0.02);
        }

        .media-non-image-preview {
          padding: 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 12px;
          width: 100%;
          max-width: 320px;
          box-sizing: border-box;
          color: #64748b;
        }

        .file-name-label {
          font-size: 13px;
          font-weight: 700;
          color: #0f172a;
          word-break: break-all;
          text-align: center;
        }

        .file-size-label {
          font-size: 11px;
          color: #64748b;
          font-weight: 500;
        }

        .btn-change-file {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11.5px;
          font-weight: 700;
          color: #133bc9;
          background: rgba(19, 59, 201, 0.05);
          border: none;
          padding: 8px 16px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-change-file:hover {
          background: rgba(19, 59, 201, 0.1);
        }

        /* Sidebar Meta styling */
        .info-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          color: #64748b;
          border-bottom: 1px solid rgba(0, 0, 0, 0.04);
          padding-bottom: 10px;
          margin-bottom: 10px;
        }

        .info-row:last-child {
          border-bottom: none;
          padding-bottom: 0;
          margin-bottom: 0;
        }

        .info-label {
          font-weight: 500;
        }

        .info-value {
          font-weight: 700;
          color: #334155;
          max-width: 60%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          text-align: right;
        }

        .btn-view-direct {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: #f8fafc;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 12px;
          padding: 10px;
          width: 100%;
          color: #334155;
          text-decoration: none;
          font-size: 12.5px;
          font-weight: 700;
          box-sizing: border-box;
          transition: all 0.2s ease;
          margin-top: 16px;
        }

        .btn-view-direct:hover {
          background: #f1f5f9;
          color: #133bc9;
          border-color: rgba(19, 59, 201, 0.15);
        }

        /* Toast notifications */
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

        .toast-icon.success {
          color: #10b981;
        }

        .toast-icon.error {
          color: #ef4444;
        }

        .toast-message {
          font-size: 13.5px;
          font-weight: 700;
          color: #1e293b;
        }
      ` }} />

      {/* Floating Bento Header Card */}
      <div className="bento-header-card">
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Link href="/admin/collections/media" className="circular-back-btn" title="Back to Media Library">
            <ArrowLeft width={18} height={18} />
          </Link>
          <div className="bento-header-left">
            <div className="bento-breadcrumb">
              <span className="folder-icon">📁</span>
              <span className="crumb">Media Library</span>
              <span className="separator">/</span>
              <span className="crumb active">{isCreate ? "Upload" : filename}</span>
            </div>
            <h1 className="bento-header-title">
              {isCreate ? "Upload New File" : `Edit Media details`}
            </h1>
            <p className="bento-header-desc">
              {isCreate ? "Upload a new file or image to the database" : "Modify file metadata and view file dimensions"}
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
            {saving ? "Uploading File..." : "Save Media"}
          </button>
        </div>
      </div>

      {/* Bento Grid Form Content */}
      <div className="editor-form-container">
        <form onSubmit={handleSave} className="bento-grid">
          
          {/* Left Column: Form Details (Col-8) */}
          <div className="bento-card col-8" style={{ gap: "24px" }}>
            <div className="card-header-inner" style={{ marginBottom: "8px" }}>
              <div className="card-icon-wrapper">
                <FileText width={16} height={16} />
              </div>
              <h3 className="card-title">Media File & Details</h3>
            </div>
            
            {/* File Dropzone/Preview Area */}
            <div className="form-group">
              <label className="field-label">File Selection <span className="required">*</span></label>
              {(selectedFile || (!isCreate && url)) ? (
                <div className="media-preview-container">
                  {renderPreview()}
                  <button 
                    type="button"
                    onClick={() => {
                      setSelectedFile(null);
                      // Clear input element manually
                      const input = document.getElementById("file-upload-input") as HTMLInputElement;
                      if (input) input.value = "";
                    }}
                    className="btn-change-file"
                  >
                    <RefreshCw width={12} height={12} />
                    Choose Different File
                  </button>
                </div>
              ) : (
                <div 
                  className={`media-dropzone ${dragActive ? "drag-active" : ""}`}
                  onDragEnter={handleDrag}
                  onDragOver={handleDrag}
                  onDragLeave={handleDrag}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById("file-upload-input")?.click()}
                >
                  <div className="upload-icon-circle">
                    <FileUp width={20} height={20} />
                  </div>
                  <p className="dropzone-title">Drag and drop file here, or click to browse</p>
                  <p className="dropzone-desc">Supports PNG, JPEG, SVG, WebP, WebM, MP4 up to 50MB</p>
                  <input 
                    type="file" 
                    id="file-upload-input" 
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                    accept="image/*,video/*"
                  />
                </div>
              )}
            </div>

            {/* Alt text field */}
            <div className="form-group">
              <label className="field-label">
                Alternative Text (Alt) <span className="required">*</span>
              </label>
              <input 
                type="text" 
                placeholder="e.g. CodeMoly company white logo banner" 
                className="text-input"
                value={alt}
                onChange={(e) => setAlt(e.target.value)}
                required
              />
              <p style={{ fontSize: "11px", color: "#64748b", margin: "4px 0 0 0", textAlign: "left" }}>
                Important for accessibility (screen readers) and SEO search engine indexing.
              </p>
            </div>
          </div>

          {/* Right Column: Metadata & Sidebar (Col-4) */}
          <div className="bento-card col-4">
            <div className="card-header-inner">
              <div className="card-icon-wrapper">
                <Settings width={16} height={16} />
              </div>
              <h3 className="card-title">File Specifications</h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
              {!isCreate && (
                <div className="info-row">
                  <span className="info-label">Document ID</span>
                  <span className="info-value" style={{ fontFamily: "monospace", fontSize: "11px" }}>{id}</span>
                </div>
              )}

              {(filename || (selectedFile && selectedFile.name)) && (
                <div className="info-row">
                  <span className="info-label">Filename</span>
                  <span className="info-value" title={selectedFile ? selectedFile.name : filename}>
                    {selectedFile ? selectedFile.name : filename}
                  </span>
                </div>
              )}

              {(filesize > 0 || (selectedFile && selectedFile.size > 0)) && (
                <div className="info-row">
                  <span className="info-label">File Size</span>
                  <span className="info-value">
                    {selectedFile ? formatBytes(selectedFile.size) : formatBytes(filesize)}
                  </span>
                </div>
              )}

              {(mimeType || (selectedFile && selectedFile.type)) && (
                <div className="info-row">
                  <span className="info-label">Mime Type</span>
                  <span className="info-value">
                    {selectedFile ? selectedFile.type : mimeType}
                  </span>
                </div>
              )}

              {/* Show image dimensions if available */}
              {!selectedFile && width && height && (
                <div className="info-row">
                  <span className="info-label">Dimensions</span>
                  <span className="info-value">{width} × {height} px</span>
                </div>
              )}

              {!isCreate && createdAt && (
                <div className="info-row">
                  <span className="info-label">Uploaded At</span>
                  <span className="info-value">{formatDate(createdAt)}</span>
                </div>
              )}

              {!isCreate && updatedAt && (
                <div className="info-row">
                  <span className="info-label">Last Updated</span>
                  <span className="info-value">{formatDate(updatedAt)}</span>
                </div>
              )}
            </div>

            {!isCreate && url && (
              <a href={url} target="_blank" rel="noopener noreferrer" className="btn-view-direct">
                <ExternalLink width={14} height={14} />
                View Original File
              </a>
            )}
          </div>

        </form>
      </div>

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
