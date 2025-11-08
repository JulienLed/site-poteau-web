import Legals from "./legals";

export const metadata = {
  title: "Informations légales",
  description: "Les Informations légales du Poteau",
  keywords: [
    "développeur web",
    "création site internet",
    "Next.js",
    "Wavre",
    "freelance",
    "site vitrine",
  ],
  openGraph: {
    title: "Informations légales",
    description: "Les Informations légales du Poteau",
    url: "https://www.lepoteauduweb.be/legals",
    siteName: "Le Poteau du web",
    locale: "fr_BE",
    type: "website",
  },
};

export default function Page() {
  return <Legals />;
}
