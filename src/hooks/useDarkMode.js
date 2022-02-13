import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

export const useDarkMode = () => {
  const [isDark, setIsDark] = useLocalStorage(`darkMode`, prefersDark);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
    setIsDark(e.matches);
  });

  useEffect(() => {
    if (!isDark) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [isDark]);

  return { toggleTheme, isDark };
};
