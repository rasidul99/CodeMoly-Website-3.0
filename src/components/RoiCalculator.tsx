"use client";

import React, { useState } from "react";
import { Calculator, ShieldCheck, DollarSign, TrendingUp, Clock } from "lucide-react";

export default function RoiCalculator({ productName = "MolyEcom" }) {
  const isBebsadar = productName.toLowerCase().includes("bebsadar") || productName.toLowerCase().includes("bebshadar");
  const isFreito = productName.toLowerCase().includes("freito") || productName.toLowerCase().includes("logistic");
  
  const [orders, setOrders] = useState(isFreito ? 250 : 1000);
  const [aov, setAov] = useState(isFreito ? 25000 : 15000);
  const [returnRate, setReturnRate] = useState(25);

  // Dynamic slider values mapping based on product
  const activeRate = isBebsadar ? (returnRate > 10 ? 3 : returnRate) : returnRate;

  // 1. MolyEcom Logic
  const deliveryReturnCost = 120;
  const handlingLossPercent = 0.15;
  const costPerReturn = deliveryReturnCost + aov * handlingLossPercent;
  const currentReturns = Math.round(orders * (activeRate / 100));
  const returnsSaved = Math.round(currentReturns * 0.5);
  const moneySavedFromReturns = Math.round(returnsSaved * costPerReturn);
  const ordersRecovered = Math.round(orders * 0.15);
  const revenueGained = Math.round(ordersRecovered * aov);

  // 2. Bebsadar Logic (Retail POS & Inventory)
  const totalSalesRevenue = orders * aov;
  const shrinkageLossSaved = Math.round(totalSalesRevenue * (activeRate / 100) * 0.60);
  const checkoutHoursSaved = Math.round((orders * 1.5) / 60);
  const cashierLaborSaved = Math.round(checkoutHoursSaved * 150);

  // 3. Freito Logic (Logistics & Freight Forwarding)
  const adminHoursSaved = Math.round(orders * 4); // 4 hours saved per shipment
  const adminLaborSaved = Math.round(adminHoursSaved * 300); // 300 BDT/hour admin cost
  const leaksPrevented = Math.round(orders * 0.12);
  const leakageRecovered = Math.round(leaksPrevented * aov * 0.40); // 40% of margin recovered from leaks

  // Total Benefit Calculation
  const totalMonthlyBenefit = isFreito
    ? (adminLaborSaved + leakageRecovered)
    : isBebsadar 
      ? (shrinkageLossSaved + cashierLaborSaved) 
      : (moneySavedFromReturns + revenueGained);

  return (
    <div className="w-full bg-[#09102a] border border-blue-900/30 rounded-3xl p-6 md:p-8 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Left Inputs */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between gap-6 shadow-sm h-full">
          {/* Header inside Left Card */}
          <div className="flex items-center gap-3 border-b border-slate-100 pb-3 text-left">
            <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl border border-blue-100 shrink-0">
              <Calculator className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h3 className="font-sans font-extrabold text-sm text-slate-800">
                Interactive ROI Calculator
              </h3>
              <p className="font-sans text-[10px] text-slate-500">
                Calculate savings & revenue growth with {productName}
              </p>
            </div>
          </div>
          
          {/* Orders Slider */}
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <label className="font-sans text-xs font-bold text-slate-700 uppercase tracking-wider">
                {isFreito ? "Monthly Shipments" : isBebsadar ? "Monthly Transactions" : "Monthly Orders"}
              </label>
              <span className="font-sans text-sm font-extrabold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100">
                {orders.toLocaleString()} {isFreito ? "shipments" : isBebsadar ? "sales" : "orders"}
              </span>
            </div>
            <input
              type="range"
              min={isFreito ? "10" : "100"}
              max={isFreito ? "1000" : "10000"}
              step={isFreito ? "10" : "100"}
              value={orders}
              onChange={(e) => setOrders(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-semibold">
              <span>{isFreito ? "10" : "100"}</span>
              <span>{isFreito ? "500" : "5,000"}</span>
              <span>{isFreito ? "1,000" : "10,000"}</span>
            </div>
          </div>

          {/* Average Order Value (AOV) Slider */}
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <label className="font-sans text-xs font-bold text-slate-700 uppercase tracking-wider">
                {isFreito ? "Average Margin per Shipment" : isBebsadar ? "Average Basket Value" : "Average Order Value"}
              </label>
              <span className="font-sans text-sm font-extrabold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100">
                ৳{aov.toLocaleString()} BDT
              </span>
            </div>
            <input
              type="range"
              min={isFreito ? "5000" : "500"}
              max={isFreito ? "100000" : "5000"}
              step={isFreito ? "1000" : "100"}
              value={aov}
              onChange={(e) => setAov(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-semibold">
              <span>৳{isFreito ? "5,000" : "500"}</span>
              <span>৳{isFreito ? "50,000" : "2,500"}</span>
              <span>৳{isFreito ? "1,00,000" : "5,000"}</span>
            </div>
          </div>

          {/* Current Return / Shrinkage Rate Slider */}
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <label className="font-sans text-xs font-bold text-slate-700 uppercase tracking-wider">
                {isFreito ? "Doc Delay Error Rate" : isBebsadar ? "Inventory Shrinkage Rate" : "Current Return Rate"}
              </label>
              <span className="font-sans text-sm font-extrabold text-red-600 bg-red-50 px-2.5 py-1 rounded-lg border border-red-100">
                {activeRate}% {isFreito ? "errors" : isBebsadar ? "loss" : "returns"}
              </span>
            </div>
            <input
              type="range"
              min={isBebsadar ? "1" : "5"}
              max={isBebsadar ? "10" : "50"}
              step={isBebsadar ? "0.5" : "1"}
              value={activeRate}
              onChange={(e) => setReturnRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-semibold">
              <span>{isBebsadar ? "1%" : "5%"}</span>
              <span>{isBebsadar ? "5%" : "25%"}</span>
              <span>{isBebsadar ? "10%" : "50%"}</span>
            </div>
          </div>
        </div>

        {/* Right Outputs */}
        <div 
          className="border border-slate-200 rounded-2xl p-6 flex flex-col justify-between gap-6 shadow-sm h-full"
          style={{
            backgroundImage: "radial-gradient(circle at 100% 0%, rgba(37, 99, 235, 0.22) 0%, transparent 20%), radial-gradient(circle at 100% 0%, rgba(56, 189, 248, 0.15) 0%, transparent 35%)",
            backgroundColor: "#ffffff"
          }}
        >
          {/* Header inside Right Card */}
          <div className="flex items-center gap-3 border-b border-slate-100 pb-3 text-left">
            <div className="p-2.5 bg-green-50 text-green-700 rounded-xl border border-green-100 shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h3 className="font-sans font-extrabold text-sm text-slate-800">
                {isFreito ? "Estimated Operating Profit" : isBebsadar ? "Estimated Savings & Profits" : "Estimated Savings & Returns"}
              </h3>
              <p className="font-sans text-[10px] text-slate-500">
                Calculated monthly business benefits for {productName}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {/* Widget 1: Shrinkage Saved or Returns Saved */}
            <div className="flex items-center justify-between gap-4 p-3 rounded-xl bg-green-50/50 border border-green-100/50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 text-green-700 rounded-lg">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="font-sans text-xs font-semibold text-slate-500">
                    {isFreito ? "Administrative Hours Saved" : isBebsadar ? "Stock Shrinkage Prevented" : "Delivery Returns Prevented"}
                  </p>
                  <p className="font-sans text-sm font-bold text-slate-800">
                    {isFreito ? `${adminHoursSaved} hours/mo` : isBebsadar ? "60% waste prevented" : `${returnsSaved} orders/mo`}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="font-sans text-xs text-slate-400 block">
                  {isFreito ? "Labor Saved" : isBebsadar ? "Saved Value" : "Saved Cost"}
                </span>
                <span className="font-sans text-sm font-extrabold text-green-600">
                  ৳{isFreito ? adminLaborSaved.toLocaleString() : isBebsadar ? shrinkageLossSaved.toLocaleString() : moneySavedFromReturns.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Widget 2: Labor Saved or Extra Revenue */}
            <div className="flex items-center justify-between gap-4 p-3 rounded-xl bg-blue-50/50 border border-blue-100/50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                  {isFreito || isBebsadar ? (
                    <Clock className="w-5 h-5" />
                  ) : (
                    <DollarSign className="w-5 h-5" />
                  )}
                </div>
                <div className="text-left">
                  <p className="font-sans text-xs font-semibold text-slate-500">
                    {isFreito ? "Margin Leakage Prevented" : isBebsadar ? "Labor Billing Time Saved" : "Recovered Fake/Cancelled Sales"}
                  </p>
                  <p className="font-sans text-sm font-bold text-slate-800">
                    {isFreito ? `${leaksPrevented} leaks stopped` : isBebsadar ? `${checkoutHoursSaved} hours/mo` : `${ordersRecovered} orders/mo`}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="font-sans text-xs text-slate-400 block">
                  {isFreito || isBebsadar ? "Recovered Leakage" : "Extra Revenue"}
                </span>
                <span className="font-sans text-sm font-extrabold text-blue-600">
                  ৳{isFreito ? leakageRecovered.toLocaleString() : isBebsadar ? cashierLaborSaved.toLocaleString() : revenueGained.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Total Monthly Benefit Highlight */}
          <div 
            className="text-white rounded-xl p-5 flex flex-col items-center justify-center text-center mt-2 relative overflow-hidden border border-blue-900/20"
            style={{
              background: "radial-gradient(circle at bottom right, rgba(255, 255, 255, 0.28) 0%, transparent 55%), linear-gradient(135deg, #09164f 0%, #2546c7 100%)"
            }}
          >
            <div className="absolute top-0 right-0 -mr-6 -mt-6 w-16 h-16 bg-white/5 rounded-full blur-[20px]" />
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-blue-200/90 mb-1">
              Total Monthly Business Benefit
            </span>
            <span className="font-sans text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400">
              ৳{totalMonthlyBenefit.toLocaleString()} BDT
            </span>
            <span className="font-sans text-[10px] text-blue-100/90 mt-1.5 leading-relaxed">
              {isFreito
                ? "Based on automated document preparation time gains and prevented billing/leakage margins."
                : isBebsadar 
                  ? "Based on automated barcode billing speeds and 60% shrinkage control audits."
                  : "Based on reduced courier charges & automated SMS/WhatsApp recovery pipelines."}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
