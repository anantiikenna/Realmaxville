import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/?auth=required");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("is_admin, full_name, email")
    .eq("id", user.id)
    .single();

  if (!profile?.is_admin) {
    redirect("/?auth=unauthorized");
  }

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Admin header */}
      <header className="sticky top-0 z-50 bg-[#0e0e0e]/95 backdrop-blur-xl border-b border-[#c7f300]/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="/admin" className="text-lg font-extrabold text-[#e5e2e1]">
              REALMAXVILLE
            </a>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider bg-[#c7f300]/10 text-[#c7f300] border border-[#c7f300]/20">
              ADMIN
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6" aria-label="Admin navigation">
            <a href="/admin" className="text-xs text-[#b0b3b4] hover:text-[#c7f300] transition-colors font-[var(--font-space-mono)] tracking-wider">
              DASHBOARD
            </a>
            <a href="/admin/plans" className="text-xs text-[#b0b3b4] hover:text-[#c7f300] transition-colors font-[var(--font-space-mono)] tracking-wider">
              PLANS
            </a>
            <a href="/admin/orders" className="text-xs text-[#b0b3b4] hover:text-[#c7f300] transition-colors font-[var(--font-space-mono)] tracking-wider">
              ORDERS
            </a>
            <a href="/" className="text-xs text-[#8e9192] hover:text-[#c7f300] transition-colors font-[var(--font-space-mono)] tracking-wider">
              VIEW SITE
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#c7f300]/10 flex items-center justify-center text-[#c7f300] text-xs font-bold">
              {profile?.full_name?.[0] || profile?.email?.[0]?.toUpperCase() || "A"}
            </div>
            <span className="text-xs text-[#8e9192] hidden md:block">{profile?.email}</span>
          </div>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-6 md:px-16 py-12">
        {children}
      </main>
    </div>
  );
}
