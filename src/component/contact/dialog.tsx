"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {
  isSent: boolean;
  setIsSent: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function DialogConfirm({ isSent, setIsSent }: Props) {
  return (
    <Dialog open={isSent} onOpenChange={setIsSent}>
      <DialogHeader style={{ visibility: "hidden" }}>
        <DialogTitle>{"Information sur l'envoi du mail"}</DialogTitle>
      </DialogHeader>
      <DialogContent className="flex flex-col items-center bg-logo-blue !border-2 border-sandy-brown text-sandy-brown shadow-2xl px-6 py-10 text-center">
        <h2 className="text-2xl font-bold">Votre mail a bien été envoyé !</h2>
        <p>Je vous recontacterai dès que possible</p>
        <Button className="bg-sandy-brown hover:!bg-sandy-brown/90 active:!translate-0.5 hover:!text-lapis-lazuli hover:!shadow-none shadow-2xs text-logo-blue text-lg transition-all duration-300 ease-in-out w-fit rounded-xl px-3 py-1">
          <Link href={"/"}>{"Retour Page d'accueil"}</Link>
        </Button>
      </DialogContent>
    </Dialog>
  );
}
