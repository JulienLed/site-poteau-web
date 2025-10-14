import { PageTitle } from "@/utils/utils";
import TarifQCM from "@/src/component/tarifs/TarifQCM";

export default function Tarifs() {
  return (
    <div>
      <PageTitle title="Tarifs" />
      <section id="tarifs">
        <TarifQCM />
      </section>
    </div>
  );
}
