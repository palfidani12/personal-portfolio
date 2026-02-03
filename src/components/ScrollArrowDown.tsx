import { ChevronDown } from "lucide-react";
import { scrollToSection } from "../utils/scroll";

export const ScrollArrowDown = () => {
  return (
    <button
      onClick={() => scrollToSection("about")}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors group cursor-pointer"
      aria-label="Scroll down"
    >
      <ChevronDown className="w-8 h-8 animate-bounce" />
    </button>
  );
};
