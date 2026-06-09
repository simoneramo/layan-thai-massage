"use client";

import { useEffect, useState } from "react";
import type { Service } from "@/lib/booking/types";

type Slot = { start: string; end: string; label: string };
type DaySlots = { date: string; weekday: string; slots: Slot[] };
type Step = 1 | 2 | 3;

const STEPS: { n: Step; label: string }[] = [
  { n: 1, label: "Service" },
  { n: 2, label: "Time" },
  { n: 3, label: "Your details" },
];

function prettyDate(date: string): string {
  const [y, m, d] = date.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString(undefined, {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
}

export default function Booker({ services }: { services: Service[] }) {
  const [step, setStep] = useState<Step>(1);
  const [service, setService] = useState<Service | null>(null);
  const [days, setDays] = useState<DaySlots[] | null>(null);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [slot, setSlot] = useState<Slot | null>(null);
  const [openDays, setOpenDays] = useState<Set<string>>(new Set());
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState<{ cancelUrl: string } | null>(null);

  // load slots whenever the service changes
  useEffect(() => {
    if (!service) return;
    setDays(null);
    setSlot(null);
    setOpenDays(new Set());
    setLoadingSlots(true);
    fetch(`/api/slots?service=${encodeURIComponent(service.id)}`)
      .then((r) => r.json())
      .then((d) => {
        const list: DaySlots[] = d.days ?? [];
        setDays(list);
        // open the first (soonest) day by default
        setOpenDays(list.length ? new Set([list[0].date]) : new Set());
      })
      .catch(() => setDays([]))
      .finally(() => setLoadingSlots(false));
  }, [service]);

  function toggleDay(date: string) {
    setOpenDays((prev) => (prev.has(date) ? new Set() : new Set([date])));
  }

  function chooseService(s: Service) {
    setService(s);
    setStep(2);
  }

  function chooseSlot(s: Slot) {
    setSlot(s);
    setStep(3);
  }

  function reset() {
    setStep(1);
    setService(null);
    setDays(null);
    setSlot(null);
    setOpenDays(new Set());
    setForm({ name: "", email: "", phone: "" });
    setError("");
    setDone(null);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!service || !slot) return;
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ serviceId: service.id, start: slot.start, ...form }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Something went wrong.");
        // if the slot was taken, refresh availability and send them back to time
        if (res.status === 409) {
          setSlot(null);
          setStep(2);
          const r = await fetch(`/api/slots?service=${service.id}`);
          setDays((await r.json()).days ?? []);
        }
        return;
      }
      setDone({ cancelUrl: data.cancelUrl });
    } catch {
      setError("Network error. Try again.");
    } finally {
      setSubmitting(false);
    }
  }

  // ---- confirmation ----
  if (done && service && slot) {
    return (
      <div>
        <div className="success-icon">✓</div>
        <h1>You&apos;re booked</h1>
        <p className="sub">
          <strong>{service.name}</strong> on {prettyDate(slot.start.split("T")[0])} at{" "}
          {slot.label}.
        </p>
        <p className="note">
          A cancel link was created for this booking. Keep it handy — there&apos;s no
          login, the link is how you manage it:
        </p>
        <p>
          <a href={done.cancelUrl}>{done.cancelUrl}</a>
        </p>
        <p className="note">
          Need to change it? Cancel with that link, then book a new time. Or call us.
        </p>
        <div className="row" style={{ marginTop: 20 }}>
          <button className="btn ghost" onClick={reset}>
            Book another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* progress / stepper */}
      <ol className="steps" aria-label="Booking steps">
        {STEPS.map((s) => (
          <li
            key={s.n}
            className={`steps-item ${step === s.n ? "current" : ""} ${
              step > s.n ? "done" : ""
            }`}
            aria-current={step === s.n ? "step" : undefined}
          >
            <span className="steps-num">{step > s.n ? "✓" : s.n}</span>
            <span className="steps-text">{s.label}</span>
          </li>
        ))}
      </ol>

      {/* context bar: back + running summary (steps 2–3) */}
      {step > 1 && service && (
        <div className="stepbar">
          <button
            type="button"
            className="back"
            onClick={() => setStep((step - 1) as Step)}
          >
            <span aria-hidden="true">‹</span> Back
          </button>
          <span className="pill">
            {step === 3 && slot
              ? `${service.name} · ${prettyDate(slot.start.split("T")[0])} · ${slot.label}`
              : service.name}
          </span>
        </div>
      )}

      {/* step 1: service */}
      {step === 1 && (
        <>
          <div className="grid services">
            {services.map((s) => (
              <button
                type="button"
                key={s.id}
                className={`choice ${service?.id === s.id ? "selected" : ""}`}
                onClick={() => chooseService(s)}
              >
                <div className="name">{s.name}</div>
                <div className="meta">
                  {s.durationMin} min{s.description ? ` · ${s.description}` : ""}
                </div>
              </button>
            ))}
          </div>
        </>
      )}

      {/* step 2: time */}
      {step === 2 && service && (
        <>
          {loadingSlots && <p className="note">Loading available times…</p>}
          {days && days.length === 0 && !loadingSlots && (
            <p className="note">
              No open times in the next couple of weeks. Check back soon.
            </p>
          )}
          {days &&
            days.map((d) => {
              const isOpen = openDays.has(d.date);
              const hasSelected = slot ? slot.start.startsWith(d.date) : false;
              return (
                <div className={`day ${isOpen ? "open" : ""}`} key={d.date}>
                  <button
                    type="button"
                    className="day-header"
                    aria-expanded={isOpen}
                    onClick={() => toggleDay(d.date)}
                  >
                    <span className="day-title">{prettyDate(d.date)}</span>
                    <span className="day-meta">
                      {hasSelected
                        ? slot!.label
                        : `${d.slots.length} time${d.slots.length === 1 ? "" : "s"}`}
                      <span className="chevron" aria-hidden="true">
                        ›
                      </span>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="grid times">
                      {d.slots.map((s) => (
                        <button
                          type="button"
                          key={s.start}
                          className={`choice time ${
                            slot?.start === s.start ? "selected" : ""
                          }`}
                          onClick={() => chooseSlot(s)}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
        </>
      )}

      {/* step 3: details */}
      {step === 3 && service && slot && (
        <form onSubmit={submit}>
          <label className="field">
            <span>Full name *</span>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              autoComplete="name"
            />
          </label>
          <label className="field">
            <span>Email *</span>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              autoComplete="email"
            />
          </label>
          <label className="field">
            <span>Phone *</span>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
              autoComplete="tel"
            />
          </label>
          <p className="note">
            Phone is required so we can reach you if anything changes.
          </p>
          {error && <p className="error">{error}</p>}
          <div className="row" style={{ marginTop: 16 }}>
            <button className="btn" type="submit" disabled={submitting}>
              {submitting ? "Booking…" : "Confirm booking"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
