"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, ArrowRight, ArrowLeft } from "lucide-react";

export default function CustomLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        window.location.href = "/admin";
      } else {
        setError(data.errors?.[0]?.message || "Invalid email or password.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-screen-wrapper">
      {/* CSS Stylesheet Inject for light-mode mesh gradients & layouts */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Override Payload's default minimal template constraints */
        html, body, #__next, .payload, main.payload {
          background-color: #f1f2f7 !important;
        }
        .template-minimal {
          max-width: none !important;
          width: 100% !important;
          padding: 0 !important;
          margin: 0 !important;
          background-color: #f1f2f7 !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          min-height: 100vh !important;
        }
        .template-minimal--width-normal {
          max-width: none !important;
          width: 100% !important;
        }
        .template-minimal__wrap {
          max-width: none !important;
          width: 100% !important;
          padding: 0 !important;
          margin: 0 !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          min-height: 100vh !important;
          background-color: #f1f2f7 !important;
        }
        main.payload {
          max-width: none !important;
          width: 100% !important;
          background-color: #f1f2f7 !important;
        }
        section.login {
          max-width: none !important;
          width: 100% !important;
          padding: 0 !important;
          margin: 0 !important;
        }

        .login-screen-wrapper {
          min-height: 100vh;
          width: 100%;
          background: #f1f2f7;
          font-family: 'Inter', 'Plus Jakarta Sans', sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          position: relative;
          overflow: hidden;
        }

        .login-back-home {
          position: absolute;
          top: 30px;
          left: 30px;
          display: flex;
          align-items: center;
          gap: 8px;
          color: #555566;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          z-index: 10;
          transition: all 0.3s ease;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          padding: 8px 16px;
          border-radius: 9999px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
        }
        .login-back-home:hover {
          color: #111122;
          border-color: rgba(0, 0, 0, 0.15);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
          transform: translateY(-2px);
        }

        .login-card {
          width: 1000px;
          max-width: 100%;
          min-height: 600px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 28px;
          display: flex;
          padding: 16px; /* Gap around the panels */
          z-index: 5;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.04);
        }

        /* Left Split Panel */
        .login-left-panel {
          flex: 1;
          background: linear-gradient(135deg, #1d4ed8 0%, #7c3aed 50%, #db2777 100%);
          position: relative;
          padding: 44px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          overflow: hidden;
          border-radius: 20px; /* Fully rounded nested panel */
        }

        /* Abstract glowing mesh for the left side graphic */
        .login-left-panel::before {
          content: "";
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 10% 20%, rgba(56, 189, 248, 0.6) 0%, transparent 60%),
            radial-gradient(circle at 90% 80%, rgba(244, 63, 94, 0.5) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.6) 0%, transparent 70%);
          z-index: 1;
          filter: blur(20px);
        }

        .login-left-logo {
          position: relative;
          z-index: 3;
          color: #ffffff;
        }

        .login-left-content {
          position: relative;
          z-index: 3;
          width: 100%;
        }

        .login-left-video-container {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 2;
          mix-blend-mode: multiply;
          opacity: 0.85;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .login-left-video {
          width: 140%;
          height: 140%;
          object-fit: cover;
        }

        .login-left-sub {
          color: rgba(255, 255, 255, 0.85);
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 8px;
        }

        .login-left-title {
          font-family: 'Inter', sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.25;
          letter-spacing: -0.02em;
        }

        /* Right Split Panel */
        .login-right-panel {
          flex: 1;
          padding: 44px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .login-right-content {
          width: 100%;
          max-width: 380px;
          margin: 0 auto;
        }

        .login-right-logo {
          color: #133BC9;
          margin-bottom: 24px;
        }

        .login-heading {
          font-family: 'Inter', sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: #0f172a;
          letter-spacing: -0.02em;
          margin-bottom: 10px;
        }

        .login-subheading {
          color: #64748b;
          font-size: 14px;
          line-height: 1.5;
          margin-bottom: 28px;
        }

        /* Form Controls */
        .login-field-group {
          margin-bottom: 20px;
          position: relative;
        }

        .login-label {
          display: block;
          color: #0f172a;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .login-input-container {
          position: relative;
          display: flex;
          align-items: center;
        }

        .login-input {
          width: 100%;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          padding: 12px 16px;
          color: #0f172a;
          font-size: 14px;
          outline: none;
          transition: all 0.2s ease;
        }
        .login-input::placeholder {
          color: #94a3b8;
        }
        .login-input:focus {
          border-color: #4f46e5;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }

        .login-password-input {
          padding-right: 44px;
        }

        .login-pw-toggle {
          position: absolute;
          right: 14px;
          background: transparent;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s ease;
        }
        .login-pw-toggle:hover {
          color: #475569;
        }

        .login-error-msg {
          background: rgba(239, 68, 68, 0.05);
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: 10px;
          padding: 10px 14px;
          color: #ef4444;
          font-size: 13px;
          margin-bottom: 20px;
          line-height: 1.4;
        }

        /* Solid Submit Button (Styled to match OUR PRODUCTS section blue button) */
        .login-submit-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background-image: linear-gradient(rgb(29, 78, 216), rgb(59, 130, 246));
          border: none;
          color: #ffffff;
          padding: 13px;
          font-size: 14px;
          font-weight: 600;
          border-radius: 8px; /* matching rounded-lg */
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* standard shadow-md */
        }
        .login-submit-btn:hover {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* standard shadow-lg */
          transform: scale(1.025); /* subtle scale for full-width layout stability */
        }
        .login-submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          box-shadow: none;
          transform: none;
        }

        .login-footer-links {
          margin-top: 28px;
          text-align: center;
          color: #64748b;
          font-size: 13px;
        }

        .login-footer-link {
          color: #133BC9;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.2s ease;
        }
        .login-footer-link:hover {
          color: #1d4ed8;
        }

        /* Mobile Responsive */
        @media (max-width: 900px) {
          .login-left-panel {
            display: none;
          }
          .login-card {
            width: 450px;
            min-height: auto;
            padding: 16px;
          }
          .login-right-panel {
            padding: 24px 12px;
          }
          .login-back-home {
            top: 20px;
            left: 20px;
          }
        }
      ` }} />

      {/* Return Home Link */}
      <Link href="/" className="login-back-home">
        <ArrowLeft className="w-4 h-4" />
        Return Home
      </Link>

      <div className="login-card">
        {/* Left Panel */}
        <div className="login-left-panel">
          {/* FAQ Background Video */}
          <div className="login-left-video-container">
            <video
              className="login-left-video"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Background animation"
            >
              <source src="/0611.webm" type="video/webm" />
              <source src="/0611.mp4" type="video/mp4" />
            </video>
          </div>



          <div className="login-left-content">
            <p className="login-left-sub">Software & AI Solutions</p>
            <h2 className="login-left-title">
              Transforming businesses through vision & AI innovation
            </h2>
          </div>
        </div>

        {/* Right Panel */}
        <div className="login-right-panel">
          <div className="login-right-content">
            {/* Brand Logo */}
            <div className="login-right-logo">
              <svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-8">
                <path d="M22.4 0.8V7.47H29.07C29.51 7.47 29.87 7.83 29.87 8.27V29.87H37.34V0.8C37.34 0.36 36.98 0 36.54 0H23.2C22.76 0 22.4 0.35 22.4 0.8Z" fill="currentColor"/>
                <path d="M7.14 0.32L0.38 7.09C0.14 7.33 0 7.66 0 8V29.07C0 29.51 0.36 29.87 0.8 29.87H22.4V22.4H8.27C7.83 22.4 7.47 22.04 7.47 21.6V8.26C7.47 7.82 7.83 7.46 8.27 7.46H14.94V0.8C14.94 0.36 14.58 0 14.14 0H7.94C7.63 0 7.35 0.11 7.14 0.32Z" fill="currentColor"/>
                <path d="M14.9301 7.45973V14.4497C14.9301 14.7097 15.1401 14.9297 15.4101 14.9297H21.9301C22.1901 14.9297 22.4101 14.7197 22.4101 14.4497V7.45973L18.6801 3.71973L14.9301 7.45973Z" fill="currentColor"/>
              </svg>
            </div>

            <h1 className="login-heading">Sign in to account</h1>
            <p className="login-subheading">
              Access your client portal, manage software development projects, and monitor your custom AI automation solutions.
            </p>

            {/* Error Message */}
            {error && <div className="login-error-msg">{error}</div>}

            {/* Login Form */}
            <form onSubmit={handleSubmit}>
              {/* Email Address */}
              <div className="login-field-group">
                <label className="login-label">Your email</label>
                <div className="login-input-container">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="farazhaidet786@gmail.com"
                    className="login-input"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="login-field-group">
                <label className="login-label">Password</label>
                <div className="login-input-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="login-input login-password-input"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="login-pw-toggle"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="login-submit-btn"
              >
                {loading ? "Signing In..." : "Get Started"}
              </button>
            </form>



            <div className="login-footer-links">
              Don't have an account?{" "}
              <a href="#" className="login-footer-link" onClick={(e) => e.preventDefault()}>
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
