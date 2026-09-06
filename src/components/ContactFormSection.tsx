"use client";

import React, { useState } from "react";
import ScrambleText from "./ScrambleText";
import { Send, CheckCircle2, AlertCircle, Loader2, ShieldCheck, Zap, Clock, Users } from "lucide-react";

export default function ContactFormSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("web-development");
  const [details, setDetails] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      return;
    }

    setIsSubmitting(true);
    setError("");

    const serviceLabels: Record<string, string> = {
      "web-development": "Web Development",
      "mobile-apps": "Mobile Apps",
      "ai-solutions": "AI & Automation Solutions",
      "ecommerce": "Ecommerce Automation",
      "other": "Other Services",
    };

    const fullMessage = `Project Interest: ${serviceLabels[service] || service}\n\nProject Details:\n${details}`;

    try {
      const res = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message: fullMessage,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit request");
      }

      setSuccess(true);
      setName("");
      setEmail("");
      setDetails("");
      setService("web-development");
    } catch (err: any) {
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="section-reveal contact-form-reveal relative w-full py-12 md:py-28 px-4 md:px-20 bg-[#f8fafc] border-t border-slate-100 overflow-hidden text-slate-800"
      aria-labelledby="contact-heading"
    >
      {/* Background Subtle Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.15] pointer-events-none" />

      {/* Soft Glow Circles */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Info & Value Props */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="font-sans text-xs md:text-sm font-bold uppercase tracking-[0.15em] text-blue-600 mb-3 block">
              <ScrambleText text="Start a Project" />
            </span>

            <h2
              id="contact-heading"
              className="font-sans text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900 mb-4 md:mb-6"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#aebcff] via-[#2546c7] to-[#09164f]">
                Let&apos;s Build Something Extraordinary
              </span>
            </h2>

            <p className="font-sans text-xs sm:text-base leading-relaxed text-slate-600 mb-6 md:mb-8">
              Have a project in mind or need top 1% tech talent? Submit your project details below and book a free 30-minute consultation call with our engineering leads.
            </p>

            {/* Value Points List */}
            <div className="flex flex-col gap-3.5 w-full mb-6 md:mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <span className="font-sans text-xs md:text-sm font-semibold text-slate-700">
                  Free 30-min strategy & scoping call
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="font-sans text-xs md:text-sm font-semibold text-slate-700">
                  Fast onboarding & delivery (1–4 Weeks)
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="font-sans text-xs md:text-sm font-semibold text-slate-700">
                  100% IP Ownership & NDA Protection
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <span className="font-sans text-xs md:text-sm font-semibold text-slate-700">
                  Top 1% Senior Engineers & Designers
                </span>
              </div>
            </div>

            {/* Quick Email Note */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs w-full">
              <p className="font-sans text-xs text-slate-500">
                Prefer email? Reach us directly at{" "}
                <a href="mailto:contact@codemoly.com" className="font-bold text-blue-600 hover:underline">
                  contact@codemoly.com
                </a>
              </p>
            </div>
          </div>

          {/* Right Column: Inline Contact Form Card (Cinematic Dark Theme) */}
          <div className="lg:col-span-7 w-full">
            <div className="relative w-full overflow-hidden rounded-2xl md:rounded-3xl border border-white/15 bg-gradient-to-b from-[#0a0f24] via-[#060a17] to-[#040711] p-5 sm:p-8 md:p-10 text-white shadow-[0_30px_90px_rgba(0,0,0,0.5),0_0_60px_rgba(37,99,235,0.15)]">
              
              {/* ── CINEMATIC SOFT BLURRED SUNLIGHT GLOWS & RAYS ── */}
              
              {/* Layer 1: Top-Right Intense White Sunlight Core (Heavily Blurred & Soft) */}
              <div className="absolute -top-28 -right-28 z-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,1)_0%,rgba(224,242,254,0.85)_25%,rgba(147,197,253,0.45)_50%,rgba(59,130,246,0.18)_70%,transparent_90%)] blur-[45px] pointer-events-none" />

              {/* Layer 2: Soft Volumetric Sun Rays (Conic Gradient with 50px Blur for zero sharp edges) */}
              <div className="absolute -top-20 -right-20 z-0 h-[520px] w-[520px] bg-[conic-gradient(from_190deg_at_100%_0%,rgba(255,255,255,0.75)_0deg,transparent_18deg,rgba(224,242,254,0.55)_32deg,transparent_48deg,rgba(147,197,253,0.4)_68deg,transparent_105deg,rgba(59,130,246,0.25)_128deg,transparent_160deg)] blur-[50px] pointer-events-none" />

              {/* Layer 3: Top-Right Soft Electric Cyan Atmosphere Flare */}
              <div className="absolute top-0 right-0 z-0 h-80 w-80 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.65)_0%,rgba(56,189,248,0.35)_40%,rgba(96,165,250,0.15)_65%,transparent_85%)] blur-[55px] pointer-events-none" />

              {/* Layer 4: Center Indigo/Purple Ambient Glow */}
              <div className="absolute top-1/3 left-1/2 z-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.14)_0%,rgba(139,92,246,0.06)_50%,transparent_80%)] blur-[75px] pointer-events-none" />

              {/* Layer 5: Bottom-Left Deep Blue Glow */}
              <div className="absolute -bottom-24 -left-24 z-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(29,78,216,0.25)_0%,rgba(15,23,42,0.1)_70%,transparent_100%)] blur-[60px] pointer-events-none" />

              {/* Layer 6: Subtle Tech Grid Overlay */}
              <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50 pointer-events-none" />

              {success ? (
                /* Success Feedback State */
                <div className="relative z-10 flex flex-col items-center justify-center py-10 text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 border border-green-500/20 text-green-400 shadow-[0_0_20px_rgba(74,222,128,0.2)]">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="font-sans text-2xl font-bold text-white mb-2">Request Received!</h3>
                  <p className="font-sans text-sm text-slate-300 max-w-sm leading-relaxed mb-6">
                    Thank you for reaching out. A consultant from CodeMoly will review your project details and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="flex items-center justify-center gap-2 px-6 py-2.5 text-slate-200 font-semibold text-xs md:text-sm rounded-lg border border-slate-700 bg-slate-800/80 hover:bg-slate-800 hover:text-white hover:border-slate-600 transition-all duration-300 cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                /* Main Form State */
                <div className="relative z-10">
                  <div className="mb-6">
                    <h3 className="font-sans text-xl md:text-2xl font-extrabold text-white mb-1 tracking-tight">
                      Let&apos;s build together
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-slate-400">
                      Fill out the form below to get a free estimate and timeline for your project.
                    </p>
                  </div>

                  {error && (
                    <div className="mb-5 flex items-center gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 text-xs text-red-400">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Name Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="section-form-name" className="font-sans text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        id="section-form-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-slate-700/60 bg-[#0c142d]/80 px-4 py-3 text-sm text-white placeholder-slate-400 backdrop-blur-xs transition-all outline-none focus:border-blue-400/80 focus:bg-[#0f1b3d] focus:ring-2 focus:ring-blue-500/30"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="section-form-email" className="font-sans text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        id="section-form-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        required
                        className="w-full rounded-xl border border-slate-700/60 bg-[#0c142d]/80 px-4 py-3 text-sm text-white placeholder-slate-400 backdrop-blur-xs transition-all outline-none focus:border-blue-400/80 focus:bg-[#0f1b3d] focus:ring-2 focus:ring-blue-500/30"
                      />
                    </div>

                    {/* Service Select */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="section-form-service" className="font-sans text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Select Service
                      </label>
                      <div className="relative">
                        <select
                          id="section-form-service"
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full appearance-none rounded-xl border border-slate-700/60 bg-[#0c142d]/80 px-4 py-3 pr-10 text-sm text-white backdrop-blur-xs transition-all outline-none focus:border-blue-400/80 focus:bg-[#0f1b3d] focus:ring-2 focus:ring-blue-500/30 cursor-pointer"
                        >
                          <option value="web-development" className="bg-[#0c142d] text-white">Web Development</option>
                          <option value="mobile-apps" className="bg-[#0c142d] text-white">Mobile Apps</option>
                          <option value="ai-solutions" className="bg-[#0c142d] text-white">AI & Automation Solutions</option>
                          <option value="ecommerce" className="bg-[#0c142d] text-white">Ecommerce Automation</option>
                          <option value="other" className="bg-[#0c142d] text-white">Other Services</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">
                          <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Message Details */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="section-form-details" className="font-sans text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Tell us about your project
                      </label>
                      <textarea
                        id="section-form-details"
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        placeholder="Briefly describe what you're looking to build..."
                        rows={4}
                        className="w-full resize-none rounded-xl border border-slate-700/60 bg-[#0c142d]/80 px-4 py-3 text-sm text-white placeholder-slate-400 backdrop-blur-xs transition-all outline-none focus:border-blue-400/80 focus:bg-[#0f1b3d] focus:ring-2 focus:ring-blue-500/30"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="mt-2 w-full">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 py-3.5 text-white font-semibold text-xs md:text-sm rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-95 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{ backgroundImage: "linear-gradient(to bottom, #1d4ed8, #3b82f6)" }}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin text-white" />
                            <span>Submitting Request...</span>
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 text-white" />
                            <span>Book Strategy Call</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
