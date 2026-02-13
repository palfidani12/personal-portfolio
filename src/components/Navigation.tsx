import { navigationMenuPoints } from "../data/data";
import { ThemeToggleButton } from "./ThemeToggleButton";
import { scrollToSection } from "../utils/scroll";
import { useScroll } from "../hooks/scroll";

export const Navigation = () => {
  const { isScrolled } = useScroll();

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? "backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-light tracking-wide"
          >
            <span className="text-(--default-font-color)">daniel</span>
            <span className="text-cyan-500">palfi</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navigationMenuPoints.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium tracking-wider text-(--nav-button-text-color) hover:text-(--nav-button-text-color-hover) transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}
            <ThemeToggleButton />
          </div>

          {/* Mobile Menu TODO: Check if this is necessary */}
          {/* <button
            onClick={toggleDarkMode}
            className="md:hidden text-white dark:text-slate-300"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button> */}
        </div>
      </div>
    </div>
  );
};
