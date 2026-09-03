"use client";

const items = [
  "Architecture",
  "Structural Engineering",
  "Luxury Construction",
  "Smart Estates",
  "Interior Design",
  "EPC Projects",
  "Healthcare Facilities",
  "Commercial Towers",
  "BIM Modeling",
  "Urban Planning",
];

export default function MarqueeBand() {
  const repeated = [...items, ...items];

  return (
    <div className="relative overflow-hidden bg-copper-500 py-4 border-y border-copper-600">
      <div className="flex whitespace-nowrap marquee-track gap-8">
        {repeated.map((item, idx) => (
          <span
            key={idx}
            className="inline-flex items-center gap-4 text-[#080C10] font-mono text-xs uppercase tracking-[0.18em] font-medium shrink-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#080C10]/40 shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
