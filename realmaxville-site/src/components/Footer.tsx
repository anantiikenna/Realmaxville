"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ width: "100%", backgroundColor: "#050505", borderTop: "1px solid rgba(199,243,0,0.1)" }} role="contentinfo">
      {/* Watermark — decorative, overlaps naturally */}
      <div className="relative overflow-hidden select-none pointer-events-none" aria-hidden="true">
        <div
          className="text-[clamp(60px,15vw,160px)] font-extrabold leading-none text-center"
          style={{ color: "rgba(199,243,0,0.04)", letterSpacing: "-0.02em", marginBottom: "-0.25em" }}
        >
          REALMAXVILLE
        </div>
      </div>

      <div className="section-inner pb-12">
        {/* Brand block */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 mb-14">
          <div className="max-w-xs">
            <Link href="/" className="inline-flex items-center gap-2 group mb-4">
              <img
                src="/images/logo1.png"
                alt=""
                className="w-8 h-8 rounded-lg object-cover"
                aria-hidden="true"
              />
              <span className="font-extrabold text-[#e5e2e1] tracking-tight text-lg group-hover:text-[#c7f300] transition-colors">
                REALMAXVILLE
              </span>
            </Link>
            <p className="text-outline text-sm leading-relaxed">
              A goal-oriented architecture & construction company delivering innovation and value in every project.
            </p>
          </div>

          {/* Nav columns */}
          <nav className="grid grid-cols-2 md:grid-cols-4 gap-10 text-left" aria-label="Footer navigation">
            <div className="flex flex-col gap-4">
              <span className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-[#c7f300] uppercase">
                Company
              </span>
              <Link href="/projects" className="text-on-surface-variant/70 hover:text-[#c7f300] transition-colors text-sm">Projects</Link>
              <Link href="/about" className="text-on-surface-variant/70 hover:text-[#c7f300] transition-colors text-sm">About Us</Link>
              <Link href="/contact" className="text-on-surface-variant/70 hover:text-[#c7f300] transition-colors text-sm">Contact</Link>
            </div>

            <div className="flex flex-col gap-4">
              <span className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-[#c7f300] uppercase">
                Services
              </span>
              <Link href="/#services" className="text-on-surface-variant/70 hover:text-[#c7f300] transition-colors text-sm">Architectural Design</Link>
              <Link href="/#services" className="text-on-surface-variant/70 hover:text-[#c7f300] transition-colors text-sm">Construction</Link>
              <Link href="/#services" className="text-on-surface-variant/70 hover:text-[#c7f300] transition-colors text-sm">Renovation</Link>
              <Link href="/#services" className="text-on-surface-variant/70 hover:text-[#c7f300] transition-colors text-sm">Interior Design</Link>
            </div>

            <div className="flex flex-col gap-4">
              <span className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-[#c7f300] uppercase">
                Legal
              </span>
              <a href="#" className="text-on-surface-variant/70 hover:text-[#c7f300] transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-on-surface-variant/70 hover:text-[#c7f300] transition-colors text-sm">Terms of Service</a>
            </div>

            <div className="flex flex-col gap-4">
              <span className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-[#c7f300] uppercase">
                Headquarters
              </span>
              <p className="text-on-surface-variant/70 text-sm leading-relaxed">
                4a, Ogombo Rd, Opp Abraham Adesanya Estate<br />
                Eti-Osa, Lagos, Nigeria
              </p>
              <a href="tel:08080419259" className="text-[#c7f300] font-semibold text-sm hover:underline">0808 041 9259</a>
              <a href="mailto:admin@realmaxville.com" className="text-on-surface-variant/70 hover:text-[#c7f300] transition-colors text-sm break-all">admin@realmaxville.com</a>
            </div>
          </nav>
        </div>

        <div className="w-full h-px bg-linear-to-r from-transparent via-[#c7f300]/15 to-transparent" aria-hidden="true" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8">
          <p className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-on-surface-variant/40">
            (C) 2026 REALMAXVILLE. ALL RIGHTS RESERVED.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              {
                href: "https://www.instagram.com/realmaxville?igsh=aGtiNHg3dG91NGd5",
                label: "Instagram",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                ),
              },
              {
                href: "https://wa.me/2348080419259",
                label: "WhatsApp",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                ),
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-outline hover:bg-[#c7f300] hover:text-on-accent hover:border-[#c7f300] transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#c7f300] pulse-active" aria-hidden="true" />
            <span className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-[#c7f300]">
              GLOBAL SERVER: ONLINE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
