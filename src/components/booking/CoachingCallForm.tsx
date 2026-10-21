"use client";

import { useState, type FormEvent } from "react";
import options from "@/content/coaching.json";

export default function CoachingCallForm() {
  const [areas, setAreas] = useState<string[]>([]);
  const [pending, setPending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (!areas.length) {
      setError("Please choose at least one coaching area.");
      return;
    }
    if (String(data.get("email")).trim().toLowerCase() !== String(data.get("confirmEmail")).trim().toLowerCase()) {
      setError("Your email addresses must match.");
      return;
    }
    setPending(true);
    setError("");
    try {
      const response = await fetch("/api/coaching-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...Object.fromEntries(data), areas }),
      });
      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error || "We couldn’t send your enquiry. Please try again.");
      }
      setSent(true);
      form.reset();
      setAreas([]);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Please try again.");
    } finally {
      setPending(false);
    }
  }

  const inputClass = "mt-2 w-full rounded-md border border-outline-variant/50 bg-background px-4 py-3 font-body text-body-md text-on-surface focus-visible:outline-2 focus-visible:outline-primary";

  return (
    <div id="coaching-form" className="scroll-mt-32 rounded-xl border border-outline-variant/30 bg-background p-6 md:p-8">
      <h2 className="font-display text-headline-sm text-primary">Sign Up for a Coaching and/or Therapy Session</h2>
      <p role="status" aria-live="polite" className="mt-4 font-body text-body-md text-on-surface-variant">
        {sent ? "Thank you! Your enquiry has been sent. I’ll be in touch to discuss the next steps." : "All fields are required."}
      </p>
      {!sent && (
        <form onSubmit={submit} aria-label="Coaching and therapy enquiry" aria-busy={pending} className="mt-6 space-y-8">
          <fieldset>
            <legend className="font-body text-body-lg text-primary">1. Name</legend>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <label htmlFor="coaching-first-name" className="font-body text-body-md">First name
                <input id="coaching-first-name" name="firstName" autoComplete="given-name" required maxLength={80} pattern=".*\S.*" className={inputClass} />
              </label>
              <label htmlFor="coaching-last-name" className="font-body text-body-md">Last name
                <input id="coaching-last-name" name="lastName" autoComplete="family-name" required maxLength={80} pattern=".*\S.*" className={inputClass} />
              </label>
            </div>
          </fieldset>
          <fieldset>
            <legend className="font-body text-body-lg text-primary">2. E-mail</legend>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <label htmlFor="coaching-email" className="font-body text-body-md">Email
                <input id="coaching-email" name="email" type="email" autoComplete="email" required maxLength={254} className={inputClass} />
              </label>
              <label htmlFor="coaching-confirm-email" className="font-body text-body-md">Confirmation email
                <input id="coaching-confirm-email" name="confirmEmail" type="email" autoComplete="off" required maxLength={254} className={inputClass} />
              </label>
            </div>
          </fieldset>
          <label htmlFor="coaching-phone" className="block font-body text-body-lg text-primary">3. Phone Number
            <input id="coaching-phone" name="phone" type="tel" autoComplete="tel" required maxLength={40} className={inputClass} />
          </label>
          <fieldset aria-describedby="coaching-areas-help">
            <legend className="font-body text-body-lg text-primary">4. What’s your preferred area of coaching and/or therapy?</legend>
            <p id="coaching-areas-help" className="mt-2 font-body text-body-md text-on-surface-variant">You may pick up to 3 areas.</p>
            <div className="mt-4 grid gap-3">
              {options.areas.map((area) => (
                <label key={area} className="flex items-start gap-3 rounded-md border border-outline-variant/40 p-4 font-body text-body-md has-disabled:opacity-50">
                  <input type="checkbox" name="areas" value={area} checked={areas.includes(area)} disabled={!areas.includes(area) && areas.length >= 3} onChange={(event) => setAreas(event.target.checked ? [...areas, area] : areas.filter((item) => item !== area))} className="mt-1 h-4 w-4 shrink-0 accent-primary" />
                  {area}
                </label>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend className="font-body text-body-lg text-primary">5. Are you financially ready to begin the coaching/therapy process?</legend>
            <div className="mt-4 grid gap-3">
              {options.readiness.map((answer) => (
                <label key={answer} className="flex items-center gap-3 rounded-md border border-outline-variant/40 p-4 font-body text-body-md">
                  <input type="radio" name="financialReadiness" value={answer} required className="h-4 w-4 accent-primary" />
                  {answer}
                </label>
              ))}
            </div>
          </fieldset>
          {error && <p role="alert" className="font-body text-body-md text-primary">{error}</p>}
          <button type="submit" disabled={pending} className="w-full rounded-full bg-primary px-6 py-4 font-label text-label-caps uppercase text-on-primary transition-colors hover:bg-primary-container focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-wait disabled:opacity-60">
            {pending ? "Submitting…" : "Submit"}
          </button>
        </form>
      )}
    </div>
  );
}
