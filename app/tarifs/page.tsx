import Tarifs from "./tarifs";

export const metadata = {
  title: "Les tarifs du Poteau",
  description: "Les tarifs que vous propose le Poteau",
  keywords: [
    "développeur web",
    "création site internet",
    "Next.js",
    "Wavre",
    "freelance",
    "site vitrine",
  ],
  openGraph: {
    title: "Les tarifs du Poteau",
    description: "Les tarifs que vous propose le Poteau",
    url: "https://www.lepoteauduweb.be/tarifs",
    siteName: "Le Poteau du web",
    locale: "fr_BE",
    type: "website",
  },
};

export default function Page() {
  return <Tarifs />;
}
