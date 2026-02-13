import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/data";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 lg:px-12 bg-(--bg-color) transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[300px_1fr] gap-16">
          {/* Left Column - Heading */}
          <div>
            <h2 className="text-5xl font-light text-(--default-font-color) mb-4">
              Work
            </h2>
            <p className="text-(--secondary-font-color)">
              Featured projects.
            </p>
          </div>

          {/* Right Column - Projects */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-lg mb-6 bg-(--secondary-bg-color)">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors"></div>
                </div>
                <h3 className="text-2xl font-medium text-(--default-font-color) mb-3">
                  {project.title}
                </h3>
                <p className="text-(--secondary-font-color) leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-(--secondary-bg-color) text-(--secondary-font-color) rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-2 text-(--cyan-color) hover:text-(--cyan-hover-color) transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Live</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center gap-2 text-(--secondary-font-color) hover:text-(--nav-button-text-color) transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
