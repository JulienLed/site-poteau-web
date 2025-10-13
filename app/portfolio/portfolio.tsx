import Projets from "@/src/component/projets/Projets";
import { PageTitle } from "@/utils/utils";

export default function Portfolio() {
  return (
    <div className="py-15">
      <section id="presentation">
        <PageTitle title="Mes productions" />
      </section>
      <section id="projets">
        <Projets />
      </section>
    </div>
  );
}
