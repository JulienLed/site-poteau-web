"use server";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.mail.ovh.net",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const { name, email, phone, message } = await req.json();

    await transporter.sendMail({
      from: process.env.SMTP_USER, // toujours ton compte OVH
      replyTo: `${name} <${email}>`, // le client peut répondre
      to: process.env.SMTP_USER,
      subject: `Nouveau message de ${name} - ${phone}`,
      text: message,
      html: `<p>${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) });
  }
}
