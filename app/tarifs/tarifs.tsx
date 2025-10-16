import { PageTitle } from "@/utils/utils";
import TarifQCM from "@/src/component/tarifs/TarifQCM";

export default function Tarifs() {
  return (
    <div className="py-15">
      <PageTitle title="Tarifs" />
      <section id="tarifs" className="py-15">
        <TarifQCM />
      </section>
    </div>
  );
}
