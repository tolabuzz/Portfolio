import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { beyondWork } from "@/content/beyondWork";

export default function BeyondWork() {
  return (
    <section className="border-t border-outline-variant/20 bg-surface-container-lowest py-16 md:py-[80px]">
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
        <div className="mt-12 border-t border-outline-variant/20 pt-8">
          <h3 className="font-display text-headline-sm text-primary">The Library</h3>
          <p className="mt-3 mb-6 max-w-2xl font-body text-body-md text-on-surface-variant">
            Explore my books, guides, and resources across a range of topics.
          </p>
          <Button href="/resources" variant="secondary">Explore Resources</Button>
        </div>
      </Container>
    </section>
  );
}
