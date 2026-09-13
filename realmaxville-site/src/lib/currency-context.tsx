"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export const NGN_RATE = 1500; // 1 USD ≈ ₦1,500 — Dodo's adaptive currency handles actual conversion at checkout

interface CurrencyState {
  country: string | null;
  currency: "NGN" | "USD";
  formatPrice: (usd: number) => string;
  loading: boolean;
}

const CurrencyContext = createContext<CurrencyState>({
  country: null,
  currency: "USD",
  formatPrice: (usd) => `$${usd.toLocaleString()}`,
  loading: true,
});

export function useCurrency() {
  return useContext(CurrencyContext);
}

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [country, setCountry] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then((data) => {
        setCountry(data.country_code || null);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const currency: "NGN" | "USD" = country === "NG" ? "NGN" : "USD";

  const formatPrice = (usd: number): string => {
    if (currency === "NGN") {
      const ngn = usd * NGN_RATE;
      return `₦${ngn.toLocaleString("en-NG")}`;
    }
    return `$${usd.toLocaleString("en-US")}`;
  };

  return (
    <CurrencyContext.Provider value={{ country, currency, formatPrice, loading }}>
      {children}
    </CurrencyContext.Provider>
  );
}
