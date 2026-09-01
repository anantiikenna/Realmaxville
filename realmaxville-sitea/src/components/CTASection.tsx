"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-[#10120f] py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-gold glow-gold rounded-2xl px-8 py-16 text-center sm:px-16">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#99f0df]">
            Start Your Project
          </p>
          <h2 className="mt-4 font-display text-4xl font-black leading-tight sm:text-5xl">
            Ready to build your landmark?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/60">
            Whether it&apos;s a private residence, commercial tower, or public facility
            — we&apos;re ready to bring your vision to life.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center gap-2 rounded bg-[#f2c46d] px-6 text-sm font-extrabold uppercase tracking-[0.1em] text-[#10120f] transition hover:bg-[#E6C687]"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex h-12 items-center gap-2 border border-white/20 px-6 text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:border-[#f2c46d] hover:text-[#f2c46d]"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
