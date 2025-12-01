"use client";
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === "dark" }}>
      <div
        className={
          theme === "dark"
            ? "bg-gray-900 text-white min-h-screen"
            : "bg-gray-100 text-gray-900 min-h-screen"
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

function ThemeToggleButton() {
  const { toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-4 py-2 rounded-full border shadow-md hover:scale-105 transition-all"
    >
      {isDark ? "🌙 Dark" : "🌞 Light"}
    </button>
  );
}

function ThemeCard() {
  const { isDark } = useTheme();

  return (
    <div
      className={`
        w-96 p-6 rounded-3xl transition-all duration-300 backdrop-blur-xl 
        border shadow-xl hover:scale-[1.03] hover:shadow-2xl
        ${isDark 
          ? "bg-gray-800/60 border-gray-700/60 shadow-purple-900/50" 
          : "bg-white/70 border-gray-300/60 shadow-blue-300/50"
        }
      `}
    >
      <h2
        className={`text-2xl font-semibold mb-3 ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        Themed Card
      </h2>

      <p className={`text-base mb-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
        This card automatically adapts to light and dark theme settings. Experience modern
        UI transitions and a smooth glassmorphism effect.
      </p>

      <button
        className={`px-5 py-2 rounded-xl font-medium transition-all
          ${isDark 
            ? "bg-purple-600 hover:bg-purple-700 text-white" 
            : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
      >
        Explore More
      </button>
    </div>
  );
}

const ThemeToggler = () => {
  return (
    <div className="p-10 flex flex-col items-center gap-6">
      <ThemeToggleButton />
      <ThemeCard />
    </div>
  );
};

export default ThemeToggler;
