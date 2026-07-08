import { isAdmin } from "@/lib/booking/auth";
import { getBookings } from "@/lib/booking/store";
import { services, businessName } from "@/lib/booking/config";
import { parseLocal } from "@/lib/booking/slots";
import { loginAction, logoutAction, adminCancelAction } from "./actions";
import "../book/book.css";

export const dynamic = "force-dynamic";

export const metadata = { title: "Bookings admin", robots: { index: false } };

function pretty(start: string): string {
  return parseLocal(start).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function serviceName(id: string): string {
  return services.find((s) => s.id === id)?.name ?? id;
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  if (!(await isAdmin())) {
    return (
      <div className="sb bg-cream">
        <div className="wrap">
          <div className="card" style={{ maxWidth: 380, margin: "0 auto" }}>
            <h1>Admin</h1>
            <p className="sub">Enter the password to manage bookings.</p>
            <form action={loginAction}>
              <label className="field">
                <span>Password</span>
                <input name="password" type="password" autoFocus />
              </label>
              {error && <p className="error">Wrong password.</p>}
              <button className="btn" type="submit" style={{ marginTop: 8 }}>
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  const all = await getBookings();
  const now = new Date();
  const upcoming = all
    .filter((b) => b.status === "confirmed" && parseLocal(b.start) >= now)
    .sort((a, b) => a.start.localeCompare(b.start));
  const rest = all
    .filter((b) => !(b.status === "confirmed" && parseLocal(b.start) >= now))
    .sort((a, b) => b.start.localeCompare(a.start));

  return (
    <div className="sb bg-cream">
      <div className="wrap" style={{ maxWidth: 920 }}>
        <div className="card">
          <div className="topbar">
            <div>
              <h1>Bookings</h1>
              <p className="sub" style={{ margin: 0 }}>
                {businessName} · {upcoming.length} upcoming
              </p>
            </div>
            <div className="spacer" />
            <form action={logoutAction}>
              <button className="btn ghost" type="submit">
                Sign out
              </button>
            </form>
          </div>

          <div className="step-label">Upcoming</div>
          <BookingTable rows={upcoming} cancellable />

          <div className="step-label" style={{ marginTop: 28 }}>
            Past &amp; cancelled
          </div>
          <BookingTable rows={rest} cancellable={false} />
        </div>
      </div>
    </div>
  );
}

function BookingTable({
  rows,
  cancellable,
}: {
  rows: Awaited<ReturnType<typeof getBookings>>;
  cancellable: boolean;
}) {
  if (rows.length === 0) return <p className="note">Nothing here.</p>;
  return (
    <table className="table">
      <thead>
        <tr>
          <th>When</th>
          <th>Service</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Status</th>
          {cancellable && <th />}
        </tr>
      </thead>
      <tbody>
        {rows.map((b) => (
          <tr key={b.id}>
            <td>{pretty(b.start)}</td>
            <td>{serviceName(b.serviceId)}</td>
            <td>{b.name}</td>
            <td>
              <div>{b.email}</div>
              <div className="note">{b.phone}</div>
            </td>
            <td>
              <span className={`tag ${b.status}`}>{b.status}</span>
            </td>
            {cancellable && (
              <td>
                <form action={adminCancelAction}>
                  <input type="hidden" name="id" value={b.id} />
                  <button className="linkbtn" type="submit">
                    Cancel
                  </button>
                </form>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
