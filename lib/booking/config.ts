import type { Service, Availability } from "./types";

/**
 * Owner-defined booking config. Edit this file to change what's offered and when
 * the studio is bookable. Each service is a single duration, so treatments that
 * come in multiple lengths (e.g. 60/90 min Thai) are listed as separate entries.
 */

export const businessName = "Layan Traditional Thai Massage";

export const services: Service[] = [
  { id: "thai-60", name: "Traditional Thai Massage", durationMin: 60, description: "$70 · fully clothed, no oil" },
  { id: "thai-90", name: "Traditional Thai Massage", durationMin: 90, description: "$110 · fully clothed, no oil" },
  { id: "oil-60", name: "Essential Oil Massage", durationMin: 60, description: "$70 · warm aromatic oils" },
  { id: "foot-30", name: "Thai Foot Massage & Reflexology", durationMin: 30, description: "$35" },
  { id: "foot-60", name: "Thai Foot Massage & Reflexology", durationMin: 60, description: "$60" },
  { id: "back-30", name: "Full Back Massage", durationMin: 30, description: "$40 · lower back & neck" },
  { id: "shoulder-neck-30", name: "Shoulder & Neck Massage", durationMin: 30, description: "$35 · ease stiffness" },
  { id: "shoulder-neck-head-45", name: "Shoulder, Neck & Head Massage", durationMin: 45, description: "$50 · tension headaches" },
  { id: "head-15", name: "Head Massage", durationMin: 15, description: "$15 · head, neck & face" },
];

/** Weekly hours (studio local time). day 0=Sun .. 6=Sat. Empty = closed. */
export const availability: Availability = {
  0: [], // Sun — closed
  1: [{ start: "09:30", end: "18:00" }], // Mon
  2: [{ start: "09:30", end: "18:00" }], // Tue
  3: [{ start: "09:30", end: "18:00" }], // Wed
  4: [{ start: "09:30", end: "18:00" }], // Thu
  5: [{ start: "09:30", end: "18:00" }], // Fri
  6: [{ start: "09:30", end: "17:00" }], // Sat
};

/** How many days ahead visitors can book. */
export const bookingWindowDays = 14;

/** Minimum notice before a slot (minutes). e.g. 60 = no bookings in the next hour. */
export const minNoticeMin = 60;
