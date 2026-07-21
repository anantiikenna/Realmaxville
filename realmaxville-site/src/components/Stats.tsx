"use client";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "25+", label: "Projects Completed", icon: "M3 21h18M5 21V8l7-5 7 5v13M9 21v-8h6v8" },
  { value: "8+", label: "Years Experience", icon: "M9 12l2 2 4-4M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" },
  { value: "44+", label: "Renovations Done", icon: "M4 21v-7l8-8 4 4-8 8H4zM14 4l2-2 4 4-2 2" },
  { value: "98%", label: "Client Satisfaction", icon: "M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { value: "6", label: "Industry Awards", icon: "M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0V4zM5 5H3v2a4 4 0 004 4M19 5h2v2a4 4 0 01-4 4" },
];

export default function Stats() {
  return (
    <section className="section-inner" style={{ position: "relative", zIndex: 40, marginTop: "-4rem", paddingBottom: "5.5rem" }} aria-label="Company statistics">
      <ScrollReveal>
        <div className="glass-panel rounded-lg grid grid-cols-2 md:grid-cols-5 gap-0 p-4 sm:p-6 md:p-8 cyber-border shadow-2xl">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center space-y-3 px-5 py-7 md:px-6 md:py-8 min-h-40 flex flex-col items-center justify-center
                ${i > 0 ? "md:border-l md:border-white/5" : ""}
                ${i % 2 === 1 ? "border-l border-white/5 md:border-l" : ""}
                ${i >= 2 ? "border-t border-white/5 md:border-t-0" : ""}
              `}
            >
              <svg className="mx-auto h-8 w-8 text-[#c7f300] shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
              </svg>
              <div className="text-4xl md:text-5xl font-extrabold text-white leading-none">
                {stat.value}
              </div>
              <div className="font-(--font-space-mono) text-[10px] tracking-[0.16em] uppercase text-[#b0b3b4] leading-relaxed max-w-28 mx-auto">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
