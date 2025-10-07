"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNodejsLine } from "react-icons/ri";
import { SiStrapi } from "react-icons/si";

export default function About() {
  const [isToolSwitch, setIsToolSwitch] = useState<boolean>(false);

  const [ref1, inView1] = useInView({
    threshold: 0.9,
    triggerOnce: true,
    initialInView: true,
  });

  const [ref2, inView2] = useInView({
    threshold: 0.9,
    triggerOnce: true,
    initialInView: false,
  });

  const [ref3, inView3] = useInView({
    threshold: 0.9,
    triggerOnce: true,
    initialInView: false,
  });
  const [ref4, inView4] = useInView({
    threshold: 0.9,
    triggerOnce: true,
    initialInView: false,
  });
  return (
    <div className="py-15">
      <section id="about" className="flex flex-col gap-10">
        <div ref={ref1}>
          <motion.div
            className="bg-logo-blue h-fit shadow-lg rounded-3xl sm:w-[40vw] md:w-[60vw] text-sandy-brown p-10 m-5 grid grid-cols-3"
            initial={{ x: -100 }}
            animate={
              inView1 ? { x: ["-100vw", "-40vw"] } : { x: ["-40vw", "-100vw"] }
            }
            transition={{
              duration: 0.6,
              ease: "easeOut",
              times: [0, 1],
            }}
          >
            <h2 className="text-2xl text-sandy-brown text-right py-5 font-title font-bold col-start-3">
              Qui suis-je ?
            </h2>
          </motion.div>
        </div>
        <div ref={ref2}>
          <motion.div
            initial={{ x: "100vw" }}
            animate={inView2 ? { x: "25vw" } : { x: "100vw" }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              times: [0, 1],
            }}
          >
            <Card>
              <CardContent className="grid grid-cols-3">
                <div className="col-span-2 text-justify">
                  <h2 className="text-xl text-sandy-brown font-title font-bold pt-2 pb-5">
                    Mon parcour professionnel
                  </h2>
                  <p>
                    Assistant social de formation, j'ai travaillé pendant quatre
                    ans dans un centre d'hébergement d'urgence pour personnes en
                    situation d'addiction. Depuis 2020, j'exerce au sein d'une
                    société de logement social. Passionné depuis toujours par
                    l'informatique, l'IA et les nouvelles technologies, j'ai
                    décidé en juin 2024 de me lancer dans l'apprentissage du
                    code en autodidacte. Pendant plusieurs mois, j'ai consacré
                    cinq jours par semaine à développer mes compétences, jusqu'à
                    atteindre un niveau professionnel. Le 16 septembre 2025,
                    j'ai franchi une nouvelle étape en lançant mon activité en
                    tant qu'indépendant complémentaire, prêt à offrir des
                    prestations de qualité, à la hauteur des standards du
                    métier. J'ai d'ailleurs obtenu une certification d'ingénieur
                    Full-Stack par le site{" "}
                    <a
                      href="https://www.codecademy.com/profiles/py3267013392/certificates/ffd0f42cce1a44e9a0108b365047a0a6"
                      target="_blank"
                    >
                      CodeCademy
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <div ref={ref3}>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={inView3 ? { x: "-30vw" } : { x: "-100vw" }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              times: [0, 1],
            }}
            className="flex flex-col items-end"
          >
            <div>
              <Card>
                {isToolSwitch ? (
                  <CardContent>
                    <div className="grid grid-cols-3">
                      <div className="col-start-2 col-span-2">
                        <h2 className="text-xl text-sandy-brown font-title font-bold pt-2 pb-5">
                          Mes outils
                        </h2>
                        <p>
                          Je conçois et développe des sites web modernes avec
                          Next.js et JavaScript, assurant performance, SEO
                          optimisé et évolutivité. L'interface est construite
                          avec Tailwind CSS et shadcn/ui, enrichie par Framer
                          Motion et React Icons pour un rendu professionnel et
                          interactif. Le code est versionné sur GitHub, déployé
                          sur Vercel, et le nom de domaine est géré via OVH. La
                          base de données est hébergée sur Prisma Postgres
                          Serverless Database, garantissant sécurité,
                          performance et scalabilité. Si nécessaire, j'intègre
                          un CMS personnalisé avec Strapi et le référencement
                          Google Maps pour améliorer la visibilité locale.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 items-center col-start-2">
                      <RiJavascriptFill size={50} />
                      <FaReact size={50} />
                      <RiNextjsFill size={50} />
                      <BiLogoPostgresql size={50} />
                      <RiNodejsLine size={50} />
                      <SiStrapi size={50} />
                    </div>
                  </CardContent>
                ) : (
                  <CardContent>
                    <div className="grid grid-cols-3">
                      <div className="col-start-2 col-span-2">
                        <h2 className="text-xl text-sandy-brown font-title font-bold pt-2 pb-5">
                          Mes outils
                        </h2>
                        <p>
                          Je crée des sites web modernes et performants avec des
                          outils fiables. Votre site sera rapide, facile à gérer
                          et visible sur Google. J'utilise des technologies
                          modernes pour le design et les animations, une base de
                          données sécurisée pour vos contenus, et je peux
                          intégrer un CMS pour que vous puissiez modifier
                          facilement votre site. Le code est hébergé sur Vercel
                          et le nom de domaine sur OVH, pour que tout fonctionne
                          de manière fluide et sécurisée.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
              <Switch onClick={() => setIsToolSwitch(!isToolSwitch)} />
              {isToolSwitch
                ? "Pas besoin de détais techniques"
                : "Je veux plus de détails techniques"}
            </div>
          </motion.div>
        </div>
        <div ref={ref4}>
          <motion.div
            initial={{ x: "100vw" }}
            animate={inView4 ? { x: "25vw" } : { x: "100vw" }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              times: [0, 1],
            }}
          >
            <Card>
              <CardContent>
                <div className="grid grid-cols-3">
                  <div className="col-span-2 text-justify">
                    <h2 className="text-xl text-sandy-brown font-title font-bold pt-2 pb-5">
                      Mes hobbies
                    </h2>
                    <p>
                      La mécanique, le montage d'ordinateurs gaming, la
                      rénovation et la réparation de consoles rétro ainsi que
                      les jeux vidéo sont autant de passions qui rythment mes
                      journées, en parallèle de mon travail et de mon activité
                      complémentaire.
                    </p>
                    {/* Mettre logos pourchaque activité */}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
