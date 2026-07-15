"use client";
import { useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const team = [
  { name: "Olamilekan Umar", role: "Technical Lead", initials: "OU", desc: "Master of structural integrity and technical precision.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-hkMFW5s9imfx_Xpm2VXNhCwXu_GNzw46TPdzO9JYqtAK_warj7cE5WtYBCC6sTFFnzYR_fwJs9ZGEiP_eEPu0IXOVhOn3By4MOrIYQD40B7x2RrX7aRvPNj4sEfsT3RceJOLB-ajIBVMtj3C_qR_DpEFEyOYVv-EDHB3Q0J44J83Zu65UhSFMdoAnfMlBwhtGa4lKRT-V1qHXOHUOs2SJkHbFUn-JQzNayN9K_En6eE_LqKEBRmpaFf5skSWo8PUffv3upJq59Xz", linkedin: "https://www.linkedin.com/in/yaqoob-umar-99ab00233" },
  { name: "Alex Jnr.", role: "Project Lead", initials: "AJ", desc: "Specialist in project delivery and client relations.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFPeXLjnTZFYpdbLkKYKntEn7rekjKo88NZ3wtcuN4sNkjeSK_qCfkmz0Yup7F4u4Es61k2jQtt7yctCEbPwu7IT3GS2psVZD2VKD1MbEtoVL77oX7p2yGJTs1Er9Pb6Tn9nWMqI42Nr02jbk5NQTpS4My7m_k3R8tjs9D0mRvmxT0ljdDSfnY33YvzPG16Nmwzt-X1zT6dGAmkZjHSyes0Rhzm0kx9vU1P101sypIL55B3IkmGuAS-k8zu1Upz64NS_nJNq7jkA53", linkedin: "#" },
  { name: "Uche Uchendu", role: "Design Lead", initials: "UU", desc: "The architect of visual identity and creative direction.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuChvY3DvwLNdZmU6VC1PMfAp3pABeXAnUBcrzuCFM2j0edYYgWWr8cYACqJvyIm7udZgesT8Qy8oDcIBm4ORvylpuuYuYIKJa1s7j5-4fRuO-PVExodIlgjrVQOpHU5up-ctH5ZTRlGTRBdRNijH7jXS97TikbylpuZ-AU3c9bcK3oZOWpKP-qSPUpSQ23LDCvucNyGSVUkK6fFbTZuKmD7Ks-UxHOo7MhkQvwtvSY_ozSlYJaJABWo4TAA_ln7Z6Ddyy04dgWpE_oY", linkedin: "https://www.linkedin.com/in/uche-uchendu-9b8b1115b" },
  { name: "Stephen Nwadialor", role: "Business Analyst", initials: "SN", desc: "Data-driven strategies for optimal project outcomes.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAoE4FIjdI8KBv9_VEiP9tPpRPvttSBFdOQinZv7SzdXzu-0K15cQwI-bAbQUqgLeT1BV3rPMExLn47LX7pgAqRpDOG_cFRHsPqa0RBIJhN-uuvbUeDEszvKMSpasp9s-S8jtOHtEFKAgRr6eLbIjKdNUvwVRkhosssOobELo6USsLDnc7sMP40SVyWtX22EyVuuAnd6avnBWdwOev_hBHMxsg7kE4PicKL8-GTP8S6cwbtrOC6SB6JIXzLqiCXAA1alkcNYMTeD8r", linkedin: "https://www.linkedin.com/in/stephen-nwadialor/" },
];

function TeamCard({ m }: { m: typeof team[0] }) {
  return (
    <article className="group flex-shrink-0 w-[300px] md:w-[340px]">
      <div className="relative aspect-[3/4] rounded-lg overflow-hidden glass-card mb-6 border-t border-[#c7f300]/30">
        <img
          src={m.img}
          alt={`Portrait of ${m.name}, ${m.role} at Realmaxville`}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
        <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-[#c7f300] shadow-[0_0_10px_#c7f300]" aria-hidden="true" />
      </div>
      <h4 className="text-xl font-bold text-[#e5e2e1] group-hover:text-[#c7f300] transition-colors">
        {m.name}
      </h4>
      <p className="font-[var(--font-space-mono)] text-[10px] tracking-[0.2em] text-[#c7f300] mt-1.5 mb-3">
        {m.role}
      </p>
      <p className="text-[#b0b3b4] text-sm leading-relaxed">{m.desc}</p>
      <div className="mt-4 flex gap-2">
        <a
          href={m.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#8e9192] text-xs hover:bg-[#c7f300] hover:text-[#171e00] transition-all"
          aria-label={`${m.name} on LinkedIn`}
        >
          in
        </a>
      </div>
    </article>
  );
}

export default function Team() {
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mql.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  const doubled = [...team, ...team];

  return (
    <section className="py-32 bg-[#0e0e0e]" aria-labelledby="team-heading">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 w-full">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 px-6 md:px-16">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-px bg-[#c7f300]" aria-hidden="true" />
                <span className="font-[var(--font-space-mono)] text-xs tracking-[0.2em] text-[#c7f300]">OUR CORE</span>
              </div>
              <h2 id="team-heading" className="text-4xl md:text-[48px] font-extrabold leading-tight">
                THE ARCHITECTS <br />OF THE LAB
              </h2>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Auto-scrolling track */}
      <div
        className="relative overflow-hidden group/team"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        aria-label="Team members auto-scrolling carousel"
        role="region"
        aria-roledescription="carousel"
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0e0e0e] to-transparent z-10 pointer-events-none" aria-hidden="true" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0e0e0e] to-transparent z-10 pointer-events-none" aria-hidden="true" />

        <div
          className="flex gap-8 px-8 team-scroll-track"
          style={{
            animationPlayState: reducedMotion ? "paused" : paused ? "paused" : "running",
          }}
          aria-live="off"
        >
          {doubled.map((m, i) => (
            <div key={`${m.name}-${i}`} role="group" aria-roledescription="slide" aria-label={`${(i % team.length) + 1} of ${team.length}: ${m.name}`}>
              <TeamCard m={m} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
