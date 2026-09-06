"use client";

import React, { useState } from "react";
import { 
  Search, Bell, Settings, ArrowUpRight, ArrowDownRight, 
  MoreHorizontal, ChevronDown, Download, Filter, Globe
} from "lucide-react";

export default function CustomDashboard() {
  const [timeView, setTimeView] = useState("Month View");

  return (
    <div className="vault-dashboard-wrapper">
      {/* Dynamic CSS Styling for Skeuomorphic Light Mode Layout */}
      <style dangerouslySetInnerHTML={{ __html: `
        .vault-dashboard-wrapper {
          background-color: #f4f6fa;
          font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
          min-height: 100vh;
          padding: 24px 32px 40px 32px;
          color: #1e293b;
        }

        /* Top Header Area */
        .vault-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }

        .vault-header-left h1 {
          font-size: 26px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 4px 0;
          letter-spacing: -0.02em;
        }

        .vault-header-left p {
          font-size: 13px;
          color: #64748b;
          margin: 0;
          font-weight: 500;
        }

        .vault-header-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        /* Search Bar */
        .vault-search-container {
          position: relative;
          width: 260px;
        }

        .vault-search-input {
          width: 100%;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 9999px;
          padding: 9px 16px 9px 40px;
          font-size: 13px;
          color: #0f172a;
          outline: none;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.02);
          transition: all 0.2s ease;
        }

        .vault-search-input:focus {
          border-color: #0055ff;
          box-shadow: 0 4px 12px rgba(0, 85, 255, 0.08);
        }

        .vault-search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
          width: 16px;
          height: 16px;
        }

        /* Header Icons */
        .vault-header-btn {
          width: 38px;
          height: 38px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.04);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          cursor: pointer;
          position: relative;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.02);
          transition: all 0.2s ease;
        }

        .vault-header-btn:hover {
          color: #0f172a;
          background: #f8fafc;
          transform: translateY(-1px);
        }

        .vault-header-btn-badge {
          position: absolute;
          top: 2px;
          right: 2px;
          width: 8px;
          height: 8px;
          background: #ef4444;
          border-radius: 50%;
          border: 1.5px solid #ffffff;
        }

        /* Profile Block */
        .vault-profile-block {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #ffffff;
          padding: 4px 16px 4px 6px;
          border-radius: 9999px;
          border: 1px solid rgba(0, 0, 0, 0.04);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.02);
        }

        .vault-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: #475569;
          font-size: 13px;
          overflow: hidden;
        }

        .vault-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .vault-profile-info {
          display: flex;
          flex-direction: column;
        }

        .vault-profile-name {
          font-size: 12.5px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.2;
        }

        .vault-profile-email {
          font-size: 10.5px;
          color: #94a3b8;
          line-height: 1.2;
        }

        /* Main Dashboard Grid */
        .vault-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 24px;
        }

        .vault-card {
          background: #ffffff;
          border-radius: 24px;
          border: 1px solid rgba(0, 0, 0, 0.03);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
          padding: 24px;
          position: relative;
        }

        .vault-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .vault-card-title {
          font-size: 16px;
          font-weight: 850;
          color: #0f172a;
          margin: 0;
          letter-spacing: -0.01em;
        }

        .vault-card-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .vault-action-dot {
          background: transparent;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .vault-action-dot:hover {
          color: #475569;
        }

        /* Time Selection Dropdown */
        .vault-time-select {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #f8fafc;
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 9999px;
          padding: 6px 12px;
          font-size: 11.5px;
          font-weight: 700;
          color: #475569;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .vault-time-select:hover {
          background: #f1f5f9;
          color: #0f172a;
        }

        /* Metric Pill Filter / Actions */
        .vault-pill-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 9999px;
          padding: 6px 12px;
          font-size: 11.5px;
          font-weight: 700;
          color: #475569;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.01);
        }

        .vault-pill-btn:hover {
          background: #f8fafc;
          color: #0f172a;
        }

        /* Donut Chart Inner Text */
        .donut-inner-text {
          font-family: 'Plus Jakarta Sans', sans-serif;
          text-anchor: middle;
          dominant-baseline: middle;
        }

        /* 1. Financial Overview Widget */
        .social-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .social-stat-item {
          background: #f8fafc;
          border-radius: 18px;
          padding: 16px;
          border: 1px solid rgba(0, 0, 0, 0.02);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .social-stat-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.02);
        }

        .social-stat-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .social-channel {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          font-weight: 700;
          color: #334155;
        }

        .social-icon-wrapper {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .social-icon-wrapper.instagram { background: rgba(225, 48, 108, 0.1); color: #e1306c; }
        .social-icon-wrapper.facebook { background: rgba(24, 119, 242, 0.1); color: #1877f2; }
        .social-icon-wrapper.twitter { background: rgba(29, 161, 242, 0.1); color: #1da1f2; }
        .social-icon-wrapper.youtube { background: rgba(255, 0, 0, 0.1); color: #ff0000; }

        .social-stat-arrow {
          color: #94a3b8;
        }

        .social-stat-num {
          font-size: 22px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 4px;
          letter-spacing: -0.01em;
        }

        .social-stat-lbl {
          font-size: 11.5px;
          color: #94a3b8;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .social-stat-trend {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 10.5px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 9999px;
        }

        .social-stat-trend.up {
          background: rgba(34, 197, 94, 0.08);
          color: #22c55e;
        }

        .social-stat-trend.down {
          background: rgba(239, 68, 68, 0.08);
          color: #ef4444;
        }

        /* Donut Legend */
        .donut-legend {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-top: 16px;
        }

        .donut-legend-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11.5px;
          font-weight: 700;
          color: #64748b;
        }

        .donut-legend-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        /* 3. Visitors Blue Card */
        .visitors-card {
          background: #0055ff;
          color: #ffffff;
          border-radius: 20px;
          padding: 20px;
          box-shadow: 0 10px 25px rgba(0, 85, 255, 0.15);
          margin-bottom: 16px;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s ease;
        }

        .visitors-card:hover {
          transform: translateY(-2px);
        }

        .visitors-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .visitors-header-left {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.85);
        }

        .visitors-card-num {
          font-size: 24px;
          font-weight: 850;
          letter-spacing: -0.01em;
          margin-bottom: 4px;
        }

        .visitors-card-trend {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 10px;
          font-weight: 700;
          background: rgba(255, 255, 255, 0.15);
          padding: 3px 8px;
          border-radius: 9999px;
          color: #ffffff;
        }

        .visitors-chart-container {
          margin-top: 16px;
          height: 48px;
          width: 100%;
        }

        /* Mini Metric Card */
        .mini-metric-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 16px;
          border: 1px solid rgba(0, 0, 0, 0.03);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.01);
          margin-bottom: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: transform 0.2s ease;
        }

        .mini-metric-card:hover {
          transform: translateY(-1px);
        }

        .mini-metric-info p {
          font-size: 11.5px;
          color: #94a3b8;
          font-weight: 600;
          margin: 0 0 4px 0;
        }

        .mini-metric-info h3 {
          font-size: 18px;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          letter-spacing: -0.01em;
        }

        .mini-metric-info span {
          font-size: 10.5px;
          color: #0055ff;
          font-weight: 700;
          display: block;
          margin-top: 4px;
        }

        .mini-metric-arrow {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #f8fafc;
          border: 1px solid rgba(0, 0, 0, 0.03);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
        }

        /* 4. Income Sources Card styling */
        .income-stat-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-top: 10px;
        }

        .income-legend-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 35%;
        }

        .income-legend-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .income-legend-lbl {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12.5px;
          font-weight: 700;
          color: #475569;
        }

        .income-legend-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
        }

        .income-legend-pct {
          font-size: 12px;
          color: #94a3b8;
          font-weight: 600;
          padding-left: 13px;
        }

        .income-bar-chart {
          width: 65%;
          height: 180px;
          display: flex;
          align-items: flex-end;
          justify-content: space-around;
          padding-bottom: 10px;
        }

        .income-bar-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 40px;
          height: 100%;
          justify-content: flex-end;
          position: relative;
        }

        .income-bar {
          width: 24px;
          border-radius: 9999px 9999px 0 0;
          transition: height 0.6s ease;
          position: relative;
        }

        .income-bar-tag {
          position: absolute;
          top: -24px;
          font-size: 10.5px;
          font-weight: 700;
          color: #64748b;
          white-space: nowrap;
        }

        /* Skeuomorphic Tag Bubble */
        .income-bubble-callout {
          position: absolute;
          top: -38px;
          background: #0055ff;
          color: #ffffff;
          font-size: 10.5px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 6px;
          box-shadow: 0 4px 10px rgba(0, 85, 255, 0.2);
          animation: floatTag 2s infinite ease-in-out;
        }

        .income-bubble-callout::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          border-width: 4px 4px 0;
          border-style: solid;
          border-color: #0055ff transparent;
          display: block;
          width: 0;
        }

        @keyframes floatTag {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        /* 5. Monthly Income Widget styling */
        .monthly-income-value {
          margin-top: -8px;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .monthly-income-num {
          font-size: 22px;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.01em;
        }

        .monthly-income-highlight {
          background: rgba(0, 85, 255, 0.08);
          color: #0055ff;
          font-size: 11px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 6px;
        }

        .monthly-income-chart {
          width: 100%;
          height: 150px;
        }

        .monthly-income-bubble {
          position: absolute;
          background: #0f172a;
          color: #ffffff;
          font-size: 10.5px;
          font-weight: 700;
          padding: 4px 8px;
          border-radius: 6px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
          pointer-events: none;
        }

        .monthly-income-bubble::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          border-width: 4px 4px 0;
          border-style: solid;
          border-color: #0f172a transparent;
          display: block;
          width: 0;
        }

        /* Responsive Layouts */
        @media (max-width: 1200px) {
          .vault-grid {
            grid-template-columns: repeat(1, 1fr);
          }
          .vault-card {
            grid-column: span 12 !important;
          }
        }
      ` }} />

      {/* Header Area */}
      <div className="vault-header">
        <div className="vault-header-left">
          <h1>Welcome Back, Harley!</h1>
          <p>Current summary financial report</p>
        </div>

        <div className="vault-header-right">
          {/* Search Bar */}
          <div className="vault-search-container">
            <Search className="vault-search-icon" />
            <input 
              type="text" 
              placeholder="Search" 
              className="vault-search-input"
            />
          </div>

          {/* Notifications Button */}
          <button className="vault-header-btn" aria-label="Notifications">
            <Bell className="w-[18px] h-[18px]" />
            <div className="vault-header-btn-badge" />
          </button>

          {/* Settings Button */}
          <button className="vault-header-btn" aria-label="Settings">
            <Settings className="w-[18px] h-[18px]" />
          </button>

          {/* Profile User avatar block */}
          <div className="vault-profile-block">
            <div className="vault-avatar">
              <img src="/portfolio/tailored-solutions.png" alt="Harley Morse Profile" />
            </div>
            <div className="vault-profile-info">
              <span className="vault-profile-name">Harley Morse</span>
              <span className="vault-profile-email">harleymorse@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid Widgets Layout */}
      <div className="vault-grid">

        {/* 1. Financial Overview Widget */}
        <div className="vault-card" style={{ gridColumn: "span 5" }}>
          <div className="vault-card-header">
            <h2 className="vault-card-title">Financial Overview</h2>
            <div className="vault-card-actions">
              <button className="vault-action-dot" aria-label="More options">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="social-stats-grid">
            {/* Instagram stat */}
            <div className="social-stat-item">
              <div className="social-stat-header">
                <div className="social-channel">
                  <div className="social-icon-wrapper instagram">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  </div>
                  Instagram
                </div>
                <ArrowUpRight className="social-stat-arrow w-4 h-4" />
              </div>
              <div className="social-stat-num">56.830</div>
              <div className="social-stat-lbl">Follower</div>
              <div className="social-stat-trend up">
                <ArrowUpRight className="w-3.5 h-3.5" /> 20%
              </div>
            </div>

            {/* Facebook stat */}
            <div className="social-stat-item">
              <div className="social-stat-header">
                <div className="social-channel">
                  <div className="social-icon-wrapper facebook">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </div>
                  Facebook
                </div>
                <ArrowUpRight className="social-stat-arrow w-4 h-4" />
              </div>
              <div className="social-stat-num">43.751</div>
              <div className="social-stat-lbl">Follower</div>
              <div className="social-stat-trend down">
                <ArrowDownRight className="w-3.5 h-3.5" /> 8%
              </div>
            </div>

            {/* Twitter stat */}
            <div className="social-stat-item">
              <div className="social-stat-header">
                <div className="social-channel">
                  <div className="social-icon-wrapper twitter">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                    </svg>
                  </div>
                  Twitter
                </div>
                <ArrowUpRight className="social-stat-arrow w-4 h-4" />
              </div>
              <div className="social-stat-num">67.209</div>
              <div className="social-stat-lbl">Follower</div>
              <div className="social-stat-trend down">
                <ArrowDownRight className="w-3.5 h-3.5" /> 12%
              </div>
            </div>

            {/* YouTube stat */}
            <div className="social-stat-item">
              <div className="social-stat-header">
                <div className="social-channel">
                  <div className="social-icon-wrapper youtube">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
                    </svg>
                  </div>
                  YouTube
                </div>
                <ArrowUpRight className="social-stat-arrow w-4 h-4" />
              </div>
              <div className="social-stat-num">29.284</div>
              <div className="social-stat-lbl">Subscribe</div>
              <div className="social-stat-trend up">
                <ArrowUpRight className="w-3.5 h-3.5" /> 9%
              </div>
            </div>
          </div>
        </div>

        {/* 2. Expenditure Circular Donut Widget */}
        <div className="vault-card" style={{ gridColumn: "span 4" }}>
          <div className="vault-card-header">
            <h2 className="vault-card-title">Expenditure</h2>
            <div className="vault-card-actions">
              <button className="vault-action-dot" aria-label="More options">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "180px", position: "relative" }}>
            <svg width="170" height="170" viewBox="0 0 100 100">
              {/* Promotion Blue Segment: 55% */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="#0055ff"
                strokeWidth="11"
                strokeDasharray="251.2"
                strokeDashoffset="62.8" /* 25% offset */
                transform="rotate(-90 50 50)"
              />
              {/* Hosting Dark Blue Segment: 28% */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="#0d1b46"
                strokeWidth="11"
                strokeDasharray="251.2"
                strokeDashoffset="180.8" /* starting after promotion segment */
                transform="rotate(-90 50 50)"
              />
              {/* Tool Light Blue Segment: 17% */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="#8bbbff"
                strokeWidth="11"
                strokeDasharray="251.2"
                strokeDashoffset="211.0"
                transform="rotate(-90 50 50)"
              />
              
              {/* Donut Inner Center Text */}
              <text x="50" y="44" className="donut-inner-text" fontSize="7" fill="#94a3b8" fontWeight="600">
                Total Value
              </text>
              <text x="50" y="56" className="donut-inner-text" fontSize="13" fill="#0f172a" fontWeight="800">
                83%
              </text>
            </svg>
          </div>

          <div className="donut-legend">
            <div className="donut-legend-item">
              <div className="donut-legend-dot" style={{ background: "#0d1b46" }} />
              Hosting
            </div>
            <div className="donut-legend-item">
              <div className="donut-legend-dot" style={{ background: "#8bbbff" }} />
              Tool
            </div>
            <div className="donut-legend-item">
              <div className="donut-legend-dot" style={{ background: "#0055ff" }} />
              Promotion
            </div>
          </div>
        </div>

        {/* 3. Visitors Blue Card & Target Stack Widget */}
        <div style={{ gridColumn: "span 3", display: "flex", flexDirection: "column" }}>
          {/* Visitors card */}
          <div className="visitors-card">
            <div className="visitors-header">
              <div className="visitors-header-left">
                <Globe className="w-4 h-4" />
                Visitors
              </div>
              <ArrowUpRight className="w-4 h-4" />
            </div>
            <div className="visitors-card-num">296.56K</div>
            <div className="visitors-card-trend">
              <ArrowUpRight className="w-3.5 h-3.5" /> 20% <span style={{ opacity: 0.7, marginLeft: "4px" }}>Last 1 month</span>
            </div>

            {/* Custom SVG white line chart trendline */}
            <div className="visitors-chart-container">
              <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
                <path 
                  d="M0 35 Q15 25 30 32 T60 15 T85 10 T100 5" 
                  fill="none" 
                  stroke="#ffffff" 
                  strokeWidth="3.5" 
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* This Month's Target card */}
          <div className="mini-metric-card">
            <div className="mini-metric-info">
              <p>This Month's Target</p>
              <h3>20.985K</h3>
              <span>Collected $12.561</span>
            </div>
            <div className="mini-metric-arrow">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          {/* Target next month card */}
          <div className="mini-metric-card" style={{ marginBottom: 0 }}>
            <div className="mini-metric-info">
              <p>Target next month</p>
              <h3>25.672K</h3>
            </div>
            <div className="mini-metric-arrow">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* 4. Income Sources Widget */}
        <div className="vault-card" style={{ gridColumn: "span 7" }}>
          <div className="vault-card-header">
            <div>
              <h2 className="vault-card-title">Income Sources</h2>
              <span style={{ fontSize: "11.5px", color: "#94a3b8", fontWeight: 600 }}>Income Sources Statistic in a month</span>
            </div>
            <div className="vault-card-actions">
              <button className="vault-time-select" aria-label="Select view window">
                {timeView} <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
            <span style={{ fontSize: "24px", fontWeight: 850, color: "#0f172a", letterSpacing: "-0.01em" }}>$10,248K</span>
          </div>

          <div className="income-stat-row">
            {/* Legend Col */}
            <div className="income-legend-col">
              {/* Advertisement stat */}
              <div className="income-legend-item">
                <div className="income-legend-lbl">
                  <div className="income-legend-dot" style={{ background: "#0d1b46" }} />
                  Advertisement
                </div>
                <div className="income-legend-pct">8.9%</div>
              </div>

              {/* Own Product stat */}
              <div className="income-legend-item">
                <div className="income-legend-lbl">
                  <div className="income-legend-dot" style={{ background: "#0055ff" }} />
                  Own product
                </div>
                <div className="income-legend-pct">20%</div>
              </div>

              {/* Sponsors stat */}
              <div className="income-legend-item">
                <div className="income-legend-lbl">
                  <div className="income-legend-dot" style={{ background: "#8bbbff" }} />
                  Sponsors
                </div>
                <div className="income-legend-pct">15%</div>
              </div>

              {/* Affiliate stat */}
              <div className="income-legend-item">
                <div className="income-legend-lbl">
                  <div className="income-legend-dot" style={{ background: "#60a5fa" }} />
                  Affiliate
                </div>
                <div className="income-legend-pct">18%</div>
              </div>
            </div>

            {/* SVG Rounded Bar Chart Col */}
            <div className="income-bar-chart">
              {/* Bar 1 - Advertisement */}
              <div className="income-bar-wrapper">
                <div className="income-bar" style={{ height: "45%", background: "#0d1b46" }} />
                <span className="income-bar-tag">8.9%</span>
              </div>

              {/* Bar 2 - Own product with highlight bubble */}
              <div className="income-bar-wrapper">
                {/* Bubble Callout */}
                <div className="income-bubble-callout">2,313</div>
                <div className="income-bar" style={{ height: "100%", background: "#0055ff" }} />
                <span className="income-bar-tag" style={{ color: "#0055ff" }}>20%</span>
              </div>

              {/* Bar 3 - Sponsors */}
              <div className="income-bar-wrapper">
                <div className="income-bar" style={{ height: "75%", background: "#8bbbff" }} />
                <span className="income-bar-tag">15%</span>
              </div>

              {/* Bar 4 - Affiliate */}
              <div className="income-bar-wrapper">
                <div className="income-bar" style={{ height: "90%", background: "#60a5fa" }} />
                <span className="income-bar-tag">18%</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Monthly Income Widget */}
        <div className="vault-card" style={{ gridColumn: "span 5" }}>
          <div className="vault-card-header">
            <h2 className="vault-card-title">Monthly income</h2>
            <div className="vault-card-actions">
              <button className="vault-pill-btn" aria-label="Export report">
                <Download className="w-3.5 h-3.5" /> Export
              </button>
              <button className="vault-pill-btn" aria-label="Filter dataset">
                <Filter className="w-3.5 h-3.5" /> Filter
              </button>
            </div>
          </div>

          <div className="monthly-income-value">
            <span className="monthly-income-num">$574</span>
            <span className="monthly-income-highlight">May's Peak</span>
          </div>

          <div style={{ position: "relative", width: "100%", height: "160px" }}>
            {/* Highlighted text bubble above the point in May */}
            <div className="monthly-income-bubble" style={{ left: "47%", top: "8px" }}>$574</div>

            <svg width="100%" height="100%" viewBox="0 0 300 120" preserveAspectRatio="none">
              <defs>
                <linearGradient id="area-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0055ff" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#0055ff" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Vertical dotted line indicating May */}
              <line x1="150" y1="35" x2="150" y2="105" stroke="#0055ff" strokeWidth="1.5" strokeDasharray="3,3" />

              {/* Gradient Area under path */}
              <path 
                d="M 10 90 Q 50 80 80 65 T 150 35 T 220 70 T 290 60 L 290 110 L 10 110 Z" 
                fill="url(#area-grad)"
              />

              {/* Main Line wave path */}
              <path 
                d="M 10 90 Q 50 80 80 65 T 150 35 T 220 70 T 290 60" 
                fill="none" 
                stroke="#0055ff" 
                strokeWidth="3" 
                strokeLinecap="round"
              />

              {/* Highlights marker dot at May */}
              <circle cx="150" cy="35" r="4.5" fill="#0055ff" stroke="#ffffff" strokeWidth="2.5" />
              <circle cx="150" cy="35" r="10" fill="#0055ff" fillOpacity="0.12" />

              {/* Month Labels */}
              <text x="10" y="118" fontSize="8.5" fill="#94a3b8" fontWeight="700">Mar</text>
              <text x="80" y="118" fontSize="8.5" fill="#94a3b8" fontWeight="700">Apr</text>
              <text x="145" y="118" fontSize="8.5" fill="#0055ff" fontWeight="700">May</text>
              <text x="212" y="118" fontSize="8.5" fill="#94a3b8" fontWeight="700">Jun</text>
              <text x="280" y="118" fontSize="8.5" fill="#94a3b8" fontWeight="700">Jul</text>
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
}
