import About from "./abouts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos — Le Poteau du Web",
  description:
    "Julien Ledent, développeur web full-stack freelance à Wavre. Certifié ingénieur Full-Stack, passionné par Next.js et les nouvelles technologies. Ancien assistant social reconverti dans le développement web.",
  keywords: [
    "Julien Ledent développeur web",
    "développeur full-stack Wavre",
    "certifié full-stack Next.js",
    "développeur web freelance Belgique",
    "reconversion développeur web",
  ],
  openGraph: {
    title: "À propos — Le Poteau du Web",
    description:
      "Julien Ledent, développeur web full-stack freelance à Wavre. Certifié ingénieur Full-Stack, passionné par Next.js et les nouvelles technologies.",
    url: "https://www.lepoteauduweb.be/about",
    siteName: "Le Poteau du Web",
    locale: "fr_BE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "À propos — Le Poteau du Web",
    description:
      "Julien Ledent, développeur web full-stack freelance à Wavre. Certifié ingénieur Full-Stack.",
  },
};

export default function Page() {
  return <About />;
}
