"use client";

import ServicesMenu from "@/src/component/services/menu/services-menu";
import { useRef } from "react";
import ServicesAll from "@/src/component/services/servicesAll/servicesAll";
import { PageTitle } from "@/utils/utils";

export default function Services() {
  const refSite = useRef<HTMLDivElement>(null);
  const refReferencement = useRef<HTMLDivElement>(null);
  const refHebergement = useRef<HTMLDivElement>(null);
  const refMaintenance = useRef<HTMLDivElement>(null);

  const scrollToService = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="py-15">
      <div className="min-h-[25vh]">
        <PageTitle title="Services"></PageTitle>
      </div>
      <section id="services-menu" className="py-15">
        <ServicesMenu
          scrollToService={(service: string) => {
            switch (service) {
              case "site":
                scrollToService(refSite);
                break;
              case "referencement":
                scrollToService(refReferencement);
                break;
              case "hebergement":
                scrollToService(refHebergement);
                break;
              case "maintenance":
                scrollToService(refMaintenance);
                break;
              default:
                break;
            }
          }}
        />
      </section>
      <section id="services" className="mt-30 py-20">
        <ServicesAll
          refs={{
            site: refSite,
            referencement: refReferencement,
            hebergement: refHebergement,
            maintenance: refMaintenance,
          }}
        />
      </section>
    </div>
  );
}
