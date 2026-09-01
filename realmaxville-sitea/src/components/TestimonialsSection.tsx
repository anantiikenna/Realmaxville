"use client";

import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Realmaxville transformed our vision into a home that exceeded every expectation. Their attention to detail is unmatched.",
    name: "Adeola Peters",
    role: "Private Homeowner, Lagos",
  },
  {
    quote:
      "Professional, innovative, and reliable. The team delivered our healthcare facility on time and above standard.",
    name: "Dr. Emeka Nwosu",
    role: "Enugu State Health Board",
  },
  {
    quote:
      "From design to handover, the experience was seamless. Our apartment complex stands as a testament to their craft.",
    name: "Funke Adeyemi",
    role: "Realmaxville Development",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#0e1015] py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f2c46d]">
            Client Voices
          </p>
          <h2 className="mt-3 font-display text-4xl font-black leading-tight sm:text-5xl">
            Trusted by visionaries.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="glass rounded-lg p-8 transition hover:border-[#f2c46d]/20"
            >
              <Quote className="h-8 w-8 text-[#f2c46d]/40" />
              <p className="mt-5 text-sm leading-7 text-white/70">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-display text-base font-bold text-white">
                  {t.name}
                </p>
                <p className="mt-0.5 text-xs text-white/45">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
