import Presentation from "@/src/component/home/presentation/presentation";
import AnimHero from "@/src/component/home/animHero/animHero";
import ServiceResume from "@/src/component/home/services-resume/service";
import ButtonDown from "@/src/component/home/button-down/ButtonDown";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le Poteau du Web — Développeur web freelance à Wavre",
  description:
    "Création de sites internet sur mesure à Wavre. Design soigné, SEO, hébergement et maintenance inclus. Solutions adaptées aux associations, TPE et indépendants belges.",
  keywords: [
    "développeur web Wavre",
    "création site internet Belgique",
    "freelance web Wavre",
    "site vitrine association Belgique",
    "Next.js développeur Belgique",
    "site internet indépendant Wavre",
  ],
  openGraph: {
    title: "Le Poteau du Web — Développeur web freelance à Wavre",
    description:
      "Création de sites internet sur mesure à Wavre. Design soigné, SEO, hébergement et maintenance inclus.",
    url: "https://www.lepoteauduweb.be/",
    siteName: "Le Poteau du Web",
    locale: "fr_BE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Poteau du Web — Développeur web freelance à Wavre",
    description:
      "Création de sites internet sur mesure à Wavre. Design soigné, SEO, hébergement et maintenance inclus.",
  },
};

export default function Home() {
  return (
    <div className="w-full">
      <section id="hero" className="w-full h-[75vh] md:h-[40vh] md:py-15">
        <AnimHero />
      </section>
      <ButtonDown />
      <section
        id="presentation"
        className="flex flex-col items-center md:grid md:grid-cols-3 md:scroll-mt-30"
      >
        <Presentation />
      </section>
      <section id="services-resume"></section>
      <ServiceResume />
    </div>
  );
}
