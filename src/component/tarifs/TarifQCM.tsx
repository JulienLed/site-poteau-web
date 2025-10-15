"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

type Answer = {
  text?: string | null;
  next?: number | null;
  id?: number | null;
  link?: string | null;
  value?: number | null;
  inputType?: string | null;
  unitPrice?: number | null;
  message?: number | null;
};

export default function TarifQCM() {
  const [total, setTotal] = useState<number>(0);
  const [nextQuestion, setNextQuestion] = useState<number | null>(null);
  const [num, setNum] = useState<number>(0);
  const [hoursPrice, setHoursPrice] = useState<number>(0);
  const [pagesPrice, setPagesPrice] = useState<number>(0);
  const [checkList, setCheckList] = useState<number[]>([]);

  const qcm = [
    {
      id: 1,
      question:
        "Souhaitez-vous déterminer votre prix en répondant à différentes questions ?",
      answers: [
        { text: "Oui", next: 2 },
        { text: "Télécharger les tarifs en PDF", link: "/tarif.pdf" },
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
        { text: "Ma demande est plus complexe", next: 10 },
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
        { text: "Ma demande est plus complexe", next: 10 },
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
        },
      ],
    },
    {
      id: 8,
      question: "Souhaitez-vous ajouter des fonctions supplémentaires ?",
      answers: [
        { text: "Non, ça ira comme ça", value: 0, next: 9 },
        {
          id: 1,
          text: "Statistiques visiteurs (Google Analytics)",
          inputType: "check",
          value: 50,
          next: 9,
        },
        {
          id: 2,
          text: "Carte interactive (Google Maps)",
          inputType: "check",
          value: 50,
          next: 9,
        },
        {
          id: 3,
          text: "Formation CMS, analyse des besoins ou brainstorming (heures) :",
          inputType: "hours",
          unitPrice: 45,
          next: 9,
        },
      ],
    },
    {
      id: 9,
      question: "Souhaitez-vous un service de maintenance annuelle ?",
      answers: [
        { text: "Non, ça ira comme ça", value: 0, next: 0 },
        {
          text: "Oui (suivi, mises à jour, backups, corrections mineures)",
          value: 250,
          next: 0,
        },
      ],
    },
    { id: 0, message: total },
  ];

  //Download du tarif
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/tarif.pdf";
    link.download = "";
    link.target = "_blanck";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  //Checkbox
  const handleCheck = (id: number) => {
    setCheckList((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // 🔹 Valider une réponse normale
  const handleChoice = (answer: Answer) => {
    if (answer.value) setTotal((prev) => prev + (answer.value || 0));
    setNextQuestion(answer.next || 0);
  };

  // 🔹 Valider un input (pages ou heures)
  const handleInput = (answer: Answer, value: number) => {
    const price = (answer.unitPrice || 0) * value;
    setTotal((prev) => prev + price);
    setNextQuestion(answer.next || 0);
  };

  // 🔹 Valider les checkboxs de la question 8
  const handleValidateChecks = (answers: Answer[]) => {
    const selected = answers.filter((a) => checkList.includes(a.id || -1));
    const sum = selected.reduce((acc, a) => acc + (a.value || 0), 0);
    setTotal((prev) => prev + sum);
    setNextQuestion(9);
  };

  // //Calculer le prix pour des heures supplémentaires
  // const countHours = (unitPrice: number, hours: number) => {
  //   const totalPrice = unitPrice * (hours || 0);
  //   setHoursPrice((prev) => prev + totalPrice);
  // };

  // //Calculer le prix pour des pages supplémentaires
  // const countPages = (unitPrice: number, pages: number) => {
  //   const totalPrice = unitPrice * (pages || 0);
  //   setPagesPrice((prev) => prev + totalPrice);
  // };

  // //Bouton Valider
  // const handleValidate = (answer: Answer, num?: number) => {
  //   if (answer.text) {
  //     const choicePrice = answer.value || 0;
  //     const next = answer.next || 0;
  //     const total = hoursPrice + pagesPrice + choicePrice;
  //     setTotal((prev) => prev + total);
  //     setNextQuestion(next);
  //   }
  //   if (answer.inputType === "pages" && answer.unitPrice && num) {
  //     countPages(answer.unitPrice, num);
  //     setTotal((prev) => prev + pagesPrice);
  //   } else if (answer.inputType === "hours" && answer.unitPrice && num) {
  //     countHours(answer.unitPrice, num);
  //     setTotal((prev) => prev + hoursPrice);
  //   } else if (answer.inputType === "check") {
  //     let subTotal = 0;
  //     for (let i = 0; i < checkList.length; i++) {
  //       if (checkList[i] === answer.id && answer.value) {
  //         subTotal += answer.value;
  //       }
  //       setTotal((prev) => prev + subTotal);
  //     }
  //   }
  // };

  //Rendu d'une réponse individuelle
  const renderAnswer = (answer: Answer, questionId: number) => {
    if (answer.link)
      return <button onClick={handleDownload}>{answer.text}</button>;

    if (answer.inputType === "check")
      return (
        <label>
          <input
            type="checkbox"
            checked={checkList.includes(answer.id || -1)}
            onChange={() => handleCheck(answer.id || -1)}
          />
          {answer.text}
        </label>
      );

    if (answer.inputType === "hours" || answer.inputType === "pages")
      return (
        <>
          <input
            type="number"
            value={num}
            onChange={(e) => setNum(Number(e.target.value))}
          />
          <button onClick={() => handleInput(answer, num)}>OK</button>
        </>
      );

    return <button onClick={() => handleChoice(answer)}>{answer.text}</button>;
  };

  // 🔹 Rendu de la question
  const renderQuestion = () => {
    const question = qcm.find((q) => q.id === nextQuestion) || qcm[0];
    if (question.id === 0)
      return <p>💰 Total à payer : {total.toFixed(2)} €</p>;

    return (
      <div>
        <h3>{question.question}</h3>
        <ul>
          {question.answers?.map((answer) => (
            <li key={Math.random()}>{renderAnswer(answer, question.id)}</li>
          ))}
        </ul>

        {question.id === 8 && (
          <button onClick={() => handleValidateChecks(question.answers!)}>
            Valider les choix
          </button>
        )}
      </div>
    );
  };

  // //Affichage question
  // const renderQuestion = () => {
  //   const question = qcm.find((q) => q.id === nextQuestion) || qcm[0];
  //   return (
  //     <div>
  //       <h3>{question.question}</h3>
  //       <ul>
  //         {question.answers?.map((answer: Answer) => {
  //           return (
  //             <li>
  //               {answer.text && !answer.link && (
  //                 <button onClick={() => handleValidate(answer)}>
  //                   {answer.text}
  //                 </button>
  //               )}
  //               {answer.text && answer.link && (
  //                 <button onClick={() => handleDownload()}>
  //                   {answer.text}
  //                 </button>
  //               )}
  //               {(answer.inputType === "pages" ||
  //                 answer.inputType === "hours") && (
  //                 <>
  //                   <input
  //                     type="number"
  //                     value={num}
  //                     onChange={(e) => setNum(Number(e.target.value))}
  //                   />
  //                   <button onClick={() => handleValidate(answer, num)}>
  //                     OK
  //                   </button>
  //                 </>
  //               )}
  //               {answer.inputType === "check" && (
  //                 <>
  //                   <input
  //                     type="checkbox"
  //                     onChange={() => handleCheck(answer.id || 0)}
  //                   />
  //                   <button onClick={() => handleValidate(answer)}>Ok</button>
  //                 </>
  //               )}
  //             </li>
  //           );
  //         })}
  //       </ul>
  //       {question.id === 7 && (
  //         <button
  //           onClick={() => {
  //             setNextQuestion(3);
  //           }}
  //         >
  //           Suivant
  //         </button>
  //       )}
  //       {question.id === 8 && (
  //         <button
  //           onClick={() => {
  //             setNextQuestion(9);
  //           }}
  //         >
  //           Suivant
  //         </button>
  //       )}
  //       {question.id === 0 && <p>{`Le total a payer est de : ${total}`}</p>}
  //     </div>
  //   );
  // };

  return <div>{renderQuestion()}</div>;
}
