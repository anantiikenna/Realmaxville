import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/json-ld";
import { CookieConsentProvider } from "@/components/layout/CookieConsent";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://realmaxville.com"),
  title: {
    template: "%s | Realmaxville Architecture & Construction",
    default: "Realmaxville — Architectural Designs & Structural Engineering | Lagos, Nigeria",
  },
  description:
    "WE DON'T JUST BUILD STRUCTURES, WE BUILD LEGACIES. Buy architectural designs online — residential, commercial, and mixed-use building plans with structural engineering. Ships worldwide. Nigerian customers pay in ₦, international customers pay in USD.",
  keywords: [
    "architecture",
    "construction",
    "building plans",
    "architectural designs for sale",
    "buy building plans online",
    "buy architectural plans online Nigeria",
    "interior design",
    "Lagos",
    "Nigeria",
    "architectural firm Lagos",
    "building construction Nigeria",
    "residential architecture",
    "commercial architecture",
    "floor plans",
    "structural engineering",
    "renovation",
    "realmaxville",
    "African architecture",
    "West Africa construction",
    "Nigerian architect online",
    "house plans Nigeria",
    "modern house design Africa",
    "building plan download",
    "construction company Lagos Nigeria",
    "architectural drawings for sale",
    "3D architectural renders",
    "building design cost Nigeria",
    "architect near me Lagos",
    "best architects in Nigeria",
    "house design online",
    "floor plan design online",
  ],
  icons: {
    icon: "/images/logo1.png",
    apple: "/images/logo1.png",
  },
  openGraph: {
    title: "Realmaxville — Architecture & Construction",
    description:
      "Buy architectural designs online. Residential, commercial, and mixed-use building plans with structural engineering. Pay in ₦ (Nigeria) or $ (International).",
    url: "https://realmaxville.com",
    siteName: "Realmaxville",
    images: [
      {
        url: "/images/projects/mrs-margaret.jpg",
        width: 1200,
        height: 630,
        alt: "Realmaxville Architecture — Architectural Design & Construction in Lagos, Nigeria",
      },
    ],
    locale: "en_US",
    alternateLocale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Realmaxville — Architecture & Construction",
    description:
      "Buy architectural designs online. Residential, commercial & mixed-use building plans. Nigerian customers pay in ₦, international in USD.",
    images: ["/images/projects/mrs-margaret.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://realmaxville.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable} h-full antialiased dark scroll-smooth`}>
      <head>
        <meta name="theme-color" content="#050505" />
        <meta name="geo.region" content="NG" />
        <meta name="geo.placename" content="Lagos" />
        <meta name="geo.position" content="6.5244;3.3792" />
        <meta name="ICBM" content="6.5244, 3.3792" />
      </head>
      <body className="min-h-full flex flex-col bg-[#050505] text-[#e5e2e1] overflow-x-hidden font-sans">
        <JsonLd />
        <CookieConsentProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="flex-1" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
