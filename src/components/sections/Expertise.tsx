import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { expertiseGroups } from "@/content/expertise";

export default function Expertise({
  headingLevel = "h2",
}: {
  headingLevel?: "h1" | "h2";
}) {
  return (
    <section className="py-16 md:py-[80px]">
      <Container>
        <SectionHeading level={headingLevel} title="Areas of Expertise" />
        <div className="grid grid-cols-1 gap-x-gutter gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseGroups.map((group) => (
            <div key={group.group}>
              <h3 className="font-display text-headline-sm text-primary">
                {group.group}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-body text-body-md text-on-surface-variant"
                  >
                    <span
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary-container"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
