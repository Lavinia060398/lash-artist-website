import type { MetadataRoute } from "next";
import { courses } from "@/data/courses";
import { absoluteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/portofoliu"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...courses.map((c) => ({
      url: absoluteUrl(`/cursuri/${c.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
