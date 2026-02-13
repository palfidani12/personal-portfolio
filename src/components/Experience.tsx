import { workExperiences } from "../data/data";

export const Experience = () => {
  return (
    <div
      id="experience"
      className="py-24 px-6 lg:px-12 bg-(--bg-color) transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[300px_1fr] gap-16">
          {/* Left Column - Heading */}
          <div>
            <h2 className="text-5xl font-light text-(--default-font-color) mb-4">
              Experience
            </h2>
            <p className="text-(--secondary-font-color)">
              My professional journey.
            </p>
          </div>

          {/* Right Column - Experience Items */}
          <div className="space-y-12">
            {workExperiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-(--pole-color)"
              >
                <div className="absolute left-0 top-0 w-4 h-4 -ml-2.25 rounded-full bg-(--cyan-color)"/>
                <div className="mb-2">
                  <h3 className="text-xl font-medium text-(--default-font-color) mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-(--cyan-color) font-medium">
                    {exp.company}
                  </p>
                  <p className="text-sm text-(--secondary-font-color) mt-1">
                    {exp.period}
                  </p>
                </div>
                <p className="text-(--third-font-color) leading-relaxed">
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
