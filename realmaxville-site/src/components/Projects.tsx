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
    <section className="py-32 bg-surface-container-lowest overflow-hidden" aria-labelledby="projects-heading">
      <div className="section-inner space-y-16">
        <ScrollReveal>
          <div className="text-center space-y-4">
            <h2 id="projects-heading" className="text-3xl md:text-[32px] font-bold uppercase tracking-tight leading-[1.2]">
              OUR FEATURED PROJECTS
            </h2>
            <div className="w-24 h-1 bg-[#c7f300] mx-auto" aria-hidden="true" />
          </div>
        </ScrollReveal>

        <ScrollReveal className="stagger">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {projects.map((p) => (
              <Link
                key={p.name}
                href={`/projects/${p.slug}`}
                className="group relative overflow-hidden rounded-xl border border-white/5 hover:border-[#c7f300]/40 aspect-3/4 cursor-pointer block transition-all"
              >
                <img
                  src={p.img}
                  alt={`${p.name} — ${p.type.toLowerCase()} project in ${p.location}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent opacity-85" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <p className="text-[#c7f300] font-(--font-space-mono) text-[11px] tracking-[0.2em] uppercase">{p.type}</p>
                  <h4 className="text-lg font-bold mt-2 leading-snug text-white group-hover:text-[#c7f300] transition-colors">{p.name}</h4>
                  <div className="flex justify-between items-center mt-4 border-t border-white/10 pt-4">
                    <span className="text-xs text-[#b0b3b4]">{p.location} &bull; {p.year}</span>
                    <svg className="w-4 h-4 text-[#c7f300] opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>

        <div className="text-center pt-8">
          <Link
            href="/projects"
            className="border border-[#c7f300] text-[#c7f300] px-12 py-4 rounded-full font-(--font-space-mono) text-[11px] tracking-[0.2em] uppercase hover:bg-[#c7f300] hover:text-on-accent transition-all inline-block"
          >
            VIEW ALL PROJECTS
          </Link>
        </div>
      </div>
    </section>
  );
}
