import Image from "next/image";
import { site } from "@/content/site";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-[780px] items-center overflow-hidden py-16 md:py-[80px]">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-4 items-center gap-gutter px-margin-mobile md:grid-cols-12 md:px-margin-desktop">
        <div className="col-span-4 flex flex-col justify-center md:col-span-7 md:pr-12">
          <h1 className="font-display text-display-lg-mobile text-primary md:text-display-lg">
            {site.name}
          </h1>
          <p className="mt-4 font-label text-label-caps uppercase tracking-widest text-secondary md:text-[13px]">
            {site.roles.join("  |  ")}
          </p>
          <p className="mt-8 max-w-xl font-body text-body-lg text-on-surface-variant">
            {site.positioningStatement}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/work" variant="primary">
              View My Work
            </Button>
            <Button href="/about" variant="secondary">
              About Me
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-2">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-label text-label-caps uppercase tracking-widest text-on-surface-variant transition-colors hover:text-primary"
              aria-label="Tola Oladiji on LinkedIn"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="relative col-span-4 mt-12 md:col-span-5 md:mt-0">
          <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-blob bg-primary/5" />
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-blob border border-outline-variant/20 bg-surface-container-high shadow-lg">
            <Image
              src={site.heroPhoto.src}
              alt={site.heroPhoto.alt}
              fill
              priority
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
