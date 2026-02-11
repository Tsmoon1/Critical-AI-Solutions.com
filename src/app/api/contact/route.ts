import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const { name, email, business, pain } = await request.json();

    if (!name || !email || !business) {
        return NextResponse.json(
            { error: "Name, email, and business description are required." },
            { status: 400 }
        );
    }

    const { error } = await resend.emails.send({
        from: "Critical AI Solutions <onboarding@resend.dev>",
        to: process.env.CONTACT_EMAIL!,
        replyTo: email,
        subject: `New Discovery Request from ${name}`,
        text: [
            `Name: ${name}`,
            `Email: ${email}`,
            `Business: ${business}`,
            pain ? `Pain Point: ${pain}` : null,
        ]
            .filter(Boolean)
            .join("\n\n"),
    });

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
}
