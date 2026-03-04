import Tarifs from "./tarifs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs — Le Poteau du Web",
  description:
    "Tarifs transparents pour la création de votre site internet : pack de base à partir de 900 €, hébergement inclus. Estimez votre projet en ligne en quelques clics.",
  keywords: [
    "tarif développeur web Belgique",
    "prix création site internet Wavre",
    "devis site web freelance",
    "coût site internet association",
    "tarif site vitrine Belgique",
  ],
  openGraph: {
    title: "Tarifs — Le Poteau du Web",
    description:
      "Tarifs transparents pour la création de votre site internet : pack de base à partir de 900 €, hébergement inclus.",
    url: "https://www.lepoteauduweb.be/tarifs",
    siteName: "Le Poteau du Web",
    locale: "fr_BE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarifs — Le Poteau du Web",
    description:
      "Pack de base à partir de 900 €, hébergement inclus. Estimez votre projet en ligne.",
  },
};

export default function Page() {
  return <Tarifs />;
}
