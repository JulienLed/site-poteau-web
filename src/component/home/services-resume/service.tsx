"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { useState } from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { services } from "@/src/data/services-data";

export default function ServiceResume() {
  const [api, setApi] = useState<CarouselApi>();
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ y: "50vh" }}
      animate={inView ? { y: 0 } : { y: "50vh" }}
      transition={{ duration: 0.6 }}
      className="flex flex-col w-full"
    >
      <div className="flex flex-col items-center w-full">
        <Carousel
          plugins={[Autoplay({ delay: 10000, stopOnMouseEnter: true })]}
          opts={{ loop: true }}
          setApi={setApi}
        >
          <CarouselContent className="w-[85vw] md:w-[50vw] mx-auto">
            {services.map((service, index) => (
              <CarouselItem key={index} className="px-1">
                <Card className="bg-logo-blue border-0 w-full h-[520px] md:h-[550px]">
                  <CardContent className="flex flex-col items-center h-full justify-between">
                    <h3 className="text-xl md:text-2xl text-center text-sandy-brown font-title font-bold py-5">
                      {service.title}
                    </h3>
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      width={688}
                      height={688}
                      className="w-[40%] md:w-[28%] rounded-xl animate-move"
                    />
                    <ul className="flex flex-col items-left list-disc text-sandy-brown gap-2 p-5">
                      {service.items.map((item, i) => (
                        <li key={i}>
                          <p className="text-sandy-brown text-base md:text-lg">
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <Button
                      aria-label={"more_" + index}
                      className="bg-sandy-brown hover:!bg-sandy-brown/90 active:!translate-0.5 hover:!text-lapis-lazuli hover:!shadow-none shadow-2xs text-logo-blue text-base md:text-lg transition-all duration-300 ease-in-out"
                    >
                      <Link aria-label={"more_" + index} href={service.link}>
                        En savoir plus
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex justify-center gap-5 my-5">
          <button
            aria-label="previous"
            className="bg-sandy-brown hover:!bg-copper hover:!scale-110 active:!translate-0.5 hover:!text-lapis-lazuli hover:!shadow-none shadow-2xs text-logo-blue text-lg transition-all duration-300 ease-in-out rounded-xl p-1"
            onClick={() => api?.scrollPrev()}
          >
            <GrFormPreviousLink size={35} />
          </button>
          <button
            aria-label="next"
            className="bg-sandy-brown hover:!bg-copper hover:!scale-110 active:!translate-0.5 hover:!text-lapis-lazuli hover:!shadow-none shadow-2xs text-logo-blue text-lg transition-all duration-300 ease-in-out rounded-xl p-1"
            onClick={() => api?.scrollNext()}
          >
            <GrFormNextLink size={35} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
