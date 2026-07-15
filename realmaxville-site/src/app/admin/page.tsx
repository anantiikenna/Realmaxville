import { getDashboardStats } from "@/lib/actions/admin";
import Link from "next/link";

export default async function AdminDashboard() {
  const stats = await getDashboardStats();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold">Dashboard</h1>
        <p className="text-[#8e9192] text-sm mt-1">Overview of your building plans store</p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { label: "TOTAL PLANS", value: stats.totalPlans, href: "/admin/plans", color: "#c7f300" },
          { label: "TOTAL ORDERS", value: stats.totalOrders, href: "/admin/orders", color: "#00dbe9" },
          { label: "TOTAL REVENUE", value: `₦${stats.totalRevenue.toLocaleString("en-NG")}`, href: "/admin/orders", color: "#c7f300" },
        ].map((s) => (
          <Link
            key={s.label}
            href={s.href}
            className="glass-panel rounded-xl p-6 cyber-border hover:bg-white/5 transition-all group"
          >
            <p className="font-[var(--font-space-mono)] text-[10px] tracking-[0.2em] text-[#8e9192] mb-2">
              {s.label}
            </p>
            <p className="text-4xl font-extrabold group-hover:text-[#c7f300] transition-colors" style={{ color: s.color }}>
              {s.value}
            </p>
          </Link>
        ))}
      </div>

      {/* Quick actions */}
      <div className="glass-panel rounded-xl p-8 cyber-border">
        <h2 className="text-lg font-bold mb-6">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/admin/plans/new"
            className="bg-[#c7f300] text-[#171e00] px-6 py-3 rounded-xl font-[var(--font-space-mono)] text-xs tracking-wider uppercase font-bold hover:shadow-[0_0_20px_rgba(199,243,0,0.3)] transition-all active:scale-95"
          >
            + New Plan
          </Link>
          <Link
            href="/admin/plans"
            className="border border-[#c7f300]/30 text-[#c7f300] px-6 py-3 rounded-xl font-[var(--font-space-mono)] text-xs tracking-wider uppercase hover:bg-[#c7f300]/10 transition-all active:scale-95"
          >
            Manage Plans
          </Link>
          <Link
            href="/admin/orders"
            className="border border-white/10 text-[#b0b3b4] px-6 py-3 rounded-xl font-[var(--font-space-mono)] text-xs tracking-wider uppercase hover:bg-white/5 transition-all active:scale-95"
          >
            View Orders
          </Link>
        </div>
      </div>
    </div>
  );
}
