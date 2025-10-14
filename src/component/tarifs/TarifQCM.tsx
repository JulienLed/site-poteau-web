"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

type Answer = {
  text: string;
  next?: number | string;
  value?: number;
  note?: string;
  action?: string;
  inputType?: string;
  unitPrice?: number;
};

export default function TarifQCM() {
  const [total, setTotal] = useState<number>(0);
  const [nextQuestion, setNextQuestion] = useState<number | null>();
  const qcm = [
    {
      id: 1,
      question:
        "Souhaitez-vous déterminer votre prix en répondant à différentes questions ?",
      answers: [
        { text: "Oui", next: 2 },
        { text: "Télécharger les tarifs en PDF", action: "downloadPDF" },
      ],
    },
    {
      id: 2,
      question: "Quel genre de site souhaitez-vous ?",
      answers: [
        { text: "Un site simple (5 pages)", value: 900, next: 3 },
        { text: "Un site simple avec plus de pages", value: 900, next: 7 },
        { text: "Un site avec un espace client", value: 900, next: 5 },
        {
          text: "Un site où je peux modifier moi-même le contenu",
          value: 900,
          next: 6,
        },
        { text: "Ma demande est plus complexe", note: "Sur devis" },
      ],
    },
    {
      id: 3,
      question: "Voulez-vous un espace client ?",
      answers: [
        { text: "Oui", next: 5 },
        { text: "Non", next: 4 },
      ],
    },
    {
      id: 4,
      question: "Voulez-vous pouvoir modifier vous-même le contenu ?",
      answers: [
        { text: "Oui", next: 6 },
        { text: "Non", next: 8 },
      ],
    },
    {
      id: 5,
      question: "Quel genre d'espace client souhaitez-vous ?",
      answers: [
        { text: "Pour finir, ce n'est pas nécessaire", next: 4 },
        {
          text: "Un espace client basique, protégé par mot de passe",
          value: 150,
          next: 4,
        },
        {
          text: "Un espace client complexe, avec authentification tierce (Google, Facebook...)",
          value: 300,
          next: 4,
        },
        { text: "Ma demande est plus complexe", note: "Sur devis" },
      ],
    },
    {
      id: 6,
      question: "Quels types de contenus souhaitez-vous contrôler ?",
      answers: [
        { text: "Pour finir, ce n'est pas nécessaire", value: 0, next: 8 },
        {
          text: "Quelques images, actus, articles (CMS simple)",
          value: 200,
          next: 8,
        },
        {
          text: "Beaucoup de médias / collections (CMS complexe + base de données)",
          value: 350,
          next: 8,
        },
        { text: "Ma demande est plus complexe", note: "Sur devis" },
      ],
    },
    {
      id: 7,
      question: "Combien de pages supplémentaires souhaitez-vous ?",
      inputType: "number",
      unitPrice: 60,
      next: 3,
    },
    {
      id: 8,
      question: "Souhaitez-vous ajouter des fonctions supplémentaires ?",
      answers: [
        { text: "Non, ça ira comme ça", value: 0, next: 9 },
        {
          text: "Statistiques visiteurs (Google Analytics)",
          value: 50,
          next: 9,
        },
        { text: "Carte interactive (Google Maps)", value: 50, next: 9 },
        {
          text: "Formation CMS, analyse des besoins ou brainstorming (heures) :",
          inputType: "number",
          unitPrice: 45,
          next: 9,
        },
      ],
    },
    {
      id: 9,
      question: "Souhaitez-vous un service de maintenance annuelle ?",
      answers: [
        { text: "Non, ça ira comme ça", value: 0, next: "end" },
        {
          text: "Oui (suivi, mises à jour, backups, corrections mineures)",
          value: 250,
          next: "end",
        },
      ],
    },
  ];

  return (
    <div>
      <p>{qcm[0].question}</p>
      {qcm[0].answers ? (
        <ul>
          {qcm[0].answers.map((answer) => (
            <li>{answer.text}</li>
          ))}
        </ul>
      ) : (
        <input type="number" />
      )}
    </div>
  );
}
