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
      <section className="page-hero" aria-labelledby="about-heading">
        <div className="absolute inset-0 data-grid-bg opacity-30" aria-hidden="true" />
        <div
          className="absolute rounded-full"
          aria-hidden="true"
          style={{
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: 800, height: 800,
            background: "radial-gradient(circle, rgba(199,243,0,0.06), transparent 70%)",
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />
        <div className="section-inner relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-6" aria-hidden="true">
            <div className="h-px w-12 bg-[#c7f300]" />
            <span className="font-(--font-space-mono) text-[10px] tracking-[0.3em] text-[#c7f300]">
              WHO WE ARE
            </span>
            <div className="h-px w-12 bg-[#c7f300]" />
          </div>
          <h1
            id="about-heading"
            className="font-extrabold uppercase leading-none tracking-[-0.02em]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
          >
            ABOUT <span className="neon-text-glow text-[#c7f300]">REALMAXVILLE</span>
          </h1>
          <p className="mt-6 text-[#b0b3b4] max-w-xl mx-auto text-lg leading-relaxed">
            A goal-oriented construction, structural and architectural company with a
            passion for satisfying our clients with rich innovation and value creation.
          </p>
        </div>
      </section>

      <About />
      <Stats />

      {/* Bento Mission / Vision / Values */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#0e0e0e" }} aria-labelledby="mission-heading">
        <div className="section-inner">
          <div className="flex items-center gap-3 mb-12" aria-hidden="true">
            <div className="h-px w-12 bg-[#c7f300]" />
            <span className="font-(--font-space-mono) text-[10px] tracking-[0.3em] text-[#c7f300]">OUR PILLARS</span>
          </div>
          <h2 id="mission-heading" className="sr-only">Mission, Vision &amp; Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Mission — tall card */}
            <div className="glass-panel cyber-border rounded-lg p-8 md:row-span-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-br from-[#c7f300]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#c7f300]/10 border border-[#c7f300]/20 flex items-center justify-center" aria-hidden="true">
                    <svg className="w-5 h-5 text-[#c7f300]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-[#c7f300] uppercase">Mission</span>
                </div>
                <p className="text-[#b0b3b4] leading-relaxed text-base flex-1">
                  To deliver exceptional architectural and construction solutions that exceed client expectations, combining innovative design with uncompromising quality and sustainability.
                </p>
                <div className="mt-8 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#c7f300] pulse-active" aria-hidden="true" />
                    <span className="font-(--font-space-mono) text-[9px] tracking-widest text-[#c7f300]/60">ACTIVE COMMITMENT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="glass-panel cyber-border rounded-lg p-8 relative overflow-hidden group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#00dbe9]/10 border border-[#00dbe9]/20 flex items-center justify-center" aria-hidden="true">
                  <svg className="w-5 h-5 text-[#00dbe9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <span className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-[#00dbe9] uppercase">Vision</span>
              </div>
              <p className="text-[#b0b3b4] text-sm leading-relaxed">
                To be West Africa&apos;s most trusted name in architectural innovation and construction excellence.
              </p>
            </div>

            {/* Values */}
            <div className="glass-panel cyber-border rounded-lg p-8 relative overflow-hidden group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#ff6b35]/10 border border-[#ff6b35]/20 flex items-center justify-center" aria-hidden="true">
                  <svg className="w-5 h-5 text-[#ff6b35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-[#ff6b35] uppercase">Values</span>
              </div>
              <p className="text-[#b0b3b4] text-sm leading-relaxed">
                Integrity, precision, innovation and client-first commitment at every stage.
              </p>
            </div>

            {/* Stats mini grid — spans 2 cols */}
            <div className="md:col-span-2 glass-panel cyber-border rounded-lg p-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[
                  { num: "6+", label: "Years" },
                  { num: "200+", label: "Projects" },
                  { num: "50+", label: "Clients" },
                  { num: "100%", label: "Satisfaction" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <span className="text-2xl md:text-3xl font-extrabold text-[#c7f300] neon-text-glow">{s.num}</span>
                    <span className="font-(--font-space-mono) text-[9px] tracking-[0.2em] text-[#b0b3b4] block mt-1 uppercase">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Team />

      {/* CTA */}
      <section className="py-32" style={{ backgroundColor: "#0e0e0e" }} aria-labelledby="cta-heading">
        <div className="section-inner">
          <div className="relative overflow-hidden rounded-[3rem] p-12 md:p-20 border border-white/6 text-center">
            <div className="absolute inset-0 blueprint-grid opacity-20" aria-hidden="true" />
            <div className="absolute inset-0 bg-linear-to-br from-[#c7f300]/8 via-transparent to-[#00dbe9]/8" aria-hidden="true" />
            <h2
              id="cta-heading"
              className="relative z-10 font-extrabold uppercase leading-tight max-w-lg mx-auto mb-8"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              READY TO BUILD YOUR{" "}
              <span className="neon-text-glow text-[#c7f300]">ARCHITECTURAL LEGACY?</span>
            </h2>
            <div className="relative z-10 flex flex-wrap justify-center gap-5">
              <a href="/contact" className="btn-cta h-14 px-10">
                REQUEST A QUOTE
              </a>
              <a
                href="/contact"
                className="glass-panel inline-flex items-center justify-center h-14 px-10 rounded-full border border-white/15 text-[#e5e2e1] text-[11px] tracking-[0.2em] uppercase transition-all hover:bg-white/8 hover:border-white/35"
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
