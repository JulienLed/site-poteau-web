import vitrine from "@/public/vitrine.png";
import design from "@/public/design.png";
import support from "@/public/support.png";
import crm from "@/public/CRM.png";
import { StaticImageData } from "next/image";

export type Service = {
  title: string;
  image: StaticImageData;
  imageAlt: string;
  items: string[];
  link: string;
};

export const services: Service[] = [
  {
    title: "Design et Expérience Utilisateur",
    image: design,
    imageAlt: "design et expérience utilisateur",
    items: [
      "Interfaces claires et ergonomiques",
      "Adapté pour mobile, tablette, ordinateur",
      "Navigation fluide pour tous les utilisateurs",
    ],
    link: "/tarifs",
  },
  {
    title: "Site Internet",
    image: vitrine,
    imageAlt: "vitrine sur site web sur ordinateur",
    items: [
      "Votre site rapidement et facilement",
      "Optimisation des performances et SEO",
      "Maintenance et évolutivité",
    ],
    link: "/tarifs",
  },
  {
    title: "CRM & Gestion des Contacts",
    image: crm,
    imageAlt: "CRM et gestion des contacts",
    items: [
      "Centraliser vos clients, membres ou bénéficiaires",
      "Suivre les interactions et l'historique",
      "Automatiser les rappels et tâches récurrentes",
    ],
    link: "/tarifs",
  },
  {
    title: "Conseil & Support",
    image: support,
    imageAlt: "conseil et support",
    items: [
      "Stratégie numérique pour associations / entreprises",
      "Solutions adaptées à vos besoins et budget",
      "Accompagnement technique et formation",
    ],
    link: "/tarifs",
  },
];
