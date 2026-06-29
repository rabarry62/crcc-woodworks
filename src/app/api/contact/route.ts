import { NextRequest, NextResponse } from "next/server";

/*
  Contact form API route.
  When the user submits the form, this function runs on the server,
  calls the Resend API, and sends an email to the business.

  Setup: add RESEND_API_KEY=your_key_here to .env.local
  Get your key at: https://resend.com/api-keys
*/
export async function POST(req: NextRequest) {
  try {
    const { name, contact, message } = await req.json();

    /* Basic server-side validation — name and contact are required */
    if (!name?.trim() || !contact?.trim()) {
      return NextResponse.json(
        { error: "Name and contact are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    /*
      If the API key isn't set yet (e.g. during development),
      log the submission to the terminal instead of failing.
    */
    if (!apiKey) {
      console.log("[Contact form] Submission (Resend not configured):", {
        name,
        contact,
        message,
      });
      return NextResponse.json({ ok: true });
    }

    /* Send the email via Resend */
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        /* Update the `from` domain once crccwoodworks.ca is verified in Resend */
        from: "CRCC Woodworks <onboarding@resend.dev>",
        to: ["rabarry62@icloud.com"],
        subject: `New enquiry from ${name}`,
        text: [
          `Name: ${name}`,
          `Contact: ${contact}`,
          "",
          `Message:`,
          message?.trim() || "(no message provided)",
        ].join("\n"),
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("[Resend error]", errorText);
      return NextResponse.json({ error: "Failed to send." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[Contact API] Unexpected error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
