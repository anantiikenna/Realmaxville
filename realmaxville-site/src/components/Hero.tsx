"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      style={{ position: "relative", height: "100vh", minHeight: 700, display: "flex", alignItems: "center", overflow: "hidden" }}
      aria-label="Hero"
    >
      {/* Background layers */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, #0a0a0a, #131313, #050505)",
            transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)`,
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 blueprint-grid opacity-30" aria-hidden="true" />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent" style={{ zIndex: 10 }} aria-hidden="true" />
        <div className="absolute top-20 right-20 w-150 h-150 bg-[#c7f300]/5 blur-[120px] rounded-full" aria-hidden="true" />
        <div className="absolute bottom-20 left-20 w-48 h-48 border border-[#c7f300]/10 rounded-full animate-spin-slow" aria-hidden="true" />
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvcUcOsQVtY-fNp_qjKejkx0KxuMqEOyeO_sjfUP99ddMNB4P0SIL60gz68JXGDDwROPdK6xl1hMM306VJ1lcrSzCJ5Pa8mljjU7GX-1F21rwk_Er_F9lgoiPmwSGdO33q780zXqCBk7y4PklsRKkNiCyJtjQ1m7oNr519l_P3eBZlAZZdV7pdLYcF03rZkRv30yosr1L3PQU87ByLDP2rohC8NbM6hdyaVDBpcqJIl9hpjIqv58y3ru_EOPrRrjl8mFtYhP20-Bs9"
          alt="Ultra-modern luxury villa at twilight with glass walls and warm interior lighting"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.3, mixBlendMode: "luminosity" }}
          loading="eager"
        />
      </div>

      {/* Content */}
      <div className="section-inner" style={{ position: "relative", zIndex: 20, width: "100%" }}>
        <div style={{ maxWidth: "56rem" }}>
          <div className="flex items-center gap-2" style={{ marginBottom: "1.5rem" }} aria-hidden="true">
            <div style={{ height: 1, width: 48, backgroundColor: "#c7f300" }} />
            <span className="font-(--font-space-mono)" style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: "#c7f300" }}>
              EST. 2017 · LAGOS, NIGERIA
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(2.8rem, 7vw, 4.5rem)", fontWeight: 800, lineHeight: 0.9, letterSpacing: "-0.02em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            WE DON&apos;T JUST <br />
            BUILD STRUCTURES, <br />
            <span className="neon-text-glow" style={{ color: "#c7f300" }}>WE BUILD LEGACIES.</span>
          </h1>

          <p style={{ color: "#b0b3b4", fontSize: "1.1rem", maxWidth: "40rem", lineHeight: 1.7, marginBottom: "2rem" }}>
            From architectural design to complete construction, we create timeless
            spaces that inspire, endure and elevate the way you live.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1.5rem" }}>
            <Link
              href="/contact"
              className="btn-cta glow-hover"
              style={{ gap: "0.5rem", height: "3rem", paddingLeft: "2.2rem", paddingRight: "2.2rem" }}
            >
              START YOUR PROJECT
              <svg style={{ width: 16, height: 16 }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/about"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                height: "3rem",
                paddingLeft: "2.2rem",
                paddingRight: "2.2rem",
                borderRadius: 9999,
                border: "1px solid #c7f300",
                color: "#c7f300",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(199,243,0,0.1)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              EXPLORE PROJECTS
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", zIndex: 30 }} aria-hidden="true">
        <div style={{ width: 24, height: 40, borderRadius: 9999, border: "1px solid rgba(199,243,0,0.3)", display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: 8 }}>
          <div className="pulse-active" style={{ width: 4, height: 8, borderRadius: 9999, backgroundColor: "#c7f300" }} />
        </div>
      </div>

      {/* Overlapping stats bar */}
      <div
        className="absolute bottom-0 left-0 right-0 z-30 glass-panel border-t border-white/8 backdrop-blur-md"
        style={{ backgroundColor: "rgba(5,5,5,0.85)" }}
        aria-label="Company statistics"
      >
        <div className="section-inner">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
            {[
              { num: "6+", label: "YEARS" },
              { num: "200+", label: "PROJECTS" },
              { num: "50+", label: "CLIENTS" },
              { num: "100%", label: "SATISFACTION" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center justify-center py-5 md:py-6">
                <span className="text-xl md:text-2xl font-extrabold text-[#c7f300] neon-text-glow">{s.num}</span>
                <span className="font-(--font-space-mono) text-[9px] tracking-[0.2em] text-[#b0b3b4] mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
