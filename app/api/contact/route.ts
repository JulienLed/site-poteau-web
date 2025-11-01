"use server";

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body.mail;
    const token = body.token;

    //reCAPTCHA
    const secret = process.env.SECRET_CAPTCHA_KEY;
    const recaptchaRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${secret}&response=${token}`,
      }
    );

    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success) {
      console.log(recaptchaData.sucess);
      return NextResponse.json({
        success: false,
      });
    }

    //resend
    await resend.emails.send({
      from: "contact@lepoteauduweb.be",
      to: "contact@lepoteauduweb.be",
      subject: `Demande de contact reçue de ${name} - mail:${email} - tel:${phone} `,
      html: `<p>Nom: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
      replyTo: email,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) });
  }
}
