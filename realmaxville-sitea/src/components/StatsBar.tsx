const stats = [
  { value: "140+", label: "Completed Projects" },
  { value: "28", label: "Awards Won" },
  { value: "99.8%", label: "Client Satisfaction" },
  { value: "4", label: "Cities Served" },
];

export default function StatsBar() {
  return (
    <section className="relative z-10 -mt-1 bg-gradient-to-r from-[#f2c46d]/10 via-[#10120f] to-[#99f0df]/5 border-y border-white/10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="px-6 py-8 text-center border-r border-white/5 last:border-r-0"
          >
            <div className="font-display text-4xl font-black text-[#f2c46d]">
              {stat.value}
            </div>
            <div className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-white/50">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
