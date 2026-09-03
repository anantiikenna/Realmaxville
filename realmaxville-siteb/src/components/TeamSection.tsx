"use client";

import React, { useState } from "react";
import { Linkedin, ExternalLink, X, Award } from "lucide-react";

const team = [
  {
    name: "Olamilekan Umar",
    role: "Technical Lead",
    credentials: "M.Sc. Structural Engineering, MNSE",
    bio: "Master of structural integrity and technical precision across high-density residential, commercial, and infrastructure projects. Olamilekan combines deep structural mathematics with a creative instinct for innovative engineering solutions.",
    image: "/team/olamilekan.jpg",
    specialty: "Structural Integrity & Engineering Mechanics",
    linkedin: "https://www.linkedin.com/in/yaqoob-umar-99ab00233",
    initial: "O",
  },
  {
    name: "Alex Jnr.",
    role: "Project Lead",
    credentials: "B.Sc. Construction Management, PMP",
    bio: "Specialist in high-impact project execution, site logistics, zero-tolerance quality assurance, and client relations. Alex ensures every project is delivered on time, within budget, and to the highest standard.",
    image: "/team/alex.jpg",
    specialty: "Project Execution & Turnkey Delivery",
    linkedin: "#",
    initial: "A",
  },
  {
    name: "Uche Uchendu",
    role: "Design Lead",
    credentials: "M.Arch, MNIA",
    bio: "The architect of visual identity, computational spatial geometry, and creative direction across Realmaxville's flagship projects. Uche brings a rare fusion of artistic vision and architectural rigor to every commission.",
    image: "/team/uche.jpg",
    specialty: "Parametric Design & Architectural Direction",
    linkedin: "https://www.linkedin.com/in/uche-uchendu-9b8b1115b",
    initial: "U",
  },
  {
    name: "Stephen Nwadialor",
    role: "Business Analyst",
    credentials: "B.Sc. Economics & Analytics",
    bio: "Data-driven feasibility analysis, investment valuation, and strategic planning for optimal project outcomes. Stephen translates complex financial models into clear investment narratives for high-net-worth clients.",
    image: "/team/stephen.jpg",
    specialty: "Project Economics & Financial Strategy",
    linkedin: "https://www.linkedin.com/in/stephen-nwadialor/",
    initial: "S",
  },
];

export default function TeamSection() {
  const [selected, setSelected] = useState<(typeof team)[0] | null>(null);

  return (
    <section className="py-28 bg-[#080C10] relative">
      {/* Decorative blur */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-copper-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-copper-500" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-copper-400">
                Our People
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-ivory-100 leading-[1.05]">
              The minds <br />
              <em className="text-copper-gradient font-semibold not-italic">
                behind the work.
              </em>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-ivory-300/55 text-base leading-relaxed max-w-lg">
              A multidisciplinary team of architects, engineers, project managers, and economists who each bring world-class expertise to every Realmaxville project.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((member, idx) => (
            <div
              key={idx}
              onClick={() => setSelected(member)}
              className="group relative rounded-2xl overflow-hidden bg-[#0D1117] border border-white/5 hover:border-copper-500/20 transition-all duration-400 cursor-pointer hover:-translate-y-1 hover:shadow-card-slate"
            >
              {/* Photo */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/30 to-transparent" />

                {/* Specialty tag */}
                <div className="absolute bottom-4 left-3 right-3">
                  <span className="inline-block font-mono text-[9px] uppercase tracking-wider px-2.5 py-1.5 rounded-full bg-copper-500 text-[#080C10] font-medium">
                    {member.specialty.split(" ")[0]} {member.specialty.split(" ")[1]}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-serif text-xl font-semibold text-ivory-100 group-hover:text-copper-300 transition-colors">
                  {member.name}
                </h3>
                <p className="font-mono text-[11px] text-copper-400 uppercase tracking-wider mt-1">{member.role}</p>
                <p className="font-mono text-[10px] text-ivory-400/40 mt-0.5">{member.credentials}</p>
                <p className="text-xs text-ivory-300/50 leading-relaxed mt-3 line-clamp-2">
                  {member.bio}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-copper-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>

      {/* Bio Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080C10]/90 backdrop-blur-md"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-lg glass-slate rounded-3xl p-8 space-y-6 border border-copper-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-ivory-400/60 hover:text-ivory-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <img
                src={selected.image}
                alt={selected.name}
                className="w-20 h-20 rounded-2xl object-cover object-top border-2 border-copper-500/30"
              />
              <div>
                <h3 className="font-serif text-2xl font-semibold text-ivory-100">{selected.name}</h3>
                <p className="font-mono text-xs text-copper-400 uppercase tracking-wider mt-1">{selected.role}</p>
                <p className="font-mono text-[10px] text-ivory-400/40 mt-0.5">{selected.credentials}</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-emerald-500/5 border border-emerald-500/15">
              <Award className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-xs font-mono text-emerald-400">{selected.specialty}</span>
            </div>

            <p className="text-ivory-300/65 text-sm leading-relaxed">{selected.bio}</p>

            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              {selected.linkedin && selected.linkedin !== "#" ? (
                <a
                  href={selected.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-copper-400 hover:text-copper-300 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn Profile
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <span className="text-xs font-mono text-ivory-400/40">Realmaxville Partner</span>
              )}
              <button
                onClick={() => setSelected(null)}
                className="px-5 py-2 rounded-full bg-copper-500 text-[#080C10] text-xs font-semibold cursor-pointer hover:bg-copper-400 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
