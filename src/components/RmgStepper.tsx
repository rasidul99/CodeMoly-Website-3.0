"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  FileText, 
  FileCheck, 
  DollarSign, 
  ShoppingBag, 
  Calendar, 
  BookOpen, 
  Truck, 
  Warehouse, 
  Scissors, 
  ShieldCheck, 
  PackageCheck, 
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
    title: "Inquiry",
    badge: "BUYER INQUIRY",
    icon: FileText,
    desc: "Buyer inquiry details, target price, tech pack, and garment style specifications captured in one central record.",
    subtext: "Replaces scattered email threads and initial buyer chats with a structured style onboarding workflow.",
    uiDetail: "Style: #ST-9920 | Buyer: H&M | Target Qty: 45,000 Pcs | Target Price: $4.20/pc",
    image: "/portfolio/freight_step1.jpg"
  },
  {
    id: 2,
    title: "Sample",
    badge: "SAMPLE TRACKING",
    icon: FileCheck,
    desc: "Proto, fit, salesman, and PP sample developments are tracked with lab dip, strike-off, and buyer approval comments.",
    subtext: "Eliminates sample submission delays and prevents production start without confirmed buyer sign-off.",
    uiDetail: "Proto Sample: Approved | Lab Dip: Option-B Accepted | PP Sample: Pending Approval",
    image: "/portfolio/freight_step2.jpg"
  },
  {
    id: 3,
    title: "Costing",
    badge: "PRE-COSTING & MARGIN",
    icon: DollarSign,
    desc: "Pre-costing, fabric consumption calculation, trim sheets, and CM margins calculated before sending quotes.",
    subtext: "Full version history prevents quotation underbilling and protects factory profit margins.",
    uiDetail: "Fabric Cost: $2.10 | Trims: $0.65 | CM: $0.90 | Est. Gross Margin: 16.8%",
    image: "/portfolio/freight_step3.jpg"
  },
  {
    id: 4,
    title: "Order",
    badge: "SALES CONTRACT",
    icon: ShoppingBag,
    desc: "Confirmed buyer POs automatically generate the master factory Order File — the single source of truth.",
    subtext: "No data re-entry. Merchandising, production, store, and finance sync directly from this master order.",
    uiDetail: "Master Order: #ORD-2026-RMG7 | Total Quantity: 50,000 Pcs | Total Value: $210,000 USD",
    image: "/portfolio/freight_step4.jpg"
  },
  {
    id: 5,
    title: "TNA",
    badge: "CRITICAL PATH",
    icon: Calendar,
    desc: "Auto-generated Time & Action calendar tracks critical path milestones with delay risk alerts.",
    subtext: "Keeps merchandisers, procurement officers, and line managers aligned on shipment deadlines.",
    uiDetail: "Fabric In-House: Aug 05 (On Track) | Cut Plan: Aug 10 | Target Ex-Factory: Sep 15",
    image: "/portfolio/freight_step5.jpg"
  },
  {
    id: 6,
    title: "Booking",
    badge: "YARN & FABRIC BOOKING",
    icon: BookOpen,
    desc: "Yarn, fabric, and accessories booking requisitions generated directly from approved order BOM specs.",
    subtext: "Prevents over-booking and ensures supplier POs match exact order consumption limits.",
    uiDetail: "Yarn Booking: 12.5 Tons Cotton 30s | Fabric Booking: Single Jersey 160 GSM | Trims PO: Issued",
    image: "/portfolio/freight_step6.jpg"
  },
  {
    id: 7,
    title: "Procurement",
    badge: "MRP & SHORTAGE ALERTS",
    icon: Truck,
    desc: "MRP runs analyze live stock coverage and alert management to material shortages before production starts.",
    subtext: "Identifies missing yarn, zippers, or labels before lines are set up and blocked.",
    uiDetail: "Yarn Arrival: 100% In-House | Zipper Arrival: Shortage Detected (4,000 Pcs Pending)",
    image: "/portfolio/freight_step7.jpg"
  },
  {
    id: 8,
    title: "Store",
    badge: "INVENTORY MANAGEMENT",
    icon: Warehouse,
    desc: "Store receiving (MRR), fabric inspection (4-Point System), shade grading, and requisitions tracked seamlessly.",
    subtext: "Barcode-enabled store tracking prevents unauthorized material releases to the cutting floor.",
    uiDetail: "MRR #9921 Verified | Fabric Inspection: Pass (Pass Rate 98.4%) | Bin Allocation: A-04",
    image: "/portfolio/freight_step8.jpg"
  },
  {
    id: 9,
    title: "Production",
    badge: "SHOP FLOOR WIP",
    icon: Scissors,
    desc: "Line-wise hourly output tracking from cutting, sewing, washing, embroidery to finishing and packing.",
    subtext: "Real-time WIP displays show exact line efficiency, DHU rates, and target vs actual production.",
    uiDetail: "Line-04 Sewing: 420 Pcs/Hr | Line Efficiency: 74.2% | Packed Qty: 22,400 Pcs",
    image: "/portfolio/freight_step9.jpg"
  },
  {
    id: 10,
    title: "QC",
    badge: "QUALITY ASSURANCE",
    icon: ShieldCheck,
    desc: "Inline inspection, end-line defects logging, lab testing reports, and final AQL 2.5 buyer inspections.",
    subtext: "Defect Pareto charts identify root causes instantly to reduce factory DHU percentage.",
    uiDetail: "AQL 2.5 Final Inspection: PASSED | Defect Rate (DHU): 1.8% | Audit Cert: Verified",
    image: "/portfolio/freight_step4.jpg"
  },
  {
    id: 11,
    title: "Shipment",
    badge: "COMMERCIAL & LOGISTICS",
    icon: PackageCheck,
    desc: "Commercial invoice, packing list, EXP, UD, bond pass book entry, and container dispatch management.",
    subtext: "Automated customs compliance checks ensure zero EXP or UD mismatch errors during export.",
    uiDetail: "Container #TGHU-8821 Loaded | EXP #EXP-2026-901 Verified | Port Arrival: Aug 28",
    image: "/portfolio/freight_step6.jpg"
  },
  {
    id: 12,
    title: "Accounts",
    badge: "P&L & AUDIT CLOSEOUT",
    icon: Lock,
    desc: "BTB LC settlement, supplier bill matching, NBR VAT/Mushak reports, and order-level profit closeout.",
    subtext: "Order financial records are locked down with a tamper-evident audit log for full compliance.",
    uiDetail: "Actual Margin: $38,400 USD (Target: $35,200) | Financial Status: AUDITED & LOCKED",
    image: "/portfolio/freight_step9.jpg"
  }
];

export default function RmgStepper() {
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
          RMG LIFECYCLE
        </span>

        <h2 className="font-sans font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#aebcff] via-[#2546c7] to-[#09164f]">
            One Order, One Connected Workflow
          </span>
        </h2>

        {/* Minimalist Vertical Step List */}
        <div className="flex flex-col gap-2.5 w-full border-l-2 border-slate-200/80 pl-4 py-0.5 max-h-[60vh] overflow-y-auto pr-2">
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
