export type University = {
  id: string;
  name: string;
  degree: string;
  year: string;
  gpa: string;
  lat: number;
  lng: number;
  logo: string;
  color: string;
};

export const universities: University[] = [
  {
    id: "elte",
    name: "ELTE",
    degree: "Master of Science in Computer Science",
    year: "2020 - 2022",
    gpa: "3.9/4.0",
    lat: 0.4275,
    lng: 150.1697,
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=60&h=60&fit=crop&crop=center",
    color: "from-red-500 to-red-600",
  },
  {
    id: "upv",
    name: "Stanford University",
    degree: "Master of Science in Computer Science",
    year: "2020 - 2022",
    gpa: "3.9/4.0",
    lat: 37.4275,
    lng: -122.1697,
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=60&h=60&fit=crop&crop=center",
    color: "from-red-500 to-red-600",
  },
  {
    id: "aalto",
    name: "Stanford University",
    degree: "Master of Science in Computer Science",
    year: "2020 - 2022",
    gpa: "3.9/4.0",
    lat: 37.4275,
    lng: -122.1697,
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=60&h=60&fit=crop&crop=center",
    color: "from-red-500 to-red-600",
  },
  {
    id: "aegean",
    name: "University of California, Berkeley",
    degree: "Bachelor of Science in Computer Science",
    year: "2016 - 2020",
    gpa: "3.8/4.0",
    lat: 37.8719,
    lng: -122.2585,
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=60&h=60&fit=crop&crop=center",
    color: "from-blue-500 to-blue-600",
  },
];

export const contactInfo = [
  {
    title: "Email",
    value: "palfidani4@gmail.com",
    link: "mailto:palfidani4@gmail.com",
  },
  {
    title: "Phone",
    value: "+36 30 014 4234",
    link: "tel:+36300144234",
  },
  {
    title: "Location",
    value: "Helsinki, Finland",
    link: "#",
  },
  {
    title: "LinkedIn",
    value: "@dplfi1206",
    link: "https://www.linkedin.com/in/dplfi1206/",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/palfidani12",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/dplfi1206/",
  },
];

export const experiences = [
  {
    id: 1,
    company: "Genesys",
    position: "Associate Software Engineer",
    duration: "2024.07 - 2025.08",
    location: "Hybrid (Budapest)",
    type: "Full-time",
    logo: "https://www.genesys.com/media/Genesys_logo-mark.svg",
    description:
      "Leading development of scalable web applications and mentoring junior developers. Responsible for architecture decisions and technical roadmap planning.",
    achievements: [
      "Led a team of 5 developers in building a microservices architecture that improved system performance by 40%",
      "Implemented CI/CD pipelines reducing deployment time from 2 hours to 15 minutes",
      "Mentored 3 junior developers who were promoted within 12 months",
      "Redesigned legacy system resulting in 60% reduction in maintenance costs",
    ],
    technologies: [
      "React",
      "Node.js",
      "AWS",
      "Docker",
      "Kubernetes",
      "PostgreSQL",
      "GraphQL",
    ],
    current: false,
  },
  {
    id: 2,
    company: "Genesys",
    position: "Software Engineer Intern",
    duration: "2023.07 - 2024.06",
    location: "Hybrid (Budapest)",
    type: "Part-time (32h)",
    logo: "https://www.genesys.com/media/Genesys_logo-mark.svg",
    description:
      "Learned the fundamentals of working in a multinational environment, using agile methodoligies to deliver production ready code with throughout testing.",
    achievements: [
      "Assisted in the delivery of a product from the planning phase all the way until the release and technical support phase",
      "Developed reusable component library used across 20+ projects",
      "Improved application load times by 50% through optimization",
      "Implemented automated testing reducing bugs by 70%",
    ],
    technologies: [
      "Vue.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Docker",
      "Jest",
      "Sass",
    ],
    current: false,
  },
];
