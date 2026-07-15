"use client";
import React from "react";
import ScrollReveal from "./ScrollReveal";

const ServiceIcon = ({ id }: { id: number }): React.ReactElement | null => {
  const icons: Record<number, React.ReactElement> = {
    1: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M3 21l9-18 9 18M6.5 14.5h11" />
        <path d="M9 3h6M12 3v4" />
      </svg>
    ),
    2: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="2" y="14" width="20" height="7" rx="1" />
        <path d="M5 14V9a1 1 0 011-1h12a1 1 0 011 1v5" />
        <path d="M9 8V5a1 1 0 011-1h4a1 1 0 011 1v3" />
        <line x1="12" y1="8" x2="12" y2="14" />
        <line x1="7" y1="14" x2="7" y2="21" />
        <line x1="17" y1="14" x2="17" y2="21" />
      </svg>
    ),
    3: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    4: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    5: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
        <line x1="9" y1="3" x2="9" y2="18" />
        <line x1="15" y1="6" x2="15" y2="21" />
      </svg>
    ),
    6: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
  };
  return icons[id] ?? null;
};

const services = [
  { id: 1, title: "Architectural Design", desc: "Modern & functional design solutions tailored to your unique lifestyle.", mod: "MOD_01" },
  { id: 2, title: "Construction", desc: "Quality construction with precision engineering and high-end finishes.", mod: "MOD_02" },
  { id: 3, title: "Interior Design", desc: "Elegant and creative interior spaces that balance aesthetics and comfort.", mod: "MOD_03" },
  { id: 4, title: "Renovation", desc: "Transforming existing spaces with contemporary experience and style.", mod: "MOD_04" },
  { id: 5, title: "Site Planning", desc: "Expert site planning services to suit a wide variety of client demands.", mod: "MOD_05" },
  { id: 6, title: "Geophysical Surveys", desc: "Sub-surface investigations to aid constructions properly.", mod: "MOD_06" },
];

export default function Services() {
  return (
    <section className="section-inner" style={{ paddingTop: "8rem", paddingBottom: "8rem" }} id="services" aria-labelledby="services-heading">
      <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3 md:sticky md:top-32 space-y-8 self-start">
          <ScrollReveal>
            <div className="flex items-center gap-2">
              <div className="w-12 h-px bg-[#c7f300]" aria-hidden="true" />
              <span className="font-(--font-space-mono) text-xs tracking-[0.2em] text-[#c7f300]">OUR SERVICES</span>
            </div>
            <h2 id="services-heading" className="text-4xl md:text-[48px] font-extrabold leading-tight mt-4">
              ARCHITECTURE &<br />CONSTRUCTION
            </h2>
            <p className="text-[#b0b3b4] mt-4 leading-relaxed">
              We are a full-service architecture and construction company delivering innovative designs, superior construction and exceptional project management solutions.
            </p>
            <div className="pt-8 space-y-2">
              <p className="italic text-[#b0b3b4] text-sm">&quot;The Realmaxville Team&quot;</p>
              <p className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-outline">ARCHITECTURE & CONSTRUCTION</p>
            </div>
          </ScrollReveal>
        </div>

        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollReveal className="stagger">
            {services.map((s) => (
              <div
                key={s.title}
                className="relative glass-panel p-8 md:p-10 space-y-5 transition-all duration-300 group cursor-pointer overflow-hidden
                  hover:bg-white/5 hover:border-[#c7f300]/30 hover:shadow-[0_0_24px_rgba(199,243,0,0.06)]"
              >
                {/* left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#c7f300]/0 group-hover:bg-[#c7f300]/60 transition-all duration-300 rounded-r" aria-hidden="true" />
                {/* bottom shimmer line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-[#c7f300]/0 group-hover:via-[#c7f300]/30 to-transparent transition-all duration-500" aria-hidden="true" />

                <div className="flex justify-between items-start">
                  <span
                    className="w-12 h-12 rounded-xl bg-[#c7f300]/8 border border-[#c7f300]/20 flex items-center justify-center text-[#c7f300] group-hover:bg-[#c7f300]/15 group-hover:border-[#c7f300]/40 group-hover:shadow-[0_0_12px_rgba(199,243,0,0.15)] transition-all duration-300"
                    aria-hidden="true"
                  >
                    <ServiceIcon id={s.id} />
                  </span>
                  <span className="bg-[#c7f300]/10 border border-[#c7f300]/30 px-3 py-1 rounded text-[#c7f300] font-(--font-space-mono) text-[10px] tracking-[0.2em]">
                    {s.mod}
                  </span>
                </div>
                <h3 className="font-(--font-space-mono) text-sm tracking-[0.15em] uppercase group-hover:text-[#c7f300] transition-colors">
                  {s.title}
                </h3>
                <p className="text-[#b0b3b4] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
