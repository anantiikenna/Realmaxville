"use client";

import React, { useState } from "react";
import { 
  Calculator, 
  DollarSign, 
  Clock, 
  HardHat, 
  Check, 
  Sparkles, 
  ArrowRight,
  ShieldAlert
} from "lucide-react";
import Link from "next/link";

export default function CostEstimator() {
  const [projectType, setProjectType] = useState<"villa" | "tower" | "estate">("villa");
  const [sqFt, setSqFt] = useState(8500);
  const [finishTier, setFinishTier] = useState<"signature" | "presidential" | "parametric">("presidential");
  const [addons, setAddons] = useState<string[]>(["smart", "solar"]);

  // Calculation parameters
  const baseRates = {
    villa: { signature: 380, presidential: 520, parametric: 750 },
    tower: { signature: 450, presidential: 650, parametric: 900 },
    estate: { signature: 320, presidential: 480, parametric: 680 },
  };

  const addonPrices: Record<string, number> = {
    smart: 85000,
    solar: 120000,
    helipad: 350000,
    pool: 180000,
  };

  const baseCost = sqFt * baseRates[projectType][finishTier];
  const addonsTotal = addons.reduce((acc, curr) => acc + (addonPrices[curr] || 0), 0);
  const totalEstimatedCost = baseCost + addonsTotal;

  // Estimated Months calculation
  const baseMonths = Math.round(sqFt / 650) + (finishTier === "parametric" ? 4 : finishTier === "presidential" ? 2 : 0);
  const estimatedMonths = Math.max(8, Math.min(36, baseMonths));

  const toggleAddon = (addonKey: string) => {
    if (addons.includes(addonKey)) {
      setAddons(addons.filter(a => a !== addonKey));
    } else {
      setAddons([...addons, addonKey]);
    }
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section id="estimator" className="py-24 bg-[#07080A] relative overflow-hidden border-t border-b border-white/10">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E6C687]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6C687]/10 border border-[#E6C687]/30 text-[#E6C687] text-xs font-mono tracking-widest uppercase">
            <Calculator className="w-3.5 h-3.5" />
            <span>Real-Time Estimator Engine</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            INTERACTIVE PROJECT <span className="text-gold-gradient">CALCULATOR</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base">
            Configure your project parameters below to get instant preliminary structural investment ranges and completion timelines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Controls Box - Left Column */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-8">
            
            {/* Step 1: Project Type */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-[#E6C687] uppercase tracking-wider block">
                1. Select Property Type
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { key: "villa", label: "Luxury Villa" },
                  { key: "tower", label: "Sky Tower" },
                  { key: "estate", label: "Smart Estate" },
                ].map((type) => (
                  <button
                    key={type.key}
                    type="button"
                    onClick={() => setProjectType(type.key as any)}
                    className={`py-3 px-3 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider border transition-all cursor-pointer ${
                      projectType === type.key
                        ? "bg-[#E6C687] text-black border-[#E6C687] shadow-gold-glow"
                        : "bg-white/5 text-gray-300 border-white/10 hover:border-white/30"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Square Footage Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono text-[#E6C687] uppercase tracking-wider">
                  2. Gross Built Footprint (Sq. Ft)
                </label>
                <span className="font-display font-bold text-xl text-white">{sqFt.toLocaleString()} Sq. Ft</span>
              </div>
              <input
                type="range"
                min={3000}
                max={50000}
                step={500}
                value={sqFt}
                onChange={(e) => setSqFt(Number(e.target.value))}
                className="w-full cursor-pointer accent-[#E6C687]"
              />
              <div className="flex justify-between text-[11px] font-mono text-gray-500">
                <span>3,000 Sq. Ft (Boutique Villa)</span>
                <span>50,000 Sq. Ft (Mega Estate)</span>
              </div>
            </div>

            {/* Step 3: Finish Quality Tier */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-[#E6C687] uppercase tracking-wider block">
                3. Architectural Finish Quality
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { key: "signature", label: "Signature Luxury" },
                  { key: "presidential", label: "Presidential Grade" },
                  { key: "parametric", label: "Parametric Museum" },
                ].map((tier) => (
                  <button
                    key={tier.key}
                    type="button"
                    onClick={() => setFinishTier(tier.key as any)}
                    className={`py-3 px-3 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider border transition-all cursor-pointer ${
                      finishTier === tier.key
                        ? "bg-gradient-to-r from-[#E6C687] to-[#D4AF37] text-black border-transparent shadow-gold-glow"
                        : "bg-white/5 text-gray-300 border-white/10 hover:border-white/30"
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: High-Tech Innovations */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-[#E6C687] uppercase tracking-wider block">
                4. Integrated High-Tech Modules
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { key: "smart", label: "AI Neural Automation", cost: "+$85,000" },
                  { key: "solar", label: "Geothermal & Solar Grid", cost: "+$120,000" },
                  { key: "pool", label: "Glass Cantilever Infinity Pool", cost: "+$180,000" },
                  { key: "helipad", label: "Rooftop Helipad Vault", cost: "+$350,000" },
                ].map((addon) => {
                  const isChecked = addons.includes(addon.key);
                  return (
                    <button
                      key={addon.key}
                      type="button"
                      onClick={() => toggleAddon(addon.key)}
                      className={`p-3 rounded-xl text-left border flex items-center justify-between text-xs transition-all cursor-pointer ${
                        isChecked
                          ? "bg-[#E6C687]/20 border-[#E6C687] text-white"
                          : "bg-white/5 border-white/10 text-gray-400 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded flex items-center justify-center border ${isChecked ? 'bg-[#E6C687] border-[#E6C687] text-black' : 'border-white/30'}`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span>{addon.label}</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#00F5A0]">{addon.cost}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Results Summary Box - Right Column */}
          <div className="lg:col-span-5 glass-panel-gold p-6 sm:p-8 rounded-3xl space-y-8">
            <div className="flex items-center justify-between border-b border-[#E6C687]/20 pb-4">
              <span className="text-xs font-mono uppercase text-[#E6C687] tracking-widest flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Instant Estimate Summary
              </span>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#00F5A0]/20 text-[#00F5A0]">Live Calc</span>
            </div>

            {/* Total Estimated Cost display */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-gray-400 uppercase">Estimated EPC Investment Range</span>
              <div className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                {formatCurrency(totalEstimatedCost * 0.95)} - {formatCurrency(totalEstimatedCost * 1.1)}
              </div>
              <p className="text-[11px] font-mono text-[#00F5A0]">
                Includes architectural design, structural engineering & turnkey build.
              </p>
            </div>

            {/* Breakdown stats */}
            <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-[#E6C687]/20 text-xs font-mono">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/5 text-[#E6C687]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px]">Estimated Timeline</span>
                  <span className="text-white font-bold text-sm">{estimatedMonths} Months</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/5 text-[#00F5A0]">
                  <HardHat className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px]">Site Engineering Crew</span>
                  <span className="text-white font-bold text-sm">45 - 80 Specialists</span>
                </div>
              </div>
            </div>

            {/* Fine print */}
            <div className="flex items-start gap-2 text-[11px] text-gray-400 bg-black/40 p-3 rounded-xl border border-white/5">
              <ShieldAlert className="w-4 h-4 text-[#E6C687] shrink-0 mt-0.5" />
              <p>Estimates are subject to site topography analysis and soil load bearing tests during initial architectural consultation.</p>
            </div>

            {/* Request RFP CTA */}
            <Link
              href={`/contact?sqft=${sqFt}&type=${projectType}&tier=${finishTier}`}
              className="w-full py-4 rounded-full bg-gradient-to-r from-[#E6C687] via-[#D4AF37] to-[#C7F300] text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-gold-glow"
            >
              Lock In Formal Proposal
              <ArrowRight className="w-4 h-4" />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
