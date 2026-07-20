"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{ position: "relative", height: "100vh", minHeight: 700, display: "flex", alignItems: "center", overflow: "hidden" }}
      aria-label="Hero"
    >
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvcUcOsQVtY-fNp_qjKejkx0KxuMqEOyeO_sjfUP99ddMNB4P0SIL60gz68JXGDDwROPdK6xl1hMM306VJ1lcrSzCJ5Pa8mljjU7GX-1F21rwk_Er_F9lgoiPmwSGdO33q780zXqCBk7y4PklsRKkNiCyJtjQ1m7oNr519l_P3eBZlAZZdV7pdLYcF03rZkRv30yosr1L3PQU87ByLDP2rohC8NbM6hdyaVDBpcqJIl9hpjIqv58y3ru_EOPrRrjl8mFtYhP20-Bs9"
          alt="Ultra-modern luxury villa at twilight with glass walls and warm interior lighting"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          loading="eager"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/45 to-transparent" aria-hidden="true" />
      </div>

      <div className="section-inner" style={{ position: "relative", zIndex: 20, width: "100%" }}>
        <div style={{ maxWidth: "56rem" }}>
          <div className="flex items-center gap-2" style={{ marginBottom: "1.5rem" }} aria-hidden="true">
            <div style={{ height: 1, width: 48, backgroundColor: "#c7f300" }} />
            <span className="font-(--font-space-mono)" style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: "#c7f300" }}>
              EST. 2017 - LAGOS, NIGERIA
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(2.8rem, 7vw, 4.5rem)", fontWeight: 800, lineHeight: 0.9, letterSpacing: "-0.02em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            WE DON&apos;T JUST <br />
            BUILD STRUCTURES, <br />
            <span className="neon-text-glow" style={{ color: "#c7f300" }}>WE BUILD LEGACIES.</span>
          </h1>

          <p style={{ color: "#c4c7c7", fontSize: "1.1rem", maxWidth: "40rem", lineHeight: 1.7, marginBottom: "2rem" }}>
            From architectural design to complete construction, we create timeless spaces that inspire,
            endure and elevate the way you live.
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
              href="/projects"
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
              <svg style={{ width: 16, height: 16 }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-4.197-2.42A1 1 0 009 9.616v4.768a1 1 0 001.555.832l4.197-2.348a1 1 0 000-1.7z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", zIndex: 30 }} aria-hidden="true">
        <div style={{ width: 24, height: 40, borderRadius: 9999, border: "1px solid rgba(199,243,0,0.3)", display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: 8 }}>
          <div className="pulse-active" style={{ width: 4, height: 8, borderRadius: 9999, backgroundColor: "#c7f300" }} />
        </div>
      </div>
    </section>
  );
}
