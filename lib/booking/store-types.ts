import type { Booking } from "./types";

/**
 * Backend-agnostic booking store. Both the file backend (local dev) and the
 * Postgres backend (production) implement this identical surface, so the rest of
 * the app never knows which one is active.
 */
export interface BookingStore {
  getBookings(): Promise<Booking[]>;
  getConfirmed(): Promise<Booking[]>;
  findByToken(token: string): Promise<Booking | undefined>;
  /**
   * Append `booking` only if it's still valid. `isFree` re-checks business rules
   * (hours/notice/no clash) against the latest confirmed set; the Postgres
   * backend additionally relies on a database EXCLUDE constraint as the final,
   * race-proof guard.
   */
  tryCreate(
    booking: Booking,
    isFree: (confirmed: Booking[]) => boolean,
  ): Promise<{ ok: true } | { ok: false; reason: string }>;
  cancelByToken(token: string): Promise<Booking | undefined>;
  cancelById(id: string): Promise<void>;
}
