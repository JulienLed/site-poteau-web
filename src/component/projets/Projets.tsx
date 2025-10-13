"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import { useState } from "react";

export default function Projets() {
  const [click, setClick] = useState<number | null>(null);
  const projets = [
    {
      title: "Projet personnel de site pour une crèche",
      description:
        "Site réalisé en une semaine. Utilisation d'IA générative d'image et textuelle pour le contenu",
    },
    {
      title: "Projet personnel de site pour une boulangerie",
      description:
        "Site réalisé en un jour, alliant simplicité et fonctionnalité",
    },
  ];

  const handleClick = (index: number) => {
    click === index ? setClick(null) : setClick(index);
  };

  return (
    <div className="flex gap-6">
      {projets.map((projet, i) => (
        <div
          key={i}
          className="relative w-64 h-40"
          style={{ perspective: 1000 }}
        >
          <motion.div
            animate={{ rotateY: click === i ? 180 : 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full relative"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Face avant */}
            <Card
              className="absolute w-full h-full flex items-center justify-center bg-red-500"
              style={{
                backfaceVisibility: "hidden",
                borderRadius: "1rem",
              }}
            >
              <CardContent className="text-center">
                <p>{projet.title}</p>
                <button onClick={() => handleClick(i)}>Voir plus</button>
              </CardContent>
            </Card>

            {/* Face arrière */}
            <Card
              className="absolute w-full h-full flex items-center justify-center bg-green-500"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                borderRadius: "1rem",
              }}
            >
              <CardContent className="text-center">
                <p>{projet.description}</p>
                <button onClick={() => handleClick(i)}>Retour</button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
