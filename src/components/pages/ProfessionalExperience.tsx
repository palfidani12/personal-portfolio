import { useState, useEffect } from "react";
import { experiences } from "../../data/data";

export const ProfessionalExperience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timelineVisible, setTimelineVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setTimelineVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Professional Experience
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My journey through various roles and companies, building expertise 
            and delivering impactful solutions along the way.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className={`relative flex items-start mb-12 transition-all duration-700 ${
                  timelineVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-white dark:border-slate-900 shadow-lg transition-all duration-500 ${
                  exp.current 
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 scale-110" 
                    : "bg-slate-300 dark:bg-slate-600"
                } ${timelineVisible ? 'scale-100' : 'scale-0'}`}></div>

                {/* Content Card */}
                <div className="ml-16 w-full">
                  <div className={`bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 hover:scale-105 hover:-translate-y-2 ${
                    exp.current ? "ring-2 ring-blue-500" : ""
                  }`}>
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div className="flex items-center space-x-4 mb-4 md:mb-0">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-12 h-12 rounded-lg object-fit"
                        />
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                            {exp.position}
                          </h3>
                          <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-slate-600 dark:text-slate-400 text-sm">
                          {exp.duration}
                        </div>
                        <div className="text-slate-500 dark:text-slate-500 text-sm">
                          {exp.location} • {exp.type}
                        </div>
                        {exp.current && (
                          <span className="inline-block mt-2 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-medium rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 uppercase tracking-wide">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-slate-600 dark:text-slate-400">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 uppercase tracking-wide">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
