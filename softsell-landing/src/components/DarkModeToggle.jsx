import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);  
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="relative flex items-center">
      <label htmlFor="dark-mode-toggle" className="flex items-center cursor-pointer">
        <div className="relative mr-3">
          <input
            type="checkbox"
            id="dark-mode-toggle"
            checked={isDarkMode}
            onChange={toggleDarkMode}
            className="hidden"
          />
          <div className="w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition duration-300">
            <div
              className={`w-4 h-4 bg-white rounded-full shadow-md transform transition duration-300 ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`}
            ></div>
          </div>
        </div>
        <span className="text-lg">{isDarkMode ? "Dark Mode" : "Light Mode"}</span>
      </label>
    </div>
  );
}
