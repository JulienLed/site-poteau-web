'use server'

import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST () {
    const transporter = nodemailer.createTransport({
        host: "smtp.mail.ovh.net",
        port: 465,
        secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
    })
}