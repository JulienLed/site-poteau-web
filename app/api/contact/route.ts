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
    const data = await req.json();
    const { name, email, phone, message } = data;

    const info = await transporter.sendMail({
      from: `${name} <${email}>`, // sender address
      to: process.env.SMTP_USER, // list of receivers
      subject: `Nouveau message de ${name} - ${phone}`, // Subject line
      text: message, // plain text body
      html: message, // html body
    });
    console.log("Mail envoyé : " + message);
    return NextResponse.json({ data: JSON.stringify(data) });
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}
