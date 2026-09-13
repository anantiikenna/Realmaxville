import { MetadataRoute } from "next";
import { designs } from "@/lib/designs-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://realmaxville.com";
  const currentDate = new Date();

  const designPages = designs.map((d) => ({
    url: `${baseUrl}/designs/${d.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [
    { url: baseUrl, lastModified: currentDate, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/designs`, lastModified: currentDate, changeFrequency: "weekly", priority: 1.0 },
    ...designPages,
    { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified: currentDate, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: currentDate, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/nondiscrimination`, lastModified: currentDate, changeFrequency: "yearly", priority: 0.3 },
  ];
}
