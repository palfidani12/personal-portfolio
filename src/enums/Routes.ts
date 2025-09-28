export const Routes = {
  Home: "/",
  Contact: "/contact",
  Skills: "/skills",
  PersonalProjects: "/personal-projects",
  ProfessionalExperience: "/professional-experience",
} as const;

export type Routes = (typeof Routes)[keyof typeof Routes];
