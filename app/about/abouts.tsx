import { PageIntro, PageTitle } from "@/utils/utils";
import AboutContent from "./AboutContent";

export default function About() {
  return (
    <div className="py-15">
      <section id="about" className="flex flex-col gap-30">
        <PageTitle title="Qui suis-je ?" />
        <PageIntro>
          <p className="text-base md:text-lg text-center md:text-justify">
            Développeur web full-stack freelance basé à Wavre, en Brabant Wallon. Autodidacte passionné par les nouvelles technologies, je mets mes compétences au service des indépendants, des associations et des petits commerces qui veulent une présence en ligne sérieuse — à un tarif juste.
          </p>
        </PageIntro>
        <AboutContent />
      </section>
    </div>
  );
}
