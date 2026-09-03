import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-28 bg-[#080C10] relative overflow-hidden">
      {/* Radial mesh glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(200,121,65,0.12) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-10 bg-copper-500" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-copper-400">
            Ready to Build?
          </span>
          <div className="h-px w-10 bg-copper-500" />
        </div>

        <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-ivory-100 leading-[1.0] mb-6">
          Commission your <br />
          <em className="text-copper-gradient font-semibold not-italic">legacy.</em>
        </h2>

        <p className="text-ivory-300/55 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          Schedule a confidential consultation with our Principal Architect and Senior Engineering Director. We take your vision from concept to a fully engineered, built reality.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-copper-500 text-[#080C10] font-semibold text-sm tracking-wide hover:bg-copper-400 transition-all hover:shadow-copper-glow hover:-translate-y-0.5"
          >
            Schedule a Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-ivory-100/15 text-ivory-300/70 text-sm font-medium hover:border-copper-500/40 hover:text-ivory-100 transition-all"
          >
            Browse Our Portfolio
          </Link>
        </div>

        {/* Contact chips */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+2348080419259"
            className="flex items-center gap-3 px-5 py-3 rounded-full glass-copper text-sm text-ivory-300/80 hover:text-ivory-100 transition-colors"
          >
            <Phone className="h-4 w-4 text-copper-400" />
            0808 041 9259
          </a>
          <a
            href="mailto:admin@realmaxville.com"
            className="flex items-center gap-3 px-5 py-3 rounded-full glass-copper text-sm text-ivory-300/80 hover:text-ivory-100 transition-colors"
          >
            <Mail className="h-4 w-4 text-emerald-400" />
            admin@realmaxville.com
          </a>
        </div>
      </div>
    </section>
  );
}
