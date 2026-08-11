"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Building2, 
  Compass, 
  Briefcase, 
  Users, 
  PhoneCall, 
  Menu, 
  X, 
  Sparkles,
  Calculator
} from "lucide-react";

interface NavbarProps {
  onOpenEstimator?: () => void;
}

export default function Navbar({ onOpenEstimator }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: Building2 },
    { name: "Projects", href: "/projects", icon: Compass },
    { name: "Services", href: "/services", icon: Briefcase },
    { name: "About", href: "/about", icon: Users },
    { name: "Contact", href: "/contact", icon: PhoneCall },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3 bg-[#07080A]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/images/logo1.png"
              alt="Realmaxville Logo"
              className="w-9 h-9 rounded-full object-cover group-hover:scale-105 transition-transform shrink-0"
            />
            <div className="flex flex-col">
              <span className="font-sans font-extrabold tracking-[-0.04em] text-xl text-[#e5e2e1] group-hover:text-[#E6C687] transition-colors">
                REALMAXVILLE
              </span>
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#E6C687]/80 uppercase -mt-1">
                Architectural Legacies
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-[#E6C687] to-[#D4AF37] text-black font-semibold shadow-gold-glow"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {onOpenEstimator && (
              <button
                onClick={onOpenEstimator}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E6C687] bg-[#E6C687]/10 border border-[#E6C687]/30 hover:bg-[#E6C687]/20 transition-all cursor-pointer"
              >
                <Calculator className="w-3.5 h-3.5" />
                Cost Estimator
              </button>
            )}

            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold uppercase tracking-wider rounded-full group bg-gradient-to-r from-[#E6C687] via-[#D4AF37] to-[#C7F300] hover:scale-105 transition-all shadow-gold-glow"
            >
              <span className="px-5 py-2.5 bg-[#07080A] text-[#E6C687] rounded-full group-hover:bg-transparent group-hover:text-black transition-all duration-300 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                Consult Architect
              </span>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07080A]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium uppercase tracking-wider ${
                    isActive
                      ? "bg-gradient-to-r from-[#E6C687] to-[#D4AF37] text-black font-bold"
                      : "text-gray-300 hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            {onOpenEstimator && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimator();
                }}
                className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-[#E6C687] bg-[#E6C687]/10 border border-[#E6C687]/30 flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4" />
                Live Project Estimator
              </button>
            )}

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#E6C687] to-[#D4AF37] text-center shadow-gold-glow block"
            >
              Consult Architect
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
