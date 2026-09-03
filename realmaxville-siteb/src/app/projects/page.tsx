"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects-data";
import { MapPin, ArrowUpRight, Maximize2, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = ["All", "RESIDENTIAL", "MULTI-FAMILY", "HEALTHCARE", "COMMERCIAL"];

export default function ProjectsPage() {
  const [selectedCat, setSelectedCat] = useState("All");

  const filtered =
    selectedCat === "All"
      ? projects
      : projects.filter((p) => p.type === selectedCat);

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 bg-[#080C10] min-h-screen">

        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-copper-500" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-copper-400">Portfolio</span>
              </div>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-ivory-100 leading-[1.0]">
                Every project, <br />
                <em className="text-copper-gradient font-semibold not-italic">every story.</em>
              </h1>
            </div>
            <div>
              <p className="text-ivory-300/55 text-base leading-relaxed">
                Over 50 completed projects spanning luxury residences, smart estates, civic buildings, and healthcare facilities across Nigeria's major cities.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 items-center">
                <Filter className="h-4 w-4 text-ivory-400/30" />
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCat(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                      selectedCat === cat
                        ? "bg-copper-500 text-[#080C10] shadow-copper-glow font-bold"
                        : "border border-white/10 text-ivory-400/50 hover:border-copper-500/30 hover:text-ivory-100"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-24 space-y-5">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto">
                <Filter className="w-7 h-7 text-ivory-400/30" />
              </div>
              <p className="text-ivory-300/50 text-sm">No projects in this category.</p>
              <button
                onClick={() => setSelectedCat("All")}
                className="px-5 py-2.5 rounded-full border border-copper-500/30 text-copper-400 text-xs font-mono uppercase tracking-wider hover:bg-copper-500/10 transition-all cursor-pointer"
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
                  className="group rounded-2xl overflow-hidden bg-[#0D1117] border border-white/5 hover:border-copper-500/20 transition-all duration-400 hover:-translate-y-1 hover:shadow-card-slate flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent" />

                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="font-mono text-[9px] uppercase tracking-widest px-2.5 py-1.5 rounded-full bg-[#080C10]/80 border border-white/10 text-ivory-300/70 backdrop-blur-sm">
                        {project.type}
                      </span>
                    </div>

                    {/* Arrow */}
                    <div className="absolute top-4 right-4 p-2 rounded-full bg-[#080C10]/70 backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 group-hover:bg-copper-500 group-hover:border-copper-400 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-ivory-100 group-hover:text-[#080C10]" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between text-xs font-mono text-ivory-400/40 mb-3">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                        {project.location}
                      </span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="font-serif text-xl font-semibold text-ivory-100 mb-2 group-hover:text-copper-300 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs text-ivory-300/45 leading-relaxed line-clamp-2 flex-1">
                      {project.description}
                    </p>

                    <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                      <span className="text-ivory-300/50 flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5 text-copper-500/60" />
                        {project.area}
                      </span>
                      <span className="text-emerald-400 uppercase tracking-wider font-medium">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="h-0.5 bg-gradient-to-r from-copper-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
