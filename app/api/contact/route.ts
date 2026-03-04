"use server";

import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/src/lib/contact-schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { mail, token } = body;

    // Zod validation
    const result = contactSchema.safeParse(mail);
    if (!result.success) {
      return NextResponse.json({ success: false, error: "Données invalides" });
    }
    const { name, email, phone, message } = result.data;

    // reCAPTCHA
    const secret = process.env.SECRET_CAPTCHA_KEY;
    const recaptchaRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${secret}&response=${token}`,
      }
    );
    const recaptchaData = await recaptchaRes.json();
    if (!recaptchaData.success) {
      return NextResponse.json({ success: false });
    }

    // Resend
    await resend.emails.send({
      from: "contact@lepoteauduweb.be",
      to: "contact@lepoteauduweb.be",
      subject: `Demande de contact reçue de ${name} - mail:${email} - tel:${phone}`,
      html: `<p>Nom: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) });
  }
}
