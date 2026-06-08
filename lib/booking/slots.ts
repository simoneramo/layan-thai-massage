import type { Booking, Service } from "./types";
import { availability, bookingWindowDays, minNoticeMin } from "./config";

/** "YYYY-MM-DD" for a Date in local time. */
export function dateKey(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** "HH:mm" for a Date in local time. */
function timeKey(d: Date): string {
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}

/** Parse "YYYY-MM-DDTHH:mm" (local wall clock) into a Date. */
export function parseLocal(s: string): Date {
  const [date, time] = s.split("T");
  const [y, m, d] = date.split("-").map(Number);
  const [hh, mm] = time.split(":").map(Number);
  return new Date(y, m - 1, d, hh, mm, 0, 0);
}

function fmt(d: Date): string {
  return `${dateKey(d)}T${timeKey(d)}`;
}

function overlaps(aS: Date, aE: Date, bS: Date, bE: Date): boolean {
  return aS < bE && bS < aE;
}

export type Slot = { start: string; end: string; label: string };
export type DaySlots = { date: string; weekday: string; slots: Slot[] };

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/**
 * Generate available slots for a service across the booking window, excluding
 * any time that overlaps a confirmed booking or falls inside the notice window.
 */
export function availableSlots(service: Service, confirmed: Booking[]): DaySlots[] {
  const now = new Date();
  const earliest = new Date(now.getTime() + minNoticeMin * 60_000);
  const busy = confirmed.map((b) => ({ s: parseLocal(b.start), e: parseLocal(b.end) }));

  const days: DaySlots[] = [];

  for (let i = 0; i < bookingWindowDays; i++) {
    const day = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i);
    const windows = availability[day.getDay()] ?? [];
    const slots: Slot[] = [];

    for (const w of windows) {
      const [ws, we] = [w.start, w.end];
      const winStart = parseLocal(`${dateKey(day)}T${ws}`);
      const winEnd = parseLocal(`${dateKey(day)}T${we}`);

      let cursor = new Date(winStart);
      while (cursor.getTime() + service.durationMin * 60_000 <= winEnd.getTime()) {
        const slotStart = new Date(cursor);
        const slotEnd = new Date(cursor.getTime() + service.durationMin * 60_000);

        const tooSoon = slotStart < earliest;
        const clash = busy.some((b) => overlaps(slotStart, slotEnd, b.s, b.e));

        if (!tooSoon && !clash) {
          slots.push({
            start: fmt(slotStart),
            end: fmt(slotEnd),
            label: timeKey(slotStart),
          });
        }
        cursor = slotEnd;
      }
    }

    if (slots.length) {
      days.push({ date: dateKey(day), weekday: WEEKDAYS[day.getDay()], slots });
    }
  }

  return days;
}

/** Validate that a requested start is a real, free slot for the service. */
export function isValidFreeSlot(
  service: Service,
  start: string,
  confirmed: Booking[],
): boolean {
  return availableSlots(service, confirmed).some((d) =>
    d.slots.some((s) => s.start === start),
  );
}

export function endFor(service: Service, start: string): string {
  const s = parseLocal(start);
  return fmt(new Date(s.getTime() + service.durationMin * 60_000));
}
