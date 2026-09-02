"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import Link from "next/link";
import { ShieldCheck, X } from "lucide-react";

type ConsentValue = "accepted" | "declined" | null;

interface CookieConsentContextType {
  consent: ConsentValue;
  setConsent: (value: ConsentValue) => void;
}

const CookieConsentContext = createContext<CookieConsentContextType>({
  consent: null,
  setConsent: () => {},
});

export function useCookieConsent() {
  return useContext(CookieConsentContext);
}

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsentState] = useState<ConsentValue>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("realmaxville_cookie_consent") as ConsentValue;
    if (stored === "accepted" || stored === "declined") {
      setConsentState(stored);
    }
  }, []);

  const setConsent = (value: ConsentValue) => {
    setConsentState(value);
    if (value) {
      localStorage.setItem("realmaxville_cookie_consent", value);
    } else {
      localStorage.removeItem("realmaxville_cookie_consent");
    }
  };

  return (
    <CookieConsentContext.Provider value={{ consent, setConsent }}>
      {children}
      {mounted && consent === null && <CookieConsentBanner onConsent={setConsent} />}
    </CookieConsentContext.Provider>
  );
}

function CookieConsentBanner({ onConsent }: { onConsent: (value: ConsentValue) => void }) {
  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent banner"
      className="fixed bottom-4 right-4 left-4 md:left-auto md:max-w-md z-50 p-6 rounded-2xl border border-[#E6C687]/30 backdrop-blur-xl bg-[#10120f]/95 text-white transition-all duration-500 shadow-2xl"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2 text-[#f2c46d]">
          <ShieldCheck className="w-5 h-5 shrink-0" />
          <h3 className="font-semibold text-base font-serif">Privacy & Cookies</h3>
        </div>
        <button
          onClick={() => onConsent("declined")}
          className="text-gray-400 hover:text-white transition-colors p-1"
          aria-label="Close cookie banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-xs text-gray-300 leading-relaxed mb-4">
        We use essential cookies to ensure peak performance and enhance your architectural browsing experience.
        By clicking &quot;Accept All&quot;, you agree to our cookie policy as outlined in our{" "}
        <Link href="/privacy" className="text-[#f2c46d] underline hover:text-white">
          Privacy Policy
        </Link>.
      </p>

      <div className="flex items-center gap-3">
        <button
          onClick={() => onConsent("accepted")}
          className="flex-1 px-4 py-2 text-xs font-bold tracking-wider uppercase text-[#10120f] bg-gradient-to-r from-[#f2c46d] to-[#D4AF37] rounded-lg shadow-md hover:brightness-110 transition-all"
        >
          Accept All
        </button>
        <button
          onClick={() => onConsent("declined")}
          className="px-4 py-2 text-xs font-semibold tracking-wider uppercase text-gray-300 bg-white/10 hover:bg-white/20 rounded-lg transition-all"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
