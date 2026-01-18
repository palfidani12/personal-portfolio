import { useState, useEffect } from "react";

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: boolean }>({});
  const [isVisible, setIsVisible] = useState(false);
  const [certificationsVisible, setCertificationsVisible] = useState(false);

  const skillCategories = {
    frontend: {
      name: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React", level: 95, years: "4+ years" },
        { name: "TypeScript", level: 90, years: "3+ years" },
        { name: "Next.js", level: 85, years: "2+ years" },
        { name: "Vue.js", level: 80, years: "2+ years" },
        { name: "Tailwind CSS", level: 95, years: "3+ years" },
        { name: "Sass/SCSS", level: 85, years: "3+ years" },
        { name: "JavaScript", level: 90, years: "5+ years" },
        { name: "HTML5/CSS3", level: 95, years: "5+ years" }
      ]
    },
    backend: {
      name: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 90, years: "4+ years" },
        { name: "Python", level: 85, years: "3+ years" },
        { name: "Express.js", level: 88, years: "3+ years" },
        { name: "FastAPI", level: 75, years: "2+ years" },
        { name: "REST APIs", level: 92, years: "4+ years" },
        { name: "GraphQL", level: 80, years: "2+ years" },
        { name: "Microservices", level: 75, years: "2+ years" },
        { name: "Serverless", level: 70, years: "1+ years" }
      ]
    },
    database: {
      name: "Database & Storage",
      icon: "🗄️",
      skills: [
        { name: "PostgreSQL", level: 85, years: "3+ years" },
        { name: "MongoDB", level: 80, years: "2+ years" },
        { name: "Redis", level: 75, years: "2+ years" },
        { name: "MySQL", level: 80, years: "3+ years" },
        { name: "Prisma", level: 70, years: "1+ years" },
        { name: "DynamoDB", level: 65, years: "1+ years" },
        { name: "Elasticsearch", level: 60, years: "1+ years" }
      ]
    },
    cloud: {
      name: "Cloud & DevOps",
      icon: "☁️",
      skills: [
        { name: "AWS", level: 80, years: "3+ years" },
        { name: "Docker", level: 85, years: "3+ years" },
        { name: "Kubernetes", level: 70, years: "2+ years" },
        { name: "CI/CD", level: 80, years: "3+ years" },
        { name: "Terraform", level: 65, years: "1+ years" },
        { name: "Git", level: 90, years: "5+ years" },
        { name: "Linux", level: 75, years: "3+ years" }
      ]
    },
    mobile: {
      name: "Mobile Development",
      icon: "📱",
      skills: [
        { name: "React Native", level: 75, years: "2+ years" },
        { name: "Expo", level: 70, years: "1+ years" },
        { name: "Flutter", level: 60, years: "1+ years" },
        { name: "iOS Development", level: 55, years: "1+ years" },
        { name: "Android Development", level: 50, years: "1+ years" }
      ]
    },
    tools: {
      name: "Tools & Others",
      icon: "🛠️",
      skills: [
        { name: "Figma", level: 80, years: "2+ years" },
        { name: "Jest", level: 85, years: "3+ years" },
        { name: "Webpack", level: 75, years: "2+ years" },
        { name: "Vite", level: 80, years: "2+ years" },
        { name: "Postman", level: 85, years: "3+ years" },
        { name: "VS Code", level: 95, years: "5+ years" },
        { name: "Agile/Scrum", level: 85, years: "4+ years" }
      ]
    }
  };

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credential: "AWS-SAA-2023",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=60&h=60&fit=crop&crop=center"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      credential: "GCP-PD-2022",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=60&h=60&fit=crop&crop=center"
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2022",
      credential: "META-REACT-2022",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=60&h=60&fit=crop&crop=center"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const certTimer = setTimeout(() => setCertificationsVisible(true), 1000);
    return () => clearTimeout(certTimer);
  }, []);

  useEffect(() => {
    // Trigger animation for skills when category changes
    setAnimatedSkills({});
    setTimeout(() => {
      setAnimatedSkills({ [activeCategory]: true });
    }, 200);
  }, [activeCategory]);

  const getSkillBarColor = (level: number) => {
    if (level >= 90) return "from-green-500 to-green-600";
    if (level >= 80) return "from-blue-500 to-blue-600";
    if (level >= 70) return "from-yellow-500 to-yellow-600";
    return "from-orange-500 to-orange-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & Expertise
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, tools, and certifications 
            accumulated through years of hands-on experience.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className={`flex flex-wrap justify-center gap-3 mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {Object.entries(skillCategories).map(([key, category], index) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
                  activeCategory === key
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105"
                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-md hover:shadow-lg"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              {skillCategories[activeCategory as keyof typeof skillCategories].name}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                <div key={skill.name} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {skill.name}
                    </span>
                    <div className="text-right">
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        {skill.years}
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full bg-gradient-to-r ${getSkillBarColor(skill.level)} transition-all duration-1000 ease-out ${
                        animatedSkills[activeCategory] ? 'w-full' : 'w-0'
                      }`}
                      style={{
                        width: animatedSkills[activeCategory] ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    ></div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className={`text-3xl font-bold text-center text-slate-900 dark:text-white mb-8 transition-all duration-1000 ${certificationsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className={`bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 p-6 text-center group hover:scale-105 hover:-translate-y-2 ${
                  certificationsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <img
                  src={cert.logo}
                  alt={cert.issuer}
                  className="w-16 h-16 mx-auto mb-4 rounded-lg object-cover"
                />
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {cert.name}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 mb-2">
                  {cert.issuer}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-500 mb-2">
                  {cert.date}
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-mono">
                  {cert.credential}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
              Additional Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Problem Solving", "Team Leadership", "Code Review", "Mentoring",
                "Agile Methodologies", "Project Management", "UI/UX Design", "Performance Optimization",
                "Security Best Practices", "API Design", "Database Design", "Version Control",
                "Testing Strategies", "Documentation", "Cross-platform Development", "Accessibility"
              ].map((skill) => (
                <div
                  key={skill}
                  className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors duration-200"
                >
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
