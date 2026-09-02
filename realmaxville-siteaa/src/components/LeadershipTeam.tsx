"use client";

import React, { useState } from "react";
import { Award, Linkedin, Mail, Sparkles, X } from "lucide-react";

export default function LeadershipTeam() {
  const [selectedLeader, setSelectedLeader] = useState<any | null>(null);

  const team = [
    {
      name: "Olamilekan Umar",
      role: "Technical Lead",
      credentials: "M.Sc. Structural Engineering, MNSE",
      bio: "Master of structural integrity and technical precision across high-density residential, commercial, and infrastructure developments.",
      image: "/images/team/olamilekan.jpg",
      specialty: "Structural Integrity & Engineering Mechanics",
      linkedin: "https://www.linkedin.com/in/yaqoob-umar-99ab00233"
    },
    {
      name: "Alex Jnr.",
      role: "Project Lead",
      credentials: "B.Sc. Construction Management, PMP",
      bio: "Specialist in high-impact project execution, site logistics, zero-tolerance quality assurance, and client relations.",
      image: "/images/team/alex.jpg",
      specialty: "Project Execution & Turnkey Delivery",
      linkedin: "#"
    },
    {
      name: "Uche Uchendu",
      role: "Design Lead",
      credentials: "M.Arch, MNIA",
      bio: "The architect of visual identity, computational spatial geometry, and creative direction across Realmaxville's flagship projects.",
      image: "/images/team/uche.jpg",
      specialty: "Parametric Design & Architectural Direction",
      linkedin: "https://www.linkedin.com/in/uche-uchendu-9b8b1115b"
    },
    {
      name: "Stephen Nwadialor",
      role: "Business Analyst",
      credentials: "B.Sc. Economics & Analytics",
      bio: "Data-driven feasibility analysis, investment valuation, and strategic planning for optimal project outcomes.",
      image: "/images/team/stephen.jpg",
      specialty: "Project Economics & Financial Strategy",
      linkedin: "https://www.linkedin.com/in/stephen-nwadialor/"
    }
  ];

  return (
    <section className="py-24 bg-[#0A0C10] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6C687]/10 border border-[#E6C687]/30 text-[#E6C687] text-xs font-mono tracking-widest uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>Executive Leadership</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            THE MINDS BEHIND <span className="text-gold-gradient">THE LEGACIES</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base">
            World-class architects, technical leads, and project managers driving architectural innovation.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((leader, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedLeader(leader)}
              className="glass-card rounded-3xl overflow-hidden group cursor-pointer border border-white/10 flex flex-col justify-between"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1015] via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-[#E6C687] text-black font-extrabold shadow-gold-glow">
                    {leader.specialty}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="font-display font-bold text-xl text-white group-hover:text-[#E6C687] transition-colors">
                  {leader.name}
                </h3>
                <p className="text-xs font-mono text-[#E6C687]">{leader.role}</p>
                <p className="text-[11px] font-mono text-gray-400">{leader.credentials}</p>
                <p className="text-gray-300 text-xs line-clamp-2 leading-relaxed pt-2">
                  {leader.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Leader Bio Modal */}
      {selectedLeader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg glass-panel-gold p-6 sm:p-8 rounded-3xl space-y-6">
            <button
              onClick={() => setSelectedLeader(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:text-[#E6C687]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <img
                src={selectedLeader.image}
                alt={selectedLeader.name}
                className="w-20 h-20 rounded-2xl object-cover border-2 border-[#E6C687] shadow-gold-glow"
              />
              <div>
                <h3 className="font-display font-bold text-xl text-white">{selectedLeader.name}</h3>
                <p className="text-xs font-mono text-[#E6C687]">{selectedLeader.role}</p>
                <p className="text-[11px] font-mono text-gray-400 mt-1">{selectedLeader.credentials}</p>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-[#00F5A0] uppercase flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Core Specialty
              </span>
              <p className="text-xs font-mono text-white bg-white/5 p-2.5 rounded-xl border border-white/10">
                {selectedLeader.specialty}
              </p>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              {selectedLeader.bio}
            </p>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3 text-gray-400">
                {selectedLeader.linkedin && selectedLeader.linkedin !== "#" ? (
                  <a
                    href={selectedLeader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-white/5 text-[#E6C687] hover:bg-[#E6C687] hover:text-black transition-all flex items-center gap-1 font-mono text-[11px]"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn Profile</span>
                  </a>
                ) : (
                  <span className="p-1.5 rounded-lg bg-white/5 text-gray-400 flex items-center gap-1 font-mono text-[11px]">
                    <Linkedin className="w-4 h-4" />
                    <span>Realmaxville Partner</span>
                  </span>
                )}
              </div>
              <button
                onClick={() => setSelectedLeader(null)}
                className="px-5 py-2 rounded-full bg-[#E6C687] text-black font-semibold text-xs uppercase"
              >
                Close Bio
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
