// Navigation
export const navigationMenuPoints = [
  { id: "home", name: "Home" },
  { id: "about", name: "About" },
  { id: "experience", name: "Experience" },
  { id: "education", name: "Education" },
  { id: "skills", name: "Skills" },
  /* { id: "work", name: "Work" }, */
  { id: "contact", name: "Contact" },
];

// Hero
export const firstName = "Dániel";
export const lastName = "Pálfi";
export const heroIntro =
  "I am a software engineer with experience in frontend and backend development. I specialize in building efficient and user-friendly web applications.";
export const professionTitle = "Software Engineer";
export const linkedInUrl = "https://www.linkedin.com/in/dplfi1206/";
export const githubUrl = "https://github.com/palfidani12";
export const contactEmail = "palfidani4@gmail.com";

// Experience
export const workExperiences = [
  {
    title: "Associate Software Engineer",
    company: "Genesys",
    period: "2023.07 - 2025.08",
    descriptionItems: [
      "Delivered end-to-end implementation of key features in a React + TypeScript micro-frontend environment using Vite and SCSS",
      "Enhanced deployment reliability by integrating CI/CD pipelines in Jenkins and Docker, reducing manual deployment effort by 30%",
      "Utilised AWS S3 and Lambda for cloud-based solutions and optimised static asset delivery",
      "Led sprint meetings and collaborated across distributed international teams in an Agile/Scrum environment",
      "Wrote robust tests (unit, system, and E2E) using Playwright and Vitest, improving overall test coverage.",
      " Contributed to UX design discussions using Figma and coordinated development via Jira",
    ],
  },
  {
    title: "Associate Software Engineer (Part-time)",
    company: "Genesys",
    period: "2022.07 - 2023.06",
    descriptionItems: [
      "Joined a newly formed team building a next-generation frontend platform",
      "Built reusable, accessible React components using TypeScript and Vite",
      "Developed backend integrations with Node.js and Express, connecting frontend with internal APIs",
      "Practiced Agile and Git-based collaboration across multiple international teams",
      "Assisted in implementing automated testing pipelines using Playwright and Jest",
      "Recognized for strong technical autonomy and problem-solving, leading to promotion from part-time to full-time engineer within 12 months",
    ],
  },
];

// Education
export const previousEducation = [
  {
    degree: "Master of Autonomous Systems and Intelligent Robots",
    school: "Aalto university",
    period: "2025 - ",
    description:
      "Currently pursuing a master's degree focused on autonomous systems and intelligent robotics, where I am deepening my knowledge in AI, machine learning, and robotics.",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Universidad del País Vasco",
    period: "2023.01 - 2023.06",
    description:
      "Erasmus semester in Spain during my bachelor studies, where I deepened my knowledge of software development and gained international experience.",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Eötvös Loránd University",
    period: "2021-2024",
    description:
      "Pursued a bachelor's degree in computer science, where I developed a strong foundation in programming, algorithms, and software engineering principles.",
  },
];

// Skills
export const skillsByCategories = [
  {
    category: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "Scss",
      "Tailwind CSS",
      "HTML/CSS",
      "Redux",
      "Zustand",
      "Vite",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "REST APIs",
      "Spring Boot",
      "Java",
      "AWS Lambda",
    ],
  },
  {
    category: "DevOps",
    skills: [
      "Docker",
      "AWS",
      "CI/CD",
      "GitHub Actions",
      "Terraform",
      "Jenkins",
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      "Git",
      "Jest",
      "Figma",
      "Agile Methodologies",
      "Scrum",
      "Kanban",
      "Playwright",
      "Integration Testing",
      "Unit Testing",
    ],
  },
];

// Projects
export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with cart functionality, payment integration, and admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates and team collaboration features.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    tech: ["React", "TypeScript", "Firebase", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for tracking social media metrics across multiple platforms with data visualization.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tech: ["Next.js", "Chart.js", "MongoDB", "REST API"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

// Contact
export const location = "Espoo, Finland";
export const phoneNumber = "+36 30 014 4234";
