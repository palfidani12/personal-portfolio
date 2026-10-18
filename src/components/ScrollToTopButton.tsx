import { ArrowUp } from "lucide-react";
import { useScroll } from "../hooks/scroll";
import { scrollToSection } from "../utils/scroll";

// Mobile-only floating button that appears once the visitor has scrolled down
export const ScrollToTopButton = () => {
  const { scrollY } = useScroll();
  const isVisible = scrollY > 400;

  return (
    <button
      onClick={() => scrollToSection("home")}
      className={`md:hidden fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-40 grid place-items-center size-12 rounded-full bg-fg text-bg shadow-[0_8px_24px_-6px_rgb(0_0_0/0.4)] active:scale-95 transition-all duration-300 cursor-pointer ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Scroll to top"
      inert={!isVisible}
    >
      <ArrowUp className="size-5" />
    </button>
  );
};
