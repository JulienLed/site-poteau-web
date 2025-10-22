"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import souris from "@/public/click.png";
import light from "@/public/light.png";
import roue from "@/public/roue.png";
import circuit from "@/public/circuit.png";

export default function Presentation() {
  const [ref1, inView1] = useInView({
    threshold: 0.9,
    triggerOnce: true,
    initialInView: true,
  });

  const [ref2, inView2] = useInView({
    threshold: 0.9,
    triggerOnce: true,
    initialInView: true,
  });
  return (
    <div className="w-[50vw]">
      <div ref={ref1}>
        {/* Carte Le Poteau */}
        <motion.div
          initial={{ x: "-100vw" }}
          animate={inView1 ? { x: "-5vw" } : { x: "-100vw" }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            times: [0, 1],
          }}
          className="col-span-2"
        >
          <Card className="bg-logo-blue border-0 text-sandy-brown shadow-2xl px-5 py-10 mb-20">
            <CardHeader>
              <CardTitle className="text-2xl font-title font-bold">
                Le Poteau...
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center text-xl p-5">
              <div className="grid grid-cols-[10%_80%_10%] items-center">
                <Image
                  alt="souris image"
                  src={souris}
                  width={320}
                  height={320}
                  className="w-[5vw] self-start"
                />
                <p className="pb-10 text-justify">
                  {
                    "Mes compétences professionnelles solides en tant qu'assistant social et développeur web me permettent d'avoir une approche à la fois humaine et technique dans la réalisation de votre projet."
                  }
                </p>
                <p className="text-justify row-start-2 col-start-2">
                  {
                    " C'est cette approche qui me permet de concevoir et de maintenir des solutions numériques simples ou complexe, et fonctionnelles pour votre institution, votre association ou pour votre entreprise."
                  }
                </p>
                <Image
                  alt="lampe image"
                  src={light}
                  width={320}
                  height={320}
                  className="w-[5vw] row-start-2 col-start-3 self-start"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <div ref={ref2}>
        {/* Carte Du Web */}
        <motion.div
          initial={{ x: "100vw" }}
          animate={inView2 ? { x: "25vw" } : { x: "100vw" }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            times: [0, 1],
          }}
          className="col-span-2"
        >
          <Card className="bg-logo-blue border-0 text-sandy-brown shadow-2xl px-5 py-10 mb-20">
            <CardHeader>
              <CardTitle className="text-2xl font-title font-bold pl-5">
                ...du Web
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center text-xl p-5">
              <div className="grid grid-cols-[10%_80%_10%] items-center">
                <p className="col-start-2 pb-10 text-justify">
                  {
                    "Je veille également à ce que chaque site soit optimisé pour les moteurs de recherche, afin que vos visiteurs puissent vous trouver facilement. Grâce à une structure claire, des temps de chargement rapides et des bonnes pratiques SEO, votre site gagne en visibilité tout en restant agréable à parcourir."
                  }
                </p>
                <Image
                  alt="roue crantée image"
                  src={roue}
                  width={320}
                  height={320}
                  className="w-[5vw] self-start col-start-3"
                />
                <Image
                  alt="circuit image"
                  src={circuit}
                  width={320}
                  height={320}
                  className="w-[5vw] row-start-2 col-start-1 self-start"
                />
                <p className="pb-10 row-start-2 col-start-2 text-justify">
                  {
                    "Avec la puissance de Next.js, React et JavaScript moderne, je développe des sites web performants, évolutifs et sur-mesure. Le tout est pensé pour être rapide, fiable et adaptable dans le temps, bien au-delà des limites d'un CMS classique comme WordPress."
                  }
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
