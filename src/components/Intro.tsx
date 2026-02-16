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
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 text-(--third-font-color) leading-relaxed">
            <p>
              I'm a master's student with multiple years of experience in
              software development, mainly focusing on frontend technologies but
              also having a strong background in backend development. I have a
              drive to create web applications that are not only functional but
              also efficient and user-friendly. I am passionate about learning
              new technologies and continuously improving my skills to deliver
              high-quality solutions.
            </p>
            <p>
              My expertise spans across modern JavaScript frameworks,
              particularly React and TypeScript, along with backend technologies
              like Node.js and PostgreSQL. But I also enjoy exploring machine
              learning and AI, which is why I am currently pursuing a master's
              degree in autonomous systems and intelligent robotics.
            </p>
            <p>
              When I'm not coding, I enjoy creating side projects that help me
              learn new technologies and solve interesting problems. I also love
              travelling and experiencing different cultures, which has given me
              a broader perspective and a deeper understanding of the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
