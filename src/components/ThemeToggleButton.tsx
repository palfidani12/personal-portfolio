import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "../hooks/dark-mode";

export const ThemeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useDarkMode();
  return (
    <button
      onClick={toggleTheme}
      className="ml-4 text-white dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors"
    >
      {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};
