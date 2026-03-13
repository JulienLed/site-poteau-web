"use client";

import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNodejsLine } from "react-icons/ri";
import { SiStrapi } from "react-icons/si";
import Image from "next/image";

export default function AboutContent() {
  const [isClick, setIsClick] = useState(false);

  const [ref1, inView1] = useInView({
    threshold: 0.2,
    triggerOnce: true,
    initialInView: true,
  });

  const [ref2, inView2] = useInView({
    threshold: 0.2,
    triggerOnce: true,
    initialInView: false,
  });

  const [ref3, inView3] = useInView({
    threshold: 0.2,
    triggerOnce: true,
    initialInView: false,
  });

  const [ref4, inView4] = useInView({
    threshold: 0.2,
    triggerOnce: true,
    initialInView: false,
  });

  const [ref5, inView5] = useInView({
    threshold: 0.2,
    triggerOnce: true,
    initialInView: false,
  });

  return (
    <>
      <div ref={ref1} className="mx-auto">
        <motion.div
          initial={{ x: "-100vw", opacity: 0 }}
          animate={
            inView1 ? { x: "0vw", opacity: 1 } : { x: "-100vw", opacity: 0 }
          }
          transition={{
            duration: 1,
            ease: "easeOut",
            times: [0, 1],
          }}
          className="flex flex-col md:flex-row items-center md:justify-evenly gap-5 md:gap-10 w-full md:w-auto"
        >
          <Image
            alt="Code"
            src={"/code.png"}
            width={680}
            height={555}
            className="w-[40vw] md:w-[20vw]"
            style={{ animation: "var(--animate-move)" }}
            priority
            fetchPriority="high"
          />
          <Card className="bg-logo-blue border-0 text-sandy-brown shadow-2xl">
            <CardHeader>
              <CardTitle className="text-center md:text-left text-lg md:text-2xl font-title font-semibold">
                Developpeur Web Full-Stack
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center text-base md:text-lg">
              <p className="text-left md:text-justify">
                {
                  "Passionné depuis toujours par l'informatique, l'IA et les nouvelles technologies, j'ai décidé en juin 2024 de me lancer dans l'apprentissage du code en autodidacte. Pendant plusieurs mois, j'ai développé mes compétences, jusqu'à atteindre un niveau professionnel."
                }
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <div ref={ref2} className="mx-auto">
        <motion.div
          initial={{ x: "100vw", opacity: 0 }}
          animate={
            inView2 ? { x: "0vw", opacity: 1 } : { x: "100vw", opacity: 0 }
          }
          transition={{
            duration: 1,
            ease: "easeOut",
            times: [0, 1],
          }}
          className="flex flex-col md:flex-row items-center md:justify-evenly gap-5 md:gap-10 w-full md:w-auto"
        >
          <Image
            src={"/social.png"}
            alt="Assistant social"
            width={662}
            height={486}
            className="w-[40vw] md:hidden"
            style={{ animation: "var(--animate-move)" }}
          />
          <Card className="bg-logo-blue border-0 text-sandy-brown shadow-2xl">
            <CardHeader>
              <CardTitle className="text-center md:text-left text-lg md:text-2xl font-title font-semibold">
                Assistant social
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center text-base md:text-lg">
              <p className="text-center md:text-justify">
                {
                  "Assistant social de formation, j'ai travaillé pendant quatre ans dans un centre d'hébergement d'urgence pour personnes en situation d'addiction. Depuis 2020, j'exerce au sein d'une société de logement social."
                }
              </p>
            </CardContent>
          </Card>
          <Image
            src={"/social.png"}
            alt="Assistant social"
            width={662}
            height={486}
            className="hidden md:block w-[20vw]"
            style={{ animation: "var(--animate-move)" }}
          />
        </motion.div>
      </div>
      <div ref={ref3} className="mx-auto">
        <motion.div
          initial={{ x: "-100vw", opacity: 0 }}
          animate={
            inView3 ? { x: "0vw", opacity: 1 } : { x: "-100vw", opacity: 0 }
          }
          transition={{
            duration: 1,
            ease: "easeOut",
            times: [0, 1],
          }}
          className="flex flex-col md:flex-row items-center md:justify-evenly gap-5 md:gap-10 w-full md:w-auto"
        >
          <Image
            src={"/certificate-fullstack.png"}
            width={500}
            height={500}
            onClick={() => setIsClick(!isClick)}
            alt="Certificat Ingénieur Fullstack"
            className={`w-[40vw] md:hidden transition-all duration-600 ease-in-out ${
              isClick ? "" : "animate-pulse"
            }`}
            style={
              isClick
                ? { transform: "scale(2.5, 2.5)" }
                : { transform: "scale(1, 1)" }
            }
          />
          <Card className="bg-logo-blue border-0 text-sandy-brown shadow-2xl">
            <CardHeader>
              <CardTitle className="text-center md:text-left text-lg md:text-2xl font-title font-semibold">
                Indépendant
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center text-base md:text-lg">
              <p className="text-center md:text-justify">
                {
                  "Le 16 septembre 2025, j'ai franchi une nouvelle étape en lançant mon activité en tant qu'indépendant complémentaire, prêt à offrir des prestations de qualité, à la hauteur des standards du métier. J'ai d'ailleurs obtenu une certification d'ingénieur Full-Stack par le site CodeCademy."
                }
              </p>
            </CardContent>
          </Card>
          <Image
            src={"/certificate-fullstack.png"}
            width={500}
            height={500}
            alt="Certificat Ingénieur Fullstack"
            className="hidden md:block w-[20vw] hover:scale-220 transition-all duration-600 ease-in-out"
          />
        </motion.div>
      </div>
      <div ref={ref4} className="mx-auto">
        <motion.div
          initial={{ x: "100vw", opacity: 0 }}
          animate={
            inView4 ? { x: "0vw", opacity: 1 } : { x: "100vw", opacity: 0 }
          }
          transition={{
            duration: 1,
            ease: "easeOut",
            times: [0, 1],
          }}
          className="flex flex-col md:flex-row items-center md:justify-evenly gap-5 md:gap-10 w-full md:w-auto"
        >
          {inView4 && (
            <div className="grid grid-cols-3 min-w-[20vw] gap-10 items-center text-sandy-brown">
              <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" title="JavaScript" className="flex items-center justify-center hover:scale-110 transition-transform duration-200">
                <RiJavascriptFill
                  size={50}
                  className="animate-jump-in duration-600"
                  style={{ animationDelay: "0s" }}
                />
              </a>
              <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" title="React" className="flex items-center justify-center hover:scale-110 transition-transform duration-200">
                <FaReact
                  size={50}
                  className="animate-jump-in duration-600"
                  style={{ animationDelay: "0.3s" }}
                />
              </a>
              <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" title="Next.js" className="flex items-center justify-center hover:scale-110 transition-transform duration-200">
                <RiNextjsFill
                  size={50}
                  className="animate-jump-in duration-600"
                  style={{ animationDelay: "0.6s" }}
                />
              </a>
              <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer" title="PostgreSQL" className="flex items-center justify-center hover:scale-110 transition-transform duration-200">
                <BiLogoPostgresql
                  size={50}
                  className="animate-jump-in duration-600"
                  style={{ animationDelay: "0.9s" }}
                />
              </a>
              <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" title="Node.js" className="flex items-center justify-center hover:scale-110 transition-transform duration-200">
                <RiNodejsLine
                  size={50}
                  className="animate-jump-in duration-600"
                  style={{ animationDelay: "1.2s" }}
                />
              </a>
              <a href="https://strapi.io/" target="_blank" rel="noopener noreferrer" title="Strapi" className="flex items-center justify-center hover:scale-110 transition-transform duration-200">
                <SiStrapi
                  size={50}
                  className="animate-jump-in duration-600"
                  style={{ animationDelay: "1.5s" }}
                />
              </a>
            </div>
          )}
          <Card className="bg-logo-blue border-0 text-sandy-brown shadow-2xl">
            <CardHeader>
              <CardTitle className="text-center md:text-left text-lg md:text-2xl font-title font-semibold">
                Outils
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center text-base md:text-lg">
              <p className="text-center md:text-justify">
                {
                  " Je développe des sites web modernes et performants avec Next.js et JavaScript, utilisant Tailwind CSS et shadcn/ui pour l'interface, Framer Motion et React Icons pour les animations. Le code est versionné sur GitHub, déployé sur Vercel, avec domaine OVH. La base de données est sécurisée via Prisma Postgres, et je peux intégrer un CMS Strapi et Google Maps pour la visibilité locale."
                }
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <div ref={ref5} className="mx-auto">
        <motion.div
          initial={{ x: "-100vw", opacity: 0 }}
          animate={
            inView5 ? { x: "0vw", opacity: 1 } : { x: "-100vw", opacity: 0 }
          }
          transition={{
            duration: 1,
            ease: "easeOut",
            times: [0, 1],
          }}
          className="flex flex-col md:flex-row items-center md:justify-evenly gap-5 md:gap-10 w-full md:w-auto"
        >
          <Image
            alt="Julien Ledent, développeur web freelance"
            src={"/Julien.png"}
            width={400}
            height={400}
            className="w-[40vw] md:w-[20vw] rounded-full object-cover"
            style={{ animation: "var(--animate-move)" }}
          />
          <Card className="bg-logo-blue border-0 text-sandy-brown shadow-2xl">
            <CardHeader>
              <CardTitle className="text-center md:text-left text-lg md:text-2xl font-title font-semibold">
                Zone d'intervention & Valeurs
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center text-base md:text-lg gap-4">
              <p className="text-center md:text-justify">
                {
                  "J'interviens principalement dans le Brabant Wallon — Wavre, Ottignies, Louvain-la-Neuve, Nivelles, Braine-l'Alleud, Waterloo, Rixensart, La Hulpe — ainsi que dans les provinces de Namur et du Hainaut, et dans la région bruxelloise. Tout projet peut aussi se réaliser entièrement à distance."
                }
              </p>
              <p className="text-center md:text-justify">
                {
                  "Je place l'écoute, la proximité et la transparence au cœur de chaque collaboration. Mon objectif : comprendre vos besoins réels pour vous livrer un site utile, efficace et à votre image — sans jargon inutile, et à un prix juste."
                }
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </>
  );
}
