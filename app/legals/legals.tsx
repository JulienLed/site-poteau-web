"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageTitle } from "@/utils/utils";
import { useState } from "react";

export default function Legals() {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <div>
      <div className="py-15">
        <PageTitle title="Politique de confidentialité" />
      </div>
      <div className="py-15 animate-fade-right">
        <Card className="bg-logo-blue border-0 text-sandy-brown text-base shadow-2xl px-3 md:px-8 py-12 mb-20 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl">
              Politique de confidentialité du Poteau
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 leading-relaxed">
            <p>
              {
                " Je prends très au sérieux la protection de vos données personnelles. Cette politique explique clairement quelles informations je collecte et comment je les utilise."
              }
            </p>

            <h2 className="font-semibold mt-4">
              1. Données collectées via le formulaire de contact
            </h2>
            <p>
              Lorsque vous utilisez mon formulaire de contact, je peux collecter
              les informations suivantes :
            </p>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Nom (facultatif)</li>
              <li>Adresse e-mail</li>
              <li>Numéro de téléphone</li>
              <li>{"Message que vous m'envoyez"}</li>
            </ul>
            <p>
              Ces informations me servent{" "}
              <strong>uniquement à répondre à vos demandes</strong>. Elles sont
              accessibles uniquement par moi. Vous pouvez demander leur
              modification ou suppression à tout moment.
            </p>

            <h2 className="font-semibold text-xl mt-4">2. Google Analytics</h2>
            <p>
              {
                "J'utilise Google Analytics pour analyser la fréquentation de mon site et améliorer votre expérience utilisateur."
              }
            </p>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>
                Les données collectées sont <strong>anonymisées</strong>{" "}
                (adresse IP partiellement masquée).
              </li>
              <li>
                {
                  "Aucune information personnelle identifiable n'est collectée par Google Analytics."
                }
              </li>
            </ul>
            <p>
              Je vous demande votre{" "}
              <strong>{"consentement avant d'activer ces cookies"}</strong>.
              {
                " Vous pouvez accepter ou refuser leur utilisation via la bannière qui s'affiche lors de votre première visite."
              }
            </p>

            <h2 className="font-semibold text-xl mt-4">3. Cookies</h2>
            <p>
              {
                " Mon site utilise uniquement des cookies nécessaires au fonctionnement de Google Analytics. Aucun autre cookie n'est utilisé pour le moment."
              }
            </p>

            <h2 className="font-semibold text-xl mt-4">4. Sécurité</h2>
            <p>
              Je mets en œuvre des mesures techniques et organisationnelles pour
              protéger vos données contre tout accès non autorisé, divulgation
              ou modification.
            </p>

            <h2 className="font-semibold text-xl mt-4">5. Vos droits</h2>
            <p>Vous disposez des droits suivants concernant vos données :</p>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Accès à vos données</li>
              <li>Rectification ou suppression</li>
              <li>Opposition à leur traitement</li>
            </ul>
            <p>
              Pour exercer vos droits, contactez-moi à :{" "}
              {showEmail ? (
                <span className="font-medium">contact@lepoteauduweb.be</span>
              ) : (
                <span
                  className="cursor-pointer underline hover:text-white transition-colors"
                  onClick={() => setShowEmail(true)}
                >
                  {"Afficher l'e-mail"}
                </span>
              )}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
