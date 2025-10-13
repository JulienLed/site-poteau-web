"use client";

import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Toggle } from "@/components/ui/toggle";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "react-intersection-observer";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNodejsLine } from "react-icons/ri";
import { SiStrapi } from "react-icons/si";
import { PageTitle } from "@/utils/utils";
import Image from "next/image";

export default function About() {
  const [isToolSwitch, setIsToolSwitch] = useState<boolean>(false);

  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

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

  if (!hasMounted) return null;
  return (
    <div className="py-15">
      <section id="about" className="flex flex-col gap-30">
        <PageTitle title="Qui suis-je ?" />
        <div ref={ref1}>
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
            className="flex justify-evenly gap-10"
          >
            <Card className="bg-logo-blue border-0 text-sandy-brown shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-title font-semibold">
                  Assistant social
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center text-lg">
                <p className="text-justify">
                  Assistant social de formation, j'ai travaillé pendant quatre
                  ans dans un centre d'hébergement d'urgence pour personnes en
                  situation d'addiction. Depuis 2020, j'exerce au sein d'une
                  société de logement social.
                </p>
              </CardContent>
            </Card>
            <Image
              src={"/social.png"}
              alt="Assistant social"
              width={662}
              height={486}
              className="w-[20vw]"
              style={{ animation: "var(--animate-move)" }}
            />
          </motion.div>
        </div>
        <div ref={ref2}>
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
            className="flex justify-evenly gap-10"
          >
            <Image
              alt="Code"
              src={"/code.png"}
              width={680}
              height={555}
              className="w-[20vw]"
              style={{ animation: "var(--animate-move)" }}
            />
            <Card className="bg-logo-blue border-0 text-sandy-brown shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-title font-semibold">
                  Developpeur Web Full-Stack
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center text-lg">
                <p className="text-justify">
                  Passionné depuis toujours par l'informatique, l'IA et les
                  nouvelles technologies, j'ai décidé en juin 2024 de me lancer
                  dans l'apprentissage du code en autodidacte. Pendant plusieurs
                  mois, j'ai développé mes compétences, jusqu'à atteindre un
                  niveau professionnel.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <div ref={ref3}>
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
            className="flex justify-evenly gap-10"
          >
            <Card className="bg-logo-blue border-0 text-sandy-brown shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-title font-semibold">
                  Indépendant
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center text-lg">
                <p className="text-justify">
                  Le 16 septembre 2025, j'ai franchi une nouvelle étape en
                  lançant mon activité en tant qu'indépendant complémentaire,
                  prêt à offrir des prestations de qualité, à la hauteur des
                  standards du métier. J'ai d'ailleurs obtenu une certification
                  d'ingénieur Full-Stack par le site CodeCademy.
                </p>
              </CardContent>
            </Card>
            <Image
              src={"/certificate-fullstack.png"}
              width={500}
              height={500}
              alt="Certificat Ingénieur Fullstack"
              className="w-[20vw] hover:scale-220 transition-all duration-600 ease-in-out"
            />
          </motion.div>
        </div>
        <div ref={ref4}>
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
            className="flex justify-evenly gap-10"
          >
            {inView4 && (
              <div className="grid grid-cols-3 min-w-[20vw] items-center text-sandy-brown">
                <RiJavascriptFill
                  size={50}
                  className="animate-jump-in duration-600"
                  style={{
                    animationDelay: "0s",
                  }}
                />
                <FaReact
                  size={50}
                  className="animate-jump-in duration-600"
                  style={{ animationDelay: "0.3s" }}
                />
                <RiNextjsFill
                  size={50}
                  className="animate-jump-in duration-600"
                  style={{ animationDelay: "0.6s" }}
                />
                <BiLogoPostgresql
                  size={50}
                  className="animate-jump-in duration-600"
                  style={{ animationDelay: "0.9s" }}
                />
                <RiNodejsLine
                  size={50}
                  className="animate-jump-in duration-600"
                  style={{ animationDelay: "1.2s" }}
                />
                <SiStrapi
                  size={50}
                  className="animate-jump-in duration-600"
                  style={{ animationDelay: "1.5s" }}
                />
              </div>
            )}
            <Card className="bg-logo-blue border-0 text-sandy-brown shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-title font-semibold">
                  Outils
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center text-lg">
                <p className="text-justify">
                  Je développe des sites web modernes et performants avec
                  Next.js et JavaScript, utilisant Tailwind CSS et shadcn/ui
                  pour l'interface, Framer Motion et React Icons pour les
                  animations. Le code est versionné sur GitHub, déployé sur
                  Vercel, avec domaine OVH. La base de données est sécurisée via
                  Prisma Postgres, et je peux intégrer un CMS Strapi et Google
                  Maps pour la visibilité locale.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* <div ref={ref4} className="w-[50vw]">
          <motion.div
            initial={{ x: "100vw", opacity: 0 }}
            animate={
              hasMounted && inView4
                ? { x: "0vw", opacity: 1 }
                : { x: "100vw", opacity: 0 }
            }
            transition={{
              duration: 1,
              ease: "easeOut",
              times: [0, 1],
            }}
            className="flex flex-col items-end"
          >
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={isToolSwitch ? "tools-on" : "tools-off"}
                  initial={{ opacity: 0, y: 10, height: 400 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -10, height: 400 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-logo-blue border-0 text-sandy-brown shadow-2xl px-5 py-10">
                    {isToolSwitch ? (
                      <motion.div
                        key="tools-on"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                      >
                        <CardContent>
                          <div className="grid grid-cols-3">
                            <div className="grid grid-cols-3 items-center col-start-1">
                              <RiJavascriptFill
                                size={50}
                                className="animate-jump-in duration-300"
                                style={{ animationDelay: "0s" }}
                              />
                              <FaReact
                                size={50}
                                className="animate-jump-in duration-300"
                                style={{ animationDelay: "0.3s" }}
                              />
                              <RiNextjsFill
                                size={50}
                                className="animate-jump-in duration-300"
                                style={{ animationDelay: "0.6s" }}
                              />
                              <BiLogoPostgresql
                                size={50}
                                className="animate-jump-in duration-300"
                                style={{ animationDelay: "0.9s" }}
                              />
                              <RiNodejsLine
                                size={50}
                                className="animate-jump-in duration-300"
                                style={{ animationDelay: "1.2s" }}
                              />
                              <SiStrapi
                                size={50}
                                className="animate-jump-in duration-300"
                                style={{ animationDelay: "1.5s" }}
                              />
                            </div>
                            <div className="col-start-2 col-span-2">
                              <h2 className="text-xl text-sandy-brown font-title font-bold pt-2 pb-5">
                                Mes outils
                              </h2>
                              <p>
                                Je conçois et développe des sites web modernes
                                avec Next.js et JavaScript, assurant
                                performance, SEO optimisé et évolutivité.
                                L'interface est construite avec Tailwind CSS et
                                shadcn/ui, enrichie par Framer Motion et React
                                Icons pour un rendu professionnel et interactif.
                                Le code est versionné sur GitHub, déployé sur
                                Vercel, et le nom de domaine est géré via OVH.
                                La base de données est hébergée sur Prisma
                                Postgres Serverless Database, garantissant
                                sécurité, performance et scalabilité. Si
                                nécessaire, j'intègre un CMS personnalisé avec
                                Strapi et le référencement Google Maps pour
                                améliorer la visibilité locale.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="tools-off"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                      >
                        <CardContent>
                          <div>
                            <h2 className="text-xl text-sandy-brown font-title font-bold pt-2 pb-5">
                              Mes outils
                            </h2>
                            <p>
                              Je crée des sites web modernes et performants avec
                              des outils fiables. Votre site sera rapide, facile
                              à gérer et visible sur Google. J'utilise des
                              technologies modernes pour le design et les
                              animations, une base de données sécurisée pour vos
                              contenus, et je peux intégrer un CMS pour que vous
                              puissiez modifier facilement votre site. Le code
                              est hébergé sur Vercel et le nom de domaine sur
                              OVH, pour que tout fonctionne de manière fluide et
                              sécurisée.
                            </p>
                          </div>
                        </CardContent>
                      </motion.div>
                    )}
                    <div className="flex justify-end gap-5">
                      <Toggle
                        id="tools-switch"
                        onPressedChange={() => setIsToolSwitch(!isToolSwitch)}
                        className="bg-sandy-brown hover:!bg-sandy-brown/90 active:!translate-0.5 hover:!text-lapis-lazuli hover:!shadow-none shadow-2xs text-logo-blue transition-all duration-300 ease-in-out"
                      >
                        {isToolSwitch
                          ? "Pas besoin de détais techniques"
                          : "Je veux plus de détails techniques"}
                      </Toggle>
                    </div>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div> */}
      </section>
    </div>
  );
}
