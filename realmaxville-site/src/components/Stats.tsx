"use client";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "500+", label: "Projects Completed", icon: "M3 21h18M5 21V8l7-5 7 5v13M9 21v-8h6v8" },
  { value: "9+", label: "Years Experience", icon: "M9 12l2 2 4-4M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" },
  { value: "250+", label: "Professional Experts", icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" },
  { value: "98%", label: "Client Satisfaction", icon: "M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { value: "15+", label: "Industry Awards", icon: "M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0V4z" },
];

export default function Stats() {
  return (
    <section
      className="section-inner relative z-30 -mt-8 md:-mt-20"
      aria-label="Company statistics"
    >
      <ScrollReveal>
        <div className="glass rounded-lg grid grid-cols-2 md:grid-cols-5 gap-8 p-12 cyber-border shadow-2xl">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center space-y-2 flex flex-col items-center justify-center
                ${i > 0 ? "md:border-l md:border-white/5" : ""}
              `}
            >
              <svg className="mx-auto h-8 w-8 text-[#FFD700] shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
              </svg>
              <div className="text-4xl md:text-5xl font-extrabold text-white leading-none">
                {stat.value}
              </div>
              <div className="font-(--font-space-mono) text-[10px] tracking-[0.2em] uppercase text-[#b0b3b4] leading-relaxed max-w-28 mx-auto">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
