import { PageIntro, PageTitle } from "@/utils/utils";
import { Suspense } from "react";
import ContactContent from "./ContactContent";

export default function Contact() {
  return (
    <div className="py-15">
      <PageTitle title="Contact" />
      <PageIntro>
        <p className="text-base md:text-lg text-center md:text-justify mb-8">
          Vous avez un projet de site internet, une question sur mes services ou vous souhaitez obtenir un devis gratuit ? Je suis disponible pour en discuter, sans engagement. Remplissez le formulaire ci-dessous ou contactez-moi directement — je réponds toujours personnellement.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="mailto:contact@lepoteauduweb.be"
            className="bg-white/10 rounded-xl px-6 py-4 text-center hover:bg-white/20 transition-colors duration-200 cursor-pointer"
          >
            <p className="font-semibold font-title text-base md:text-lg mb-1">Email</p>
            <p className="text-sm md:text-base">contact@lepoteauduweb.be</p>
          </a>
          <a
            href="tel:+32456991653"
            className="bg-white/10 rounded-xl px-6 py-4 text-center hover:bg-white/20 transition-colors duration-200 cursor-pointer"
          >
            <p className="font-semibold font-title text-base md:text-lg mb-1">Téléphone</p>
            <p className="text-sm md:text-base">+32 456 99 16 53</p>
          </a>
          <div className="bg-white/10 rounded-xl px-6 py-4 text-center">
            <p className="font-semibold font-title text-base md:text-lg mb-1">Délai de réponse</p>
            <p className="text-sm md:text-base">Sous 24 à 48h</p>
          </div>
        </div>
      </PageIntro>
      <section id="form" className="py-15">
        <Suspense>
          <ContactContent />
        </Suspense>
      </section>
    </div>
  );
}
