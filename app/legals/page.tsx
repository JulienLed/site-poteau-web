import Legals from "./legals";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Le Poteau du Web",
  description:
    "Mentions légales du site Le Poteau du Web, développeur web freelance à Wavre, Belgique.",
  keywords: ["mentions légales", "Le Poteau du Web", "Wavre"],
  openGraph: {
    title: "Mentions légales — Le Poteau du Web",
    description: "Mentions légales du site Le Poteau du Web.",
    url: "https://www.lepoteauduweb.be/legals",
    siteName: "Le Poteau du Web",
    locale: "fr_BE",
    type: "website",
  },
};

export default function Page() {
  return <Legals />;
}
