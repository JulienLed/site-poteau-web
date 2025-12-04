import About from "./abouts";

export const metadata = {
  title: "A propos du Poteau",
  description:
    "Petite présentation qui résume le parcours et les qualifications du Poteau, développeur web à Wavre",
  keywords: [
    "développeur web",
    "création site internet",
    "Next.js",
    "Wavre",
    "freelance",
    "site vitrine",
  ],
  openGraph: {
    title: "À propos du Poteau",
    description: "Présentation du Poteau, développeur web à Wavre.",
    url: "https://www.lepoteauduweb.be/about",
    siteName: "Le Poteau du web",
    locale: "fr_BE",
    type: "website",
  },
};

export default function Page() {
  return <About />;
}
