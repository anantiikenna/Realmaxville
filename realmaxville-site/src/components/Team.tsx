"use client";
import { useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const team = [
  { name: "Olamilekan Umar", role: "Technical Lead", initials: "OU", desc: "Master of structural integrity and technical precision.", img: "/images/team/olamilekan.jpg", linkedin: "https://www.linkedin.com/in/yaqoob-umar-99ab00233" },
  { name: "Alex Jnr.", role: "Project Lead", initials: "AJ", desc: "Specialist in project delivery and client relations.", img: "/images/team/alex.jpg", linkedin: "#" },
  { name: "Uche Uchendu", role: "Design Lead", initials: "UU", desc: "The architect of visual identity and creative direction.", img: "/images/team/uche.jpg", linkedin: "https://www.linkedin.com/in/uche-uchendu-9b8b1115b" },
  { name: "Stephen Nwadialor", role: "Business Analyst", initials: "SN", desc: "Data-driven strategies for optimal project outcomes.", img: "/images/team/stephen.jpg", linkedin: "https://www.linkedin.com/in/stephen-nwadialor/" },
];

function TeamCard({ m }: { m: typeof team[0] }) {
  return (
    <article className="group shrink-0 w-[300px] md:w-[340px]">
      <div className="relative aspect-3/4 rounded-lg overflow-hidden glass-card mb-6 border-t border-[#c7f300]/30">
        <img
          src={m.img}
          alt={`Portrait of ${m.name}, ${m.role} at Realmaxville`}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
        <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-[#c7f300] shadow-[0_0_10px_#c7f300] pulse-active" aria-hidden="true" />
      </div>
      <h4 className="text-xl font-bold text-[#e5e2e1] group-hover:text-[#c7f300] transition-colors">
        {m.name}
      </h4>
      <p className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-[#c7f300] mt-1.5 mb-3">
        {m.role}
      </p>
      <p className="text-[#b0b3b4] text-sm leading-relaxed">{m.desc}</p>
      <div className="mt-4 flex gap-2">
        <a
          href={m.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-outline text-xs hover:bg-[#c7f300] hover:text-on-accent transition-all"
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
    <section className="py-32 bg-surface-container-lowest" aria-labelledby="team-heading">
      <div className="section-inner">
        <ScrollReveal>
          <div className="flex flex-col justify-between items-start mb-16 gap-8">
            <div className="max-w-[36rem]">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-px bg-[#c7f300]" aria-hidden="true" />
                <span className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-[#c7f300] uppercase">OUR CORE</span>
              </div>
              <h2 id="team-heading" className="text-3xl md:text-5xl font-extrabold leading-[1.15]">
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
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-linear-to-r from-surface-container-lowest to-transparent z-10 pointer-events-none" aria-hidden="true" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-linear-to-l from-surface-container-lowest to-transparent z-10 pointer-events-none" aria-hidden="true" />

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
