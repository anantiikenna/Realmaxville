"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MoveUpRight, Sparkles, Building2, ShieldCheck, Award } from "lucide-react";

const heroSlides = [
  {
    image: "/images/projects/mrs-margaret.jpg",
    title: "Mrs Margaret Contemporary Residence",
    tag: "Lagos Luxury Living",
  },
  {
    image: "/images/projects/kaduna-conference-center.jpg",
    title: "Kaduna Commercial Conference Center",
    tag: "Landmark Civic Architecture",
  },
  {
    image: "/images/projects/danke-gott-jade.jpg",
    title: "Danke Gott Project Jade",
    tag: "Curtain Wall Elegance",
  },
  {
    image: "/images/projects/mabushi-villa.jpg",
    title: "Mabushi Luxury Villa",
    tag: "Abuja Modernist Compound",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden pt-20 flex items-center bg-[#0a0c0f]">
      {/* Background Slideshow with Smooth Crossfade */}
      {heroSlides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? "opacity-40 scale-105 transition-transform duration-[10000ms]" : "opacity-0 scale-100"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={idx === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Gradients Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#10120f] via-[#10120f]/85 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#10120f] via-transparent to-[#10120f]/60 z-10" />

      <div className="relative z-20 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl space-y-8">
          
          <div className="inline-flex items-center gap-2 border border-[#E6C687]/30 bg-[#E6C687]/10 backdrop-blur-md px-4 py-2 text-xs font-mono font-semibold uppercase tracking-[0.18em] text-[#E6C687] rounded-full shadow-lg">
            <Sparkles className="h-4 w-4 text-[#f2c46d]" />
            <span>Architecture • Structural Engineering • Construction</span>
          </div>

          <h1 className="font-display text-5xl font-black leading-[0.95] text-white sm:text-7xl lg:text-8xl tracking-tight">
            Building
            <br />
            <span className="text-gold-gradient">Legacies</span>
          </h1>

          <p className="max-w-xl text-base sm:text-lg leading-relaxed text-gray-300">
            Luxury residences, smart estate enclaves, healthcare facilities, and landmark public infrastructure — masterfully designed and engineered across Nigeria.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/projects"
              className="inline-flex h-13 items-center gap-3 rounded-full bg-gradient-to-r from-[#f2c46d] to-[#D4AF37] px-8 text-xs font-extrabold uppercase tracking-[0.15em] text-[#10120f] transition-all hover:scale-105 hover:brightness-110 shadow-gold-glow"
            >
              Explore Portfolio
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/services"
              className="inline-flex h-13 items-center gap-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-8 text-xs font-bold uppercase tracking-[0.15em] text-white transition-all hover:border-[#E6C687] hover:text-[#E6C687] hover:bg-white/10"
            >
              Our Services
              <MoveUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-lg">
            <div>
              <p className="text-2xl sm:text-3xl font-display font-bold text-white">50+</p>
              <p className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mt-0.5">Projects Delivered</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-display font-bold text-[#E6C687]">100%</p>
              <p className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mt-0.5">Engineering Precision</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-display font-bold text-white">15+</p>
              <p className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mt-0.5">Years Experience</p>
            </div>
          </div>

          {/* Current Slide Caption Indicator */}
          <div className="flex items-center gap-3 text-xs font-mono text-gray-400 pt-2">
            <span className="w-2 h-2 rounded-full bg-[#00F5A0] animate-ping" />
            <span className="text-white font-semibold">Featured:</span>
            <span className="text-[#E6C687]">{heroSlides[currentSlide].title}</span>
            <span className="text-gray-500">({heroSlides[currentSlide].tag})</span>
          </div>

        </div>
      </div>
    </section>
  );
}
