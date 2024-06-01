import { useState, useEffect } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

const ThemeSwitcher = () => {
  const [selectedTheme, setSelectedTheme] = useState("light");
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const userPrefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedTheme =
      localStorage.getItem("selectedTheme") ||
      (userPrefersDark ? "dark" : "light");
    setSelectedTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (hasMounted) {
      document.documentElement.setAttribute("data-theme", selectedTheme);
      localStorage.setItem("selectedTheme", selectedTheme);
    }
  }, [selectedTheme, hasMounted]);

  const handleThemeChange = () => {
    setSelectedTheme(selectedTheme === "light" ? "dark" : "light");
  };

  if (!hasMounted) {
    return null;
  }

  return (
    <button
      className='flex justify-center h-full  items-center px-4 py-3 cursor-pointer hover:bg-secondaryColor'
      onClick={handleThemeChange}
    >
      {selectedTheme === "light" ? <HiOutlineMoon /> : <HiOutlineSun />}
    </button>
  );
};

export default ThemeSwitcher;
