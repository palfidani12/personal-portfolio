import { workExperiences } from "../data/data";

export const Experience = () => {
  return (
    <div
      id="experience"
      className="py-24 px-6 lg:px-12 bg-white dark:bg-slate-900 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[300px_1fr] gap-16">
          {/* Left Column - Heading */}
          <div>
            <h2 className="text-5xl font-light text-slate-900 dark:text-white mb-4">
              Experience
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              My professional journey.
            </p>
          </div>

          {/* Right Column - Experience Items */}
          <div className="space-y-12">
            {workExperiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-700"
              >
                <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] rounded-full bg-cyan-500"></div>
                <div className="mb-2">
                  <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-cyan-600 dark:text-cyan-400 font-medium">
                    {exp.company}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {exp.period}
                  </p>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
