"use client";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    id: "01",
    title: "Consultation",
    desc: "Deep dive into your vision, site constraints and feasibility.",
    icon: "M12 18h.01M9.5 15h5M8 11a4 4 0 118 0c0 1.7-1 2.6-2.2 3.4-.7.5-.8.9-.8 1.6h-2c0-1.4.5-2.3 1.7-3.1.9-.6 1.3-1 1.3-1.9a2 2 0 10-4 0H8z",
  },
  {
    id: "02",
    title: "Design",
    desc: "Architectural planning, drawings and material selections.",
    icon: "M4 20l4-1 10-10-3-3L5 16l-1 4zM14 6l3 3",
  },
  {
    id: "03",
    title: "Development",
    desc: "Structural engineering, costing and regulatory approvals.",
    icon: "M4 7h16M4 12h16M4 17h10",
  },
  {
    id: "04",
    title: "Construction",
    desc: "Precision builds with reliable site supervision and craft.",
    icon: "M3 21h18M6 21V10l6-5 6 5v11M9 21v-6h6v6",
  },
  {
    id: "05",
    title: "Delivery",
    desc: "Final inspection, commissioning and handover.",
    icon: "M15 7h3a3 3 0 110 6h-3M9 13H6a3 3 0 110-6h3M8 12l8-4",
  },
];

export default function Process() {
  return (
    <section className="section-inner" style={{ paddingTop: "8rem", paddingBottom: "8rem", overflow: "hidden" }} aria-labelledby="process-heading">
      <ScrollReveal>
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4" aria-hidden="true">
            <div className="h-px w-12 bg-[#c7f300]" />
            <span className="font-(--font-space-mono) text-[10px] tracking-[0.3em] text-[#c7f300] uppercase">Methodology</span>
            <div className="h-px w-12 bg-[#c7f300]" />
          </div>
          <h2 id="process-heading" className="text-4xl md:text-[48px] font-extrabold uppercase">
            OUR CONSTRUCTION PROCESS
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal className="stagger">
        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-[#c7f300]/45" aria-hidden="true" />
          {steps.map((step) => (
            <article key={step.id} className="relative z-10 text-center md:text-left space-y-5">
              <div className="mx-auto md:mx-0 w-24 h-24 rounded-full glass-panel border border-[#c7f300]/30 flex items-center justify-center glow-hover transition-all">
                <svg className="w-9 h-9 text-[#c7f300]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                </svg>
              </div>
              <div>
                <span className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-[#c7f300]">{step.id}</span>
                <h3 className="mt-2 text-lg font-bold uppercase">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#b0b3b4]">{step.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
