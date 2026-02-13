import { introFirstParagraph } from "../data/data";

export const Intro = () => {
  return (
    <div
      id="about"
      className="py-24 px-6 lg:px-12 bg-(--bg-color) transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[300px_1fr] gap-16">
          {/* Left Column - Heading */}
          <div>
            <h2 className="text-5xl font-light text-(--default-font-color) mb-4">
              Intro
            </h2>
            <p className="text-(--secondary-font-color)">
              What I am all about.
            </p>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 text-(--third-font-color) leading-relaxed">
            <p>{introFirstParagraph}</p>
            <p>
              My expertise spans across modern JavaScript frameworks,
              particularly React and TypeScript, along with backend technologies
              like Node.js and PostgreSQL. I'm committed to writing clean,
              maintainable code and staying current with the latest web
              technologies.
            </p>
            <p>
              When I'm not coding, I enjoy contributing to open-source projects,
              mentoring junior developers, and exploring new technologies that
              can help solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
