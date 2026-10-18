import { useState, useEffect } from "react";

const getSavedTheme = () => {
  try {
    return localStorage.getItem("theme");
  } catch {
    return null;
  }
};

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = getSavedTheme();

    if (savedTheme) return savedTheme === "dark";

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const eventListener = (e: MediaQueryListEvent) => {
      // An explicit choice wins over the system setting
      if (getSavedTheme()) return;
      setIsDarkMode(e.matches);
    };
    mediaQuery.addEventListener("change", eventListener);
    return () => {
      mediaQuery.removeEventListener("change", eventListener);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  const toggleTheme = () => {
    const nextIsDark = !isDarkMode;
    setIsDarkMode(nextIsDark);
    try {
      localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    } catch {
      // Storage unavailable (e.g. private mode) — the toggle still works for this visit
    }
  };

  return { isDarkMode, toggleTheme };
};
