import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const services = [
  {
    key: "site",
    title: "Création de site Web",
    quote: "Je m'occupe de tout, selon vos envies.",
    description:
      "Je transforme votre vision en un site sur mesure, livré clé en main et prêt à l'emploi. Vous pouvez le gérer vous-même grâce à un CMS simple et intuitif, ou me confier sa maintenance et ses mises à jour pour rester tranquille.",
    img: {
      src: "/vitrine.png",
      width: 688,
      height: 688,
    },
  },
  {
    key: "referencement",
    title: "Référencement",
    quote: "Faites grimper votre site dans les résultats de recherche.",
    description:
      "De la structure et la vitesse de chargement, aux balises, mots-clés, contenus et liens, chaque détail est travaillé pour améliorer votre visibilité sur les moteurs de recherche et attirer vos clients.",
    img: {
      src: "/seo.png",
      width: 688,
      height: 688,
    },
  },
  {
    key: "maintenance",
    title: "Maintenance",
    quote: "Votre site toujours à jour et sans souci.",
    description:
      "Je m'occupe de la maintenance pour que vous n'ayez rien à gérer : mises à jour, sécurité, sauvegardes et petites modifications. Votre site reste performant, sûr et prêt à accueillir vos visiteurs en permanence.",
    img: {
      src: "/maintenance.png",
      width: 688,
      height: 688,
    },
  },
  {
    key: "hebergement",
    title: "Hébergement",
    quote: "Votre site en ligne, rapide et sûr, sans tracas.",
    description:
      "Je m'occupe de l'hébergement pour que vous n'ayez rien à gérer : votre site est toujours disponible, sécurisé et performant, prêt à accueillir vos visiteurs à tout moment.",
    img: {
      src: "/hebergement.png",
      width: 688,
      height: 688,
    },
  },
];

export default function ServicesAll({
  refs,
}: {
  refs: {
    site: React.RefObject<HTMLDivElement | null>;
    referencement: React.RefObject<HTMLDivElement | null>;
    hebergement: React.RefObject<HTMLDivElement | null>;
    maintenance: React.RefObject<HTMLDivElement | null>;
  };
}) {
  return (
    <div className="flex flex-col gap-50">
      {services.map((service, index) => {
        if (index % 2 > 0) {
          return (
            <div key={service.key} className="flex flex-col gap-[10vh]">
              <div
                ref={refs[service.key as keyof typeof refs]}
                className="flex items-center justify-center text-logo-blue font-title text-xl font-semibold
                   before:content-[''] before:flex-1 before:border-t before:border-logo-blue before:mr-4
                   after:content-[''] after:flex-1 after:border-t after:border-logo-blue after:ml-4"
              >
                {service.title}
              </div>

              <div className="flex items-center justify-evenly">
                <Card className="bg-logo-blue border-0 text-sandy-brown shadow-2xl p-10 w-[45vw]">
                  <CardContent>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-2 text-xl">
                        <RiDoubleQuotesL className="text-2xl" />
                        <span>{service.quote}</span>
                        <RiDoubleQuotesR className="text-2xl" />
                      </div>

                      <p>{service.description}</p>
                    </div>
                  </CardContent>
                </Card>
                <Image
                  alt={service.title}
                  src={service.img.src}
                  width={service.img.width}
                  height={service.img.height}
                  className="w-[15vw] max-w-full"
                />
              </div>
            </div>
          );
        } else if (index % 2 == 0) {
          return (
            <div key={service.key} className="flex flex-col gap-[10vh]">
              <div
                ref={refs[service.key as keyof typeof refs]}
                className="flex items-center justify-center text-logo-blue font-title text-xl font-semibold
                   before:content-[''] before:flex-1 before:border-t before:border-logo-blue before:mr-4
                   after:content-[''] after:flex-1 after:border-t after:border-logo-blue after:ml-4"
              >
                {service.title}
              </div>

              <div className="flex items-center justify-evenly">
                <Image
                  alt={service.title}
                  src={service.img.src}
                  width={service.img.width}
                  height={service.img.height}
                  className="w-[15vw] max-w-full"
                />
                <Card className="bg-logo-blue border-0 text-sandy-brown shadow-2xl p-10 w-[45vw]">
                  <CardContent>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-2 text-xl">
                        <RiDoubleQuotesL className="text-2xl" />
                        <span>{service.quote}</span>
                        <RiDoubleQuotesR className="text-2xl" />
                      </div>

                      <p>{service.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
