"use client";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section className="section-inner" style={{ paddingTop: "8rem", paddingBottom: "8rem" }} aria-labelledby="about-heading">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <ScrollReveal direction="left">
          <div className="relative">
            <div className="glass-card aspect-square rounded-lg overflow-hidden relative group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlffWY-FMVqxGbbqoNHEC5bMSWsQ4d-bHyqctL939ix-Ej9tvH890WopdNpt-LWnpsTZvgYl_J2Tky9SYB-pbL-ARTEsgmwKa7aVElGfRchLX3gUkGvFFn3lTZnwNRO3Axkp62FEWf124HAchG0qnRl_8NjqGBQshZwtl8_DxBywa22N2dgSEOwUYrU_jDRjet1_SYve9pQ4kjD-LRnGPLAv0sQfgtbmNc2jYTLFWSArj5SnVG5XJIWlkrxIwq94z1mN403waNshAV"
                alt="High-tech architectural rendering of a modern construction lab with floating holographic blueprints"
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-[#FFD700] bg-[#FFD700]/10 px-3 py-1 rounded-full border border-[#FFD700]/20 backdrop-blur-md">
                  PHASE 01: STRUCTURE
                </span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 glass-panel p-4 rounded-lg cyber-border">
              <div className="text-3xl font-extrabold text-[#FFD700]">9+</div>
              <div className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-outline">YEARS</div>
            </div>
            <div className="absolute -top-4 -left-4 w-20 h-20 border border-[#FFD700]/10 rounded-full animate-spin-slow" aria-hidden="true" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-12 h-px bg-[#FFD700]" aria-hidden="true" />
            <span className="font-(--font-space-mono) text-[12px] tracking-[0.2em] text-[#FFD700]">ABOUT US</span>
          </div>
          <h2 id="about-heading" className="text-4xl md:text-[48px] font-extrabold leading-[1.1] mt-2">
            WHERE WE BUILD <br />
            <span className="text-[#FFD700] neon-text-glow">YOUR VISIONS</span>
          </h2>
          <p className="mt-6 text-[#b0b3b4] leading-relaxed">
            RealMaxVille is a goal-oriented, construction structural and architectural company with a passion of satisfying our clients need with rich innovation and value creation. Established in 2017 and registered as a limited liability company, we started operations in 2019.
          </p>
          <p className="mt-4 text-[#b0b3b4] leading-relaxed">
            Guided and controlled by experience in diverse engineering fields, we provide general contracting, design-build, construction, renovation and construction management services designed to exceed expectations.
          </p>

          {/* Feature chips */}
          <div className="mt-8 flex flex-wrap gap-2" role="list">
            {[
              { label: "Professional Specialist", dot: true },
              { label: "Brilliant Ideas", dot: true },
              { label: "Precise Builders", dot: true },
              { label: "24/7 Assistance", dot: true },
            ].map((f) => (
              <span
                key={f.label}
                role="listitem"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFD700]/8 border border-[#FFD700]/25 font-(--font-space-mono) text-[10px] tracking-[0.12em] text-[#FFD700] hover:bg-[#FFD700]/15 hover:border-[#FFD700]/50 transition-all cursor-default"
              >
                <span className="w-1 h-1 rounded-full bg-[#FFD700] shrink-0" aria-hidden="true" />
                {f.label}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="mt-8 h-px bg-linear-to-r from-[#FFD700]/20 via-[#FFD700]/5 to-transparent" aria-hidden="true" />

          {/* Value props */}
          <div className="mt-8 grid grid-cols-2 gap-5">
            {[
              { num: "01", title: "Meticulous Planning", desc: "Best schedules to keep you on track" },
              { num: "02", title: "Completion On Time", desc: "Timely delivery is our priority" },
              { num: "03", title: "Perfect Execution", desc: "Attention to detail always" },
              { num: "04", title: "Affordable Prices", desc: "Quality at fair prices" },
            ].map((item) => (
              <div
                key={item.num}
                className="group relative pl-4 py-4 pr-4 rounded-lg bg-white/2 border border-white/5 hover:border-[#FFD700]/25 hover:bg-[#FFD700]/3 transition-all duration-300"
              >
                {/* left accent bar */}
                <div className="absolute left-0 top-3 bottom-3 w-0.5 rounded-full bg-[#FFD700]/40 group-hover:bg-[#FFD700] transition-colors" aria-hidden="true" />
                <span className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-[#FFD700]/60 group-hover:text-[#FFD700] transition-colors">{item.num}</span>
                <div className="text-[#e5e2e1] text-sm font-semibold mt-2">{item.title}</div>
                <div className="text-outline text-xs mt-2 leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
