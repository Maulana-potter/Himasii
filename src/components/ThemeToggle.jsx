import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
  // Cek theme awal dari localStorage atau preferensi sistem
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      return savedTheme === "dark" || (!savedTheme && prefersDark);
    }
    return false;
  });

  // Effect untuk update class HTML saat state berubah
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className={`
        fixed bottom-5 right-5 z-50 p-3 rounded-full shadow-lg transition-all duration-300
        focus:outline-none hover:scale-110
        ${isDarkMode ? "bg-slate-800 text-yellow-400" : "bg-white text-slate-900 border border-slate-200"}
      `}
      aria-label="Toggle Theme"
    >
      {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
    </button>
  );
};

export default ThemeToggle;
