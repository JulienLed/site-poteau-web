"use client";

import { articles } from "@/src/data/articles-data";
import { PageIntro, PageTitle } from "@/utils/utils";
import Link from "next/link";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-BE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function ArticleCard({
  article,
  index,
}: {
  article: (typeof articles)[number];
  index: number;
}) {
  const fromLeft = index % 2 === 0;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`w-full flex justify-center ${fromLeft ? "md:justify-start" : "md:justify-end"}`}
    >
      <motion.article
        initial={{ x: fromLeft ? "-100vw" : "100vw", opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full md:w-[55vw] bg-logo-blue text-sandy-brown rounded-2xl shadow-2xl p-6 md:p-10 flex flex-col gap-4"
      >
        <p className="text-xs md:text-sm opacity-70">{formatDate(article.date)}</p>
        <h2 className="font-title font-bold text-lg md:text-2xl">{article.title}</h2>
        <p className="text-base md:text-lg text-justify opacity-90">{article.excerpt}</p>
        <Link
          href={`/articles/${article.slug}`}
          className="w-fit mt-2 px-5 py-2 rounded-xl bg-sandy-brown text-logo-blue font-semibold text-base hover:bg-sandy-brown/90 transition-colors duration-200"
        >
          Lire l'article
        </Link>
      </motion.article>
    </div>
  );
}

export default function Articles() {
  return (
    <div className="py-15">
      <PageTitle title="Articles" />
      <PageIntro>
        <p className="text-base md:text-lg text-center md:text-justify">
          Bienvenue dans l'espace articles du Poteau du Web. Vous y trouverez des conseils pratiques sur la création de sites internet, le référencement SEO et le choix de votre prestataire web — rédigés sans jargon, pour vous aider à prendre les bonnes décisions.
        </p>
      </PageIntro>
      <section id="articles" className="pt-4 pb-16 px-1 flex flex-col items-center gap-10">
        {articles.map((article, i) => (
          <ArticleCard key={article.slug} article={article} index={i} />
        ))}
      </section>
    </div>
  );
}
