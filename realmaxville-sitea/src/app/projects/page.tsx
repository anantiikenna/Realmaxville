"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projects } from "@/lib/projects-data";
import {
  Compass,
  MapPin,
  ArrowUpRight,
  Maximize2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = ["ALL", "RESIDENTIAL", "MULTI-FAMILY", "HEALTHCARE", "COMMERCIAL"];

export default function ProjectsPage() {
  const [selectedCat, setSelectedCat] = useState("ALL");

  const filtered = selectedCat === "ALL"
    ? projects
    : projects.filter((p) => p.type === selectedCat);

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-24 bg-[#07080A] min-h-screen">

        {/* ── Page Header ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6C687]/10 border border-[#E6C687]/30 text-[#E6C687] text-xs font-mono tracking-widest uppercase">
              <Compass className="w-3.5 h-3.5" />
              <span>Portfolio</span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight">
              ALL <span className="text-gold-gradient">PROJECTS</span>
            </h1>
          </div>
        </div>

        {/* ── Filter Bar ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  selectedCat === cat
                    ? "bg-[#E6C687] text-black font-bold shadow-gold-glow"
                    : "bg-white/5 text-gray-400 border border-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Results Grid ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {filtered.length === 0 ? (
            <div className="text-center py-24 space-y-4">
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto">
                <Compass className="w-9 h-9 text-gray-600" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">No Projects Found</h3>
              <p className="text-gray-400 text-sm max-w-sm mx-auto">
                No projects match the selected category.
              </p>
              <button
                onClick={() => setSelectedCat("ALL")}
                className="px-6 py-3 rounded-full bg-[#E6C687]/10 border border-[#E6C687]/30 text-[#E6C687] text-xs font-mono uppercase tracking-wider hover:bg-[#E6C687]/20 transition-all cursor-pointer"
              >
                View All Projects
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.slug}`}
                  className="glass-card rounded-3xl overflow-hidden group cursor-pointer border border-white/10 flex flex-col"
                >
                  {/* Card image */}
                  <div className="relative h-72 w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1015] via-transparent to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/70 backdrop-blur-md text-[#E6C687] border border-[#E6C687]/30 font-semibold">
                        {project.type}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:bg-[#E6C687] group-hover:text-black transition-all shadow-lg">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card details */}
                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#E6C687]" />
                          {project.location}
                        </span>
                        <span>{project.year}</span>
                      </div>

                      <h3 className="font-display font-extrabold text-lg text-white group-hover:text-[#E6C687] transition-colors">
                        {project.name}
                      </h3>

                      <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                      <span className="text-gray-300 flex items-center gap-1">
                        <Maximize2 className="w-3 h-3 text-[#E6C687]" /> {project.area}
                      </span>
                      <span className="text-[#00F5A0] font-bold uppercase tracking-wider">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
