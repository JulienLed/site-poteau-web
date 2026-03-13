import Projets from "@/src/component/projets/Projets";
import { PageIntro, PageTitle } from "@/utils/utils";

export default function Portfolio() {
  return (
    <div className="py-15">
      <section id="presentation">
        <PageTitle title="Productions" />
      </section>
      <PageIntro>
        <p className="text-base md:text-lg text-center md:text-justify">
          Voici un aperçu de sites que j'ai développés, couvrant différents types de projets : site vitrine express, site multi-pages avec CMS intégré, plateforme e-commerce et site associatif. Chaque projet illustre une approche adaptée à un besoin spécifique. Cliquez sur{" "}
          <span className="font-semibold">"En savoir plus"</span> pour découvrir les détails et les technologies utilisées.
        </p>
      </PageIntro>
      <section id="projets" className="py-15">
        <Projets />
      </section>
    </div>
  );
}
