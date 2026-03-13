import { articles, ArticleSection } from "@/src/data/articles-data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

type Params = { slug: string };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} — Le Poteau du Web`,
    description: article.excerpt,
    alternates: {
      canonical: `https://www.lepoteauduweb.be/articles/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} — Le Poteau du Web`,
      description: article.excerpt,
      url: `https://www.lepoteauduweb.be/articles/${article.slug}`,
      siteName: "Le Poteau du Web",
      locale: "fr_BE",
      type: "article",
    },
  };
}

function renderSection(section: ArticleSection, i: number) {
  if (section.type === "h2") {
    return (
      <h2
        key={i}
        className="font-title font-bold text-lg md:text-xl mt-6 mb-2 text-center md:text-left"
      >
        {section.content as string}
      </h2>
    );
  }
  if (section.type === "h3") {
    return (
      <h3
        key={i}
        className="font-title font-semibold text-base md:text-lg mt-4 mb-1 text-center md:text-left"
      >
        {section.content as string}
      </h3>
    );
  }
  if (section.type === "p") {
    return (
      <p key={i} className="text-base md:text-lg text-justify leading-relaxed">
        {section.content as string}
      </p>
    );
  }
  if (section.type === "ul") {
    return (
      <ul key={i} className="list-disc list-inside space-y-1 text-base md:text-lg pl-2">
        {(section.content as string[]).map((item, j) => (
          <li key={j}>{item}</li>
        ))}
      </ul>
    );
  }
  if (section.type === "quote") {
    return (
      <blockquote
        key={i}
        className="border-l-4 border-sandy-brown pl-4 italic opacity-80 text-base md:text-lg my-4"
      >
        {section.content as string}
      </blockquote>
    );
  }
  return null;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-BE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <div className="py-15 flex justify-center">
      <div className="w-full md:w-[62vw] flex flex-col gap-6">
        {/* Bouton retour */}
        <Link
          href="/articles"
          className="w-fit px-5 py-2 rounded-xl bg-sandy-brown text-logo-blue font-semibold text-sm md:text-base hover:bg-sandy-brown/90 transition-colors duration-200"
        >
          ← Retour aux articles
        </Link>

        {/* Contenu de l'article dans une Card */}
        <article className="bg-logo-blue text-sandy-brown rounded-2xl shadow-2xl px-6 md:px-12 py-8 md:py-12 flex flex-col gap-4">
          <p className="text-xs md:text-sm opacity-60">{formatDate(article.date)}</p>
          <h1 className="font-title font-bold text-2xl md:text-4xl leading-tight text-center md:text-left">
            {article.title}
          </h1>
          <p className="text-base md:text-xl italic opacity-80 border-b border-sandy-brown/20 pb-6 text-justify">
            {article.excerpt}
          </p>
          <div className="flex flex-col gap-4">
            {article.sections.map((section, i) => renderSection(section, i))}
          </div>
          <div className="mt-6 pt-6 border-t border-sandy-brown/20 flex flex-col md:flex-row items-center md:items-start gap-4">
            <p className="text-base md:text-lg font-semibold">Un projet en tête ?</p>
            <Link
              href="/contact"
              className="px-6 py-2 rounded-xl bg-sandy-brown text-logo-blue font-semibold text-base hover:bg-sandy-brown/90 transition-colors duration-200"
            >
              Me contacter
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
