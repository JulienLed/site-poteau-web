"use client";

import Image from "next/image";
import Logo from "@/public/logo-bg-free.png";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { MdClose, MdMenu } from "react-icons/md";

const menus = [
  ["Accueil", "/"],
  ["A propos", "/about"],
  ["Services", "/services"],
  ["Portfolio", "/portfolio"],
  ["Tarifs", "/tarifs"],
  ["Articles", "/articles"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"],
];

export default function NavbarSmartphone() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => setVisible((prev) => !prev);

  return (
    <>
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 py-2 bg-black/55 backdrop-blur-sm">
        <Link href="/" aria-label="Accueil">
          <Image
            src={Logo}
            alt="Logo du Poteau du Web"
            width={604}
            height={329}
            className="w-20"
            priority
          />
        </Link>

        <button
          aria-label={visible ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={toggleVisible}
          className="text-sandy-brown p-1"
        >
          {visible ? <MdClose size={30} /> : <MdMenu size={30} />}
        </button>
      </div>

      {/* Dropdown menu */}
      <AnimatePresence>
        {visible && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-[52px] left-0 right-0 z-40 bg-lapis-lazuli/95 text-sandy-brown flex flex-col items-center gap-4 py-6 uppercase shadow-2xl rounded-b-2xl"
          >
            {menus.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                onClick={toggleVisible}
                className="hover:text-copper hover:font-bold transition-all duration-150"
              >
                {label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
