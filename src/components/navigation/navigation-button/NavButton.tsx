import { useNavigate } from "react-router-dom";
import { Routes } from "../../../enums/Routes";

export type NavButtonType =
  | "introduction"
  | "personal-projects"
  | "professional-experience"
  | "skills"
  | "contact";

export const NavigationButton = ({ type, isActive = false }: { type: NavButtonType; isActive?: boolean }) => {
  const getButtonText = (buttonType: NavButtonType) => {
    let text: string = "";
    switch (buttonType) {
      case "introduction":
        text = "Home";
        break;
      case "contact":
        text = "Contact";
        break;
      case "personal-projects":
        text = "Personal Projects";
        break;
      case "professional-experience":
        text = "Professional Experience";
        break;
      case "skills":
        text = "Skills";
        break;
      default:
        break;
    }
    return text;
  };
  const getButtonRoute = (buttonType: NavButtonType) => {
    let text: string = "";
    switch (buttonType) {
      case "introduction":
        text = Routes.Home;
        break;
      case "contact":
        text = Routes.Contact;
        break;
      case "personal-projects":
        text = Routes.PersonalProjects;
        break;
      case "professional-experience":
        text = Routes.ProfessionalExperience;
        break;
      case "skills":
        text = Routes.Skills;
        break;
      default:
        break;
    }
    return text;
  };
  const navigate = useNavigate();

  return (
    <div 
      className={`px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer ${
        isActive 
          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg" 
          : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
      }`}
      onClick={() => navigate(getButtonRoute(type))}
    >
      <span className="font-medium text-sm">
        {getButtonText(type)}
      </span>
    </div>
  );
};
