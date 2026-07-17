"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: scrolled
          ? "1px solid rgba(199,243,0,0.2)"
          : "1px solid rgba(255,255,255,0.05)",
        backgroundColor: scrolled
          ? "rgba(19,19,19,0.95)"
          : "rgba(19,19,19,0.3)",
        boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.5)" : "none",
        transition: "all 0.3s ease",
      }}
      aria-label="Main navigation"
    >
      {/* Main nav row */}
      <div
        className="nav-inner"
        style={{
          paddingTop: scrolled ? "0.75rem" : "1.1rem",
          paddingBottom: scrolled ? "0.75rem" : "1.1rem",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
          }}
        >
          <span style={{ fontSize: "1.25rem", fontWeight: 800, letterSpacing: "-0.04em", color: "#e5e2e1" }}>
            REALMAXVILLE
          </span>
          <span className="pulse-active" style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#c7f300", display: "inline-block" }} aria-hidden="true" />
        </Link>

        {/* Desktop nav links — uses .nav-desktop CSS class for responsive show/hide */}
        <div className="nav-desktop">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: isActive ? "#c7f300" : "#b0b3b4",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  borderBottom: isActive ? "1px solid #c7f300" : "1px solid transparent",
                  paddingBottom: "2px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c7f300")}
                onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? "#c7f300" : "#b0b3b4")}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/contact" className="btn-cta" style={{ marginLeft: "1rem" }}>
            Get a Quote
          </Link>
        </div>

        {/* Mobile hamburger — uses .nav-mobile-btn CSS class */}
        <button
          onClick={() => setOpen(!open)}
          className="nav-mobile-btn"
          style={{
            alignItems: "center",
            justifyContent: "center",
            color: "#c7f300",
            padding: "0.5rem",
            minWidth: 44,
            minHeight: 44,
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer — uses .mobile-nav-drawer CSS class */}
      <div
        className={`mobile-nav-drawer${open ? " open" : ""}`}
        style={{
          padding: "1.5rem 2rem",
          backgroundColor: "rgba(14,14,14,0.97)",
          borderTop: "1px solid rgba(199,243,0,0.1)",
          gap: "0.25rem",
          boxShadow: "0 16px 40px rgba(0,0,0,0.6)",
        }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#b0b3b4",
              textDecoration: "none",
              padding: "0.875rem 0",
              minHeight: 44,
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
              transition: "color 0.2s",
            }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setOpen(false)}
          className="btn-cta"
          style={{ marginTop: "1rem", width: "100%", height: "3rem" }}
        >
          Get a Quote
        </Link>
      </div>
    </nav>
  );
}
