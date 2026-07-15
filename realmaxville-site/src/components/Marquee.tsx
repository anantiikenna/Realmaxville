"use client";

const marqueeItems = [
  "Architectural Design", "Construction", "Interior Decoration", "Renovation",
  "Site Planning", "Geophysical Surveys", "Design-Build", "Construction Management",
  "Building Plans", "3D Animation", "Landscaping", "Project Management",
];

export default function Marquee() {
  return (
    <section className="py-8 bg-[#050505] border-y border-[#c7f300]/10 overflow-hidden marquee-container" aria-label="Services marquee" role="region">
      <div className="marquee-track flex whitespace-nowrap" aria-hidden="true">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 mx-8 font-[var(--font-space-mono)] text-xs tracking-[0.2em] uppercase text-[#8e9192]">
            <span className="w-2 h-2 rounded-full bg-[#c7f300]/30" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
