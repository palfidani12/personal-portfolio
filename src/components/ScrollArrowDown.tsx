import { ChevronDown } from "lucide-react";
import { scrollToSection } from "../utils/scroll";

export const ScrollArrowDown = () => {
  return (
    <button
      onClick={() => scrollToSection("about")}
      className="items-center cursor-pointer flex flex-row justify-center mt-18"
      aria-label="Scroll down"
    >
      <ChevronDown className="w-8 h-8 animate-bounce text-(--default-font-color)" />
    </button>
  );
};
