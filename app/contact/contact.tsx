import { PageTitle } from "@/utils/utils";
import { Suspense } from "react";
import ContactContent from "./ContactContent";

export default function Contact() {
  return (
    <div className="py-15">
      <PageTitle title="Contact" />
      <section id="form" className="py-15">
        <Suspense>
          <ContactContent />
        </Suspense>
      </section>
    </div>
  );
}
