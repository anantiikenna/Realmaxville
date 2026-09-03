"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent-rmb");
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent-rmb", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent-rmb", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Cookie Consent"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-50 rounded-2xl glass-slate border border-copper-500/20 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
      style={{ animation: "fadeUp 0.4s ease both" }}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <Cookie className="w-4 h-4 text-copper-400" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-copper-400 font-semibold">
            Cookie Preferences
          </span>
        </div>
        <button
          onClick={handleDecline}
          className="text-ivory-400/40 hover:text-ivory-100 transition-colors p-1 cursor-pointer rounded"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-xs text-ivory-300/55 leading-relaxed mb-4">
        We use essential cookies to keep the site secure. Optional analytics cookies help us improve your experience. Read our{" "}
        <Link href="/privacy" className="text-copper-400 underline hover:text-copper-300">
          Privacy Policy
        </Link>
        .
      </p>

      <div className="flex items-center gap-2">
        <button
          onClick={handleAccept}
          className="flex-1 py-2.5 px-4 rounded-xl bg-copper-500 text-[#080C10] text-xs font-semibold font-mono uppercase tracking-wider hover:bg-copper-400 transition-colors cursor-pointer"
        >
          Accept All
        </button>
        <button
          onClick={handleDecline}
          className="py-2.5 px-4 rounded-xl border border-white/10 text-ivory-400/60 text-xs font-mono uppercase tracking-wider hover:text-ivory-100 transition-colors cursor-pointer"
        >
          Decline
        </button>
      </div>
    </aside>
  );
}
