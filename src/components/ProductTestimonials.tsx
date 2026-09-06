"use client";

import React, { useRef, useState } from "react";
import ScrambleText from "./ScrambleText";

const molyecomTestimonials = [
  {
    id: 1,
    name: "Md Reyajul Islam Shojeeb",
    company: "MolyEcom",
    role: "Founder & MD",
    industry: "Ecommerce",
    services: "IVR & Courier Automation",
    shortQuote: "Our courier return rate dropped from 42% to just 15%.",
    fullReview:
      "After using MolyEcom, our courier return rate dropped from 42% to just 15%. We no longer need to hire staff for manual order confirmation calls; the entire process runs automatically in the backend.",
    avatar: "/testimonials/shojeeb.png",
  },
  {
    id: 2,
    name: "Sabbir Rahman",
    company: "BazarBD",
    role: "Head of Operations",
    industry: "Retail Ecommerce",
    services: "Bulk Courier Booking",
    shortQuote: "Bulk courier booking saves us 4 hours every day.",
    fullReview:
      "Before MolyEcom, booking shipments manually with Pathao and Steadfast took hours. Now, we book hundreds of shipments with one click. Bulk label printing and automated tracking updates have optimized our operations.",
    avatar: "/testimonials/david.png",
  },
  {
    id: 3,
    name: "Farhana Ahmed",
    company: "StyleLoft",
    role: "Founder",
    industry: "Fashion & Apparel",
    services: "WhatsApp Cart Recovery",
    shortQuote: "Recovered 25% of our store abandoned carts.",
    fullReview:
      "Abandoned carts used to be lost revenue for us. With MolyEcom's automated WhatsApp recovery reminders, we've recovered over 25% of abandoned carts this month. The return on investment is incredible.",
    avatar: "/testimonials/sarah.png",
  },
  {
    id: 4,
    name: "Tanvir Hasan",
    company: "GadgetNation",
    role: "Co-Founder",
    industry: "Consumer Electronics",
    services: "Fraud Detection & Verification",
    shortQuote: "Blocked over 500 fake orders in our first month.",
    fullReview:
      "MolyEcom's machine learning fraud detection has been a lifesaver. It automatically flags suspicious phone numbers and duplicate orders. We blocked over 500 fake orders this month alone, saving a huge amount on shipping.",
    avatar: "/testimonials/james.png",
  },
  {
    id: 5,
    name: "Tasnim Rahman",
    company: "Orchid Beauty",
    role: "Managing Director",
    industry: "Cosmetics & Beauty",
    services: "SMS & WhatsApp Notifications",
    shortQuote: "Customer trust increased with automated shipping updates.",
    fullReview:
      "Our customers love the automated WhatsApp delivery updates. MolyEcom automatically notifies them when their package is dispatched, out for delivery, or delayed. Customer query tickets dropped by 40%.",
    avatar: "/testimonials/maria.png",
  },
];

const bebsadarTestimonials = [
  {
    id: 1,
    name: "Imtiaz Ahmed",
    company: "Daily Needs Super Shop",
    role: "Owner",
    industry: "Super Shop & Grocery",
    services: "Multi-branch POS",
    shortQuote: "Stock sync across our 3 branches is now completely seamless.",
    fullReview:
      "Bebsadar's multi-branch inventory tracking has solved our biggest headache. We can check real-time stock levels of any branch from our phone and transfer items instantly. Shrinkage has dropped to almost zero.",
    avatar: "/testimonials/shojeeb.png",
  },
  {
    id: 2,
    name: "Kazi Tasnim",
    company: "Elegance Fashion",
    role: "Founder",
    industry: "Boutique Retail",
    services: "Barcode Billing",
    shortQuote: "Billing time cut by 60% with barcode scanning.",
    fullReview:
      "The POS interface is incredibly fast. Barcode scanning and invoice printing take less than 3 seconds per customer. Our checkout queues are gone, and sales data syncs directly to our cloud ledger.",
    avatar: "/testimonials/david.png",
  },
  {
    id: 3,
    name: "Naimur Rahman",
    company: "Gadget Hub BD",
    role: "Operations Manager",
    industry: "Electronics Retail",
    services: "Supplier & Vendor Ledger",
    shortQuote: "Managing vendor payments and dues is no longer a headache.",
    fullReview:
      "Bebsadar tracks all our supplier invoices and purchase histories. The automated alerts for upcoming vendor payments and unpaid bills have helped us maintain excellent supplier relationships without manual spreadsheets.",
    avatar: "/testimonials/sarah.png",
  },
  {
    id: 4,
    name: "Farhana Chowdhury",
    company: "Organic Foods",
    role: "Managing Director",
    industry: "FMCG / Retail",
    services: "Automated Reordering",
    shortQuote: "Never run out of stock on fast-moving items anymore.",
    fullReview:
      "With the low-stock alert system and automatic purchase order generation, we are always stocked on high-demand items. Bebsadar's predictive reorder suggestion has saved us hours of inventory checks.",
    avatar: "/testimonials/james.png",
  },
  {
    id: 5,
    name: "Sajid Al Hasan",
    company: "Apex Tech",
    role: "IT Lead",
    industry: "Computer Accessories",
    services: "Offline Billing",
    shortQuote: "Offline POS mode keeps our sales running during internet drops.",
    fullReview:
      "Dhaka's frequent internet disruptions used to pause our billing. Bebsadar's offline local caching allows our cashiers to continue selling. Once connection is restored, everything syncs to the cloud automatically.",
    avatar: "/testimonials/maria.png",
  },
];

