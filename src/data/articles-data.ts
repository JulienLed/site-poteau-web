export type ArticleSection = {
  type: "h2" | "h3" | "p" | "ul" | "quote";
  content: string | string[];
};

export type ArticleFaq = {
  question: string;
  answer: string;
};

export type Article = {
  title: string;
  slug: string;
  /** Date de publication, format AAAA-MM-JJ. */
  date: string;
  /** Date de mise à jour (AAAA-MM-JJ), affichée seulement si présente. */
  updated?: string;
  /** Chapeau affiché sous le titre ; sert aussi de meta description par défaut. */
  excerpt: string;
  /** Meta description dédiée ; repli sur excerpt. */
  description?: string;
  sections: ArticleSection[];
  /** Questions affichées en bas de l'article (H2 « Questions fréquentes », H3 par question). */
  faq?: ArticleFaq[];
  /** Slugs d'articles affichés dans « À lire aussi ». */
  related?: string[];
};

// Date de mise en ligne de la dernière révision des contenus (AAAA-MM-JJ),
// utilisée comme `updated` des articles révisés. Elle doit être la date RÉELLE
// de mise en production : jamais une date future, ni la date de rédaction.
// `date` (publication) ne change jamais.
export const CONTENT_UPDATE_DATE = "2026-10-27";

const ONE_DAY_MS = 24 * 60 * 60 * 1000;

// Garde-fou appelé au build : échoue si `updated` dépasse de plus d'un jour la
// date du build (tolérance pour les fuseaux horaires) ou précède `date`.
export function assertArticleDates(now: Date = new Date()) {
  for (const article of articles) {
    if (!article.updated) continue;
    const updated = new Date(article.updated).getTime();
    if (Number.isNaN(updated)) {
      throw new Error(`Article "${article.slug}" : updated invalide (${article.updated}).`);
    }
    if (updated > now.getTime() + ONE_DAY_MS) {
      throw new Error(
        `Article "${article.slug}" : updated (${article.updated}) est postérieure à la date du build (${now.toISOString().slice(0, 10)}).`
      );
    }
    if (updated < new Date(article.date).getTime()) {
      throw new Error(
        `Article "${article.slug}" : updated (${article.updated}) est antérieure à date (${article.date}).`
      );
    }
  }
}

