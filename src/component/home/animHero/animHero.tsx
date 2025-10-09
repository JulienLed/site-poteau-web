"use client";

import { useState, useEffect } from "react";
import AnimHeroDesktop from "./animHeroDesktop";
import AnimHeroMobile from "./animHeroMobile";

export default function Hero() {
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
      {windowSize.width > 800 ? <AnimHeroDesktop /> : <AnimHeroMobile />}
    </div>
  );
}
