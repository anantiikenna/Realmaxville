"use client";

import React from "react";
import ContactForm from "@/components/ContactForm";
import { PhoneCall, MapPin, Mail, Clock, Globe } from "lucide-react";

const offices = [
  {
    city: "Lagos",
    flag: "🇳🇬",
    address: "Suite 402, Realmaxville Tower, Victoria Island, Lagos",
    phone: "+234 800 REALMAX",
    email: "lagos@realmaxville.com",
    hours: "Mon – Fri: 8:00 AM – 6:00 PM WAT",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.711!2d3.4063!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjUnNDEuMiJOIDPCsDI0JzIyLjciRQ!5e0!3m2!1sen!2sng!4v1",
  },
  {
    city: "London",
    flag: "🇬🇧",
    address: "12 Mayfair Park Lane, Westminster, London W1K 1AB",
    phone: "+44 20 7946 0912",
    email: "uk@realmaxville.com",
    hours: "Mon – Fri: 9:00 AM – 5:30 PM GMT",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.05!2d-0.1540!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzI2LjYiTiAwwrAwOScxNC40Ilc!5e0!3m2!1sen!2suk!4v1",
  },
  {
    city: "Dubai",
    flag: "🇦🇪",
    address: "Level 48, Boulevard Plaza Tower 1, Downtown Dubai",
    phone: "+971 4 392 8810",
    email: "dubai@realmaxville.com",
    hours: "Mon – Fri: 9:00 AM – 6:00 PM GST",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.22!2d55.2796!3d25.1972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDExJzUwLjAiTiA1NcKwMTYnNDYuNiJF!5e0!3m2!1sen!2sae!4v1",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-[#07080A] min-h-screen">

      {/* ── Page Header ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6C687]/10 border border-[#E6C687]/30 text-[#E6C687] text-xs font-mono tracking-widest uppercase">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Direct VIP Desk</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight">
            START YOUR <span className="text-gold-gradient">LEGACY PROJECT</span>
          </h1>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Our principal architectural directors are ready to discuss your vision, site parameters, and structural engineering scope. Offices in Lagos, London &amp; Dubai.
          </p>
        </div>
      </div>

      {/* ── Global Offices Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex items-center gap-2 mb-8">
          <Globe className="w-5 h-5 text-[#E6C687]" />
          <h2 className="font-display font-semibold text-xl text-white">Global Headquarters &amp; Studios</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offices.map((office) => (
            <div
              key={office.city}
              className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-[#E6C687]/40 transition-all space-y-5 group"
            >
              {/* City badge */}
              <div className="flex items-center gap-3">
                <span className="text-2xl">{office.flag}</span>
                <div>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-[#E6C687] transition-colors">
                    {office.city}
                  </h3>
                  <span className="text-[10px] font-mono text-[#E6C687]/70 uppercase tracking-wider">
                    Regional Studio
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-3 text-xs font-mono">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#E6C687] shrink-0 mt-0.5" />
                  <span className="text-gray-300 leading-relaxed">{office.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <PhoneCall className="w-4 h-4 text-[#E6C687] shrink-0" />
                  <span className="text-white font-semibold">{office.phone}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#E6C687] shrink-0" />
                  <span className="text-[#E6C687]">{office.email}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-gray-500 shrink-0" />
                  <span className="text-gray-400">{office.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Consultation Form ── */}
      <ContactForm />
    </div>
  );
}
