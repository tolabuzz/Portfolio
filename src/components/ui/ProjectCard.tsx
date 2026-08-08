import Link from "next/link";
import type { Project } from "@/content/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-col rounded-lg border border-outline-variant/30 bg-surface-container-lowest p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,163,228,0.12)]"
    >
      <p className="font-label text-label-caps uppercase tracking-widest text-secondary">
        {project.category}
      </p>
      <h3 className="mt-3 font-display text-headline-sm text-primary transition-colors group-hover:text-primary-container">
        {project.title}
      </h3>
      <p className="mt-4 flex-1 font-body text-body-md text-on-surface-variant">
        {project.summary}
      </p>
      {project.outcome && (
        <p className="mt-6 border-t border-outline-variant/20 pt-4 font-body text-body-md font-medium text-on-surface">
          {project.outcome}
        </p>
      )}
      <span className="mt-6 inline-flex items-center gap-1 font-label text-label-caps uppercase tracking-widest text-primary">
        Read Case Study
        <svg
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}
