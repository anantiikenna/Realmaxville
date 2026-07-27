"use client";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    id: "01",
    title: "Consultation",
    desc: "Understanding your needs, vision and budget constraints.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />,
  },
  {
    id: "02",
    title: "Design",
    desc: "Conceptualizing and planning with architectural precision.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />,
  },
  {
    id: "03",
    title: "Development",
    desc: "Engineering and approvals for a seamless workflow.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />,
  },
  {
    id: "04",
    title: "Construction",
    desc: "Building with extreme quality and high-end materials.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
  },
  {
    id: "05",
    title: "Delivery",
    desc: "On-time handover and client satisfaction guaranteed.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />,
  },
];

export default function Process() {
  return (
    <section className="py-36 md:py-40 site-container overflow-hidden" aria-labelledby="process-heading">
      <div className="flex flex-col gap-16">
        <ScrollReveal>
          <div className="space-y-4">
            <div className="flex items-center gap-2" aria-hidden="true">
              <div className="w-12 h-px bg-[#c7f300]" />
              <span className="font-(--font-space-mono) text-[11px] tracking-[0.2em] text-[#c7f300] uppercase">How We Work</span>
            </div>
            <h2 id="process-heading" className="text-3xl md:text-[32px] font-bold uppercase tracking-tight">
              OUR CONSTRUCTION PROCESS
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal className="stagger">
          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Timeline line — exactly 48px from top (midpoint of 96px circle) */}
            <div className="absolute top-[48px] left-0 right-0 h-px bg-white/10 hidden md:block z-0" aria-hidden="true" />
            {/* Steps */}
            {steps.map((step) => (
              <article key={step.id} className="relative z-10 space-y-6">
                <div className="glass w-24 h-24 rounded-full border border-[#c7f300]/30 flex items-center justify-center mx-auto md:mx-0 glow-hover transition-all">
                  <svg className="w-10 h-10 text-[#c7f300]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    {step.icon}
                  </svg>
                </div>
                <div className="text-center md:text-left space-y-2">
                  <span className="font-(--font-space-mono) text-[11px] tracking-[0.2em] text-[#c7f300]">{step.id}</span>
                  <h4 className="text-[20px] font-semibold uppercase">{step.title}</h4>
                  <p className="text-[#b0b3b4] text-sm">{step.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
