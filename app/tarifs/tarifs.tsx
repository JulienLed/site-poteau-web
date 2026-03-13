import { PageIntro, PageTitle } from "@/utils/utils";
import TarifQCM from "@/src/component/tarifs/TarifQCM";
import TarifGrid from "@/src/component/tarifs/TarifGrid";

export default function Tarifs() {
  return (
    <div className="py-15">
      <PageTitle title="Tarifs" />

      <PageIntro>
        <p className="text-base md:text-lg text-center md:text-justify">
          Des tarifs clairs et transparents, sans mauvaise surprise. Le pack de base couvre l'essentiel pour lancer votre présence en ligne. Des options viennent s'y ajouter selon vos besoins. Utilisez le calculateur ci-dessous pour estimer votre projet en quelques clics.
        </p>
      </PageIntro>

      <section className="py-15 w-full md:w-[60vw] mx-auto">
        <TarifGrid />
      </section>

      <section id="tarifs" className="py-10 w-full md:w-[60vw] mx-auto animate-fade-up animate-duration-700 animate-ease-out animate-delay-200">
        <div className="flex flex-col gap-2 mb-8">
          <h3 className="text-xl md:text-2xl font-title font-semibold text-sandy-brown">
            Estimez votre projet
          </h3>
          <p className="text-lapis-lazuli text-sm md:text-base italic">
            * Cette estimation est indicative. Le prix final sera établi
            ensemble lors d&apos;une consultation et pourra varier selon la
            complexité réelle de votre projet.
          </p>
        </div>
        <TarifQCM />
      </section>
    </div>
  );
}
