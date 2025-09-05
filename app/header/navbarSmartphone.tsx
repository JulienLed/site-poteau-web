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

  const menus = [
    ["Accueil", "/"],
    ["A propos", "/about"],
    ["Services", "/services"],
    ["Portfolio", "/portfolio"],
    ["Tarifs", "/tarifs"],
    ["Contact", "/contact"],
  ];

  // Animations
  const openAnim = {
    container: { rotateZ: 90, x: 200, transition: { duration: 0.3 } },
    leftLogo: {
      scaleY: 3,
      scaleX: 1.3,
      x: 0,
      transition: { duration: 0.3, delay: 0.3 },
    },
    rightLogo: {
      scaleY: 3,
      scaleX: 1.3,
      x: 253,
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
          className="flex justify-center items-center w-fit h-hit cursor-pointer z-5"
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
          className="fixed translate-x-[117px] translate-y-[125.5px] w-[198px] flex flex-col gap-3 uppercase items-center justify-center py-1 bg-caf-noir/90 text-azure-web text-center z-3"
          animate={
            visible
              ? {
                  opacity: [0, 0.5, 1],
                }
              : {
                  opacity: [1, 0.5, 0],
                }
          }
          transition={
            visible
              ? { duration: 0.2, times: [0, 0.5, 1], delay: 0.5 }
              : { duration: 0.2, times: [0, 0.5, 1] }
          }
        >
          <button
            aria-label="Boutton de fermetutre du menu"
            onClick={() => toggleVisible()}
            className="hover:text-copper transition-all duration-150"
          >
            <MdClose size={25} />
          </button>

          {menus.map((menu: string[]) => {
            return (
              <Link
                key={menu[0]}
                aria-label={menu[0]}
                href={menu[1]}
                onClick={() => toggleVisible()}
                className="hover:font-bold hover:text-copper transition-all duration-150"
              >
                {menu[0]}
              </Link>
            );
          })}
        </motion.div>
      )}
    </div>
  );
}
