import { skillsByCategories } from "../data/data";

export const Skills = () => {
  return (
    <div
      id="skills"
      className="py-24 px-6 lg:px-12 bg-(--secondary-bg-color) transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[300px_1fr] gap-16">
          {/* Left Column - Heading */}
          <div>
            <h2 className="text-5xl font-light text-(--default-font-color) mb-4">
              Skills
            </h2>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-12">
            {skillsByCategories.map((category) => (
              <div key={category.category}>
                <h3 className="text-sm uppercase tracking-wider text-(--secondary-font-color) mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-5 py-2.5 bg-(--bg-color) border border-(--pole-color) text-(--secondary-font-color) rounded-lg hover:border-(--cyan-color) hover:text-(--cyan-color) transition-all cursor-default"
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
