import { NextRequest, NextResponse } from "next/server";
import { randomUUID, randomBytes } from "crypto";
import { services } from "@/lib/booking/config";
import { tryCreate } from "@/lib/booking/store";
import { isValidFreeSlot, endFor } from "@/lib/booking/slots";
import { sendBookingEmails } from "@/lib/booking/email";
import type { Booking } from "@/lib/booking/types";

export const dynamic = "force-dynamic";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  const serviceId = String(body.serviceId ?? "");
  const start = String(body.start ?? "");
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();

  const service = services.find((s) => s.id === serviceId);
  if (!service) return NextResponse.json({ error: "Unknown service." }, { status: 400 });

  // All three contact fields are mandatory.
  if (!name) return NextResponse.json({ error: "Full name is required." }, { status: 400 });
  if (!emailRe.test(email))
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  if (phone.replace(/\D/g, "").length < 7)
    return NextResponse.json({ error: "A valid phone number is required." }, { status: 400 });

  const cancelToken = randomBytes(16).toString("hex");
  const booking: Booking = {
    id: randomUUID(),
    serviceId,
    start,
    end: endFor(service, start),
    name,
    email,
    phone,
    status: "confirmed",
    cancelToken,
    createdAt: new Date().toISOString(),
  };

  const result = await tryCreate(booking, (confirmed) =>
    isValidFreeSlot(service, start, confirmed),
  );

  if (!result.ok) {
    return NextResponse.json({ error: result.reason }, { status: 409 });
  }

  // Prefer the real request origin (works on any port/host); env is an override
  // for when the public URL differs from the internal one (e.g. behind a proxy).
  const base = (process.env.NEXT_PUBLIC_BASE_URL || "").trim() || req.nextUrl.origin;
  const cancelUrl = `${base}/cancel/${cancelToken}`;

  // Best-effort notifications — don't let email problems fail the booking.
  await sendBookingEmails(booking, service, cancelUrl);

  return NextResponse.json({ ok: true, cancelUrl });
}
