"use client";

import Presentation from "@/src/component/presentation/presentation";
import AnimHero from "@/src/component/animHero/animHero";
import ServiceResume from "@/src/component/services-resume/service";
import { FaAnglesDown } from "react-icons/fa6";
import { useRef } from "react";
import { motion } from "motion/react";

export default function Home() {
  const refDown = useRef<HTMLDivElement>(null);
  const handleOnClick = () => {
    refDown.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="w-full">
      <section id="hero" className="w-full h-[20vw] py-15">
        <AnimHero />
      </section>
      <motion.div
        animate={{
          opacity: [0, 1],
        }}
        transition={{ duration: 5, delay: 3 }}
        className="flex justify-center items-center h-[30vw] "
      >
        <FaAnglesDown
          size={40}
          className="animate-bounce cursor-pointer text-caf-noir"
          onClick={() => handleOnClick()}
        />
      </motion.div>
      <section
        ref={refDown}
        id="presentation"
        className="grid grid-cols-3 scroll-mt-20"
      >
        <Presentation />
      </section>
      <section id="services-resume"></section>
      <ServiceResume />
      <section id="to-contact-and-tarifs"></section>
    </div>
  );
}
