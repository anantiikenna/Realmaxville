"use client";
import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { target: 25, label: "Projects Completed", suffix: "+" },
  { target: 8, label: "Years Experience", suffix: "+" },
  { target: 44, label: "Renovations Done", suffix: "+" },
  { target: 6, label: "Industry Awards", suffix: "" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) { setCount(target); return; }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const step = target / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(current));
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-extrabold text-[#c7f300]">
      {count}{suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative z-30 -mt-20 px-8 lg:px-12 max-w-7xl mx-auto w-full" aria-label="Company statistics">
      <ScrollReveal>
        <div className="glass-panel rounded-lg grid grid-cols-2 md:grid-cols-4 gap-8 p-12 cyber-border shadow-2xl">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`text-center space-y-2 ${i > 0 ? "border-l border-white/5" : ""}`}>
              <Counter target={stat.target} suffix={stat.suffix} />
              <div className="font-[var(--font-space-mono)] text-[10px] tracking-[0.2em] uppercase text-[#b0b3b4]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
