import Projets from "@/src/component/projets/Projets";
import { PageTitle } from "@/utils/utils";

export default function Portfolio() {
  return (
    <div className="py-15">
      <section id="presentation">
        <PageTitle title="Productions" />
      </section>
      <section id="projets" className="py-15">
        <Projets />
      </section>
    </div>
  );
}
