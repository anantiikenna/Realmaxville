"use client";
import { useState, useEffect, useCallback } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const projects = [
  {
    id: 1,
    name: "Mrs Margaret",
    location: "Lagos, Nigeria",
    type: "RESIDENTIAL",
    year: "2023",
    area: "450 m²",
    description: "A stunning contemporary residence featuring clean geometric lines, floor-to-ceiling glazing, and a seamless indoor-outdoor living experience. The design maximizes natural light while maintaining privacy through strategic screening elements.",
    img: "/images/projects/mrs-margaret.jpg",
  },
  {
    id: 2,
    name: "Blocks of Flat",
    location: "Lagos, Nigeria",
    type: "MULTI-FAMILY",
    year: "2024",
    area: "3,200 m²",
    description: "A modern multi-family residential development designed to optimize density without compromising on livability. Features shared amenity spaces, sustainable systems, and a facade that creates visual rhythm across the streetscape.",
    img: "/images/projects/blocks-of-flat.jpg",
  },
  {
    id: 3,
    name: "Double Face Home",
    location: "Lagos, Nigeria",
    type: "RESIDENTIAL",
    year: "2023",
    area: "380 m²",
    description: "An innovative dual-frontage residence that presents distinct architectural expressions on each street. The concept plays with the idea of a building having two personalities — formal and private — connected by a central courtyard.",
    img: "/images/projects/double-face-home.jpg",
  },
  {
    id: 4,
    name: "Transient Hospital",
    location: "Enugu, Nigeria",
    type: "HEALTHCARE",
    year: "2022",
    area: "1,800 m²",
    description: "A purpose-built healthcare facility designed for rapid deployment and efficient patient flow. The modular design allows for future expansion while maintaining operational efficiency and a healing environment for patients.",
    img: "/images/projects/transient-hospital.jpg",
  },
  {
    id: 5,
    name: "Kaduna Conference Center",
    location: "Kaduna, Nigeria",
    type: "COMMERCIAL",
    year: "2024",
    area: "2,500 m²",
    description: "A landmark commercial conference center featuring a dramatic cantilevered roof structure and expansive column-free interior spaces. The design incorporates local materials and passive cooling strategies suited to the regional climate.",
    img: "/images/projects/kaduna-conference-center.jpg",
  },
  {
    id: 6,
    name: "Mabushi Villa",
    location: "Abuja, Nigeria",
    type: "RESIDENTIAL",
    year: "2023",
    area: "620 m²",
    description: "A luxurious villa nestled in Abuja's upscale Mabushi district. The design draws from traditional Nigerian compound living while embracing contemporary minimalism, featuring expansive gardens, a private pool, and smart home integration.",
    img: "/images/projects/mabushi-villa.jpg",
  },
  {
    id: 7,
    name: "Danke Gott Project Jade",
    location: "Lagos, Nigeria",
    type: "RESIDENTIAL",
    year: "2024",
    area: "520 m²",
    description: "A premium residential development characterized by its jade-green tinted glass facade and organic architectural form. The building stands as a beacon of modern luxury with panoramic views and state-of-the-art finishes throughout.",
    img: "/images/projects/danke-gott-jade.jpg",
  },
  {
    id: 8,
    name: "Residential Apartment",
    location: "Lagos, Nigeria",
    type: "RESIDENTIAL",
    year: "2023",
    area: "280 m²",
    description: "A thoughtfully designed apartment building that maximizes limited urban space. Each unit features open-plan living, private balconies, and cross-ventilation. The facade uses a dynamic pattern of screens that filter light and provide privacy.",
    img: "/images/projects/residential-apartment.jpg",
  },
];

const types = ["ALL", "RESIDENTIAL", "COMMERCIAL", "HEALTHCARE", "MULTI-FAMILY"];

