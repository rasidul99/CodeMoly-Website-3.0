"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ChallengeItem {
  id: string;
  challenge: string;
  solution: string;
  module: string;
  impact: string;
}

const items: ChallengeItem[] = [
  {
    id: "01",
    challenge: "TNA slippage missed until shipments are delayed.",
    solution: "Auto-generated TNA calendar with critical path alerts.",
    module: "TNA Management",
    impact: "98% On-Time Delivery"
  },
  {
    id: "02",
    challenge: "Costing & margin uncertainty in Excel files.",
    solution: "Version-locked pre-costing & live margin tracking.",
    module: "Costing & Profit",
    impact: "Zero Margin Leakage"
  },
  {
    id: "03",
    challenge: "Material shortages found after floor setup.",
    solution: "Automated MRP calculates stock coverage in advance.",
    module: "Procurement & MRP",
    impact: "100% Setup Coverage"
  },
  {
    id: "04",
    challenge: "Compliance & audit docs scattered in folders.",
    solution: "Central audit calendar with automated expiry alerts.",
    module: "Compliance & EHS",
    impact: "100% Audit Readiness"
  },
  {
    id: "05",
    challenge: "LC, bond pass book, and UD tracked manually.",
    solution: "Export LC, BTB LC & UD linked to master orders.",
    module: "Commercial & Customs",
    impact: "Zero Customs Delay"
  },
  {
    id: "06",
    challenge: "No real-time floor visibility across sewing lines.",
    solution: "Live shop floor WIP displays & hourly output tracking.",
    module: "Production & Shop Floor",
    impact: "+15% Line Efficiency"
  }
];

export default function RmgChallengeTable() {
  return (
    <div className="w-full text-left">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white border border-slate-200/80 rounded-3xl p-7 md:p-8 flex flex-col justify-between hover:border-blue-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.04)] transition-all duration-300"
          >
            <div>
              {/* Card Header: Step Index & Impact Badge */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <span className="font-mono text-xs font-bold text-slate-400">
                  {item.id}
                </span>
                <span className="text-[11px] font-extrabold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100/80 flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3 text-emerald-600" />
                  {item.impact}
                </span>
              </div>

              {/* Challenge (Problem) */}
              <div className="mb-5">
                <span className="text-[10px] font-bold text-rose-500 uppercase tracking-wider block mb-1.5">
                  FACTORY BOTTLENECK
                </span>
                <p className="font-sans font-bold text-slate-800 text-sm md:text-base leading-snug">
                  {item.challenge}
                </p>
              </div>

              {/* Solution (CodeMoly Resolution) */}
              <div className="mb-6 pt-4 border-t border-slate-100">
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block mb-1.5">
                  CODEMOLY SOLUTION
                </span>
                <p className="font-sans font-semibold text-slate-900 text-sm md:text-base leading-relaxed">
                  {item.solution}
                </p>
              </div>
            </div>

            {/* Bottom Module Pill */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">Module:</span>
              <span className="text-xs font-bold text-slate-700 bg-slate-100/80 px-2.5 py-1 rounded-lg border border-slate-200/60">
                {item.module}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
