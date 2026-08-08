import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/content/projects";

export default function SelectedWork({
  headingLevel = "h2",
}: {
  headingLevel?: "h1" | "h2";
}) {
  return (
    <section className="py-16 md:py-[80px]">
      <Container>
        <SectionHeading
          level={headingLevel}
          title="Selected Work"
          description="A closer look at some of the business problems I have worked on, how I approached them, and the results delivered."
        />
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
