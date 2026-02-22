"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  // Only read once on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const isDark = storedTheme === "dark";

    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    setDark((prev) => {
      const newValue = !prev;

      document.documentElement.classList.toggle("dark", newValue);
      localStorage.setItem("theme", newValue ? "dark" : "light");

      return newValue;
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full
                 bg-white dark:bg-[#1e1e24]
                 shadow-lg transition-all duration-300"
    >
      {dark ? (
        <Sun className="text-yellow-400" />
      ) : (
        <Moon className="text-indigo-600" />
      )}
    </button>
  );
}