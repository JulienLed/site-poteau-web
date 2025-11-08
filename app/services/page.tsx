import Services from "./services";

export const metadata = {
  title: "les services du Poteau",
  description:
    "Les services que vous propose le Poteau, comme la création de A à Z de votre site Internet",
  keywords: [
    "développeur web",
    "création site internet",
    "Next.js",
    "Wavre",
    "freelance",
    "site vitrine",
  ],
  openGraph: {
    title: "Les services du Poteau",
    description:
      "Les services que vous propose le Poteau, comme la création de A à Z de votre site Internet",
    url: "https://www.lepoteauduweb.be/services",
    siteName: "Le Poteau du web",
    locale: "fr_BE",
    type: "website",
  },
};

export default function Page() {
  return <Services />;
}
