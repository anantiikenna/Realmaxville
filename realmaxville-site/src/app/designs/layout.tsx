import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy Architectural Plans Online — Design Collection",
  description:
    "Browse and purchase professional architectural designs for residential, commercial, and mixed-use buildings in Nigeria. Complete plan sets with floor plans, elevations, structural drawings, and 3D renders. Instant delivery via email.",
  keywords: [
    "buy architectural plans online",
    "architectural designs for sale Nigeria",
    "building plans Lagos",
    "residential house plans",
    "commercial building designs",
    "floor plans for sale",
    "3D architectural renders",
    "construction drawings Nigeria",
    "buy house plans online cheap",
    "architectural plan download",
  ],
  openGraph: {
    title: "Buy Architectural Plans Online — Realmaxville",
    description:
      "Professional architectural designs for sale. Floor plans, elevations, structural drawings, and 3D renders. Instant email delivery.",
    url: "https://realmaxville.com/designs",
    images: [{ url: "/images/designs/mrs-margaret/1.jpg", width: 1200, height: 630, alt: "Realmaxville Design Collection" }],
    type: "website",
  },
};

export default function DesignsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
