"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

export default function Presentation() {
  const { ref, inView } = useInView({
    threshold: 0.9,
    triggerOnce: false,
    initialInView: true,
  });
  return (
    <div ref={ref}>
      <motion.div
        initial={{ x: "-100vw" }}
        animate={inView ? { x: 0 } : { x: "-100vw" }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          times: [0, 1],
        }}
        className="col-span-2"
      >
        <Card>
          <CardHeader>
            <CardTitle>Le Poteau</CardTitle>
          </CardHeader>
          <CardContent>
            Mes solides compétences professionnelles en tant qu'assistant social
            et développeur web me permettent d'avoir une approche à la fois
            humaine et technique dans la réalisation de votre projet. C'est
            cette approche qui me permet de concevoir et de maintenir des
            solutions numériques simples et fonctionnelles pour votre
            institution, votre association ou pour votre entreprise.
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
