"use client";

import Image from "next/image";
import LogoR from "@/public/logo-descript-free-right.png";
import LogoL from "@/public/logo-descript-free-left.png";
import { motion } from "motion/react";

export default function Header() {
  return (
    <div className="flex items-center w-[100vw] h-30">
      <section id="logo" className="w-20 ml-10 mt-10 flex">
        <motion.div
          className="flex"
          animate={{
            rotateZ: ["0", "90deg", "90deg", "90deg", 0],
            x: [0, 50, 50, 50, 0],
          }}
          transition={{
            duration: 2,
            times: [0, 0.25, 0.5, 0.75, 1],
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="w-[1.2vw]"
            initial={{ x: [0, 0, 0, 0, 0] }}
            animate={{ x: [0, -20, -20, -20, 0] }}
            transition={{
              duration: 1,
              delay: 0.4,
              times: [0, 0.25, 0.5, 0.75, 1],
              ease: "easeInOut",
            }}
          >
            <Image
              src={LogoL}
              alt="Image coté gauche du logo de la société"
              width={157}
              height={329}
            />
          </motion.div>
          <motion.div
            className="w-[1.2vw]"
            initial={{ x: [0, 0, 0, 0, 0] }}
            animate={{ x: [0, 20, 20, 20, 0] }}
            transition={{
              duration: 1,
              delay: 0.4,
              times: [0, 0.25, 0.5, 0.75, 1],
              ease: "easeInOut",
            }}
          >
            <Image
              src={LogoR}
              alt="Image coté droit du logo de la société"
              width={157}
              height={329}
            />
          </motion.div>
        </motion.div>
      </section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.5, 1, 1, 1],
          translateX: [0, 10, 20, 30, 50],
        }}
        transition={{ duration: 1, times: [0, 0.25, 0.5, 0.75, 1], delay: 0.5 }}
      >
        <section id="navbar" className="flex items-center gap-5 w-[70%]">
          <p>A Propos</p>
          <p>Services</p>
          <p>Portfolio</p>
          <p>Tarifs</p>
          <p>Contact</p>
        </section>
      </motion.div>
    </div>
  );
}
