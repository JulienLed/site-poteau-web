"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

export default function Presentation() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ x: "-100vw" }}
      animate={inView ? { x: ["-100vw", "-40vw"] } : { x: ["-40vw", "-100vw"] }}
      transition={{
        duration: 1.8,
        ease: "easeOut",
        times: [0, 0.5, 1],
      }}
      className="col-span-2"
    >
      <Card>
        <CardHeader>
          <CardTitle>Le Poteau</CardTitle>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </motion.div>
  );
}
