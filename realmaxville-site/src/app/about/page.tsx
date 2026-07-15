import type { Metadata } from "next";
import About from "@/components/About";
import Team from "@/components/Team";
import Stats from "@/components/Stats";

export const metadata: Metadata = {
  title: "About Us — Realmaxville",
  description:
    "Learn about Realmaxville, a next-generation construction company established in 2017, delivering architectural design, construction and renovation services across Nigeria.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="page-hero">
        <div className="absolute inset-0 data-grid-bg opacity-30" />
        <div
          className="absolute rounded-full"
          style={{
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: 800, height: 800,
            background: "radial-gradient(circle, rgba(199,243,0,0.06), transparent 70%)",
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />
        <div className="section-inner" style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
          <div className="flex items-center justify-center gap-2" style={{ marginBottom: "1.5rem" }}>
            <div style={{ height: 1, width: 48, backgroundColor: "#c7f300" }} />
            <span className="font-(--font-space-mono)" style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: "#c7f300" }}>
              WHO WE ARE
            </span>
            <div style={{ height: 1, width: 48, backgroundColor: "#c7f300" }} />
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 800, textTransform: "uppercase", lineHeight: 1 }}>
            ABOUT <span className="neon-text-glow" style={{ color: "#c7f300" }}>REALMAXVILLE</span>
          </h1>
          <p style={{ marginTop: "1.5rem", color: "#c4c7c7", maxWidth: "40rem", marginLeft: "auto", marginRight: "auto", fontSize: "1.1rem", lineHeight: 1.7 }}>
            A goal-oriented construction, structural and architectural company with a
            passion for satisfying our clients with rich innovation and value creation.
          </p>
        </div>
      </section>

      <About />
      <Stats />
      <Team />

      {/* CTA */}
      <section style={{ padding: "8rem 0", backgroundColor: "#0e0e0e" }}>
        <div className="section-inner">
          <div
            className="relative overflow-hidden"
            style={{
              borderRadius: "3rem",
              padding: "5rem 3rem",
              border: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div className="absolute inset-0 blueprint-grid opacity-20" />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, rgba(199,243,0,0.08), transparent, rgba(0,219,233,0.08))" }}
            />
            <h2
              style={{
                position: "relative",
                zIndex: 10,
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                fontWeight: 800,
                textTransform: "uppercase",
                lineHeight: 1.2,
                maxWidth: "36rem",
                marginBottom: "2rem",
              }}
            >
              READY TO BUILD YOUR{" "}
              <span className="neon-text-glow" style={{ color: "#c7f300" }}>
                ARCHITECTURAL LEGACY?
              </span>
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.25rem", position: "relative", zIndex: 10 }}>
              <a
                href="/contact"
                className="btn-cta"
                style={{ height: "3.5rem", paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
              >
                REQUEST A QUOTE
              </a>
              <a
                href="/contact"
                className="glass-panel inline-flex items-center justify-center h-14 px-10 rounded-full border border-[rgba(255,255,255,0.15)] text-[#e5e2e1] text-[0.7rem] tracking-[0.2em] uppercase transition-all duration-200 hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.35)]"
              >
                BOOK CONSULTATION
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
