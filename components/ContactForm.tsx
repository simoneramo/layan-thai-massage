"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { CalendarPlus, Check, Phone, RotateCcw } from "lucide-react";
import { sendBooking, type BookingState } from "@/app/actions";
import { treatments, site } from "@/lib/site";

const initial: BookingState = { status: "idle" };

export default function ContactForm() {
  // Bumping the key remounts the inner form, resetting useActionState.
  const [resetKey, setResetKey] = useState(0);
  return <ContactFormInner key={resetKey} onReset={() => setResetKey((k) => k + 1)} />;
}

function ContactFormInner({ onReset }: { onReset: () => void }) {
  const [state, formAction, pending] = useActionState(sendBooking, initial);
  const confirmRef = useRef<HTMLDivElement>(null);

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
          Your booking request is in. We&apos;ll call you back shortly to confirm a time that suits. For anything urgent, give us a ring.
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
    <form action={formAction} className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-plum-100 dark:bg-gray-800 dark:ring-white/10 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-plum-800 dark:text-gray-200">Name</label>
          <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your name" className="field" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-plum-800 dark:text-gray-200">Phone</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="04xx xxx xxx" className="field" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-plum-800 dark:text-gray-200">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className="field" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-plum-800 dark:text-gray-200">Preferred treatment</label>
          <select id="service" name="service" className="field" defaultValue={treatments[0]}>
            {treatments.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-plum-800 dark:text-gray-200">
            Message <span className="font-normal text-plum-400">(optional)</span>
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
        <CalendarPlus className="h-5 w-5" /> {pending ? "Sending…" : "Book Now"}
      </button>
      <p className="mt-3 text-center text-xs text-plum-500 dark:text-gray-400">We&apos;ll call to confirm your appointment. Walk-ins welcome too.</p>
    </form>
  );
}
