import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Realmaxville",
  description:
    "Get in touch with Realmaxville for architectural design, construction and renovation services.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative pt-32 pb-20 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 data-grid-bg opacity-30" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 border-l-4 border-[#c7f300] pl-8">
            <div className="max-w-3xl">
              <span className="font-[var(--font-space-mono)] text-xs tracking-[0.2em] text-[#c7f300] mb-4 block">PROTOCOL v4.0.2</span>
              <h1 className="text-5xl md:text-6xl font-extrabold uppercase leading-none mb-6">
                CONTACT <span className="text-[#c7f300] neon-text-glow">US</span>
              </h1>
              <p className="text-[#c4c7c7] text-lg max-w-xl leading-relaxed">
                At RealMaxVille we give priority to our valued customers and how to provide better services for them while adding value to the society at large.
              </p>
            </div>
            <div className="hidden md:block text-right">
              <div className="flex items-center gap-2 text-[#c7f300] mb-2">
                <span className="w-2 h-2 rounded-full bg-[#c7f300] pulse-active" />
                <span className="font-[var(--font-space-mono)] text-xs tracking-[0.2em]">LIFECYCLE ACTIVE</span>
              </div>
              <div className="font-[var(--font-space-mono)] text-[10px] tracking-[0.2em] text-[#8e9192]">NODE: PRIMARY_LAB_01</div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />

      {/* WhatsApp CTA */}
      <section className="py-20 bg-[#0e0e0e]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold uppercase">
            PREFER TO CHAT? <span className="text-[#c7f300]">WHATSAPP US</span>
          </h2>
          <p className="mt-4 text-[#8e9192] text-sm font-[var(--font-space-mono)] tracking-[0.1em]">
            GET INSTANT RESPONSES ON WHATSAPP
          </p>
          <a
            href="https://wa.me/2348080419259"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-8 py-4 rounded-full bg-green-600 text-white font-bold text-sm hover:bg-green-700 hover:shadow-lg transition-all font-[var(--font-space-mono)] tracking-[0.1em]"
          >
            CHAT ON WHATSAPP →
          </a>
        </div>
      </section>
    </>
  );
}
