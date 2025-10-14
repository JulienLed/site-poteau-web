"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Projets() {
  const [click, setClick] = useState<number | null>(null);
  const projets = [
    {
      title: "Projet personnel de site pour une boulangerie",
      description:
        "Création d'un site vitrine en un jour, combinant design épuré et navigation intuitive, pour mettre en valeur un commerce de proximité, une institution organisant un événement ponctuel ou une landing page. Optimisé pour offrir une expérience fluide aux visiteurs tout en restant simple et fonctionnel.",
      img: {
        src: "/boulangerie.png",
        width: 1100,
        height: 584,
      },
      site: "https://boulangerie-wavre.vercel.app/",
    },
    {
      title: "Projet personnel de site pour une crèche",
      description:
        "Conception et réalisation d'un site web complet en 1 à 2 semaines, avec de nombreuses pages et intégration d'un CMS pour faciliter la gestion du contenu. Pensé pour les institutions ou indépendants souhaitant présenter en détail leurs activités, le site combine un design simple et épuré, des cartes interactives et du contenu enrichi par l'IA pour textes et images, offrant une navigation fluide et intuitive.",
      img: {
        src: "/crèche.png",
        width: 1100,
        height: 584,
      },
      site: "https://crechedewavre.vercel.app/",
    },
  ];

  const handleClick = (index: number) => {
    click === index ? setClick(null) : setClick(index);
  };

  return (
    <div className="flex flex-col items-center gap-20">
      {projets.map((projet, i) => (
        <div key={i}>
          <motion.div
            animate={{ rotateY: click === i ? 180 : 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative w-[40vw] h-[60vh] transform-3d"
          >
            {/* Face avant */}
            <Card className="absolute w-full h-full flex justify-center items-center border-0 backface-hidden bg-logo-blue/50 text-sandy-brown shadow-2xl px-5 py-10 mb-20">
              <CardHeader className="w-full">
                <CardTitle className="text-xl text-sandy-brown py-5 font-title font-bold">
                  {projet.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-5">
                <Image
                  alt={projet.title}
                  src={projet.img.src}
                  width={projet.img.width}
                  height={projet.img.height}
                  className="rounded-lg shadow-2xl"
                />
                <Button
                  onClick={() => handleClick(i)}
                  className="bg-sandy-brown hover:!bg-sandy-brown/90 active:!translate-0.5 hover:!text-lapis-lazuli hover:!shadow-none shadow-2xs text-logo-blue text-lg transition-all duration-200 ease-in-out w-fit self-end animate-vibrate"
                >
                  En savoir plus
                </Button>
              </CardContent>
            </Card>

            {/* Face arrière */}
            <Card className="absolute w-full h-full flex items-center justify-center border-0 backface-hidden rotate-y-180 bg-logo-blue/50 text-sandy-brown shadow-2xl px-5 py-10 mb-20">
              <CardContent className="relative flex flex-col items-center gap-5">
                <p className="text-justify w-[70%]">{projet.description}</p>
                <div className="flex gap-5">
                  <Button className="bg-sandy-brown hover:!bg-sandy-brown/90 active:!translate-0.5 hover:!text-lapis-lazuli hover:!shadow-none hover:!scale-105 shadow-2xs text-logo-blue text-base transition-all duration-200 ease-in-out w-fit">
                    <Link target="_blank" href={projet.site}>
                      Vers le site
                    </Link>
                  </Button>
                  <Button
                    onClick={() => handleClick(i)}
                    className="bg-sandy-brown hover:!bg-sandy-brown/90 active:!translate-0.5 hover:!text-lapis-lazuli hover:!shadow-none hover:!scale-105 shadow-2xs text-logo-blue text-base transition-all duration-200 ease-in-out w-fit"
                  >
                    Retourner
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
