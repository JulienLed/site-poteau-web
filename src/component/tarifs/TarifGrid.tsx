import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaCheck } from "react-icons/fa";

const baseInclusions = [
  "Page d'accueil personnalisée",
  "5 pages fixes",
  "Formulaire de contact sécurisé",
  "Référencement basique (SEO)",
  "Hébergement de votre site pendant 1 an",
  "2h de réunion pour évaluer vos besoins",
];

const supplements = [
  {
    title: "Pages supplémentaires",
    price: "60 – 100 € / page",
    detail: "selon complexité",
  },
  {
    title: "Espace client / membre",
    price: "150 – 300 €",
    detail: "selon complexité",
  },
  {
    title: "CMS (gestion de contenu)",
    price: "200 – 350 €",
    detail: "modifier vous-même textes, images, actualités",
  },
  {
    title: "Google Analytics",
    price: "50 €",
    detail: "statistiques de visites",
  },
  {
    title: "Google Maps",
    price: "50 €",
    detail: "carte interactive intégrée",
  },
  {
    title: "Maintenance annuelle",
    price: "250 € / an",
    detail: "corrections mineures, backups, mises à jour",
  },
  {
    title: "Heure supplémentaire",
    price: "45 € / h",
    detail: "formation, conseil, brainstorming",
  },
];

export default function TarifGrid() {
  return (
    <div className="flex flex-col gap-10">
      {/* Pack de Base */}
      <Card className="bg-logo-blue border border-sandy-brown/30 text-sandy-brown shadow-2xl px-5 py-8">
        <CardHeader className="pb-4">
          <CardTitle className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <span className="text-2xl md:text-3xl font-title font-bold">
              Pack de Base
            </span>
            <span className="text-3xl md:text-4xl font-bold text-copper">
              900 €
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-3">
            {baseInclusions.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-base md:text-lg">
                <FaCheck className="text-copper shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Suppléments */}
      <div className="flex flex-col gap-5">
        <h3 className="text-xl md:text-2xl font-title font-semibold text-sandy-brown">
          Options en supplément
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {supplements.map((s, i) => (
            <Card
              key={i}
              className="bg-logo-blue/70 border-0 text-sandy-brown shadow-md px-5 py-4"
            >
              <CardContent className="flex flex-col gap-1 p-0">
                <p className="font-title font-semibold text-base md:text-lg">
                  {s.title}
                </p>
                <p className="text-copper text-xl font-bold">{s.price}</p>
                <p className="text-sandy-brown/70 text-sm">{s.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
