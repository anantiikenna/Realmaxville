"use client";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote: "Those drawings are crazy bad. I mean you delivered. Love love the drawings!",
    name: "Isioma F. Uzu Sherrill",
    role: "Nurse",
    initials: "IS",
    rating: 5,
  },
  {
    quote: "Great work to RealmaxVille. After our lengthy discussion, I came to check progress and found they took into details all we discussed.",
    name: "Dr. Olajide Olalekan Olasiyan",
    role: "Developer",
    initials: "OO",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section style={{ padding: "8rem 0", backgroundColor: "#050505" }} aria-labelledby="testimonials-heading">
      <div className="section-inner">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4" aria-hidden="true">
              <div className="h-px w-12 bg-[#c7f300]" />
              <span className="font-(--font-space-mono) text-xs tracking-[0.2em] text-[#c7f300]">TESTIMONIALS</span>
              <div className="h-px w-12 bg-[#c7f300]" />
            </div>
            <h2 id="testimonials-heading" className="text-4xl md:text-[48px] font-extrabold">
              WHAT OUR <span className="text-[#c7f300]">CLIENTS SAY</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal className="stagger">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <figure key={t.name} className="glass-card p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#c7f300]" aria-hidden="true" />
                <div className="text-6xl text-[#c7f300]/20 font-serif leading-none mb-4" aria-hidden="true">&ldquo;</div>
                <blockquote className="text-on-surface-variant text-lg leading-relaxed italic mb-8">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#c7f300]/10 border border-[#c7f300]/30 flex items-center justify-center text-[#c7f300] font-bold text-sm" aria-hidden="true">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-[#e5e2e1] font-semibold text-sm">{t.name}</div>
                      <div className="font-(--font-space-mono) text-[10px] tracking-widest text-[#c7f300]">{t.role}</div>
                    </div>
                  </div>
                  <div className="flex gap-1" aria-label={`Rated ${t.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={`text-sm ${i < t.rating ? "text-[#c7f300]" : "text-outline"}`} aria-hidden="true">★</span>
                    ))}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
