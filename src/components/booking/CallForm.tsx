"use client";

import { useState, type FormEvent } from "react";

export default function CallForm({ kind }: { kind: "strategy" | "coaching" }) {
  const [pending, setPending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setPending(true);
    setError("");
    try {
      const response = await fetch(`/api/${kind}-call`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error || "We couldn’t send your enquiry. Please try again.");
      }
      setSent(true);
      form.reset();
    } catch (error) {
      setError(error instanceof Error ? error.message : "Please try again.");
    } finally {
      setPending(false);
    }
  }

  const inputClass = "mt-2 w-full rounded-md border border-outline-variant/50 bg-background px-4 py-3 font-body text-body-md text-on-surface focus-visible:outline-2 focus-visible:outline-primary";

  return (
    <div>
      <p role="status" aria-live="polite" className="mb-4 font-body text-caption text-on-surface-variant">
        {sent ? "Thank you! Your enquiry has been sent. I’ll be in touch to arrange your call." : ""}
      </p>
      <div className="rounded-xl border border-outline-variant/30 bg-background p-6 text-left md:p-8">
        {!sent && <form onSubmit={submit} aria-label={`${kind === "strategy" ? "Strategy" : "Coaching"} call enquiry`} aria-busy={pending} className="mt-6 grid gap-4">
          <label htmlFor="call-name" className="font-body text-body-md">
            Name
            <input id="call-name" name="name" autoComplete="name" required maxLength={120} pattern=".*\S.*" className={inputClass} />
          </label>
          <label htmlFor="call-phone" className="font-body text-body-md">
            Phone number
            <input id="call-phone" name="phone" type="tel" autoComplete="tel" required maxLength={40} className={inputClass} />
          </label>
          <label htmlFor="call-email" className="font-body text-body-md">
            Email
            <input id="call-email" name="email" type="email" autoComplete="email" required maxLength={254} className={inputClass} />
          </label>
          <label htmlFor="call-message" className="font-body text-body-md">
            What do you need help with?
            <textarea id="call-message" name="message" rows={4} required maxLength={2000} className={inputClass} />
          </label>
          {error && <p role="alert" className="font-body text-body-md text-primary">{error}</p>}
          <button type="submit" disabled={pending} className="mt-2 w-full rounded-full bg-primary px-6 py-4 font-label text-label-caps uppercase text-on-primary transition-colors hover:bg-primary-container focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-wait disabled:opacity-60">
            {pending ? "Submitting…" : "Submit"}
          </button>
        </form>}
      </div>
    </div>
  );
}
