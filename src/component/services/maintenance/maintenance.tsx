import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

export default function Maintenance() {
  return (
    <div className="space-y-12">
      <div
        className="flex items-center justify-center text-logo-blue font-title text-xl font-semibold
                   before:content-[''] before:flex-1 before:border-t before:border-logo-blue before:mr-4
                   after:content-[''] after:flex-1 after:border-t after:border-logo-blue after:ml-4"
      >
        Maintenance
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 w-fit mx-auto my-20">
        <Card className="bg-logo-blue border-0 text-sandy-brown shadow-2xl px-5 py-10 order-1 w-[40vw]">
          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xl">
                <RiDoubleQuotesL className="text-2xl" />
                <span>Votre site toujours à jour et sans souci.</span>
                <RiDoubleQuotesR className="text-2xl" />
              </div>

              <p>
                Je m'occupe de la maintenance pour que vous n'ayez rien à gérer
                : mises à jour, sécurité, sauvegardes et petites modifications.
                Votre site reste performant, sûr et prêt à accueillir vos
                visiteurs en permanence.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Image à droite */}
        <Image
          alt="Maintenance"
          src="/maintenance.png"
          width={688}
          height={688}
          className="w-[15vw] max-w-full justify-self-center order-2"
        />
      </div>
    </div>
  );
}
