"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Compass,
  Building2,
  Cpu,
  Sparkles,
  ShieldCheck,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    id: "architecture",
    icon: Compass,
    tag: "01 — Design",
    title: "Parametric Architectural Design",
    subtitle: "From geometry to icon",
    description:
      "We sculpt buildings through computational design, generative BIM modeling, and micro-climate analysis — producing structures that are visually iconic, thermally efficient, and structurally sound.",
    features: [
      "Generative Parametric Facade Design",
      "VR 8K Walkthrough Renders",
      "Sunlight & Thermal Modeling",
      "Structural Load Engineering",
    ],
    accentColor: "#C87941",
    image: "/images/projects/mrs-margaret.jpg",
  },
  {
    id: "construction",
    icon: Building2,
    tag: "02 — Build",
    title: "Turnkey EPC Construction",
    subtitle: "Zero-tolerance structural delivery",
    description:
      "End-to-end project engineering from soil stabilization to rooftop systems. Our master engineers execute high-rise and ultra-luxury residential builds with millimeter precision.",
    features: [
      "Post-Tensioned Concrete Engineering",
      "Seismic & Coastal Corrosion Tech",
      "Full Turnkey Procurement & Management",
      "ISO 9001 Structural Safety Certification",
    ],
    accentColor: "#00C896",
    image: "/images/projects/kaduna-conference-center.jpg",
  },
  {
    id: "smart",
    icon: Cpu,
    tag: "03 — Automate",
    title: "Smart Estate & AI Automation",
    subtitle: "Living intelligence built-in",
    description:
      "Biometric access systems, kinetic solar shading, neural HVAC, and a centralized smart nervous system that makes your villa respond to your lifestyle autonomously.",
    features: [
      "Crestron / Savant Smart Control",
      "Biometric Perimeter Security",
      "Kinetic Glass & Solar Trackers",
      "AI Air Purification & Climate Balance",
    ],
    accentColor: "#C87941",
    image: "/images/projects/blocks-of-flat.jpg",
  },
  {
    id: "interiors",
    icon: Sparkles,
    tag: "04 — Refine",
    title: "Bespoke Interior & Luxury Finishes",
    subtitle: "Artisanal craft at every surface",
    description:
      "Italian Carrara marble, backlit onyx panels, acoustically engineered timber, and custom designer lighting — every interior element is sourced and installed with obsessive attention to detail.",
    features: [
      "Direct-Sourced Italian & Onyx Stone",
      "Architectural Lighting Scene Automation",
      "Custom Artisanal Furniture & Joinery",
      "Private Cinema & Wine Vault Design",
    ],
    accentColor: "#00C896",
    image: "/images/projects/mabushi-villa.jpg",
  },
];

export default function ServicesGrid() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="services" className="py-28 bg-[#0D1117] relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-copper-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-copper-500" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-copper-400">
                What We Do
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-ivory-100 leading-[1.05]">
              Architecture <br />
              <em className="text-copper-gradient font-semibold not-italic">
                that endures.
              </em>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-ivory-300/60 text-base leading-relaxed max-w-lg">
              Four integrated disciplines, one seamless workflow. From the first sketch to white-glove estate handover — Realmaxville is your complete design-build partner.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((srv) => {
            const Icon = srv.icon;
            const isHovered = hovered === srv.id;
            return (
              <div
                key={srv.id}
                onMouseEnter={() => setHovered(srv.id)}
                onMouseLeave={() => setHovered(null)}
                className={`group relative rounded-3xl p-8 transition-all duration-500 overflow-hidden cursor-default border ${
                  isHovered
                    ? "bg-[#141C25] border-copper-500/30 shadow-card-slate"
                    : "bg-[#0D1117] border-white/5 hover:border-white/10"
                }`}
              >
                {/* Background image on hover */}
                <div
                  className="absolute inset-0 rounded-3xl transition-opacity duration-500"
                  style={{
                    opacity: isHovered ? 0.08 : 0,
                    backgroundImage: `url(${srv.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#141C25] via-transparent to-transparent opacity-80" />

                <div className="relative z-10">
                  {/* Icon + Tag */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`p-3 rounded-2xl transition-all duration-300 ${
                        isHovered ? "bg-copper-500 text-[#080C10]" : "bg-white/5 text-copper-400"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[10px] text-ivory-400/40 uppercase tracking-widest pt-1">
                      {srv.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-ivory-100 mb-2 leading-tight">
                    {srv.title}
                  </h3>
                  <p className="font-mono text-xs text-emerald-500 uppercase tracking-wider mb-4">
                    {srv.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-ivory-300/55 text-sm leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {srv.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs text-ivory-300/70">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-copper-400 hover:text-copper-300 transition-colors group/link"
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Explore Capability
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
