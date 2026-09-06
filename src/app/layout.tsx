import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Adonis Hero - Transforming Business Through AI",
  description: "A leading software company reshaping industries across the globe through AI automation, seamless integrations, and intelligent solutions that drive business growth.",
  openGraph: {
    title: "Adonis - Transforming Businesses Through AI",
    description: "A leading software company reshaping industries across the globe through AI automation, seamless integrations, and intelligent solutions that drive business growth.",
    type: "website",
    locale: "en_US",
    siteName: "Adonis",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adonis - Transforming Businesses Through AI",
    description: "A leading software company reshaping industries across the globe through AI automation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Adonis",
    "operatingSystem": "All",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD"
    },
    "description": "Transforming businesses across the globe through AI automation, seamless integrations, and intelligent solutions that drive business growth."
  };

  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${sora.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Script
          id="client-error-logger"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.onerror = function(message, url, line, col, error) {
                fetch('/api/log-error', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    source: 'onerror',
                    message: message,
                    url: url,
                    line: line,
                    col: col,
                    stack: error ? error.stack : ''
                  })
                }).catch(function() {});
                return false;
              };
              window.onunhandledrejection = function(event) {
                fetch('/api/log-error', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    source: 'onunhandledrejection',
                    message: event.reason ? event.reason.message || String(event.reason) : 'Unhandled promise rejection',
                    url: window.location.href,
                    stack: event.reason && event.reason.stack ? event.reason.stack : ''
                  })
                }).catch(function() {});
              };
            `
          }}
        />
        {children}
      </body>
    </html>
  );
}
