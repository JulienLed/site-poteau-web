"use server";

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    resend.emails.send({
      from: "contact@lepoteauduweb.be",
      to: "contact@lepoteauduweb.be",
      subject: `Demande de contact reçue de ${name} - mail:${email} - tel:${phone} `,
      html: message,
      replyTo: email,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) });
  }
}
