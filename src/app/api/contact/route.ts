import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Please enter a message of at least 10 characters." },
        { status: 400 }
      );
    }

    // Node.js server-side processing log
    const timestamp = new Date().toISOString();
    console.log(`[Node.js Contact API] Received submission at ${timestamp}:`, {
      from: `${name} <${email}>`,
      subject: subject || "Portfolio Inbound Inquiry",
      messageLength: message.length,
    });

    // Simulate async delivery delay (e.g. sending via SendGrid / Resend / Nodemailer)
    await new Promise((resolve) => setTimeout(resolve, 600));

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! Your message was received and I will reply within 24 hours.",
        receivedAt: timestamp,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Node.js Contact API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your request. Please try again.",
      },
      { status: 500 }
    );
  }
}
