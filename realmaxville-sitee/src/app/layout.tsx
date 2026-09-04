import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CookieConsentProvider } from "@/components/layout/CookieConsent";

export const metadata: Metadata = {
  metadataBase: new URL("https://realmaxville.com"),
  title: {
    template: "%s | Realmaxville Architecture & Construction",
    default: "Realmaxville — Architecture & Construction",
  },
  description:
    "Building legacies across Lagos, Nigeria — luxury residences, smart estates, and landmark public projects by Realmaxville.",
  icons: { icon: "/images/logo1.png", apple: "/images/logo1.png" },
  openGraph: {
    title: "Realmaxville — Architecture & Construction",
    description: "Building architectural legacies across Nigeria.",
    images: ["/images/projects/mrs-margaret.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#10120f] text-white font-sans antialiased">
        <CookieConsentProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
