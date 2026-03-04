"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "@/src/hooks/useMediaQuery";
import { useState, useEffect } from "react";
import Image from "next/image";
import souris from "@/public/click.png";
import light from "@/public/light.png";
import roue from "@/public/roue.png";
import circuit from "@/public/circuit.png";

export default function Presentation() {
  const isDesktop = useMediaQuery("(min-width: 800px)");

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const [ref1, inView1] = useInView({
    threshold: 0.6,
    triggerOnce: true,
    initialInView: true,
  });

  const [ref2, inView2] = useInView({
    threshold: 0.6,
    triggerOnce: true,
    initialInView: true,
  });

  return (
    <div className="flex flex-col items-center w-[85vw] md:w-[50vw] pt-10 md:pt-0">
      {/* Carte Le Poteau */}
      <div ref={ref1}>
        <motion.div
          initial={{ x: "-100vw" }}
          animate={
            !mounted
              ? { x: "-100vw" }
              : inView1
                ? { x: isDesktop ? "-5vw" : 0 }
                : { x: "-100vw" }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="col-span-3 md:col-span-2"
        >
          <Card className="bg-logo-blue border-0 text-sandy-brown shadow-2xl px-1 md:px-5 py-3 md:py-10 mb-10 md:mb-20">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl font-title font-bold">
                Le Poteau...
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center text-base md:text-xl p-5">
              <div className="flex flex-col md:grid md:grid-cols-[10%_80%_10%] items-center">
                <Image
                  alt="souris image"
                  src={souris}
                  width={320}
                  height={320}
                  className="w-[15vw] md:w-[5vw] self-center md:self-start
                             order-1 md:row-start-1 md:col-start-1"
                />
                <p
                  className="pb-5 md:pb-10 text-justify
                              order-2 md:row-start-1 md:col-start-2"
                >
                  {
                    "Mes compétences professionnelles solides en tant qu'assistant social et développeur web me permettent d'avoir une approche à la fois humaine et technique dans la réalisation de votre projet."
                  }
                </p>
                {/* Sur mobile : light avant p2 — sur desktop : light row2 col3 */}
                <Image
                  alt="lampe image"
                  src={light}
                  width={320}
                  height={320}
                  className="w-[15vw] md:w-[5vw] self-center md:self-start justify-self-center
                             order-3 md:row-start-2 md:col-start-3"
                />
                <p
                  className="text-justify
                              order-4 md:row-start-2 md:col-start-2"
                >
                  {
                    "C'est cette approche qui me permet de concevoir et de maintenir des solutions numériques simples ou complexes, et fonctionnelles pour votre institution, votre association ou pour votre entreprise."
                  }
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Carte Du Web */}
      <div ref={ref2}>
        <motion.div
          initial={{ x: "100vw" }}
          animate={
            !mounted
              ? { x: "100vw" }
              : inView2
                ? { x: isDesktop ? "25vw" : 0 }
                : { x: "100vw" }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="col-span-3"
        >
          <Card className="bg-logo-blue border-0 text-sandy-brown shadow-2xl px-1 md:px-5 py-3 md:py-10 mb-10 md:mb-20">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl font-title font-bold pl-5">
                ...du Web
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center text-base md:text-xl p-5">
              <div className="flex flex-col md:grid md:grid-cols-[10%_80%_10%] items-center">
                {/* Sur mobile : roue en premier — sur desktop : roue row1 col3 */}
                <Image
                  alt="roue crantée image"
                  src={roue}
                  width={320}
                  height={320}
                  className="w-[15vw] md:w-[5vw] self-center md:self-start justify-self-center
                             order-1 md:row-start-1 md:col-start-3"
                />
                <p
                  className="pb-5 md:pb-10 text-justify
                              order-2 md:row-start-1 md:col-start-2"
                >
                  {
                    "Je veille également à ce que chaque site soit optimisé pour les moteurs de recherche, afin que vos visiteurs puissent vous trouver facilement. Grâce à une structure claire, des temps de chargement rapides et des bonnes pratiques SEO, votre site gagne en visibilité tout en restant agréable à parcourir."
                  }
                </p>
                <Image
                  alt="circuit image"
                  src={circuit}
                  width={320}
                  height={320}
                  className="w-[15vw] md:w-[5vw] self-center md:self-start
                             order-3 md:row-start-2 md:col-start-1"
                />
                <p
                  className="pb-5 md:pb-10 text-justify
                              order-4 md:row-start-2 md:col-start-2"
                >
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
