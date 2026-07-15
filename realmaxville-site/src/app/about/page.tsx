import type { Metadata } from "next";
import About from "@/components/About";
import Team from "@/components/Team";
import Stats from "@/components/Stats";

export const metadata: Metadata = {
  title: "About Us — Realmaxville",
  description:
    "Learn about Realmaxville, a next-generation construction company established in 2017, delivering architectural design, construction and renovation services across Nigeria.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative pt-32 pb-20 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 data-grid-bg opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c7f300]/5 blur-[120px] rounded-full" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-12 bg-[#c7f300]" />
            <span className="font-[var(--font-space-mono)] text-xs tracking-[0.3em] text-[#c7f300]">WHO WE ARE</span>
            <div className="h-px w-12 bg-[#c7f300]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold uppercase leading-none">
            ABOUT <span className="text-[#c7f300] neon-text-glow">REALMAXVILLE</span>
          </h1>
          <p className="mt-6 text-[#c4c7c7] max-w-2xl mx-auto text-lg leading-relaxed">
            A goal-oriented construction, structural and architectural company with a
            passion for satisfying our clients with rich innovation and value creation.
          </p>
        </div>
      </section>

      <About />
      <Stats />
      <Team />

      {/* CTA */}
      <section className="py-32 px-6 md:px-16 bg-[#0e0e0e]">
        <div className="max-w-[1440px] mx-auto">
          <div className="relative overflow-hidden rounded-[3rem] p-16 md:p-24 border border-white/5 flex flex-col items-center text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#c7f300]/10 via-transparent to-[#00dbe9]/10 opacity-30" />
            <div className="absolute inset-0 blueprint-grid opacity-20" />
            <h2 className="text-3xl md:text-5xl font-extrabold relative z-10 max-w-2xl mb-8 uppercase leading-tight">
              READY TO BUILD YOUR <span className="text-[#c7f300] neon-text-glow">ARCHITECTURAL LEGACY?</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-5 relative z-10">
              <a
                href="/contact"
                className="bg-[#c7f300] text-[#171e00] px-12 py-5 rounded-full font-[var(--font-space-mono)] text-xs tracking-[0.2em] uppercase font-bold hover:shadow-[0_0_20px_rgba(199,243,0,0.3)] transition-all active:scale-95"
              >
                REQUEST A QUOTE
              </a>
              <a
                href="/contact"
                className="glass-panel border border-white/10 text-white px-12 py-5 rounded-full font-[var(--font-space-mono)] text-xs tracking-[0.2em] uppercase hover:bg-white/5 transition-all"
              >
                BOOK CONSULTATION
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
