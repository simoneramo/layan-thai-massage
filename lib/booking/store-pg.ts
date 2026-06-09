import { neon, type NeonQueryFunction } from "@neondatabase/serverless";
import type { Booking, BookingStatus } from "./types";
import type { BookingStore } from "./store-types";

// Postgres-backed store for production (active whenever DATABASE_URL is set).
//
// Concurrency is handled by the database, not the app: the `bookings_no_overlap`
// EXCLUDE constraint (see schema.sql) rejects any INSERT that would overlap an
// existing confirmed booking, so two simultaneous requests for the same slot
// can never both succeed — even across separate serverless instances.

// Lazily created so merely importing this module (e.g. from the backend
// selector) never throws when DATABASE_URL is absent in local dev.
let _sql: NeonQueryFunction<false, false> | null = null;
function sql(): NeonQueryFunction<false, false> {
  if (!_sql) {
    const url = process.env.DATABASE_URL?.trim();
    if (!url) throw new Error("DATABASE_URL is not set");
    _sql = neon(url);
  }
  return _sql;
}

// Postgres exclusion_violation — our overlap constraint tripped.
const EXCLUSION_VIOLATION = "23P01";
function isExclusionViolation(err: unknown): boolean {
  return (err as { code?: string } | null)?.code === EXCLUSION_VIOLATION;
}

type Row = {
  id: string;
  service_id: string;
  start: string;
  end: string;
  name: string;
  email: string;
  phone: string;
  status: string;
  cancel_token: string;
  created_at: string;
};

function toBooking(r: Row): Booking {
  return {
    id: r.id,
    serviceId: r.service_id,
    start: r.start,
    end: r.end,
    name: r.name,
    email: r.email,
    phone: r.phone,
    status: r.status as BookingStatus,
    cancelToken: r.cancel_token,
    createdAt: r.created_at,
  };
}

// Shared column projection: formats the naive timestamps back into the exact
// "YYYY-MM-DDTHH:mm" wall-clock strings the rest of the app expects.
const COLS = `id, service_id,
  to_char(start_ts, 'YYYY-MM-DD"T"HH24:MI') AS start,
  to_char(end_ts,   'YYYY-MM-DD"T"HH24:MI') AS end,
  name, email, phone, status, cancel_token, created_at`;

export const pgStore: BookingStore = {
  async getBookings() {
    const rows = (await sql().query(
      `SELECT ${COLS} FROM bookings ORDER BY start_ts`,
    )) as Row[];
    return rows.map(toBooking);
  },

  async getConfirmed() {
    const rows = (await sql().query(
      `SELECT ${COLS} FROM bookings WHERE status = 'confirmed' ORDER BY start_ts`,
    )) as Row[];
    return rows.map(toBooking);
  },

  async findByToken(token) {
    const rows = (await sql().query(
      `SELECT ${COLS} FROM bookings WHERE cancel_token = $1 LIMIT 1`,
      [token],
    )) as Row[];
    return rows[0] ? toBooking(rows[0]) : undefined;
  },

  async tryCreate(booking, isFree) {
    // Business-rule check (hours, notice, no clash) against the latest data.
    if (!isFree(await this.getConfirmed())) {
      return { ok: false as const, reason: "That time was just taken. Pick another." };
    }
    try {
      await sql().query(
        `INSERT INTO bookings
           (id, service_id, start_ts, end_ts, name, email, phone, status, cancel_token, created_at)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,
        [
          booking.id,
          booking.serviceId,
          booking.start,
          booking.end,
          booking.name,
          booking.email,
          booking.phone,
          booking.status,
          booking.cancelToken,
          booking.createdAt,
        ],
      );
      return { ok: true as const };
    } catch (err) {
      // Lost the race: another confirmed booking now overlaps this slot.
      if (isExclusionViolation(err)) {
        return { ok: false as const, reason: "That time was just taken. Pick another." };
      }
      throw err;
    }
  },

  async cancelByToken(token) {
    const found = await this.findByToken(token);
    if (found && found.status === "confirmed") {
      await sql().query(`UPDATE bookings SET status = 'cancelled' WHERE id = $1`, [found.id]);
      found.status = "cancelled";
    }
    return found;
  },

  async cancelById(id) {
    await sql().query(`UPDATE bookings SET status = 'cancelled' WHERE id = $1`, [id]);
  },
};
