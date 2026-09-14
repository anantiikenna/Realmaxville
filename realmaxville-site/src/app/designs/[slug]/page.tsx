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
    title: `${design.name} Design — Realmaxville`,
    description: design.description,
    openGraph: {
      title: `${design.name} Design — Realmaxville`,
      description: design.description,
      images: [{ url: design.cover, width: 1200, height: 630, alt: `${design.name} architectural design` }],
    },
  };
}

export default async function DesignDetailPage({ params }: Props) {
  const { slug } = await params;
  const design = getDesignBySlug(slug);
  if (!design) notFound();

  return <DesignDetailClient design={design} />;
}
