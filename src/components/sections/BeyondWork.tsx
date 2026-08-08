import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { beyondWork } from "@/content/beyondWork";

export default function BeyondWork() {
  return (
    <section
      id="beyond-work"
      className="border-t border-outline-variant/20 bg-surface-container-lowest py-16 md:py-[80px]"
    >
      <Container>
        <SectionHeading
          title="Beyond Work"
          description="A few things that shape how I think and work, outside the job title."
        />
        <div className="grid grid-cols-1 gap-x-gutter gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
          {beyondWork.map((item) => (
            <div key={item.title}>
              <h3 className="font-label text-label-caps uppercase tracking-widest text-secondary">
                {item.title}
              </h3>
              <p className="mt-3 font-body text-body-md text-on-surface-variant">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
