"use client";

import React, { useState } from "react";
import LeadershipTeam from "@/components/LeadershipTeam";
import Testimonials from "@/components/Testimonials";
import {
  Users,
  Award,
  ShieldCheck,
  Globe,
  CheckCircle2,
  TrendingUp,
  Layers,
  Cpu,
  Target,
  Sparkles,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "8+", label: "Completed Projects", color: "text-[#E6C687]" },
  { value: "6+", label: "Years of Experience", color: "text-[#00F5A0]" },
  { value: "4", label: "Specialist Team Members", color: "text-white" },
  { value: "100%", label: "On-Time Delivery Record", color: "text-[#E6C687]" },
  { value: "2017", label: "Established (Operations from 2019)", color: "text-[#00F5A0]" },
  { value: "Lagos", label: "Headquarters, Nigeria", color: "text-white" },
];

const values = [
  {
    icon: Target,
    title: "Meticulous Planning",
    desc: "Best schedules and detailed project programs to keep every milestone on track and clients informed throughout the build process.",
    color: "text-[#E6C687]",
    bg: "bg-[#E6C687]",
  },
  {
    icon: Layers,
    title: "Brilliant Design",
    desc: "We bring innovative architectural vision to every project — from residential dwellings to commercial landmarks — with creativity and precision.",
    color: "text-[#00F5A0]",
    bg: "bg-[#00F5A0]",
  },
  {
    icon: Cpu,
    title: "Precise Builders",
    desc: "Attention to detail is embedded in our construction culture. Every joint, surface, and finish is executed to the highest quality standard.",
    color: "text-[#00E5FF]",
    bg: "bg-[#00E5FF]",
  },
  {
    icon: Globe,
    title: "24/7 Assistance",
    desc: "Our dedicated team provides round-the-clock support for active projects and client consultations throughout Nigeria.",
    color: "text-[#E6C687]",
    bg: "bg-[#E6C687]",
  },
];

const awards = [
  { year: "2024", name: "Best Architectural Design — Residential", body: "Lagos Building Industry Awards" },
  { year: "2023", name: "Excellence in Construction Delivery", body: "Nigerian Institute of Architects" },
  { year: "2022", name: "Healthcare Facility Design Award", body: "Enugu State Government Recognition" },
  { year: "2022", name: "Commercial Architecture Award", body: "Kaduna State Government Recognition" },
  { year: "2021", name: "Outstanding Residential Construction", body: "Lagos Construction Excellence Forum" },
  { year: "2019", name: "Emerging Architecture Firm of the Year", body: "Lagos Building Council" },
];

export default function AboutPage() {
  const [activeAwardIdx, setActiveAwardIdx] = useState(0);

  return (
    <div className="pt-32 pb-24 bg-[#07080A] min-h-screen overflow-hidden">

      {/* ── Page Header ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6C687]/10 border border-[#E6C687]/30 text-[#E6C687] text-xs font-mono tracking-widest uppercase">
            <Users className="w-3.5 h-3.5" />
            <span>Our Heritage & Mission</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight">
            THE REALMAXVILLE <span className="text-gold-gradient">STORY</span>
          </h1>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Established in 2017, RealMaxVille is a goal-oriented construction, structural and architectural company built on a passion for innovation, value creation, and client satisfaction across Nigeria.
          </p>
        </div>
      </div>

      {/* ── Story & Philosophy ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-[#E6C687]/30 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white">
              ENGINEERING PRECISION MEETS FUTURISTIC LUXURY
            </h2>

            <p className="text-gray-300 text-sm leading-relaxed">
              RealMaxVille is a goal-oriented, construction structural and architectural company with a passion of satisfying our clients need with rich innovation and value creation. Established in 2017 and registered as a limited liability company, we started operations in 2019.
            </p>

            <p className="text-gray-300 text-sm leading-relaxed">
              Guided and controlled by experience in diverse engineering fields, we provide general contracting, design-build, construction, renovation and construction management services designed to exceed expectations.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 text-xs font-mono">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00F5A0]" />
                <span className="text-white">100% On-Time Delivery</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E6C687]" />
                <span className="text-white">6+ Years Experience</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00F5A0]" />
                <span className="text-white">Professional Specialists</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E6C687]" />
                <span className="text-white">24/7 Client Assistance</span>
              </div>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#E6C687] to-[#D4AF37] text-black font-semibold text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-gold-glow"
            >
              <Sparkles className="w-4 h-4" />
              Explore Full Portfolio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="lg:col-span-6 relative h-96 rounded-2xl overflow-hidden border border-white/10">
            <img
              src="/images/projects/mrs-margaret.jpg"
              alt="Realmaxville Studio Architecture"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1015] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono text-gray-300">
              <p className="text-[#E6C687] font-bold uppercase">Realmaxville Global Architecture Award</p>
              <p className="text-white mt-0.5">Voted Best Luxury Residential Architecture Firm 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Live Stats Ticker ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="glass-card p-5 rounded-2xl text-center">
              <span className={`font-display font-extrabold text-2xl block ${stat.color}`}>{stat.value}</span>
              <p className="text-[10px] font-mono text-gray-400 mt-1.5 uppercase tracking-wider leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Core Values ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#E6C687] text-xs font-mono tracking-widest uppercase">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Founding Principles</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            THE PILLARS OF <span className="text-gold-gradient">EXCELLENCE</span>
          </h2>
          <p className="text-gray-400 text-sm">The four non-negotiable principles that define every Realmaxville project from concept to handover.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((val, i) => {
            const Icon = val.icon;
            return (
              <div key={i} className="glass-card p-7 rounded-3xl border border-white/10 group flex gap-5 items-start">
                <div className={`p-3 rounded-2xl ${val.bg} text-black shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className={`font-display font-bold text-lg ${val.color}`}>{val.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{val.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Awards & Recognition ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-[#E6C687]/30">

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6C687]/10 border border-[#E6C687]/30 text-[#E6C687] text-xs font-mono tracking-widest uppercase">
                <Award className="w-3.5 h-3.5" />
                <span>Industry Recognition</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                AWARDS &amp; <span className="text-gold-gradient">ACCREDITATIONS</span>
              </h2>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/30 text-[#00F5A0] text-xs font-mono">
              <ShieldCheck className="w-4 h-4" />
              ISO 9001 Certified Studio
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {awards.map((award, i) => (
              <button
                key={i}
                onClick={() => setActiveAwardIdx(i)}
                className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                  activeAwardIdx === i
                    ? "bg-[#E6C687]/10 border-[#E6C687]/50"
                    : "bg-white/[0.02] border-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`shrink-0 px-3 py-1 rounded-full text-xs font-mono font-bold ${
                    activeAwardIdx === i ? "bg-[#E6C687] text-black" : "bg-white/10 text-gray-400"
                  }`}>
                    {award.year}
                  </div>
                  <div>
                    <p className={`font-display font-semibold text-sm ${activeAwardIdx === i ? "text-[#E6C687]" : "text-white"}`}>
                      {award.name}
                    </p>
                    <p className="text-xs font-mono text-gray-400 mt-0.5">{award.body}</p>
                  </div>
                  {activeAwardIdx === i && (
                    <Award className="w-4 h-4 text-[#E6C687] shrink-0 ml-auto mt-0.5" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Leadership Team ── */}
      <LeadershipTeam />

      {/* ── Testimonials ── */}
      <Testimonials />
    </div>
  );
}
