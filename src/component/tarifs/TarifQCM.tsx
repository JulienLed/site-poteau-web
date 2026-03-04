"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Link from "next/link";

type Answer = {
  text?: string | null;
  next?: number | null;
  id?: number | null;
  link?: string | null;
  value?: number | null;
  inputType?: string | null;
  unitPrice?: number | null;
  message?: number | null;
  keyword?: string | null;
};

export default function TarifQCM() {
  const [total, setTotal] = useState(0);
  const [nextQuestion, setNextQuestion] = useState<number>(2);
  const [num, setNum] = useState(0);
  const [checkList, setCheckList] = useState<number[]>([]);
  const [history, setHistory] = useState<
    { question: string; keyword?: string; answer: string; cost: number }[]
  >([]);

  const qcm = [
    {
      id: 2,
      question: "Quel genre de site souhaitez-vous ?",
      answers: [
        {
          text: "Un site simple (5 pages)",
          value: 900,
          next: 3,
          keyword: "Site simple",
        },
        {
          text: "Un site simple avec plus de pages",
          value: 900,
          next: 7,
          keyword: "Site complexe",
        },
        {
          text: "Un site avec un espace client",
          value: 900,
          next: 5,
          keyword: "Espace client",
        },
        {
          text: "Un site où je peux modifier moi-même le contenu",
          value: 900,
          next: 6,
          keyword: "CMS",
        },
        { text: "Ma demande est plus complexe", next: 10 },
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
        {
          text: "Un espace client basique, protégé par mot de passe",
          value: 150,
          next: 4,
          keyword: "Espace client basique",
        },
        {
          text: "Un espace client complexe, avec authentification tierce (Google, Facebook...)",
          value: 300,
          next: 4,
          keyword: "Espace client complexe",
        },
        { text: "Ma demande est plus complexe", next: 10 },
        { text: "Pour finir, ce n'est pas nécessaire", next: 4 },
      ],
    },
    {
      id: 6,
      question: "Quels types de contenus souhaitez-vous contrôler ?",
      answers: [
        {
          text: "Quelques images, actus, articles (CMS simple)",
          value: 200,
          next: 8,
          keyword: "CMS simple",
        },
        {
          text: "Beaucoup de médias / collections (CMS complexe + base de données)",
          value: 350,
          next: 8,
          keyword: "CMS complexe",
        },
        { text: "Ma demande est plus complexe", next: 10 },
        { text: "Pour finir, ce n'est pas nécessaire", value: 0, next: 8 },
      ],
    },
    {
      id: 7,
      question: "Combien de pages supplémentaires souhaitez-vous ?",
      answers: [
        {
          inputType: "pages",
          unitPrice: 60,
          next: 3,
          keyword: "Pages supplémentaires",
        },
      ],
    },
    {
      id: 8,
      question: "Souhaitez-vous ajouter des fonctions supplémentaires ?",
      answers: [
        {
          id: 1,
          text: "Statistiques visiteurs (Google Analytics)",
          inputType: "check",
          value: 50,
          next: 9,
          keyword: "Google Analytics",
        },
        {
          id: 2,
          text: "Carte interactive (Google Maps)",
          inputType: "check",
          value: 50,
          next: 9,
          keyword: "Google Maps",
        },
        {
          id: 3,
          text: "Formation CMS, analyse des besoins ou brainstorming (heures) :",
          inputType: "hours",
          unitPrice: 45,
          next: 9,
          keyword: "Heures supplémentaires",
        },
        { text: "Non, ça ira comme ça", value: 0, next: 9 },
      ],
    },
    {
      id: 9,
      question: "Souhaitez-vous un service de maintenance annuelle ?",
      keyword: "maintenance",
      answers: [
        {
          text: "Oui (suivi, mises à jour, backups, corrections mineures)",
          value: 250,
          next: 0,
          keyword: "Maintenance 1 an",
        },
        { text: "Non, ça ira comme ça", value: 0, next: 0 },
      ],
    },
    {
      id: 0,
      message: {
        total: total,
        history: history,
      },
    },
    { id: 10, href: "/contact" },
  ];

  const handleCheck = (id: number) => {
    setCheckList((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // now keyword instead of full question
  const pushHistory = (
    question: string,
    keyword: string,
    answer: string,
    cost: number = 0
  ) => {
    setHistory((prev) => [...prev, { question, keyword, answer, cost }]);
  };

  const handleChoice = (answer: Answer) => {
    const currentQuestion = qcm.find((q) => q.id === nextQuestion) || qcm[0];
    const value = answer.value || 0;
    pushHistory(
      currentQuestion.question || "",
      answer.keyword || "",
      answer.text || "",
      value
    );
    setTotal((prev) => prev + value);
    setNum(0);
    setNextQuestion(answer.next || 0);
  };

  const handleInput = (answer: Answer, value: number) => {
    const price = (answer.unitPrice || 0) * value;
    const currentQuestion = qcm.find((q) => q.id === nextQuestion);
    if (currentQuestion) {
      const label = `${value} ${
        answer.inputType === "pages" ? "pages" : "heures"
      }`;
      pushHistory(
        currentQuestion.question || "",
        answer.keyword || "",
        label,
        price
      );
    }
    setTotal((prev) => prev + price);
    setNextQuestion(answer.next || 0);
  };

  const handleValidateChecks = (answers: Answer[]) => {
    const selected = answers.filter((a) => checkList.includes(a.id || -1));
    const sum = selected.reduce((acc, a) => acc + (a.value || 0), 0);
    const currentQuestion = qcm.find((q) => q.id === nextQuestion);

    if (currentQuestion) {
      const keywords =
        selected
          .map((a) => a.keyword)
          .filter(Boolean)
          .join(", ") || "";
      const labels =
        selected
          .map((a) => a.text)
          .filter(Boolean)
          .join(", ") || "Aucun";

      pushHistory(currentQuestion.question || "", keywords, labels, sum);
    }

    setTotal((prev) => prev + sum);
    setNextQuestion(9);
  };

  const renderAnswer = (answer: Answer) => {
    if (answer.inputType === "check")
      return (
        <div className="flex items-center gap-3">
          <Input
            id={`check-${answer.id}`}
            type="checkbox"
            name={`check-${answer.id}`}
            checked={checkList.includes(answer.id || -1)}
            onChange={() => handleCheck(answer.id || -1)}
            className="cursor-pointer w-5"
          />
          <Label
            htmlFor={`check-${answer.id}`}
            className="cursor-pointer text-base md:text-lg text-sandy-brown w-fit px-3 py-1 hover:bg-lapis-lazuli rounded-md animate-pulse transition-all duration-300 ease-in-out"
          >
            {answer.text}
          </Label>
        </div>
      );

    if (answer.inputType === "hours" || answer.inputType === "pages")
      return (
        <div className="flex justify-center w-fit gap-5">
          <Label htmlFor="input">
            <p className="cursor-pointer text-base md:text-lg text-sandy-brown w-fit px-3 py-1 hover:bg-lapis-lazuli active:translate-0.5 rounded-md animate-pulse hover:animate-pause transition-all duration-300 ease-in-out">
              {answer.text}
            </p>
            <Input
              name="input"
              type="number"
              value={num}
              onChange={(e) => setNum(Number(e.target.value))}
              className="w-[15vw] md:w-fit"
            />
          </Label>
          {answer.inputType === "pages" && (
            <Button
              aria-label="next"
              className="bg-sandy-brown hover:!bg-sandy-brown/90 hover:cursor-pointer active:!translate-0.5 hover:!text-lapis-lazuli hover:!shadow-none shadow-2xs text-logo-blue text-base md:text-lg transition-all duration-300 ease-in-out w-fit rounded-xl px-3 py-1"
              onClick={() => handleInput(answer, num)}
            >
              Suivant
            </Button>
          )}
        </div>
      );

    return (
      <p
        className="cursor-pointer text-base md:text-lg text-sandy-brown w-fit px-3 py-1 hover:bg-lapis-lazuli active:translate-0.5 rounded-md animate-pulse hover:animate-pause transition-all duration-300 ease-in-out"
        onClick={() => handleChoice(answer)}
      >
        {answer.text}
      </p>
    );
  };

  const renderQuestion = () => {
    const question = qcm.find((q) => q.id === nextQuestion);

    if (!question) return null;
    if (question.id === 0)
      return (
        <Card className="flex flex-col items-center bg-logo-blue border-0 text-sandy-brown shadow-2xl md:px-6 py-10 text-center">
          <h3 className="text-lg md:text-2xl mb-6 font-bold">
            💰 Estimation de votre projet
          </h3>

          <div className="max-w-[90%] mx-auto mb-3 md:mb-6">
            <table className="border border-sandy-brown/50 text-left">
              <thead className="bg-lapis-lazuli text-sandy-brown">
                <tr>
                  <th className="md:px-4 py-2 border-b border-sandy-brown/50">
                    Service
                  </th>
                  <th className="md:px-4 py-2 border-b border-sandy-brown/50">
                    Choix / Détail
                  </th>
                  <th className="md:px-4 py-2 border-b border-sandy-brown/50 text-right">
                    Prix (€)
                  </th>
                </tr>
              </thead>
              <tbody>
                {question.message?.history.map((h, i) => (
                  <tr
                    key={i}
                    className="hover:bg-lapis-lazuli/40 transition-colors"
                  >
                    <td className="md:px-4 py-2 border-b border-sandy-brown/30 text-left">
                      {h.question}
                    </td>
                    <td className="md:px-4 py-2 border-b border-sandy-brown/30 text-left">
                      {h.answer}
                    </td>
                    <td className="md:px-4 py-2 border-b border-sandy-brown/30 text-right">
                      {h.cost > 0 ? `${h.cost.toFixed(2)}€` : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xl font-semibold mt-4">
            Total estimé :{" "}
            <span className="text-2xl">{total.toFixed(2)} €</span>
          </p>
          <p className="text-sandy-brown/80 text-sm italic mt-2 max-w-[80%]">
            * Cette estimation est indicative. Le prix final sera établi lors
            d&apos;une consultation et pourra varier selon la complexité réelle
            de votre projet.
          </p>
          <Link
            aria-label="to_contact"
            className="bg-sandy-brown hover:!bg-sandy-brown/90 active:!translate-0.5 hover:!text-lapis-lazuli hover:!shadow-none shadow-2xs text-logo-blue font-semibold text-base md:text-lg transition-all duration-300 ease-in-out w-fit rounded-xl px-3 py-1"
            href={{
              pathname: "/contact",
              query: {
                history: JSON.stringify(question.message?.history),
                total: question.message?.total,
              },
            }}
          >
            Je veux réaliser mon projet
          </Link>
        </Card>
      );

    return (
      <Card className="bg-logo-blue border-0 text-sandy-brown shadow-2xl px-5 py-10 mb-10">
        <h3 className="text-lg md:text-xl mb-4">{question.question}</h3>
        <ul className="flex flex-col gap-2">
          {question.answers?.map((answer) => (
            <li key={Math.random()}>{renderAnswer(answer)}</li>
          ))}
        </ul>

        {question.id === 8 && (
          <Button
            aria-label="next"
            className="bg-sandy-brown hover:!bg-sandy-brown/90 hover:cursor-pointer active:!translate-0.5 hover:!text-lapis-lazuli hover:!shadow-none shadow-2xs text-logo-blue text-base md:text-lg transition-all duration-300 ease-in-out w-fit rounded-xl px-3 py-1"
            onClick={() => handleValidateChecks(question.answers!)}
          >
            Suivant
          </Button>
        )}
      </Card>
    );
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Historique */}
      {history.map((h, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-logo-blue/70 border border-sandy-brown text-sandy-brown shadow-md p-4 rounded-xl"
        >
          <p className="font-semibold">{h.question}</p>
          <p className="text-sandy-brown/90">➡️ {h.answer}</p>
        </motion.div>
      ))}

      {/* Question active */}
      <AnimatePresence mode="wait">
        <motion.div
          key={nextQuestion}
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100vw", opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {renderQuestion()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
