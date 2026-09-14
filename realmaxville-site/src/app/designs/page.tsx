"use client";
import { useState } from "react";
import { designs } from "@/lib/designs-data";
import DesignCard from "@/components/DesignCard";
import ScrollReveal from "@/components/ScrollReveal";
import { CurrencyProvider } from "@/lib/currency-context";

const filters = ["ALL", "RESIDENTIAL", "COMMERCIAL", "MIXED-USE"] as const;

export default function DesignsPage() {
  const [active, setActive] = useState<string>("ALL");

  const filtered = active === "ALL" ? designs : designs.filter((d) => d.type === active);

  return (
    <CurrencyProvider>
      <div className="min-h-screen">
        {/* Hero */}
        <section className="page-hero data-grid-bg" aria-labelledby="designs-heading">
          <div className="section-inner flex flex-col items-center gap-6 text-center">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-px bg-[#FFD700]" aria-hidden="true" />
                <span className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-[#FFD700] uppercase">
                  Ready to Build
                </span>
                <div className="w-12 h-px bg-[#FFD700]" aria-hidden="true" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1
                id="designs-heading"
                className="font-extrabold uppercase leading-[0.9] tracking-[-0.04em]"
                style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)" }}
              >
                DESIGN <span className="text-[#FFD700]">COLLECTION</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-[#b0b3b4] text-base md:text-lg max-w-2xl leading-relaxed">
                Browse our curated collection of architectural plans. Each design is
                crafted by our team and ready for construction. Purchase, download, and
                start building today.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Filter bar */}
        <section className="py-8 border-b border-white/5" aria-label="Filter designs">
          <div className="section-inner">
            <ScrollReveal>
              <div className="flex flex-wrap justify-center gap-3">
                {filters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActive(f)}
                    className={`font-(--font-space-mono) text-[11px] tracking-[0.15em] uppercase px-5 py-2.5 rounded-full border transition-all ${
                      active === f
                        ? "bg-[#FFD700] text-[#1a1200] border-[#FFD700] font-bold"
                        : "bg-transparent text-[#b0b3b4] border-white/10 hover:border-[#FFD700]/40 hover:text-[#FFD700]"
                    }`}
                  >
                    {f === "ALL" ? "All Designs" : f}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Design grid */}
        <section className="py-24 md:py-32" aria-label="Designs">
          <div className="section-inner">
            {filtered.length === 0 ? (
              <p className="text-center text-[#b0b3b4]">No designs found.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((design, i) => (
                  <ScrollReveal key={design.slug} delay={i * 100}>
                    <DesignCard design={design} />
                  </ScrollReveal>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Trust banner */}
        <section className="py-24 md:py-32 bg-surface-container-lowest" aria-label="Why purchase from us">
          <div className="section-inner">
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "PROFESSIONAL GRADE",
                    desc: "Every design is created by licensed architects and structural engineers.",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    ),
                  },
                  {
                    title: "INSTANT DELIVERY",
                    desc: "Receive your complete plan set via email immediately after purchase.",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    ),
                  },
                  {
                    title: "BUILD-READY",
                    desc: "Plans include all necessary details for contractors to begin construction.",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                    ),
                  },
                ].map((item) => (
                  <div key={item.title} className="flex flex-col items-center text-center gap-4 p-8 glass-card rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-[#FFD700]/10 flex items-center justify-center text-[#FFD700]">
                      {item.icon}
                    </div>
                    <h3 className="font-(--font-space-mono) text-[11px] tracking-[0.2em] text-[#FFD700] uppercase">
                      {item.title}
                    </h3>
                    <p className="text-[#b0b3b4] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32" aria-label="Need a custom design">
          <div className="section-inner text-center flex flex-col items-center gap-6">
            <ScrollReveal>
              <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight">
                NEED A <span className="text-[#FFD700]">CUSTOM DESIGN</span>?
              </h2>
              <p className="text-[#b0b3b4] text-base max-w-xl mx-auto mt-4">
                Can&apos;t find what you&apos;re looking for? Our team can create a bespoke design
                tailored to your exact specifications.
              </p>
              <a
                href="https://wa.me/2348080419259?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20custom%20architectural%20design."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta glow-hover mt-4"
              >
                DISCUSS A CUSTOM DESIGN
              </a>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </CurrencyProvider>
  );
}
