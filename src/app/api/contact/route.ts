import { NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  location: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // In production, this would send an email or save to a database.
    // For now, we log the submission and return success.
    console.log("Contact form submission:", {
      name: data.name,
      email: data.email,
      phone: data.phone || "Not provided",
      location: data.location,
      message: data.message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Thank you for contacting us. We will get back to you shortly." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "An error occurred processing your request." },
      { status: 500 }
    );
  }
}
