"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "react-intersection-observer";
import { PageIntro, PageTitle } from "@/utils/utils";

const faqs = [
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
      "Oui, et c'est même une de mes spécialités. Mon parcours d'assistant social me donne une sensibilité particulière aux réalités du secteur associatif : budgets contraints, besoins spécifiques (agenda d'événements, espace membres, transparence), et importance de la communication vers le public. Je propose des solutions adaptées aux contraintes des ASBL.",
  },
];

function FaqItem({
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

  return (
    <div ref={ref} className="w-full md:w-[60vw]">
      <motion.div
        initial={{ x: fromLeft ? "-100vw" : "100vw", opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-logo-blue text-sandy-brown rounded-2xl shadow-lg overflow-hidden"
      >
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="w-full text-left px-6 md:px-8 py-5 flex justify-between items-center gap-4 font-title font-semibold text-base md:text-lg hover:bg-white/5 transition-colors duration-200"
          aria-expanded={open}
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
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 md:px-8 pb-6 text-base md:text-lg leading-relaxed opacity-90 text-justify">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default function Faq() {
  return (
    <div className="py-15">
      <PageTitle title="FAQ" />
      <PageIntro>
        <p className="text-base md:text-lg text-center md:text-justify">
          Vous avez des questions avant de vous lancer ? C'est normal. Voici les réponses aux interrogations les plus fréquentes sur la création de site, les tarifs, les délais et mon fonctionnement. Si votre question n'est pas là, n'hésitez pas à me contacter directement.
        </p>
      </PageIntro>
      <section id="faq-list" className="pt-4 pb-16 px-1 flex flex-col items-center gap-4">
        {faqs.map((faq, i) => (
          <FaqItem key={i} question={faq.question} answer={faq.answer} index={i} />
        ))}
      </section>
    </div>
  );
}
