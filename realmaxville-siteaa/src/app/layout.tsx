import type { Metadata } from "next";
import "./globals.css";
import AppWrapper from "@/components/AppWrapper";
import CookieConsent from "@/components/CookieConsent";

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
    description:
      "Building legacies across Lagos, Nigeria — luxury residences, smart estates, and landmark public projects.",
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
      <body className="bg-[#07080A] text-white font-sans antialiased">
        <AppWrapper>
          {children}
        </AppWrapper>
        <CookieConsent />
      </body>
    </html>
  );
}
