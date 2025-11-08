import Contact from "./contact";

export const metadata = {
  title: "Contacter le Poteau",
  description:
    "Comment contacter le Poteau pour poser une question ou débuter un projet de site intenet",
  keywords: [
    "développeur web",
    "création site internet",
    "Next.js",
    "Wavre",
    "freelance",
    "site vitrine",
  ],
  openGraph: {
    title: "Contacter Poteau",
    description:
      "Comment contacter le Poteau pour poser une question ou débuter un projet de site intenet",
    url: "https://www.lepoteauduweb.be/contact",
    siteName: "Le Poteau du web",
    locale: "fr_BE",
    type: "website",
  },
};

export default function Page() {
  return <Contact />;
}
