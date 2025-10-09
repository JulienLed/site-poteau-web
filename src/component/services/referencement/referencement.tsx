import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

export default function Referencement() {
  return (
    <div className="space-y-12">
      <div
        className="flex items-center justify-center text-logo-blue font-title text-xl font-semibold
                   before:content-[''] before:flex-1 before:border-t before:border-logo-blue before:mr-4
                   after:content-[''] after:flex-1 after:border-t after:border-logo-blue after:ml-4"
      >
        Référencement
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 w-fit mx-auto my-20">
        <Card className="bg-logo-blue border-0 text-sandy-brown shadow-2xl px-5 py-10 order-1 w-[40vw]">
          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xl">
                <RiDoubleQuotesL className="text-2xl" />
                <span>
                  Faites grimper votre site dans les résultats de recherche.
                </span>
                <RiDoubleQuotesR className="text-2xl" />
              </div>

              <p>
                De la structure et la vitesse de chargement, aux balises,
                mots-clés, contenus et liens, chaque détail est travaillé pour
                améliorer votre visibilité sur les moteurs de recherche et
                attirer vos clients.
              </p>
            </div>
          </CardContent>
        </Card>

        <Image
          alt="Référencement"
          src="/seo.png"
          width={688}
          height={688}
          className="w-[15vw] max-w-full order-2 justify-self-center"
        />
      </div>
    </div>
  );
}
