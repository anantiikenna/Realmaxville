"use client";
import ScrollReveal from "./ScrollReveal";

const services = [
  { icon: "📐", title: "Architectural Design", desc: "Modern & functional design solutions tailored to your unique lifestyle.", mod: "MOD_01" },
  { icon: "🏗️", title: "Construction", desc: "Quality construction with precision engineering and high-end finishes.", mod: "MOD_02" },
  { icon: "🎨", title: "Interior Design", desc: "Elegant and creative interior spaces that balance aesthetics and comfort.", mod: "MOD_03" },
  { icon: "🔄", title: "Renovation", desc: "Transforming existing spaces with contemporary experience and style.", mod: "MOD_04" },
  { icon: "🗺️", title: "Site Planning", desc: "Expert site planning services to suit a wide variety of client demands.", mod: "MOD_05" },
  { icon: "🔬", title: "Geophysical Surveys", desc: "Sub-surface investigations to aid constructions properly.", mod: "MOD_06" },
];

export default function Services() {
  return (
    <section className="py-32 px-6 md:px-16 max-w-[1440px] mx-auto" id="services" aria-labelledby="services-heading">
      <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3 md:sticky md:top-32 space-y-8 self-start">
          <ScrollReveal>
            <div className="flex items-center gap-2">
              <div className="w-12 h-px bg-[#c7f300]" aria-hidden="true" />
              <span className="font-[var(--font-space-mono)] text-xs tracking-[0.2em] text-[#c7f300]">OUR SERVICES</span>
            </div>
            <h2 id="services-heading" className="text-4xl md:text-[48px] font-extrabold leading-tight mt-4">
              ARCHITECTURE &<br />CONSTRUCTION
            </h2>
            <p className="text-[#b0b3b4] mt-4 leading-relaxed">
              We are a full-service architecture and construction company delivering innovative designs, superior construction and exceptional project management solutions.
            </p>
            <div className="pt-8 space-y-2">
              <p className="italic text-[#b0b3b4] text-sm">&quot;Realmax Ville&quot;</p>
              <p className="font-[var(--font-space-mono)] text-[10px] tracking-[0.2em] text-[#8e9192]">FOUNDER & CEO</p>
            </div>
          </ScrollReveal>
        </div>

        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollReveal className="stagger">
            {services.map((s) => (
              <div key={s.title} className="glass-panel p-8 md:p-10 space-y-5 hover:bg-white/5 transition-all group cursor-pointer">
                <div className="flex justify-between items-start">
                  <span className="text-3xl" aria-hidden="true">{s.icon}</span>
                  <span className="bg-[#c7f300]/10 border border-[#c7f300]/30 px-3 py-1 rounded text-[#c7f300] font-[var(--font-space-mono)] text-[10px] tracking-[0.2em]">
                    {s.mod}
                  </span>
                </div>
                <h3 className="font-[var(--font-space-mono)] text-sm tracking-[0.15em] uppercase group-hover:text-[#c7f300] transition-colors">
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
