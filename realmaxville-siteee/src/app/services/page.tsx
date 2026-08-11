"use client";

import React from "react";
import ServicesShowcase from "@/components/ServicesShowcase";
import CostEstimator from "@/components/CostEstimator";
import ProcessTimeline from "@/components/ProcessTimeline";
import { Layers } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 bg-[#07080A] min-h-screen">
      
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6C687]/10 border border-[#E6C687]/30 text-[#E6C687] text-xs font-mono tracking-widest uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>Master Engineering Scope</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight">
            ARCHITECTURAL & EPC <span className="text-gold-gradient">SERVICES</span>
          </h1>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            From initial 3D parametric computational geometry to zero-tolerance structural construction and AI home automation.
          </p>
        </div>
      </div>

      <ServicesShowcase />
      <CostEstimator />
      <ProcessTimeline />
    </div>
  );
}
