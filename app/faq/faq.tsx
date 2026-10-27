import { PageIntro, PageTitle } from "@/utils/utils";
import { faqs } from "@/src/data/faq-data";
import FaqItem from "./FaqItem";

export default function Faq() {
  return (
    <div className="py-15">
      <PageTitle title="FAQ" />
      <PageIntro>
        <p className="text-base md:text-lg text-center md:text-justify">
          Vous avez des questions avant de vous lancer ? C&apos;est normal. Voici les réponses aux interrogations les plus fréquentes sur la création de site, les tarifs, les délais et mon fonctionnement. Si votre question n&apos;est pas là, n&apos;hésitez pas à me contacter directement.
        </p>
      </PageIntro>
      <section id="faq-list" className="pt-4 pb-16 px-1 flex flex-col items-center gap-4">
        {faqs.map((faq, i) => (
          <FaqItem key={i} question={faq.question} answer={faq.answer} index={i} />
        ))}
      </section>
    </div>
  );
}
