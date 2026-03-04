"use client";

import { FaAnglesDown } from "react-icons/fa6";
import { motion } from "motion/react";
import Link from "next/link";

export default function ButtonDown() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1],
      }}
      transition={{ duration: 5, delay: 3 }}
      className="flex justify-center items-center h-[10vw] mt-15 md:h-[30vw] "
    >
      <Link href={"/#presentation"}>
        <FaAnglesDown
          size={40}
          className="animate-bounce cursor-pointer text-caf-noir"
        />
      </Link>
    </motion.div>
  );
}
