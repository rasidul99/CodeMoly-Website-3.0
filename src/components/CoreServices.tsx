"use client";

import React from "react";
import ScrambleText from "./ScrambleText";
import { 
  Plus, 
  Check, 
  ChevronRight, 
  ArrowRight, 
  Bot, 
  Globe, 
  Building, 
  User, 
  DollarSign, 
  Megaphone, 
  Mail, 
  Hash, 
  TrendingUp, 
  MessageSquare, 
  Clock, 
  ThumbsUp,
  Sliders,
  Database,
  LineChart,
  ShoppingCart,
  UserCheck,
  Briefcase,
  Play
} from "lucide-react";

export default function CoreServices() {
  return (
    <section id="services" className="section-reveal core-services-reveal relative w-full pt-10 pb-12 md:pt-[100px] md:pb-[100px] px-4 md:px-20 bg-[#f6f7f9] border-t border-slate-100 overflow-hidden text-slate-800" aria-labelledby="services-heading">
      
      {/* Background Subtle Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.18] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header Area (Middle Aligned) */}
        <div className="reveal-item reveal-up reveal-delay-1 flex flex-col items-center justify-center text-center mb-6 md:mb-[60px]">
          <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-blue-600 mb-4">
            <ScrambleText text="Core AI Automation Services" />
          </span>
          <h2 id="services-heading" className="font-sans text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-center mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#aebcff] via-[#2546c7] to-[#09164f]">
              Intelligent Solutions for Every Business Need
            </span>
          </h2>
          <p className="font-sans text-base md:text-lg leading-relaxed text-slate-600 max-w-3xl mx-auto">
            Transform your operations with our comprehensive suite of AI-powered automation services, 
            designed to optimize efficiency, reduce costs, and drive sustainable growth.
          </p>
        </div>

        {/* The Grid and SVG connections */}
        <div className="relative">
          
          {/* SVG Connector Paths (Desktop only) */}
          <svg 
            className="reveal-item reveal-soft reveal-delay-3 absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-0" 
            viewBox="0 0 1200 744" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="glow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2546c7" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.95" />
              </linearGradient>
              <linearGradient id="glow-grad-vertical" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2546c7" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.95" />
              </linearGradient>
              <linearGradient id="glow-grad-vertical-rev" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#2546c7" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.95" />
              </linearGradient>
              <filter id="shadow-glow" x="-10%" y="-10%" width="120%" height="120%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Card 1 (Top Left) Connection */}
            <path d="M 200 250 C 200 340, 380 372, 600 372" stroke="url(#glow-grad)" strokeWidth="2" filter="url(#shadow-glow)" />
            <circle r="4" fill="#60a5fa" filter="url(#shadow-glow)">
              <animateMotion dur="3s" repeatCount="indefinite" path="M 200 250 C 200 340, 380 372, 600 372" />
            </circle>

            {/* Card 2 (Top Middle) Connection */}
            <path d="M 599 250 L 601 372" stroke="url(#glow-grad-vertical)" strokeWidth="2" filter="url(#shadow-glow)" />
            <circle r="4" fill="#60a5fa" filter="url(#shadow-glow)">
              <animateMotion dur="2.2s" repeatCount="indefinite" path="M 599 250 L 601 372" />
            </circle>

            {/* Card 3 (Top Right) Connection */}
            <path d="M 1000 250 C 1000 340, 820 372, 600 372" stroke="url(#glow-grad)" strokeWidth="2" filter="url(#shadow-glow)" />
            <circle r="4" fill="#60a5fa" filter="url(#shadow-glow)">
              <animateMotion dur="3.2s" repeatCount="indefinite" path="M 1000 250 C 1000 340, 820 372, 600 372" />
            </circle>

            {/* Card 4 (Bottom Left) Connection */}
            <path d="M 200 490 C 200 404, 380 372, 600 372" stroke="url(#glow-grad)" strokeWidth="2" filter="url(#shadow-glow)" />
            <circle r="4" fill="#60a5fa" filter="url(#shadow-glow)">
              <animateMotion dur="2.8s" repeatCount="indefinite" path="M 200 490 C 200 404, 380 372, 600 372" />
            </circle>

            {/* Card 5 (Bottom Middle) Connection */}
            <path d="M 601 490 L 599 372" stroke="url(#glow-grad-vertical-rev)" strokeWidth="2" filter="url(#shadow-glow)" />
            <circle r="4" fill="#60a5fa" filter="url(#shadow-glow)">
              <animateMotion dur="2.4s" repeatCount="indefinite" path="M 601 490 L 599 372" />
            </circle>

            {/* Card 6 (Bottom Right) Connection */}
            <path d="M 1000 490 C 1000 404, 820 372, 600 372" stroke="url(#glow-grad)" strokeWidth="2" filter="url(#shadow-glow)" />
            <circle r="4" fill="#60a5fa" filter="url(#shadow-glow)">
              <animateMotion dur="3.4s" repeatCount="indefinite" path="M 1000 490 C 1000 404, 820 372, 600 372" />
            </circle>
          </svg>

          {/* Central smile/chat bubble node (Desktop only) */}
          <div 
            className="core-center-node absolute left-1/2 top-1/2 z-20 hidden lg:flex w-[90px] h-[90px] cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300 group"
            aria-hidden="true"
          >
            {/* Zoom Loop Wrapper for continuous breathing animation */}
            <div className="relative w-full h-full flex items-center justify-center zoom-loop-animation">
              {/* Multilayered Animated Neon Glow Background (moderate) */}
              <div className="absolute inset-[-3px] rounded-full bg-blue-500/60 blur-md pointer-events-none -z-10 glow-layer-inner" />
              <div className="absolute inset-[-9px] rounded-full bg-blue-500/40 blur-lg pointer-events-none -z-20 glow-layer-mid" />
              <div className="absolute inset-[-18px] rounded-full bg-indigo-500/25 blur-2xl pointer-events-none -z-30 glow-layer-outer" />
              
              {/* Main Blue Circle Background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#2563eb] to-[#1d4ed8] border-2 border-white/20 shadow-[0_0_20px_rgba(37,99,235,0.4)] -z-5" />

              {/* Logo Icon with Subtle Glowing Drop Shadow Filter */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/CodeMoly Icon.svg"
                alt="CodeMoly Icon"
                className="w-[44px] h-auto select-none pointer-events-none z-10"
                style={{
                  filter: "drop-shadow(0 0 4px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))"
                }}
              />
            </div>
          </div>

          {/* 3x2 Grid of Cards */}
          <div className="services-card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-x-6 lg:gap-x-8 md:gap-y-12 lg:gap-y-36 relative z-10">
            
            {/* Card 1: n8n Workflow Automation */}
            <div 
              className="relative min-h-[300px] rounded-[32px] border border-blue-900/15 overflow-hidden flex flex-col pt-6 px-6 pb-0 md:pt-8 md:px-8 md:pb-0 group cursor-pointer shadow-[0_15px_45px_rgba(15,23,42,0.04)] hover:-translate-y-1.5 hover:border-blue-400/40 hover:shadow-[0_20px_50px_rgba(37,99,235,0.16)] transition-all duration-500"
              style={{
                background: "radial-gradient(circle at bottom right, rgba(255, 255, 255, 0.28) 0%, transparent 55%), linear-gradient(135deg, #09164f 0%, #2546c7 100%)"
              }}
            >
              {/* Bottom Right Corner Border Glow Outline */}
              <div 
                className="absolute inset-0 border border-transparent rounded-[32px] pointer-events-none z-20"
                style={{
                  borderRightWidth: "2px",
                  borderBottomWidth: "2px",
                  borderRightColor: "rgba(255, 255, 255, 0.8)",
                  borderBottomColor: "rgba(255, 255, 255, 0.8)",
                  WebkitMaskImage: "radial-gradient(circle at bottom right, black 25%, transparent 60%)",
                  maskImage: "radial-gradient(circle at bottom right, black 25%, transparent 60%)"
                }}
              />
              <h3 className="font-sans font-bold text-lg sm:text-xl md:text-lg lg:text-[16px] xl:text-lg 2xl:text-xl text-white mb-3 drop-shadow-[0_2px_4px_rgba(9,22,79,0.65)] whitespace-nowrap">
                n8n Workflow Automation
              </h3>
              <p className="font-sans text-sm text-blue-100/90 leading-relaxed mb-4 drop-shadow-[0_1.5px_3px_rgba(9,22,79,0.55)]">
                Build powerful automation workflows with n8n's visual interface. Connect 400+ apps and services to streamline your business processes without coding.
              </p>
              
              {/* Card 1 Visual: Premium SaaS Workflow Editor Mockup */}
              <div className="mt-auto h-[140px] relative w-full">
                <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 origin-bottom scale-[0.7] w-[142.8%] h-[230px]">
                  <div className="bg-white rounded-2xl p-4 shadow-lg border border-slate-100/80 flex flex-col h-full w-full relative overflow-hidden select-none transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(15,23,42,0.06)] group-hover:border-slate-200">
                    
                    {/* Dotted Grid Background */}
                    <div 
                      className="absolute inset-0 opacity-[0.15] pointer-events-none z-0" 
                      style={{
                        backgroundImage: "radial-gradient(#cbd5e1 1.5px, transparent 1.5px)",
                        backgroundSize: "16px 16px"
                      }}
                    />

                    {/* Canvas header */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3 relative z-10">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-100" />
                        <span className="text-[10px] font-bold text-slate-400 ml-2 tracking-tight">AI Flow Editor</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[9px] font-bold px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full border border-blue-100 scale-90">Auto-Save</span>
                        <span className="text-[9px] font-bold px-2 py-0.5 bg-emerald-500 text-white rounded-full scale-90 animate-pulse">Running</span>
                      </div>
                    </div>
                    
                    {/* Node graph flow area */}
                    <div className="flex-1 relative z-10">
                      
                      {/* SVG Connector lines */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Connection: Webhook -> Claude AI */}
                        <path 
                          d="M 128 102.5 C 138 102.5, 138 82.5, 148 82.5" 
                          className="stroke-blue-200 transition-all duration-500 group-hover:stroke-blue-500 group-hover:stroke-[2px]" 
                          strokeWidth="1.5" 
                        />
                        
                        {/* Connection: Claude AI -> Database */}
                        <path 
                          d="M 268 82.5 C 280 82.5, 280 45, 292 45" 
                          className="stroke-blue-200 transition-all duration-500 group-hover:stroke-indigo-500 group-hover:stroke-[2px]" 
                          strokeWidth="1.5" 
                        />
                        
                        {/* Connection: Claude AI -> Slack */}
                        <path 
                          d="M 268 82.5 C 280 82.5, 280 150, 292 150" 
                          className="stroke-blue-200 transition-all duration-500 group-hover:stroke-purple-500 group-hover:stroke-[2px]" 
                          strokeWidth="1.5" 
                        />

                        {/* Animated flowing dots on paths */}
                        <circle r="3" fill="#3b82f6" className="filter drop-shadow-[0_0_3px_#3b82f6]">
                          <animateMotion dur="2.2s" repeatCount="indefinite" path="M 128 102.5 C 138 102.5, 138 82.5, 148 82.5" />
                        </circle>
                        <circle r="3" fill="#6366f1" className="filter drop-shadow-[0_0_3px_#6366f1]">
                          <animateMotion dur="2.8s" repeatCount="indefinite" path="M 268 82.5 C 280 82.5, 280 45, 292 45" />
                        </circle>
                        <circle r="3" fill="#a855f7" className="filter drop-shadow-[0_0_3px_#a855f7]">
                          <animateMotion dur="2.5s" repeatCount="indefinite" path="M 268 82.5 C 280 82.5, 280 150, 292 150" />
                        </circle>
                      </svg>

                      {/* Faded Background Node (HubSpot CRM) - Blurred Depth */}
                      <div className="absolute left-[2%] top-[10px] w-[20%] h-[35px] bg-white/40 border border-slate-200/40 rounded-lg p-1.5 flex items-center gap-1 shadow-sm opacity-35 blur-[0.8px] transition-all duration-700 ease-out group-hover:opacity-75 group-hover:blur-0 group-hover:scale-[1.05] group-hover:bg-white/80 group-hover:border-slate-200 group-hover:shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
                        <div className="w-4 h-4 rounded bg-slate-100 flex items-center justify-center text-slate-400 flex-shrink-0">
                          <User className="w-2.5 h-2.5" />
                        </div>
                        <span className="text-[7.5px] font-bold text-slate-400 group-hover:text-slate-600 truncate">HubSpot</span>
                      </div>

                      {/* Faded Background Node (Email API) - Blurred Depth */}
                      <div className="absolute left-[61%] top-[170px] w-[22%] h-[35px] bg-white/40 border border-slate-200/40 rounded-lg p-1.5 flex items-center gap-1 shadow-sm opacity-25 blur-[1.2px] transition-all duration-700 ease-out group-hover:opacity-70 group-hover:blur-0 group-hover:scale-[1.05] group-hover:bg-white/80 group-hover:border-slate-200 group-hover:shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
                        <div className="w-4 h-4 rounded bg-slate-100 flex items-center justify-center text-slate-400 flex-shrink-0">
                          <Mail className="w-2.5 h-2.5" />
                        </div>
                        <span className="text-[7.5px] font-bold text-slate-400 group-hover:text-slate-600 truncate">Email API</span>
                      </div>

                      {/* Node 1: Webhook Trigger (Floating Card) */}
                      <div className="absolute left-[6%] top-[75px] w-[26%] h-[55px] bg-white/95 backdrop-blur-sm border border-slate-200/80 rounded-xl p-2 shadow-[0_4px_12px_rgba(15,23,42,0.04)] flex items-center gap-2 transition-all duration-500 ease-out group-hover:-translate-x-1 group-hover:-translate-y-0.5 group-hover:border-blue-300 group-hover:shadow-[0_8px_16px_rgba(59,130,246,0.08)]">
                        <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 flex-shrink-0 transition-transform duration-500 group-hover:scale-110">
                          <Globe className="w-4.5 h-4.5" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[9px] font-bold text-slate-800 leading-tight truncate">Webhook</span>
                          <span className="text-[7px] text-slate-400 font-semibold uppercase tracking-wider font-mono">Trigger</span>
                        </div>
                        {/* Node output dot */}
                        <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500 border-2 border-white shadow-[0_0_4px_rgba(59,130,246,0.5)]" />
                      </div>

                      {/* Node 2: Claude AI Agent (Floating Center Card) */}
                      <div className="absolute left-[37%] top-[45px] w-[30%] h-[75px] bg-white/98 backdrop-blur-sm border-2 border-blue-500/30 rounded-2xl p-2.5 shadow-[0_8px_20px_rgba(37,99,235,0.06)] flex flex-col justify-between transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:border-blue-500 group-hover:shadow-[0_12px_28px_rgba(37,99,235,0.15)]">
                        <div className="flex items-center gap-1.5">
                          <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white flex-shrink-0 transition-transform duration-500 group-hover:rotate-12">
                            <Bot className="w-3.5 h-3.5" />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="text-[10px] font-extrabold text-slate-800 leading-tight truncate">Claude 3.5</span>
                            <span className="text-[7.5px] text-blue-600 font-bold">AI Agent</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between border-t border-slate-100 pt-1.5 mt-1">
                          <span className="text-[7px] font-mono text-slate-400 font-bold">Model Call</span>
                          <span className="text-[7px] font-bold text-emerald-600 bg-emerald-50 px-1 rounded border border-emerald-100/50">OK</span>
                        </div>
                        {/* Node input/output dots */}
                        <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500 border-2 border-white shadow-[0_0_4px_rgba(59,130,246,0.5)]" />
                        <div className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-indigo-500 border-2 border-white shadow-[0_0_4px_rgba(99,102,241,0.5)]" />
                      </div>

                      {/* Node 3: Database Update (Floating Action Card 1) */}
                      <div className="absolute left-[73%] top-[20px] w-[23%] h-[50px] bg-white/95 backdrop-blur-sm border border-slate-200/80 rounded-xl p-1.5 shadow-[0_4px_12px_rgba(15,23,42,0.04)] flex items-center gap-1.5 transition-all duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:border-indigo-300 group-hover:shadow-[0_8px_16px_rgba(99,102,241,0.08)]">
                        <div className="w-6 h-6 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-500 flex-shrink-0 transition-transform duration-500 group-hover:scale-110">
                          <Database className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[9px] font-bold text-slate-800 leading-tight truncate">Postgres</span>
                          <span className="text-[6.5px] text-slate-400 font-semibold uppercase tracking-wider font-mono">Insert</span>
                        </div>
                        {/* Node input dot */}
                        <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-indigo-500 border-2 border-white shadow-[0_0_4px_rgba(99,102,241,0.5)]" />
                      </div>

                      {/* Node 4: Slack Notification (Floating Action Card 2) */}
                      <div className="absolute left-[73%] top-[125px] w-[23%] h-[50px] bg-white/95 backdrop-blur-sm border border-slate-200/80 rounded-xl p-1.5 shadow-[0_4px_12px_rgba(15,23,42,0.04)] flex items-center gap-1.5 transition-all duration-500 ease-out group-hover:translate-x-1.5 group-hover:translate-y-0.5 group-hover:border-purple-300 group-hover:shadow-[0_8px_16px_rgba(168,85,247,0.08)]">
                        <div className="w-6 h-6 rounded-lg bg-purple-50 flex items-center justify-center text-purple-500 flex-shrink-0 transition-transform duration-500 group-hover:scale-110">
                          <Hash className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[9px] font-bold text-slate-800 leading-tight truncate">Slack Alert</span>
                          <span className="text-[6.5px] text-slate-400 font-semibold uppercase tracking-wider font-mono">Notify</span>
                        </div>
                        {/* Node input dot */}
                        <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-purple-500 border-2 border-white shadow-[0_0_4px_rgba(168,85,247,0.5)]" />
                      </div>

                    </div>
                  </div>
                </div>
              </div>
        </div>            {/* Card 2: E-commerce AI Automation */}
            <div 
              className="relative min-h-[300px] rounded-[32px] border border-blue-900/15 overflow-hidden flex flex-col pt-6 px-6 pb-0 md:pt-8 md:px-8 md:pb-0 group cursor-pointer shadow-[0_15px_45px_rgba(15,23,42,0.04)] hover:-translate-y-1.5 hover:border-blue-400/40 hover:shadow-[0_20px_50px_rgba(37,99,235,0.16)] transition-all duration-500"
              style={{
                background: "radial-gradient(circle at bottom right, rgba(255, 255, 255, 0.28) 0%, transparent 55%), linear-gradient(135deg, #09164f 0%, #2546c7 100%)"
              }}
            >
              {/* Bottom Right Corner Border Glow Outline */}
              <div 
                className="absolute inset-0 border border-transparent rounded-[32px] pointer-events-none z-20"
                style={{
                  borderRightWidth: "2px",
                  borderBottomWidth: "2px",
                  borderRightColor: "rgba(255, 255, 255, 0.8)",
                  borderBottomColor: "rgba(255, 255, 255, 0.8)",
                  WebkitMaskImage: "radial-gradient(circle at bottom right, black 25%, transparent 60%)",
                  maskImage: "radial-gradient(circle at bottom right, black 25%, transparent 60%)"
                }}
              />
              <h3 className="font-sans font-bold text-lg sm:text-xl md:text-lg lg:text-[16px] xl:text-lg 2xl:text-xl text-white mb-3 drop-shadow-[0_2px_4px_rgba(9,22,79,0.65)] whitespace-nowrap">
                E-commerce AI Automation
              </h3>
              <p className="font-sans text-sm text-blue-100/90 leading-relaxed mb-4 drop-shadow-[0_1.5px_3px_rgba(9,22,79,0.55)]">
                Supercharge your online store with AI-powered inventory management, dynamic pricing, personalized recommendations, and automated customer service.
              </p>

              {/* Card 2 Visual: Premium SaaS E-commerce Dashboard Mockup */}
              <div className="mt-auto h-[140px] relative w-full">
                <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 origin-bottom scale-[0.7] w-[142.8%] h-[230px]">
                  <div className="bg-white rounded-2xl p-4 shadow-lg border border-slate-100/80 flex flex-col h-full w-full relative overflow-hidden select-none transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(15,23,42,0.06)] group-hover:border-slate-200">
                    
                    {/* Dotted Grid Background */}
                    <div 
                      className="absolute inset-0 opacity-[0.15] pointer-events-none z-0" 
                      style={{
                        backgroundImage: "radial-gradient(#cbd5e1 1.5px, transparent 1.5px)",
                        backgroundSize: "16px 16px"
                      }}
                    />

                    {/* Canvas header */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3 relative z-10">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-100" />
                        <span className="text-[10px] font-bold text-slate-400 ml-2 tracking-tight">AI E-com Hub</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[9px] font-bold px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full border border-blue-100 scale-90">Live Feed</span>
                        <span className="text-[9px] font-bold px-2 py-0.5 bg-emerald-500 text-white rounded-full scale-90 animate-pulse">Synced</span>
                      </div>
                    </div>
                    
                    {/* E-commerce grid area */}
                    <div className="flex-1 relative z-10">
                      
                      {/* Widget 1: Revenue Analytics Chart */}
                      <div className="absolute left-[4%] top-[10px] w-[50%] h-[145px] bg-white/95 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-3 shadow-[0_4px_12px_rgba(15,23,42,0.04)] flex flex-col justify-between transition-all duration-500 ease-out group-hover:translate-y-[-3px] group-hover:border-blue-300 group-hover:shadow-[0_8px_20px_rgba(59,130,246,0.08)]">
                        <div className="flex items-start justify-between">
                          <div className="flex flex-col min-w-0">
                            <span className="text-[7.5px] text-slate-400 font-semibold uppercase tracking-wider font-mono">Revenue</span>
                            <span className="text-sm font-extrabold text-slate-800 leading-tight mt-0.5">$142,380</span>
                          </div>
                          <div className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 flex-shrink-0 transition-transform duration-500 group-hover:scale-110">
                            <TrendingUp className="w-3.5 h-3.5" />
                          </div>
                        </div>
                        
                        {/* Area Chart SVG */}
                        <svg className="w-full h-14 mt-1" viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <linearGradient id="chart-grad-2" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path d="M 10 40 C 40 40, 30 10, 60 10 C 90 10, 80 42, 110 42 C 130 42, 140 18, 150 18" stroke="#3b82f6" strokeWidth="2" fill="none" className="transition-all duration-700 group-hover:stroke-blue-600" />
                          <path d="M 10 40 C 40 40, 30 10, 60 10 C 90 10, 80 42, 110 42 C 130 42, 140 18, 150 18 L 150 50 L 10 50 Z" fill="url(#chart-grad-2)" />
                          <circle cx="60" cy="10" r="2.5" fill="#3b82f6" className="animate-ping" />
                          <circle cx="60" cy="10" r="2.5" fill="#2563eb" />
                        </svg>
                      </div>

                      {/* Widget 2: AI Recommendation Optimizer */}
                      <div className="absolute left-[58%] top-[10px] w-[38%] h-[70px] bg-white/95 backdrop-blur-sm border border-slate-200/80 rounded-xl p-2 shadow-[0_4px_12px_rgba(15,23,42,0.04)] flex flex-col justify-between transition-all duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:border-blue-300 group-hover:shadow-[0_8px_16px_rgba(59,130,246,0.08)]">
                        <div className="flex items-center gap-1.5">
                          <div className="w-5.5 h-5.5 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:rotate-12">
                            <ShoppingCart className="w-3.5 h-3.5" />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="text-[8.5px] font-bold text-slate-800 leading-tight truncate">Smart Recommender</span>
                            <span className="text-[6.5px] text-slate-400 font-semibold uppercase tracking-wider font-mono">Product Boost</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between border-t border-slate-100 pt-1 mt-0.5">
                          <span className="text-[7.5px] text-slate-500">👟 Running Shoes</span>
                          <span className="text-[7px] font-bold text-emerald-600 bg-emerald-50 px-1 rounded">▲ 18.6%</span>
                        </div>
                      </div>

                      {/* Widget 3: Automated Stock Replenisher */}
                      <div className="absolute left-[58%] top-[90px] w-[38%] h-[65px] bg-white/95 backdrop-blur-sm border border-slate-200/80 rounded-xl p-2 shadow-[0_4px_12px_rgba(15,23,42,0.04)] flex flex-col justify-between transition-all duration-500 ease-out group-hover:translate-x-1.5 group-hover:translate-y-0.5 group-hover:border-emerald-300 group-hover:shadow-[0_8px_16px_rgba(16,185,129,0.08)]">
                        <div className="flex items-center gap-1.5">
                          <div className="w-5.5 h-5.5 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110">
                            <Database className="w-3 h-3" />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="text-[8.5px] font-bold text-slate-800 leading-tight truncate">Inventory Auto-Order</span>
                            <span className="text-[6.5px] text-slate-400 font-semibold uppercase tracking-wider font-mono">Stock Optimizer</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between border-t border-slate-100 pt-1 mt-0.5">
                          <span className="text-[7.5px] text-rose-500 font-semibold">Low Stock Trigger</span>
                          <span className="text-[7.5px] font-bold text-emerald-600 font-mono">Reordering...</span>
                        </div>
                      </div>

                      {/* Faded Background Node (Customer Activity) - Blurred Depth */}
                      <div className="absolute left-[2%] top-[170px] w-[46%] h-[35px] bg-white/40 border border-slate-200/40 rounded-lg p-1.5 flex items-center gap-1.5 shadow-sm opacity-30 blur-[0.8px] transition-all duration-700 ease-out group-hover:opacity-75 group-hover:blur-0 group-hover:scale-[1.03] group-hover:bg-white/80 group-hover:border-slate-200 group-hover:shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
                        <div className="w-4 h-4 rounded bg-slate-100 flex items-center justify-center text-slate-400 flex-shrink-0">
                          <UserCheck className="w-2.5 h-2.5" />
                        </div>
                        <span className="text-[7.5px] font-bold text-slate-400 group-hover:text-slate-600 truncate">Order #8240 Shipped to Paris</span>
                      </div>

                      {/* Faded Background Node (Sales Target Gauge) - Blurred Depth */}
                      <div className="absolute left-[52%] top-[170px] w-[44%] h-[35px] bg-white/40 border border-slate-200/40 rounded-lg p-1.5 flex items-center gap-1.5 shadow-sm opacity-25 blur-[1.2px] transition-all duration-700 ease-out group-hover:opacity-70 group-hover:blur-0 group-hover:scale-[1.03] group-hover:bg-white/80 group-hover:border-slate-200 group-hover:shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
                        <div className="w-4 h-4 rounded bg-slate-100 flex items-center justify-center text-slate-400 flex-shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="text-[7.5px] font-bold text-slate-400 group-hover:text-slate-600 truncate">Daily Goal: 94% Achieved</span>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
        </div>
                {/* Card 3: Custom AI Agents */}
            <div 
              className="relative min-h-[300px] rounded-[32px] border border-blue-900/15 overflow-hidden flex flex-col pt-6 px-6 pb-0 md:pt-8 md:px-8 md:pb-0 group cursor-pointer shadow-[0_15px_45px_rgba(15,23,42,0.04)] hover:-translate-y-1.5 hover:border-blue-400/40 hover:shadow-[0_20px_50px_rgba(37,99,235,0.16)] transition-all duration-500"
              style={{
                background: "radial-gradient(circle at bottom right, rgba(255, 255, 255, 0.28) 0%, transparent 55%), linear-gradient(135deg, #09164f 0%, #2546c7 100%)"
              }}
            >
              {/* Bottom Right Corner Border Glow Outline */}
              <div 
                className="absolute inset-0 border border-transparent rounded-[32px] pointer-events-none z-20"
                style={{
                  borderRightWidth: "2px",
                  borderBottomWidth: "2px",
                  borderRightColor: "rgba(255, 255, 255, 0.8)",
                  borderBottomColor: "rgba(255, 255, 255, 0.8)",
                  WebkitMaskImage: "radial-gradient(circle at bottom right, black 25%, transparent 60%)",
                  maskImage: "radial-gradient(circle at bottom right, black 25%, transparent 60%)"
                }}
              />
              <h3 className="font-sans font-bold text-lg sm:text-xl md:text-lg lg:text-[16px] xl:text-lg 2xl:text-xl text-white mb-3 drop-shadow-[0_2px_4px_rgba(9,22,79,0.65)] whitespace-nowrap">
                Custom AI Agents
              </h3>
              <p className="font-sans text-sm text-blue-100/90 leading-relaxed mb-4 drop-shadow-[0_1.5px_3px_rgba(9,22,79,0.55)]">
                Deploy intelligent AI agents tailored to your business needs. From customer service to data analysis, our custom agents work around the clock.
              </p>

              {/* Card 3 Visual: AI Agent Dashboard Wrapper */}
              <div className="mt-auto h-[140px] relative w-full">
                <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 origin-bottom scale-[0.7] w-[142.8%] h-[230px]">
                  <div className="bg-white rounded-2xl p-4 shadow-lg border border-slate-100/80 flex flex-col h-full w-full relative overflow-hidden select-none transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(15,23,42,0.06)] group-hover:border-slate-200">
                    
                    {/* Dotted Grid Background */}
                    <div 
                      className="absolute inset-0 opacity-[0.15] pointer-events-none z-0" 
                      style={{
                        backgroundImage: "radial-gradient(#cbd5e1 1.5px, transparent 1.5px)",
                        backgroundSize: "16px 16px"
                      }}
                    />

                    {/* Canvas header */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3 relative z-10">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-100" />
                        <span className="text-[10px] font-bold text-slate-400 ml-2 tracking-tight">AI Agent Studio</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[9px] font-bold px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full border border-blue-100 scale-90">Builder</span>
                        <span className="text-[9px] font-bold px-2 py-0.5 bg-emerald-500 text-white rounded-full scale-90 animate-pulse">Running</span>
                      </div>
                    </div>

                    {/* Connector lines and nodes */}
                    <div className="flex-1 relative z-10">
                      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Connecting paths */}
                        <path d="M 200 101 C 150 101, 120 70, 80 45" className="stroke-slate-200 transition-all duration-500 group-hover:stroke-blue-400 group-hover:stroke-[1.5px]" strokeWidth="1.2" />
                        <path d="M 200 101 C 150 101, 120 120, 80 135" className="stroke-slate-200 transition-all duration-500 group-hover:stroke-blue-400 group-hover:stroke-[1.5px]" strokeWidth="1.2" />
                        <path d="M 200 101 C 250 101, 280 70, 320 45" className="stroke-slate-200 transition-all duration-500 group-hover:stroke-blue-400 group-hover:stroke-[1.5px]" strokeWidth="1.2" />
                        <path d="M 200 101 C 250 101, 280 120, 320 135" className="stroke-slate-200 transition-all duration-500 group-hover:stroke-blue-400 group-hover:stroke-[1.5px]" strokeWidth="1.2" />

                        {/* Animated flowing dots on paths */}
                        <circle r="2.5" fill="#3b82f6" className="filter drop-shadow-[0_0_3px_#3b82f6]">
                          <animateMotion dur="2.5s" repeatCount="indefinite" path="M 200 101 C 150 101, 120 70, 80 45" />
                        </circle>
                        <circle r="2.5" fill="#3b82f6" className="filter drop-shadow-[0_0_3px_#3b82f6]">
                          <animateMotion dur="3s" repeatCount="indefinite" path="M 200 101 C 150 101, 120 120, 80 135" />
                        </circle>
                        <circle r="2.5" fill="#3b82f6" className="filter drop-shadow-[0_0_3px_#3b82f6]">
                          <animateMotion dur="2.8s" repeatCount="indefinite" path="M 200 101 C 250 101, 280 70, 320 45" />
                        </circle>
                        <circle r="2.5" fill="#3b82f6" className="filter drop-shadow-[0_0_3px_#3b82f6]">
                          <animateMotion dur="3.2s" repeatCount="indefinite" path="M 200 101 C 250 101, 280 120, 320 135" />
                        </circle>
                      </svg>

                      {/* Center Node Capsule: Custom Agents */}
                      <div className="absolute left-[34%] top-[82px] w-[32%] h-[38px] flex items-center justify-center bg-blue-600 border border-blue-400/20 text-white font-extrabold rounded-full shadow-[0_4px_12px_rgba(37,99,235,0.3)] z-10 transition-all duration-500 ease-out group-hover:scale-105 group-hover:shadow-[0_8px_20px_rgba(37,99,235,0.5)]">
                        <div className="flex items-center gap-1.5 px-3">
                          <Bot className="w-3.5 h-3.5 text-blue-100" />
                          <span className="text-[8.5px] uppercase tracking-wider font-sans whitespace-nowrap">AI Coordinator</span>
                        </div>
                      </div>

                      {/* Node 1: Research Agent (Top Left) */}
                      <div className="absolute left-[12%] top-[20px] w-[50px] h-[50px] rounded-full bg-white border border-slate-150 flex items-center justify-center shadow-md z-10 transition-all duration-500 ease-out group-hover:-translate-x-1.5 group-hover:-translate-y-1.5 group-hover:border-blue-400 group-hover:shadow-[0_8px_16px_rgba(59,130,246,0.12)]">
                        <div className="flex flex-col items-center justify-center">
                          <Globe className="w-5 h-5 text-blue-600 transition-transform duration-500 group-hover:scale-110" />
                          <span className="text-[6.5px] font-bold text-slate-500 mt-0.5">Research</span>
                        </div>
                      </div>

                      {/* Node 2: Database Agent (Bottom Left) */}
                      <div className="absolute left-[12%] top-[110px] w-[50px] h-[50px] rounded-full bg-white border border-slate-150 flex items-center justify-center shadow-md z-10 transition-all duration-500 ease-out group-hover:-translate-x-1.5 group-hover:translate-y-1.5 group-hover:border-blue-400 group-hover:shadow-[0_8px_16px_rgba(59,130,246,0.12)]">
                        <div className="flex flex-col items-center justify-center">
                          <Database className="w-5 h-5 text-indigo-600 transition-transform duration-500 group-hover:scale-110" />
                          <span className="text-[6.5px] font-bold text-slate-500 mt-0.5">Storage</span>
                        </div>
                      </div>

                      {/* Node 3: Support Agent (Top Right) */}
                      <div className="absolute left-[73%] top-[20px] w-[50px] h-[50px] rounded-full bg-white border border-slate-150 flex items-center justify-center shadow-md z-10 transition-all duration-500 ease-out group-hover:translate-x-1.5 group-hover:-translate-y-1.5 group-hover:border-blue-400 group-hover:shadow-[0_8px_16px_rgba(59,130,246,0.12)]">
                        <div className="flex flex-col items-center justify-center">
                          <MessageSquare className="w-5 h-5 text-purple-600 transition-transform duration-500 group-hover:scale-110" />
                          <span className="text-[6.5px] font-bold text-slate-500 mt-0.5">Support</span>
                        </div>
                      </div>

                      {/* Node 4: Action/Notification Agent (Bottom Right) */}
                      <div className="absolute left-[73%] top-[110px] w-[50px] h-[50px] rounded-full bg-white border border-slate-150 flex items-center justify-center shadow-md z-10 transition-all duration-500 ease-out group-hover:translate-x-1.5 group-hover:translate-y-1.5 group-hover:border-blue-400 group-hover:shadow-[0_8px_16px_rgba(59,130,246,0.12)]">
                        <div className="flex flex-col items-center justify-center">
                          <Mail className="w-5 h-5 text-emerald-600 transition-transform duration-500 group-hover:scale-110" />
                          <span className="text-[6.5px] font-bold text-slate-500 mt-0.5">Notify</span>
                        </div>
                      </div>

                      {/* Floating Faded Stats Overlay (Depth of Field) */}
                      <div className="absolute left-[35%] top-[148px] w-[30%] h-[26px] bg-white/40 border border-slate-200/40 rounded-lg p-1 flex items-center justify-center gap-1 shadow-sm opacity-25 blur-[1px] transition-all duration-700 ease-out group-hover:opacity-80 group-hover:blur-0 group-hover:scale-[1.05] group-hover:bg-white/80 group-hover:border-slate-200 group-hover:shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span className="text-[7px] font-bold text-slate-500">12,480 runs/sec</span>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

        {/* Card 4: Business Operations Automation */}
        <div 
          className="relative min-h-[300px] rounded-[32px] border border-blue-900/15 overflow-hidden flex flex-col pt-6 px-6 pb-0 md:pt-8 md:px-8 md:pb-0 group cursor-pointer shadow-[0_15px_45px_rgba(15,23,42,0.04)] hover:-translate-y-1.5 hover:border-blue-400/40 hover:shadow-[0_20px_50px_rgba(37,99,235,0.16)] transition-all duration-500"
          style={{
            background: "radial-gradient(circle at bottom right, rgba(255, 255, 255, 0.28) 0%, transparent 55%), linear-gradient(135deg, #09164f 0%, #2546c7 100%)"
          }}
        >
          {/* Bottom Right Corner Border Glow Outline */}
          <div 
            className="absolute inset-0 border border-transparent rounded-[32px] pointer-events-none z-20"
            style={{
              borderRightWidth: "2px",
              borderBottomWidth: "2px",
              borderRightColor: "rgba(255, 255, 255, 0.8)",
              borderBottomColor: "rgba(255, 255, 255, 0.8)",
              WebkitMaskImage: "radial-gradient(circle at bottom right, black 25%, transparent 60%)",
              maskImage: "radial-gradient(circle at bottom right, black 25%, transparent 60%)"
            }}
          />
          <h3 className="font-sans font-bold text-lg sm:text-xl md:text-lg lg:text-[16px] xl:text-lg 2xl:text-xl text-white mb-3 drop-shadow-[0_2px_4px_rgba(9,22,79,0.65)] whitespace-nowrap">
            Business Operations Automation
          </h3>
          <p className="font-sans text-sm text-blue-100/90 leading-relaxed mb-4 drop-shadow-[0_1.5px_3px_rgba(9,22,79,0.55)]">
            Streamline your entire business operations with intelligent automation. From HR processes to financial workflows, eliminate manual tasks.
          </p>

          {/* Card 4 Visual: Premium SaaS Business Operations Mockup */}
          <div className="mt-auto h-[140px] relative w-full">
            <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 origin-bottom scale-[0.7] w-[142.8%] h-[230px]">
              <div className="bg-white rounded-2xl p-4 shadow-lg border border-slate-100/80 flex flex-col h-full w-full relative overflow-hidden select-none transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(15,23,42,0.06)] group-hover:border-slate-200">
                
                {/* Dotted Grid Background */}
                <div 
                  className="absolute inset-0 opacity-[0.15] pointer-events-none z-0" 
                  style={{
                    backgroundImage: "radial-gradient(#cbd5e1 1.5px, transparent 1.5px)",
                    backgroundSize: "16px 16px"
                  }}
                />

                {/* Canvas header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3 relative z-10">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-100" />
                    <span className="text-[10px] font-bold text-slate-400 ml-2 tracking-tight">AI Operations Control</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] font-bold px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full border border-blue-100 scale-90">Automated</span>
                    <span className="text-[9px] font-bold px-2 py-0.5 bg-emerald-500 text-white rounded-full scale-90 animate-pulse">Online</span>
                  </div>
                </div>
                
                {/* Operations content area */}
                <div className="flex-1 relative z-10">
                  
                  {/* Widget 1: Operations Queue */}
                  <div className="absolute left-[4%] top-[10px] w-[50%] h-[145px] bg-white/95 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-2.5 shadow-[0_4px_12px_rgba(15,23,42,0.04)] flex flex-col justify-between transition-all duration-500 ease-out group-hover:translate-y-[-3px] group-hover:border-blue-300 group-hover:shadow-[0_8px_20px_rgba(59,130,246,0.08)]">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-1 mb-1">
                      <span className="text-[7.5px] text-slate-400 font-semibold uppercase tracking-wider font-mono">Operations Queue</span>
                      <Briefcase className="w-3 h-3 text-blue-500 transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    
                    {/* Queue items */}
                    <div className="flex-1 flex flex-col justify-center gap-1">
                      <div className="flex items-center justify-between text-[7px] bg-slate-50/50 p-1 rounded border border-slate-150">
                        <span className="font-bold text-slate-700">HR Onboarding</span>
                        <span className="text-[6px] font-bold bg-emerald-100 text-emerald-800 px-1 rounded-sm">Approved</span>
                      </div>
                      <div className="flex items-center justify-between text-[7px] bg-slate-50/50 p-1 rounded border border-slate-150">
                        <span className="font-bold text-slate-700">Invoice Scan</span>
                        <span className="text-[6px] font-bold bg-blue-100 text-blue-800 px-1 rounded-sm">Processing</span>
                      </div>
                      <div className="flex items-center justify-between text-[7px] bg-slate-50/50 p-1 rounded border border-slate-150">
                        <span className="font-bold text-slate-700">Expense Claim</span>
                        <span className="text-[6px] font-bold bg-purple-100 text-purple-800 px-1 rounded-sm">Verified</span>
                      </div>
                    </div>
                  </div>

                  {/* Widget 2: Efficiency Gain */}
                  <div className="absolute left-[58%] top-[10px] w-[38%] h-[70px] bg-white/95 backdrop-blur-sm border border-slate-200/80 rounded-xl p-2 shadow-[0_4px_12px_rgba(15,23,42,0.04)] flex flex-col justify-between transition-all duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:border-blue-300 group-hover:shadow-[0_8px_16px_rgba(59,130,246,0.08)]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5.5 h-5.5 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:rotate-12">
                        <TrendingUp className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-[8.5px] font-bold text-slate-800 leading-tight truncate">Workflow Accuracy</span>
                        <span className="text-[6.5px] text-slate-400 font-semibold uppercase tracking-wider font-mono">AI Extraction</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border-t border-slate-100 pt-1 mt-0.5">
                      <span className="text-[7.5px] text-slate-500">OCR Parsing</span>
                      <span className="text-[7.5px] font-bold text-emerald-600">99.2%</span>
                    </div>
                  </div>

                  {/* Widget 3: Time Saved Tracker */}
                  <div className="absolute left-[58%] top-[90px] w-[38%] h-[65px] bg-white/95 backdrop-blur-sm border border-slate-200/80 rounded-xl p-2 shadow-[0_4px_12px_rgba(15,23,42,0.04)] flex flex-col justify-between transition-all duration-500 ease-out group-hover:translate-x-1.5 group-hover:translate-y-0.5 group-hover:border-emerald-300 group-hover:shadow-[0_8px_16px_rgba(16,185,129,0.08)]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5.5 h-5.5 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110">
                        <Clock className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-[8.5px] font-bold text-slate-800 leading-tight truncate">Time Savings</span>
                        <span className="text-[6.5px] text-slate-400 font-semibold uppercase tracking-wider font-mono">Monthly Saved</span>
                      </div>
                    </div>
                    <div className="flex flex-col border-t border-slate-100 pt-1 mt-0.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[7.5px] text-slate-500">Hours</span>
                        <span className="text-[7.5px] font-extrabold text-slate-800">184 hrs</span>
                      </div>
                      <div className="w-full bg-slate-100 h-1 rounded-full mt-1 overflow-hidden">
                        <div className="bg-blue-500 h-full rounded-full transition-all duration-1000 group-hover:w-[85%]" style={{ width: "20%" }} />
                      </div>
                    </div>
                  </div>

                  {/* Faded Background Node (CRM Sync) - Blurred Depth */}
                  <div className="absolute left-[2%] top-[170px] w-[46%] h-[35px] bg-white/40 border border-slate-200/40 rounded-lg p-1.5 flex items-center gap-1.5 shadow-sm opacity-30 blur-[0.8px] transition-all duration-700 ease-out group-hover:opacity-75 group-hover:blur-0 group-hover:scale-[1.03] group-hover:bg-white/80 group-hover:border-slate-200 group-hover:shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
                    <div className="w-4 h-4 rounded bg-slate-100 flex items-center justify-center text-slate-400 flex-shrink-0">
                      <UserCheck className="w-2.5 h-2.5" />
                    </div>
                    <span className="text-[7.5px] font-bold text-slate-400 group-hover:text-slate-600 truncate">Synced 140 entries to CRM</span>
                  </div>

                  {/* Faded Background Node (Billing Autoclear) - Blurred Depth */}
                  <div className="absolute left-[52%] top-[170px] w-[44%] h-[35px] bg-white/40 border border-slate-200/40 rounded-lg p-1.5 flex items-center gap-1.5 shadow-sm opacity-25 blur-[1.2px] transition-all duration-700 ease-out group-hover:opacity-70 group-hover:blur-0 group-hover:scale-[1.03] group-hover:bg-white/80 group-hover:border-slate-200 group-hover:shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
                    <div className="w-4 h-4 rounded bg-slate-100 flex items-center justify-center text-slate-400 flex-shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span className="text-[7.5px] font-bold text-slate-400 group-hover:text-slate-600 truncate">Billing: Payouts Auto-Cleared</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

            {/* Card 5: Marketing Automation with AI */}
            <div 
              className="relative min-h-[300px] rounded-[32px] border border-blue-900/15 overflow-hidden flex flex-col pt-6 px-6 pb-0 md:pt-8 md:px-8 md:pb-0 group cursor-pointer shadow-[0_15px_45px_rgba(15,23,42,0.04)] hover:-translate-y-1.5 hover:border-blue-400/40 hover:shadow-[0_20px_50px_rgba(37,99,235,0.16)] transition-all duration-500"
              style={{
                background: "radial-gradient(circle at bottom right, rgba(255, 255, 255, 0.28) 0%, transparent 55%), linear-gradient(135deg, #09164f 0%, #2546c7 100%)"
              }}
            >
              {/* Bottom Right Corner Border Glow Outline */}
              <div 
                className="absolute inset-0 border border-transparent rounded-[32px] pointer-events-none z-20"
                style={{
                  borderRightWidth: "2px",
                  borderBottomWidth: "2px",
                  borderRightColor: "rgba(255, 255, 255, 0.8)",
                  borderBottomColor: "rgba(255, 255, 255, 0.8)",
                  WebkitMaskImage: "radial-gradient(circle at bottom right, black 25%, transparent 60%)",
                  maskImage: "radial-gradient(circle at bottom right, black 25%, transparent 60%)"
                }}
              />
              <h3 className="font-sans font-bold text-lg sm:text-xl md:text-lg lg:text-[16px] xl:text-lg 2xl:text-xl text-white mb-3 drop-shadow-[0_2px_4px_rgba(9,22,79,0.65)] whitespace-nowrap">
                Marketing Automation with AI
              </h3>
              <p className="font-sans text-sm text-blue-100/90 leading-relaxed mb-4 drop-shadow-[0_1.5px_3px_rgba(9,22,79,0.55)]">
                Transform your marketing with AI-driven campaigns, automated lead nurturing, social media management, and intelligent customer segmentation.
              </p>

              {/* Card 5 Visual: Marketing Dashboard Wrapper */}
              <div className="mt-auto h-[140px] relative w-full">
                <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 origin-bottom scale-[0.7] w-[142.8%] h-[230px]">
                  <div className="bg-white rounded-2xl p-4 shadow-lg border border-slate-100/80 flex flex-col h-full w-full relative overflow-hidden select-none transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(15,23,42,0.06)] group-hover:border-slate-200">
                    
                    {/* Dotted Grid Background */}
                    <div 
                      className="absolute inset-0 opacity-[0.15] pointer-events-none z-0" 
                      style={{
                        backgroundImage: "radial-gradient(#cbd5e1 1.5px, transparent 1.5px)",
                        backgroundSize: "16px 16px"
                      }}
                    />

                    {/* Canvas header */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3 relative z-10">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-100" />
                        <span className="text-[10px] font-bold text-slate-400 ml-2 tracking-tight">AI Campaign Hub</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[9px] font-bold px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full border border-blue-100 scale-90">Automated</span>
                        <span className="text-[9px] font-bold px-2 py-0.5 bg-emerald-500 text-white rounded-full scale-90 animate-pulse">Live</span>
                      </div>
                    </div>

                    {/* Connector lines and nodes */}
                    <div className="flex-1 relative z-10">
                      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Connecting paths from Campaign Director */}
                        <path d="M 136 82.5 C 146 82.5, 150 37.5, 168 37.5" className="stroke-slate-200 transition-all duration-500 group-hover:stroke-purple-400 group-hover:stroke-[1.5px]" strokeWidth="1.2" />
                        <path d="M 136 82.5 C 146 82.5, 150 102.5, 168 102.5" className="stroke-slate-200 transition-all duration-500 group-hover:stroke-purple-400 group-hover:stroke-[1.5px]" strokeWidth="1.2" />
                        <path d="M 136 82.5 C 146 82.5, 150 167.5, 168 167.5" className="stroke-slate-200 transition-all duration-500 group-hover:stroke-purple-400 group-hover:stroke-[1.5px]" strokeWidth="1.2" />

                        {/* Connection from Nodes to Chart */}
                        <path d="M 272 37.5 C 280 37.5, 280 90, 288 90" className="stroke-slate-200 transition-all duration-500 group-hover:stroke-indigo-400 group-hover:stroke-[1.2px]" strokeWidth="1" />
                        <path d="M 272 102.5 C 280 102.5, 280 90, 288 90" className="stroke-slate-200 transition-all duration-500 group-hover:stroke-indigo-400 group-hover:stroke-[1.2px]" strokeWidth="1" />
                        <path d="M 272 167.5 C 280 167.5, 280 90, 288 90" className="stroke-slate-200 transition-all duration-500 group-hover:stroke-indigo-400 group-hover:stroke-[1.2px]" strokeWidth="1" />

                        {/* Animated flowing dots on paths */}
                        <circle r="2.5" fill="#a855f7" className="filter drop-shadow-[0_0_3px_#a855f7]">
                          <animateMotion dur="2.4s" repeatCount="indefinite" path="M 136 82.5 C 146 82.5, 150 37.5, 168 37.5" />
                        </circle>
                        <circle r="2.5" fill="#a855f7" className="filter drop-shadow-[0_0_3px_#a855f7]">
                          <animateMotion dur="2s" repeatCount="indefinite" path="M 136 82.5 C 146 82.5, 150 102.5, 168 102.5" />
                        </circle>
                        <circle r="2.5" fill="#a855f7" className="filter drop-shadow-[0_0_3px_#a855f7]">
                          <animateMotion dur="2.8s" repeatCount="indefinite" path="M 136 82.5 C 146 82.5, 150 167.5, 168 167.5" />
                        </circle>
                      </svg>

                      {/* Center Node: Campaign Director */}
                      <div className="absolute left-[4%] top-[45px] w-[30%] h-[75px] bg-white/98 border border-slate-200/80 rounded-2xl p-2.5 shadow-[0_4px_12px_rgba(15,23,42,0.04)] flex flex-col justify-between z-10 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:border-purple-300 group-hover:shadow-[0_8px_20px_rgba(168,85,247,0.12)]">
                        <div className="flex items-center gap-1.5">
                          <div className="w-6 h-6 rounded-lg bg-purple-50 flex items-center justify-center text-purple-500 flex-shrink-0 transition-transform duration-500 group-hover:rotate-12">
                            <Megaphone className="w-3.5 h-3.5" />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="text-[10px] font-extrabold text-slate-800 leading-tight truncate">Campaign AI</span>
                            <span className="text-[7px] text-purple-600 font-bold uppercase font-mono">Director</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between border-t border-slate-100 pt-1.5 mt-1">
                          <span className="text-[7px] font-mono text-slate-400 font-bold">Status</span>
                          <span className="text-[7px] font-bold text-emerald-600 bg-emerald-50 px-1 rounded border border-emerald-100/50">Active</span>
                        </div>
                      </div>

                      {/* Node 1: Email Campaign (Top Right) */}
                      <div className="absolute left-[42%] top-[10px] w-[26%] h-[50px] bg-white/95 border border-slate-200/80 rounded-xl p-1.5 shadow-[0_4px_12px_rgba(15,23,42,0.04)] flex items-center gap-1.5 z-10 transition-all duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:border-purple-200 group-hover:shadow-[0_8px_16px_rgba(168,85,247,0.08)]">
                        <div className="w-5.5 h-5.5 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 flex-shrink-0 transition-transform duration-500 group-hover:scale-110">
                          <Mail className="w-3 h-3" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[9px] font-bold text-slate-800 leading-tight truncate">Email Blast</span>
                          <span className="text-[7px] text-emerald-600 font-bold font-mono">+24% CTR</span>
                        </div>
                      </div>

                      {/* Node 2: Social Ads (Middle Right) */}
                      <div className="absolute left-[42%] top-[70px] w-[26%] h-[50px] bg-white/95 border border-slate-200/80 rounded-xl p-1.5 shadow-[0_4px_12px_rgba(15,23,42,0.04)] flex items-center gap-1.5 z-10 transition-all duration-500 ease-out group-hover:translate-x-1.5 group-hover:border-purple-200 group-hover:shadow-[0_8px_16px_rgba(16,185,129,0.08)]">
                        <div className="w-5.5 h-5.5 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-500 flex-shrink-0 transition-transform duration-500 group-hover:scale-110">
                          <Globe className="w-3 h-3" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[9px] font-bold text-slate-800 leading-tight truncate">Social Ads</span>
                          <span className="text-[7px] text-emerald-600 font-bold font-mono">3.2x ROAS</span>
                        </div>
                      </div>

                      {/* Node 3: SMS/Segment (Bottom Right) */}
                      <div className="absolute left-[42%] top-[130px] w-[26%] h-[50px] bg-white/95 border border-slate-200/80 rounded-xl p-1.5 shadow-[0_4px_12px_rgba(15,23,42,0.04)] flex items-center gap-1.5 z-10 transition-all duration-500 ease-out group-hover:translate-x-1 group-hover:translate-y-0.5 group-hover:border-purple-200 group-hover:shadow-[0_8px_16px_rgba(16,185,129,0.08)]">
                        <div className="w-5.5 h-5.5 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0 transition-transform duration-500 group-hover:scale-110">
                          <UserCheck className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[9px] font-bold text-slate-800 leading-tight truncate">Segmentation</span>
                          <span className="text-[7px] text-slate-400 font-bold font-mono">Active</span>
                        </div>
                      </div>

                      {/* Rightmost Widget: Analytics Performance Graph */}
                      <div className="absolute left-[73%] top-[20px] w-[23%] h-[150px] bg-white/95 border border-slate-200/80 rounded-2xl p-2.5 shadow-[0_4px_12px_rgba(15,23,42,0.04)] flex flex-col justify-between z-10 transition-all duration-500 ease-out group-hover:translate-x-2 group-hover:border-indigo-300 group-hover:shadow-[0_8px_20px_rgba(99,102,241,0.08)]">
                        <div className="flex flex-col">
                          <span className="text-[7px] text-slate-400 font-semibold uppercase font-mono">Performance</span>
                          <span className="text-[10px] font-extrabold text-slate-800 leading-tight mt-0.5">+48.2%</span>
                        </div>
                        
                        {/* Area Chart SVG */}
                        <svg className="w-full h-16 my-1" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <linearGradient id="chart-grad-5" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.25" />
                              <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path d="M 0 32 C 20 32, 15 8, 30 8 C 45 8, 40 28, 55 28 C 65 28, 70 12, 80 12" stroke="#a855f7" strokeWidth="1.5" fill="none" className="transition-all duration-700 group-hover:stroke-purple-600" />
                          <path d="M 0 32 C 20 32, 15 8, 30 8 C 45 8, 40 28, 55 28 C 65 28, 70 12, 80 12 L 80 40 L 0 40 Z" fill="url(#chart-grad-5)" />
                          <circle cx="30" cy="8" r="2" fill="#a855f7" className="animate-ping" />
                          <circle cx="30" cy="8" r="2" fill="#9333ea" />
                        </svg>

                        <div className="border-t border-slate-100 pt-1 flex items-center justify-between text-[6.5px] text-slate-400 font-medium">
                          <span>ROI Goal</span>
                          <span className="text-emerald-600 font-bold">Reached</span>
                        </div>
                      </div>

                      {/* Faded Background Node (Depth of Field) */}
                      <div className="absolute left-[10%] top-[148px] w-[26%] h-[24px] bg-white/40 border border-slate-200/40 rounded-lg p-1 flex items-center justify-center gap-1 shadow-sm opacity-25 blur-[1px] transition-all duration-700 ease-out group-hover:opacity-85 group-hover:blur-0 group-hover:scale-[1.05] group-hover:bg-white/80 group-hover:border-slate-200 group-hover:shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
                        <span className="text-[7px] font-bold text-slate-400">Ad Spend Limit OK</span>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6: Support Assistant Automation */}
            <div 
              className="relative min-h-[300px] rounded-[32px] border border-blue-900/15 overflow-hidden flex flex-col pt-6 px-6 pb-0 md:pt-8 md:px-8 md:pb-0 group cursor-pointer shadow-[0_15px_45px_rgba(15,23,42,0.04)] hover:-translate-y-1.5 hover:border-blue-400/40 hover:shadow-[0_20px_50px_rgba(37,99,235,0.16)] transition-all duration-500"
              style={{
                background: "radial-gradient(circle at bottom right, rgba(255, 255, 255, 0.28) 0%, transparent 55%), linear-gradient(135deg, #09164f 0%, #2546c7 100%)"
              }}
            >
              {/* Bottom Right Corner Border Glow Outline */}
              <div 
                className="absolute inset-0 border border-transparent rounded-[32px] pointer-events-none z-20"
                style={{
                  borderRightWidth: "2px",
                  borderBottomWidth: "2px",
                  borderRightColor: "rgba(255, 255, 255, 0.8)",
                  borderBottomColor: "rgba(255, 255, 255, 0.8)",
                  WebkitMaskImage: "radial-gradient(circle at bottom right, black 25%, transparent 60%)",
                  maskImage: "radial-gradient(circle at bottom right, black 25%, transparent 60%)"
                }}
              />
              <h3 className="font-sans font-bold text-lg sm:text-xl md:text-lg lg:text-[16px] xl:text-lg 2xl:text-xl text-white mb-3 drop-shadow-[0_2px_4px_rgba(9,22,79,0.65)] whitespace-nowrap">
                Support Assistant Automation
              </h3>
              <p className="font-sans text-sm text-blue-100/90 leading-relaxed mb-4 drop-shadow-[0_1.5px_3px_rgba(9,22,79,0.55)]">
                Deploy intelligent support assistants that handle customer inquiries, provide instant solutions, and escalate complex issues to human agents.
              </p>

              {/* Card 6 Visual: Chat widget Wrapper */}
              <div className="mt-auto h-[140px] relative w-full">
                <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 origin-bottom scale-[0.7] w-[142.8%] h-[230px]">
                  <div className="bg-white rounded-2xl p-4 shadow-lg border border-slate-100/80 flex flex-col h-full w-full relative overflow-hidden select-none transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(15,23,42,0.06)] group-hover:border-slate-200">
                    
                    {/* Dotted Grid Background */}
                    <div 
                      className="absolute inset-0 opacity-[0.15] pointer-events-none z-0" 
                      style={{
                        backgroundImage: "radial-gradient(#cbd5e1 1.5px, transparent 1.5px)",
                        backgroundSize: "16px 16px"
                      }}
                    />

                    {/* Canvas header */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3 relative z-10">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-100" />
                        <span className="text-[10px] font-bold text-slate-400 ml-2 tracking-tight">AI Helpdesk Center</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[9px] font-bold px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full border border-blue-100 scale-90">Auto-Pilot</span>
                        <span className="text-[9px] font-bold px-2 py-0.5 bg-emerald-500 text-white rounded-full scale-90 animate-pulse">Online</span>
                      </div>
                    </div>

                    {/* Connector lines and nodes */}
                    <div className="flex-1 relative z-10">
                      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Connecting paths */}
                        <path d="M 216 82.5 C 224 82.5, 224 45, 232 45" className="stroke-slate-200 transition-all duration-500 group-hover:stroke-blue-400 group-hover:stroke-[1.5px]" strokeWidth="1.2" />
                        <path d="M 216 82.5 C 224 82.5, 224 122.5, 232 122.5" className="stroke-slate-200 transition-all duration-500 group-hover:stroke-blue-400 group-hover:stroke-[1.5px]" strokeWidth="1.2" />

                        {/* Animated flowing dots on paths */}
                        <circle r="2.5" fill="#3b82f6" className="filter drop-shadow-[0_0_3px_#3b82f6]">
                          <animateMotion dur="2s" repeatCount="indefinite" path="M 216 82.5 C 224 82.5, 224 45, 232 45" />
                        </circle>
                        <circle r="2.5" fill="#3b82f6" className="filter drop-shadow-[0_0_3px_#3b82f6]">
                          <animateMotion dur="2.5s" repeatCount="indefinite" path="M 216 82.5 C 224 82.5, 224 122.5, 232 122.5" />
                        </circle>
                      </svg>

                      {/* Left Side Chat Window */}
                      <div className="absolute left-[4%] top-[10px] w-[50%] h-[145px] bg-white rounded-2xl border border-slate-200/80 shadow-[0_4px_12px_rgba(15,23,42,0.04)] overflow-hidden flex flex-col z-10 transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:border-blue-300 group-hover:shadow-[0_12px_24px_rgba(59,130,246,0.08)]">
                        {/* Chat header */}
                        <div className="bg-slate-50 border-b border-slate-100 py-1.5 px-2 flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <div className="w-4 h-4 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
                              <Bot className="w-2.5 h-2.5" />
                            </div>
                            <span className="text-[7.5px] font-bold text-slate-800">Support Chat</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 rounded-full bg-emerald-500" />
                            <span className="text-[6px] text-slate-400 font-mono">Online</span>
                          </div>
                        </div>

                        {/* Chat messages */}
                        <div className="flex-1 p-2 flex flex-col gap-1.5 overflow-hidden">
                          <div className="bg-slate-100 text-slate-700 text-[6.5px] max-w-[80%] rounded-lg p-1.5 self-start font-medium">
                            Order #4820 is delayed?
                          </div>
                          <div className="border border-blue-200 bg-blue-50/50 text-blue-800 text-[6.5px] max-w-[80%] rounded-lg p-1.5 self-end font-semibold">
                            AI Suggestion: Auto Refund
                          </div>
                          <div className="bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-lg p-1 text-[6px] max-w-[95%] self-center flex items-center gap-1 mt-0.5 font-bold">
                            <Check className="w-2.5 h-2.5 text-emerald-600" />
                            <span>Auto-resolved via Stripe API</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Side Widget 1: Ticket Routing */}
                      <div className="absolute left-[58%] top-[10px] w-[38%] h-[70px] bg-white/95 border border-slate-200/80 rounded-xl p-2 shadow-sm z-10 transition-all duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:border-blue-300 group-hover:shadow-[0_8px_16px_rgba(59,130,246,0.08)]">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-1 mb-1">
                          <span className="text-[7.5px] text-slate-400 font-semibold uppercase font-mono">Ticket Routing</span>
                          <Sliders className="w-3 h-3 text-blue-500" />
                        </div>
                        <div className="flex items-center justify-center gap-2 mt-1">
                          <div className="text-[7px] font-bold bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded border border-blue-100">AI Input</div>
                          <ArrowRight className="w-2.5 h-2.5 text-slate-300" />
                          <div className="text-[7px] font-bold bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded border border-emerald-100">Resolved</div>
                        </div>
                      </div>

                      {/* Right Side Widget 2: AI Metrics */}
                      <div className="absolute left-[58%] top-[90px] w-[38%] h-[65px] bg-white/95 border border-slate-200/80 rounded-xl p-2 shadow-sm z-10 transition-all duration-500 ease-out group-hover:translate-x-1.5 group-hover:translate-y-0.5 group-hover:border-emerald-300 group-hover:shadow-[0_8px_16px_rgba(16,185,129,0.08)]">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center justify-between text-[6.5px] text-slate-500">
                            <span>Auto-Resolved</span>
                            <span className="font-bold text-slate-800">84%</span>
                          </div>
                          <div className="flex items-center justify-between text-[6.5px] text-slate-500">
                            <span>Response Time</span>
                            <span className="font-bold text-slate-800">0.8s</span>
                          </div>
                          <div className="flex items-center justify-between text-[6.5px] text-slate-500">
                            <span>CSAT Score</span>
                            <span className="font-bold text-slate-800">98%</span>
                          </div>
                        </div>
                      </div>

                      {/* Faded Background Node (Depth of Field) */}
                      <div className="absolute left-[4%] top-[165px] w-[46%] h-[24px] bg-white/40 border border-slate-200/40 rounded-lg p-1 flex items-center justify-center gap-1 shadow-sm opacity-25 blur-[1.2px] transition-all duration-700 ease-out group-hover:opacity-75 group-hover:blur-0 group-hover:scale-[1.05] group-hover:bg-white/80 group-hover:border-slate-200 group-hover:shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
                        <span className="text-[7px] font-bold text-slate-400">Escalations: 0 in queue</span>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
