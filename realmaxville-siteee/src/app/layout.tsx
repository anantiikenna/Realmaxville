import type { Metadata } from "next";
import "./globals.css";
import AppWrapper from "@/components/AppWrapper";

export const metadata: Metadata = {
  title: "Realmaxville 3D | Architecture, Engineering & Construction",
  description: "A 3D-forward Realmaxville studio experience for luxury residences, smart estates, public projects, and structural engineering across Nigeria.",
  keywords: ["Realmaxville", "3D Architecture", "Structural Engineering", "Luxury Residential Design", "Smart Estates", "Nigeria Construction"],
  openGraph: {
    title: "Realmaxville 3D | Architectural Legacies",
    description: "A cinematic architecture and construction portfolio powered by real Realmaxville project imagery.",
    images: ["/images/projects/mrs-margaret.jpg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased">
        <AppWrapper>
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
