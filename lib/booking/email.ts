import { Resend } from "resend";
import type { Booking, Service } from "./types";
import { businessName } from "./config";

// Reuse the site's existing Resend configuration (same vars as the contact form).
const apiKey = process.env.RESEND_API_KEY?.trim();
const from =
  process.env.BOOKING_FROM_EMAIL?.trim() || "Layan Website <onboarding@resend.dev>";
const ownerEmail =
  process.env.BOOKING_TO_EMAIL?.trim() || "info@layanthaimassage.com.au";

const resend = apiKey ? new Resend(apiKey) : null;

/** Human-friendly "Monday, Jun 9 at 2:30 PM" from a "YYYY-MM-DDTHH:mm" string. */
function prettyWhen(start: string): string {
  const [date, time] = start.split("T");
  const [y, m, d] = date.split("-").map(Number);
  const [hh, mm] = time.split(":").map(Number);
  return new Date(y, m - 1, d, hh, mm).toLocaleString(undefined, {
    weekday: "long",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function esc(s: string): string {
  return s.replace(/[&<>"]/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!,
  );
}

/**
 * Send the visitor confirmation and the owner new-booking alert.
 * Best-effort: failures are logged but never block the booking response.
 */
export async function sendBookingEmails(
  booking: Booking,
  service: Service,
  cancelUrl: string,
): Promise<void> {
  if (!resend) {
    console.warn(
      "[email] RESEND_API_KEY not set — skipping booking emails. " +
        `Would have emailed ${booking.email}` +
        (ownerEmail ? ` and owner ${ownerEmail}.` : "."),
    );
    return;
  }

  const when = prettyWhen(booking.start);

  // Visitor confirmation
  const visitor = resend.emails.send({
    from,
    to: booking.email,
    subject: `Booking confirmed — ${service.name} on ${when}`,
    html: `
      <p>Hi ${esc(booking.name)},</p>
      <p>You're booked for <strong>${esc(service.name)}</strong> (${service.durationMin} min) on <strong>${esc(when)}</strong>.</p>
      <p>Need to cancel? Use this link — there's no login, the link is how you manage it:</p>
      <p><a href="${cancelUrl}">${cancelUrl}</a></p>
      <p>— ${esc(businessName)}</p>
    `,
  });

  // Owner alert
  const owner = ownerEmail
    ? resend.emails.send({
        from,
        to: ownerEmail,
        replyTo: booking.email,
        subject: `New booking — ${service.name}, ${when}`,
        html: `
          <p>New booking:</p>
          <ul>
            <li><strong>Service:</strong> ${esc(service.name)} (${service.durationMin} min)</li>
            <li><strong>When:</strong> ${esc(when)}</li>
            <li><strong>Name:</strong> ${esc(booking.name)}</li>
            <li><strong>Email:</strong> ${esc(booking.email)}</li>
            <li><strong>Phone:</strong> ${esc(booking.phone)}</li>
          </ul>
        `,
      })
    : Promise.resolve();

  const results = await Promise.allSettled([visitor, owner]);
  for (const r of results) {
    if (r.status === "rejected") console.error("[email] send failed:", r.reason);
  }
}
