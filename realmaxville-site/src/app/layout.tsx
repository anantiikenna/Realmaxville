import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
    default: "Realmaxville — Architectural Designs & Structural Engineering",
  },
  description:
    "WE DON'T JUST BUILD STRUCTURES, WE BUILD LEGACIES. Professional architectural design, construction, renovation and building plan services in Lagos, Nigeria.",
  keywords: [
    "architecture",
    "construction",
    "building plans",
    "interior design",
    "Lagos",
    "Nigeria",
  ],
  icons: {
    icon: "/images/logo1.png",
    apple: "/images/logo1.png",
  },
  openGraph: {
    title: "Realmaxville — Architecture & Construction",
    description: "Building architectural legacies across Nigeria.",
    url: "https://realmaxville.com",
    siteName: "Realmaxville",
    images: [{ url: "/images/projects/mrs-margaret.jpg", width: 1200, height: 630, alt: "Realmaxville Architecture" }],
    locale: "en_NG",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col bg-[#050505] text-[#e5e2e1] overflow-x-hidden font-sans">
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
