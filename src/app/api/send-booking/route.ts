import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { date, time, fullName, email, projectDescription } =
      await request.json();

    const emailData = {
      to: "hello@witinnovations.com.ng",
      subject: `New Meeting Booking - ${fullName}`,
      html: `
        <h2>New Meeting Booking</h2>
        <p><strong>Date:</strong> July ${date}, 2025</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Description:</strong></p>
        <p>${projectDescription}</p>
      `,
    };

    console.log("New booking received:", emailData);

    return NextResponse.json({
      success: true,
      message: "Booking submitted successfully",
    });
  } catch (error) {
    console.error("Error processing booking:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process booking" },
      { status: 500 }
    );
  }
}
