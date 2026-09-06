"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  FileText, 
  TrendingUp, 
  Package, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  DollarSign, 
  Lock
} from "lucide-react";

interface Step {
  id: number;
  title: string;
  badge: string;
  icon: any;
  desc: string;
  subtext: string;
  uiDetail: string;
  image: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Request",
    badge: "INQUIRY CAPTURE",
    icon: FileText,
    desc: "Customer inquiry details, cargo specifications, and origin/destination coordinates are captured in a single digital form.",
    subtext: "Replaces scattered phone calls and initial email threads with a structured onboarding workflow.",
    uiDetail: "Cargo Weight: 4.8 Tons | Origin: Dhaka, BD | Destination: Hamburg, DE",
    image: "/portfolio/freight_step1.jpg"
  },
  {
    id: 2,
    title: "Quotation",
    badge: "COST CALCULATION",
    icon: TrendingUp,
    desc: "Freight rates, local charges, and carrier/vendor costs are calculated side-by-side with full margin visibility.",
    subtext: "Prevents quotation underbilling and margin leakage before sending to client for digital approval.",
    uiDetail: "Total Freight Cost: $3,200 | Local Charges: ৳15,400 BDT | Est. Margin: 18.5%",
    image: "/portfolio/freight_step2.jpg"
  },
  {
    id: 3,
    title: "Booking",
    badge: "JOB CREATION",
    icon: Package,
    desc: "Confirmed quotes are automatically converted into a central shipment Job File, which acts as the single source of truth.",
    subtext: "No re-entering data. Operations, docs, and finance sync directly from this central booking record.",
    uiDetail: "Job File Created: #JOB-2026-928A | Assigned to Operations",
    image: "/portfolio/freight_step3.jpg"
  },
  {
    id: 4,
    title: "Documents",
    badge: "COMPLIANCE CHECK",
    icon: ShieldCheck,
    desc: "Our automated compliance engine auto-selects required shipping and customs documents based on route and shipment type.",
    subtext: "Flags missing documents (HBL, commercial invoice, packing list) before cargo arrives at customs.",
    uiDetail: "HBL: Approved | Packing List: Pending Upload | Invoice: Verified",
    image: "/portfolio/freight_step4.jpg"
  },
  {
    id: 5,
    title: "Operations",
    badge: "SHIPMENT MILESTONES",
    icon: Truck,
    desc: "Operational milestones, ETD/ETA, container seal tracking, and ocean/air routing logs are updated in real-time.",
    subtext: "Keeps all operators, dispatchers, and clearing agents aligned on shipping progress.",
    uiDetail: "ETD: Dhaka Port (Departed) | ETA: Hamburg Port (Aug 15) | Status: On Schedule",
    image: "/portfolio/freight_step5.jpg"
  },
  {
    id: 6,
    title: "Delivery",
    badge: "CARGO RELEASE",
    icon: CheckCircle2,
    desc: "Proof of Delivery (POD) files and cargo release documents are compiled and uploaded directly to close the operational loop.",
    subtext: "Instant operational verification triggers secondary finance invoicing processes automatically.",
    uiDetail: "POD Receipt Uploaded | Consignee Sign-off: Completed | Gate Pass Released",
    image: "/portfolio/freight_step6.jpg"
  },
  {
    id: 7,
    title: "Invoice",
    badge: "FINANCE DISPATCH",
    icon: DollarSign,
    desc: "Customer tax invoices and carrier vendor bills are generated and tied directly to the shipment Job File folder.",
    subtext: "Eliminates double entry by matching invoices to original quotation rates automatically.",
    uiDetail: "Invoice INV-0928-BD Sent | Vendor Payable: Carrier Ocean Freight Bill matched",
    image: "/portfolio/freight_step7.jpg"
  },
  {
    id: 8,
    title: "Profit",
    badge: "SHIPMENT MARGIN",
    icon: TrendingUp,
    desc: "Real shipment-level profitability reports compare estimated margins vs actual costs dynamically.",
    subtext: "Finance managers get true gross margins for every shipment without waiting for month-end closeout.",
    uiDetail: "Actual Profit: ৳42,800 BDT | Target Profit: ৳38,500 BDT (+11%)",
    image: "/portfolio/freight_step8.jpg"
  },
  {
    id: 9,
    title: "Audit",
    badge: "SECURE ARCHIVE",
    icon: Lock,
    desc: "Shipment files are locked down, preventing financial adjustments while logging a full history of edits.",
    subtext: "Every user click, document upload, and invoice change is recorded in a tamper-evident audit timeline.",
    uiDetail: "Financial Status: LOCKED | Activity Logs: 48 operations registered | Audit: Verified",
    image: "/portfolio/freight_step9.jpg"
  }
];

export default function FreightStepper() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const stepRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      const triggerLine = window.innerHeight * 0.35;

      let currentActive = 1;
      for (let i = 1; i <= steps.length; i++) {
        const el = stepRefs.current[i];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerLine) {
            currentActive = i;
          }
        }
      }
      setActiveStep(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToStep = (id: number) => {
    setActiveStep(id);
    const el = stepRefs.current[id];
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start text-slate-800 relative">
      
      {/* Left Column (Sticky Sidebar containing Headline & List) */}
      <div className="lg:col-span-4 lg:sticky lg:top-28 z-20 flex flex-col items-start text-left">
        <span className="font-sans text-xs md:text-sm font-bold uppercase tracking-wider text-blue-600 mb-2 block">
          FREIGHT LIFECYCLE
        </span>

        <h2 className="font-sans font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#aebcff] via-[#2546c7] to-[#09164f]">
            One Shipment, One Connected Workflow
          </span>
        </h2>

        {/* Minimalist Vertical Step List */}
        <div className="flex flex-col gap-2.5 w-full border-l-2 border-slate-200/80 pl-4 py-0.5">
          {steps.map((step) => {
            const isActive = step.id === activeStep;
            return (
              <button
                key={step.id}
                onClick={() => scrollToStep(step.id)}
                aria-label={`Scroll to ${step.title}`}
                className={`group relative flex items-center gap-3 text-left transition-all duration-300 py-1.5 px-3 rounded-lg cursor-pointer ${
                  isActive
                    ? "text-blue-600 font-extrabold text-base md:text-lg -ml-[18px] pl-[16px] border-l-2 border-blue-600 bg-blue-50/50"
                    : "text-slate-400 hover:text-slate-700 font-medium text-sm md:text-base hover:bg-slate-50/50"
                }`}
              >
                <span>{step.id}. {step.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Column (Scrollable Step Cards Stack) */}
      <div className="lg:col-span-8 flex flex-col gap-16 lg:gap-24 w-full">
        {steps.map((step) => {
          return (
            <div
              key={step.id}
              ref={(el) => { stepRefs.current[step.id] = el; }}
              className="scroll-mt-32 flex flex-col gap-4 text-left"
            >
              {/* Step Header: Title & Description */}
              <div>
                <h3 className="font-sans font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight">
                  {step.title}
                </h3>
                
                <p className="font-sans text-sm md:text-base text-slate-600 mt-2 leading-relaxed max-w-xl">
                  {step.desc}
                </p>
              </div>

              {/* Graphic Card Container: 20px top & left padding, 0px right & bottom padding */}
              <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.04)] bg-white pt-[20px] pl-[20px] pr-0 pb-0 group">
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-tl-xl border-t border-l border-slate-200/60">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover object-left-top group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
