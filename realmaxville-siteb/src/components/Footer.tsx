import Link from "next/link";
import Image from "next/image";
import { Instagram, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/projects" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Nondiscrimination", href: "/nondiscrimination" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D1117] border-t border-white/5">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-copper-500/20 group-hover:border-copper-500/40 transition-all">
                <Image
                  src="/logo1.png"
                  alt="Realmaxville"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <span className="font-serif text-sm font-semibold tracking-widest text-ivory-100 block">
                  REALMAXVILLE
                </span>
                <span className="font-mono text-[9px] text-copper-500 uppercase tracking-[0.2em]">
                  Architecture · Build · Legacy
                </span>
              </div>
            </Link>
            <p className="text-sm text-ivory-300/45 leading-relaxed max-w-xs">
              Building extraordinary architectural legacies across Nigeria through precision engineering and artistic vision since 2009.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.instagram.com/realmaxville/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 text-ivory-400/60 hover:bg-copper-500/15 hover:text-copper-400 transition-all"
                aria-label="Realmaxville on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/2348080419259"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 text-ivory-400/60 hover:bg-emerald-500/15 hover:text-emerald-400 transition-all"
                aria-label="WhatsApp"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href="mailto:admin@realmaxville.com"
                className="p-2.5 rounded-xl bg-white/5 text-ivory-400/60 hover:bg-copper-500/15 hover:text-copper-400 transition-all"
                aria-label="Email Realmaxville"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-copper-400 mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory-300/50 hover:text-copper-300 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-copper-400 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-copper-400 mb-5">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory-300/50 hover:text-copper-300 transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-copper-400 mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-4 text-sm text-ivory-300/45">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-copper-500/60 shrink-0 mt-0.5" />
                <span>4a Ogombo Rd, Opp Abraham Adesanya Estate, Eti-Osa, Lagos</span>
              </li>
              <li>
                <a href="tel:+2348080419259" className="flex items-center gap-2.5 hover:text-copper-300 transition-colors">
                  <Phone className="h-4 w-4 text-copper-500/60" />
                  0808 041 9259
                </a>
              </li>
              <li>
                <a href="mailto:admin@realmaxville.com" className="flex items-center gap-2.5 hover:text-copper-300 transition-colors">
                  <Mail className="h-4 w-4 text-emerald-500/60" />
                  admin@realmaxville.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ivory-400/30 font-mono">
            © {new Date().getFullYear()} Realmaxville. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-ivory-400/30">
            {legalLinks.map((l, i) => (
              <span key={l.label} className="flex items-center gap-4">
                {i > 0 && <span className="text-ivory-400/15">·</span>}
                <Link href={l.href} className="hover:text-ivory-100 transition-colors">
                  {l.label}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
