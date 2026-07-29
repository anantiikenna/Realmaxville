"use client";

import React, { useState } from "react";
import ProjectModal, { ProjectData } from "@/components/ProjectModal";
import { SAMPLE_PROJECTS } from "@/components/FeaturedProjects";
import {
  Search,
  Compass,
  MapPin,
  ArrowUpRight,
  Maximize2,
  DollarSign,
  SlidersHorizontal,
  X
} from "lucide-react";

type SortOption = "newest" | "area" | "category";

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [activeModalProject, setActiveModalProject] = useState<ProjectData | null>(null);

  const categories = ["All", "Residential Luxury", "Commercial Towers", "Smart Estates", "Waterfront Mansions"];

  const filtered = SAMPLE_PROJECTS.filter((item) => {
    const matchesCat = selectedCat === "All" || item.category === selectedCat;
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      !term ||
      item.title.toLowerCase().includes(term) ||
      item.location.toLowerCase().includes(term) ||
      item.description.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term);
    return matchesCat && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === "newest") return Number(b.year) - Number(a.year);
    if (sortBy === "area")   return parseInt(b.area.replace(/\D/g, "")) - parseInt(a.area.replace(/\D/g, ""));
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  const clearSearch = () => { setSearchTerm(""); setSelectedCat("All"); };

  return (
    <div className="pt-32 pb-24 bg-[#07080A] min-h-screen">

      {/* ── Page Header ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6C687]/10 border border-[#E6C687]/30 text-[#E6C687] text-xs font-mono tracking-widest uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>Architectural Masterworks</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight">
            THE REALMAXVILLE <span className="text-gold-gradient">PORTFOLIO</span>
          </h1>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Discover our complete registry of ultra-luxury residential mansions, high-density sky towers, and automated smart enclaves delivered across the globe.
          </p>

          {/* ── Filter & Search Panel ── */}
          <div className="pt-6 glass-panel p-4 sm:p-6 rounded-3xl border border-white/10 space-y-4 text-left">

            {/* Search bar */}
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by project name, location or category…"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E6C687] pl-12 pr-12 transition-colors"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category pills + sort */}
            <div className="flex flex-wrap items-center gap-2 justify-between">
              <div className="flex items-center gap-2 flex-wrap">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCat(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                      selectedCat === cat
                        ? "bg-[#E6C687] text-black font-bold shadow-gold-glow"
                        : "bg-white/5 text-gray-400 border border-white/10 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Sort dropdown */}
              <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#E6C687]" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#E6C687] cursor-pointer"
                >
                  <option value="newest" className="bg-[#0E1015]">Sort: Newest</option>
                  <option value="area"   className="bg-[#0E1015]">Sort: Largest Area</option>
                  <option value="category" className="bg-[#0E1015]">Sort: Category</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Results Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Results count */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-mono text-[#E6C687] uppercase tracking-wider">
            {filtered.length} {filtered.length === 1 ? "Project" : "Projects"} Found
          </span>
          {(searchTerm || selectedCat !== "All") && (
            <button
              onClick={clearSearch}
              className="text-[10px] font-mono text-gray-500 hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
            >
              Clear all filters
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          /* No results */
          <div className="text-center py-24 space-y-4">
            <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto">
              <Search className="w-9 h-9 text-gray-600" />
            </div>
            <h3 className="font-display font-bold text-xl text-white">No Projects Found</h3>
            <p className="text-gray-400 text-sm max-w-sm mx-auto">
              Try adjusting your search term or selecting a different category filter.
            </p>
            <button
              onClick={clearSearch}
              className="px-6 py-3 rounded-full bg-[#E6C687]/10 border border-[#E6C687]/30 text-[#E6C687] text-xs font-mono uppercase tracking-wider hover:bg-[#E6C687]/20 transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((project) => (
              <div
                key={project.id}
                onClick={() => setActiveModalProject(project)}
                className="glass-card rounded-3xl overflow-hidden group cursor-pointer border border-white/10 flex flex-col"
              >
                {/* Card image */}
                <div className="relative h-80 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1015] via-transparent to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/70 backdrop-blur-md text-[#E6C687] border border-[#E6C687]/30 font-semibold">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:bg-[#E6C687] group-hover:text-black transition-all shadow-lg">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Card details */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
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
                  </div>

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
        )}
      </div>

      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </div>
  );
}
