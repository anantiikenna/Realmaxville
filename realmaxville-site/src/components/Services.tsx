"use client";
import ScrollReveal from "./ScrollReveal";

const services = [
  { title: "Architectural Design", desc: "Modern & functional design solutions tailored to your unique lifestyle." },
  { title: "Construction", desc: "Quality construction with precision engineering and high-end finishes." },
  { title: "Interior Design", desc: "Elegant and creative interior spaces that balance aesthetics and comfort." },
  { title: "Renovation", desc: "Transforming existing spaces with contemporary experience and style." },
  { title: "General Contracting", desc: "Complete contracting solutions from groundbreaking to the final walkthrough." },
  { title: "Project Management", desc: "Efficient project oversight ensuring timelines and budgets are perfectly managed." },
];

const icons = [
  <path key="a" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21l9-18 9 18M6.5 14.5h11" />,
  <path key="b" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
  <path key="c" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />,
  <path key="d" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />,
  <path key="e" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />,
  <path key="f" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />,
];

export default function Services() {
  return (
    <section className="py-32 site-container" id="services" aria-labelledby="services-heading">
      <div className="flex flex-col md:flex-row gap-16 items-start">
        {/* Sidebar */}
        <div className="md:w-1/3 sticky top-32 space-y-6">
          <ScrollReveal>
            <div className="flex items-center gap-2">
              <div className="w-12 h-px bg-[#c7f300]" aria-hidden="true" />
              <span className="font-(--font-space-mono) text-[11px] tracking-[0.2em] text-[#c7f300] uppercase">Our Services</span>
            </div>
            <h2 id="services-heading" className="text-3xl md:text-[32px] font-bold leading-tight mt-4 tracking-tight">
              ARCHITECTURE &amp; CONSTRUCTION
            </h2>
            <p className="text-[#b0b3b4] mt-4 leading-relaxed">
              We are a full-service architecture and construction company delivering innovative designs, superior construction and exceptional project management solutions worldwide.
            </p>
            <div className="pt-8 space-y-4">
              <p className="italic text-[#b0b3b4] text-sm">&quot;James William&quot;</p>
              <p className="font-(--font-space-mono) text-[11px] tracking-[0.2em] text-[#b0b3b4]">FOUNDER &amp; CEO</p>
              <div className="flex items-center gap-4 cursor-pointer group">
                <div className="w-12 h-12 rounded-full border border-[#c7f300] flex items-center justify-center group-hover:bg-[#c7f300] transition-all">
                  <svg className="w-5 h-5 text-[#c7f300] group-hover:text-[#171e00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-4.197-2.42A1 1 0 009 9.616v4.768a1 1 0 001.555.832l4.197-2.348a1 1 0 000-1.7z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-(--font-space-mono) text-[11px] tracking-[0.2em] uppercase">Watch Our Story</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Service cards — 2-col grid */}
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`glass p-8 space-y-4 hover:bg-white/5 transition-all group cursor-pointer ${
                i === 2 ? "!border-[#c7f300]" : ""
              }`}
            >
              <svg className="w-7 h-7 text-[#c7f300]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {icons[i]}
              </svg>
              <h3 className="text-[20px] font-semibold uppercase tracking-wider">{s.title}</h3>
              <p className="text-[#b0b3b4] text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
