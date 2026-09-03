"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowUpRight, Filter } from "lucide-react";
import { projects } from "@/lib/projects-data";

const categories = ["All", "Residential Luxury", "Smart Estates", "Commercial Towers"];

export default function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-28 bg-[#080C10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 mb-14">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-emerald-500" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-500">
                Our Portfolio
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-ivory-100 leading-[1.05]">
              Built with <br />
              <em className="text-emerald-gradient font-semibold not-italic">
                intention.
              </em>
            </h2>
          </div>
          <div className="flex-1">
            <p className="text-ivory-300/60 text-base leading-relaxed mb-6">
              Each project tells the story of a vision brought to life through precision engineering and architectural mastery.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-emerald-500/30 text-emerald-400 text-sm font-medium hover:bg-emerald-500/10 transition-all duration-200"
            >
              See All Projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mb-10 flex-wrap">
          <Filter className="h-4 w-4 text-ivory-400/40 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-copper-500 text-[#080C10] shadow-copper-glow"
                  : "border border-white/10 text-ivory-400/60 hover:border-copper-500/30 hover:text-ivory-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.slice(0, 6).map((project, idx) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={`group relative rounded-2xl overflow-hidden bg-[#0D1117] border border-white/5 hover:border-copper-500/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-card-slate ${
                idx === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${idx === 0 ? "h-72 lg:h-64" : "h-52"}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent" />

                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full bg-[#080C10]/80 border border-white/10 text-ivory-300/80 backdrop-blur-sm">
                    {project.type}
                  </span>
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-4 right-4 p-2 rounded-full bg-[#080C10]/70 border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
                  <ArrowUpRight className="h-4 w-4 text-copper-400" />
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-serif text-xl font-semibold text-ivory-100 mb-2 group-hover:text-copper-300 transition-colors">
                  {project.name}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-ivory-400/50 mb-3">
                  <MapPin className="h-3.5 w-3.5 text-emerald-500" />
                  <span>{project.location}</span>
                  <span className="text-ivory-400/20 mx-1">·</span>
                  <span className="text-ivory-400/40">{project.year}</span>
                </div>
                <p className="text-sm text-ivory-300/50 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-copper-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/5">
          {[
            { value: "50+", label: "Completed Projects" },
            { value: "₦50Bn+", label: "Total Project Value" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "10yr", label: "Structural Warranty" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl sm:text-4xl font-semibold text-copper-gradient">{stat.value}</p>
              <p className="font-mono text-[10px] uppercase tracking-wider text-ivory-400/50 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
