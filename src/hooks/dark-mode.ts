import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) return savedTheme === "dark";

    return mediaQuery.matches;
  });

  useEffect(() => {
    const eventListener = (e: MediaQueryListEvent) => {
      const savedTheme = localStorage.getItem("theme");

      if (savedTheme) return savedTheme === "dark";
      setIsDarkMode(e.matches);
    };
    mediaQuery.addEventListener("change", eventListener);
    return () => {
      mediaQuery.removeEventListener("change", eventListener);
    };
  }, [mediaQuery]);

  useEffect(() => {
    const htmlElement = window.document.documentElement;

    if (isDarkMode) {
      htmlElement.setAttribute("data-theme", "dark");
    } else {
      htmlElement.setAttribute("data-theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    const theme = isDarkMode ? "dark" : "light";
    setIsDarkMode((prev) => !prev);
    localStorage.setItem("theme", theme);
  };

  return { isDarkMode, toggleTheme };
};
