import Contact from "./contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Le Poteau du Web",
  description:
    "Contactez Le Poteau du Web pour démarrer votre projet de site internet ou obtenir un devis gratuit. Réponse rapide garantie.",
  keywords: [
    "contact développeur web Wavre",
    "devis site internet gratuit Belgique",
    "développeur web freelance contact",
    "créer site internet Wavre",
  ],
  openGraph: {
    title: "Contact — Le Poteau du Web",
    description:
      "Contactez Le Poteau du Web pour démarrer votre projet de site internet ou obtenir un devis gratuit.",
    url: "https://www.lepoteauduweb.be/contact",
    siteName: "Le Poteau du Web",
    locale: "fr_BE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Le Poteau du Web",
    description:
      "Contactez Le Poteau du Web pour démarrer votre projet de site internet ou obtenir un devis gratuit.",
  },
};

export default function Page() {
  return <Contact />;
}
