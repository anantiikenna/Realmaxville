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
    <section className="py-32 bg-[#0e0e0e] overflow-hidden" aria-labelledby="projects-heading">
      <div className="site-container space-y-16">
        <ScrollReveal>
          <div className="text-center space-y-4">
            <h2 id="projects-heading" className="text-3xl md:text-[32px] font-bold uppercase tracking-tight">
              OUR FEATURED PROJECTS
            </h2>
            <div className="w-24 h-1 bg-[#c7f300] mx-auto" aria-hidden="true" />
          </div>
        </ScrollReveal>

        <ScrollReveal className="stagger">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {projects.map((p) => (
              <Link
                key={p.name}
                href={`/projects/${p.slug}`}
                className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer block"
              >
                <img
                  src={p.img}
                  alt={`${p.name} — ${p.type.toLowerCase()} project in ${p.location}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <p className="text-[#c7f300] font-(--font-space-mono) text-[10px] tracking-[0.2em]">{p.type}</p>
                  <h4 className="text-lg font-bold mt-2 group-hover:text-[#c7f300] transition-colors">{p.name}</h4>
                  <div className="flex justify-between items-center mt-4 border-t border-white/10 pt-4">
                    <span className="text-xs text-[#b0b3b4]">{p.location} &bull; {p.year}</span>
                    <svg className="w-4 h-4 text-[#c7f300] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
            className="border border-[#c7f300] text-[#c7f300] px-12 py-4 rounded-full font-(--font-space-mono) text-[11px] tracking-[0.2em] uppercase hover:bg-[#c7f300] hover:text-[#171e00] transition-all inline-block"
          >
            VIEW ALL PROJECTS
          </Link>
        </div>
      </div>
    </section>
  );
}