const logisticTestimonials = [
  {
    id: 1,
    name: "Amanur Rahman",
    company: "FreightLink BD",
    role: "Director of Operations",
    industry: "Logistics & Freight",
    services: "Job File & Doc Compliance",
    shortQuote: "Document preparation time cut by 70% with compliance alerts.",
    fullReview:
      "With Freito, our documentation team is always alert about required customs certificates. We no longer run into last-minute clearance delays due to missing documents.",
    avatar: "/testimonials/shojeeb.png",
  },
  {
    id: 2,
    name: "Nasreen Jahan",
    company: "GlobeCargo Logistics",
    role: "General Manager",
    industry: "Freight Forwarding",
    services: "Quotation & Margin Control",
    shortQuote: "Live profit tracking ensures we never underbill again.",
    fullReview:
      "Tying supplier cost sheets and local charges directly to the shipment Job File gives us true margins before booking confirmation. Underbilling is a thing of the past.",
    avatar: "/testimonials/sarah.png",
  },
  {
    id: 3,
    name: "Zubair Al Mahmud",
    company: "PortLink Shipping",
    role: "Founder",
    industry: "Maritime Shipping",
    services: "Client Portal Milestones",
    shortQuote: "Client calls for status updates dropped to almost zero.",
    fullReview:
      "Freito's secure Client Portal lets our customers track shipment milestones self-serve. They see updates instantly, without exposing our carrier costs or margins.",
    avatar: "/testimonials/david.png",
  },
  {
    id: 4,
    name: "Sayed Hossain",
    company: "InterContinental Cargo",
    role: "Finance Controller",
    industry: "Supply Chain Finance",
    services: "Financial Closeout & Invoicing",
    shortQuote: "Shipment-level financial audits are now completed in minutes.",
    fullReview:
      "Billing, receipt vouchers, and vendor invoices are linked directly to shipment folders. Closing out jobs is secure, automated, and audit-safe.",
    avatar: "/testimonials/james.png",
  },
  {
    id: 5,
    name: "Maliha Chowdhury",
    company: "SkyWing Express",
    role: "Head of Customer Success",
    industry: "Air Freight Operations",
    services: "Vessel & Flight Tracking",
    shortQuote: "Consolidation and container tracking is completely error-free.",
    fullReview:
      "Tracking HAWB, Manifest, and container seals across multiple transshipments is fully automated. The system keeps all parties aligned in real-time.",
    avatar: "/testimonials/maria.png",
  },
];

const QuoteIconOpen = () => (
  <svg width="28" height="22" viewBox="0 0 36 28" fill="currentColor" aria-hidden="true">
    <path d="M0 28V17.2C0 12.48 1.04 8.64 3.12 5.68C5.28 2.72 8.56 0.96 13 0.4L14.2 3.44C11.64 3.92 9.72 4.96 8.44 6.56C7.16 8.08 6.52 9.96 6.52 12.2H13.48V28H0ZM21.52 28V17.2C21.52 12.48 22.56 8.64 24.64 5.68C26.8 2.72 30.08 0.96 34.52 0.4L35.72 3.44C33.16 3.92 31.24 4.96 29.96 6.56C28.68 8.08 28.04 9.96 28.04 12.2H35V28H21.52Z" />
  </svg>
);

const QuoteIconClose = () => (
  <svg width="28" height="22" viewBox="0 0 36 28" fill="currentColor" aria-hidden="true">
    <path d="M36 0V10.8C36 15.52 34.96 19.36 32.88 22.32C30.72 25.28 27.44 27.04 23 27.6L21.8 24.56C24.36 24.08 26.28 23.04 27.56 21.44C28.84 19.92 29.48 18.04 29.48 15.8H22.52V0H36ZM14.48 0V10.8C14.48 15.52 13.44 19.36 11.36 22.32C9.2 25.28 5.92 27.04 1.48 27.6L0.28 24.56C2.84 24.08 4.76 23.04 6.04 21.44C7.32 19.92 7.96 18.04 7.96 15.8H1V0H14.48Z" />
  </svg>
);

