"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { useEffect, useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import DialogConfirm from "./dialog";
import ReCAPTCHA from "react-google-recaptcha";
import { contactSchema } from "@/src/lib/contact-schema";
import { z } from "zod";

// Google test sitekey used as fallback in dev when NEXT_PUBLIC_SITE_KEY is not set
const SITEKEY =
  process.env.NEXT_PUBLIC_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

type History = {
  question: string;
  keyword: string;
  answer: string;
  cost: number;
};

type Props = {
  history: History[];
  total: number;
};

type FormErrors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

export default function ContactForm({ history, total }: Props) {
  const captchaRef = useRef<ReCAPTCHA | null>(null);

  const [mail, setMail] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSent, setIsSent] = useState<boolean>(false);

  useEffect(() => {
    if (history.length > 0 && total) {
      const messageArr = history.map((h) => {
        if (h.cost !== 0) return `${h.keyword} - ${h.cost}€\n`;
      });
      messageArr.unshift(
        "Je souhaiterai discuter avec vous de mon projet.\nJ'aimerai que s'y retrouve :\n\n"
      );
      messageArr.push(
        `Total: ${total}\nMerci de me recontacter pour en discuter\n\nBien à vous,\n${mail.name}`
      );
      setMail((prev) => ({ ...prev, message: messageArr.join("") }));
    }
  }, [history, total, mail.name]);

  const handleFetchContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = contactSchema.safeParse(mail);
    if (!result.success) {
      const flattened = result.error.flatten().fieldErrors;
      const fieldErrors: FormErrors = {};
      for (const [key, messages] of Object.entries(flattened)) {
        if (messages?.[0]) fieldErrors[key as keyof FormErrors] = messages[0];
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});

    const token = captchaRef.current?.getValue();
    if (!token) {
      alert("Veuillez valider le captcha");
      return;
    }
    captchaRef.current?.reset();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mail, token }),
    });
    const data = await response.json();
    if (data) setIsSent(true);
  };

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    setMail((prev) => ({ ...prev, [target.id]: target.value }));
    if (errors[target.id as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [target.id]: undefined }));
    }
  };

  return (
    <>
      <div className="flex justify-center animate-fade-right w-full">
        <Card className="w-[85vw] md:w-[50vw] bg-logo-blue border-0 text-sandy-brown shadow-2xl px-2 md:px-5 py-5 md:py-10 mb-20">
          <CardContent className="w-full">
            <form className="w-full" onSubmit={handleFetchContact}>
              <div className="flex flex-col gap-5 w-full">
                <div className="w-full md:max-w-[20vw]">
                  <Label htmlFor="name">
                    <p>Votre Nom</p>
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    value={mail.name}
                    onChange={handleOnChange}
                    className="!text-base md:!text-lg"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div className="w-full md:max-w-[20vw]">
                  <Label htmlFor="email">
                    <p>Votre Email</p>
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    value={mail.email}
                    onChange={handleOnChange}
                    className="!text-base md:!text-lg"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div className="w-full md:max-w-[20vw]">
                  <Label htmlFor="phone">
                    <p>Votre numéro de téléphone</p>
                  </Label>
                  <Input
                    type="text"
                    id="phone"
                    value={mail.phone}
                    onChange={handleOnChange}
                    className="!text-base md:!text-lg"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="message">
                    <p>Votre message</p>
                  </Label>
                  <Textarea
                    id="message"
                    value={mail.message}
                    onChange={handleOnChange}
                    className="w-full h-[30vh] !text-base md:!text-lg"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>
                <div className="!scale-60 sm:!scale-70 md:!scale-100 origin-left">
                  <ReCAPTCHA sitekey={SITEKEY} ref={captchaRef} />
                </div>
                <Button
                  aria-label="send"
                  className="bg-sandy-brown hover:!bg-sandy-brown/90 active:!translate-0.5 hover:!text-lapis-lazuli hover:!shadow-none shadow-2xs text-logo-blue text-base md:text-lg transition-all duration-300 ease-in-out w-fit rounded-xl px-3 py-1"
                  type="submit"
                >
                  Envoyer
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      <DialogConfirm isSent={isSent} setIsSent={setIsSent} />
    </>
  );
}
