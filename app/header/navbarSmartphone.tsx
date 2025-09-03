"use client";

import Image from "next/image";
import LogoR from "@/public/logo-descript-free-right.png";
import LogoL from "@/public/logo-descript-free-left.png";
import { useState } from "react";

export default function NavbarSmartphone() {
  const [visible, setVisible] = useState(false);
  const togglevisible = () =>
    visible === false ? setVisible(true) : setVisible(false);
  return (
    <div className="fixed flex justify-start items-center w-full py-2 px-10">
      <section
        id="logo"
        className="flex w-fit rotate-z-90"
        onClick={() => togglevisible()}
      >
        <Image
          className="w-[3vw] sm:w-[2vw] md:[1.8vw] lg:w-[1.5vw]"
          src={LogoL}
          alt="Logo du Poteau du Web"
          width={604}
          height={329}
        />
        <Image
          className="w-[3vw] sm:w-[2vw] md:[1.8vw] lg:w-[1.5vw]"
          src={LogoR}
          alt="Logo du Poteau du Web"
          width={604}
          height={329}
        />
      </section>
      {visible && (
        <section
          id="Menu"
          className={`absolute top-0 left-0 w-[100vw] h-[100vh] bg-caf-noir`}
        >
          <p className="w-20">A Propos</p>
          <p className="w-20">Services</p>
          <p className="w-20">Portfolio</p>
          <p className="w-20">Tarifs</p>
          <p className="w-20">Contact</p>
        </section>
      )}
    </div>
  );
}
