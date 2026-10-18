import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/data";
import { GithubIcon } from "./BrandIcons";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const statusStyles: Record<string, string> = {
  Live: "bg-accent text-accent-fg",
  Completed: "bg-surface-2 text-fg",
  "In progress": "bg-accent-soft text-accent",
};

export const Projects = () => {
  return (
    <Section id="projects" index="03" eyebrow="Projects" title="Things I've built">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((project, index) => {
          const isFeatured = index === 0;
          return (
            <Reveal
              key={project.title}
              delay={isFeatured ? 0 : (index - 1) * 100}
              className={`h-full ${isFeatured ? "md:col-span-2 lg:col-span-3" : ""}`}
            >
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

                  <div className="flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-6">
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
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};
