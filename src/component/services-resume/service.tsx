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
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ServiceResume() {
  return (
    <div className="flex justify-center w-full my-30">
      <Carousel
        plugins={[Autoplay({ delay: 5000, stopOnMouseEnter: true })]}
        opts={{ loop: true }}
      >
        <CarouselContent className="w-[50vw]">
          <CarouselItem>
            <Card className="bg-logo-blue border-0 shadow-xl m-10">
              <CardContent className="flex flex-col items-center">
                <h3 className="text-2xl text-sandy-brown py-5">
                  Sites vitrines et applications web sur-mesure
                </h3>
                <Image
                  src={vitrine}
                  alt="vitrine sur site web sur ordinateur"
                  width={1598}
                  height={1236}
                  className="w-[20vw] rounded-xl"
                />
                <p className="text-sandy-brown text-lg py-5">
                  Votre site vitrine rapidement et facilement
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card className="bg-logo-blue border-0 shadow-xl m-10">
              <CardContent className="flex flex-col items-center">
                <h3 className="text-2xl text-sandy-brown py-5">
                  Un site Vitrine
                </h3>
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
                <Button>Tarifs et Contact</Button>
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
