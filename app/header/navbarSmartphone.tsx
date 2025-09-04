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
      transition: { duration: 0.3, delay: 0.3 },
    },
    rightLogo: {
      scaleY: 3,
      scaleX: 1.3,
      x: 125,
      transition: { duration: 0.3, delay: 0.3 },
    },
  };

  const closeAnim = {
    container: {
      rotateZ: 0,
      x: 0,
      transition: { duration: 0.3, delay: 0.1 },
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
              className="w-4"
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
          className="fixed top-10 left-38.5 w-[37.5vw] flex flex-col items-center justify-center py-1 bg-caf-noir text-azure-web text-center"
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
              ? { duration: 0.2, times: [0, 0.5, 1], delay: 0.4 }
              : { duration: 0.2, times: [0, 0.5, 1] }
          }
        >
          <button
            aria-label="Boutton de fermetutre du menu"
            onClick={() => toggleVisible()}
            className="hover:text-copper transition-all duration-150"
          >
            <MdClose size={20} />
          </button>
          <Link
            href={"/"}
            onClick={() => toggleVisible()}
            className="hover:font-bold transition-all duration-150"
          >
            Accueil
          </Link>
          <Link
            href={"/about"}
            onClick={() => toggleVisible()}
            className="hover:font-bold transition-all duration-150"
          >
            A Propos
          </Link>
          <Link
            onClick={() => toggleVisible()}
            href={"/services"}
            className="hover:font-bold transition-all duration-150"
          >
            Services
          </Link>
          <Link
            onClick={() => toggleVisible()}
            href={"/portfolio"}
            className="hover:font-bold transition-all duration-150"
          >
            Portfolio
          </Link>
          <Link
            href={"/tarifs"}
            onClick={() => toggleVisible()}
            className="hover:font-bold transition-all duration-150"
          >
            Tarifs
          </Link>
          <Link
            href={"/contact"}
            onClick={() => toggleVisible()}
            className="hover:font-bold transition-all duration-150"
          >
            Contact
          </Link>
        </motion.div>
      )}
    </div>
  );
}
