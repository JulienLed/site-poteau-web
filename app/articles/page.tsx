import Articles from "./articles";
import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/src/lib/site";

export const metadata: Metadata = {
  title: "Articles — Le Poteau du Web",
  description:
    "Conseils et guides sur la création de sites internet, le SEO et le développement web en Belgique. Rédigés par Julien Ledent, développeur web freelance à Wavre.",
  keywords: [
    "blog développeur web Belgique",
    "conseils création site internet",
    "guide SEO Belgique",
    "articles web freelance Wavre",
    "coût site internet Belgique",
    "freelance vs agence web",
  ],
  alternates: {
    canonical: "/articles",
  },
  openGraph: {
    title: "Articles — Le Poteau du Web",
    description:
      "Conseils pratiques sur la création de sites internet, le SEO et le développement web en Belgique.",
    url: "https://www.lepoteauduweb.be/articles",
    siteName: "Le Poteau du Web",
    locale: "fr_BE",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles — Le Poteau du Web",
    description:
      "Conseils pratiques sur la création de sites internet, le SEO et le développement web en Belgique.",
  },
};

export default function Page() {
  return <Articles />;
}
