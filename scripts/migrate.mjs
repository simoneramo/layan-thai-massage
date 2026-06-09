// Apply the booking schema to the database in DATABASE_URL, and (optionally)
// import existing data/bookings.json rows.
//
//   npm run db:migrate            # create tables/constraints (idempotent)
//   npm run db:migrate -- --import  # also import data/bookings.json
//
// Reads DATABASE_URL from .env via Node's --env-file flag (see package.json).

import { neon } from "@neondatabase/serverless";
import { readFile } from "node:fs/promises";

const url = process.env.DATABASE_URL?.trim();
if (!url) {
  console.error("DATABASE_URL is not set. Add it to .env, then re-run.");
  process.exit(1);
}

const sql = neon(url);
const here = (p) => new URL(p, import.meta.url);

// --- schema -----------------------------------------------------------------
const schema = await readFile(here("../lib/booking/schema.sql"), "utf8");
const statements = schema
  .split("\n")
  .filter((line) => !line.trim().startsWith("--")) // drop comment lines
  .join("\n")
  .split(";")
  .map((s) => s.trim())
  .filter(Boolean);

for (const stmt of statements) {
  await sql.query(stmt);
}
console.log(`Schema applied (${statements.length} statements).`);

// --- optional data import ---------------------------------------------------
if (process.argv.includes("--import")) {
  let bookings = [];
  try {
    bookings = JSON.parse(await readFile(here("../data/bookings.json"), "utf8"));
  } catch {
    console.log("No data/bookings.json to import — skipping.");
  }

  let imported = 0;
  let skipped = 0;
  for (const b of bookings) {
    try {
      await sql.query(
        `INSERT INTO bookings
           (id, service_id, start_ts, end_ts, name, email, phone, status, cancel_token, created_at)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
         ON CONFLICT (id) DO NOTHING`,
        [
          b.id,
          b.serviceId,
          b.start,
          b.end,
          b.name,
          b.email,
          b.phone,
          b.status,
          b.cancelToken,
          b.createdAt,
        ],
      );
      imported++;
    } catch (err) {
      // e.g. an overlapping confirmed booking trips bookings_no_overlap.
      console.warn(`Skipped ${b.id}: ${err.message ?? err}`);
      skipped++;
    }
  }
  console.log(`Imported ${imported} booking(s)${skipped ? `, skipped ${skipped}` : ""}.`);
}

console.log("Done.");
