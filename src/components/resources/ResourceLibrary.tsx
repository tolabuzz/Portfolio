"use client";

import { useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import { resources } from "@/content/resources";

function ResourceForm({ resource }: { resource: (typeof resources)[number] }) {
  const [submitted, setSubmitted] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  function download() {
    const link = document.createElement("a");
    link.href = `/resources/${resource.slug}.pdf`;
    link.download = `${resource.slug}.pdf`;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

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
          resource: resource.slug,
        }),
      });
      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error || "We couldn’t submit your details. Please try again.");
      }
      setSubmitted(true);
      form.reset();
      dialogRef.current?.close();
      download();
    } catch (error) {
      setError(error instanceof Error ? error.message : "Please try again.");
    } finally {
      setPending(false);
    }
  }

  const inputClass = "mt-2 w-full rounded-md border border-outline-variant/50 bg-background px-4 py-3 font-body text-body-md text-on-surface focus-visible:outline-2 focus-visible:outline-primary";

  return (
    <div className="mt-6 border-t border-outline-variant/30 pt-6">
      <button
        type="button"
        aria-label={`Download ${resource.title}`}
        aria-haspopup={submitted ? undefined : "dialog"}
        onClick={() => {
          if (submitted) download();
          else {
            setError("");
            dialogRef.current?.showModal();
          }
        }}
        className="inline-flex justify-center rounded-full bg-primary px-8 py-3 font-label text-label-caps uppercase text-on-primary transition-colors hover:bg-primary-container focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        Download
      </button>
      <p role="status" aria-live="polite" className="mt-3 font-body text-caption text-on-surface-variant">
        {submitted ? "Thank you! Your download has started. Click Download to get another copy." : ""}
      </p>
      <dialog
        ref={dialogRef}
        aria-labelledby={`${resource.slug}-form-title`}
        aria-describedby={`${resource.slug}-form-description`}
        onCancel={(event) => { if (pending) event.preventDefault(); }}
        className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%_-_2rem)] max-w-lg overflow-y-auto rounded-xl border border-outline-variant/30 bg-background p-6 text-on-surface shadow-xl backdrop:bg-black/50 md:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id={`${resource.slug}-form-title`} className="font-display text-headline-sm text-primary">
            Get Your Copy of {resource.title}
          </h2>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            disabled={pending}
            aria-label="Close download form"
            className="rounded-md px-2 py-1 text-primary focus-visible:outline-2 focus-visible:outline-primary disabled:opacity-50"
          >
            <span aria-hidden="true">✕</span>
          </button>
        </div>
        <p id={`${resource.slug}-form-description`} className="mt-3 font-body text-body-md text-on-surface-variant">
          Enter your details below.
        </p>
        <form onSubmit={submit} className="mt-6" aria-label={`Get ${resource.title}`} aria-busy={pending}>
          <div className="grid gap-4">
            <label htmlFor={`${resource.slug}-name`} className="font-body text-body-md text-on-surface">
              Name
              <input id={`${resource.slug}-name`} name="name" autoComplete="name" required maxLength={120} pattern=".*\S.*" className={inputClass} />
            </label>
            <label htmlFor={`${resource.slug}-email`} className="font-body text-body-md text-on-surface">
              Email
              <input id={`${resource.slug}-email`} name="email" type="email" autoComplete="email" required maxLength={254} className={inputClass} />
            </label>
            <label htmlFor={`${resource.slug}-country`} className="font-body text-body-md text-on-surface">
              Country
              <input id={`${resource.slug}-country`} name="country" autoComplete="country-name" required maxLength={100} pattern=".*\S.*" className={inputClass} />
            </label>
          </div>
          {error && <p role="alert" className="mt-4 font-body text-body-md text-primary">{error}</p>}
          <button type="submit" disabled={pending} className="mt-6 w-full rounded-full bg-primary px-6 py-4 font-label text-label-caps uppercase text-on-primary transition-colors hover:bg-primary-container focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-wait disabled:opacity-60">
            {pending ? "Submitting…" : "Submit"}
          </button>
        </form>
      </dialog>
    </div>
  );
}

export default function ResourceLibrary() {
  return (
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
            <ResourceForm resource={resource} />
          </div>
        </article>
      ))}
    </div>
  );
}
