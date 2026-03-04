"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Projet = {
  title: string;
  description: string;
  img: { src: string; width: number; height: number } | null;
  site: string | null;
};

const projets: Projet[] = [
  {
    title: "Projet personnel de site pour une boulangerie",
    description:
      "Création d'un site vitrine en un jour, combinant design épuré et navigation intuitive, pour mettre en valeur un commerce de proximité, une institution organisant un événement ponctuel ou une landing page. Optimisé pour offrir une expérience fluide aux visiteurs tout en restant simple et fonctionnel.",
    img: { src: "/boulangerie.png", width: 1100, height: 584 },
    site: "https://boulangerie-wavre.vercel.app/",
  },
  {
    title: "Projet personnel de site pour une crèche",
    description:
      "Conception et réalisation d'un site web complet en 1 à 2 semaines, avec de nombreuses pages et intégration d'un CMS pour faciliter la gestion du contenu. Pensé pour les institutions ou indépendants souhaitant présenter en détail leurs activités, le site combine un design simple et épuré, des cartes interactives et du contenu enrichi par l'IA pour textes et images, offrant une navigation fluide et intuitive.",
    img: { src: "/crèche.png", width: 1100, height: 584 },
    site: "https://crechedewavre.vercel.app/",
  },
  {
    title: "Plateforme e-commerce",
    description:
      "Développement d'une plateforme e-commerce complète avec catalogue produits et recherche, panier persistant, paiement sécurisé via Stripe, confirmations par e-mail automatisées et tableau de bord administrateur pour la gestion des stocks et des commandes.",
    img: null,
    site: null,
  },
  {
    title: "Site d'une fédération sportive",
    description:
      "Conception et développement d'un site web pour une fédération sportive, comprenant la présentation des activités et des disciplines, la gestion des événements et un espace dédié aux membres.",
    img: null,
    site: null,
  },
];

function ProjetCard({
  projet,
  index,
}: {
  projet: Projet;
  index: number;
}) {
  const [flipped, setFlipped] = useState(false);
  const fromLeft = index % 2 === 0;

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ x: fromLeft ? "-100vw" : "100vw", opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      >
        <motion.div
          animate={{ rotateY: flipped ? "180deg" : "0deg" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative w-[85vw] md:w-[40vw] h-[50vh] md:h-[60vh] transform-3d"
        >
          {/* Face avant */}
          <Card className="absolute w-full h-full flex flex-col justify-between border-0 backface-hidden bg-logo-blue/50 text-sandy-brown shadow-2xl px-2 md:px-5 py-1 md:py-10 md:mb-20">
            <CardHeader className="w-full">
              <CardTitle className="text-center md:text-left text-lg md:text-xl text-sandy-brown pt-2 md:py-5 font-title font-bold">
                {projet.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-evenly gap-5 h-full">
              {projet.img ? (
                <Image
                  alt={projet.title}
                  src={projet.img.src}
                  width={projet.img.width}
                  height={projet.img.height}
                  className="rounded-lg shadow-2xl"
                  priority
                  fetchPriority="high"
                />
              ) : (
                <div className="flex items-center justify-center w-full flex-1 rounded-lg bg-logo-blue border border-sandy-brown/20">
                  <p className="text-sandy-brown text-center font-title text-lg md:text-xl animate-pulse px-4">
                    En cours de production
                  </p>
                </div>
              )}
              <Button
                aria-label={`more_${index}`}
                onClick={() => setFlipped(true)}
                className="bg-sandy-brown hover:!bg-sandy-brown/90 active:!translate-0.5 hover:!text-lapis-lazuli hover:!shadow-none shadow-2xs text-logo-blue text-base md:text-lg transition-all duration-200 ease-in-out w-fit self-end animate-vibrate"
              >
                En savoir plus
              </Button>
            </CardContent>
          </Card>

          {/* Face arrière */}
          <Card className="absolute w-full h-full flex items-center md:justify-center border-0 backface-hidden rotate-y-180 bg-logo-blue/50 text-sandy-brown shadow-2xl py-5 md:py-10 mb-20">
            <CardContent className="relative flex flex-col justify-between h-full items-center gap-1 md:gap-5">
              <p className="md:text-justify text-sm md:text-base w-[90%] md:w-[70%]">
                {projet.description}
              </p>
              <div className="flex gap-5">
                {projet.site ? (
                  <Button
                    aria-label="to_site"
                    className="bg-sandy-brown hover:!bg-sandy-brown/90 active:!translate-0.5 hover:!text-lapis-lazuli hover:!shadow-none hover:!scale-105 shadow-2xs text-logo-blue text-base transition-all duration-200 ease-in-out w-fit"
                  >
                    <Link
                      aria-label="to_site"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={projet.site}
                    >
                      Vers le site
                    </Link>
                  </Button>
                ) : (
                  <Button
                    aria-label="in_progress"
                    disabled
                    className="bg-sandy-brown/30 text-logo-blue/50 text-base cursor-not-allowed w-fit"
                  >
                    En cours de finalisation
                  </Button>
                )}
                <Button
                  aria-label="flip"
                  onClick={() => setFlipped(false)}
                  className="bg-sandy-brown hover:!bg-sandy-brown/90 active:!translate-0.5 hover:!text-lapis-lazuli hover:!shadow-none hover:!scale-105 shadow-2xs text-logo-blue text-base transition-all duration-200 ease-in-out w-fit"
                >
                  Retourner
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function Projets() {
  return (
    <div className="flex flex-col items-center gap-20">
      {projets.map((projet, i) => (
        <ProjetCard key={i} projet={projet} index={i} />
      ))}
    </div>
  );
}
