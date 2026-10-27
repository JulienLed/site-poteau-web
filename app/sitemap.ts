import type { MetadataRoute } from "next";
import { articles } from "@/src/data/articles-data";
import { SITE_URL } from "@/src/lib/site";

type Freq = MetadataRoute.Sitemap[number]["changeFrequency"];

// Pages statiques : pas de lastModified (aucune date fiable à déclarer).
const staticPages: { path: string; changeFrequency: Freq; priority: number }[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/tarifs", changeFrequency: "monthly", priority: 0.9 },
  { path: "/portfolio", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.8 },
  { path: "/articles", changeFrequency: "weekly", priority: 0.8 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/legals", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPages.map(({ path, changeFrequency, priority }) => ({
      url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
      changeFrequency,
      priority,
    })),
    ...articles.map((article) => ({
      url: `${SITE_URL}/articles/${article.slug}`,
      lastModified: article.updated ?? article.date,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
