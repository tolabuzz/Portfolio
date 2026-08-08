import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/content/projects";

export default function SelectedWork() {
  return (
    <section id="work" className="py-16 md:py-[80px]">
      <Container>
        <SectionHeading
          title="Selected Work"
          description="A sample of strategy, transformation, and operations work — anonymized where the underlying engagement is confidential."
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
