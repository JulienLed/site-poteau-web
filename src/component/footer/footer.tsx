"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Logo from "@/public/logo-bg-free.png";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [isClick, setIsClick] = useState({ phone: false, mail: false });
  const infos = {
    phone: "+32 456 99 16 53",
    mail: "contact@lepoteauduweb.be",
    BCE: "BE23 7320 8347 2591",
  };
  const getClass = (clicked: boolean) =>
    clicked
      ? "cursor-default font-medium transition-all duration-200 ease-in-out w-[50vw] md:w-[20vw] text-sm md:text-base"
      : "hover:cursor-pointer hover:font-bold transition-all duration-200 ease-in-out w-[50vw] md:w-[20vw] text-sm md:text-base";
  return (
    <div className="grid grid-cols-[20%_80%] bg-gradient-to-t from-black/30 to-transparent text-logo-blue h-fit w-full">
      <div className="flex flex-col gap-5 p-5">
        <section id="logo" className="w-30 sm:w-40">
          <Image src={Logo} alt="Logo de la société" width={604} height={329} />
        </section>

        <section id="social-logos" className="flex gap-5">
          <a href="https://github.com/JulienLed" target="_blank">
            <FaGithub size={25} />
          </a>
          <a href="https://linkedin.com/in/julien-l-121357235" target="_blank">
            <FaLinkedin size={25} />
          </a>
        </section>
      </div>
      <section
        id="contact"
        className="col-start-2 self-center md:self-end justify-self-end px-5"
      >
        <p
          className={getClass(isClick.mail)}
          style={isClick.mail ? { cursor: "default" } : { cursor: "pointer" }}
          onClick={() => setIsClick((prev) => ({ ...prev, mail: true }))}
        >
          {isClick.mail
            ? `E-Mail : ${infos.mail}`
            : `E-mail : Cliquez pour voir`}
        </p>
        <p
          className={getClass(isClick.phone)}
          onClick={() => setIsClick((prev) => ({ ...prev, phone: true }))}
        >
          {isClick.phone ? `Tel : ${infos.phone}` : `Tel : Cliquez pour voir`}
        </p>
        <p className="text-xs md:text-base">{`BCE : ${infos.BCE}`}</p>
      </section>
      <section
        id="copyright"
        className="row-start-2 col-span-2 mx-auto flex gap-5"
      >
        <div className="flex justify-center gap-1 md:gap-5">
          <p className="font-text text-sm sm:text-base">
            © 2025 Le Poteau du Web
          </p>
          <span>-</span>
          <Link href={"/legals"}>
            <p className="font-text text-sm sm:text-base">
              Politique de confidentialité
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
