"use client";

import NavbarDesktop from "./navbarDesktop";
import NavbarSmartphone from "./navbarSmartphone";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
      handleResize();
      setIsMounted(true);

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <section id="navbar">
        {windowSize.width > 640 ? <NavbarDesktop /> : <NavbarSmartphone />}
      </section>
    </div>
  );
}
