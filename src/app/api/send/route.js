import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.NEXT_PUBLIC_APP_RESEND_API_KEY);

export async function POST(req) {
  const userData = await req.json();
  try {
    const data = await resend.emails.send({
      from: `${userData.name} ${userData.email}`,
      to: "mukulpadwal786@gmail.com",
      subject: `${userData.subject}`,
      html: `<body>${userData.message}</body>`,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
