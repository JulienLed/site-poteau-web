export type ArticleSection = {
  type: "h2" | "h3" | "p" | "ul" | "quote";
  content: string | string[];
};

export type Article = {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    title: "Combien coûte un site web en Belgique en 2025 ?",
    slug: "combien-coute-un-site-web-en-belgique",
    date: "2025-10-15",
    excerpt:
      "Wix, agence, freelance : les prix varient du simple au décuple. Voici un guide honnête pour comprendre ce que vous payez vraiment — et ce que ça devrait vous coûter.",
    sections: [
      {
        type: "p",
        content:
          "C'est souvent la première question que l'on se pose avant de lancer un projet web : combien ça coûte ? Et c'est une bonne question, parce que les prix varient énormément selon la solution choisie. Entre un site fait maison sur Wix, une agence web bruxelloise et un développeur freelance local, on peut passer de quelques centaines à plusieurs dizaines de milliers d'euros. Voici un tour d'horizon honnête.",
      },
      {
        type: "h2",
        content: "Les solutions DIY : Wix, Squarespace, WordPress.com",
      },
      {
        type: "p",
        content:
          "Les constructeurs de sites en ligne comme Wix ou Squarespace affichent des tarifs mensuels attractifs (entre 15 et 40 €/mois), ce qui représente 180 à 480 € par an. En apparence, c'est la solution la moins chère. Mais attention : vous payez à vie, vous êtes limité dans la personnalisation, vos données sont chez eux, et le SEO reste limité. Pour une ASBL ou un indépendant qui veut se démarquer réellement, cette solution a vite des limites.",
      },
      {
        type: "h2",
        content: "Les agences web",
      },
      {
        type: "p",
        content:
          "Une agence web propose généralement des sites à partir de 3 000 à 5 000 € pour un site vitrine simple, et peut monter à 15 000 € ou plus pour un projet complexe. Ce prix inclut le travail de plusieurs personnes (designer, développeur, chef de projet), ce qui se répercute inévitablement sur la facture. Pour une grande entreprise avec des besoins complexes, ça peut se justifier. Pour une association ou un petit commerce, c'est souvent surdimensionné.",
      },
      {
        type: "h2",
        content: "Le développeur freelance : le juste milieu",
      },
      {
        type: "p",
        content:
          "Un développeur freelance travaille seul ou en réseau limité. Ses frais fixes sont réduits, ce qui se traduit directement par des tarifs plus accessibles. Pour un site vitrine professionnel réalisé sur mesure, vous pouvez vous attendre à payer entre 800 et 2 500 € en Belgique, selon la complexité du projet.",
      },
      {
        type: "h2",
        content: "Ce qui influence le prix d'un site",
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
        content: "Mes tarifs en toute transparence",
      },
      {
        type: "p",
        content:
          "Chez Le Poteau du Web, le pack de base démarre à 900 € et inclut une page d'accueil personnalisée, 5 pages statiques, un formulaire de contact sécurisé, un SEO de base et un an d'hébergement. Des options viennent s'ajouter selon vos besoins : pages supplémentaires, CMS, espace client, Google Analytics, maintenance annuelle...",
      },
      {
        type: "quote",
        content:
          "L'objectif n'est pas de faire le moins cher, mais de proposer un rapport qualité-prix honnête adapté aux réalités des petites structures belges.",
      },
      {
        type: "p",
        content:
          "Vous pouvez estimer votre projet directement via le calculateur interactif sur la page Tarifs, et me contacter pour en discuter sans engagement.",
      },
    ],
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
          "Quand on cherche un prestataire pour créer son site internet, on se retrouve souvent face à deux grandes options : faire appel à une agence web ou à un développeur freelance. Les deux ont leurs avantages. Mais pour une ASBL, un indépendant ou un petit commerce, le choix est souvent plus évident qu'il n'y paraît.",
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
          "Tarifs plus accessibles (pas de frais de structure à absorber)",
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
    title: "Créer un site internet pour une ASBL en Belgique : ce qu'il faut savoir",
    slug: "site-internet-asbl-belgique",
    date: "2026-01-14",
    excerpt:
      "Les associations ont des besoins spécifiques : budgets contraints, agenda d'événements, espace membres, communication vers le public. Voici comment aborder la création de site pour une ASBL en Belgique.",
    sections: [
      {
        type: "p",
        content:
          "Une ASBL n'est pas une entreprise comme les autres. Elle a des objectifs sociaux, culturels ou sportifs, des bénévoles impliqués, et souvent un budget serré. Son site internet doit refléter ces réalités : lisible, accessible, facile à mettre à jour, et capable de convaincre à la fois des membres potentiels, des donateurs et des partenaires institutionnels.",
      },
      {
        type: "h2",
        content: "Les besoins typiques d'une ASBL",
      },
      {
        type: "ul",
        content: [
          "Présentation claire des activités et de la mission",
          "Agenda des événements ou activités régulières",
          "Formulaire d'adhésion ou de contact",
          "Espace membres pour accéder à des documents ou infos privées",
          "Intégration de dons en ligne (si applicable)",
          "Section actualités ou blog pour maintenir le site vivant",
        ],
      },
      {
        type: "h2",
        content: "Le budget, un facteur déterminant",
      },
      {
        type: "p",
        content:
          "Beaucoup d'associations hésitent à investir dans un site professionnel par peur des coûts. Pourtant, un site bien fait est un outil de communication qui travaille pour vous 24h/24. Chez Le Poteau du Web, je propose des solutions adaptées aux réalités des ASBL : pack de base à 900 €, avec des options à la carte selon vos besoins réels — sans vous vendre des fonctionnalités inutiles.",
      },
      {
        type: "h2",
        content: "Gérer le contenu soi-même : le CMS",
      },
      {
        type: "p",
        content:
          "Pour une association, pouvoir mettre à jour les actualités, modifier les dates d'événements ou ajouter une photo sans faire appel au développeur à chaque fois, c'est essentiel. C'est pourquoi je propose l'intégration d'un CMS (système de gestion de contenu) en option. Vous gérez votre contenu via une interface simple, sans toucher au code.",
      },
      {
        type: "h2",
        content: "L'accessibilité, une priorité pour les ASBL",
      },
      {
        type: "p",
        content:
          "Un site pour une ASBL doit être accessible au plus grand nombre : personnes âgées, personnes peu à l'aise avec le numérique, utilisateurs sur smartphone. Je veille à ce que chaque site soit lisible, responsive, rapide à charger et conforme aux bonnes pratiques d'accessibilité web (contrastes, taille des polices, navigation claire).",
      },
      {
        type: "h2",
        content: "Mon expérience avec le secteur associatif",
      },
      {
        type: "p",
        content:
          "Mon parcours d'assistant social m'a donné une connaissance directe du monde associatif belge : ses contraintes, ses enjeux de communication, et la réalité des équipes bénévoles. Je comprends ce que vous faites et pourquoi vous le faites. C'est cette compréhension qui me permet de vous proposer un site vraiment adapté, et pas un site générique.",
      },
      {
        type: "quote",
        content:
          "Un bon site pour une ASBL, c'est un site qui parle à ses membres, rassure ses partenaires, et donne envie de s'impliquer.",
      },
      {
        type: "p",
        content:
          "Vous êtes une ASBL ou une association en Brabant Wallon, à Bruxelles ou en Belgique ? Contactez-moi pour discuter de votre projet — le devis est gratuit et sans engagement.",
      },
    ],
  },
  {
    title: "Pourquoi votre site doit être adapté au mobile en 2025",
    slug: "site-mobile-responsive-2025",
    date: "2026-02-05",
    excerpt:
      "Plus de 60 % du trafic web mondial vient des smartphones. Un site non adapté au mobile, c'est une mauvaise expérience utilisateur, un mauvais référencement, et des visiteurs perdus. Voici pourquoi le responsive est incontournable.",
    sections: [
      {
        type: "p",
        content:
          "En 2025, ignorer le mobile n'est plus une option. La majorité des internautes consultent les sites sur leur téléphone — que ce soit pour chercher un artisan, lire un article, remplir un formulaire ou trouver les horaires d'une association. Si votre site ne s'affiche pas bien sur un écran de 6 pouces, vous perdez des visiteurs, et Google vous pénalise.",
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
          "Depuis 2019, Google utilise le « mobile-first indexing » : c'est la version mobile de votre site qui est analysée en priorité pour déterminer votre position dans les résultats de recherche. Un site qui ne s'affiche pas bien sur mobile sera donc moins bien référencé, même si la version desktop est parfaite.",
      },
      {
        type: "ul",
        content: [
          "Google indexe la version mobile en priorité depuis 2019",
          "Un site lent sur mobile est pénalisé dans les résultats",
          "Les Core Web Vitals (LCP, FID, CLS) sont mesurés sur mobile",
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
