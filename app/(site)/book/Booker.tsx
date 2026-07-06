"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
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

type DetailField = "name" | "email" | "phone";
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Returns an error message for a details field, or "" when it's valid.
function validateDetail(field: DetailField, value: string): string {
  const v = value.trim();
  if (field === "name") return v ? "" : "Please enter your name.";
  if (field === "email") {
    if (!v) return "Please enter your email.";
    return emailRe.test(v) ? "" : "Please enter a valid email address.";
  }
  if (!v) return "Please enter your phone number.";
  return v.replace(/\D/g, "").length >= 8 ? "" : "Please enter a valid phone number.";
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
  const [touched, setTouched] = useState({ name: false, email: false, phone: false });

  const detailErrors: Record<DetailField, string> = {
    name: touched.name ? validateDetail("name", form.name) : "",
    email: touched.email ? validateDetail("email", form.email) : "",
    phone: touched.phone ? validateDetail("phone", form.phone) : "",
  };
  const detailsInvalid =
    !!validateDetail("name", form.name) ||
    !!validateDetail("email", form.email) ||
    !!validateDetail("phone", form.phone);

  // Same red-invalid / green-valid feedback as the site contact form.
  function inputClass(field: DetailField): string {
    const err = detailErrors[field];
    const ok = touched[field] && !err && form[field].trim() !== "";
    return err ? "invalid" : ok ? "valid" : "";
  }

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
  }

  function chooseSlot(s: Slot) {
    setSlot(s);
  }

  function reset() {
    setStep(1);
    setService(null);
    setDays(null);
    setSlot(null);
    setOpenDays(new Set());
    setForm({ name: "", email: "", phone: "" });
    setTouched({ name: false, email: false, phone: false });
    setError("");
    setDone(null);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!service || !slot) return;
    setTouched({ name: true, email: true, phone: true });
    if (detailsInvalid) return;
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

      {/* running summary of the current selection (steps 2–3) */}
      {step > 1 && service && (
        <div className="summary">
          <div className="summary-row">
            <span className="summary-label">Service:</span>{" "}
            <span className="summary-value">{service.name}</span>
          </div>
          <div className="summary-row">
            <span className="summary-label">Time:</span>{" "}
            <span className="summary-value">{service.durationMin}min</span>
          </div>
          {service.description?.match(/\$\d+/) && (
            <div className="summary-row">
              <span className="summary-label">Price:</span>{" "}
              <span className="summary-value">{service.description.match(/\$\d+/)![0]}</span>
            </div>
          )}
          {slot && (
            <div className="summary-row">
              <span className="summary-label">Date and time:</span>{" "}
              <span className="summary-value">
                {prettyDate(slot.start.split("T")[0])} at {slot.label}
              </span>
            </div>
          )}
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
          <div className="row" style={{ marginTop: 20, justifyContent: "flex-end" }}>
            <button
              type="button"
              className="btn"
              disabled={!service}
              onClick={() => setStep(2)}
            >
              Continue <ArrowRight size={18} />
            </button>
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
          <div className="row" style={{ marginTop: 20, justifyContent: "space-between" }}>
            <button type="button" className="back" onClick={() => setStep(1)}>
              <span aria-hidden="true">‹</span> Back
            </button>
            <button
              type="button"
              className="btn"
              disabled={!slot}
              onClick={() => setStep(3)}
            >
              Continue <ArrowRight size={18} />
            </button>
          </div>
        </>
      )}

      {/* step 3: details */}
      {step === 3 && service && slot && (
        <form onSubmit={submit} noValidate>
          <label className="field">
            <span>Full name *</span>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              onBlur={() => setTouched((t) => ({ ...t, name: true }))}
              aria-invalid={!!detailErrors.name}
              className={inputClass("name")}
              autoComplete="name"
            />
            {detailErrors.name && <p className="field-error">{detailErrors.name}</p>}
          </label>
          <label className="field">
            <span>Email *</span>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              onBlur={() => setTouched((t) => ({ ...t, email: true }))}
              aria-invalid={!!detailErrors.email}
              className={inputClass("email")}
              autoComplete="email"
            />
            {detailErrors.email && <p className="field-error">{detailErrors.email}</p>}
          </label>
          <label className="field">
            <span>Phone *</span>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
              aria-invalid={!!detailErrors.phone}
              className={inputClass("phone")}
              autoComplete="tel"
            />
            {detailErrors.phone && <p className="field-error">{detailErrors.phone}</p>}
          </label>
          <p className="note">
            Phone is required so we can reach you if anything changes.
          </p>
          {error && <p className="error">{error}</p>}
          <div className="row" style={{ marginTop: 16, justifyContent: "space-between" }}>
            <button type="button" className="back" onClick={() => setStep(2)}>
              <span aria-hidden="true">‹</span> Back
            </button>
            <button
              className="btn"
              type="submit"
              disabled={submitting || detailsInvalid}
            >
              {submitting ? "Booking…" : "Confirm booking"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
