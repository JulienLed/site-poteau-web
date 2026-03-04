import { PageTitle } from "@/utils/utils";
import TarifQCM from "@/src/component/tarifs/TarifQCM";
import TarifGrid from "@/src/component/tarifs/TarifGrid";

export default function Tarifs() {
  return (
    <div className="py-15">
      <PageTitle title="Tarifs" />

      <section className="py-15 w-[85vw] mx-auto md:w-[60vw]">
        <TarifGrid />
      </section>

      <section id="tarifs" className="py-10 w-[85vw] mx-auto md:w-[60vw]">
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
