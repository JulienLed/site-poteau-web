import { PageTitle } from "@/utils/utils";
import AboutContent from "./AboutContent";

export default function About() {
  return (
    <div className="py-15">
      <section id="about" className="flex flex-col gap-30">
        <PageTitle title="Qui suis-je ?" />
        <AboutContent />
      </section>
    </div>
  );
}
