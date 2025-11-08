import Portfolio from "./portfolio";

export const metadata = {
  title: "Les Productions du Poteau",
  description: "Les site internet créés par le Poteau",
  keywords: [
    "développeur web",
    "création site internet",
    "Next.js",
    "Wavre",
    "freelance",
    "site vitrine",
  ],
  openGraph: {
    title: "Les Productions du Poteau",
    description: "Les site internet créés par le Poteau",
    url: "https://www.lepoteauduweb.be/portfolio",
    siteName: "Le Poteau du web",
    locale: "fr_BE",
    type: "website",
  },
};

export default function Page() {
  return <Portfolio />;
}
