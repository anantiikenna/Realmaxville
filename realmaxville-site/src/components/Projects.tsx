"use client";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const projects = [
  { slug: "mrs-margaret", name: "Mrs Margaret", location: "Lagos, Nigeria", type: "RESIDENTIAL", year: "2023", img: "/images/projects/mrs-margaret.jpg" },
  { slug: "blocks-of-flat", name: "Blocks of Flat", location: "Lagos, Nigeria", type: "MULTI-FAMILY", year: "2024", img: "/images/projects/blocks-of-flat.jpg" },
  { slug: "double-face-home", name: "Double Face Home", location: "Lagos, Nigeria", type: "RESIDENTIAL", year: "2023", img: "/images/projects/double-face-home.jpg" },
  { slug: "transient-hospital", name: "Transient Hospital", location: "Enugu, Nigeria", type: "HEALTHCARE", year: "2022", img: "/images/projects/transient-hospital.jpg" },
];

export default function Projects() {
  return (
    <section style={{ padding: "8rem 0", backgroundColor: "#0e0e0e", overflow: "hidden" }} aria-labelledby="projects-heading">
      <div className="section-inner" style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
        <ScrollReveal>
          <div style={{ textAlign: "center" }}>
            <h2 id="projects-heading" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.02em", marginBottom: "1rem" }}>
              OUR FEATURED PROJECTS
            </h2>
            <div style={{ width: 96, height: 4, backgroundColor: "#c7f300", margin: "0 auto" }} aria-hidden="true" />
          </div>
        </ScrollReveal>

        <ScrollReveal className="stagger">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((p) => (
              <Link
                key={p.name}
                href={`/projects/${p.slug}`}
                className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer block border border-white/5"
              >
                <img
                  src={p.img}
                  alt={`${p.name} - ${p.type} project in ${p.location}`}
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent opacity-85 group-hover:opacity-70 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <p className="text-[#c7f300] font-(--font-space-mono) text-[9px] tracking-[0.2em] uppercase">{p.type}</p>
                  <h4 className="text-lg md:text-xl font-bold mt-1 uppercase leading-tight group-hover:text-[#c7f300] transition-colors">{p.name}</h4>
                  <div className="flex justify-between items-center mt-3 border-t border-white/10 pt-3">
                    <span className="text-[11px] text-[#b0b3b4]">{p.location} - {p.year}</span>
                    <svg className="w-4 h-4 text-[#c7f300] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>

        <div style={{ textAlign: "center" }}>
          <Link
            href="/projects"
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", border: "1px solid #c7f300", color: "#c7f300", padding: "1rem 3rem", borderRadius: 9999, fontFamily: "var(--font-space-mono)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", background: "transparent", cursor: "pointer", transition: "all 0.2s", textDecoration: "none" }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#c7f300"; (e.currentTarget as HTMLAnchorElement).style.color = "#171e00"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = "#c7f300"; }}
          >
            VIEW ALL PROJECTS
          </Link>
        </div>
      </div>
    </section>
  );
}
