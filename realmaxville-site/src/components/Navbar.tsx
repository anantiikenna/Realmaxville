"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/plans", label: "Building Plans" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/5 transition-all duration-300 ${
        scrolled
          ? "bg-surface/90 py-3 border-[#c7f300]/20 shadow-lg shadow-black/50"
          : "bg-surface/20 py-6"
      }`}
      aria-label="Main navigation"
    >
      <div className="flex justify-between items-center px-8 md:px-24 max-w-6xl mx-auto w-full">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-tighter text-[#e5e2e1]">
            REALMAXVILLE
          </span>
          <span className="w-2 h-2 rounded-full bg-[#c7f300] pulse-active" aria-hidden="true" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-[var(--font-space-mono)] text-xs tracking-[0.2em] uppercase text-[#b0b3b4] hover:text-[#c7f300] transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-4">
            <Link
              href="/contact"
              className="bg-[#c7f300] text-[#171e00] px-10 h-12 rounded-full font-[var(--font-space-mono)] text-xs tracking-[0.2em] uppercase font-bold hover:shadow-[0_0_20px_rgba(199,243,0,0.4)] transition-all active:scale-95 flex items-center justify-center"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#c7f300] p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-500 ${open ? "max-h-[400px]" : "max-h-0"}`}>
        <div className="px-8 py-6 bg-[#0e0e0e]/95 backdrop-blur-xl border-t border-[#c7f300]/10 flex flex-col gap-2 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-[var(--font-space-mono)] text-xs tracking-[0.2em] uppercase text-[#b0b3b4] hover:text-[#c7f300] transition-colors py-3 min-h-[44px] flex items-center"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="bg-[#c7f300] text-[#171e00] px-6 py-4 mt-2 rounded-full font-[var(--font-space-mono)] text-xs tracking-[0.2em] uppercase font-bold text-center inline-flex items-center justify-center w-full"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
