import { promises as fs } from "fs";
import path from "path";
import type { Booking } from "./types";

const DATA_DIR = path.join(process.cwd(), "data");
const FILE = path.join(DATA_DIR, "bookings.json");

// Simple in-process mutex so concurrent read-modify-write calls don't clobber
// each other. Good enough for a single-instance MVP; swap for SQLite/Postgres
// (with a unique constraint) before running multiple instances.
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

export async function getBookings(): Promise<Booking[]> {
  return readAll();
}

export async function getConfirmed(): Promise<Booking[]> {
  return (await readAll()).filter((b) => b.status === "confirmed");
}

export async function findByToken(token: string): Promise<Booking | undefined> {
  return (await readAll()).find((b) => b.cancelToken === token);
}

/**
 * Append a booking only if `isFree` still holds against the latest data.
 * Runs inside the lock so the check + write are atomic in-process.
 */
export async function tryCreate(
  booking: Booking,
  isFree: (existing: Booking[]) => boolean,
): Promise<{ ok: true } | { ok: false; reason: string }> {
  return withLock(async () => {
    const all = await readAll();
    if (!isFree(all.filter((b) => b.status === "confirmed"))) {
      return { ok: false as const, reason: "That time was just taken. Pick another." };
    }
    all.push(booking);
    await writeAll(all);
    return { ok: true as const };
  });
}

export async function cancelByToken(token: string): Promise<Booking | undefined> {
  return withLock(async () => {
    const all = await readAll();
    const b = all.find((x) => x.cancelToken === token);
    if (b && b.status === "confirmed") {
      b.status = "cancelled";
      await writeAll(all);
    }
    return b;
  });
}

export async function cancelById(id: string): Promise<void> {
  return withLock(async () => {
    const all = await readAll();
    const b = all.find((x) => x.id === id);
    if (b) {
      b.status = "cancelled";
      await writeAll(all);
    }
  });
}
