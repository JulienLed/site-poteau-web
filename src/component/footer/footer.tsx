import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Logo from "@/public/logo-bg-free.png";

export default function Footer() {
  return (
    <div className="bottom-0 left-0 right-0 grid grid-cols-4 bg-gradient-to-t from-black/30 to-transparent text-azure-web h-fit w-full">
      <section
        id="logo"
        className="col-start-1 w-40 sm:w-50 pt-5 sm:pt-10 pl-1 sm:pl-5 pb-5"
      >
        <Image src={Logo} alt="Logo de la société" width={604} height={329} />
      </section>

      <section
        id="social-logos"
        className="col-start-1 row-start-2 flex gap-5 justify-self-start self-start pl-5 sm:pl-10 pb-5 sm:pb-10"
      >
        <a href="https://github.com/JulienLed" target="_blank">
          <FaGithub size={30} />
        </a>
        <a href="https://linkedin.com/in/julien-l-121357235" target="_blank">
          <FaLinkedin size={30} />
        </a>
      </section>

      <section
        id="copyright"
        className="col-start-2 row-start-2 col-span-2 justify-self-center self-end"
      >
        <p className="font-text text-sm sm:text-base">
          © 2025 Le Poteau du Web
        </p>
      </section>
    </div>
  );
}
