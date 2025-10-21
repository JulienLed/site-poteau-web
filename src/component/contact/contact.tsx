"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type History = {
  question: string;
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
    console.log(data.message);
  };

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    setMail((prev) => ({ ...prev, [target.id]: target.value }));
  };

  return (
    <div className="flex justify-center">
      <Card className="w-[50vw] bg-logo-blue border-0 text-sandy-brown shadow-2xl px-5 py-10 mb-20">
        <CardContent>
          <form onSubmit={(e) => handleFetchContact(e)}>
            <div className="flex flex-col gap-5">
              <div className="max-w-[20vw]">
                <Label htmlFor="name">
                  <p>Votre Nom</p>
                </Label>
                <Input
                  type="text"
                  id="name"
                  value={mail.name}
                  onChange={(e) => handleOnChange(e)}
                  className="!text-lg"
                  required
                />
              </div>
              <div className="max-w-[20vw]">
                <Label htmlFor="email">
                  <p>Votre Email</p>
                </Label>
                <Input
                  type="email"
                  id="email"
                  value={mail.email}
                  onChange={(e) => handleOnChange(e)}
                  className="!text-lg"
                  required
                />
              </div>
              <div className="max-w-[20vw]">
                <Label htmlFor="phone">
                  <p>Votre numéro de téléphone</p>
                </Label>
                <Input
                  type="text"
                  id="phone"
                  value={mail.phone}
                  onChange={(e) => handleOnChange(e)}
                  className="!text-lg"
                  required
                />
              </div>
              <div className="">
                <Label htmlFor="message">
                  <p>Votre message</p>
                </Label>

                {total > 0 ? (
                  <Textarea
                    id="message"
                    value={mail.message}
                    onChange={(e) => handleOnChange(e)}
                    className="w-full h-[30vh] !text-lg"
                    required
                  ></Textarea>
                ) : (
                  <Textarea
                    id="message"
                    className="w-full h-[30vh] !text-lg"
                    required
                  ></Textarea>
                )}
              </div>
              <Button
                className="bg-sandy-brown hover:!bg-sandy-brown/90 active:!translate-0.5 hover:!text-lapis-lazuli hover:!shadow-none shadow-2xs text-logo-blue text-lg transition-all duration-300 ease-in-out w-fit rounded-xl px-3 py-1"
                type="submit"
              >
                Envoyer
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
