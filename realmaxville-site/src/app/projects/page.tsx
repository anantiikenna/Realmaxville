"use client";
import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const projects = [
  { slug: "mrs-margaret", name: "Mrs Margaret", location: "Lagos, Nigeria", type: "RESIDENTIAL", year: "2023", area: "450 m²", img: "/images/projects/mrs-margaret.jpg" },
  { slug: "blocks-of-flat", name: "Blocks of Flat", location: "Lagos, Nigeria", type: "MULTI-FAMILY", year: "2024", area: "3,200 m²", img: "/images/projects/blocks-of-flat.jpg" },
  { slug: "double-face-home", name: "Double Face Home", location: "Lagos, Nigeria", type: "RESIDENTIAL", year: "2023", area: "380 m²", img: "/images/projects/double-face-home.jpg" },
  { slug: "transient-hospital", name: "Transient Hospital", location: "Enugu, Nigeria", type: "HEALTHCARE", year: "2022", area: "1,800 m²", img: "/images/projects/transient-hospital.jpg" },
  { slug: "kaduna-conference-center", name: "Kaduna Conference Center", location: "Kaduna, Nigeria", type: "COMMERCIAL", year: "2024", area: "2,500 m²", img: "/images/projects/kaduna-conference-center.jpg" },
  { slug: "mabushi-villa", name: "Mabushi Villa", location: "Abuja, Nigeria", type: "RESIDENTIAL", year: "2023", area: "620 m²", img: "/images/projects/mabushi-villa.jpg" },
  { slug: "danke-gott-project-jade", name: "Danke Gott Project Jade", location: "Lagos, Nigeria", type: "RESIDENTIAL", year: "2024", area: "520 m²", img: "/images/projects/danke-gott-jade.jpg" },
  { slug: "residential-apartment", name: "Residential Apartment", location: "Lagos, Nigeria", type: "RESIDENTIAL", year: "2023", area: "280 m²", img: "/images/projects/residential-apartment.jpg" },
];

const types = ["ALL", "RESIDENTIAL", "COMMERCIAL", "HEALTHCARE", "MULTI-FAMILY"];

export default function ProjectsPage() {
  const [activeType, setActiveType] = useState("ALL");

  const filtered = activeType === "ALL"
    ? projects
    : projects.filter((p) => p.type === activeType);

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
            {filtered.map((p) => (
              <ScrollReveal key={p.slug} className="stagger">
                <Link
                  href={`/projects/${p.slug}`}
                  className="group relative overflow-hidden rounded-lg aspect-3/4 cursor-pointer block"
                >
                  <img
                    src={p.img}
                    alt={`${p.name} — ${p.type.toLowerCase()} project in ${p.location}`}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
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
                      <span className="font-(--font-space-mono) text-[9px] tracking-[0.2em] text-[#c7f300] opacity-0 group-hover:opacity-100 transition-opacity">
                        VIEW CASE STUDY →
                      </span>
                    </div>
                  </div>
                </Link>
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
    </>
  );
}
