"use client";

import Image from "next/image";
import LogoR from "@/public/logo-descript-free-right.png";
import LogoL from "@/public/logo-descript-free-left.png";
import { useState } from "react";
import { motion } from "motion/react";

export default function NavbarSmartphone() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => setVisible((prev) => !prev);

  // Animations prédéfinies
  const openAnim = {
    container: { rotateZ: 90, x: "40vw", transition: { duration: 0.3 } },
    leftLogo: {
      scaleY: 3,
      scaleX: 1.3,
      x: 0,
      transition: { duration: 0.5, delay: 0.3 },
    },
    rightLogo: {
      scaleY: 3,
      scaleX: 1.3,
      x: "30vh",
      transition: { duration: 0.5, delay: 0.3 },
    },
  };

  const closeAnim = {
    container: {
      rotateZ: 0,
      x: 0,
      transition: { duration: 0.5, delay: 0.3 },
    },
    leftLogo: { scaleY: 1, scaleX: 1, x: 0, transition: { duration: 0.3 } },
    rightLogo: { scaleY: 1, scaleX: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="fixed flex justify-start items-center w-full py-2 px-7">
      <section id="logo">
        <motion.div
          className="flex w-fit cursor-pointer"
          onClick={toggleVisible}
          animate={visible ? openAnim.container : closeAnim.container}
        >
          <motion.div
            animate={visible ? openAnim.leftLogo : closeAnim.leftLogo}
          >
            <Image
              className="w-[3vw] sm:w-[2vw] md:w-[1.8vw] lg:w-[1.5vw]"
              src={LogoL}
              alt="Logo du Poteau du Web"
              width={604}
              height={329}
            />
          </motion.div>
          <motion.div
            animate={visible ? openAnim.rightLogo : closeAnim.rightLogo}
          >
            <Image
              className="w-[3vw] sm:w-[2vw] md:w-[1.8vw] lg:w-[1.5vw]"
              src={LogoR}
              alt="Logo du Poteau du Web"
              width={604}
              height={329}
            />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
