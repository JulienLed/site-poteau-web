"use client";

import { useSearchParams } from "next/navigation";
import ContactForm from "@/src/component/contact/contact";
import { PageTitle } from "@/utils/utils";

export default function Contact() {
  const params = useSearchParams();
  const total = JSON.parse(params?.get("total") || "[]");
  const history = JSON.parse(params.get("history") || "[]");
  return (
    <div className="py-15">
      <PageTitle title="Qui suis-je ?" />
      <section id="form"></section>
      <ContactForm history={history} total={total} />
      <section id="contact-infos"></section>
    </div>
  );
}
