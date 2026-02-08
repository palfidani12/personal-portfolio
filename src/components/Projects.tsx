import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/data";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 lg:px-12 bg-white dark:bg-slate-900 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[300px_1fr] gap-16">
          {/* Left Column - Heading */}
          <div>
            <h2 className="text-5xl font-light text-slate-900 dark:text-white mb-4">
              Work
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Featured projects.
            </p>
          </div>

          {/* Right Column - Projects */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-lg mb-6 bg-slate-100 dark:bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors"></div>
                </div>
                <h3 className="text-2xl font-medium text-slate-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Live</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-300 transition-colors"
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
