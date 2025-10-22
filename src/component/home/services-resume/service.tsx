"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import vitrine from "@/public/vitrine.png";
import design from "@/public/design.png";
import support from "@/public/support.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";

export default function ServiceResume() {
  // Les bouttons perso Next et Prev
  const [api, setApi] = useState<CarouselApi>();

  // La ref pour l'animation au scroll
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ y: "50vh" }}
      animate={inView ? { y: 0 } : { y: "50vh" }}
      transition={{ duration: 0.6 }}
      className="flex flex-col w-full"
    >
      <div className="flex justify-center">
        <Carousel
          plugins={[Autoplay({ delay: 10000, stopOnMouseEnter: true })]}
          opts={{ loop: true }}
          setApi={setApi}
        >
          <CarouselContent className="w-[50vw]">
            <CarouselItem>
              <Card className="bg-logo-blue border-0 shadow-xl m-10 w-[90%] h-[87%]">
                <CardContent className="flex flex-col items-center">
                  <h3 className="text-2xl text-sandy-brown font-title font-bold py-5">
                    Design et Expérience Utilisateur
                  </h3>
                  <Image
                    src={design}
                    alt="vitrine sur site web sur ordinateur"
                    width={688}
                    height={688}
                    className="w-[15vw] rounded-xl animate-move"
                  />
                  <ul className="flex flex-col items-left list-disc text-sandy-brown gap-2 py-5">
                    <li>
                      <p className="text-sandy-brown text-lg">
                        Interfaces claires et ergonomiques
                      </p>
                    </li>
                    <li>
                      <p className="text-sandy-brown text-lg">
                        Adapté pour mobile, tablette, ordinateur
                      </p>
                    </li>
                    <li>
                      <p className="text-sandy-brown text-lg">
                        Navigation fluide pour tous les utilisateurs
                      </p>
                    </li>
                  </ul>
                  <Button className="bg-sandy-brown hover:!bg-sandy-brown/90 active:!translate-0.5 hover:!text-lapis-lazuli hover:!shadow-none shadow-2xs text-logo-blue text-lg transition-all duration-300 ease-in-out">
                    <Link href={"/tarifs"}>En savoir plus</Link>
                  </Button>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="bg-logo-blue border-0 shadow-xl m-10 w-[90%] h-[87%]">
                <CardContent className="flex flex-col items-center">
                  <h3 className="text-2xl text-sandy-brown py-5 font-title font-bold">
                    Site Internet
                  </h3>
                  <Image
                    src={vitrine}
                    alt="vitrine sur site web sur ordinateur"
                    width={688}
                    height={688}
                    className="w-[15vw] rounded-xl animate-move"
                  />
                  <ul className="flex flex-col items-left list-disc text-sandy-brown gap-2 py-5">
                    <li>
                      <p className="text-sandy-brown text-lg">
                        Votre site rapidement et facilement
                      </p>
                    </li>
                    <li>
                      <p className="text-sandy-brown text-lg">
                        Optimisation des performances et SEO
                      </p>
                    </li>
                    <li>
                      <p className="text-sandy-brown text-lg">
                        Maintenance et évolutivité
                      </p>
                    </li>
                  </ul>
                  <Button className="bg-sandy-brown hover:!bg-sandy-brown/90 active:!translate-0.5 hover:!text-lapis-lazuli hover:!shadow-none shadow-2xs text-logo-blue text-lg transition-all duration-300 ease-in-out">
                    <Link href={"/tarifs"}>En savoir plus</Link>
                  </Button>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="bg-logo-blue border-0 shadow-xl m-10 w-[90%] h-[87%]">
                <CardContent className="flex flex-col items-center">
                  <h3 className="text-2xl text-sandy-brown py-5 font-title font-bold">
                    Conseil & Support
                  </h3>
                  <Image
                    src={support}
                    alt="vitrine sur site web sur ordinateur"
                    width={688}
                    height={688}
                    className="w-[15vw] rounded-xl animate-move"
                  />
                  <ul className="flex flex-col items-left list-disc text-sandy-brown gap-2 py-5">
                    <li>
                      <p className="text-sandy-brown text-lg">
                        Stratégie numérique pour associations / entreprises
                      </p>
                    </li>
                    <li>
                      <p className="text-sandy-brown text-lg">
                        Solutions adaptées à vos besoins et budget
                      </p>
                    </li>
                    <li>
                      <p className="text-sandy-brown text-lg">
                        Accompagnement technique et formation
                      </p>
                    </li>
                  </ul>
                  <Button className="bg-sandy-brown hover:!bg-sandy-brown/90 active:!translate-0.5 hover:!text-lapis-lazuli hover:!shadow-none shadow-2xs text-logo-blue text-lg transition-all duration-300 ease-in-out">
                    <Link href={"/tarifs"}>En savoir plus</Link>
                  </Button>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <div className="flex justify-center gap-5 mb-5">
        <button
          className="bg-sandy-brown hover:!bg-copper hover:!scale-110 active:!translate-0.5 hover:!text-lapis-lazuli hover:!shadow-none shadow-2xs text-logo-blue text-lg transition-all duration-300 ease-in-out rounded-xl p-1"
          onClick={() => api?.scrollNext()}
        >
          <GrFormPreviousLink size={35} />
        </button>
        <button
          className="bg-sandy-brown hover:!bg-copper hover:!scale-110 active:!translate-0.5 hover:!text-lapis-lazuli hover:!shadow-none shadow-2xs text-logo-blue text-lg transition-all duration-300 ease-in-out rounded-xl p-1"
          onClick={() => api?.scrollPrev()}
        >
          <GrFormNextLink size={35} />
        </button>
      </div>
    </motion.div>
  );
}
