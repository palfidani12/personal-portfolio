import { previousEducation } from "../data/data";

export const Education = () => {
  return (
    <div
      id="education"
      className="py-24 px-6 lg:px-12 bg-(--secondary-bg-color) transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[300px_1fr] gap-16">
          <div>
            <h2 className="text-5xl font-light text-(--default-font-color) mb-4">
              Education
            </h2>
          </div>

          <div className="space-y-12">
            {previousEducation.map((edu, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-(--pole-color)"
              >
                <div className="absolute left-0 top-0 w-4 h-4 -ml-2.25 rounded-full bg-(--cyan-color)"></div>
                <div className="mb-2">
                  <h3 className="text-xl font-medium text-(--default-font-color) mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-(--cyan-color) font-medium">
                    {edu.school}
                  </p>
                  <p className="text-sm text-(--secondary-font-color) mt-1">
                    {edu.period}
                  </p>
                </div>
                <p className="text-(--third-font-color) leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
