import {
  NavigationButton,
  type NavButtonType,
} from "./navigation-button/NavButton";

export const Navigation = () => {
  const menuPoints: NavButtonType[] = [
    "introduction",
    "personal-projects",
    "professional-experience",
    "skills",
    "contact",
  ];

  return (
    <div className="flex flex-row gap-5 align-middle justify-center my-5 mx-1">
      {menuPoints.map((navButtonType) => (
        <NavigationButton type={navButtonType} key={navButtonType} />
      ))}
    </div>
  );
};
