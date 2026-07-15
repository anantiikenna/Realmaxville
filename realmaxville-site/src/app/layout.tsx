import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Realmaxville — Architectural Designs & Construction Engineering",
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
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col bg-[#050505] text-[#e5e2e1] overflow-x-hidden font-sans">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
