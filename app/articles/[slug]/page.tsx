import { articles, Article, ArticleSection, assertArticleDates } from "@/src/data/articles-data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/src/lib/site";
import { renderInline } from "@/src/lib/renderInline";

type Params = { slug: string };

export function generateStaticParams() {
  assertArticleDates();
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
  const title = `${article.title} — Le Poteau du Web`;
  const description = article.description ?? article.excerpt;
  return {
    title,
    description,
    alternates: {
      canonical: `https://www.lepoteauduweb.be/articles/${article.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.lepoteauduweb.be/articles/${article.slug}`,
      siteName: "Le Poteau du Web",
      locale: "fr_BE",
      type: "article",
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}

// scroll-mt : les ancres (#id) ne passent pas sous la barre de navigation fixe.
const h2ClassName =
  "font-title font-bold text-lg md:text-xl mt-6 mb-2 text-center md:text-left scroll-mt-20 md:scroll-mt-36";
const h3ClassName =
  "font-title font-semibold text-base md:text-lg mt-4 mb-1 text-center md:text-left scroll-mt-20 md:scroll-mt-36";
const pClassName = "text-base md:text-lg text-justify leading-relaxed";

function slugify(text: string) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Génère des id d'ancre uniques dans la page (suffixe -2, -3… en cas de doublon).
function createHeadingIds() {
  const seen = new Map<string, number>();
  return (text: string) => {
    const base = slugify(text) || "section";
    const count = (seen.get(base) ?? 0) + 1;
    seen.set(base, count);
    return count === 1 ? base : `${base}-${count}`;
  };
}

function renderSection(section: ArticleSection, i: number, id?: string) {
  if (section.type === "h2") {
    return (
      <h2 key={i} id={id} className={h2ClassName}>
        {section.content as string}
      </h2>
    );
  }
  if (section.type === "h3") {
    return (
      <h3 key={i} id={id} className={h3ClassName}>
        {section.content as string}
      </h3>
    );
  }
  if (section.type === "p") {
    return (
      <p key={i} className={pClassName}>
        {renderInline(section.content as string)}
      </p>
    );
  }
  if (section.type === "ul") {
    return (
      <ul key={i} className="list-disc list-inside space-y-1 text-base md:text-lg pl-2">
        {(section.content as string[]).map((item, j) => (
          <li key={j}>{renderInline(item)}</li>
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
        {renderInline(section.content as string)}
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

// BlogPosting + BreadcrumbList. author/publisher renvoient aux entités
// #person et #business déclarées dans le JSON-LD du layout.
function articleJsonLd(article: Article) {
  const url = `${SITE_URL}/articles/${article.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: article.title,
        description: article.description ?? article.excerpt,
        datePublished: article.date,
        dateModified: article.updated ?? article.date,
        author: { "@id": `${SITE_URL}/#person` },
        publisher: { "@id": `${SITE_URL}/#business` },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        url,
        image: new URL(DEFAULT_OG_IMAGE.url, SITE_URL).href,
        inLanguage: "fr-BE",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Articles", item: `${SITE_URL}/articles` },
          { "@type": "ListItem", position: 3, name: article.title, item: url },
        ],
      },
    ],
  };
}

function getRelated(article: Article) {
  return (article.related ?? []).map((slug) => {
    const related = articles.find((a) => a.slug === slug);
    // Fait échouer le build plutôt que d'afficher un lien mort.
    if (!related) {
      throw new Error(`Article lié introuvable : "${slug}" (dans "${article.slug}")`);
    }
    return related;
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

  const headingId = createHeadingIds();
  const sectionIds = article.sections.map((s) =>
    s.type === "h2" || s.type === "h3" ? headingId(s.content as string) : undefined
  );
  const faq = article.faq ?? [];
  const faqId = faq.length ? headingId("Questions fréquentes") : undefined;
  const faqQuestionIds = faq.map((item) => headingId(item.question));
  const related = getRelated(article);
  const relatedId = related.length ? headingId("À lire aussi") : undefined;

  return (
    <div className="py-15 flex justify-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          // "<" échappé pour qu'un texte d'article ne puisse pas fermer la balise.
          __html: JSON.stringify(articleJsonLd(article)).replace(/</g, "\\u003c"),
        }}
      />
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
          {article.updated ? (
            <div className="flex flex-col gap-1 text-xs md:text-sm opacity-60">
              <p>
                <time dateTime={article.date}>{formatDate(article.date)}</time>
              </p>
              <p>
                Mis à jour le{" "}
                <time dateTime={article.updated}>{formatDate(article.updated)}</time>
              </p>
            </div>
          ) : (
            <p className="text-xs md:text-sm opacity-60">
              <time dateTime={article.date}>{formatDate(article.date)}</time>
            </p>
          )}
          <h1 className="font-title font-bold text-2xl md:text-4xl leading-tight text-center md:text-left">
            {article.title}
          </h1>
          <p className="text-base md:text-xl italic opacity-80 border-b border-sandy-brown/20 pb-6 text-justify">
            {article.excerpt}
          </p>
          <div className="flex flex-col gap-4">
            {article.sections.map((section, i) => renderSection(section, i, sectionIds[i]))}
          </div>
          {faq.length > 0 && (
            <section aria-labelledby={faqId} className="flex flex-col gap-4">
              <h2 id={faqId} className={h2ClassName}>
                Questions fréquentes
              </h2>
              {faq.map((item, j) => (
                <div key={j} className="flex flex-col gap-4">
                  <h3 id={faqQuestionIds[j]} className={h3ClassName}>
                    {item.question}
                  </h3>
                  <p className={pClassName}>{renderInline(item.answer)}</p>
                </div>
              ))}
            </section>
          )}
          {related.length > 0 && (
            <nav
              aria-labelledby={relatedId}
              className="mt-6 pt-6 border-t border-sandy-brown/20 flex flex-col gap-4"
            >
              <h2 id={relatedId} className={h2ClassName}>
                À lire aussi
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/articles/${r.slug}`}
                      className="h-full bg-white/10 rounded-xl px-6 py-4 flex flex-col gap-1 hover:bg-white/20 transition-colors duration-200"
                    >
                      <span className="text-xs md:text-sm opacity-60">{formatDate(r.date)}</span>
                      <span className="font-title font-semibold text-base md:text-lg">{r.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
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
