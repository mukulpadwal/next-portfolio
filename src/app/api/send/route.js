import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.NEXT_PUBLIC_APP_RESEND_API_KEY);

export async function POST(req) {
  const { name, email, subject, message } = req.json();
  console.log(name);
  try {
    const data = await resend.emails.send({
      from: `${name} ${email}`,
      to: "mukulpadwal786@gmail.com",
      subject: `${subject}`,
      html: `<body>${message}</body>`,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
