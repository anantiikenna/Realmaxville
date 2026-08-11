"use client";

import React, { useState } from "react";
import ProjectModal, { ProjectData } from "./ProjectModal";
import Link from "next/link";
import { projects } from "@/lib/projects-data";
import { 
  Building, 
  MapPin, 
  ArrowUpRight, 
  Maximize2, 
  DollarSign
} from "lucide-react";

export const SAMPLE_PROJECTS: ProjectData[] = projects;

export default function FeaturedProjects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState<ProjectData | null>(null);

  const categories = ["All", "Residential Luxury", "Commercial Towers", "Smart Estates", "Waterfront Mansions", "Renovations"];

  const filteredProjects = (selectedCategory === "All"
    ? SAMPLE_PROJECTS
    : SAMPLE_PROJECTS.filter(p => p.category === selectedCategory)).slice(0, 6);

  return (
    <section className="py-24 bg-[#07080A] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#E6C687] text-xs font-mono tracking-widest uppercase">
              <Building className="w-3.5 h-3.5" />
              <span>Architectural Showcase</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              SIGNATURE LANDMARK <span className="text-gold-gradient">PORTFOLIO</span>
            </h2>

            <p className="text-gray-400 text-sm sm:text-base">
              Explore our recent architectural developments across Nigeria — from luxury residences to commercial landmarks and healthcare facilities.
            </p>
          </div>

          {/* Filter Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {["All", "Residential Luxury", "Commercial Towers", "Smart Estates"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-[#E6C687] to-[#D4AF37] text-black font-bold shadow-gold-glow"
                    : "bg-white/5 text-gray-400 border border-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="glass-card rounded-3xl overflow-hidden group cursor-pointer border border-white/10 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-80 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1015] via-transparent to-transparent" />
                
                {/* Category Pill Top Left */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/70 backdrop-blur-md text-[#E6C687] border border-[#E6C687]/30 font-semibold">
                    {project.category}
                  </span>
                </div>

                {/* Quick Arrow Top Right */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:bg-[#E6C687] group-hover:text-black transition-all shadow-lg">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Details Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#E6C687]" />
                    {project.location}
                  </span>
                  <span>{project.year}</span>
                </div>

                <h3 className="font-display font-extrabold text-xl text-white group-hover:text-[#E6C687] transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Bottom Spec Pill Bar */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-300 flex items-center gap-1">
                    <Maximize2 className="w-3 h-3 text-[#E6C687]" /> {project.area}
                  </span>
                  <span className="text-[#00F5A0] font-bold flex items-center gap-1">
                    <DollarSign className="w-3 h-3" /> {project.budget}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-[#E6C687]/30 text-[#E6C687] font-semibold text-xs uppercase tracking-widest hover:bg-[#E6C687]/10 hover:border-[#E6C687]/60 transition-all"
          >
            View Full Portfolio — 8 Landmark Projects
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      {/* Project Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

    </section>
  );
}
