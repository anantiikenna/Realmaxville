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
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden" aria-label="Hero">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#131313] to-[#050505]"
          style={{ transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 blueprint-grid opacity-30" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" aria-hidden="true" />
        <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-[#c7f300]/5 blur-[120px] rounded-full" aria-hidden="true" />
        <div className="absolute bottom-20 left-20 w-48 h-48 border border-[#c7f300]/10 rounded-full animate-spin-slow" aria-hidden="true" />
        {/* Hero background image */}
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvcUcOsQVtY-fNp_qjKejkx0KxuMqEOyeO_sjfUP99ddMNB4P0SIL60gz68JXGDDwROPdK6xl1hMM306VJ1lcrSzCJ5Pa8mljjU7GX-1F21rwk_Er_F9lgoiPmwSGdO33q780zXqCBk7y4PklsRKkNiCyJtjQ1m7oNr519l_P3eBZlAZZdV7pdLYcF03rZkRv30yosr1L3PQU87ByLDP2rohC8NbM6hdyaVDBpcqJIl9hpjIqv58y3ru_EOPrRrjl8mFtYhP20-Bs9"
          alt="Ultra-modern luxury villa at twilight with glass walls and warm interior lighting"
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity"
          loading="eager"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 px-8 md:px-24 max-w-6xl mx-auto w-full">
        <div className="max-w-4xl space-y-8">
          <div className="flex items-center gap-2 mb-6" aria-hidden="true">
            <div className="h-px w-12 bg-[#c7f300]" />
            <span className="font-[var(--font-space-mono)] text-xs tracking-[0.3em] text-[#c7f300]">
              EST. 2017 · LAGOS, NIGERIA
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[72px] font-extrabold leading-[0.9] tracking-tight uppercase">
            WE DON&apos;T JUST <br />
            BUILD STRUCTURES, <br />
            <span className="text-[#c7f300] neon-text-glow">WE BUILD LEGACIES.</span>
          </h1>

          <p className="text-[#b0b3b4] text-lg md:text-xl max-w-2xl leading-relaxed">
            From architectural design to complete construction, we create timeless
            spaces that inspire, endure and elevate the way you live.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4">
            <Link
              href="/plans"
              className="bg-[#c7f300] text-[#171e00] px-10 py-4 rounded-full font-[var(--font-space-mono)] text-xs tracking-[0.2em] uppercase font-bold glow-hover transition-all flex items-center gap-2 active:scale-95"
            >
              START YOUR PROJECT
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="border border-[#c7f300] text-[#c7f300] px-10 py-4 rounded-full font-[var(--font-space-mono)] text-xs tracking-[0.2em] uppercase hover:bg-[#c7f300]/10 transition-all flex items-center gap-2 active:scale-95"
            >
              EXPLORE PROJECTS
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30" aria-hidden="true">
        <div className="w-6 h-10 rounded-full border border-[#c7f300]/30 flex items-start justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-[#c7f300] pulse-active" />
        </div>
      </div>
    </section>
  );
}
