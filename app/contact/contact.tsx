"use client";

import { useSearchParams } from "next/navigation";
import ContactForm from "@/src/component/contact/contact";

export default function Contact() {
  const params = useSearchParams();
  const total = JSON.parse(params?.get("total") || "[]");
  const history = JSON.parse(params.get("history") || "[]");
  return (
    <div>
      <section id="form"></section>
      <ContactForm history={history} total={total} />
      <section id="contact-infos"></section>
    </div>
  );
}
