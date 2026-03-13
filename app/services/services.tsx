import { PageIntro, PageTitle } from "@/utils/utils";
import ServicesContent from "./ServicesContent";

export default function Services() {
  return (
    <div className="py-15">
      <div className="min-h-[20vh] md:min-h-[25vh]">
        <PageTitle title="Services" />
      </div>
      <PageIntro>
        <p className="text-base md:text-lg text-center md:text-justify">
          De la conception à la mise en ligne, je prends en charge chaque étape de votre projet web. Création de site sur mesure, optimisation SEO, hébergement sécurisé et maintenance annuelle : tout est pensé pour que votre site soit visible, performant et durable — sans jargon ni mauvaise surprise.
        </p>
      </PageIntro>
      <ServicesContent />
    </div>
  );
}
