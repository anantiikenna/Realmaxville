import { getOrdersAdmin } from "@/lib/actions/admin";

export default async function AdminOrdersPage() {
  const result = await getOrdersAdmin();
  const orders = ("data" in result && result.data) ? result.data : [];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold">Orders</h1>
        <p className="text-outline text-sm mt-1">{orders.length} total orders</p>
      </div>

      <div className="glass-panel rounded-xl cyber-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5">
                <th className="px-6 py-4 font-(--font-space-mono) text-[10px] tracking-[0.2em] text-outline uppercase">Order</th>
                <th className="px-6 py-4 font-(--font-space-mono) text-[10px] tracking-[0.2em] text-outline uppercase">Customer</th>
                <th className="px-6 py-4 font-(--font-space-mono) text-[10px] tracking-[0.2em] text-outline uppercase">Plans</th>
                <th className="px-6 py-4 font-(--font-space-mono) text-[10px] tracking-[0.2em] text-outline uppercase">Total</th>
                <th className="px-6 py-4 font-(--font-space-mono) text-[10px] tracking-[0.2em] text-outline uppercase">Status</th>
                <th className="px-6 py-4 font-(--font-space-mono) text-[10px] tracking-[0.2em] text-outline uppercase">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order: any) => (
                <tr key={order.id} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                  <td className="px-6 py-4">
                    <span className="text-xs text-outline font-(--font-space-mono)">
                      #{order.id.slice(0, 8)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-[#e5e2e1]">{order.profiles?.full_name || "—"}</p>
                    <p className="text-[10px] text-outline">{order.profiles?.email}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {order.order_items?.map((item: any, i: number) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-[#b0b3b4]">
                          {item.plans?.name || "Unknown"}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-[#c7f300]">
                      ₦{Number(order.total).toLocaleString("en-NG")}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold tracking-wider ${
                      order.status === "paid"
                        ? "bg-[#c7f300]/10 text-[#c7f300] border border-[#c7f300]/20"
                        : order.status === "pending"
                        ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                        : order.status === "failed"
                        ? "bg-red-500/10 text-red-400 border border-red-500/20"
                        : "bg-white/5 text-outline border border-white/10"
                    }`}>
                      {order.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs text-outline">
                      {new Date(order.created_at).toLocaleDateString("en-NG")}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {orders.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-outline">No orders yet</p>
          </div>
        )}
      </div>
    </div>
  );
}
