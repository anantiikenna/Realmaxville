import Link from "next/link";
import Image from "next/image";
import { Instagram, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Nondiscrimination Notice", href: "/nondiscrimination" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white/60 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo1.png"
                alt="Realmaxville"
                width={36}
                height={36}
                className="object-contain"
              />
              <span className="font-display text-base font-bold text-white">
                Realmaxville
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-7 text-gray-400">
              Building legacies in architecture, engineering, and construction
              across Nigeria.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition hover:text-[#E6C687]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Legal
            </h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition hover:text-[#E6C687]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>4a Ogombo Rd, Lagos, Nigeria</li>
              <li>0808 041 9259</li>
              <li className="flex items-center gap-4 pt-1">
                <a
                  href="https://www.instagram.com/realmaxville/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#E6C687]"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/2348080419259"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#E6C687]"
                  aria-label="WhatsApp"
                >
                  <Phone className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center text-xs text-white/40">
            &copy; {new Date().getFullYear()} Realmaxville. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <span>·</span>
            <Link href="/nondiscrimination" className="hover:text-white transition-colors">Nondiscrimination</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
