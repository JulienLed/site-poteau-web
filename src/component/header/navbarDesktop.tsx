import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import LogoR from "@/public/logo-descript-free-right.png";
import LogoL from "@/public/logo-descript-free-left.png";

export default function NavbarDesktop() {
  const menus = [
    ["Accueil", "/"],
    ["A propos", "/about"],
    ["Services", "/services"],
    ["Projets", "/portfolio"],
    ["Tarifs", "/tarifs"],
    ["Contact", "/contact"],
  ];

  return (
    <div className="fixed grid grid-cols-3 w-[100vw] h-30 bg-transparent">
      <section id="logo" className="ml-2 sm:ml-10 col-start-1 self-center">
        <motion.div
          className="flex w-fit"
          animate={{
            rotateZ: ["0", "90deg", "90deg", "90deg", 0],
            x: [0, 50, 50, 50, 0],
          }}
          transition={{
            duration: 1.2,
            times: [0, 0.25, 0.5, 0.75, 1],
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="w-[3vw] sm:w-[2vw] md:w-[1.8vw] lg:w-[1.5vw]"
            initial={{ x: [0, 0, 0, 0, 0] }}
            animate={{ x: [0, -30, -30, -30, 0] }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              times: [0, 0.25, 0.5, 0.75, 1],
              ease: "easeInOut",
            }}
          >
            <Link href={"/"}>
              <Image
                src={LogoL}
                alt="Image coté gauche du logo de la société"
                width={157}
                height={329}
              />
            </Link>
          </motion.div>
          <motion.div
            className="w-[3vw] sm:w-[2vw] md:w-[1.8vw] lg:w-[1.5vw]"
            initial={{ x: [0, 0, 0, 0, 0] }}
            animate={{ x: [0, 30, 30, 30, 0] }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              times: [0, 0.25, 0.5, 0.75, 1],
              ease: "easeInOut",
            }}
          >
            <Link href={"/"}>
              <Image
                src={LogoR}
                alt="Image coté droit du logo de la société"
                width={157}
                height={329}
              />
            </Link>
          </motion.div>
        </motion.div>
      </section>
      <section
        id="navbar"
        className="relative w-fit justify-self-center self-center"
      >
        <motion.div
          className="absolute -inset-[3px] bg-[radial-gradient(circle,_#264864,_#d79b48,_#cfe2f3)] 
              bg-[length:400%_400%] animate-marbre rounded-4xl px-10 py-3"
          initial={{ opacity: 0, x: 0 }}
          animate={{
            opacity: [0, 0, 1],
            x: ["-80%", 0, 0],
          }}
          transition={{
            duration: 2,
            times: [0, 0.5, 1],
            delay: 0.3,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="flex justify-center items-center w-fit gap-5 px-10 py-3 backdrop-blur-2xl bg-azure-web/70 rounded-4xl"
          initial={{ opacity: 0, x: 0 }}
          animate={{
            opacity: [0, 0.7, 1],
            x: ["-80%", 0, 0],
          }}
          transition={{
            duration: 2,
            times: [0, 0.5, 1],
            delay: 0.3,
            ease: "easeInOut",
          }}
        >
          {menus.map((menu) => (
            <Link
              key={menu[0]}
              href={menu[1]}
              className="w-20 hover:font-bold hover:text-copper text-center text-lg transition-all duration:200 ease-in-out"
            >
              {menu[0]}
            </Link>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
