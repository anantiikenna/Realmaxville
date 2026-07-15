import { getAllPlansAdmin } from "@/lib/actions/admin";
import Link from "next/link";
import DeletePlanButton from "./DeletePlanButton";

export default async function AdminPlansPage() {
  const result = await getAllPlansAdmin();
  const plans = "data" in result ? result.data : [];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold">Plans</h1>
          <p className="text-[#8e9192] text-sm mt-1">{plans.length} total plans</p>
        </div>
        <Link
          href="/admin/plans/new"
          className="bg-[#c7f300] text-[#171e00] px-6 py-3 rounded-xl font-[var(--font-space-mono)] text-xs tracking-wider uppercase font-bold hover:shadow-[0_0_20px_rgba(199,243,0,0.3)] transition-all active:scale-95"
        >
          + New Plan
        </Link>
      </div>

      <div className="glass-panel rounded-xl cyber-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5">
                <th className="px-6 py-4 font-[var(--font-space-mono)] text-[10px] tracking-[0.2em] text-[#8e9192] uppercase">Plan</th>
                <th className="px-6 py-4 font-[var(--font-space-mono)] text-[10px] tracking-[0.2em] text-[#8e9192] uppercase">Type</th>
                <th className="px-6 py-4 font-[var(--font-space-mono)] text-[10px] tracking-[0.2em] text-[#8e9192] uppercase">Price</th>
                <th className="px-6 py-4 font-[var(--font-space-mono)] text-[10px] tracking-[0.2em] text-[#8e9192] uppercase">Status</th>
                <th className="px-6 py-4 font-[var(--font-space-mono)] text-[10px] tracking-[0.2em] text-[#8e9192] uppercase text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan) => (
                <tr key={plan.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {plan.image_url ? (
                        <img src={plan.image_url} alt="" className="w-10 h-10 rounded-lg object-cover" />
                      ) : (
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-lg">
                          {plan.type === "Residential" ? "🏠" : plan.type === "Commercial" ? "🏢" : "🏬"}
                        </div>
                      )}
                      <div>
                        <p className="text-sm font-semibold text-[#e5e2e1]">{plan.name}</p>
                        <p className="text-[10px] text-[#8e9192]">{plan.sku}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs text-[#b0b3b4]">{plan.type}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-[#c7f300]">₦{plan.price.toLocaleString("en-NG")}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold tracking-wider ${
                      plan.is_published
                        ? "bg-[#c7f300]/10 text-[#c7f300] border border-[#c7f300]/20"
                        : "bg-white/5 text-[#8e9192] border border-white/10"
                    }`}>
                      {plan.is_published ? "PUBLISHED" : "DRAFT"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/plans/${plan.id}`}
                        className="px-3 py-1.5 rounded-lg text-[10px] font-[var(--font-space-mono)] tracking-wider text-[#b0b3b4] hover:text-[#c7f300] hover:bg-white/5 transition-all"
                      >
                        EDIT
                      </Link>
                      <DeletePlanButton planId={plan.id} planName={plan.name} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {plans.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-[#8e9192] mb-4">No plans yet</p>
            <Link href="/admin/plans/new" className="text-[#c7f300] text-sm hover:underline">
              Create your first plan
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
