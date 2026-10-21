"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { resources } from "@/content/resources";

export default function ResourceLibrary() {
  const [unlocked, setUnlocked] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setPending(true);
    setError("");
    try {
      const response = await fetch("/api/resource-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          country: data.get("country"),
        }),
      });
      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error || "We couldn’t submit your details. Please try again.");
      }
      setUnlocked(true);
      form.reset();
    } catch (error) {
      setError(error instanceof Error ? error.message : "Please try again.");
    } finally {
      setPending(false);
    }
  }

  const inputClass = "mt-2 w-full rounded-md border border-outline-variant/50 bg-background px-4 py-3 font-body text-body-md text-on-surface focus-visible:outline-2 focus-visible:outline-primary";

  return (
    <>
      <div className="mb-12 rounded-lg border border-outline-variant/30 bg-surface-container-low p-6 md:p-8">
        <div role="status" aria-live="polite">
          {unlocked && (
            <p className="font-body text-body-lg text-primary">
              Thank you! Your resources are ready. Choose a Download PDF button below.
            </p>
          )}
        </div>
        {!unlocked && (
          <>
            <h2 className="font-display text-headline-sm text-primary">Get your free resources</h2>
            <p className="mt-3 font-body text-body-md text-on-surface-variant">
              Share your details below to unlock all three downloads.
            </p>
            <form onSubmit={submit} className="mt-6" aria-label="Resource access" aria-busy={pending}>
              <div className="grid gap-5 md:grid-cols-3">
                <label htmlFor="resource-name" className="font-body text-body-md text-on-surface">
                  Name
                  <input id="resource-name" name="name" autoComplete="name" required maxLength={120} pattern=".*\S.*" className={inputClass} />
                </label>
                <label htmlFor="resource-email" className="font-body text-body-md text-on-surface">
                  Email
                  <input id="resource-email" name="email" type="email" autoComplete="email" required maxLength={254} className={inputClass} />
                </label>
                <label htmlFor="resource-country" className="font-body text-body-md text-on-surface">
                  Country
                  <input id="resource-country" name="country" autoComplete="country-name" required maxLength={100} pattern=".*\S.*" className={inputClass} />
                </label>
              </div>
              {error && <p role="alert" className="mt-4 font-body text-body-md text-primary">{error}</p>}
              <button type="submit" disabled={pending} className="mt-6 rounded-full bg-primary px-8 py-4 font-label text-label-caps uppercase text-on-primary transition-colors hover:bg-primary-container focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-wait disabled:opacity-60">
                {pending ? "Submitting…" : "Submit & Unlock Downloads"}
              </button>
            </form>
          </>
        )}
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
          <article key={resource.slug} className="flex flex-col overflow-hidden rounded-lg border border-outline-variant/30 bg-background shadow-sm">
            <div className="relative h-80 bg-surface-container-low">
              <Image src={`/resources/${resource.slug}.jpg`} alt={`Cover of ${resource.title} by Tola Oladiji`} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-contain p-6" />
            </div>
            <div className="flex flex-1 flex-col p-6 md:p-8">
              <p className="font-label text-label-caps uppercase tracking-widest text-secondary">{resource.category}</p>
              <h2 className="mt-3 font-display text-headline-sm text-primary">{resource.title}</h2>
              <p className="mt-4 flex-1 font-body text-body-md text-on-surface-variant">{resource.description}</p>
              <p className="mt-6 font-body text-caption text-on-surface-variant">PDF · {resource.pages} pages · {resource.size}</p>
              {unlocked ? (
                <a href={`/resources/${resource.slug}.pdf`} download={`${resource.slug}.pdf`} aria-label={`Download ${resource.title} (PDF)`} className="mt-4 inline-flex justify-center rounded-full bg-primary px-5 py-3 font-label text-label-caps uppercase text-on-primary transition-colors hover:bg-primary-container focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                  Download PDF
                </a>
              ) : (
                <p className="mt-4 font-body text-caption text-on-surface-variant">Complete the form above to download.</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
