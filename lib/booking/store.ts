import { fileStore } from "./store-file";
import { pgStore } from "./store-pg";
import type { BookingStore } from "./store-types";

// Pick the backend once, at module load:
//   • DATABASE_URL set   -> Postgres (production / preview on Vercel)
//   • DATABASE_URL unset -> JSON file (zero-config local dev)
// Both implement the same BookingStore surface, so callers don't change.
const store: BookingStore = process.env.DATABASE_URL?.trim() ? pgStore : fileStore;

export const getBookings = () => store.getBookings();
export const getConfirmed = () => store.getConfirmed();
export const findByToken = (token: string) => store.findByToken(token);
export const tryCreate: BookingStore["tryCreate"] = (booking, isFree) =>
  store.tryCreate(booking, isFree);
export const cancelByToken = (token: string) => store.cancelByToken(token);
export const cancelById = (id: string) => store.cancelById(id);
