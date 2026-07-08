import Link from "next/link";
import { findByToken } from "@/lib/booking/store";
import { services, businessName } from "@/lib/booking/config";
import { parseLocal } from "@/lib/booking/slots";
import { cancelAction } from "./actions";
import "../../book/book.css";

export const dynamic = "force-dynamic";

export const metadata = { title: "Manage booking" };

function pretty(start: string): string {
  const d = parseLocal(start);
  return d.toLocaleString(undefined, {
    weekday: "long",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default async function CancelPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const booking = await findByToken(token);

  return (
    <div className="sb bg-cream">
      <div className="wrap">
        <div className="card">
          {!booking ? (
            <>
              <h1>Booking not found</h1>
              <p className="sub">This cancel link is invalid or has expired.</p>
              <Link className="btn" href="/book">
                Book a time
              </Link>
            </>
          ) : booking.status === "cancelled" ? (
            <>
              <h1>Cancelled</h1>
              <p className="sub">This booking has been cancelled. The slot is free again.</p>
              <Link className="btn" href="/book">
                Book a new time
              </Link>
            </>
          ) : (
            <>
              <h1>Cancel this booking?</h1>
              <p className="sub">
                {services.find((s) => s.id === booking.serviceId)?.name ?? "Booking"} with{" "}
                {businessName}
              </p>
              <table className="table" style={{ marginBottom: 20 }}>
                <tbody>
                  <tr>
                    <th>When</th>
                    <td>{pretty(booking.start)}</td>
                  </tr>
                  <tr>
                    <th>Name</th>
                    <td>{booking.name}</td>
                  </tr>
                </tbody>
              </table>
              <form action={cancelAction.bind(null, token)}>
                <div className="row">
                  <button className="btn danger" type="submit">
                    Cancel booking
                  </button>
                  <Link className="btn ghost" href="/book">
                    Keep it
                  </Link>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
