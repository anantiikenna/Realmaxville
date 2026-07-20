"use client";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function CallToAction() {
  return (
    <section className="section-inner" style={{ paddingTop: "4rem", paddingBottom: "8rem" }} aria-labelledby="cta-heading">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-lg glass-panel cyber-border px-8 py-16 md:px-20 md:py-24 text-center">
          <img
            src="/images/projects/kaduna-conference-center.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover grayscale opacity-25"
            loading="lazy"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
          <div className="relative z-10 mx-auto max-w-4xl">
            <h2 id="cta-heading" className="text-4xl md:text-[64px] font-extrabold leading-tight uppercase">
              LET&apos;S BUILD SOMETHING <br />
              <span className="text-[#c7f300] neon-text-glow">EXTRAORDINARY TOGETHER.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[#b0b3b4] leading-relaxed">
              Ready to turn your vision into a legacy? Connect with our team of designers, builders and project leads today.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
              <Link href="/contact" className="btn-cta glow-hover" style={{ height: "3.25rem", paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>
                REQUEST A QUOTE
                <svg style={{ width: 16, height: 16, marginLeft: 8 }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center"
                style={{
                  height: "3.25rem",
                  paddingLeft: "2.5rem",
                  paddingRight: "2.5rem",
                  borderRadius: 9999,
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: "#e5e2e1",
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                VIEW PROJECTS
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
