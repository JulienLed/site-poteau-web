import Faq from "./faq";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Le Poteau du Web",
  description:
    "Toutes les réponses à vos questions sur la création de site internet, les tarifs, les délais et le fonctionnement de Le Poteau du Web, développeur web freelance à Wavre.",
  keywords: [
    "FAQ site internet Belgique",
    "questions création site web",
    "prix site internet freelance",
    "délai création site web",
    "développeur web Wavre questions",
    "devis site internet gratuit",
  ],
  openGraph: {
    title: "FAQ — Le Poteau du Web",
    description:
      "Réponses à toutes vos questions sur la création de site internet, les tarifs et le fonctionnement de Le Poteau du Web.",
    url: "https://www.lepoteauduweb.be/faq",
    siteName: "Le Poteau du Web",
    locale: "fr_BE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ — Le Poteau du Web",
    description:
      "Réponses à toutes vos questions sur la création de site internet, les tarifs et le fonctionnement de Le Poteau du Web.",
  },
};

export default function Page() {
  return <Faq />;
}
