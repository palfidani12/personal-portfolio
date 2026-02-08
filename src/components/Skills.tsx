import { skillsByCategories } from "../data/data";

export const Skills = () => {
  return (
    <div
      id="skills"
      className="py-24 px-6 lg:px-12 bg-slate-50 dark:bg-slate-800 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[300px_1fr] gap-16">
          {/* Left Column - Heading */}
          <div>
            <h2 className="text-5xl font-light text-slate-900 dark:text-white mb-4">
              Skills
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Technologies I work with.
            </p>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-12">
            {skillsByCategories.map((category) => (
              <div key={category.category}>
                <h3 className="text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
