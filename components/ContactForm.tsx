"use client";

import { useActionState, useEffect, useRef, useState, startTransition, type FormEvent } from "react";
import { Check, Phone, RotateCcw, Send } from "lucide-react";
import { sendBooking, type BookingState } from "@/app/actions";
import { site } from "@/lib/site";

const initial: BookingState = { status: "idle" };

const subjects = [
  "General enquiry",
  "Treatments & pricing",
  "Opening hours",
  "Feedback",
  "Something else",
];

type Field = "name" | "phone" | "email";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Returns an error message for a field, or "" when it's valid.
function validate(field: Field, value: string): string {
  const v = value.trim();
  if (field === "name") return v ? "" : "Please enter your name.";
  if (field === "phone") {
    if (!v) return "Please enter your phone number.";
    return v.replace(/\D/g, "").length >= 8 ? "" : "Please enter a valid phone number.";
  }
  // email
  if (!v) return "Please enter your email address.";
  return emailRe.test(v) ? "" : "Please enter a valid email address.";
}

export default function ContactForm() {
  // Bumping the key remounts the inner form, resetting useActionState.
  const [resetKey, setResetKey] = useState(0);
  return <ContactFormInner key={resetKey} onReset={() => setResetKey((k) => k + 1)} />;
}

function ContactFormInner({ onReset }: { onReset: () => void }) {
  const [state, formAction, pending] = useActionState(sendBooking, initial);
  const confirmRef = useRef<HTMLDivElement>(null);

  const [values, setValues] = useState({ name: "", phone: "", email: "" });
  const [touched, setTouched] = useState({ name: false, phone: false, email: false });

  // Errors are derived: a field only shows an error once it's been touched.
  const errors: Record<Field, string> = {
    name: touched.name ? validate("name", values.name) : "",
    phone: touched.phone ? validate("phone", values.phone) : "",
    email: touched.email ? validate("email", values.email) : "",
  };

  const setValue = (field: Field, value: string) =>
    setValues((v) => ({ ...v, [field]: value }));
  const markTouched = (field: Field) =>
    setTouched((t) => ({ ...t, [field]: true }));

  // .field base + red (error) / green (valid) / neutral border feedback.
  function fieldClass(field: Field): string {
    const err = errors[field];
    const ok = touched[field] && !err && values[field].trim() !== "";
    if (err) return "field border-red-400 bg-red-50 dark:border-red-500 dark:bg-red-950/20";
    if (ok) return "field border-green-500 bg-green-50 dark:border-green-500 dark:bg-green-950/20";
    return "field";
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setTouched({ name: true, phone: true, email: true });
    const hasError =
      validate("name", values.name) ||
      validate("phone", values.phone) ||
      validate("email", values.email);
    if (hasError) {
      form.querySelector<HTMLElement>("[aria-invalid='true']")?.focus();
      return;
    }
    const data = new FormData(form);
    startTransition(() => formAction(data));
  }

  // Bring the confirmation into view (and move focus there) once submitted
  useEffect(() => {
    if (state.status === "success" && confirmRef.current) {
      confirmRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      confirmRef.current.focus();
    }
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div
        ref={confirmRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-plum-100 focus:outline-none dark:bg-gray-800 dark:ring-white/10 sm:p-10"
      >
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-green-100 text-green-600 dark:bg-white/10 dark:text-plum-200">
          <Check className="h-8 w-8" />
        </span>
        <h3 className="mt-5 font-heading text-2xl font-bold text-plum-900 dark:text-white">
          {state.name ? `Thank you, ${state.name}!` : "Thank you!"}
        </h3>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-plum-700/90 dark:text-gray-300">
          Your message is on its way. We&apos;ll get back to you as soon as we can. For bookings or anything urgent, give us a ring.
        </p>

        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={`tel:${site.phoneTel}`} className="btn-secondary w-full sm:w-auto">
            <Phone className="h-5 w-5" /> Call Now ({site.phoneDisplay})
          </a>
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center justify-center gap-1.5 rounded-2xl px-4 py-2.5 text-sm font-medium text-plum-700 underline decoration-plum-300 underline-offset-4 transition hover:text-plum-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-plum-300/40 dark:text-plum-200 dark:hover:text-white"
          >
            <RotateCcw className="h-4 w-4" /> Send another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-plum-100 dark:bg-gray-800 dark:ring-white/10 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-plum-800 dark:text-gray-200">Name</label>
          <input
            id="name" name="name" type="text" autoComplete="name" placeholder="Your name"
            value={values.name}
            onChange={(e) => setValue("name", e.target.value)}
            onBlur={() => markTouched("name")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClass("name")}
          />
          {errors.name && <p id="name-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-plum-800 dark:text-gray-200">Phone</label>
          <input
            id="phone" name="phone" type="tel" autoComplete="tel" placeholder="04xx xxx xxx"
            value={values.phone}
            onChange={(e) => setValue("phone", e.target.value)}
            onBlur={() => markTouched("phone")}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={fieldClass("phone")}
          />
          {errors.phone && <p id="phone-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400">{errors.phone}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-plum-800 dark:text-gray-200">Email</label>
          <input
            id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com"
            value={values.email}
            onChange={(e) => setValue("email", e.target.value)}
            onBlur={() => markTouched("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClass("email")}
          />
          {errors.email && <p id="email-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400">{errors.email}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-plum-800 dark:text-gray-200">Subject</label>
          <select id="subject" name="subject" className="field" defaultValue={subjects[0]}>
            {subjects.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-plum-800 dark:text-gray-200">
            Message <span className="font-normal text-gray-400">(optional)</span>
          </label>
          <textarea id="message" name="message" rows={4} placeholder="Preferred day or time, or anything we should know…" className="field" />
        </div>
      </div>

      {state.status === "error" && state.message && (
        <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800 dark:bg-red-950/40 dark:text-red-200" role="alert">
          {state.message}
        </p>
      )}

      <button type="submit" disabled={pending} className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70">
        <Send className="h-5 w-5" /> {pending ? "Sending…" : "Send Message"}
      </button>
      <p className="mt-3 text-center text-xs text-plum-500 dark:text-gray-400">We&apos;ll get back to you as soon as we can.</p>
    </form>
  );
}
