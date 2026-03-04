"use client";

import { useSearchParams } from "next/navigation";
import ContactForm from "@/src/component/contact/contact";

export default function ContactContent() {
  const params = useSearchParams();
  const total = JSON.parse(params?.get("total") || "[]");
  const history = JSON.parse(params.get("history") || "[]");

  return <ContactForm history={history} total={total} />;
}
