import About from "./abouts";
import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/src/lib/site";

export const metadata: Metadata = {
  title: "À propos — Le Poteau du Web",
  description:
    "Julien Ledent, développeur web full-stack freelance à Wavre. Certification Full-Stack Engineer (Codecademy). Assistant social de formation et de métier.",
  keywords: [
    "Julien Ledent développeur web",
    "développeur full-stack Wavre",
    "certifié full-stack Next.js",
    "développeur web freelance Belgique",
    "reconversion développeur web",
  ],
  alternates: {
    canonical: "https://www.lepoteauduweb.be/about",
  },
  openGraph: {
    title: "À propos — Le Poteau du Web",
    description:
      "Julien Ledent, développeur web full-stack freelance à Wavre. Certification Full-Stack Engineer (Codecademy). Assistant social de formation et de métier.",
    url: "https://www.lepoteauduweb.be/about",
    siteName: "Le Poteau du Web",
    locale: "fr_BE",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "À propos — Le Poteau du Web",
    description:
      "Julien Ledent, développeur web full-stack freelance à Wavre. Certification Full-Stack Engineer (Codecademy). Assistant social de formation et de métier.",
  },
};

export default function Page() {
  return <About />;
}
