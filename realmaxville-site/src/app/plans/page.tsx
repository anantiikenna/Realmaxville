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
      <section className="relative pt-48 pb-20 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 data-grid-bg opacity-30" />
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#c7f300]/5 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 w-full">
          <div className="flex flex-col gap-6 max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold uppercase leading-none">
              PRECISION <span className="text-[#c7f300]">BLUEPRINTS</span> FOR THE BOLD.
            </h1>
            <p className="text-[#c4c7c7] text-lg max-w-xl leading-relaxed">
              Access our high-fidelity repository of architectural masterworks. Engineered for performance, designed for legacy.
            </p>
          </div>
        </div>
      </section>

      <Plans initialPlans={plans} initialTypes={types} hasDb={hasSupabase} />

      {/* Features strip */}
      <section className="py-16 bg-[#0e0e0e] border-y border-[#c7f300]/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: "📐", title: "Detailed Drawings", desc: "Complete architectural, structural and MEP plans" },
              { icon: "⚡", title: "Instant Download", desc: "Access your plans immediately after purchase" },
              { icon: "💬", title: "Expert Support", desc: "Our team is available to answer your questions" },
              { icon: "🔒", title: "Secure Payment", desc: "Safe and encrypted transaction processing" },
            ].map((f) => (
              <div key={f.title} className="group">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-[#e5e2e1] font-semibold text-sm group-hover:text-[#c7f300] transition-colors">
                  {f.title}
                </h3>
                <p className="text-[#8e9192] text-xs mt-2">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
