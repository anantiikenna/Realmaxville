import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Realmaxville — Architecture & Construction",
  description:
    "Building legacies across Lagos, Nigeria — luxury residences, smart estates, and landmark public projects by Realmaxville.",
  icons: { icon: "/images/logo1.png" },
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
    <html lang="en" className={`${inter.variable} ${spaceMono.variable}`}>
      <body className="bg-[#10120f] text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
