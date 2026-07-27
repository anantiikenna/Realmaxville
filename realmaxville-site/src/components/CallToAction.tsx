"use client";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function CallToAction() {
  return (
    <section className="py-24 site-container" aria-labelledby="cta-heading">
      <ScrollReveal>
        <div className="relative rounded-lg glass p-12 md:p-24 text-center space-y-8 cyber-border overflow-hidden">
          {/* Large background icon — Draftsman compass */}
          <div className="absolute top-4 right-4 md:top-8 md:right-8 opacity-10" aria-hidden="true">
            <svg className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] text-[#c7f300]" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4m0 0l-5 16m5-16l5 16M7 16h10M12 6a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </div>

          <h2 id="cta-heading" className="relative z-10 font-extrabold leading-tight uppercase max-w-4xl mx-auto" style={{ fontSize: "clamp(2.8rem, 7vw, 4.5rem)" }}>
            LET&apos;S BUILD SOMETHING <br />
            <span className="text-[#c7f300]">EXTRAORDINARY TOGETHER.</span>
          </h2>
          <p className="relative z-10 text-[#b0b3b4] text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to turn your vision into a legacy? Connect with our team of innovators and engineers today.
          </p>
          <div className="relative z-10 flex flex-col md:flex-row justify-center gap-6 pt-8">
            <Link
              href="/contact"
              className="btn-cta glow-hover h-13 px-12 flex items-center justify-center gap-2"
            >
              REQUEST A QUOTE
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/projects"
              className="border border-white/30 text-white h-13 px-12 rounded-full font-(--font-space-mono) text-[11px] tracking-[0.2em] uppercase hover:bg-white/10 hover:border-white/60 transition-all flex items-center justify-center"
            >
              BOOK CONSULTATION
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
