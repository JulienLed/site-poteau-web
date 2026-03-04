import Services from "./services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Le Poteau du Web",
  description:
    "Création de site internet, référencement SEO, hébergement et maintenance web à Wavre. Solutions complètes pour associations, TPE et indépendants belges. De A à Z.",
  keywords: [
    "création site internet Wavre",
    "référencement SEO Belgique",
    "hébergement web freelance",
    "maintenance site internet Belgique",
    "site internet association Wavre",
    "CMS site web Belgique",
  ],
  openGraph: {
    title: "Services — Le Poteau du Web",
    description:
      "Création de site internet, référencement SEO, hébergement et maintenance web à Wavre. Solutions pour associations, TPE et indépendants.",
    url: "https://www.lepoteauduweb.be/services",
    siteName: "Le Poteau du Web",
    locale: "fr_BE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — Le Poteau du Web",
    description:
      "Création de site internet, SEO, hébergement et maintenance à Wavre. Solutions pour associations et TPE.",
  },
};

export default function Page() {
  return <Services />;
}
