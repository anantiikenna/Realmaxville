"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-surface-container-lowest py-16 border-t border-white/5" role="contentinfo">
      {/* Watermark — background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
        style={{ zIndex: 0 }}
      >
        <span
          className="font-extrabold text-center whitespace-nowrap"
          style={{ fontSize: "clamp(40px, 10vw, 120px)", color: "rgba(199,243,0,0.025)", letterSpacing: "-0.02em" }}
        >
          REALMAXVILLE
        </span>
      </div>

      {/* Footer content */}
      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 site-container" style={{ zIndex: 10 }}>
        {/* Brand */}
        <div className="space-y-6">
          <Link href="/" className="inline-flex items-center gap-2 group">
            <img src="/images/logo1.png" alt="" className="w-8 h-8 rounded-lg object-cover" aria-hidden="true" />
            <span className="font-extrabold text-[#e5e2e1] tracking-tight text-lg group-hover:text-[#c7f300] transition-colors">
              REALMAXVILLE
            </span>
          </Link>
          <p className="text-[#b0b3b4] opacity-70 text-sm leading-relaxed">
            Building Legacies. Engineering the Future. Creating timeless spaces since 2017.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/realmaxville" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[#c7f300] hover:text-on-accent transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
            <a href="https://wa.me/2348080419259" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[#c7f300] hover:text-on-accent transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/realmaxville" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[#c7f300] hover:text-on-accent transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h5 className="font-(--font-space-mono) text-xs tracking-[0.2em] text-[#c7f300] uppercase">Quick Links</h5>
          <ul className="space-y-2">
            <li><Link href="/about" className="text-[#b0b3b4] opacity-70 hover:text-[#c7f300] transition-all text-sm">About Us</Link></li>
            <li><Link href="/projects" className="text-[#b0b3b4] opacity-70 hover:text-[#c7f300] transition-all text-sm">Featured Projects</Link></li>
            <li><Link href="/#services" className="text-[#b0b3b4] opacity-70 hover:text-[#c7f300] transition-all text-sm">Service Catalog</Link></li>
            <li><Link href="/contact" className="text-[#b0b3b4] opacity-70 hover:text-[#c7f300] transition-all text-sm">Contact</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="space-y-4">
          <h5 className="font-(--font-space-mono) text-xs tracking-[0.2em] text-[#c7f300] uppercase">Legal & Compliance</h5>
          <ul className="space-y-2">
            <li><Link href="/privacy" className="text-[#b0b3b4] opacity-70 hover:text-[#c7f300] transition-all text-sm">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-[#b0b3b4] opacity-70 hover:text-[#c7f300] transition-all text-sm">Terms of Service</Link></li>
            <li><Link href="/nondiscrimination" className="text-[#b0b3b4] opacity-70 hover:text-[#c7f300] transition-all text-sm">Nondiscrimination</Link></li>
          </ul>
        </div>

        {/* Headquarters */}
        <div className="space-y-4">
          <h5 className="font-(--font-space-mono) text-xs tracking-[0.2em] text-[#c7f300] uppercase">Headquarters</h5>
          <p className="text-[#b0b3b4] opacity-70 text-sm">
            4a, Ogombo Rd, Opp Abraham Adesanya Estate<br />
            Eti-Osa, Lagos, Nigeria
          </p>
          <p className="text-[#c7f300] font-bold text-sm">
            <a href="tel:+2348080419259" className="hover:underline">+234 808 041 9259</a>
          </p>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-white/5 text-center site-container" style={{ zIndex: 10, position: "relative" }}>
        <p className="text-sm text-[#b0b3b4] opacity-50">&copy; {new Date().getFullYear()} Realmaxville. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
