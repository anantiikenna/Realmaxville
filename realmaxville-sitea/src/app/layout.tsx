import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="bg-[#10120f] text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
