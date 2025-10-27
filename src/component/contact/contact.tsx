"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import DialogConfirm from "./dialog";

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

type Mail = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactForm({ history, total }: Props) {
  const [mail, setMail] = useState<Mail>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
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
      const message = messageArr.join("");

      setMail((prev) => ({ ...prev, message: message }));
    }
  }, [history, total, mail.name]);

  const handleFetchContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mail),
    });
    const data = await response.json();
    if (data) {
      setIsSent(true);
      console.log("Mail envoyé, Dialog devrait s'ouvrir");
    }
  };

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    setMail((prev) => ({ ...prev, [target.id]: target.value }));
  };

  return (
    <>
      <div className="flex justify-center animate-fade-right w-full">
        <Card className="w-[85vw] md:w-[50vw] bg-logo-blue border-0 text-sandy-brown shadow-2xl px-2 md:px-5 py-5 md:py-10 mb-20">
          <CardContent className="w-full">
            <form className="w-full" onSubmit={(e) => handleFetchContact(e)}>
              <div className="flex flex-col gap-5 w-full">
                <div className="w-full md:max-w-[20vw]">
                  <Label htmlFor="name">
                    <p>Votre Nom</p>
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    value={mail.name}
                    onChange={(e) => handleOnChange(e)}
                    className="!text-base md:!text-lg"
                    required
                  />
                </div>
                <div className="w-full md:max-w-[20vw]">
                  <Label htmlFor="email">
                    <p>Votre Email</p>
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    value={mail.email}
                    onChange={(e) => handleOnChange(e)}
                    className="!text-base md:!text-lg"
                    required
                  />
                </div>
                <div className="w-full md:max-w-[20vw]">
                  <Label htmlFor="phone">
                    <p>Votre numéro de téléphone</p>
                  </Label>
                  <Input
                    type="text"
                    id="phone"
                    value={mail.phone}
                    onChange={(e) => handleOnChange(e)}
                    className="!text-base md:!text-lg"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">
                    <p>Votre message</p>
                  </Label>
                  <Textarea
                    id="message"
                    value={mail.message}
                    onChange={(e) => handleOnChange(e)}
                    className="w-full h-[30vh] !text-base md:!text-lg"
                    required
                  ></Textarea>
                </div>
                <Button
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
