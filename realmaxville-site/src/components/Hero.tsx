"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative flex items-center overflow-hidden pt-24 md:pt-28 pb-12 md:pb-16"
      style={{ minHeight: "100vh" }}
      aria-label="Hero"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvcUcOsQVtY-fNp_qjKejkx0KxuMqEOyeO_sjfUP99ddMNB4P0SIL60gz68JXGDDwROPdK6xl1hMM306VJ1lcrSzCJ5Pa8mljjU7GX-1F21rwk_Er_F9lgoiPmwSGdO33q780zXqCBk7y4PklsRKkNiCyJtjQ1m7oNr519l_P3eBZlAZZdV7pdLYcF03rZkRv30yosr1L3PQU87ByLDP2rohC8NbM6hdyaVDBpcqJIl9hpjIqv58y3ru_EOPrRrjl8mFtYhP20-Bs9"
          alt="Ultra-modern luxury villa at twilight with glass walls and warm interior lighting"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent z-10" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="section-inner relative z-20 w-full">
        <div className="max-w-4xl space-y-8">
          <h1
            className="font-extrabold uppercase leading-none tracking-[-0.04em]"
            style={{ fontSize: "clamp(2.8rem, 7vw, 4.5rem)" }}
          >
            WE DON&apos;T JUST <br />
            BUILD STRUCTURES, <br />
            <span className="text-[#c7f300]">WE BUILD LEGACIES.</span>
          </h1>

          <p className="text-[#b0b3b4] text-lg max-w-2xl leading-relaxed">
            From architectural design to complete construction, we create timeless spaces that inspire,
            endure and elevate the way you live. Our engineering precision meets futuristic luxury.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4">
            <Link
              href="/contact"
              className="btn-cta glow-hover flex items-center gap-2 h-12 px-10"
            >
              START YOUR PROJECT
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/projects"
              className="border border-[#c7f300] text-[#c7f300] h-12 px-10 rounded-full font-(--font-space-mono) text-[11px] tracking-[0.2em] uppercase hover:bg-[#c7f300]/10 transition-all flex items-center gap-2"
            >
              EXPLORE PROJECTS
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Floating social / info bar — right side */}
      <div className="absolute right-6 md:right-16 bottom-16 z-30 hidden md:flex flex-col gap-6">
        <div className="glass p-4 rounded-full flex flex-col gap-4 items-center">
          <a href="mailto:admin@realmaxville.com" className="text-[#c7f300] hover:scale-110 transition-transform" aria-label="Email us">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          <Link href="/projects" className="text-[#c7f300] hover:scale-110 transition-transform" aria-label="View projects">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-4.197-2.42A1 1 0 009 9.616v4.768a1 1 0 001.555.832l4.197-2.348a1 1 0 000-1.7z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30" aria-hidden="true">
        <div className="w-6 h-10 rounded-full border border-[#c7f300]/30 flex items-start justify-center pt-2">
          <div className="pulse-active w-1 h-2 rounded-full bg-[#c7f300]" />
        </div>
      </div>
    </section>
  );
}
