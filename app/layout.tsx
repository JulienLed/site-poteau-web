import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import Footer from "./footer";
import Header from "./header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Le site du Poteau du Web",
  description:
    "Bienvenue sur le site du Poteau du Web, le developpeur web qui vous accompagne et vous soutien dans la création de votre site web",
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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${montserrat.variable} ${roboto.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
