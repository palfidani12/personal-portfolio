import { useNavigate } from "react-router-dom";
import { Routes } from "../../../enums/Routes";

export type NavButtonType =
  | "introduction"
  | "personal-projects"
  | "professional-experience"
  | "skills"
  | "contact";

export const NavigationButton = ({ type }: { type: NavButtonType }) => {
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
    <div className="p-3 hover:border-b-2 transition-all duration-100 cursor-pointer">
      <span
        className="font-bold"
        onClick={() => navigate(getButtonRoute(type))}
      >
        {getButtonText(type)}
      </span>
    </div>
  );
};
