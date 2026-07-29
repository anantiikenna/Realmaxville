import type { Metadata } from "next";
import "./globals.css";
import AppWrapper from "@/components/AppWrapper";

export const metadata: Metadata = {
  title: "Realmaxville | Futuristic Luxury Architecture & Structural Engineering",
  description: "Pioneering architectural legacies, luxury residential villas, parametric sky towers, and smart estate master planning across Lagos, London & Dubai.",
  keywords: ["Luxury Architecture", "Realmaxville", "Structural Engineering", "Parametric Design", "Lagos Mansions", "Smart Estates", "Sky Towers"],
  openGraph: {
    title: "Realmaxville | Architectural Legacies",
    description: "Where futuristic parametric design meets structural engineering perfection.",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#07080A] text-slate-100 antialiased selection:bg-[#E6C687] selection:text-black">
        <AppWrapper>
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
