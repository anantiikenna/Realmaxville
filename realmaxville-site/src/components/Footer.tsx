"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ width: "100%", padding: "4rem 0", backgroundColor: "#050505", borderTop: "1px solid rgba(199,243,0,0.1)" }} role="contentinfo">
      <div className="site-container">
        <div className="text-center mb-16">
          <div className="text-[120px] md:text-[180px] font-extrabold text-[#e5e2e1] opacity-5 select-none leading-none" aria-hidden="true">
            REALMAXVILLE
          </div>
        </div>

        <nav className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left" aria-label="Footer navigation">
          <div className="flex flex-col gap-5">
            <span className="font-[var(--font-space-mono)] text-xs tracking-[0.2em] text-[#c7f300] mb-2">
              COMPANY
            </span>
            <Link href="/about" className="text-[#c4c7c7] opacity-70 hover:text-[#c7f300] hover:opacity-100 transition-all text-sm">
              About Us
            </Link>
            <Link href="/plans" className="text-[#c4c7c7] opacity-70 hover:text-[#c7f300] hover:opacity-100 transition-all text-sm">
              Building Plans
            </Link>
            <Link href="/contact" className="text-[#c4c7c7] opacity-70 hover:text-[#c7f300] hover:opacity-100 transition-all text-sm">
              Contact
            </Link>
          </div>

          <div className="flex flex-col gap-5">
            <span className="font-[var(--font-space-mono)] text-xs tracking-[0.2em] text-[#c7f300] mb-2">
              SERVICES
            </span>
            <span className="text-[#c4c7c7] opacity-70 text-sm">Architectural Design</span>
            <span className="text-[#c4c7c7] opacity-70 text-sm">Construction</span>
            <span className="text-[#c4c7c7] opacity-70 text-sm">Renovation</span>
            <span className="text-[#c4c7c7] opacity-70 text-sm">Interior Design</span>
          </div>

          <div className="flex flex-col gap-5">
            <span className="font-[var(--font-space-mono)] text-xs tracking-[0.2em] text-[#c7f300] mb-2">
              LEGAL
            </span>
            <span className="text-[#c4c7c7] opacity-70 text-sm cursor-pointer hover:text-[#c7f300] transition-all">Privacy Policy</span>
            <span className="text-[#c4c7c7] opacity-70 text-sm cursor-pointer hover:text-[#c7f300] transition-all">Terms of Service</span>
          </div>

          <div className="flex flex-col gap-5">
            <span className="font-[var(--font-space-mono)] text-xs tracking-[0.2em] text-[#c7f300] mb-2">
              HEADQUARTERS
            </span>
            <p className="text-[#c4c7c7] opacity-70 text-sm">
              4a, Ogombo Rd, Opp Abraham Adesanya Estate<br />
              Eti-Osa, Lagos, Nigeria
            </p>
            <a href="tel:08080419259" className="text-[#c7f300] font-bold text-sm hover:underline">0808 041 9259</a>
            <a href="mailto:admin@realmaxville.com" className="text-[#c4c7c7] opacity-70 text-sm hover:text-[#c7f300] transition-all hover:opacity-100">admin@realmaxville.com</a>
          </div>
        </nav>

        <div className="w-full h-px bg-[#c7f300]/5 my-16" aria-hidden="true" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="font-[var(--font-space-mono)] text-[10px] tracking-[0.2em] text-[#c4c7c7] opacity-50">
            © 2026 REALMAXVILLE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-[#c7f300] pulse-active" aria-hidden="true" />
            <span className="font-[var(--font-space-mono)] text-[10px] tracking-[0.2em] text-[#c7f300]">
              GLOBAL SERVER: ONLINE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
