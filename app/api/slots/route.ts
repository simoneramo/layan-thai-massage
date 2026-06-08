import { NextRequest, NextResponse } from "next/server";
import { services } from "@/lib/booking/config";
import { getConfirmed } from "@/lib/booking/store";
import { availableSlots } from "@/lib/booking/slots";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("service");
  const service = services.find((s) => s.id === id);
  if (!service) {
    return NextResponse.json({ error: "Unknown service" }, { status: 400 });
  }
  const confirmed = await getConfirmed();
  return NextResponse.json({ days: availableSlots(service, confirmed) });
}
