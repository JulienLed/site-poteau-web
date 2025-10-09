import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

export default function Site() {
  return (
    <div className="space-y-12">
      <div
        className="flex items-center justify-center text-logo-blue font-title text-xl font-semibold
                   before:content-[''] before:flex-1 before:border-t before:border-logo-blue before:mr-4
                   after:content-[''] after:flex-1 after:border-t after:border-logo-blue after:ml-4"
      >
        Création de site Web
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 w-fit mx-auto my-20">
        <Image
          alt="Site Web"
          src="/vitrine.png"
          width={688}
          height={688}
          className="w-[15vw] max-w-full justify-self-center"
        />
        <Card className="bg-logo-blue border-0 text-sandy-brown shadow-2xl px-5 py-10 w-[40vw]">
          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xl">
                <RiDoubleQuotesL className="text-2xl" />
                <span>Je m'occupe de tout, selon vos envies.</span>
                <RiDoubleQuotesR className="text-2xl" />
              </div>

              <p>
                Je transforme votre vision en un site sur mesure, livré clé en
                main et prêt à l'emploi. Vous pouvez le gérer vous-même grâce à
                un CMS simple et intuitif, ou me confier sa maintenance et ses
                mises à jour pour rester tranquille.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
