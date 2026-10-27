"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { renderInline } from "@/src/lib/renderInline";

export default function FaqItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const fromLeft = index % 2 === 0;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const buttonId = `faq-question-${index}`;
  const panelId = `faq-answer-${index}`;

  return (
    <div ref={ref} className="w-full md:w-[60vw]">
      <motion.div
        initial={{ x: fromLeft ? "-100vw" : "100vw", opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-logo-blue text-sandy-brown rounded-2xl shadow-lg overflow-hidden"
      >
        <h2>
          <button
            id={buttonId}
            onClick={() => setOpen((prev) => !prev)}
            className="w-full text-left px-6 md:px-8 py-5 flex justify-between items-center gap-4 font-title font-semibold text-base md:text-lg hover:bg-white/5 transition-colors duration-200"
            aria-expanded={open}
            aria-controls={panelId}
          >
            <span>{question}</span>
            <motion.span
              className="text-2xl shrink-0"
              animate={{ rotate: open ? 45 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              +
            </motion.span>
          </button>
        </h2>
        {/* Toujours rendue (présente dans le HTML serveur) ; repliée par la hauteur. */}
        <motion.div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          inert={!open}
          initial={false}
          animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="px-6 md:px-8 pb-6 text-base md:text-lg leading-relaxed opacity-90 text-justify">
            {renderInline(answer)}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
