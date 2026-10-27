import Portfolio from "./portfolio";
import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/src/lib/site";

export const metadata: Metadata = {
  title: "Réalisations — Le Poteau du Web",
  description:
    "Découvrez les sites internet réalisés par Le Poteau du Web : sites vitrines, e-commerce, plateformes pour associations et entreprises belges. Des projets concrets, livrés clé en main.",
  keywords: [
    "portfolio développeur web Belgique",
    "réalisations sites internet Wavre",
    "site vitrine boulangerie",
    "site internet association Belgique",
    "exemples sites web Next.js",
    "e-commerce développeur Wavre",
  ],
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Réalisations — Le Poteau du Web",
    description:
      "Découvrez les sites internet réalisés par Le Poteau du Web : sites vitrines, e-commerce, plateformes pour associations et entreprises belges.",
    url: "https://www.lepoteauduweb.be/portfolio",
    siteName: "Le Poteau du Web",
    locale: "fr_BE",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Réalisations — Le Poteau du Web",
    description:
      "Sites vitrines, e-commerce et plateformes pour associations réalisés par Le Poteau du Web.",
  },
};

export default function Page() {
  return <Portfolio />;
}
