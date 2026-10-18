import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "../hooks/dark-mode";

export const ThemeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useDarkMode();
  return (
    <button
      onClick={toggleTheme}
      className="grid place-items-center size-10 rounded-lg text-muted hover:text-fg hover:bg-surface-2 transition-colors cursor-pointer"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
    </button>
  );
};
