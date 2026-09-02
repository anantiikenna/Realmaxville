"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Cookie Consent Notification"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 p-5 rounded-2xl bg-[#0E1015]/95 border border-[#E6C687]/30 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] animate-in slide-in-from-bottom-5 duration-300"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2 text-[#E6C687] text-xs font-mono font-bold uppercase tracking-widest">
          <Cookie className="w-4 h-4" />
          <span>Cookie & Privacy Choice</span>
        </div>
        <button
          onClick={handleDecline}
          className="text-gray-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
          aria-label="Dismiss cookie banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-xs text-gray-300 leading-relaxed mb-4">
        We use essential cookies to maintain site security and optional analytical performance cookies to optimize your architectural browsing experience. Read our{" "}
        <Link href="/privacy" className="text-[#E6C687] underline hover:text-white">
          Privacy Policy
        </Link>.
      </p>

      <div className="flex items-center gap-2">
        <button
          onClick={handleAccept}
          className="flex-1 py-2 px-4 rounded-xl bg-[#E6C687] text-black text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#D4AF37] transition-colors cursor-pointer"
        >
          Accept All
        </button>
        <button
          onClick={handleDecline}
          className="py-2 px-4 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
        >
          Decline
        </button>
      </div>
    </aside>
  );
}
