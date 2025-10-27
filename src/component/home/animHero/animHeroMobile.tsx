"use client";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function AnimHeroMobile() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
    initialInView: true,
  });

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center gap-5 px-4 py-8"
    >
      {/* Bloc titre/logo */}
      <motion.div
        className="flex flex-col items-center bg-logo-blue w-[85vw] shadow-lg rounded-3xl text-sandy-brown p-5 mt-15"
        initial={{ y: -100 }}
        animate={inView ? { y: [-200, 0] } : { y: [0, -200] }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <Image
          alt="Le Poteau du Web"
          src="/Le Poteau du Web.png"
          height={60}
          width={400}
          className="w-[70vw]"
        />
        <p className="text-center text-base mt-2">
          <span className="mask-text">
            Un pilier solide pour bâtir votre site web
          </span>
        </p>
      </motion.div>

      {/* Bloc portrait + texte */}
      <motion.div
        className="flex flex-col items-center bg-logo-blue w-[85vw] shadow-lg rounded-3xl text-sandy-brown p-5"
        initial={{ y: 100 }}
        animate={inView ? { y: [200, 0] } : { y: [0, 200] }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <Image
          alt="Photo de Julien Ledent"
          src="/Julien.png"
          width={400}
          height={400}
          className="w-[40vw] max-w-[150px] rounded-full shadow-2xl mb-4"
        />
        <p className="text-center text-sm">
          <strong>Julien, Developpeur Web.</strong> <br />
          Avec Le Poteau du Web, je vous propose de réaliser votre site web
          professionnellement et en toute sérénité.
        </p>
      </motion.div>
    </div>
  );
}
