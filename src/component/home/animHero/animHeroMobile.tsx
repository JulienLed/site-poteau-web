"use client";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { asblLinkClassName } from "./heroLink";

export default function AnimHeroMobile() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
    initialInView: true,
  });

  return (
    <div
      ref={ref}
      className="h-full flex flex-col items-center justify-center gap-5 py-8"
    >
      {/* Bloc titre/logo */}
      <motion.div
        className="flex flex-col items-center bg-logo-blue w-full shadow-lg rounded-3xl text-sandy-brown p-5"
        initial={{ y: -200 }}
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
        <h1 className="flex flex-col items-center text-center text-base mt-2 gap-0.5">
          <span className="mask-text">Un pilier solide pour</span>{" "}
          <span className="mask-text" style={{ animationDelay: "2.5s" }}>
            bâtir votre site web
          </span>
        </h1>
      </motion.div>

      {/* Bloc portrait + texte */}
      <motion.div
        className="flex flex-col items-center bg-logo-blue w-full shadow-lg rounded-3xl text-sandy-brown p-5"
        initial={{ y: 200 }}
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
          <strong>Julien, Développeur Web.</strong> <br />
          Avec Le Poteau du Web, je réalise le site de votre{" "}
          <Link href="/articles/site-internet-asbl-belgique" className={asblLinkClassName}>
            ASBL
          </Link>{" "}
          ou association à Wavre, de façon professionnelle et sereine.
        </p>
      </motion.div>
    </div>
  );
}
