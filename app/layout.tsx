import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import Footer from "@/src/component/footer/footer";
import Header from "@/src/component/header/header";
import Cookies from "@/src/component/cookies/cookies";
import BackToTop from "@/src/component/back-to-top/BackToTop";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lepoteauduweb.be"),
  title: "Le Poteau du Web — Développeur web freelance à Wavre",
  description:
    "Création de sites internet sur mesure à Wavre. Design, SEO, hébergement et maintenance. Solutions pour associations, TPE et indépendants. Devis gratuit.",
  keywords: [
    "développeur web Wavre",
    "création site internet Belgique",
    "freelance web Wavre",
    "site vitrine Belgique",
    "Next.js développeur",
    "site internet association",
    "développeur web freelance",
    "création site internet Brabant Wallon",
    "développeur web Brabant Wallon",
    "création site internet Nivelles",
    "création site internet Ottignies",
    "création site internet Louvain-la-Neuve",
    "création site internet Braine-l'Alleud",
    "création site internet Waterloo",
    "création site internet Rixensart",
    "création site internet La Hulpe",
    "site internet ASBL",
    "site web petit commerce",
    "site vitrine indépendant",
    "création site internet pas cher Belgique",
  ],
  openGraph: {
    title: "Le Poteau du Web — Développeur web freelance à Wavre",
    description:
      "Création de sites internet sur mesure à Wavre. Design, SEO, hébergement et maintenance. Solutions pour associations, TPE et indépendants.",
    url: "https://www.lepoteauduweb.be/",
    siteName: "Le Poteau du Web",
    locale: "fr_BE",
    type: "website",
    images: [
      {
        url: "/Le Poteau du Web.png",
        width: 1200,
        height: 630,
        alt: "Le Poteau du Web — Développeur web freelance à Wavre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Poteau du Web — Développeur web freelance à Wavre",
    description:
      "Création de sites internet sur mesure à Wavre. Design, SEO, hébergement et maintenance.",
    images: ["/Le Poteau du Web.png"],
  },
};

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${montserrat.variable} ${roboto.variable} flex flex-col w-full min-h-screen bg-[url(/bg.svg)] bg-no-repeat bg-cover`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["ProfessionalService", "LocalBusiness"],
                  "@id": "https://www.lepoteauduweb.be/#business",
                  name: "Le Poteau du Web",
                  url: "https://www.lepoteauduweb.be",
                  description:
                    "Développeur web freelance à Wavre proposant la création de sites internet sur mesure, référencement SEO, hébergement et maintenance.",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Wavre",
                    addressRegion: "Brabant Wallon",
                    addressCountry: "BE",
                  },
                  email: "contact@lepoteauduweb.be",
                  telephone: "+32456991653",
                  priceRange: "€€",
                  areaServed: [
                    "Wavre",
                    "Brabant Wallon",
                    "Nivelles",
                    "Ottignies-Louvain-la-Neuve",
                    "Braine-l'Alleud",
                    "Waterloo",
                    "Rixensart",
                    "La Hulpe",
                    "Genappe",
                    "Jodoigne",
                    "Court-Saint-Étienne",
                    "Lasne",
                    "Tubize",
                    "Chaumont-Gistoux",
                    "Perwez",
                    "Belgique",
                  ],
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Services web",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Création de site internet",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Référencement SEO",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Hébergement web",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Maintenance web",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "CRM et gestion des contacts",
                        },
                      },
                    ],
                  },
                  founder: { "@id": "https://www.lepoteauduweb.be/#person" },
                },
                {
                  "@type": "Person",
                  "@id": "https://www.lepoteauduweb.be/#person",
                  name: "Julien Ledent",
                  jobTitle: "Développeur Web Full-Stack",
                  url: "https://www.lepoteauduweb.be",
                  email: "contact@lepoteauduweb.be",
                  sameAs: [
                    "https://github.com/JulienLed",
                    "https://linkedin.com/in/julien-l-121357235",
                  ],
                  knowsAbout: [
                    "Next.js",
                    "React",
                    "JavaScript",
                    "TypeScript",
                    "SEO",
                    "Tailwind CSS",
                    "Node.js",
                    "PostgreSQL",
                  ],
                  worksFor: {
                    "@id": "https://www.lepoteauduweb.be/#business",
                  },
                },
              ],
            }),
          }}
        />
          <Header />
          <BackToTop />
          <div className="pt-14 md:pt-30 px-5 sm:px-50 flex-1 selection:!text-logo-blue selection:bg-sandy-brown overflow-clip">
            {children}
            <Cookies />
          </div>
          <div className="selection:!bg-logo-blue selection:text-sandy-brown">
            <Footer />
          </div>
      </body>
    </html>
  );
}
