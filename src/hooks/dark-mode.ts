import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) return savedTheme === "dark";

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = window.document.getElementById("app-main-div");
    const htmlElement = window.document.documentElement;
    const theme = isDarkMode ? "dark" : "light";

    if (root === null) {
      console.warn("DarkMode - App root div cannot be found");
    } else {
      if (isDarkMode) {
        htmlElement.setAttribute("data-theme", "dark");
      } else {
        htmlElement.setAttribute("data-theme", "light");
      }
    }

    localStorage.setItem("theme", theme);
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return { isDarkMode, toggleTheme };
};
