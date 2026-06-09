import { promises as fs } from "fs";
import path from "path";
import type { Booking } from "./types";
import type { BookingStore } from "./store-types";

// File-backed store for local development (used when DATABASE_URL is unset).
//
// NOT for production: serverless filesystems are ephemeral and read-only outside
// /tmp, and the in-process mutex below only serialises calls within a single
// instance. Production uses the Postgres backend (store-pg.ts), whose database
// EXCLUDE constraint provides real cross-instance safety.

const DATA_DIR = path.join(process.cwd(), "data");
const FILE = path.join(DATA_DIR, "bookings.json");

let chain: Promise<unknown> = Promise.resolve();
function withLock<T>(fn: () => Promise<T>): Promise<T> {
  const run = chain.then(fn, fn);
  chain = run.then(
    () => undefined,
    () => undefined,
  );
  return run;
}

async function readAll(): Promise<Booking[]> {
  try {
    const raw = await fs.readFile(FILE, "utf8");
    return JSON.parse(raw) as Booking[];
  } catch (err: unknown) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }
}

async function writeAll(bookings: Booking[]): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(bookings, null, 2), "utf8");
}

export const fileStore: BookingStore = {
  async getBookings() {
    return readAll();
  },

  async getConfirmed() {
    return (await readAll()).filter((b) => b.status === "confirmed");
  },

  async findByToken(token) {
    return (await readAll()).find((b) => b.cancelToken === token);
  },

  async tryCreate(booking, isFree) {
    return withLock(async () => {
      const all = await readAll();
      if (!isFree(all.filter((b) => b.status === "confirmed"))) {
        return { ok: false as const, reason: "That time was just taken. Pick another." };
      }
      all.push(booking);
      await writeAll(all);
      return { ok: true as const };
    });
  },

  async cancelByToken(token) {
    return withLock(async () => {
      const all = await readAll();
      const b = all.find((x) => x.cancelToken === token);
      if (b && b.status === "confirmed") {
        b.status = "cancelled";
        await writeAll(all);
      }
      return b;
    });
  },

  async cancelById(id) {
    return withLock(async () => {
      const all = await readAll();
      const b = all.find((x) => x.id === id);
      if (b) {
        b.status = "cancelled";
        await writeAll(all);
      }
    });
  },
};