export default function ProjectsPage() {
  const [activeType, setActiveType] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filtered = activeType === "ALL"
    ? projects
    : projects.filter((p) => p.type === activeType);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setSelectedProject(null);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add("modal-open");
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject, handleKeyDown]);

  return (
    <>
      {/* Hero */}
      <section className="page-hero blueprint-grid" aria-labelledby="projects-hero-heading">
        <div className="section-inner relative z-10">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#c7f300] pulse-active" aria-hidden="true" />
              <span className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-[#c7f300] uppercase">
                Portfolio
              </span>
            </div>
            <h1
              id="projects-hero-heading"
              className="font-extrabold uppercase leading-[0.9] tracking-[-0.04em] mb-6"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
            >
              OUR{" "}
              <span className="neon-text-glow">BUILDINGS</span>
            </h1>
            <p className="text-[#b0b3b4] text-lg max-w-xl leading-relaxed">
              A curated collection of architectural projects across Nigeria — from luxury residences
              to commercial landmarks and healthcare facilities.
            </p>
          </ScrollReveal>
        </div>
        <div className="scanline" aria-hidden="true" />
      </section>

      {/* Filter + Grid */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#0e0e0e" }} aria-labelledby="grid-heading">
        <div className="section-inner space-y-16">
          {/* Filter bar */}
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <h2 id="grid-heading" className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight mb-2">
                  ALL PROJECTS
                </h2>
                <p className="text-[#b0b3b4] text-sm">
                  {filtered.length} project{filtered.length !== 1 ? "s" : ""} displayed
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                role="radiogroup"
                aria-label="Filter projects by type"
              >
                {types.map((t) => (
                  <button
                    key={t}
                    onClick={() => setActiveType(t)}
                    role="radio"
                    aria-checked={activeType === t}
                    className="h-11 px-5 rounded-full font-(--font-space-mono) text-[10px] tracking-[0.2em] uppercase transition-all duration-200 cursor-pointer"
                    style={{
                      background: activeType === t ? "#c7f300" : "rgba(255,255,255,0.04)",
                      color: activeType === t ? "#171e00" : "#b0b3b4",
                      border: activeType === t ? "1px solid #c7f300" : "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Project grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p, i) => (
              <ScrollReveal key={p.id} className="stagger">
                <article
                  className="group relative overflow-hidden rounded-xl aspect-3/4 cursor-pointer"
                  onClick={() => setSelectedProject(p)}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSelectedProject(p); } }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View details for ${p.name}`}
                >
                  <img
                    src={p.img}
                    alt={`${p.name} — ${p.type.toLowerCase()} project in ${p.location}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-(--font-space-mono) text-[9px] tracking-[0.2em] text-[#c7f300] bg-[#c7f300]/10 border border-[#c7f300]/25 px-2.5 py-0.5 rounded-full">
                        {p.type}
                      </span>
                      <span className="text-[10px] text-[#b0b3b4]">{p.year}</span>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-[#c7f300] transition-colors">
                      {p.name}
                    </h3>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
                      <span className="text-xs text-[#b0b3b4]">{p.location}</span>
                      <svg
                        className="w-4 h-4 text-[#c7f300] opacity-0 group-hover:opacity-100 transition-opacity"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#b0b3b4] text-lg">No projects found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 data-grid-bg" aria-labelledby="cta-heading">
        <div className="section-inner text-center space-y-8">
          <ScrollReveal>
            <h2 id="cta-heading" className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">
              HAVE A PROJECT IN MIND?
            </h2>
            <p className="text-[#b0b3b4] max-w-lg mx-auto">
              We bring visionary architecture to life. Let&apos;s discuss your next landmark.
            </p>
            <a href="/contact" className="btn-cta glow-hover inline-flex items-center gap-2">
              START A CONVERSATION
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-200 flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Project details: ${selectedProject.name}`}
          onClick={(e) => { if (e.target === e.currentTarget) setSelectedProject(null); }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

          {/* Modal content */}
          <div className="relative glass-panel rounded-2xl cyber-border max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#e5e2e1] hover:bg-[#c7f300] hover:text-on-accent hover:border-[#c7f300] transition-all cursor-pointer"
              aria-label="Close project details"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative aspect-video overflow-hidden rounded-t-2xl">
              <img
                src={selectedProject.img}
                alt={`${selectedProject.name} — full view`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-surface-container-lowest via-transparent to-transparent" />
            </div>

            {/* Info */}
            <div className="p-8 md:p-10 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-[#c7f300] bg-[#c7f300]/10 border border-[#c7f300]/25 px-3 py-1 rounded-full">
                  {selectedProject.type}
                </span>
                <span className="text-sm text-[#b0b3b4]">{selectedProject.year}</span>
                <span className="text-[#444]" aria-hidden="true">·</span>
                <span className="text-sm text-[#b0b3b4]">{selectedProject.area}</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
                {selectedProject.name}
              </h2>

              <div className="flex items-center gap-2 text-sm text-[#b0b3b4]">
                <svg className="w-4 h-4 text-[#c7f300]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {selectedProject.location}
              </div>

              <div className="h-px bg-linear-to-r from-transparent via-[#c7f300]/20 to-transparent" aria-hidden="true" />

              <p className="text-[#b0b3b4] leading-relaxed text-sm md:text-base">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a href="/contact" className="btn-cta glow-hover">
                  DISCUSS THIS PROJECT
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="h-11 px-6 rounded-full border border-white/15 text-[#b0b3b4] font-(--font-space-mono) text-[10px] tracking-[0.2em] uppercase hover:border-[#c7f300]/40 hover:text-[#c7f300] transition-all cursor-pointer"
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
