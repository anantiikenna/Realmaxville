import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { designs, getDesignBySlug } from "@/lib/designs-data";
import DesignDetailClient from "./DesignDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return designs.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const design = getDesignBySlug(slug);
  if (!design) return {};
  return {
    title: `${design.name} Design — Buy Architectural Plans Online`,
    description: `${design.description} Purchase this professional architectural design for $${design.priceUSD}. Complete plan set with floor plans, elevations, structural drawings, and 3D renders. Instant delivery.`,
    keywords: [
      `${design.name} design`,
      `${design.type.toLowerCase()} building plans`,
      "buy architectural plans Nigeria",
      "floor plans for sale",
      "construction drawings Lagos",
    ],
    openGraph: {
      title: `${design.name} Design — Realmaxville`,
      description: design.description,
      url: `https://realmaxville.com/designs/${design.slug}`,
      images: [{ url: design.cover, width: 1200, height: 630, alt: `${design.name} architectural design` }],
      type: "website",
    },
  };
}

export default async function DesignDetailPage({ params }: Props) {
  const { slug } = await params;
  const design = getDesignBySlug(slug);
  if (!design) notFound();

  return <DesignDetailClient design={design} />;
}
