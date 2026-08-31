"use client";

import Link from "next/link";
import { ArrowRight, MoveUpRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(29,224,195,0.12),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(230,198,135,0.08),transparent_30%),linear-gradient(110deg,#10120f_0%,#182016_40%,#2b211b_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,#10120f_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#99f0df]">
            <Sparkles className="h-4 w-4" />
            Architecture & Construction
          </div>

          <h1 className="font-display text-5xl font-black leading-[0.95] text-white sm:text-7xl lg:text-8xl">
            Building
            <br />
            <span className="text-gold-gradient">Legacies</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/70 sm:text-xl">
            Luxury residences, smart estates, healthcare facilities, and
            landmark public projects — crafted with precision across Nigeria.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex h-12 items-center gap-2 rounded bg-[#f2c46d] px-6 text-sm font-extrabold uppercase tracking-[0.1em] text-[#10120f] transition hover:bg-[#E6C687]"
            >
              View Portfolio
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/#services"
              className="inline-flex h-12 items-center gap-2 border border-white/20 px-6 text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:border-[#99f0df] hover:text-[#99f0df]"
            >
              Our Services
              <MoveUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
