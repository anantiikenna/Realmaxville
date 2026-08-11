"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles, 
  Search, 
  Building2, 
  SlidersHorizontal, 
  Award, 
  ChevronRight,
  Play
} from "lucide-react";

interface HeroProps {
  onOpenEstimator?: () => void;
}

export default function Hero({ onOpenEstimator }: HeroProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");

  const heroBackgrounds = [
    "/images/projects/mrs-margaret.jpg",
    "/images/projects/kaduna-conference-center.jpg",
    "/images/projects/danke-gott-jade.jpg"
  ];

  const [currentBg, setCurrentBg] = useState(0);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      
      {/* Background Slideshow Image Container */}
      <div className="absolute inset-0 z-0">
        {heroBackgrounds.map((bg, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentBg ? 'opacity-100 scale-105' : 'opacity-0 scale-100'} transition-transform duration-10000 ease-out`}
          >
            <img
              src={bg}
              alt="Realmaxville Architectural Masterpiece"
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}

        {/* Multi-layered Obsidian Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-[#07080A]/70 to-[#07080A]/40 z-10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30 z-10" />
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        
        <div className="max-w-4xl space-y-8">
          
          {/* Top Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel-gold text-[#E6C687] text-xs font-mono tracking-widest uppercase animate-pulse-glow">
            <Sparkles className="w-4 h-4 text-[#E6C687]" />
            <span>Futuristic Engineering & Parametric Design</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.08]">
            WE DO NOT JUST BUILD STRUCTURES. <br />
            <span className="text-gold-gradient text-subtle-glow">WE CRAFT LEGACIES.</span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-300 text-base sm:text-xl max-w-2xl font-light leading-relaxed">
            From architectural design to complete construction, we create timeless spaces that inspire, endure and elevate the way you live. Our engineering precision meets futuristic luxury.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/projects"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#E6C687] via-[#D4AF37] to-[#C7F300] text-black font-extrabold text-xs uppercase tracking-widest flex items-center gap-3 hover:scale-105 transition-all shadow-gold-glow group"
            >
              Explore Landmark Portfolio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            {onOpenEstimator && (
              <button
                onClick={onOpenEstimator}
                className="px-8 py-4 rounded-full glass-panel text-white hover:text-[#E6C687] hover:border-[#E6C687]/40 font-bold text-xs uppercase tracking-widest flex items-center gap-3 transition-all cursor-pointer"
              >
                <SlidersHorizontal className="w-4 h-4 text-[#E6C687]" />
                Interactive Cost Calculator
              </button>
            )}
          </div>

          {/* Quick Filter Search Bar Widget */}
          <div className="mt-8 glass-panel p-4 sm:p-5 rounded-3xl border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#E6C687] uppercase tracking-wider flex items-center gap-2">
                <Search className="w-4 h-4" /> Quick Project Lookup Engine
              </span>
              <span className="text-[11px] font-mono text-gray-400">Featured Projects</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Category selector */}
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#E6C687] cursor-pointer"
              >
                <option value="all" className="bg-[#0E1015]">All Project Types</option>
                <option value="residential" className="bg-[#0E1015]">Residential Luxury</option>
                <option value="commercial" className="bg-[#0E1015]">Commercial Towers</option>
                <option value="healthcare" className="bg-[#0E1015]">Healthcare & Public</option>
              </select>

              {/* Location selector */}
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#E6C687] cursor-pointer"
              >
                <option value="all" className="bg-[#0E1015]">All Locations</option>
                <option value="lagos" className="bg-[#0E1015]">Lagos, Nigeria</option>
                <option value="abuja" className="bg-[#0E1015]">Abuja, Nigeria</option>
                <option value="enugu" className="bg-[#0E1015]">Enugu, Nigeria</option>
                <option value="kaduna" className="bg-[#0E1015]">Kaduna, Nigeria</option>
              </select>

              {/* Quick Submit */}
              <Link
                href={`/projects?category=${activeCategory}&location=${locationFilter}`}
                className="w-full py-3 rounded-xl bg-[#E6C687] text-black font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#D4AF37] transition-all"
              >
                Find Custom Build
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

        {/* Right Floating Showcase Controls & Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-card p-5 rounded-2xl">
            <span className="font-display font-extrabold text-3xl text-[#E6C687]">140+</span>
            <p className="text-xs font-mono text-gray-400 mt-1 uppercase tracking-wider">Completed Legacies</p>
          </div>

          <div className="glass-card p-5 rounded-2xl">
            <span className="font-display font-extrabold text-3xl text-[#00F5A0]">99.8%</span>
            <p className="text-xs font-mono text-gray-400 mt-1 uppercase tracking-wider">Structural Precision Rate</p>
          </div>

          <div className="glass-card p-5 rounded-2xl">
            <span className="font-display font-extrabold text-3xl text-white">28</span>
            <p className="text-xs font-mono text-gray-400 mt-1 uppercase tracking-wider">Global Architecture Awards</p>
          </div>

          <div className="glass-card p-5 rounded-2xl flex items-center justify-between">
            <div>
              <span className="text-xs font-mono text-[#E6C687] uppercase">View Slide</span>
              <p className="text-xs text-gray-300 font-semibold mt-1">
                {currentBg === 0 ? "Mrs Margaret Villa" : currentBg === 1 ? "Kaduna Conference Center" : "Danke Gott Project Jade"}
              </p>
            </div>
            <button
              onClick={() => setCurrentBg((prev) => (prev + 1) % heroBackgrounds.length)}
              className="p-2.5 rounded-full bg-[#E6C687]/20 border border-[#E6C687]/40 text-[#E6C687] hover:bg-[#E6C687] hover:text-black transition-all cursor-pointer"
              aria-label="Next slide"
            >
              <Play className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
