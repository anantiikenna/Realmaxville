"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Award, Clock, MapPin } from "lucide-react";

const slides = [
  {
    image: "/images/projects/mrs-margaret.jpg",
    label: "Mrs Margaret Residence",
    location: "Lagos, Nigeria",
    type: "Luxury Residential",
  },
  {
    image: "/images/projects/kaduna-conference-center.jpg",
    label: "Kaduna Conference Center",
    location: "Kaduna, Nigeria",
    type: "Landmark Civic",
  },
  {
    image: "/images/projects/danke-gott-jade.jpg",
    label: "Danke Gott Project Jade",
    location: "Lagos, Nigeria",
    type: "Curtain Wall",
  },
  {
    image: "/images/projects/mabushi-villa.jpg",
    label: "Mabushi Luxury Villa",
    location: "Abuja, Nigeria",
    type: "Private Estate",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered", icon: Award },
  { value: "15+", label: "Years of Excellence", icon: Clock },
  { value: "6",   label: "Cities Across Nigeria", icon: MapPin },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080C10] flex items-center">
      {/* Background Images */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
          style={{ opacity: idx === active ? 0.35 : 0 }}
        >
          <Image
            src={slide.image}
            alt={slide.label}
            fill
            priority={idx === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#080C10] via-[#080C10]/80 to-[#080C10]/30 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080C10] via-transparent to-transparent z-10" />
      {/* Mesh gradient */}
      <div
        className="absolute inset-0 z-10 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 10% 60%, rgba(200,121,65,0.15) 0%, transparent 45%), radial-gradient(ellipse at 90% 20%, rgba(0,200,150,0.08) 0%, transparent 40%)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 min-h-screen flex flex-col justify-center">
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-copper-500 animated-line" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-copper-400">
              Nigeria&apos;s Premier Design-Build Studio
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-6xl sm:text-7xl lg:text-[88px] xl:text-[104px] font-light leading-[0.92] text-ivory-100 mb-6 tracking-tight">
            We Design<br />
            <em className="text-copper-gradient not-italic font-semibold">Timeless</em>
            <br />
            Structures.
          </h1>

          {/* Sub-headline */}
          <p className="text-ivory-300/65 text-lg sm:text-xl max-w-xl leading-relaxed mb-10 font-light">
            From bespoke luxury residences to landmark public buildings — Realmaxville fuses architectural artistry with engineering precision across Nigeria.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-copper-500 text-[#080C10] font-semibold text-sm tracking-wide hover:bg-copper-400 transition-all duration-300 hover:-translate-y-0.5"
            >
              View Our Portfolio
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-ivory-100/20 text-ivory-100 font-medium text-sm tracking-wide hover:border-copper-500/50 hover:text-copper-400 transition-all duration-300 backdrop-blur-sm"
            >
              <Play className="h-4 w-4 fill-current" />
              Commission a Project
            </Link>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap items-center gap-8 pb-8 border-b border-white/10">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-copper-500/10 border border-copper-500/20">
                    <Icon className="h-4 w-4 text-copper-400" />
                  </div>
                  <div>
                    <p className="font-serif text-2xl font-semibold text-ivory-100 leading-none">{stat.value}</p>
                    <p className="font-mono text-[10px] text-ivory-400/60 uppercase tracking-wider mt-0.5">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Slide Info + Dots */}
        <div className="flex items-center justify-between mt-8 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <div>
              <p className="text-ivory-100 text-sm font-medium">{slides[active].label}</p>
              <p className="text-ivory-400/50 text-xs font-mono mt-0.5">
                {slides[active].location} · {slides[active].type}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  idx === active
                    ? "w-8 h-2 bg-copper-400"
                    : "w-2 h-2 bg-ivory-100/20 hover:bg-ivory-100/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right-side floating thumbnail panel */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden xl:flex flex-col gap-3">
        {slides.map((slide, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`relative w-24 h-16 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer border ${
              idx === active
                ? "border-copper-400 scale-110"
                : "border-white/10 opacity-40 hover:opacity-70"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.label}
              fill
              className="object-cover"
              sizes="96px"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
