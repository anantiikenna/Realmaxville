"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  ArrowRight,
  User,
  Quote,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";

const stats = [
  { value: "8+", label: "Completed Projects", color: "text-[#E6C687]" },
  { value: "6+", label: "Years of Experience", color: "text-[#00F5A0]" },
  { value: "4", label: "Team Members", color: "text-white" },
  { value: "100%", label: "On-Time Delivery", color: "text-[#E6C687]" },
  { value: "2017", label: "Established", color: "text-[#00F5A0]" },
  { value: "Lagos", label: "Headquarters", color: "text-white" },
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
  { year: "2024", name: "Best Residential Design", body: "Lagos Building Industry Awards" },
  { year: "2023", name: "Excellence in Construction", body: "Nigerian Institute of Architects" },
  { year: "2022", name: "Healthcare Facility Design", body: "Enugu State Government" },
  { year: "2022", name: "Commercial Architecture Award", body: "Kaduna State Government" },
  { year: "2021", name: "Outstanding Residential Construction", body: "Lagos Construction Excellence Forum" },
  { year: "2019", name: "Emerging Firm of the Year", body: "Lagos Building Council" },
];

const team = [
  {
    name: "Uche Uchendu",
    role: "Principal Architect",
    bio: "The architect of visual identity, computational spatial geometry, and creative direction across Realmaxville's flagship projects.",
  },
  {
    name: "Olamilekan Umar",
    role: "Structural Engineer",
    bio: "Master of structural integrity and technical precision across high-density residential, commercial, and infrastructure developments.",
  },
  {
    name: "Alex Jnr",
    role: "Project Manager",
    bio: "Specialist in high-impact project execution, site logistics, zero-tolerance quality assurance, and client relations.",
  },
  {
    name: "Stephen Nwadialor",
    role: "Design Lead",
    bio: "Data-driven feasibility analysis, investment valuation, and strategic planning for optimal project outcomes.",
  },
];

const testimonials = [
  {
    quote: "Those drawings are crazy bad. I mean you delivered. Love love the drawings!",
    author: "Isioma F. Uzu Sherrill",
    role: "Nurse",
    rating: 5,
  },
  {
    quote: "Great work to RealmaxVille. After our lengthy discussion, I came to check progress and found they took into details all we discussed.",
    author: "Dr. Olajide Olalekan Olasiyan",
    role: "Developer",
    rating: 5,
  },
  {
    quote: "The attention to detail and professionalism exceeded our expectations. A truly world-class team.",
    author: "Chidi Eze",
    role: "Property Developer",
    rating: 5,
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="pt-32 pb-24 bg-[#07080A] min-h-screen overflow-hidden">

        {/* ── Page Header ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6C687]/10 border border-[#E6C687]/30 text-[#E6C687] text-xs font-mono tracking-widest uppercase">
              <Users className="w-3.5 h-3.5" />
              <span>Our Heritage</span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight">
              THE REALMAXVILLE <span className="text-gold-gradient">STORY</span>
            </h1>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Established in 2017, RealMaxVille is a goal-oriented construction, structural and architectural company built on a passion for innovation, value creation, and client satisfaction across Nigeria.
            </p>
          </div>
        </div>

        {/* ── Story Section ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="glass-gold p-8 sm:p-12 rounded-3xl border border-[#E6C687]/30 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

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

        {/* ── Stats Grid ── */}
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

        {/* ── Awards ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="glass-gold p-8 sm:p-12 rounded-3xl border border-[#E6C687]/30">
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
                <div key={i} className="p-5 rounded-2xl border bg-white/[0.02] border-white/10 hover:border-white/20 transition-all text-left">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/10 text-gray-400">
                      {award.year}
                    </div>
                    <div>
                      <p className="font-display font-semibold text-sm text-white">
                        {award.name}
                      </p>
                      <p className="text-xs font-mono text-gray-400 mt-0.5">{award.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Leadership Team ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6C687]/10 border border-[#E6C687]/30 text-[#E6C687] text-xs font-mono tracking-widest uppercase">
              <Award className="w-3.5 h-3.5" />
              <span>Executive Leadership</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              THE MINDS BEHIND <span className="text-gold-gradient">THE LEGACIES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((leader, idx) => (
              <div key={idx} className="glass-card rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between">
                <div className="relative h-72 w-full overflow-hidden bg-[#181C27] flex items-center justify-center">
                  <User className="w-20 h-20 text-gray-600" />
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-display font-bold text-xl text-white">
                    {leader.name}
                  </h3>
                  <p className="text-xs font-mono text-[#E6C687]">{leader.role}</p>
                  <p className="text-gray-300 text-xs line-clamp-3 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Testimonials ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#E6C687] text-xs font-mono tracking-widest uppercase">
              <Quote className="w-3.5 h-3.5" />
              <span>Client Endorsements</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              TRUSTED BY <span className="text-gold-gradient">VISIONARIES</span>
            </h2>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none">
            {testimonials.map((t, i) => (
              <div key={i} className="glass-panel p-8 rounded-3xl border border-[#E6C687]/30 min-w-[340px] max-w-md snap-center shrink-0 space-y-5">
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#E6C687] text-[#E6C687]" />
                  ))}
                </div>
                <p className="text-white font-display text-base italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="pt-4 border-t border-white/10">
                  <h4 className="font-display font-bold text-sm text-white">{t.author}</h4>
                  <p className="text-xs font-mono text-[#E6C687]">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}
