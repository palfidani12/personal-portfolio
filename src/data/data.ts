// Navigation
export const navigationMenuPoints = [
  { id: "home", name: "Home" },
  { id: "about", name: "About" },
  { id: "experience", name: "Experience" },
  { id: "projects", name: "Projects" },
  { id: "education", name: "Education" },
  { id: "skills", name: "Skills" },
  { id: "contact", name: "Contact" },
];

// Hero
export const firstName = "Dániel";
export const lastName = "Pálfi";
export const heroIntro =
  "I build efficient, user-friendly web applications across the frontend and backend. I'm currently studying for a double-degree master's in Autonomous Systems and Intelligent Robots at Aalto University and EURECOM.";
export const professionTitle = "Software Engineer";
export const linkedInUrl = "https://www.linkedin.com/in/dplfi1206/";
export const githubUrl = "https://github.com/palfidani12";
export const contactEmail = "palfidani4@gmail.com";
export const currentStatus = "Double-degree MSc · Aalto & EURECOM";

// About
export const aboutLead =
  "I'm a software engineer with 3 years of production experience, now completing a double-degree master's in Autonomous Systems and Intelligent Robots at Aalto University and EURECOM.";
export const aboutParagraphs = [
  "Most of my work has been on the frontend, building React and TypeScript features in a micro-frontend platform at Genesys, backed by solid Java Spring Boot experience. My master's is where I'm going deeper into AI, machine learning and robotics.",
  "Outside of work I build side projects to try out new technologies, and I've studied in four countries along the way.",
];
export const focusAreas = [
  {
    title: "Frontend engineering",
    description:
      "Reusable, accessible React components and end-to-end features in TypeScript, from Figma to production.",
  },
  {
    title: "Backend & delivery",
    description:
      "Java Spring Boot APIs, shipped through CI/CD pipelines with Jenkins, Docker and AWS.",
  },
  {
    title: "AI & robotics",
    description:
      "Machine learning, computer vision and autonomous vessels through my master's and the EIT Digital summer school.",
  },
];

// Experience
// Roles are listed newest first; `promotion` is shown between consecutive roles
export const workExperiences = [
  {
    company: "Genesys",
    promotion: "Converted from part-time to full-time within 12 months",
    roles: [
      {
        title: "Associate Software Engineer",
        type: "Full-time",
        period: "2023.06 - 2025.08",
        tech: ["React", "TypeScript", "Vite", "SCSS", "Jenkins", "Docker", "AWS", "Playwright", "Vitest"],
        descriptionItems: [
          "Delivered end-to-end implementation of key features in a React + TypeScript micro-frontend environment using Vite and SCSS",
          "Enhanced deployment reliability by integrating CI/CD pipelines in Jenkins and Docker, reducing manual deployment effort by 30%",
          "Utilised AWS S3 and Lambda for cloud-based solutions and optimised static asset delivery",
          "Facilitated sprint meetings and kept work aligned across distributed teams in several countries, working in Scrum",
          "Wrote robust tests (unit, system, and E2E) using Playwright and Vitest, improving overall test coverage.",
          "Contributed to UX design discussions using Figma and coordinated development via Jira",
        ],
      },
      {
        title: "Associate Software Engineer",
        type: "Part-time",
        period: "2022.07 - 2023.06",
        tech: ["React", "TypeScript", "Vite", "Java", "Spring Boot", "Playwright", "Jest"],
        descriptionItems: [
          "Joined a newly formed team building a next-generation frontend platform",
          "Built reusable, accessible React components using TypeScript and Vite",
          "Developed backend integrations with Java Spring Boot, connecting frontend with internal APIs",
          "Practiced Agile and Git-based collaboration across multiple international teams",
          "Assisted in implementing automated testing pipelines using Playwright and Jest",
          "Recognized for strong technical autonomy and problem-solving, leading to promotion from part-time to full-time engineer within 12 months",
        ],
      },
    ],
  },
];

// Education
export const doubleDegree = {
  programme: "EIT Digital Master School",
  major: "Autonomous Systems and Intelligent Robots",
  period: "2025 - 2027",
  description:
    "A two-year double-degree master's focused on autonomous systems and intelligent robotics, where I am deepening my knowledge in AI, machine learning, and robotics. One year at each university, with a separate MSc awarded by both.",
  stages: [
    {
      year: "Year 1",
      period: "2025 - 2026",
      school: "Aalto University",
      location: "Espoo, Finland",
      degree: "Master of Science (Technology)",
    },
    {
      year: "Year 2",
      period: "2026 - 2027",
      school: "EURECOM",
      location: "Antibes, France",
      degree: "Master of Science in Networks and Telecommunications",
      specialization: "Internet of Things",
    },
  ],
};

export const previousEducation = [
  {
    degree: "Erasmus Exchange Semester in Computer Science",
    school: "Universidad del País Vasco",
    period: "2023.01 - 2023.06",
    description:
      "A semester abroad in Spain as part of my BSc at Eötvös Loránd University, where I deepened my knowledge of software development and gained international experience.",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Eötvös Loránd University",
    period: "2021 - 2024",
    description:
      "Pursued a bachelor's degree in computer science, where I developed a strong foundation in programming, algorithms, and software engineering principles.",
  },
];

export const certifications = [
  {
    title: "EIT Digital Summer School in Maritime Informatics & Robotics",
    issuer: "EIT Digital · University of the Aegean",
    location: "Greece",
    period: "29 Jun - 10 Jul 2026",
    descriptionItems: [
      "Built boats as a team and set them up with ArduPilot, first steering them remotely along predefined paths",
      "Added a separate Raspberry Pi running image processing and other autopilot integrations to control the vessel autonomously",
      "Final challenge: complete a predefined route with the vessel without explicitly programming the route, using Python",
    ],
    tech: ["ArduPilot", "Raspberry Pi", "Python", "Image Processing"],
    certificateUrl:
      "https://www.smartcertificate.com/SmartCertificate/?1%7c927e9716-44fa-4a62-8fcf-2f2c08e3775d%7c87bfc32f-02ba-435d-b434-683221427d3b",
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
    category: "AI & Machine Learning",
    skills: [
      "Python",
      "NumPy",
      "scikit-learn",
      "PyTorch",
      "TensorFlow",
      "MATLAB",
      "RAG",
      "LLM APIs",
      "Prompt Engineering",
      "Computer Vision",
      "NLP",
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
    title: "Smart Hiking Watch",
    description:
      "An embedded systems team project at Aalto. A LilyGO T-Watch (ESP32) tracks steps and GPS location and syncs over Bluetooth Low Energy to a Raspberry Pi hub, which calculates calories burned, sends them back to the watch and streams live hike sessions to a React web app.",
    tech: ["C++", "ESP32", "Bluetooth LE", "Raspberry Pi", "Python", "FastAPI", "SQLite", "React", "TypeScript"],
    status: "Completed",
    links: [{ label: "Source", url: "https://github.com/zsomborCzaban/smart_watch" }],
  },
  {
    title: "Personal Portfolio",
    description:
      "This website. A responsive single-page portfolio with light and dark themes, deployed automatically with GitHub Actions.",
    tech: ["React 19", "TypeScript", "Tailwind CSS", "Vite", "GitHub Actions"],
    status: "Live",
    links: [{ label: "Source", url: "https://github.com/palfidani12/personal-portfolio" }],
  },
];

// Contact
export const location = "Antibes, France";
export const phoneNumber = "+36 30 014 4234";
