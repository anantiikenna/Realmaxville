"use client";

import { Building2, DraftingCompass, Layers3, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Architectural Design",
    body: "Contemporary residential, commercial, healthcare, and public spaces shaped from concept to construction-ready documentation.",
    icon: DraftingCompass,
  },
  {
    title: "Structural Engineering",
    body: "Precise structural systems, buildability reviews, and technical coordination for ambitious Nigerian projects.",
    icon: ShieldCheck,
  },
  {
    title: "Smart Construction",
    body: "Site execution, material coordination, and finish control for homes, estates, and institutional developments.",
    icon: Layers3,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#10120f] py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-[#f2c46d]">
              <Building2 className="h-4 w-4" />
              What We Do
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-tight sm:text-5xl">
              Design intelligence, engineering clarity, and construction
              control.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/60">
              From concept to completion, we deliver end-to-end architecture and
              construction services tailored to Nigeria&apos;s unique landscape.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="glass rounded-lg p-6 transition hover:border-[#f2c46d]/20"
                >
                  <Icon className="h-7 w-7 text-[#99f0df]" />
                  <h3 className="mt-6 font-display text-xl font-bold leading-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">
                    {service.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
