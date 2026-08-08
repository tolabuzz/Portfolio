import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/content/experience";

export default function Experience({
  headingLevel = "h2",
}: {
  headingLevel?: "h1" | "h2";
}) {
  return (
    <section className="py-16 md:py-[80px]">
      <Container>
        <SectionHeading level={headingLevel} title="Experience" />

        <div className="flex flex-col">
          {experience.map((role, index) => (
            <article
              key={role.id}
              className="group -mx-4 rounded-xl px-4 py-10 transition-colors hover:bg-surface-container-low/50 first:pt-0"
            >
              <div
                className={
                  "grid grid-cols-4 gap-gutter md:grid-cols-12" +
                  (index < experience.length - 1 ? " border-b border-outline-variant/20 pb-10" : "")
                }
              >
                <div className="col-span-4 md:col-span-3">
                  <p className="pt-2 font-label text-label-caps font-bold uppercase tracking-widest text-secondary">
                    {role.start} – {role.current ? "Present" : role.end}
                  </p>
                </div>
                <div className="col-span-4 md:col-span-9">
                  <h3 className="font-display text-headline-md text-primary">
                    {role.role}
                  </h3>
                  <p className="mb-6 font-body text-body-lg italic text-on-surface-variant">
                    {role.company}
                  </p>

                  <details className="group/details">
                    <summary className="flex cursor-pointer items-center justify-between border-y border-transparent py-3 font-label text-label-caps uppercase text-primary transition-colors group-hover/details:border-outline-variant/30">
                      <span className="tracking-widest">
                        Selected Achievements
                      </span>
                      <svg
                        className="h-5 w-5 text-primary transition-transform group-open/details:rotate-180"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </summary>
                    <ul className="mt-6 space-y-6 pl-4 font-body text-body-md text-on-surface-variant">
                      {role.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-6 font-display text-headline-sm leading-none text-primary/30">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
