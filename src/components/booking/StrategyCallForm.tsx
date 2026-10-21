"use client";

import { useRef, useState, type FormEvent } from "react";

export default function StrategyCallForm() {
  const dialogRef = useRef<HTMLDialogElement>(null);
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
      const response = await fetch("/api/strategy-call", {
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
      dialogRef.current?.close();
    } catch (error) {
      setError(error instanceof Error ? error.message : "Please try again.");
    } finally {
      setPending(false);
    }
  }

  const inputClass = "mt-2 w-full rounded-md border border-outline-variant/50 bg-background px-4 py-3 font-body text-body-md text-on-surface focus-visible:outline-2 focus-visible:outline-primary";

  return (
    <div>
      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => { setError(""); dialogRef.current?.showModal(); }}
        className="rounded-full border-2 border-primary px-8 py-[14px] font-label text-label-caps uppercase text-primary transition-colors hover:bg-primary/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        Book a Strategy Call
      </button>
      <p role="status" aria-live="polite" className="mt-3 max-w-sm font-body text-caption text-on-surface-variant">
        {sent ? "Thank you! Your enquiry has been sent. I’ll be in touch to arrange your call." : ""}
      </p>
      <dialog
        ref={dialogRef}
        aria-labelledby="strategy-form-title"
        aria-describedby="strategy-form-description"
        onCancel={(event) => { if (pending) event.preventDefault(); }}
        className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%_-_2rem)] max-w-lg overflow-y-auto rounded-xl border border-outline-variant/30 bg-background p-6 text-left text-on-surface shadow-xl backdrop:bg-black/50 md:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id="strategy-form-title" className="font-display text-headline-sm text-primary">Book a Strategy Call</h2>
          <button type="button" disabled={pending} onClick={() => dialogRef.current?.close()} aria-label="Close strategy call form" className="rounded-md px-2 py-1 text-primary focus-visible:outline-2 focus-visible:outline-primary disabled:opacity-50">
            <span aria-hidden="true">✕</span>
          </button>
        </div>
        <p id="strategy-form-description" className="mt-3 font-body text-body-md text-on-surface-variant">
          Tell me what you’d like help with, and I’ll be in touch to arrange a call.
        </p>
        <form onSubmit={submit} aria-label="Strategy call enquiry" aria-busy={pending} className="mt-6 grid gap-4">
          <label htmlFor="strategy-name" className="font-body text-body-md">
            Name
            <input id="strategy-name" name="name" autoComplete="name" required maxLength={120} pattern=".*\S.*" className={inputClass} />
          </label>
          <label htmlFor="strategy-email" className="font-body text-body-md">
            Email
            <input id="strategy-email" name="email" type="email" autoComplete="email" required maxLength={254} className={inputClass} />
          </label>
          <label htmlFor="strategy-country" className="font-body text-body-md">
            Country
            <input id="strategy-country" name="country" autoComplete="country-name" required maxLength={100} pattern=".*\S.*" className={inputClass} />
          </label>
          <label htmlFor="strategy-message" className="font-body text-body-md">
            What would you like help with?
            <textarea id="strategy-message" name="message" rows={4} required maxLength={2000} className={inputClass} />
          </label>
          {error && <p role="alert" className="font-body text-body-md text-primary">{error}</p>}
          <button type="submit" disabled={pending} className="mt-2 w-full rounded-full bg-primary px-6 py-4 font-label text-label-caps uppercase text-on-primary transition-colors hover:bg-primary-container focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-wait disabled:opacity-60">
            {pending ? "Submitting…" : "Submit"}
          </button>
        </form>
      </dialog>
    </div>
  );
}
