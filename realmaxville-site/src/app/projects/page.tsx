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
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2jGqUpwp8Fc-JKm0Z5fx1sgnzc3bld7-QNdh9beRC-_khhAJUKoFuQlRVTMmLr4kXjFeYoEHrzeMhRAOjiAJhOHdYPMua0Uc5k4BzLE1Bi1iuUZDtNgkIPJ5-KejMkPaVjxFq3hiRgHSP_N4oBViBoC8LC4doVEwrFRnei-5GoG99ouaHvzKeLm4WAEqpEz2vhq9pt1Ch52ERh2rwubtzGgPzW7TT9o3QbD_JJDSmxLNovgT0Wz3A-hLD716AT9o-FqkNaxAx4hkR",
  },
  {
    id: 2,
    name: "Blocks of Flat",
    location: "Lagos, Nigeria",
    type: "MULTI-FAMILY",
    year: "2024",
    area: "3,200 m²",
    description: "A modern multi-family residential development designed to optimize density without compromising on livability. Features shared amenity spaces, sustainable systems, and a facade that creates visual rhythm across the streetscape.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMlNWB6n0dn55bKNUO8roQf2S5tYfW7skX9qtfI1LcsLUZ0umBtZBEOd_DflnG3rvbvVRzznyS23NZPf_oveeI-8CN8smd-5Jfj3U84IALaeXDcx9TpW-joHuGNTJXJfRH484b1m6xQZcf6mUUmcVTTVcKc5pm9GTfQvzQuFB-ZN1XP9iq3c60QARPSsk5q8buK4YKkc22ylEKHgJltvQ0A3jkYu6wLYlQ-B-6Z8PcfhYBL8wxDEbv9KKCugnd1h3bwsLYCkIpbDMp",
  },
  {
    id: 3,
    name: "Double Face Home",
    location: "Lagos, Nigeria",
    type: "RESIDENTIAL",
    year: "2023",
    area: "380 m²",
    description: "An innovative dual-frontage residence that presents distinct architectural expressions on each street. The concept plays with the idea of a building having two personalities — formal and private — connected by a central courtyard.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuArrGgkgVhORjf9ZzeA50T-QPy1GFNoPNUI3j7lHqtRWsTlu7R6z7Z3_uHGuExD9lwHnT4SbsKY_jR76TU57Y-1K3Wxp4WsbDzE8xYXiWmGFaZNmr5wNz4pIAeEP4dvIGZ3fYDas0xqGeweDzkUgnU6BQmbaY8ARfioi-n2pCa12e_uHHN-b_94rAZ3EJDz_VNVOPrv0koiw9715PggWOUqSn4KXTsx6-kvfMKu6oZmmXIqO3_zx8cqYc7DYBm5me2A45lVg0ek5FGD",
  },
  {
    id: 4,
    name: "Transient Hospital",
    location: "Enugu, Nigeria",
    type: "HEALTHCARE",
    year: "2022",
    area: "1,800 m²",
    description: "A purpose-built healthcare facility designed for rapid deployment and efficient patient flow. The modular design allows for future expansion while maintaining operational efficiency and a healing environment for patients.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAoE4FIjdI8KBv9_VEiP9tPpRPvttSBFdOQinZv7SzdXzu-0K15cQwI-bAbQUqgLeT1BV3rPMExLn47LX7pgAqRpDOG_cFRHsPqa0RBIJhN-uuvbUeDEszvKMSpasp9s-S8jtOHtEFKAgRr6eLbIjKdNUvwVRkhosssOobELo6USsLDnc7sMP40SVyWtX22EyVuuAnd6avnBWdwOev_hBHMxsg7kE4PicKL8-GTP8S6cwbtrOC6SB6JIXzLqiCXAA1alkcNYMTeD8r",
  },
  {
    id: 5,
    name: "Kaduna Conference Center",
    location: "Kaduna, Nigeria",
    type: "COMMERCIAL",
    year: "2024",
    area: "2,500 m²",
    description: "A landmark commercial conference center featuring a dramatic cantilevered roof structure and expansive column-free interior spaces. The design incorporates local materials and passive cooling strategies suited to the regional climate.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBu45kVKDmSIoCp3soavUizte4gSji9JpIjkOsgTGv-twFzWGzWmOKd7jRFr167E7fpgto6u0V68B3cVTWduv2qNXNiI74K7eOYTXVu_KucmY3nop-WS9uYDT2Q6gY6_gZhcJCWPW3rAOdzfLjIPTugfMobZIYRfrMAQd1JpqHwnzSTn08u8euAlPk0rHvS8hdl1YJo6xoCh6DA4pmLCwH3mxTNg7SV1FC23ZiR-02VS6C4u2u8bFIPWEGRTkBWfYABd2snlfDdDWGP",
  },
  {
    id: 6,
    name: "Mabushi Villa",
    location: "Abuja, Nigeria",
    type: "RESIDENTIAL",
    year: "2023",
    area: "620 m²",
    description: "A luxurious villa nestled in Abuja's upscale Mabushi district. The design draws from traditional Nigerian compound living while embracing contemporary minimalism, featuring expansive gardens, a private pool, and smart home integration.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIThJcwosk8XV05bEvRJyCgsfLc04UZtqoxhaHn8b3iBDi-a405DG0nHIBgHAtca0rUdY7uHsYocltGwYXknpc6msQW-NYl-EsPvXhBKXkHNIpUTwIKnLR4TT0Y8ONe6NtKubhdhMCWjVCiKEDWYdRVzG_5szYq14EHD4wVEDeZNuonfYwBOihGCGRC6q0YMUJYaNKOtMSYL1wI-sMR2yRdYx945Oww9E0uDxwJ2B-eHsX50mnkzymxU5kgA52O7WW17Z48LlZWrzh",
  },
  {
    id: 7,
    name: "Danke Gott Project Jade",
    location: "Lagos, Nigeria",
    type: "RESIDENTIAL",
    year: "2024",
    area: "520 m²",
    description: "A premium residential development characterized by its jade-green tinted glass facade and organic architectural form. The building stands as a beacon of modern luxury with panoramic views and state-of-the-art finishes throughout.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxpNyTynTZN2F2tq8Cjf893i7wTX89aaBp7doFDQu48QL30GqlWHVE1jZwtf_5WAnHfw42ZaKceqAWI3cmI27D_hoK1ddBVzMRIBMeo0Hf89x6W_NMaw_pz8WKW8ch4rvmCIPteYQ0BLSYiUlgI2cQVHIUY5FS6zNKw1yVmZnYBUtZvykxjZfihYWAU78gsN5NvCz3JtVouN6x6BnydaCuOhTCfx7MeNwut6BbCWtuf7tXp_76VZs6fVFXlEwI8ABlO92o90RhdTPQ",
  },
  {
    id: 8,
    name: "Residential Apartment",
    location: "Lagos, Nigeria",
    type: "RESIDENTIAL",
    year: "2023",
    area: "280 m²",
    description: "A thoughtfully designed apartment building that maximizes limited urban space. Each unit features open-plan living, private balconies, and cross-ventilation. The facade uses a dynamic pattern of screens that filter light and provide privacy.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgrKZ1x7sluujZMQxej_ZRjlMnMAKEGmp9TPBsYaEeyPdnXUmFgCVLEh4z2ujyHMG08S9Fnk42tadTVTwRZU9BIGTjMJLlS0dKYXyjElz-OINHJv1sluwTZ8hlze3SLJRO-LgkvBQoy8Y0G7AUlRQ_yl-OcB4UbJmUYWFhvLEkakUGMRyypOsSwbqtv7ioa8M1eAX2vNtzHEQnRAo8LOBjWGP0Uj6nQatLtWMi_nRNRnX3gPogWmavv-QeKFMAM99GnkDQUWstaz-Q",
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
              <span className="font-[var(--font-space-mono)] text-[10px] tracking-[0.2em] text-[#c7f300] uppercase">
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
                    className="h-11 px-5 rounded-full font-[var(--font-space-mono)] text-[10px] tracking-[0.2em] uppercase transition-all duration-200 cursor-pointer"
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
                  className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer"
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
                      <span className="font-[var(--font-space-mono)] text-[9px] tracking-[0.2em] text-[#c7f300] bg-[#c7f300]/10 border border-[#c7f300]/25 px-2.5 py-0.5 rounded-full">
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
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
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
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#e5e2e1] hover:bg-[#c7f300] hover:text-[#171e00] hover:border-[#c7f300] transition-all cursor-pointer"
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
              <div className="absolute inset-0 bg-linear-to-t from-[#0e0e0e] via-transparent to-transparent" />
            </div>

            {/* Info */}
            <div className="p-8 md:p-10 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-[var(--font-space-mono)] text-[10px] tracking-[0.2em] text-[#c7f300] bg-[#c7f300]/10 border border-[#c7f300]/25 px-3 py-1 rounded-full">
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
                  className="h-11 px-6 rounded-full border border-white/15 text-[#b0b3b4] font-[var(--font-space-mono)] text-[10px] tracking-[0.2em] uppercase hover:border-[#c7f300]/40 hover:text-[#c7f300] transition-all cursor-pointer"
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
