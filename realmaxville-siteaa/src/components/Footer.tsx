"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  ArrowUpRight, 
  Award, 
  ShieldCheck, 
  Sparkles,
  Globe
} from "lucide-react";

export default function Footer() {
  const [activeCity, setActiveCity] = useState<"lagos" | "abuja" | "enugu">("lagos");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const offices = {
    lagos: {
      address: "4a, Ogombo Rd, Opp Abraham Adesanya Estate, Eti-Osa, Lagos, Nigeria",
      phone: "0808 041 9259 / +234 808 041 9259",
      email: "admin@realmaxville.com",
      hours: "Mon - Fri: 8:00 AM - 6:00 PM WAT"
    },
    abuja: {
      address: "Mabushi District Project Studio, Abuja, Nigeria",
      phone: "0808 041 9259 / +234 808 041 9259",
      email: "admin@realmaxville.com",
      hours: "Mon - Fri: 8:00 AM - 6:00 PM WAT"
    },
    enugu: {
      address: "Enugu Regional Operations Hub, Enugu, Nigeria",
      phone: "0808 041 9259 / +234 808 041 9259",
      email: "admin@realmaxville.com",
      hours: "Mon - Fri: 8:00 AM - 6:00 PM WAT"
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail("");
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="relative bg-[#050608] pt-20 pb-10 border-t border-white/10 overflow-hidden">
      {/* Subtle background ambient blur */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E6C687]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00F5A0]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Vision Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-sans font-extrabold tracking-[-0.04em] text-xl text-[#e5e2e1]">
                REALMAXVILLE
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Pioneering futuristic luxury architecture, structural engineering precision, and high-end residential & commercial master planning worldwide. We transform bold visions into architectural legacies.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-gray-400 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <Award className="w-4 h-4 text-[#E6C687]" />
                <span>28+ Intl Design Awards</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <ShieldCheck className="w-4 h-4 text-[#00F5A0]" />
                <span>ISO 9001 Structural Cert.</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-mono text-xs text-[#E6C687] uppercase tracking-widest mb-4">Navigation</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors flex items-center gap-1 group"><span>Home</span> <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#E6C687]" /></Link></li>
                <li><Link href="/projects" className="hover:text-white transition-colors flex items-center gap-1 group"><span>Projects</span> <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#E6C687]" /></Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors flex items-center gap-1 group"><span>Services</span> <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#E6C687]" /></Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors flex items-center gap-1 group"><span>About Us</span> <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#E6C687]" /></Link></li>
                <li><Link href="/contact" className="hover:text-[#E6C687] transition-colors flex items-center gap-1 group"><span>Contact</span> <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#E6C687]" /></Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs text-[#E6C687] uppercase tracking-widest mb-4">Specialties</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li><span className="hover:text-white cursor-default">Luxury Villas</span></li>
                <li><span className="hover:text-white cursor-default">Sky Towers</span></li>
                <li><span className="hover:text-white cursor-default">Smart Estates</span></li>
                <li><span className="hover:text-white cursor-default">3D Parametric</span></li>
                <li><span className="hover:text-white cursor-default">Turnkey EPC</span></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-mono text-xs text-[#E6C687] uppercase tracking-widest">Architectural Dispatch</h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              Subscribe to received curated insights on contemporary luxury architecture, parametric engineering trends, and project unveils.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your VIP email address..."
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E6C687] transition-colors pr-12"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#E6C687] text-black rounded-lg hover:bg-[#D4AF37] transition-colors cursor-pointer"
                  aria-label="Subscribe"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-[#00F5A0] flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Welcome to the Realmaxville VIP Dispatch.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Interactive Global Offices Switcher */}
        <div className="py-12 border-b border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-[#E6C687]" />
              <h3 className="font-display font-semibold text-lg text-white">Global Headquarters & Studios</h3>
            </div>

            {/* City Selector Buttons */}
            <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/10 w-fit">
              {(["lagos", "abuja", "enugu"] as const).map((city) => (
                <button
                  key={city}
                  onClick={() => setActiveCity(city)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    activeCity === city
                      ? "bg-[#E6C687] text-black font-bold shadow-gold-glow"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

          {/* Active City Details Card */}
          <div className="glass-panel p-6 rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#E6C687] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-mono text-gray-400 uppercase">Address</p>
                <p className="text-white font-medium mt-1">{offices[activeCity].address}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[#E6C687] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-mono text-gray-400 uppercase">Direct Line & Hours</p>
                <p className="text-white font-medium mt-1">{offices[activeCity].phone}</p>
                <p className="text-xs text-gray-400 mt-0.5">{offices[activeCity].hours}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#E6C687] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-mono text-gray-400 uppercase">Direct Inquiries</p>
                <p className="text-[#E6C687] font-medium mt-1">{offices[activeCity].email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Realmaxville Engineering & Architectural Group. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300">Terms of Service</Link>
            <Link href="/nondiscrimination" className="hover:text-gray-300">Nondiscrimination</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
