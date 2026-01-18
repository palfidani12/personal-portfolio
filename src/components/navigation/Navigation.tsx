import { useLocation } from "react-router-dom";
import {
  NavigationButton,
  type NavButtonType,
} from "./navigation-button/NavButton";

const getPathForType = (type: NavButtonType): string => {
  switch (type) {
    case "introduction":
      return "/";
    case "personal-projects":
      return "/personal-projects";
    case "professional-experience":
      return "/professional-experience";
    case "skills":
      return "/skills";
    case "contact":
      return "/contact";
    default:
      return "/";
  }
};

export const Navigation = () => {
  const location = useLocation();
  const menuPoints: NavButtonType[] = [
    "introduction",
    "personal-projects",
    "professional-experience",
    "skills",
    "contact",
  ];

  return (
    <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-row gap-2 align-middle justify-center py-4">
          {menuPoints.map((navButtonType) => (
            <NavigationButton
              type={navButtonType}
              key={navButtonType}
              isActive={location.pathname === getPathForType(navButtonType)}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};
