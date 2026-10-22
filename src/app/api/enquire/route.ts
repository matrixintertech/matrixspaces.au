import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { fullName, organisation, email, phone, areaOfInterest, message } = data;

    // Field validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid full name." },
        { status: 400 }
      );
    }

    if (!organisation || typeof organisation !== "string" || organisation.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide your organisation or institution name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid institutional or work email address." },
        { status: 400 }
      );
    }

    if (!areaOfInterest || typeof areaOfInterest !== "string") {
      return NextResponse.json(
        { error: "Please select an area of interest." },
        { status: 400 }
      );
    }

    // In a live production deployment, this would securely forward to CRM / notification webhook.
    // We log the structured enquiry server-side:
    console.log("[Institutional Collaboration Enquiry Received]", {
      fullName: fullName.trim(),
      organisation: organisation.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || null,
      areaOfInterest,
      message: message?.trim() || null,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        referenceId: `MSA-${Date.now().toString(36).toUpperCase()}`,
        message:
          "Thank you for your interest in Matrix Spaces Australia. The coordination team has received your enquiry and will be in touch within 2 business days to arrange your 90-minute collaboration workshop.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Enquiry submission error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request. Please try again or reach out directly." },
      { status: 500 }
    );
  }
}
