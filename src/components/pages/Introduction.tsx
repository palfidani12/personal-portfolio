import { useEffect, useState } from "react";
import { InteractiveMap } from "../InteractiveMap";

export const Introduction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    // Trigger initial animation
    setIsVisible(true);

    // Trigger skills animation after a delay
    const skillsTimer = setTimeout(() => setSkillsVisible(true), 800);

    return () => {
      clearTimeout(skillsTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-purple-400 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-12 h-12 bg-indigo-400 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-pink-400 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div
                className={`space-y-8 transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
              >
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    <span className="text-slate-900 dark:text-white">
                      Hi, I'm
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      Dániel Pálfi
                    </span>
                  </h1>

                  <div className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 font-medium">
                    <span className="inline-block mr-2">
                      Frontend Developer
                    </span>
                  </div>
                </div>

                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
                  Experienced in frontend, <br/> Eager to everything
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <span className="relative z-10 flex items-center justify-center">
                      View My Work
                      <svg
                        className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>

                  <button className="px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-xl font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                    <span className="flex items-center justify-center">
                      <svg
                        className="mr-2 w-5 h-5 group-hover:animate-bounce"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Get In Touch
                    </span>
                  </button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      3+
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Years
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      50+
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Projects
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      100%
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Satisfaction
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Visual */}
              <div
                className={`relative transition-all duration-1000 delay-300 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
              >
                <div className="relative">
                  {/* Main Card */}
                  <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                    <div
                      className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>

                    {/* Profile Image Placeholder */}
                    <div className="w-48 h-48 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 flex items-center justify-center text-white text-6xl font-bold shadow-lg">
                      DP
                    </div>

                    {/* Tech Stack Icons */}
                    <div className="grid grid-cols-4 gap-4">
                      {["React", "TS", "Node", "AWS"].map((tech, index) => (
                        <div
                          key={tech}
                          className="bg-slate-100 dark:bg-slate-700 rounded-lg p-3 text-center text-xs font-medium text-slate-700 dark:text-slate-300 hover:scale-110 transition-transform duration-200"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Floating Cards */}
                  <div className="absolute -top-6 -left-6 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-lg border border-slate-200 dark:border-slate-700 animate-float">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Online
                      </span>
                    </div>
                  </div>

                  <div
                    className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-lg border border-slate-200 dark:border-slate-700 animate-float"
                    style={{ animationDelay: "1s" }}
                  >
                    <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Currently
                      </div>
                      <div>Building something awesome</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h3
            className={`text-3xl font-bold text-center text-slate-900 dark:text-white mb-12 transition-all duration-1000 ${
              skillsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Education Journey
          </h3>

          {/* Interactive Map */}
          <div
            className={`mb-16 transition-all duration-1000 delay-300 ${
              skillsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <InteractiveMap />
          </div>

          {/* Education Cards */}
          <div className="space-y-8">
            {[
              {
                degree: "Master of Science in Computer Science",
                school: "Stanford University",
                year: "2020 - 2022",
                gpa: "3.9/4.0",
                description:
                  "Specialized in Software Engineering and Machine Learning. Completed thesis on 'Scalable Web Application Architecture'.",
                achievements: [
                  "Graduated Magna Cum Laude",
                  "Dean's List for 4 consecutive semesters",
                  "Research Assistant in AI Lab",
                  "Published 2 papers in top-tier conferences",
                ],
                logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=80&h=80&fit=crop&crop=center",
                location: { lat: 37.4275, lng: -122.1697 },
              },
              {
                degree: "Bachelor of Science in Computer Science",
                school: "University of California, Berkeley",
                year: "2016 - 2020",
                gpa: "3.8/4.0",
                description:
                  "Focused on Full-Stack Development and Data Structures. Active member of Computer Science Society.",
                achievements: [
                  "Summa Cum Laude",
                  "President of Computer Science Society",
                  "Won 3 hackathons",
                  "Teaching Assistant for Data Structures course",
                ],
                logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=80&h=80&fit=crop&crop=center",
                location: { lat: 37.8719, lng: -122.2585 },
              },
            ].map((edu, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 hover:scale-105 hover:-translate-y-2 ${
                  skillsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={edu.logo}
                      alt={edu.school}
                      className="w-16 h-16 rounded-xl object-cover shadow-md"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                          {edu.degree}
                        </h4>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-1">
                          {edu.school}
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                          {edu.year} • GPA: {edu.gpa}
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                      {edu.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {edu.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-slate-600 dark:text-slate-400">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
