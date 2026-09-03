"use client";

import React, { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      quote: "Those drawings are crazy bad. I mean you delivered. Love love the drawings!",
      author: "Isioma F. Uzu Sherrill",
      role: "Nurse",
      location: "Lagos, Nigeria",
      project: "Architectural Design & Blueprint Project",
      avatar: "/images/testimonials/client1.jpg",
      rating: 5
    },
    {
      quote: "Great work to RealmaxVille. After our lengthy discussion, I came to check progress and found they took into details all we discussed.",
      author: "Dr. Olajide Olalekan Olasiyan",
      role: "Developer",
      location: "Lagos, Nigeria",
      project: "Turnkey Residential Construction",
      avatar: "/images/testimonials/client2.jpg",
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
