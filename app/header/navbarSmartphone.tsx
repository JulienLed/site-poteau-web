"use client";

import Image from "next/image";
import LogoR from "@/public/logo-descript-free-right.png";
import LogoL from "@/public/logo-descript-free-left.png";
import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { MdClose } from "react-icons/md";

export default function NavbarSmartphone() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => setVisible((prev) => !prev);

  // Animations
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
      x: 125,
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
    <div className="fixed flex justify-start items-center w-full h-fit py-2 px-7">
      <section id="logo">
        <motion.div
          className="relative flex justify-center items-center w-fit h-hit cursor-pointer"
          onClick={toggleVisible}
          animate={visible ? openAnim.container : closeAnim.container}
        >
          <motion.div
            className="flex"
            animate={visible ? openAnim.leftLogo : closeAnim.leftLogo}
          >
            <Image
              className="w-4"
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
              className="w-4 z-2"
              src={LogoR}
              alt="Logo du Poteau du Web"
              width={604}
              height={329}
            />
          </motion.div>
        </motion.div>
      </section>
      {visible && (
        <motion.div
          className="fixed top-10 left-38.5 w-[37.5vw] flex flex-col items-center justify-center py-1 bg-caf-noir text-azure-web text-center z-0"
          animate={
            visible
              ? {
                  opacity: [0, 1, 1],
                  scaleX: [0, 0, 1],
                  scaleY: [0, 0, 1],
                }
              : {
                  opacity: [1, 1, 0],
                  scaleX: [1, 1, 0],
                  scaleY: [1, 1, 0],
                }
          }
          transition={
            visible
              ? { duration: 0.3, times: [0, 0.5, 1], delay: 0.4 }
              : { duration: 0.3, times: [0, 0.5, 1] }
          }
        >
          <MdClose />
          <Link href={"/about"}>A Propos</Link>
          <Link href={"/services"}>Services</Link>
          <Link href={"/portfolio"}>Portfolio</Link>
          <Link href={"/tarifs"}>Tarifs</Link>
          <Link href={"/contact"}>Contact</Link>
        </motion.div>
      )}
    </div>
  );
}
