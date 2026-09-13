"use client";
import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { CurrencyProvider, useCurrency } from "@/lib/currency-context";
import type { Design } from "@/lib/designs-data";

function DesignDetail({ design }: { design: Design }) {
  const { formatPrice, currency } = useCurrency();
  const [loading, setLoading] = useState(false);

  const handlePurchase = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          designSlug: design.slug,
          designName: design.name,
          dodoProductId: design.dodoProductId,
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Something went wrong. Please try again or contact us on WhatsApp.");
      }
    } catch {
      alert("Something went wrong. Please try again or contact us on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const whatsappMsg = encodeURIComponent(
    `Hi, I'm interested in the "${design.name}" design priced at ${formatPrice(design.priceUSD)}. Can you share the full details?`
  );

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden" aria-labelledby="design-heading">
        <div className="absolute inset-0">
          <img src={design.cover} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-[#050505]/60 to-[#050505]/30" />
          <div className="absolute inset-0 bg-linear-to-r from-[#050505]/80 via-transparent to-transparent" />
        </div>

        <div className="section-inner relative z-10 pb-12 md:pb-16 pt-32">
          <Link
            href="/designs"
            className="inline-flex items-center gap-2 font-(--font-space-mono) text-[10px] tracking-[0.2em] text-[#FFD700]/70 hover:text-[#FFD700] transition-colors uppercase mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            ALL DESIGNS
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <span className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-[#FFD700] bg-[#FFD700]/10 border border-[#FFD700]/25 px-3 py-1 rounded-full inline-block mb-4">
                {design.type}
              </span>
              <h1
                id="design-heading"
                className="font-extrabold uppercase leading-[0.9] tracking-[-0.04em] mb-4"
                style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
              >
                {design.name}
              </h1>
              <p className="text-[#b0b3b4] text-base md:text-lg max-w-xl">
                {design.description}
              </p>
            </div>

            {/* Price card */}
            <div className="glass-panel cyber-border rounded-lg p-6 md:p-8 w-full lg:w-80 shrink-0">
              <span className="font-(--font-space-mono) text-[9px] tracking-[0.2em] text-[#FFD700]/60 block mb-2">
                PRICE
              </span>
              <div className="text-3xl md:text-4xl font-extrabold text-[#FFD700] mb-4">
                {formatPrice(design.priceUSD)}
              </div>
              {currency === "NGN" && (
                <p className="text-[#b0b3b4] text-xs mb-4">≈ ${design.priceUSD.toLocaleString()} USD</p>
              )}
              <button
                onClick={handlePurchase}
                disabled={loading}
                className="btn-cta glow-hover w-full justify-center mb-3 disabled:opacity-50"
              >
                {loading ? "PROCESSING..." : "PURCHASE DESIGN"}
              </button>
              <a
                href={`https://wa.me/2348080419259?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full h-12 rounded-full border border-white/10 text-[#b0b3b4] hover:border-[#FFD700]/40 hover:text-[#FFD700] transition-all text-[11px] font-(--font-space-mono) tracking-[0.15em] uppercase"
              >
                Questions? Chat with us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Specs + Features */}
      <section className="py-24 md:py-32" aria-labelledby="specs-heading">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-8">
              <ScrollReveal>
                <h2 id="specs-heading" className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">
                  DESIGN OVERVIEW
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <p className="text-[#b0b3b4] leading-relaxed text-base md:text-lg">
                  {design.description}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-[#b0b3b4] leading-relaxed text-sm md:text-base">
                  {design.details}
                </p>
              </ScrollReveal>

              {/* Features */}
              <ScrollReveal delay={300}>
                <h3 className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-[#FFD700] uppercase mb-4">
                  Key Features
                </h3>
                <div className="flex flex-wrap gap-3">
                  {design.features.map((f) => (
                    <span
                      key={f}
                      className="px-4 py-2 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/20 text-[#FFD700] text-sm font-medium"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar specs */}
            <aside>
              <ScrollReveal>
                <div className="glass-panel rounded-lg cyber-border p-8 space-y-6 md:sticky md:top-32">
                  <h3 className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-[#FFD700] uppercase">
                    Specifications
                  </h3>
                  {[
                    ...(design.beds > 0 ? [{ label: "Bedrooms", value: `${design.beds}` }] : []),
                    { label: "Bathrooms", value: `${design.baths}` },
                    { label: "Area", value: design.area },
                    { label: "Type", value: design.type },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-baseline border-b border-white/5 pb-3">
                      <span className="text-[#b0b3b4] text-sm">{item.label}</span>
                      <span className="text-[#e5e2e1] text-sm font-medium">{item.value}</span>
                    </div>
                  ))}
                  <button
                    onClick={handlePurchase}
                    disabled={loading}
                    className="btn-cta glow-hover w-full justify-center disabled:opacity-50"
                  >
                    {loading ? "PROCESSING..." : "PURCHASE DESIGN"}
                  </button>
                </div>
              </ScrollReveal>
            </aside>
          </div>
        </div>
      </section>

      {/* Floor plan */}
      <section className="py-24 md:py-32 bg-surface-container-lowest" aria-labelledby="floorplan-heading">
        <div className="section-inner flex flex-col items-center gap-8">
          <ScrollReveal>
            <h2 id="floorplan-heading" className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-center">
              FLOOR PLAN
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="w-full max-w-4xl rounded-xl overflow-hidden border border-white/10">
              <img
                src={design.floorPlan}
                alt={`${design.name} floor plan`}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* More designs */}
      <section className="py-24 md:py-32" aria-label="More designs">
        <div className="section-inner flex flex-col items-center gap-6 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">
              EXPLORE MORE <span className="text-[#FFD700]">DESIGNS</span>
            </h2>
            <Link
              href="/designs"
              className="inline-flex items-center gap-2 text-[#FFD700] hover:scale-105 transition-transform font-(--font-space-mono) text-[11px] tracking-[0.15em] uppercase mt-4"
            >
              View All Designs
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

export default function DesignDetailClient({ design }: { design: Design }) {
  return (
    <CurrencyProvider>
      <DesignDetail design={design} />
    </CurrencyProvider>
  );
}
