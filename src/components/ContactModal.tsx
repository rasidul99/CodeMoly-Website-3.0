"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("web-development");
  const [details, setDetails] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);

  // Global click listener to open modal on any ".cta-contact" click
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const ctaButton = target.closest(".cta-contact") || target.closest(".open-contact-modal") || target.closest("[href='#contact']");
      if (ctaButton) {
        const href = ctaButton.getAttribute("href");
        if (href === "#" || href === "#contact" || href === "/contact" || !href) {
          e.preventDefault();
          setIsOpen(true);
        }
      }
    };

    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, []);

  // Manage body scroll and Escape key close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      // Reset form state when closing
      setError("");
      setSuccess(false);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Click outside to close
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

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

  if (!isOpen) return null;

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md transition-opacity duration-300"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg rounded-3xl bg-white p-8 text-slate-800 shadow-[0_25px_70px_rgba(0,0,0,0.25)] border border-slate-100 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          /* Success Message State */
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600 border border-green-200">
              <CheckCircle2 className="h-9 w-9" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
            <p className="font-sans text-sm text-slate-600 max-w-sm leading-relaxed mb-6">
              Thank you for reaching out. A consultant from CodeMoly will review your project details and get back to you within 24 hours.
            </p>
            <div className="w-full mt-4">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 text-slate-700 font-semibold text-[14px] rounded-lg border border-slate-200 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 transition-all duration-300 cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          /* Form Content State */
          <div>
            <div className="mb-6 pr-8">
              <h3 className="font-heading text-2xl font-extrabold text-slate-900 mb-1.5 tracking-tight">Let&apos;s build together</h3>
              <p className="font-sans text-xs md:text-sm text-slate-500 leading-relaxed">
                Submit your project details and book a free consultation call with our tech lead.
              </p>
            </div>

            {error && (
              <div className="mb-5 flex items-center gap-2.5 rounded-xl border border-red-200 bg-red-50 p-3.5 text-xs text-red-600">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name Input */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="modal-name" className="font-sans text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  id="modal-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 transition-all outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="modal-email" className="font-sans text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Email Address *
                </label>
                <input
                  id="modal-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 transition-all outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Service Select */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="modal-service" className="font-sans text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Select Service
                </label>
                <div className="relative">
                  <select
                    id="modal-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 pr-10 text-sm text-slate-800 transition-all outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 cursor-pointer"
                  >
                    <option value="web-development" className="bg-white text-slate-800">Web Development</option>
                    <option value="mobile-apps" className="bg-white text-slate-800">Mobile Apps</option>
                    <option value="ai-solutions" className="bg-white text-slate-800">AI & Automation Solutions</option>
                    <option value="ecommerce" className="bg-white text-slate-800">Ecommerce Automation</option>
                    <option value="other" className="bg-white text-slate-800">Other Services</option>
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
                <label htmlFor="modal-details" className="font-sans text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Tell us about your project
                </label>
                <textarea
                  id="modal-details"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Briefly describe what you're looking to build..."
                  rows={4}
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 transition-all outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Submit Button */}
              <div className="mt-2 w-full">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 text-white font-semibold text-[15px] rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.01] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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
  );
}
