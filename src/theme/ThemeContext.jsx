import React, { useState, useEffect, createContext, useContext } from "react";
import { lightTheme, darkTheme } from "./theme";

const ThemeContext = createContext({
  theme: darkTheme,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "dark" ? lightTheme : darkTheme
  );
  console.log("Initial theme:", theme);

  const toggleTheme = () => {
    const newTheme = theme === darkTheme ? lightTheme : darkTheme;
    console.log("New theme:", newTheme);
    setTheme(newTheme);
    console.log("Updated theme:", theme);
    localStorage.setItem("theme", newTheme === darkTheme ? "light" : "dark");
  };

  useEffect(() => {
    const handleSystemThemeChange = () => {
      const prefersColorScheme = window.matchMedia("(prefers-color-scheme: dark)");
      setTheme(prefersColorScheme.matches ? lightTheme : darkTheme);
    };

    window.addEventListener("storage", handleSystemThemeChange);

    return () => {
      window.removeEventListener("storage", handleSystemThemeChange);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);