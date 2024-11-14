import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // check required fields
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }
    console.log("Received data from form:", formData);

    return NextResponse.json({
      message: `Thank you for your message, ${formData.name}!\n\nYour message: ${formData.message}`,
    });
  } catch (error) {
    console.error("Error processing form:", error);

    return NextResponse.json(
      { error: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}
