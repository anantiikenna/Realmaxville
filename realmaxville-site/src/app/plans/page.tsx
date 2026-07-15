import type { Metadata } from "next";
import Plans from "@/components/Plans";
import { getPlans, getPlanTypes } from "@/lib/plans";

export const metadata: Metadata = {
  title: "Building Plans — Realmaxville",
  description:
    "Access our high-fidelity repository of architectural building plans. Engineered for performance, designed for legacy.",
};

export default async function PlansPage() {
  const hasSupabase = !!process.env.NEXT_PUBLIC_SUPABASE_URL;

  let plans: Awaited<ReturnType<typeof getPlans>> = [];
  let types: string[] = ["All"];

  if (hasSupabase) {
    plans = await getPlans();
    types = await getPlanTypes();
  }

  return (
    <>
      {/* Hero banner */}
      <section className="page-hero">
        <div className="absolute inset-0 data-grid-bg opacity-30" />
        <div
          className="absolute rounded-full"
          style={{
            top: -80, left: -80, width: 384, height: 384,
            background: "rgba(199,243,0,0.05)",
            filter: "blur(120px)",
            pointerEvents: "none",
          }}
        />
        <div className="section-inner" style={{ position: "relative", zIndex: 20, textAlign: "center" }}>
          <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
            <div className="flex items-center justify-center gap-2" style={{ marginBottom: "1.5rem" }}>
              <div style={{ height: 1, width: 48, backgroundColor: "#c7f300" }} />
              <span className="font-(--font-space-mono)" style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: "#c7f300" }}>
                ARCHITECTURAL BLUEPRINTS
              </span>
              <div style={{ height: 1, width: 48, backgroundColor: "#c7f300" }} />
            </div>
            <h1 style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", fontWeight: 800, textTransform: "uppercase", lineHeight: 0.95, marginBottom: "1.5rem" }}>
              PRECISION <span className="neon-text-glow" style={{ color: "#c7f300" }}>BLUEPRINTS</span> FOR THE BOLD.
            </h1>
            <p style={{ color: "#c4c7c7", fontSize: "1.1rem", maxWidth: "36rem", margin: "0 auto", lineHeight: 1.7 }}>
              Access our high-fidelity repository of architectural masterworks. Engineered for performance, designed for legacy.
            </p>
          </div>
        </div>
      </section>

      <Plans initialPlans={plans} initialTypes={types} hasDb={hasSupabase} />

      {/* Features strip */}
      <section style={{ padding: "4rem 0", backgroundColor: "#0e0e0e", borderTop: "1px solid rgba(199,243,0,0.1)", borderBottom: "1px solid rgba(199,243,0,0.1)" }}>
        <div className="section-inner">
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5 text-center">
            {[
              {
                title: "Detailed Drawings",
                desc: "Complete architectural, structural and MEP plans",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M3 21l9-18 9 18M6.5 14.5h11" /><path d="M12 3v4" />
                  </svg>
                ),
              },
              {
                title: "Instant Download",
                desc: "Access your plans immediately after purchase",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M12 3v12m0 0l-4-4m4 4l4-4" /><path d="M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2" />
                  </svg>
                ),
              },
              {
                title: "Expert Support",
                desc: "Our team is available to answer your questions",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                ),
              },
              {
                title: "Secure Payment",
                desc: "Safe and encrypted transaction processing",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
              },
            ].map((f) => (
              <div key={f.title} className="group py-6 md:py-0 md:px-8">
                <div className="w-11 h-11 rounded-xl bg-[#c7f300]/10 border border-[#c7f300]/20 flex items-center justify-center text-[#c7f300] mx-auto mb-4 group-hover:bg-[#c7f300]/20 group-hover:border-[#c7f300]/40 transition-all duration-300">
                  {f.icon}
                </div>
                <h3 style={{ color: "#e5e2e1", fontWeight: 600, fontSize: "0.9rem" }} className="group-hover:text-[#c7f300] transition-colors">
                  {f.title}
                </h3>
                <p style={{ color: "#8e9192", fontSize: "0.75rem", marginTop: "0.5rem" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
