"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import ScrollReveal from "./ScrollReveal";

const team = [
  { name: "Olamilekan Umar", role: "Technical Lead", initials: "OU", desc: "Master of structural integrity and technical precision.", img: "/images/team/olamilekan.jpg", linkedin: "https://www.linkedin.com/in/yaqoob-umar-99ab00233" },
  { name: "Alex Jnr.", role: "Project Lead", initials: "AJ", desc: "Specialist in project delivery and client relations.", img: "/images/team/alex.jpg", linkedin: "#" },
  { name: "Uche Uchendu", role: "Design Lead", initials: "UU", desc: "The architect of visual identity and creative direction.", img: "/images/team/uche.jpg", linkedin: "https://www.linkedin.com/in/uche-uchendu-9b8b1115b" },
  { name: "Stephen Nwadialor", role: "Business Analyst", initials: "SN", desc: "Data-driven strategies for optimal project outcomes.", img: "/images/team/stephen.jpg", linkedin: "https://www.linkedin.com/in/stephen-nwadialor/" },
];

function TeamCard({ m }: { m: typeof team[0] }) {
  return (
    <article className="group shrink-0 w-[280px] md:w-[340px] select-none">
      <div className="relative aspect-3/4 rounded-lg overflow-hidden glass-card mb-4 border-t border-[#FFD700]/30">
        <img
          src={m.img}
          alt={`Portrait of ${m.name}, ${m.role} at Realmaxville`}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          loading="lazy"
          draggable={false}
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
        <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-[#FFD700] shadow-[0_0_10px_#FFD700] pulse-active" aria-hidden="true" />
      </div>
      <h4 className="text-lg font-bold text-[#e5e2e1] group-hover:text-[#FFD700] transition-colors">
        {m.name}
      </h4>
      <p className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-[#FFD700] mt-1 mb-2">
        {m.role}
      </p>
      <p className="text-[#b0b3b4] text-sm leading-relaxed">{m.desc}</p>
      <div className="mt-3 flex gap-2">
        <a
          href={m.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-outline text-xs hover:bg-[#FFD700] hover:text-on-accent transition-all"
          aria-label={`${m.name} on LinkedIn`}
        >
          in
        </a>
      </div>
    </article>
  );
}

export default function Team() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const dragRef = useRef({ isDragging: false, startX: 0, scrollLeft: 0, velocity: 0, lastX: 0, lastTime: 0 });
  const autoScrollRef = useRef<number | null>(null);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mql.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  // Auto-scroll
  useEffect(() => {
    const el = trackRef.current;
    if (!el || reducedMotion || paused) {
      if (autoScrollRef.current) cancelAnimationFrame(autoScrollRef.current);
      return;
    }

    let lastTime = performance.now();
    const speed = 1.5;

    const tick = (now: number) => {
      const dt = now - lastTime;
      lastTime = now;
      if (!dragRef.current.isDragging) {
        const delta = speed * (dt / 16);
        el.scrollLeft += direction === "left" ? delta : -delta;
        // Loop
        const maxScroll = el.scrollWidth / 2;
        if (el.scrollLeft >= maxScroll) el.scrollLeft -= maxScroll;
        if (el.scrollLeft < 0) el.scrollLeft += maxScroll;
      }
      autoScrollRef.current = requestAnimationFrame(tick);
    };

    autoScrollRef.current = requestAnimationFrame(tick);
    return () => {
      if (autoScrollRef.current) cancelAnimationFrame(autoScrollRef.current);
    };
  }, [paused, reducedMotion, direction]);

  // Arrow navigation
  const scrollBy = useCallback((dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = 300 + 32; // card width + gap
    el.scrollBy({ left: dir === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
  }, []);

  // Touch/mouse drag
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    const el = trackRef.current;
    if (!el) return;
    dragRef.current = { isDragging: true, startX: e.clientX, scrollLeft: el.scrollLeft, velocity: 0, lastX: e.clientX, lastTime: performance.now() };
    el.style.cursor = "grabbing";
    el.setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    const d = dragRef.current;
    if (!d.isDragging) return;
    const dx = e.clientX - d.lastX;
    const dt = performance.now() - d.lastTime;
    d.velocity = dt > 0 ? dx / dt : 0;
    d.lastX = e.clientX;
    d.lastTime = performance.now();
    const el = trackRef.current;
    if (el) {
      el.scrollLeft = d.scrollLeft - (e.clientX - d.startX);
    }
  }, []);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    const d = dragRef.current;
    if (!d.isDragging) return;
    d.isDragging = false;
    const el = trackRef.current;
    if (el) {
      el.style.cursor = "grab";
      el.releasePointerCapture(e.pointerId);
      const inertia = () => {
        if (Math.abs(d.velocity) < 0.01 || d.isDragging) return;
        el.scrollLeft -= d.velocity * 16;
        d.velocity *= 0.95;
        const maxScroll = el.scrollWidth / 2;
        if (el.scrollLeft >= maxScroll) el.scrollLeft -= maxScroll;
        if (el.scrollLeft < 0) el.scrollLeft += maxScroll;
        requestAnimationFrame(inertia);
      };
      requestAnimationFrame(inertia);
    }
  }, []);

  const doubled = [...team, ...team];

  return (
    <section className="py-32 bg-surface-container-lowest" aria-labelledby="team-heading">
      <div className="section-inner">
        <ScrollReveal>
          <div className="flex flex-col justify-between items-start mb-16 gap-8">
            <div className="max-w-[36rem]">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-px bg-[#FFD700]" aria-hidden="true" />
                <span className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-[#FFD700] uppercase">OUR CORE</span>
              </div>
              <h2 id="team-heading" className="text-3xl md:text-5xl font-extrabold leading-[1.15]">
                THE ARCHITECTS <br />OF THE LAB
              </h2>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Carousel with arrows */}
      <div className="relative group/team">
        {/* Arrow buttons */}
        <button
          onClick={() => { setDirection("left"); scrollBy("left"); }}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#050505]/80 border border-white/10 flex items-center justify-center text-[#FFD700] hover:bg-[#FFD700] hover:text-[#1a1200] transition-all opacity-0 group-hover/team:opacity-100"
          aria-label="Scroll left"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button
          onClick={() => { setDirection("right"); scrollBy("right"); }}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#050505]/80 border border-white/10 flex items-center justify-center text-[#FFD700] hover:bg-[#FFD700] hover:text-[#1a1200] transition-all opacity-0 group-hover/team:opacity-100"
          aria-label="Scroll right"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-linear-to-r from-surface-container-lowest to-transparent z-10 pointer-events-none" aria-hidden="true" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-linear-to-l from-surface-container-lowest to-transparent z-10 pointer-events-none" aria-hidden="true" />

        {/* Track */}
        <div
          ref={trackRef}
          className="flex gap-6 md:gap-8 px-6 md:px-8 overflow-x-auto"
          style={{ cursor: "grab", scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
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