export const articles: Article[] = [
  {
    title: "Combien coûte un site web en Belgique en 2026 ?",
    slug: "combien-coute-un-site-web-en-belgique",
    date: "2025-10-15",
    updated: CONTENT_UPDATE_DATE,
    excerpt:
      "Wix, agence, freelance : les prix varient du simple au décuple. Voici un guide honnête pour comprendre ce que vous payez vraiment — et ce que ça devrait vous coûter.",
    description:
      "Prix de création d'un site web en Belgique en 2026 : Wix, agence ou freelance, coûts cachés, cas des ASBL. Fourchettes indicatives et devis gratuit.",
    sections: [
      {
        type: "p",
        content:
          "C'est souvent la première question que l'on se pose avant de lancer un projet web : combien ça coûte ? Et c'est une bonne question, parce que les prix varient énormément selon la solution choisie. Entre un site fait maison sur Wix, une agence web bruxelloise et un développeur freelance local, on peut passer de quelques centaines à plusieurs dizaines de milliers d'euros. Voici un tour d'horizon honnête des **prix de création d'un site internet en Belgique**, à titre indicatif en 2026.",
      },
      {
        type: "h2",
        content: "Les solutions DIY : Wix, Squarespace, WordPress.com",
      },
      {
        type: "p",
        content:
          "Les constructeurs de sites en ligne comme Wix ou Squarespace affichent des tarifs mensuels attractifs : à titre indicatif en 2026, entre 15 et 40 €/mois, soit 180 à 480 € par an. En apparence, c'est la solution la moins chère. Mais attention : vous payez à vie, vous êtes limité dans la personnalisation, vos données sont chez eux, et le SEO reste limité. Pour une ASBL ou un indépendant qui veut se démarquer réellement, cette solution a vite des limites.",
      },
      {
        type: "h2",
        content: "Les agences web",
      },
      {
        type: "p",
        content:
          "Une agence web propose généralement des sites à partir de 3 000 à 5 000 € pour un site vitrine simple, et peut monter à 15 000 € ou plus pour un projet complexe (à titre indicatif en 2026). Ce prix inclut le travail de plusieurs personnes (designer, développeur, chef de projet), ce qui se répercute inévitablement sur la facture. Pour une grande entreprise avec des besoins complexes, ça peut se justifier. Pour une association ou un petit commerce, c'est souvent surdimensionné.",
      },
      {
        type: "h2",
        content: "Le développeur freelance : le juste milieu",
      },
      {
        type: "p",
        content:
          "Un développeur freelance travaille seul ou en réseau limité. Ses frais fixes sont réduits, ce qui se traduit directement par des tarifs plus accessibles. Pour un site vitrine professionnel réalisé sur mesure, vous pouvez vous attendre à payer entre 800 et 2 500 € en Belgique, selon la complexité du projet (à titre indicatif en 2026).",
      },
      {
        type: "h2",
        content: "Ce qui influence le prix de création d'un site web en Belgique",
      },
      {
        type: "ul",
        content: [
          "Le nombre de pages : un site de 5 pages n'a pas le même coût qu'un site de 20 pages",
          "La présence d'un CMS (système de gestion de contenu) pour modifier vous-même les textes",
          "L'intégration d'une boutique en ligne ou d'un espace membres",
          "Le niveau de personnalisation du design",
          "Le SEO : optimisation technique, rédaction, structure",
          "L'hébergement et la maintenance annuels",
        ],
      },
      {
        type: "h2",
        content: "Les coûts cachés à surveiller",
      },
      {
        type: "p",
        content:
          "Le prix de création n'est que le début. Le **coût d'un site web** se mesure sur plusieurs années : avant de signer, demandez toujours ce qui sera facturé chaque année.",
      },
      {
        type: "h3",
        content: "Le nom de domaine",
      },
      {
        type: "p",
        content:
          "C'est l'adresse de votre site (par exemple, mon-asbl.be). Il se renouvelle chaque année : pour un .be, comptez à titre indicatif une dizaine à une quinzaine d'euros par an, selon le prestataire. Vérifiez qu'il est bien enregistré **à votre nom** : c'est ce qui vous permet de changer de prestataire sans perdre votre adresse.",
      },
      {
        type: "h3",
        content: "L'hébergement",
      },
      {
        type: "p",
        content:
          "Un site doit être hébergé sur un serveur pour être visible. Chez Wix, l'hébergement est compris dans l'abonnement. Chez un freelance ou une agence, il est parfois inclus, parfois facturé à part : posez la question. Dans mon pack de base, la première année d'hébergement est incluse.",
      },
      {
        type: "h3",
        content: "La maintenance et les mises à jour",
      },
      {
        type: "p",
        content:
          "Un site n'est pas figé : la technologie évolue, des correctifs de sécurité sortent, des sauvegardes sont nécessaires. Sur un site WordPress, par exemple, le cœur du CMS et ses extensions doivent être mis à jour régulièrement. Renseignez-vous sur qui s'en charge, et à quel prix.",
      },
      {
        type: "h3",
        content: "Les licences et extensions payantes",
      },
      {
        type: "p",
        content:
          "Certains outils fonctionnent avec des extensions payantes. Sur Wix, par exemple, les applications premium de l'App Market s'ajoutent à l'abonnement. Côté WordPress, de nombreux thèmes et extensions premium sont vendus sous forme de licence, souvent renouvelable chaque année.",
      },
      {
        type: "h3",
        content: "Le temps passé sur les contenus",
      },
      {
        type: "p",
        content:
          "Modifier un texte, ajouter une actualité, changer une photo : si vous ne pouvez pas le faire vous-même, chaque modification devient une petite facture. C'est pourquoi un CMS est souvent rentable sur la durée.",
      },
      {
        type: "h2",
        content: "Combien coûte un site pour une ASBL ou une association ?",
      },
      {
        type: "p",
        content:
          "Les associations ont souvent un budget serré et des besoins précis : agenda, espace membres, formulaire d'adhésion. Bonne nouvelle : elles n'ont pas besoin d'un site d'agence à plusieurs milliers d'euros. Chez moi, un site avec page d'accueil + 5 pages et un CMS pour gérer vous-même vos actualités revient à **1 100 à 1 250 €** la première année, hébergement compris. J'ai rassemblé tout ce qu'il faut savoir dans un guide dédié : [créer le site internet de votre ASBL](/articles/site-internet-asbl-belgique).",
      },
      {
        type: "h2",
        content: "Les prix en Wallonie et à Bruxelles : y a-t-il une différence ?",
      },
      {
        type: "p",
        content:
          "Les guides de prix publiés en Belgique donnent des fourchettes nationales, sans distinction par région ou par ville, et je n'ai pas trouvé de donnée fiable qui compare la Wallonie et Bruxelles.",
      },
      {
        type: "p",
        content:
          "Ce qui fait varier le prix, ce n'est pas l'adresse : c'est le type de prestataire (constructeur en ligne, freelance, studio, agence), le nombre de pages et les fonctionnalités. Une agence installée à Bruxelles peut avoir des frais fixes plus élevés, mais ce n'est pas une règle. Pour comparer, le plus sûr reste de demander plusieurs devis détaillés, sur la même base.",
      },
      {
        type: "p",
        content:
          "Mes tarifs sont ceux de la [page Tarifs](/tarifs), que vous soyez à Wavre, à Namur, à Charleroi ou à Bruxelles, ou ailleurs en Wallonie à distance. La première réunion pour établir votre devis ne donne lieu à aucun frais de déplacement.",
      },
      {
        type: "h2",
        content: "Mes tarifs en toute transparence",
      },
      {
        type: "p",
        content:
          "Chez Le Poteau du Web, le pack de base démarre à 900 € et inclut une page d'accueil personnalisée, 5 pages statiques, un formulaire de contact sécurisé, un SEO de base et un an d'hébergement. Des options viennent s'ajouter selon vos besoins : pages supplémentaires, CMS, espace client, Google Analytics, maintenance annuelle...",
      },
      {
        type: "ul",
        content: [
          "Pages supplémentaires : 60 à 100 € par page",
          "CMS : 200 à 350 €",
          "Espace client ou membres : 150 à 300 €",
          "Hébergement et maintenance à partir de la 2e année : 250 € par an",
          "Gestion de contenu : 45 € de l'heure",
        ],
      },
      {
        type: "p",
        content:
          "Mes prix sont sans TVA : je ne suis pas assujetti à la TVA, le prix annoncé est donc le prix que vous payez.",
      },
      {
        type: "quote",
        content:
          "L'objectif n'est pas de faire le moins cher, mais de proposer un rapport qualité-prix honnête adapté aux réalités des petites structures belges.",
      },
      {
        type: "p",
        content:
          "Vous pouvez estimer votre projet directement via le [calculateur interactif de la page Tarifs](/tarifs), puis me [demander un devis gratuit](/contact) pour en discuter sans engagement.",
      },
    ],
    faq: [
      {
        question: "Quel est le prix d'un site vitrine en Belgique en 2026 ?",
        answer:
          "À titre indicatif en 2026 : 180 à 480 € par an avec un constructeur comme Wix (sans compter votre temps), 800 à 2 500 € avec un freelance, et, avec une agence, à partir de 3 000 à 5 000 € pour un site vitrine simple, jusqu'à 15 000 € ou plus pour un projet complexe. Les écarts dépendent du nombre de pages, des fonctionnalités et du niveau de personnalisation.",
      },
      {
        question: "Comment obtenir un devis de site web en Belgique ?",
        answer:
          "Décrivez votre projet (nombre de pages, fonctionnalités, exemples de sites que vous aimez) et demandez plusieurs devis détaillés sur la même base. Vérifiez ce qui est inclus : hébergement, nom de domaine, maintenance. Chez moi, le devis est gratuit et sans engagement, et le [calculateur de la page Tarifs](/tarifs) donne une première estimation.",
      },
      {
        question: "Quels sont les coûts annuels d'un site web ?",
        answer:
          "Le nom de domaine (une dizaine à une quinzaine d'euros par an pour un .be, à titre indicatif), l'hébergement, et la maintenance si vous la confiez à quelqu'un. Chez moi, la première année d'hébergement est incluse, puis l'hébergement et la maintenance coûtent 250 € par an.",
      },
      {
        question: "Un site moins cher est-il forcément moins bien ?",
        answer:
          "Pas forcément : tout dépend de vos besoins. Un constructeur en ligne peut suffire pour un projet simple. Mais il faut comparer sur plusieurs années, en intégrant l'abonnement, les extensions payantes et les limites de personnalisation et de SEO.",
      },
      {
        question: "Combien coûte un site pour une ASBL ?",
        answer:
          "Avec mon pack de base, un site avec page d'accueil + 5 pages et un CMS revient à 1 100 à 1 250 € la première année, hébergement compris, puis 250 € par an. Tous les détails sont dans le guide [créer le site internet de votre ASBL](/articles/site-internet-asbl-belgique).",
      },
    ],
    related: ["site-internet-asbl-belgique", "freelance-vs-agence-web"],
  },
  {
    title: "Freelance ou agence web : que choisir pour votre projet ?",
    slug: "freelance-vs-agence-web",
    date: "2025-11-03",
    excerpt:
      "Agence ou freelance ? Ce choix dépend de votre structure, de votre budget et de ce que vous attendez de la relation avec votre prestataire. Voici les clés pour décider.",
    sections: [
      {
        type: "p",
        content:
          "Quand on cherche un prestataire pour créer son site internet, on se retrouve souvent face à deux grandes options : faire appel à une agence web ou à un développeur freelance. Les deux ont leurs avantages. Mais pour une [ASBL](/articles/site-internet-asbl-belgique), un indépendant ou un petit commerce, le choix est souvent plus évident qu'il n'y paraît.",
      },
      {
        type: "h2",
        content: "Ce qu'une agence offre",
      },
      {
        type: "p",
        content:
          "Une agence web dispose d'une équipe pluridisciplinaire : designers, développeurs, spécialistes SEO, chefs de projet. Elle peut prendre en charge des projets complexes, avec plusieurs intervenants simultanés. Son processus est rodé et ses livrables sont généralement bien documentés.",
      },
      {
        type: "p",
        content:
          "Mais cela a un coût. Les agences facturent leurs frais de structure, leurs marges et le temps passé en réunions internes. Pour un site vitrine simple, vous payez souvent pour une organisation que votre projet ne nécessite pas vraiment.",
      },
      {
        type: "h2",
        content: "Ce qu'un freelance offre",
      },
      {
        type: "p",
        content:
          "Un développeur freelance est votre interlocuteur unique du début à la fin. Pas de chef de projet intermédiaire, pas de message perdu dans une chaîne d'emails. Vous expliquez votre vision une fois, et c'est la même personne qui la réalise. Cette proximité est souvent ce que les petites structures apprécient le plus.",
      },
      {
        type: "ul",
        content: [
          "[Tarifs plus accessibles](/articles/combien-coute-un-site-web-en-belgique) (pas de frais de structure à absorber)",
          "Réactivité : un interlocuteur direct, joignable rapidement",
          "Flexibilité : adaptation facile en cours de projet",
          "Relation humaine : on se parle, on se comprend",
          "Ancrage local : un freelance de votre région connaît votre contexte",
        ],
      },
      {
        type: "h2",
        content: "Qui devrait choisir une agence ?",
      },
      {
        type: "p",
        content:
          "Une agence est pertinente si vous avez un projet d'envergure (plateforme complexe, e-commerce avec des milliers de produits, application web sur mesure), un budget conséquent, et avez besoin de garanties contractuelles liées à une structure juridique établie.",
      },
      {
        type: "h2",
        content: "Qui devrait choisir un freelance ?",
      },
      {
        type: "p",
        content:
          "Le freelance est idéal si vous êtes une ASBL, un indépendant, un commerce de proximité ou une petite entreprise. Vous avez besoin d'un site professionnel et fonctionnel, pas d'une usine à gaz. Vous voulez parler à la personne qui fait le travail, pas à un account manager. Et vous avez un budget raisonnable à investir une seule fois.",
      },
      {
        type: "quote",
        content:
          "Un bon freelance, c'est un partenaire sur le long terme. Je connais votre site, votre contexte, et je suis disponible quand vous avez besoin.",
      },
      {
        type: "p",
        content:
          "Si vous hésitez encore, contactez-moi. On discute de votre projet, sans engagement, et je vous dis honnêtement si je suis la bonne option pour vous.",
      },
    ],
  },
  {
    title: "Le SEO expliqué simplement : pourquoi votre site en a besoin",
    slug: "quest-ce-que-le-seo",
    date: "2025-12-01",
    excerpt:
      "Apparaître en tête des résultats Google ne se fait pas par hasard. Le SEO, c'est l'ensemble des techniques qui rendent votre site visible — et ça commence dès la conception.",
    sections: [
      {
        type: "p",
        content:
          "Vous avez un beau site internet, mais personne ne le trouve sur Google ? C'est le problème du SEO — ou plutôt, de son absence. Le référencement naturel (Search Engine Optimization) désigne l'ensemble des pratiques qui permettent à votre site d'apparaître dans les résultats de recherche. Et contrairement à ce qu'on entend parfois, ce n'est pas de la magie : c'est de la méthode.",
      },
      {
        type: "h2",
        content: "Le SEO technique : les fondations",
      },
      {
        type: "p",
        content:
          "Avant même de parler de contenu, votre site doit répondre à des critères techniques. Google évalue la vitesse de chargement, la compatibilité mobile, la structure des URLs, les balises HTML (titres, méta-descriptions, attributs alt des images) et la sécurité (HTTPS obligatoire). Un site mal structuré sera pénalisé, même s'il contient du bon contenu.",
      },
      {
        type: "ul",
        content: [
          "Vitesse de chargement : Google pénalise les sites lents",
          "Responsive design : votre site doit être parfait sur mobile",
          "Structure HTML sémantique : H1, H2, H3 bien organisés",
          "Balises méta : title et description uniques par page",
          "Images optimisées avec attribut alt descriptif",
          "HTTPS : indispensable pour la sécurité et le référencement",
        ],
      },
      {
        type: "h2",
        content: "Le SEO de contenu : ce que Google lit",
      },
      {
        type: "p",
        content:
          "Google est devenu très bon pour comprendre le langage naturel. Il cherche des pages qui répondent précisément aux questions que les internautes posent. Cela signifie que vos pages doivent contenir du texte pertinent, structuré, qui aborde vraiment le sujet. Trop peu de texte = peu de signaux pour Google. Du texte générique copié-collé = méfiance. Du contenu utile et original = confiance.",
      },
      {
        type: "h2",
        content: "Le SEO local : être trouvé dans votre zone",
      },
      {
        type: "p",
        content:
          "Si vous exercez localement — à Wavre, à Namur, à Louvain-la-Neuve — vous pouvez cibler des recherches géolocalisées comme \"développeur web Wavre\" ou \"plombier Ottignies\". Le SEO local passe par des mentions cohérentes de votre adresse sur le web, une fiche Google Business Profile bien remplie, et des pages qui citent explicitement votre zone de service.",
      },
      {
        type: "h2",
        content: "Les erreurs SEO les plus fréquentes",
      },
      {
        type: "ul",
        content: [
          "Ne pas avoir de balise H1 sur chaque page",
          "Utiliser les mêmes title et description sur toutes les pages",
          "Des images non compressées qui ralentissent le site",
          "Un site non adapté au mobile",
          "Aucun contenu textuel (que des images et des boutons)",
          "Des liens internes cassés",
        ],
      },
      {
        type: "h2",
        content: "Comment j'intègre le SEO dans mes projets",
      },
      {
        type: "p",
        content:
          "Tous les sites que je développe intègrent le SEO dès la conception : structure HTML sémantique, balises méta uniques, images optimisées, sitemap XML généré automatiquement, performances optimales grâce à Next.js (rendu côté serveur), et données structurées JSON-LD pour les moteurs de recherche. Le SEO n'est pas un add-on — c'est une composante de chaque page que je construis.",
      },
      {
        type: "quote",
        content:
          "Un site beau mais invisible, c'est comme ouvrir un magasin au fond d'une impasse. Le SEO, c'est mettre une enseigne sur l'avenue principale.",
      },
      {
        type: "p",
        content:
          "Vous souhaitez améliorer le référencement de votre site existant ou partir sur de bonnes bases avec un nouveau site ? Contactez-moi pour en discuter.",
      },
    ],
  },
  {
    title: "Création de site internet pour ASBL et associations",
    slug: "site-internet-asbl-belgique",
    date: "2026-01-14",
    updated: CONTENT_UPDATE_DATE,
    excerpt:
      "Petit budget, équipe bénévole, personne pour s'occuper du numérique : créer le site internet d'une association soulève des questions très concrètes. Voici les réponses, sans jargon, d'un assistant social devenu développeur web.",
    description:
      "Création de site internet pour ASBL et associations : budget, fonctionnalités utiles, obligations légales. Site sur mesure à Wavre, devis gratuit.",
    sections: [
      {
        type: "p",
        content:
          "Vous cherchez une solution de **création de site internet pour votre ASBL** ? Une ASBL n'est pas une entreprise comme les autres. Elle a des objectifs sociaux, culturels ou sportifs, des bénévoles impliqués, et souvent un budget serré. Son site internet doit refléter ces réalités : lisible, accessible, facile à mettre à jour, et capable de convaincre à la fois des membres potentiels, des donateurs et des partenaires institutionnels.",
      },
      {
        type: "p",
        content:
          "Dans ce guide, je vous explique ce qu'un site internet pour association doit vraiment contenir, ce qu'il coûte, quels points légaux vérifier, et comment je travaille avec les ASBL. Je suis développeur web freelance à Wavre, et assistant social de formation et de métier : le secteur associatif, je le connais de l'intérieur.",
      },
      {
        type: "h2",
        content: "Pourquoi la création d'un site internet est compliquée pour une ASBL",
      },
      {
        type: "p",
        content:
          "Dans beaucoup d'associations, le site internet arrive en bas de la liste des priorités. Ce n'est pas un manque d'intérêt : c'est une question de moyens, de temps et de compétences disponibles.",
      },
      {
        type: "h3",
        content: "Un petit budget, réservé d'abord à la mission",
      },
      {
        type: "p",
        content:
          "Les ressources d'une ASBL servent d'abord à ses activités. Beaucoup d'associations hésitent donc à investir dans un site professionnel par peur des coûts, surtout quand elles ne savent pas combien ça coûte ni ce qu'elles obtiendront en échange. Pourtant, un site bien fait est un outil de communication qui travaille pour vous 24h/24.",
      },
      {
        type: "h3",
        content: "Des bénévoles qui changent",
      },
      {
        type: "p",
        content:
          "Le site est souvent lancé par un bénévole motivé, qui finit un jour par passer la main. Plus personne ne connaît les mots de passe, l'hébergement arrive à échéance, et le site se fige. Un bon site associatif doit pouvoir être repris facilement par la personne suivante.",
      },
      {
        type: "h3",
        content: "Pas de référent numérique",
      },
      {
        type: "p",
        content:
          "La plupart des associations n'ont personne de dédié au numérique. Face à un devis technique, difficile de savoir ce qui est utile et ce qui ne l'est pas. C'est là qu'un interlocuteur qui parle votre langue fait la différence.",
      },
      {
        type: "h2",
        content: "Combien coûte un site internet pour une association ?",
      },
      {
        type: "p",
        content:
          "Parlons chiffres, en toute transparence. Chez Le Poteau du Web, le **pack de base est à 900 €**. Il comprend une page d'accueil personnalisée, 5 pages statiques, un formulaire de contact sécurisé, un SEO de base et un an d'hébergement. Vous ajoutez ensuite uniquement ce dont votre association a besoin — sans vous vendre des fonctionnalités inutiles.",
      },
      {
        type: "ul",
        content: [
          "Pages supplémentaires : 60 à 100 € par page",
          "CMS pour modifier vous-même vos contenus : 200 à 350 €",
          "Espace membres : 150 à 300 €",
          "Hébergement et maintenance à partir de la 2e année : 250 € par an",
          "Mises à jour de contenu que je réalise pour vous : 45 € de l'heure",
        ],
      },
      {
        type: "p",
        content:
          "Par exemple, un site avec page d'accueil + 5 pages et un CMS revient à **1 100 à 1 250 €** la première année, hébergement compris, puis 250 € par an. Mes prix sont sans TVA : je ne suis pas assujetti à la TVA, le prix annoncé est donc le prix que vous payez. Le devis est gratuit et sans engagement, et vous pouvez faire une première estimation avec le [calculateur de la page Tarifs](/tarifs).",
      },
      {
        type: "p",
        content:
          "Pour comparer avec les autres solutions — constructeurs de sites, agences, freelances — j'ai détaillé les fourchettes du marché dans l'article [combien coûte un site web en Belgique](/articles/combien-coute-un-site-web-en-belgique).",
      },
      {
        type: "h2",
        content: "Les fonctionnalités vraiment utiles pour un site web d'association",
      },
      {
        type: "p",
        content:
          "Inutile de tout prévoir dès le départ. Voici les besoins typiques d'une ASBL, ceux que l'on retrouve le plus souvent, avec ce qu'ils impliquent concrètement.",
      },
      {
        type: "h3",
        content: "Une présentation claire des activités et de la mission",
      },
      {
        type: "p",
        content:
          "C'est la base : qui vous êtes, ce que vous faites, pour qui et où. Un visiteur doit comprendre en quelques secondes s'il est au bon endroit. C'est aussi la page que liront vos partenaires et vos financeurs.",
      },
      {
        type: "h3",
        content: "Un agenda des événements ou des activités régulières",
      },
      {
        type: "p",
        content:
          "Stages, permanences, assemblées, fêtes : un agenda à jour évite les appels et les messages répétés. Pour qu'il reste à jour, il faut pouvoir le modifier soi-même — d'où l'intérêt du CMS, présenté plus bas.",
      },
      {
        type: "h3",
        content: "Un formulaire d'adhésion ou de contact",
      },
      {
        type: "p",
        content:
          "Le formulaire de contact sécurisé est inclus dans le pack de base. Un formulaire d'adhésion fait partie du pack de base, en plus du formulaire de contact sécurisé.",
      },
      {
        type: "h3",
        content: "Un espace membres",
      },
      {
        type: "p",
        content:
          "Pour partager des documents internes — procès-verbaux, plannings, informations pour les bénévoles — sans les rendre publics, un espace membres protégé par identifiant est très pratique. Il est proposé en option, entre 150 et 300 € selon la complexité.",
      },
      {
        type: "h3",
        content: "Les dons en ligne",
      },
      {
        type: "p",
        content:
          "Votre association fait appel à la générosité du public ? Je peux mettre en place des dons en ligne : un QR code de don, ou un paiement en ligne branché sur Stripe. Le prix dépend de la solution choisie et figure dans le devis. Les frais de transaction sont ceux du prestataire de paiement.",
      },
      {
        type: "h3",
        content: "Des actualités ou un blog",
      },
      {
        type: "p",
        content:
          "Une section actualités ou un blog permet de maintenir le site vivant. Publier régulièrement quelques nouvelles montre que l'association est active, et c'est bon pour votre visibilité sur Google.",
      },
      {
        type: "h2",
        content: "Gérer le contenu soi-même : le CMS",
      },
      {
        type: "p",
        content:
          "Pour une association, pouvoir mettre à jour les actualités, modifier les dates d'événements ou ajouter une photo sans faire appel au développeur à chaque fois, c'est essentiel. C'est pourquoi je propose l'intégration d'un CMS (système de gestion de contenu) en option, entre 200 et 350 €. Vous gérez votre contenu via une interface simple, sans toucher au code.",
      },
      {
        type: "p",
        content:
          "C'est aussi la réponse au problème des bénévoles qui changent : quand quelqu'un passe la main, la personne suivante reprend la même interface. Si besoin, une formation peut être prévue au tarif horaire de 45 €.",
      },
      {
        type: "h2",
        content: "Les points légaux et d'accessibilité à vérifier",
      },
      {
        type: "p",
        content:
          "Je ne suis pas juriste : voici les points à vérifier, avec les sources officielles quand je les ai trouvées. En cas de doute, renseignez-vous auprès d'un professionnel du droit ou de votre fédération.",
      },
      {
        type: "h3",
        content: "Les mentions obligatoires de l'ASBL",
      },
      {
        type: "p",
        content:
          "L'[article 2:20 du **Code des sociétés et des associations**](https://www.ejustice.just.fgov.be/eli/loi/2019/03/23/2019A40586/justel) prévoit que les sites internet d'une personne morale — une ASBL en est une — mentionnent notamment : sa dénomination, sa forme légale (ASBL), l'adresse précise de son siège, son numéro d'entreprise, les termes « registre des personnes morales » ou « RPM » suivis du tribunal du siège et, le cas échéant, son adresse e-mail et son site internet.",
      },
      {
        type: "p",
        content:
          "Sur les sites que je réalise, ces informations figurent sur une page dédiée (mentions légales).",
      },
      {
        type: "h3",
        content: "Les données personnelles (RGPD)",
      },
      {
        type: "p",
        content:
          "Dès que votre site collecte des données — formulaire de contact, adhésion, newsletter — le RGPD s'applique, associations comprises. Il impose notamment d'informer les personnes au moment où leurs données sont collectées (article 13). Une politique de confidentialité claire est donc indispensable. Son contenu est à adapter à chaque ASBL : en cas de doute, consultez le site de l'[Autorité de protection des données](https://www.autoriteprotectiondonnees.be). Si le site utilise des cookies de mesure d'audience, un consentement doit en principe être demandé.",
      },
      {
        type: "h3",
        content: "L'accessibilité",
      },
      {
        type: "p",
        content:
          "Un site pour une ASBL doit être accessible au plus grand nombre : personnes âgées, personnes peu à l'aise avec le numérique, utilisateurs sur smartphone. Je veille à ce que chaque site soit lisible, responsive, rapide à charger et conforme aux bonnes pratiques d'accessibilité web (contrastes, taille des polices, navigation claire).",
      },
      {
        type: "p",
        content:
          "Côté obligations, des règles spécifiques existent pour les sites des organismes du secteur public (loi du 19 juillet 2018 au niveau fédéral, et textes régionaux). Si votre ASBL est financée ou contrôlée par des pouvoirs publics, vérifiez si elle entre dans leur champ d'application.",
      },
      {
        type: "h2",
        content: "Pourquoi un assistant social développe votre site",
      },
      {
        type: "p",
        content:
          "Mon parcours d'assistant social m'a donné une connaissance directe du monde associatif belge : ses contraintes, ses enjeux de communication, et la réalité des équipes bénévoles. Je comprends ce que vous faites et pourquoi vous le faites. C'est cette compréhension qui me permet de vous proposer un site vraiment adapté, et pas un site générique.",
      },
      {
        type: "p",
        content: "Concrètement, voici ce que ça change pour votre association :",
      },
      {
        type: "ul",
        content: [
          "**Un seul interlocuteur**, qui parle votre langue plutôt que celle du code",
          "**Un site sur mesure**, développé avec Next.js, une technologie moderne qui produit des sites rapides et optimisés pour le référencement",
          "**Un devis transparent et gratuit** : vous savez ce que vous payez, option par option",
          "**L'hébergement inclus la première année**",
          "**Un accompagnement sans jargon**, de la définition des contenus à la mise en ligne",
        ],
      },
      {
        type: "p",
        content:
          "Mon objectif : un site tout aussi professionnel que celui d'une agence, à un tarif adapté aux moyens d'une association.",
      },
      {
        type: "p",
        content:
          "Et le prix ? Une agence mobilise plusieurs personnes — designer, développeur, chef de projet — et ses tarifs le reflètent. C'est un modèle pertinent pour les gros projets. Pour un site associatif, un freelance est souvent plus adapté : j'en parle en détail dans [freelance ou agence web : que choisir](/articles/freelance-vs-agence-web). Vous pouvez aussi [découvrir mes réalisations](/portfolio).",
      },
      {
        type: "quote",
        content:
          "Un bon site pour une ASBL, c'est un site qui parle à ses membres, rassure ses partenaires, et donne envie de s'impliquer.",
      },
      {
        type: "h2",
        content: "Une ASBL à Wavre ou en Brabant wallon ?",
      },
      {
        type: "p",
        content:
          "Je suis basé à Wavre et j'interviens dans tout le Brabant wallon, ainsi que dans les provinces de Namur et du Hainaut et en région bruxelloise. Une association de Wavre, d'Ottignies ou de Nivelles peut donc travailler avec un développeur proche de chez elle. Et si votre ASBL est ailleurs en Wallonie ou en Belgique, tout peut se faire à distance.",
      },
      {
        type: "p",
        content:
          "Vous avez un projet de site pour votre association ? [Demandez votre devis gratuit](/contact) : on en discute sans engagement. Et si vous avez d'autres questions, la page [questions fréquentes sur mes services](/faq) y répond sans doute.",
      },
    ],
    faq: [
      {
        question: "Combien coûte un site internet pour une ASBL ?",
        answer:
          "Le pack de base est à 900 € : un site avec page d'accueil + 5 pages, un formulaire de contact sécurisé, un SEO de base et un an d'hébergement. Avec un CMS pour gérer vous-même vos contenus, comptez 1 100 à 1 250 € la première année, puis 250 € par an pour l'hébergement et la maintenance. Le devis est gratuit.",
      },
      {
        question: "Notre association pourra-t-elle mettre le site à jour elle-même ?",
        answer:
          "Oui, avec l'option CMS (200 à 350 €). Vous modifiez vos textes, vos photos, vos actualités et vos dates d'événements depuis une interface simple, sans toucher au code. Si vous préférez me confier ces mises à jour, c'est 45 € de l'heure.",
      },
      {
        question: "Quelles mentions légales doivent figurer sur le site d'une ASBL ?",
        answer:
          "L'[article 2:20 du Code des sociétés et des associations](https://www.ejustice.just.fgov.be/eli/loi/2019/03/23/2019A40586/justel) prévoit notamment la dénomination, la forme légale, l'adresse du siège, le numéro d'entreprise et la mention « RPM » suivie du tribunal du siège. Si le site collecte des données, une politique de confidentialité est aussi nécessaire (RGPD). En cas de doute, vérifiez auprès d'un professionnel du droit.",
      },
      {
        question: "Que faut-il préparer avant de commencer ?",
        answer:
          "Vos textes de présentation (même en brouillon), votre logo, quelques photos, et les informations légales de l'ASBL : numéro d'entreprise et adresse du siège. Si vous n'avez pas tout, ce n'est pas un problème : je vous aide à définir et à rédiger vos contenus.",
      },
      {
        question: "Faut-il être en Brabant wallon pour travailler ensemble ?",
        answer:
          "Non. Je suis basé à Wavre et j'interviens dans tout le Brabant wallon, les provinces de Namur et du Hainaut et la région bruxelloise. Partout ailleurs, tout peut se faire à distance.",
      },
      {
        question: "Vous occupez-vous aussi de l'hébergement ?",
        answer:
          "Oui. La première année d'hébergement est incluse dans le pack de base. Ensuite, l'hébergement et la maintenance coûtent 250 € par an : mises à jour techniques, sauvegardes et petites corrections.",
      },
    ],
    related: ["combien-coute-un-site-web-en-belgique", "freelance-vs-agence-web"],
  },
  {
    title: "Pourquoi votre site doit être adapté au mobile en 2026",
    slug: "site-mobile-responsive-2025",
    date: "2026-02-05",
    updated: CONTENT_UPDATE_DATE,
    excerpt:
      "Plus de la moitié du trafic web mondial vient des smartphones. Un site non adapté au mobile, c'est une mauvaise expérience utilisateur, un mauvais référencement, et des visiteurs perdus. Voici pourquoi le responsive est incontournable.",
    sections: [
      {
        type: "p",
        content:
          "Aujourd'hui, ignorer le mobile n'est plus une option. La majorité des internautes consultent les sites sur leur téléphone — que ce soit pour chercher un artisan, lire un article, remplir un formulaire ou trouver les horaires d'une association. Si votre site ne s'affiche pas bien sur un écran de 6 pouces, vous perdez des visiteurs, et Google vous pénalise.",
      },
      {
        type: "h2",
        content: "Mobile-first : ce que ça signifie vraiment",
      },
      {
        type: "p",
        content:
          "Le « mobile-first » n'est pas un buzzword. C'est une philosophie de conception : on commence par dessiner l'interface pour les petits écrans, puis on l'adapte pour les écrans plus larges. Cette approche force à aller à l'essentiel — qu'est-ce que l'utilisateur sur smartphone a vraiment besoin de voir ? — et produit des sites plus clairs et plus rapides.",
      },
      {
        type: "h2",
        content: "L'impact sur le SEO",
      },
      {
        type: "p",
        content:
          "Google utilise le « mobile-first indexing » : c'est la version mobile de votre site qui est analysée en priorité pour déterminer votre position dans les résultats de recherche. Un site qui ne s'affiche pas bien sur mobile sera donc moins bien référencé, même si la version desktop est parfaite.",
      },
      {
        type: "ul",
        content: [
          "Google indexe la version mobile en priorité",
          "Un site lent sur mobile est pénalisé dans les résultats",
          "Les Core Web Vitals (LCP, INP, CLS) sont mesurés sur mobile et sur ordinateur",
          "Un mauvais affichage mobile augmente le taux de rebond",
        ],
      },
      {
        type: "h2",
        content: "Les erreurs classiques des sites non-responsive",
      },
      {
        type: "ul",
        content: [
          "Texte trop petit à lire sans zoomer",
          "Boutons trop rapprochés, impossibles à cliquer avec le doigt",
          "Images qui débordent ou qui sont mal cadrées",
          "Menus de navigation inutilisables sur petit écran",
          "Formulaires difficiles à remplir sur mobile",
          "Temps de chargement trop longs (images non optimisées)",
        ],
      },
      {
        type: "h2",
        content: "Comment je garantis un site responsive",
      },
      {
        type: "p",
        content:
          "Tous les sites que je développe sont pensés dès le départ pour tous les formats d'écran. J'utilise Tailwind CSS avec des breakpoints adaptés, je teste chaque page sur mobile et desktop, et j'optimise systématiquement les images pour réduire les temps de chargement. Le rendu côté serveur de Next.js garantit des performances optimales, quel que soit l'appareil.",
      },
      {
        type: "h2",
        content: "Votre site actuel est-il responsive ?",
      },
      {
        type: "p",
        content:
          "Vous pouvez le tester facilement : ouvrez votre site sur votre smartphone et naviguez dessus. Est-ce que tout s'affiche correctement ? Les textes sont lisibles ? Les boutons sont cliquables ? Sinon, il est temps d'envisager une refonte. Contactez-moi pour une analyse gratuite de votre site existant.",
      },
      {
        type: "quote",
        content:
          "Un site beau sur desktop mais inutilisable sur mobile, c'est comme une vitrine magnifique dont la porte d'entrée est condamnée.",
      },
    ],
  },
];
