import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us — Realmaxville",
  description:
    "Get in touch with Realmaxville for architectural design, construction and renovation services.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="page-hero" aria-label="Contact page hero">
        <div className="absolute inset-0 blueprint-grid opacity-20" aria-hidden="true" />
        {/* Radial glow */}
        <div
          className="absolute rounded-full pointer-events-none top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] blur-[80px]"
          style={{
            background: "radial-gradient(circle, rgba(199,243,0,0.07), transparent 70%)",
          }}
          aria-hidden="true"
        />
        {/* Corner accent lines */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[#c7f300]/30" aria-hidden="true" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#c7f300]/30" aria-hidden="true" />

        <div className="section-inner relative z-10">
          <div className="max-w-[56rem]">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6" aria-hidden="true">
              <div className="w-12 h-px bg-[#c7f300]" />
              <span className="font-(--font-space-mono) text-[11px] tracking-[0.3em] text-[#c7f300] uppercase">
                Get In Touch
              </span>
            </div>

            <h1 className="font-extrabold uppercase leading-[0.9] tracking-[-0.02em] mb-7" style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)" }}>
              LET&apos;S BUILD{" "}
              <span className="neon-text-glow text-[#c7f300]">
                SOMETHING
              </span>
              <br />
              GREAT TOGETHER.
            </h1>

            <p className="text-[#b0b3b4] text-lg max-w-[38rem] leading-relaxed mb-10">
              Whether you have a project in mind or just want to explore what&apos;s possible, our team is ready to listen and deliver beyond expectations.
            </p>

            {/* Quick-links */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="btn-cta glow-hover h-12 px-8"
              >
                SEND A MESSAGE →
              </a>
              <a
                href="tel:08080419259"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-full font-(--font-space-mono) text-[0.7rem] tracking-widest text-[#c7f300] border border-[#c7f300]/30 hover:border-[#c7f300] hover:bg-[#c7f300]/5 transition-all"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                CALL US NOW
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-surface-container-lowest border-b border-white/5">
        <div className="section-inner">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {[
              { num: "6+", label: "Years Experience" },
              { num: "200+", label: "Projects Delivered" },
              { num: "24h", label: "Response Time" },
              { num: "100%", label: "Client Satisfaction" },
            ].map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col items-center justify-center text-center py-10 px-6
                  ${i < 3 ? "border-r border-white/5" : ""}
                `}
              >
                <span className="text-4xl md:text-5xl font-extrabold text-[#c7f300] neon-text-glow">{s.num}</span>
                <span className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-outline mt-1 uppercase">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main contact section — form + info */}
      <div className="bg-[#0a0a0a]">
        <ContactForm />
      </div>

      {/* WhatsApp CTA */}
      <section className="py-32 bg-[#0a0a0a]" aria-labelledby="whatsapp-heading">
        <div className="section-inner">
          <div
            className="relative overflow-hidden rounded-[2rem] border border-[#22c55e]/20 flex flex-wrap items-center justify-between gap-8 p-12 md:p-16"
            style={{
              background: "linear-gradient(135deg, rgba(34,197,94,0.06), rgba(0,0,0,0), rgba(34,197,94,0.03))",
            }}
          >
            {/* Glows */}
            <div
              className="absolute pointer-events-none top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] blur-[60px]"
              style={{
                background: "radial-gradient(circle, rgba(34,197,94,0.08), transparent 70%)",
              }}
              aria-hidden="true"
            />

            {/* Left content */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4" aria-hidden="true">
                <div className="w-10 h-px bg-[#22c55e]" />
                <span className="font-(--font-space-mono) text-[10px] tracking-widest text-[#22c55e]">INSTANT SUPPORT</span>
              </div>
              <h2 id="whatsapp-heading" className="text-2xl md:text-[40px] font-extrabold uppercase leading-[1.15] max-w-[28rem]">
                PREFER TO CHAT?{" "}
                <span className="text-[#22c55e]">WHATSAPP US</span>
              </h2>
              <p className="text-[#8e9192] mt-4 max-w-[28rem] leading-relaxed">
                Get faster responses on WhatsApp. Our team is always ready to walk you through your project requirements.
              </p>
            </div>

            {/* Right CTA */}
            <div className="relative z-10 flex flex-col items-start gap-4">
              <a
                href="https://wa.me/2348080419259"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 h-14 px-10 rounded-full bg-[#16a34a] text-white font-(--font-space-mono) tracking-widest text-sm transition-all duration-200 hover:shadow-[0_0_30px_rgba(34,197,94,0.45)] active:scale-[0.97]"
              >
                {/* WhatsApp icon */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                CHAT ON WHATSAPP
              </a>
              <span className="font-(--font-space-mono) text-[10px] tracking-widest text-[#4b5563]">
                0808 041 9259 · 0703 719 0399
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom nav strip */}
      <div className="py-12 bg-[#080808] border-t border-white/4">
        <div className="section-inner flex flex-wrap items-center justify-between gap-6">
          <div>
            <span className="text-[#e5e2e1] font-bold text-lg">REALMAXVILLE</span>
            <span className="ml-2 w-2 h-2 rounded-full bg-[#c7f300] inline-block pulse-active" aria-hidden="true" />
            <p className="font-(--font-space-mono) text-[10px] tracking-widest text-outline mt-1">ARCHITECTURE & CONSTRUCTION · LAGOS</p>
          </div>
          <div className="flex flex-wrap gap-6 font-(--font-space-mono) text-[10px] tracking-widest text-outline">
            <Link href="/" className="hover:text-[#c7f300] transition-colors uppercase">Home</Link>
            <Link href="/about" className="hover:text-[#c7f300] transition-colors uppercase">About</Link>
            <Link href="/contact" className="hover:text-[#c7f300] transition-colors uppercase">Contact</Link>
          </div>
        </div>
      </div>
    </>
  );
}
