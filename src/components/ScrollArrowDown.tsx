import { ChevronDown } from "lucide-react";
import { scrollToSection } from "../utils/scroll";

export const ScrollArrowDown = () => {
  return (
    <button
      onClick={() => scrollToSection("about")}
      className="relative hidden sm:flex mx-auto my-10 flex-col items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-subtle hover:text-fg transition-colors cursor-pointer"
      aria-label="Scroll down"
    >
      Scroll
      <ChevronDown className="size-5 animate-bounce" />
    </button>
  );
};
