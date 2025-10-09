"use client";

import ServicesMenu from "@/src/component/services/menu/services-menu";
import { useRef } from "react";
import Site from "@/src/component/services/site/site";
import Referencement from "@/src/component/services/referencement/referencement";
import Hebergement from "@/src/component/services/hebergement/hebergement";
import Maintenance from "@/src/component/services/maintenance/maintenance";

export default function Services() {
  const refSite = useRef<HTMLDivElement>(null);
  const refReferencement = useRef<HTMLDivElement>(null);
  const refHebergement = useRef<HTMLDivElement>(null);
  const refMaintenance = useRef<HTMLDivElement>(null);

  const scrollToService = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <section id="services-menu">
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
      <section id="services" className="mt-30">
        <div className="" ref={refSite}>
          <Site />
        </div>
        <div className="" ref={refReferencement}>
          <Referencement />
        </div>
        <div className="" ref={refHebergement}>
          <Hebergement />
        </div>
        <div className="" ref={refMaintenance}>
          <Maintenance />
        </div>
      </section>
    </div>
  );
}
