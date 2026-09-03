"use client";

import React, { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";

const reviews = [
  {
    quote: "Those drawings are crazy bad. I mean you delivered. Love love the drawings!",
    author: "Isioma F. Uzu Sherrill",
    role: "Nurse",
    location: "Lagos, Nigeria",
    project: "Architectural Design & Blueprint Project",
    avatar: "/team/olamilekan.jpg",
    rating: 5,
    year: "2023",
  },
  {
    quote: "Great work to RealmaxVille. After our lengthy discussion, I came to check progress and found they took into details all we discussed. Exceptional attention to detail and professionalism.",
    author: "Dr. Olajide Olalekan Olasiyan",
    role: "Property Developer",
    location: "Lagos, Nigeria",
    project: "Turnkey Residential Construction",
    avatar: "/team/stephen.jpg",
    rating: 5,
    year: "2024",
  },
  {
    quote: "The Mabushi Villa exceeded every expectation. Realmaxville doesn't just build structures — they craft experiences. Our home is a masterpiece.",
    author: "Chief Emeka Anyanwu",
    role: "Real Estate Investor",
    location: "Abuja, Nigeria",
    project: "Mabushi Luxury Villa",
    avatar: "/team/alex.jpg",
    rating: 5,
    year: "2023",
  },
];

export default function TestimonialsBlock() {
  const [active, setActive] = useState(0);
  const current = reviews[active];

  const prev = () => setActive((a) => (a === 0 ? reviews.length - 1 : a - 1));
  const next = () => setActive((a) => (a + 1) % reviews.length);

  return (
    <section className="py-28 bg-[#0D1117] relative overflow-hidden">
      {/* Large decorative quote */}
      <div className="absolute top-8 left-8 opacity-5 pointer-events-none">
        <Quote className="w-40 h-40 text-copper-500" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-copper-500" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-copper-400">
              Client Stories
            </span>
            <div className="h-px w-10 bg-copper-500" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-ivory-100 leading-[1.05]">
            Trusted by <em className="text-copper-gradient font-semibold not-italic">visionaries.</em>
          </h2>
        </div>

        {/* Main testimonial card */}
        <div className="glass-slate rounded-3xl p-8 sm:p-14 border border-copper-500/15 relative">
          {/* Stars */}
          <div className="flex items-center gap-1 mb-8">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-copper-400 text-copper-400" />
            ))}
            <span className="ml-3 font-mono text-xs text-ivory-400/40 uppercase tracking-wider">
              Verified {current.year}
            </span>
          </div>

          {/* Quote */}
          <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-ivory-100 leading-[1.3] italic mb-10 max-w-4xl">
            "{current.quote}"
          </blockquote>

          {/* Author row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-white/5">
            <div className="flex items-center gap-4">
              <img
                src={current.avatar}
                alt={current.author}
                className="w-14 h-14 rounded-full object-cover object-top border-2 border-copper-500/30"
              />
              <div>
                <h4 className="font-serif text-lg font-semibold text-ivory-100">{current.author}</h4>
                <p className="font-mono text-xs text-copper-400 uppercase tracking-wider mt-0.5">{current.role}</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="font-mono text-[10px] text-ivory-400/40">{current.location} · {current.project}</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-ivory-400/40">
                {String(active + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}
              </span>
              <button
                onClick={prev}
                className="p-3 rounded-full border border-white/10 text-ivory-300/50 hover:text-ivory-100 hover:border-copper-500/30 transition-all cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="p-3 rounded-full bg-copper-500 text-[#080C10] hover:bg-copper-400 transition-all shadow-copper-glow cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                idx === active ? "w-8 h-2 bg-copper-400" : "w-2 h-2 bg-white/15 hover:bg-white/30"
              }`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
