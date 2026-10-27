export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "Combien coûte un site internet ?",
    answer:
      "Le pack de base démarre à 900 € et inclut une page d'accueil personnalisée, 5 pages statiques, un formulaire de contact sécurisé, un SEO de base et un an d'hébergement. Des options viennent s'ajouter selon vos besoins : pages supplémentaires (60–100 €/page), CMS pour gérer vous-même les contenus (200–350 €), espace client ou membres (150–300 €), maintenance annuelle (250 €/an), etc. Vous pouvez estimer votre projet directement via le calculateur sur la page Tarifs.",
  },
  {
    question: "Combien de temps faut-il pour créer un site ?",
    answer:
      "Un site vitrine simple peut être livré en 1 à 3 jours pour des projets express. Un site multi-pages avec CMS prend généralement 1 à 3 semaines. Pour des projets plus complexes — e-commerce, espace membres, fonctionnalités avancées — comptez de 1 à 3 mois selon la complexité et le volume de travail. Le délai dépend aussi de votre réactivité pour valider les étapes et fournir les contenus (textes, photos, logo).",
  },
  {
    question: "Je n'ai pas de contenu prêt, est-ce un problème ?",
    answer:
      "Pas du tout. Je vous accompagne dans la définition de vos contenus. Je peux rédiger ou enrichir les textes avec le support de l'IA, suggérer des images libres de droits, et vous guider sur la structure de chaque page. L'objectif est de vous livrer un site prêt à l'emploi, même si vous partez de zéro.",
  },
  {
    question: "Quelle est la différence entre un site sur mesure et WordPress ?",
    answer:
      "WordPress est un CMS générique largement répandu, mais il nécessite de nombreux plugins, peut être lourd et présente des failles de sécurité fréquentes. Je développe avec Next.js, un framework moderne qui produit des sites ultra-performants, sécurisés et optimisés SEO nativement. Si vous souhaitez remplacer un site WordPress ou Wix existant, je crée un site Next.js adapté à vos besoins — je ne fais pas de modifications sur des sites construits avec d'autres technologies.",
  },
  {
    question: "L'hébergement est-il compris dans le prix ?",
    answer:
      "Oui. Le pack de base inclut un an d'hébergement. Passé ce délai, vous pouvez reconduire pour 250 €/an. Ce forfait couvre les mises à jour techniques, sauvegardes régulières, renouvellement d'hébergement, petites modifications selon leur complexité, et une disponibilité après-vente limitée. La gestion du contenu (textes, images, actualités) reste facturable séparément à 45 €/h.",
  },
  {
    question: "Que se passe-t-il après la livraison du site ?",
    answer:
      "Une fois le site livré, deux options s'offrent à vous : gérer vous-même les mises à jour (si un CMS est intégré), ou souscrire à la maintenance annuelle pour que je m'en occupe. Dans tous les cas, je reste disponible pour des corrections, évolutions ou ajouts ponctuels facturés à l'heure (45 €/h).",
  },
  {
    question: "Avez-vous un site existant à remplacer ?",
    answer:
      "Si vous avez un site sur WordPress, Wix ou toute autre technologie et souhaitez quelque chose de plus performant, je vous propose une refonte complète avec Next.js. Je pars d'une base saine et construis un site moderne, rapide et adapté à vos besoins actuels.",
  },
  {
    question: "Intervenez-vous uniquement à Wavre ?",
    answer:
      "Non. J'interviens dans tout le Brabant Wallon (Wavre, Ottignies, Louvain-la-Neuve, Nivelles, Braine-l'Alleud, Waterloo, Rixensart...) ainsi que dans les provinces de Namur et du Hainaut, et dans la région bruxelloise. Tout projet peut aussi se réaliser entièrement à distance, sans contrainte géographique.",
  },
  {
    question: "Puis-je avoir un devis gratuit ?",
    answer:
      "Absolument. Le devis est toujours gratuit et sans engagement. Vous pouvez utiliser le calculateur interactif sur la page Tarifs pour une première estimation, puis me contacter pour affiner ensemble selon vos besoins réels.",
  },
  {
    question: "Travaillez-vous avec les ASBL et associations ?",
    answer:
      "Oui, et c'est même une de mes spécialités. Assistant social de formation et de métier, je connais les réalités du secteur associatif : budgets contraints, équipes bénévoles qui changent, besoins spécifiques (agenda d'événements, espace membres, formulaire d'adhésion) et importance de communiquer clairement vers le public. Je propose des solutions adaptées : un pack de base à 900 €, des options à la carte, et un CMS pour que votre équipe mette le site à jour sans toucher au code. Basé à Wavre, j'accompagne les associations de tout le Brabant wallon et d'ailleurs, à distance. Vous trouverez plus de détails dans l'article consacré aux sites internet pour ASBL, sur la page Articles.",
  },
  {
    question: "Combien coûte un site internet pour une ASBL ?",
    answer:
      "Le pack de base est à 900 € : une page d'accueil personnalisée, 5 pages statiques, un formulaire de contact sécurisé, un SEO de base et un an d'hébergement. Vous pouvez ajouter un CMS (200 à 350 €) pour publier vous-même vos actualités et vos événements, soit 1 100 à 1 250 € au total la première année. Ensuite, l'hébergement et la maintenance coûtent 250 € par an. Prix sans TVA (non assujetti). Le devis est gratuit : faites une première estimation avec le calculateur de la page Tarifs, puis contactez-moi via la page Contact.",
  },
  {
    question: "Pourquoi choisir un développeur web basé à Wavre, en Brabant wallon ?",
    answer:
      "Parce qu'un interlocuteur proche de chez vous connaît votre contexte et reste facile à joindre. Je suis basé à Wavre et j'interviens dans tout le Brabant wallon — Ottignies, Louvain-la-Neuve, Nivelles, Waterloo, Rixensart… — ainsi que dans les provinces de Namur et du Hainaut et en région bruxelloise. On peut se rencontrer pour lancer le projet : la première réunion, pour établir le devis, ne donne lieu à aucun frais de déplacement. Et si vous êtes ailleurs, tout peut se faire à distance : la qualité du site est la même.",
  },
  {
    question: "Pourquoi un assistant social qui crée des sites internet ?",
    answer:
      "Je suis assistant social de formation et de métier, et développeur web freelance. Ce double parcours change la façon dont je travaille : j'écoute d'abord ce que vous faites et pour qui, avant de parler technique. Je connais les réalités du secteur associatif et social — budgets serrés, équipes bénévoles, besoin de communiquer simplement avec le public. Mon objectif est de vous livrer un site utile et compréhensible, pas une vitrine technologique.",
  },
  {
    question: "De quoi une ASBL a-t-elle besoin pour démarrer son site ?",
    answer:
      "De peu de choses pour commencer : une présentation de vos activités (même en brouillon), votre logo, quelques photos, et les informations légales de l'ASBL. Le Code des sociétés et des associations (article 2:20) prévoit notamment que le site mentionne la dénomination, la forme légale, l'adresse du siège, le numéro d'entreprise et la mention « RPM » suivie du tribunal du siège. Si vous avez déjà un nom de domaine, prévoyez ses accès. Il vous manque des textes ? Je vous aide à les rédiger.",
  },
];
