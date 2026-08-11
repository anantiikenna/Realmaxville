"use client";

import React, { useState } from "react";
import { 
  Building2, 
  Compass, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Layers
} from "lucide-react";
import Link from "next/link";

export default function ServicesShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: "architecture",
      title: "Parametric Architectural Design",
      icon: Compass,
      subtitle: "Futuristic 3D Spatial Geometry & Micro-climate Modeling",
      description: "We craft iconic, mathematically sculpted architectural structures using generative algorithms, computational BIM, and wind/light structural modeling for unmatched aesthetic impact.",
      features: [
        "Computational Parametric Facade Design",
        "Sunlight & Micro-climate Thermal Optimization",
        "Virtual Reality (VR) 8K Walkthrough Renders",
        "High-density Structural Engineering Calculations"
      ],
      image: "/images/projects/mrs-margaret.jpg"
    },
    {
      id: "construction",
      title: "Turnkey EPC Luxury Construction",
      icon: Building2,
      subtitle: "Precision Engineering & Zero-Tolerance Structural Execution",
      description: "From foundation soil stabilization to roofing physics, our master engineering teams execute high-rise and ultra-luxury residential projects with millimeter precision.",
      features: [
        "Heavy Steel & Post-Tensioned Concrete Engineering",
        "Seismic & Coastal Corrosion Barrier Tech",
        "Full Turnkey Project Management & Procurement",
        "ISO 9001 Structural Safety Certification"
      ],
      image: "/images/projects/kaduna-conference-center.jpg"
    },
    {
      id: "automation",
      title: "Smart Estate & AI Automation",
      icon: Cpu,
      subtitle: "Biometric Security & Neural HVAC Environmental Control",
      description: "Embed living intelligence into your villa. Automated kinetic solar shading, invisible audio systems, biometric entry, and AI energy management integrated into one intuitive interface.",
      features: [
        "Centralized Crestron / Savant Smart Nervous System",
        "Biometric Perimeter & Laser Thermal Security",
        "Kinetic Motorized Glass & Solar Trackers",
        "Automated Air Purification & Humidity Balance"
      ],
      image: "/images/projects/blocks-of-flat.jpg"
    },
    {
      id: "interiors",
      title: "Bespoke Interior & Luxury Finishes",
      icon: Sparkles,
      subtitle: "Italian Marble, Onyx Lighting & Custom Furniture Craftsmanship",
      description: "Curated interior spaces using rare imported stones, acoustically engineered wood paneling, and custom ambient lighting designed exclusively for high-net-worth clients.",
      features: [
        "Direct Sourced Italian Carrara & Backlit Onyx",
        "Architectural Lighting Design & Scene Automation",
        "Custom Artisanal Furniture & Joinery",
        "Private Cinema & Acoustic Underground Wine Vaults"
      ],
      image: "/images/projects/mabushi-villa.jpg"
    }
  ];

  const currentService = services[activeTab];
  const IconComponent = currentService.icon;

  return (
    <section className="py-24 bg-[#0A0C10] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6C687]/10 border border-[#E6C687]/30 text-[#E6C687] text-xs font-mono tracking-widest uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>Master Engineering Capabilities</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            OUR ARCHITECTURAL <span className="text-gold-gradient">CAPABILITIES</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base">
            End-to-end luxury architectural design, structural engineering, smart automation, and interior artistry.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            const isSelected = activeTab === idx;
            return (
              <button
                key={srv.id}
                onClick={() => setActiveTab(idx)}
                className={`p-4 rounded-2xl text-left transition-all cursor-pointer border flex flex-col justify-between h-32 ${
                  isSelected
                    ? "bg-gradient-to-br from-[#1A1E29] to-[#0E1015] border-[#E6C687] shadow-gold-glow"
                    : "bg-white/[0.02] border-white/10 hover:bg-white/[0.05]"
                }`}
              >
                <div className={`p-2 rounded-xl w-fit ${isSelected ? 'bg-[#E6C687] text-black' : 'bg-white/5 text-[#E6C687]'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-xs font-mono uppercase tracking-wider font-semibold ${isSelected ? 'text-white' : 'text-gray-400'}`}>
                  {srv.title.split(" ")[0]} {srv.title.split(" ")[1]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Service Detailed Showcase Card */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-[#E6C687]/30 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Text Description Left */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-[#E6C687] text-black shadow-gold-glow">
                <IconComponent className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#E6C687] uppercase tracking-wider block">Service Category</span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                  {currentService.title}
                </h3>
              </div>
            </div>

            <p className="text-sm font-mono text-[#00F5A0]">
              {currentService.subtitle}
            </p>

            <p className="text-gray-300 text-sm leading-relaxed">
              {currentService.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {currentService.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#E6C687] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/services"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#E6C687] to-[#D4AF37] text-black font-semibold text-xs uppercase tracking-wider flex items-center gap-2 hover:scale-105 transition-all shadow-gold-glow"
              >
                Detailed Specifications
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Image Right */}
          <div className="lg:col-span-5 relative h-80 lg:h-full min-h-[320px] rounded-2xl overflow-hidden border border-white/10 group">
            <img
              src={currentService.image}
              alt={currentService.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1015] via-transparent to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono text-gray-300 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[#00F5A0]">
                <ShieldCheck className="w-4 h-4" /> Guaranteed Quality Standard
              </span>
              <span>10-Yr Structural Warranty</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
