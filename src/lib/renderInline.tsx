import Link from "next/link";
import type { ReactNode } from "react";

// Syntaxe minimale reconnue dans le texte des articles et des réponses de la FAQ
// (utilisable côté serveur comme dans un composant client) :
//   [texte](/chemin)  → lien (next/link si interne, <a> sinon)
//   **texte**         → gras
// Le texte du lien peut contenir du **gras**. Un texte sans syntaxe est
// renvoyé tel quel (même rendu qu'une chaîne brute).
const TOKEN = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*(.+?)\*\*/g;

export const linkClassName =
  "underline underline-offset-4 decoration-sandy-brown/60 hover:decoration-sandy-brown hover:text-azure-web transition-colors duration-200";

function isInternal(href: string) {
  return href.startsWith("/") || href.startsWith("#");
}

export function renderInline(text: string): ReactNode {
  if (!text.includes("](") && !text.includes("**")) return text;

  const nodes: ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const match of text.matchAll(TOKEN)) {
    const [whole, label, href, bold] = match;
    const start = match.index ?? 0;
    if (start > last) nodes.push(text.slice(last, start));

    if (bold !== undefined) {
      nodes.push(<strong key={key++}>{bold}</strong>);
    } else if (isInternal(href)) {
      nodes.push(
        <Link key={key++} href={href} className={linkClassName}>
          {renderInline(label)}
        </Link>
      );
    } else {
      nodes.push(
        <a
          key={key++}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          {renderInline(label)}
        </a>
      );
    }
    last = start + whole.length;
  }
  if (last === 0) return text;
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}
