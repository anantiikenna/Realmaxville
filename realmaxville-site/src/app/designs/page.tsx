"use client";
import { useState } from "react";
import { designs } from "@/lib/designs-data";
import DesignCard from "@/components/DesignCard";
import ScrollReveal from "@/components/ScrollReveal";
import { CurrencyProvider } from "@/lib/currency-context";

const filters = ["ALL", "RESIDENTIAL", "COMMERCIAL", "MIXED-USE"] as const;

const faqs = [
  {
    q: "What do I get when I purchase an architectural design?",
    a: "You receive a complete set of architectural drawings including floor plans, elevations, sections, structural engineering plans, electrical wiring diagrams, plumbing layouts, bill of quantities (BOQ), and 3D rendered visualizations — all delivered via email as PDF files.",
  },
  {
    q: "How much do architectural plans cost in Nigeria?",
    a: "Our pre-designed plans range from $1,100 (₦1,650,000) to $3,200 (₦4,800,000) depending on size and complexity. Custom designs start from $2,000. Prices are displayed in your local currency — ₦ for Nigerian customers, $ for international.",
  },
  {
    q: "Can I modify the plans after purchase?",
    a: "Yes. The plans serve as a complete base for construction. Most contractors can make minor adjustments on-site. For significant modifications, we recommend consulting with a local architect or contacting us for a custom design.",
  },
  {
    q: "Are these plans approved by Lagos State government?",
    a: "Our plans comply with Nigerian building codes and Lagos State Physical Planning Permit Authority (LASPPPA) requirements. However, you will still need to submit plans for approval before construction begins. We can assist with this process.",
  },
  {
    q: "How quickly will I receive the plan files?",
    a: "Plan files are delivered to your email within 1 hour of payment confirmation. If you don't receive them, contact us on WhatsApp and we'll resolve it immediately.",
  },
  {
    q: "Do you offer construction services?",
    a: "Yes. Realmaxville provides end-to-end construction services. Once you purchase a design, we can build it for you. Contact us for a construction quote.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept credit/debit cards, bank transfers, and mobile money through our secure payment partner Dodo Payments. Nigerian customers can pay in Naira (₦) and international customers in USD ($).",
  },
  {
    q: "Can I see the designs before purchasing?",
    a: "Yes. Each design page includes multiple high-resolution images showing the exterior, interior, floor plan, and key features. You can browse all images in the gallery before deciding.",
  },
];

export default function DesignsPage() {
  const [active, setActive] = useState<string>("ALL");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filtered = active === "ALL" ? designs : designs.filter((d) => d.type === active);

  return (
    <CurrencyProvider>
      <div className="min-h-screen">
        {/* FAQ JSON-LD for AI crawlers */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              })),
            }),
          }}
        />

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
            {/* Trust stats */}
            <ScrollReveal delay={300}>
              <div className="flex flex-wrap justify-center gap-8 mt-4">
                {[
                  { value: "50+", label: "Projects Completed" },
                  { value: "8+", label: "Years Experience" },
                  { value: "24hr", label: "Plan Delivery" },
                  { value: "100%", label: "Licensed Engineers" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-[#FFD700] font-extrabold text-2xl">{stat.value}</div>
                    <div className="text-[#b0b3b4] text-xs mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
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

        {/* Testimonials */}
        <section className="py-24 md:py-32" aria-labelledby="testimonials-heading">
          <div className="section-inner">
            <ScrollReveal>
              <div className="flex flex-col items-center gap-6 mb-16">
                <h2 id="testimonials-heading" className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-center">
                  WHAT OUR <span className="text-[#FFD700]">CLIENTS SAY</span>
                </h2>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Adebayo O.",
                  role: "Homeowner, Lagos",
                  text: "Realmaxville designed and built our family home. The attention to detail and quality of construction exceeded our expectations. Highly recommend their services.",
                  rating: 5,
                },
                {
                  name: "Chioma N.",
                  role: "Property Developer",
                  text: "We purchased 3 residential designs for our estate project. The plans were detailed, professional, and our contractors had no issues interpreting them. Will buy again.",
                  rating: 5,
                },
                {
                  name: "Emeka A.",
                  role: "Business Owner",
                  text: "The commercial office design we bought was exactly what we needed. The floor plan maximized our space perfectly. Great value for the price.",
                  rating: 5,
                },
              ].map((t) => (
                <ScrollReveal key={t.name}>
                  <div className="glass-card rounded-xl p-8 flex flex-col gap-4 h-full">
                    <div className="flex gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                    </div>
                    <p className="text-[#b0b3b4] text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
                    <div>
                      <p className="text-[#e5e2e1] font-bold text-sm">{t.name}</p>
                      <p className="text-[#b0b3b4] text-xs">{t.role}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 md:py-32 bg-surface-container-lowest" aria-labelledby="faq-heading">
          <div className="section-inner max-w-3xl">
            <ScrollReveal>
              <div className="flex flex-col items-center gap-6 mb-16">
                <h2 id="faq-heading" className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-center">
                  FREQUENTLY <span className="text-[#FFD700]">ASKED QUESTIONS</span>
                </h2>
              </div>
            </ScrollReveal>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <ScrollReveal key={i} delay={i * 50}>
                  <div className="glass-card rounded-lg overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-5 text-left"
                      aria-expanded={openFaq === i}
                    >
                      <span className="text-[#e5e2e1] font-medium text-sm pr-4">{faq.q}</span>
                      <svg
                        className={`w-5 h-5 text-[#FFD700] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-5">
                        <p className="text-[#b0b3b4] text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
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
