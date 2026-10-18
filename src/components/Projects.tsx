import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/data";
import { GithubIcon } from "./BrandIcons";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

type Project = (typeof projects)[number];

const statusStyles: Record<string, string> = {
  Live: "bg-accent text-accent-fg",
  Completed: "bg-surface-2 text-fg",
  "In progress": "bg-accent-soft text-accent",
};

// Grid columns for the cards below the featured one, by how many there are
const gridColumns: Record<number, string> = {
  1: "",
  2: "md:grid-cols-2",
};

const ProjectCard = ({
  project,
  index,
  isFeatured = false,
}: {
  project: Project;
  index: number;
  isFeatured?: boolean;
}) => (
  <article
    className={`group h-full flex flex-col rounded-3xl border border-line bg-surface p-6 sm:p-8 hover:border-accent/50 transition-colors ${
      isFeatured ? "lg:p-10" : ""
    }`}
  >
    <div className="flex items-center justify-between gap-4 mb-8">
      <span className="font-mono text-sm text-subtle">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span
        className={`px-2.5 py-1 rounded-full text-xs font-medium ${
          statusStyles[project.status] ?? statusStyles.Completed
        }`}
      >
        {project.status}
      </span>
    </div>

    <div className={isFeatured ? "lg:grid lg:grid-cols-[1fr_1fr] lg:gap-12" : ""}>
      <div>
        <h3
          className={`font-medium tracking-tight text-fg mb-3 ${
            isFeatured ? "text-3xl sm:text-4xl" : "text-2xl"
          }`}
        >
          {project.title}
        </h3>
        <p className="text-muted leading-relaxed mb-6 text-pretty">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap content-start gap-2 mb-6">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 rounded-md border border-line font-mono text-xs text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>

    <div className="mt-auto pt-5 border-t border-line flex flex-wrap gap-x-6 gap-y-3">
      {project.links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-fg hover:text-accent transition-colors"
        >
          <GithubIcon className="size-4" />
          {link.label}
          <ArrowUpRight className="size-3.5 text-subtle" />
        </a>
      ))}
    </div>
  </article>
);

export const Projects = () => {
  // Two projects read best side by side; otherwise the first one is featured full width
  const featured = projects.length === 2 ? undefined : projects[0];
  const rest = featured ? projects.slice(1) : projects;

  return (
    <Section id="projects" index="03" eyebrow="Projects" title="Things I've built">
      {featured && (
        <Reveal className="mb-4 sm:mb-6">
          <ProjectCard project={featured} index={0} isFeatured />
        </Reveal>
      )}

      {rest.length > 0 && (
        <div
          className={`grid gap-4 sm:gap-6 ${
            gridColumns[rest.length] ?? "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {rest.map((project, index) => (
            <Reveal key={project.title} delay={index * 100} className="h-full">
              <ProjectCard project={project} index={featured ? index + 1 : index} />
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
};