function TestimonialCard({ t, animClass, animKey }: {
  t: typeof molyecomTestimonials[0];
  animClass: string;
  animKey: number;
}) {
  return (
    <div
      key={animKey}
      className={`relative flex flex-col bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/60 h-full ${animClass}`}
    >
      <div className="text-slate-300 mb-4">
        <QuoteIconOpen />
      </div>

      <p className="font-sans text-sm md:text-base font-bold text-slate-900 leading-snug mb-3">
        "{t.shortQuote}"
      </p>

      <p className="font-sans text-xs md:text-sm leading-relaxed text-slate-600 flex-1">
        &ldquo;{t.fullReview}&rdquo;
      </p>

      <div className="flex justify-end mt-4 text-slate-300">
        <QuoteIconClose />
      </div>

      <div className="border-t border-slate-100 my-4" />

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={t.avatar}
            alt={t.name}
            className="w-10 h-10 rounded-full object-cover object-top flex-shrink-0 border-2 border-slate-50 shadow-sm"
          />
          <div>
            <p className="font-sans text-xs font-bold text-slate-900 leading-tight">
              {t.name}
              <span className="text-slate-400 font-normal"> @ {t.company}</span>
            </p>
            <p className="font-sans text-[10px] text-slate-500 mt-0.5">{t.role}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-left">
          <div>
            <p className="font-sans text-[8px] font-bold uppercase tracking-[0.12em] text-slate-400">Industry</p>
            <p className="font-sans text-[11px] font-bold text-slate-700 leading-snug mt-0.5">{t.industry}</p>
          </div>
          <div>
            <p className="font-sans text-[8px] font-bold uppercase tracking-[0.12em] text-slate-400">Services</p>
            <p className="font-sans text-[11px] font-bold text-slate-700 leading-snug mt-0.5">{t.services}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductTestimonials({ slug = "molyecom" }: { slug?: string }) {
  const isBebsadar = slug === "bebsadar";
  const isLogistic = slug === "logistic-management";
  const testimonials = isBebsadar 
    ? bebsadarTestimonials 
    : isLogistic 
      ? logisticTestimonials 
      : molyecomTestimonials;
  const TOTAL = testimonials.length;

  const [leftIdx, setLeftIdx] = useState(0);
  const [changedSide, setChangedSide] = useState<"left" | "right">("right");
  const dirRef = useRef<"right" | "left">("right");
  const [leftKey, setLeftKey] = useState(0);
  const [rightKey, setRightKey] = useState(0);

  React.useEffect(() => {
    setLeftIdx(0);
  }, [slug]);

  const goNext = () => {
    dirRef.current = "right";
    setLeftIdx((i) => (i + 1) % TOTAL);
    setChangedSide("right");
    setRightKey((k) => k + 1);
  };

  const goPrev = () => {
    dirRef.current = "left";
    setLeftIdx((i) => (i - 1 + TOTAL) % TOTAL);
    setChangedSide("left");
    setLeftKey((k) => k + 1);
  };

  const rightIdx = (leftIdx + 1) % TOTAL;
  const leftCard = testimonials[leftIdx];
  const rightCard = testimonials[rightIdx];

  const slideRight = "testimonial-slide-right";
  const slideLeft = "testimonial-slide-left";

  return (
    <section 
      className="relative py-20 md:py-28 px-5 md:px-20 bg-slate-50 border-t border-b border-slate-100 overflow-hidden text-slate-800" 
      aria-labelledby="testimonial-heading"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.12] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex items-start justify-between mb-12 gap-6">
          <div className="flex flex-col items-start text-left">
            <span className="font-sans text-xs md:text-sm font-bold uppercase tracking-[0.15em] text-blue-600 mb-2 block">
              <ScrambleText text="Client Review" />
            </span>
            <h2 id="testimonial-heading" className="font-sans text-2xl md:text-4xl font-black tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#aebcff] via-[#2546c7] to-[#09164f]">
                What Our Partners Say
              </span>
            </h2>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-200 shadow-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goNext}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-200 shadow-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonial Cards Grid (2 columns on large screens, single column on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TestimonialCard
            t={leftCard}
            animClass={changedSide === "left" ? slideLeft : ""}
            animKey={leftKey}
          />
          <TestimonialCard
            t={rightCard}
            animClass={changedSide === "right" ? slideRight : ""}
            animKey={rightKey}
          />
        </div>

      </div>
    </section>
  );
}
