"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import vitrine from "@/public/vitrine.png";
import design from "@/public/design.png";
import support from "@/public/support.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServiceResume() {
  return (
    <div className="flex justify-center w-full my-30">
      <Carousel
        plugins={[Autoplay({ delay: 10000, stopOnMouseEnter: true })]}
        opts={{ loop: true }}
      >
        <CarouselContent className="w-[50vw]">
          <CarouselItem>
            <Card className="bg-logo-blue border-0 shadow-xl m-10">
              <CardContent className="flex flex-col items-center">
                <h3 className="text-2xl text-sandy-brown py-5">
                  Design et Expérience Utilisateur
                </h3>
                <Image
                  src={design}
                  alt="vitrine sur site web sur ordinateur"
                  width={1598}
                  height={1236}
                  className="w-[20vw] rounded-xl"
                />
                <ul className="flex flex-col items-center gap-2 py-5">
                  <li>
                    <p className="text-sandy-brown text-lg">
                      Interfaces claires et ergonomiques
                    </p>
                  </li>
                  <li>
                    <p className="text-sandy-brown text-lg">
                      Adapté mobile et desktop
                    </p>
                  </li>
                  <li>
                    <p className="text-sandy-brown text-lg">
                      Navigation fluide pour tous les utilisateurs
                    </p>
                  </li>
                </ul>
                <Button className="bg-sandy-brown hover:!bg-caf-noir active:!translate-0.5 hover:!text-azure-web hover:!shadow-none shadow-2xs text-lapis-lazuli text-lg">
                  <Link href={"/tarifs"}>En savoir plus</Link>
                </Button>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card className="bg-logo-blue border-0 shadow-xl m-10">
              <CardContent className="flex flex-col items-center">
                <h3 className="text-2xl text-sandy-brown py-5">Site Vitrine</h3>
                <Image
                  src={vitrine}
                  alt="vitrine sur site web sur ordinateur"
                  width={1598}
                  height={1236}
                  className="w-[20vw] rounded-xl"
                />
                <ul className="flex flex-col items-center gap-2 py-5">
                  <li>
                    <p className="text-sandy-brown text-lg">
                      Votre site vitrine rapidement et facilement
                    </p>
                  </li>
                  <li>
                    <p className="text-sandy-brown text-lg">
                      Optimisation performance et SEO
                    </p>
                  </li>
                  <li>
                    <p className="text-sandy-brown text-lg">
                      Maintenance et évolutivité
                    </p>
                  </li>
                </ul>
                <Button className="bg-sandy-brown hover:!bg-caf-noir active:!translate-0.5 hover:!text-azure-web hover:!shadow-none shadow-2xs text-lapis-lazuli text-lg">
                  <Link href={"/tarifs"}>En savoir plus</Link>
                </Button>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card className="bg-logo-blue border-0 shadow-xl m-10">
              <CardContent className="flex flex-col items-center">
                <h3 className="text-2xl text-sandy-brown py-5">
                  Conseil & Support
                </h3>
                <Image
                  src={support}
                  alt="vitrine sur site web sur ordinateur"
                  width={1598}
                  height={1236}
                  className="w-[20vw] rounded-xl"
                />
                <ul className="flex flex-col items-center gap-2 py-5">
                  <li>
                    <p className="text-sandy-brown text-lg">
                      Stratégie numérique pour associations/entreprises
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
                <Button className="bg-sandy-brown hover:!bg-caf-noir active:!translate-0.5 hover:!text-azure-web hover:!shadow-none shadow-2xs text-lapis-lazuli text-lg">
                  <Link href={"/tarifs"}>En savoir plus</Link>
                </Button>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselNext></CarouselNext>
        <CarouselPrevious></CarouselPrevious>
      </Carousel>
    </div>
  );
}
