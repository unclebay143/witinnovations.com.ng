import { Resend } from "resend";
import { type NextRequest, NextResponse } from "next/server";

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    console.log("API route called - starting email send process");

    // Check if API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set in environment variables");
      return NextResponse.json(
        { success: false, error: "Resend API key not configured" },
        { status: 500 }
      );
    }

    const body = await request.json();

    const { name, email, message, date, time, month, year } = body;

    if (!name || !email || !date || !time || !month || !year) {
      console.error("Missing required fields:", {
        name,
        email,
        date,
        time,
        month,
        year,
      });
      return NextResponse.json(
        { success: false, error: "Missing required booking information" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      console.error("Invalid email format:", email);
      return NextResponse.json(
        { success: false, error: "Invalid email address format" },
        { status: 400 }
      );
    }

    // Send business email first - this includes client details for your reference
    const businessEmail = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["harunaalihidris@gmail.com"],
      subject: `New Booking: ${name} - ${month} ${date}, ${year}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #024FF0; border-bottom: 2px solid #024FF0; padding-bottom: 10px;">
            New Booking Received
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Booking Details</h3>
            <p><strong>Date:</strong> ${month} ${date}, ${year}</p>
            <p><strong>Time:</strong> ${time} (Lagos Time)</p>
            <p><strong>Duration:</strong> 30 minutes</p>
            <p><strong>Meeting Type:</strong> Google Meet</p>
          </div>

          <div style="background-color: #fff; border: 1px solid #e9ecef; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Client Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${
              message
                ? `<p><strong>Message:</strong></p><p style="background-color: #f8f9fa; padding: 10px; border-radius: 4px;">${message}</p>`
                : ""
            }
          </div>

          <div style="background-color: #024FF0; color: white; padding: 15px; border-radius: 8px; text-align: center;">
            <p style="margin: 0;">
              <strong>Action Required:</strong> Please manually send the Google Meet link and confirmation to: ${email}
            </p>
          </div>

          <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h4 style="margin-top: 0; color: #856404;">Email Template for Client:</h4>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 4px; font-family: monospace; font-size: 12px;">
              <p><strong>Subject:</strong> Booking Confirmed - ${month} ${date}, ${year} at ${time}</p>
              <hr>
              <p>Hi ${name},</p>
              <p>Thank you for scheduling a consultation with us. Your meeting has been confirmed for:</p>
              <p><strong>📅 Date:</strong> ${month} ${date}, ${year}</p>
              <p><strong>🕐 Time:</strong> ${time} (Lagos Time)</p>
              <p><strong>⏱️ Duration:</strong> 30 minutes</p>
              <p><strong>🎥 Platform:</strong> Google Meet</p>
              <p>Google Meet Link: [INSERT MEET LINK HERE]</p>
              <p>Looking forward to speaking with you!</p>
            </div>
          </div>
        </div>
      `,
    });

    console.log("Business email result:", businessEmail);

    if (businessEmail.error) {
      console.error("Business email failed:", businessEmail.error);
      return NextResponse.json(
        {
          success: false,
          error: `Business email failed: ${businessEmail.error.message}`,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      businessEmailId: businessEmail.data?.id,
      note: "Booking confirmed! Business notification sent. Client will be contacted manually.",
      clientEmail: email,
      requiresManualFollowup: true,
    });
  } catch (error) {
    console.error("Error sending booking emails:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send booking emails",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
