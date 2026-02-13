import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "../hooks/dark-mode";

export const ThemeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useDarkMode();
  return (
    <button
      onClick={toggleTheme}
      className="ml-4 text-(--nav-button-text-color) hover:text-(--nav-button-text-color-hover) transition-colors cursor-pointer"
    >
      {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};
