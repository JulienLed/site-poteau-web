"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      aria-label="back_to_top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 bg-logo-blue text-sandy-brown p-3 rounded-full shadow-lg animate-float cursor-pointer hover:bg-logo-blue/80 hover:scale-110 active:scale-95 active:animate-none active:translate-y-1 transition-all duration-200 ease-in-out"
    >
      <FaArrowUp size={20} />
    </button>
  );
}
