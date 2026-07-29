"use client";

import React, { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      quote: "Realmaxville's parametric design for our Banana Island waterfront mansion completely redefined luxury living for my family. The cantilevered glass infinity pool feels like floating over the lagoon.",
      author: "Chief Olusegun A.",
      role: "Chairman, Zenith Capital Holdings",
      location: "Lagos, Nigeria",
      project: "The Obsidian Zenith Sky Villa",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      rating: 5
    },
    {
      quote: "Their structural engineering team completed our 28-storey Mayfair estate project 2 months ahead of schedule without a single tolerance error. The thermal acoustic glass curtain walling is superb.",
      author: "Sir Richard P. Sterling",
      role: "Managing Director, Sovereign Real Estate Trust",
      location: "London, UK",
      project: "Celestial Heights Smart Estate",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      rating: 5
    },
    {
      quote: "The automated kinetic solar shading and biometric security infrastructure Realmaxville integrated into our Palm Jumeirah estate is nothing short of futuristic. Pure architectural mastery.",
      author: "Tariq Al-Mansoor",
      role: "Founder, Gulf Innovation Fund",
      location: "Dubai, UAE",
      project: "Palais de Crystal Waterfront",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      rating: 5
    }
  ];

  const current = reviews[activeIndex];

  return (
    <section className="py-24 bg-[#07080A] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#E6C687] text-xs font-mono tracking-widest uppercase">
            <Quote className="w-3.5 h-3.5" />
            <span>Client Endorsements</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            TRUSTED BY <span className="text-gold-gradient">VISIONARIES</span> WORLDWIDE
          </h2>

          <p className="text-gray-400 text-sm sm:text-base">
            What estate owners, commercial developers, and institutional investors say about building with Realmaxville.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-[#E6C687]/30 max-w-4xl mx-auto space-y-8 relative">
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#E6C687] text-[#E6C687]" />
              ))}
            </div>

            <span className="px-3 py-1 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/30 text-[#00F5A0] text-xs font-mono flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" /> Verified Owner
            </span>
          </div>

          <p className="text-white font-display text-lg sm:text-2xl italic leading-relaxed">
            "{current.quote}"
          </p>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src={current.avatar}
                alt={current.author}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#E6C687] shadow-gold-glow"
              />
              <div>
                <h4 className="font-display font-bold text-lg text-white">{current.author}</h4>
                <p className="text-xs font-mono text-[#E6C687]">{current.role}</p>
                <p className="text-[11px] font-mono text-gray-400 mt-0.5">{current.location} • {current.project}</p>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-[#E6C687] transition-all cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveIndex((prev) => (prev + 1) % reviews.length)}
                className="p-3 rounded-full bg-[#E6C687] text-black hover:bg-[#D4AF37] transition-all cursor-pointer shadow-gold-glow"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
