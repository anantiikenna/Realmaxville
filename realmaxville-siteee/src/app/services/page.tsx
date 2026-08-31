"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  DraftingCompass,
  ShieldCheck,
  Layers3,
  Palette,
  Hammer,
  ClipboardList,
  ArrowRight,
  CheckCircle2,
  Compass,
  Layers,
  FileCheck,
  Building,
  Key,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    icon: DraftingCompass,
    title: "Architectural Design",
    description: "From initial concept sketches to construction-ready documentation, we craft architectural visions with precision and creativity.",
    color: "text-[#E6C687]",
    bg: "bg-[#E6C687]",
  },
  {
    icon: ShieldCheck,
    title: "Structural Engineering",
    description: "Expert analysis and design of structural systems ensuring safety, durability, and optimal buildability for every project.",
    color: "text-[#00F5A0]",
    bg: "bg-[#00F5A0]",
  },
  {
    icon: Layers3,
    title: "Smart Construction",
    description: "On-site execution with meticulous attention to detail, quality control, and finish standards that exceed expectations.",
    color: "text-[#00E5FF]",
    bg: "bg-[#00E5FF]",
  },
  {
    icon: Palette,
    title: "Interior Design",
    description: "Curated luxury interiors featuring premium materials, custom furniture, and sophisticated spatial compositions.",
    color: "text-[#E6C687]",
    bg: "bg-[#E6C687]",
  },
  {
    icon: Hammer,
    title: "Renovation",
    description: "Modernize and transform existing structures with innovative design solutions while preserving their core character.",
    color: "text-[#00F5A0]",
    bg: "bg-[#00F5A0]",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description: "End-to-end coordination from planning through delivery, ensuring timelines, budgets, and quality targets are met.",
    color: "text-[#00E5FF]",
    bg: "bg-[#00E5FF]",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery & Site Analysis",
    icon: Compass,
    duration: "Weeks 1 - 3",
    description: "Comprehensive site soil testing, sunlight orientation analysis, local zoning compliance, and conceptual client vision workshops.",
    deliverables: ["Geotechnical Soil Assessment", "3D Topographic Point Cloud", "Zoning Approval Roadmap", "Initial Aesthetic Moodboards"],
  },
  {
    number: "02",
    title: "3D Parametric BIM Design",
    icon: Layers,
    duration: "Weeks 4 - 8",
    description: "Generative parametric design modeling, micro-climate wind simulations, 8K photorealistic renders, and full VR walkthrough models.",
    deliverables: ["Full Architectural BIM Model", "VR Immersive Studio Walkthrough", "Structural Load Engineering", "Material Spec Book"],
  },
  {
    number: "03",
    title: "Regulatory Permits & Procurement",
    icon: FileCheck,
    duration: "Weeks 9 - 12",
    description: "Securing municipal building permits, structural engineering stamp certifications, and direct-sourcing rare stones & heavy steel.",
    deliverables: ["Approved Building Permits", "Fixed Price EPC Contract", "Global Material Supply Audit", "Site Logistics Plan"],
  },
  {
    number: "04",
    title: "Precision Construction & EPC",
    icon: Building,
    duration: "Months 4 - 18",
    description: "Ground excavation, deep pile foundation, steel superstructure erection, kinetic glass facade fitting, and interior craftsmanship.",
    deliverables: ["Daily Drone Progress Feeds", "ISO Structural Inspections", "MEP & Smart System Wiring", "Interior Finishes & Joinery"],
  },
  {
    number: "05",
    title: "White-Glove Turnkey Delivery",
    icon: Key,
    duration: "Handover",
    description: "Final air quality testing, smart automation system calibration, white-glove cleaning, and hand-delivering private cryptographic estate keys.",
    deliverables: ["10-Year Structural Guarantee", "As-Built Digital Twin BIM", "Concierge Maintenance Pass", "Cryptographic Estate Keys"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <div className="pt-32 pb-24 bg-[#07080A] min-h-screen">

        {/* ── Page Header ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6C687]/10 border border-[#E6C687]/30 text-[#E6C687] text-xs font-mono tracking-widest uppercase">
              <Layers className="w-3.5 h-3.5" />
              <span>Services</span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight">
              WHAT WE <span className="text-gold-gradient">DO</span>
            </h1>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              From initial concept to construction-ready documentation and zero-tolerance structural execution.
            </p>
          </div>
        </div>

        {/* ── Services Grid ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((srv, i) => {
              const Icon = srv.icon;
              return (
                <div key={i} className="glass-card p-8 rounded-3xl border border-white/10 group hover:border-[#E6C687]/30 transition-all flex flex-col justify-between min-h-[280px]">
                  <div className="space-y-5">
                    <div className={`p-3 rounded-2xl ${srv.bg} text-black w-fit shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-white">{srv.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{srv.description}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[#E6C687] text-xs font-mono uppercase tracking-wider mt-6 hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Process Section ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#E6C687] text-xs font-mono tracking-widest uppercase">
              <span>How We Work</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              THE 5-STAGE <span className="text-gold-gradient">LEGACY WORKFLOW</span>
            </h2>

            <p className="text-gray-400 text-sm sm:text-base">
              From initial concept sketch to white-glove estate handover.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="glass-card p-5 rounded-2xl border border-white/10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#E6C687] text-black flex items-center justify-center mx-auto shadow-gold-glow">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono text-[#E6C687] uppercase tracking-wider block">Stage {step.number}</span>
                  <h4 className="font-display font-bold text-sm text-white">{step.title}</h4>
                  <span className="text-[10px] font-mono text-gray-500 block">{step.duration}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="glass-gold p-10 sm:p-14 rounded-3xl border border-[#E6C687]/30 text-center space-y-6">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white">
              READY TO BUILD YOUR <span className="text-gold-gradient">LEGACY</span>?
            </h2>
            <p className="text-gray-300 text-sm max-w-lg mx-auto">
              Let our architectural team transform your vision into a landmark reality.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#E6C687] to-[#D4AF37] text-black font-semibold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-gold-glow"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}
