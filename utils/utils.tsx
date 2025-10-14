"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";

export function PageTitle({ title }: { title: string }) {
  const [hasMounted, setHasMounted] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <div ref={ref} className="flex justify-center">
      <motion.div
        className="bg-logo-blue h-fit shadow-lg rounded-3xl sm:w-[40vw] md:w-[60vw] text-sandy-brown p-10 m-5 grid grid-cols-3"
        initial={{ x: "-100vw" }}
        animate={inView ? { x: ["-100vw", "-40vw"] } : { x: "-100vw" }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <h2 className="text-2xl text-sandy-brown text-right py-5 font-title font-bold col-start-2 col-span-2 animate-move">
          {title}
        </h2>
      </motion.div>
    </div>
  );
}
