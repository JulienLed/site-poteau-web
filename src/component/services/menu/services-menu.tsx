"use client";

import { Card, CardContent } from "@/components/ui/card";
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
  },
  {
    name: "Référencement",
    key: "referencement",
    img: {
      src: "/seo.png",
      widht: 688,
      height: 688,
    },
  },
  {
    name: "Hébergement",
    key: "hebergement",
    img: {
      src: "/hebergement.png",
      widht: 688,
      height: 688,
    },
  },
  {
    name: "Maintenance",
    key: "maintenance",
    img: {
      src: "/maintenance.png",
      widht: 688,
      height: 688,
    },
  },
];

export default function ServicesMenu({ scrollToService }: ServicesMenuProps) {
  return (
    <div className="grid grid-cols-2 justify-center items-center w-fit mx-auto my-15 gap-5">
      {services.map(({ name, key, img }) => {
        return (
          <Card
            key={key}
            onClick={() => scrollToService(key)}
            className="bg-logo-blue/70 hover:bg-logo-blue hover:scale-110 transition-all duration-300 ease-in-out border-0 text-sandy-brown px-5 py-5 w-[15vw] h-[30vh] cursor-pointer"
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
