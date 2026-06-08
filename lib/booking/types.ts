export type Service = {
  id: string;
  name: string;
  durationMin: number;
  description?: string;
};

export type BookingStatus = "confirmed" | "cancelled";

export type Booking = {
  id: string;
  serviceId: string;
  /** Local wall-clock start, "YYYY-MM-DDTHH:mm" (business timezone). */
  start: string;
  /** Local wall-clock end, "YYYY-MM-DDTHH:mm". */
  end: string;
  name: string;
  email: string;
  phone: string;
  status: BookingStatus;
  cancelToken: string;
  createdAt: string;
};

/** A weekly availability window, times as "HH:mm". */
export type Window = { start: string; end: string };

/** day index 0=Sun .. 6=Sat -> list of windows that day. */
export type Availability = Record<number, Window[]>;
