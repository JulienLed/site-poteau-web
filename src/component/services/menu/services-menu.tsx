"use client";

import { Card, CardContent } from "@/components/ui/card";
import { delay } from "motion/react";
import Image from "next/image";

type ServicesMenuProps = {
  scrollToService: (service: string) => void;
};

const services = [
  {
    name: "Création de site internet",
    key: "site",
    img: {
      src: "/vitrine.png",
      widht: 688,
      height: 688,
    },
    delay: "0s",
  },
  {
    name: "Référencement",
    key: "referencement",
    img: {
      src: "/seo.png",
      widht: 688,
      height: 688,
    },
    delay: "0.3s",
  },
  {
    name: "Hébergement",
    key: "hebergement",
    img: {
      src: "/hebergement.png",
      widht: 688,
      height: 688,
    },
    delay: "0.6s",
  },
  {
    name: "Maintenance",
    key: "maintenance",
    img: {
      src: "/maintenance.png",
      widht: 688,
      height: 688,
    },
    delay: "0.9s",
  },
];

export default function ServicesMenu({ scrollToService }: ServicesMenuProps) {
  return (
    <div className="flex justify-center items-center w-fit mx-auto mb-50 mt-5 gap-5">
      {services.map(({ name, key, img, delay }) => {
        return (
          <Card
            key={key}
            onClick={() => scrollToService(key)}
            className="bg-logo-blue/70 hover:bg-logo-blue hover:scale-110 transition-all duration-300 ease-in-out border-0 text-sandy-brown px-5 py-5 w-[15vw] h-[30vh] cursor-pointer animate-jump-in"
            style={{ animationDelay: delay }}
          >
            <CardContent>
              <h2 className="text-xl font-title text-center pb-2">{name}</h2>
              <Image
                alt={name}
                src={img.src}
                width={img.widht}
                height={img.height}
                className="hover:animate-move"
              />
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
