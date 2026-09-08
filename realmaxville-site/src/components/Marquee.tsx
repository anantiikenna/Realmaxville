"use client";

const marqueeItems = [
  "Architectural Design", "Construction", "Interior Decoration", "Renovation",
  "Site Planning", "Geophysical Surveys", "Design-Build", "Construction Management",
  "Building Plans", "3D Animation", "Landscaping", "Project Management",
];

export default function Marquee() {
  return (
    <section className="py-8 bg-background border-y border-[#FFD700]/10 overflow-hidden marquee-container" aria-label="Services marquee" role="region">
      <div className="marquee-track flex whitespace-nowrap" aria-hidden="true">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 mx-8 font-(--font-space-mono) text-xs tracking-[0.2em] uppercase text-outline">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700]/55" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
