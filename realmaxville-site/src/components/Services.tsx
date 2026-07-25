"use client";
import ScrollReveal from "./ScrollReveal";

const services = [
  { icon: "architecture", title: "Architectural Design", desc: "Modern & functional design solutions tailored to your unique lifestyle." },
  { icon: "construction", title: "Construction", desc: "Quality construction with precision engineering and high-end finishes." },
  { icon: "format_paint", title: "Interior Design", desc: "Elegant and creative interior spaces that balance aesthetics and comfort." },
  { icon: "home_repair_service", title: "Renovation", desc: "Transforming existing spaces with contemporary experience and style." },
  { icon: "engineering", title: "General Contracting", desc: "Complete contracting solutions from groundbreaking to the final walkthrough." },
  { icon: "manage_accounts", title: "Project Management", desc: "Efficient project oversight ensuring timelines and budgets are perfectly managed." },
];

const iconPaths: Record<string, React.ReactNode> = {
  architecture: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21l9-18 9 18M6.5 14.5h11" />,
  construction: <><rect x="2" y="14" width="20" height="7" rx="1" /><path d="M5 14V9a1 1 0 011-1h12a1 1 0 011 1v5" /><path d="M9 8V5a1 1 0 011-1h4a1 1 0 011 1v3" /></>,
  format_paint: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />,
  home_repair_service: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />,
  engineering: <><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" /><line x1="9" y1="3" x2="9" y2="18" /><line x1="15" y1="6" x2="15" y2="21" /></>,
  manage_accounts: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" /></>,
};

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
            <div className="pt-8 space-y-2">
              <p className="italic text-[#b0b3b4] text-sm">&quot;The Realmaxville Team&quot;</p>
              <p className="font-(--font-space-mono) text-[11px] tracking-[0.2em] text-[#b0b3b4]">FOUNDER &amp; CEO</p>
            </div>
          </ScrollReveal>
        </div>

        {/* Service cards — 2-col grid */}
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} className="stagger">
              <div
                className={`glass p-10 space-y-5 hover:bg-white/5 transition-all group cursor-pointer ${
                  i === 2 ? "border-b-2 border-[#c7f300]" : ""
                }`}
              >
                <svg className="w-8 h-8 text-[#c7f300]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  {iconPaths[s.icon]}
                </svg>
                <h3 className="text-[20px] font-semibold uppercase tracking-wider">{s.title}</h3>
                <p className="text-[#b0b3b4] text-sm leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
