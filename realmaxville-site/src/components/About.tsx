"use client";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section className="py-32 px-6 md:px-16 max-w-[1440px] mx-auto" aria-labelledby="about-heading">
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
              <div className="absolute inset-0 bg-gradient-to-tr from-[#050505]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="font-[var(--font-space-mono)] text-[10px] tracking-[0.2em] text-[#c7f300] bg-[#c7f300]/10 px-3 py-1 rounded-full border border-[#c7f300]/20 backdrop-blur-md">
                  PHASE 01: STRUCTURE
                </span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 glass-panel p-4 rounded-lg cyber-border">
              <div className="text-3xl font-extrabold text-[#c7f300]">6+</div>
              <div className="font-[var(--font-space-mono)] text-[10px] tracking-[0.2em] text-[#8e9192]">YEARS</div>
            </div>
            <div className="absolute -top-4 -left-4 w-20 h-20 border border-[#c7f300]/10 rounded-full animate-spin-slow" aria-hidden="true" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-12 h-px bg-[#c7f300]" aria-hidden="true" />
            <span className="font-[var(--font-space-mono)] text-xs tracking-[0.2em] text-[#c7f300]">ABOUT US</span>
          </div>
          <h2 id="about-heading" className="text-4xl md:text-[48px] font-extrabold leading-tight mt-2">
            WHERE WE BUILD <br />
            <span className="text-[#c7f300] neon-text-glow">YOUR VISIONS</span>
          </h2>
          <p className="mt-6 text-[#b0b3b4] leading-relaxed">
            RealMaxVille is a goal-oriented, construction structural and architectural company with a passion of satisfying our clients need with rich innovation and value creation. Established in 2017 and registered as a limited liability company, we started operations in 2019.
          </p>
          <p className="mt-5 text-[#b0b3b4] leading-relaxed">
            Guided and controlled by experience in diverse engineering fields, we provide general contracting, design-build, construction, renovation and construction management services designed to exceed expectations.
          </p>

          <div className="mt-10 flex flex-wrap gap-3" role="list">
            {["Professional Specialist", "Brilliant Ideas", "Precise Builders", "24/7 Assistance"].map((f) => (
              <span
                key={f}
                role="listitem"
                className="px-4 py-2 rounded-full bg-white/5 border border-[#c7f300]/20 font-[var(--font-space-mono)] text-[10px] tracking-[0.1em] text-[#b0b3b4] hover:border-[#c7f300]/60 hover:text-[#c7f300] transition-all cursor-default"
              >
                {f}
              </span>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6">
            {[
              { num: "01", title: "Meticulous Planning", desc: "Best schedules to keep you on track" },
              { num: "02", title: "Completion On Time", desc: "Timely delivery is our priority" },
              { num: "03", title: "Perfect Execution", desc: "Attention to detail always" },
              { num: "04", title: "Affordable Prices", desc: "Quality at fair prices" },
            ].map((item) => (
              <div key={item.num} className="flex gap-3 group">
                <span className="text-[#c7f300] font-bold text-lg group-hover:scale-125 transition-transform">{item.num}</span>
                <div>
                  <div className="text-[#e5e2e1] text-sm font-semibold">{item.title}</div>
                  <div className="text-[#8e9192] text-xs">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
