"use server";

import { Resend } from "resend";

export type BookingState = {
  status: "idle" | "success" | "error";
  message?: string;
  name?: string;
};

export async function sendBooking(
  _prev: BookingState,
  formData: FormData
): Promise<BookingState> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const subject = String(formData.get("subject") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !phone) {
    return { status: "error", message: "Please add your name, phone and email so we can get back to you." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      status: "error",
      message: "The contact form isn't available right now — please call us on 0451 250 064.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const to = process.env.BOOKING_TO_EMAIL || "info@layanthaimassage.com.au";
    const from = process.env.BOOKING_FROM_EMAIL || "Layan Website <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `New enquiry${subject ? ` — ${subject}` : ""} — ${name}`,
      text: [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Subject: ${subject || "—"}`,
        "",
        "Message:",
        message || "(none)",
      ].join("\n"),
    });

    if (error) {
      return { status: "error", message: "Something went wrong sending your message. Please call us on 0451 250 064." };
    }
    return { status: "success", name };
  } catch {
    return { status: "error", message: "Something went wrong sending your message. Please call us on 0451 250 064." };
  }
}
