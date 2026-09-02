"use client";

import React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight, 
  Building2, 
  ShieldCheck, 
  Award, 
  Layers,
  ChevronDown
} from "lucide-react";
import ParametricCanvas3D from "./ParametricCanvas3D";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#050608] overflow-hidden pt-28 pb-16">
      
      {/* 3D Parametric Architectural Canvas Background */}
      <ParametricCanvas3D />

      {/* Ambient background glow circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[#E6C687]/10 via-[#00F5A0]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Top VIP Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.03] border border-[#E6C687]/30 text-[#E6C687] text-xs font-mono tracking-widest uppercase backdrop-blur-md shadow-gold-glow animate-pulse">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Parametric Architecture & Structural EPC</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white tracking-tight leading-[1.04] max-w-5xl mx-auto">
          BUILDING <span className="text-gold-gradient">LEGACIES</span> BEYOND TIME & SPACE
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto font-sans font-normal">
          Realmaxville synthesizes futuristic 3D parametric design, ultra-precise structural engineering, and high-end turnkey construction to deliver landmark luxury estates across Nigeria and international skylines.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#E6C687] via-[#D4AF37] to-[#C7F300] text-black font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-gold-glow cursor-pointer"
          >
            Commission Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="#estimator"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/15 text-white font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/10 hover:border-[#E6C687]/50 transition-all backdrop-blur-md cursor-pointer"
          >
            <Layers className="w-4 h-4 text-[#E6C687]" />
            Launch Cost Estimator
          </Link>
        </div>

        {/* Trust Badges Bar */}
        <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm">
            <span className="text-2xl sm:text-3xl font-display font-black text-[#E6C687] block">150+</span>
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider mt-1 block">Landmark Projects</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm">
            <span className="text-2xl sm:text-3xl font-display font-black text-[#00F5A0] block">28+</span>
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider mt-1 block">Intl Design Awards</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm">
            <span className="text-2xl sm:text-3xl font-display font-black text-white block">ISO 9001</span>
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider mt-1 block">Certified Structural Crew</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm">
            <span className="text-2xl sm:text-3xl font-display font-black text-[#E6C687] block">&lt; 0.5mm</span>
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider mt-1 block">Engineering Precision</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-8 flex justify-center">
          <a href="#services" className="text-gray-500 hover:text-[#E6C687] transition-colors p-2 animate-bounce">
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>

      </div>

    </section>
  );
}
