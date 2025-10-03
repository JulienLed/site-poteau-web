"use client";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function AnimHeroDesktop() {
  const { ref, inView } = useInView({
    threshold: 0.9,
    triggerOnce: false,
    initialInView: true,
  });
  return (
    <div ref={ref} className="grid grid-cols-2 items-center">
      <motion.div
        className="grid grid-cols-2 bg-logo-blue sm:w-[40vw] md:w-[60vw] h-fit shadow-lg rounded-3xl text-sandy-brown p-10"
        initial={{ x: -100 }}
        animate={
          inView ? { x: ["-100vw", "-40vw"] } : { x: ["-40vw", "-100vw"] }
        }
        transition={{
          duration: 0.6,
          ease: "easeOut",
          times: [0, 1],
        }}
      >
        <div></div>
        <div className="font-title">
          <Image
            alt="Le Poteau du Web"
            src={"/Le Poteau du Web.png"}
            height={85}
            width={637}
            className="!w-[50vw]"
          />
          <div className="relative text-center text-sm md:text-lg max-w-[80%] mx-auto">
            <span className="mask-text break-words">
              Un pilier solide pour bâtir votre site web
            </span>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="grid grid-cols-[40vw_10vw] bg-logo-blue w-[50vw] md:w-[70vw] h-fit shadow-lg rounded-3xl text-sandy-brown p-5 md:p-10"
        initial={{ x: "100vw" }}
        animate={inView ? { x: ["100vw", "6vw"] } : { x: ["6vw", "100vw"] }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          times: [0, 1],
        }}
      >
        <div className="flex items-center gap-5">
          <Image
            alt="Photo de Julien Ledent"
            src={"/Julien.png"}
            width={922}
            height={1056}
            className="w-[15vw] rounded-full shadow-2xl"
          />
          <p className="border-l-2 border-sandy-brown md:text-xs lg:text-lg text-left lg:text-justify pl-1 md:pl-5 m-2 md:m-5">
            Julien, Developpeur Web. <br /> Avec Le Poteau du Web, je vous
            propose de réaliser votre site web de façon professionnelle et en
            toute sérénité
          </p>
        </div>
        <div></div>
      </motion.div>
    </div>
  );
}
