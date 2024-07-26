"use client"; // this is a client component
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

const NAV_ITEMS = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Projects", page: "projects" },
  { label: "Résumé", page: "resume" },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);

  const navItemClasses = currentTheme === "dark" ? "text-gray-200" : "text-gray-700";

  return (
    <header className={`w-full mx-auto px-4 shadow fixed top-0 z-50 ${currentTheme === "dark" ? "bg-stone-900 border-b border-stone-600" : "bg-white"}`}>
      <div className="flex justify-between items-center py-5">
        <h2 className={`text-2xl font-bold ${navItemClasses}`}>Aleksander Kurgan</h2>
        <div className="flex items-center space-x-6">
          {NAV_ITEMS.map((item, idx) => (
            <a key={idx} href={`#${item.page}`} className={`text-lg font-medium ${navItemClasses}`}>
              {item.label}
            </a>
          ))}
          {currentTheme === "dark" ? (
            <button
              onClick={() => setTheme("light")}
              className="bg-slate-100 p-2 rounded-xl"
            >
              <RiSunLine size={25} color="black" />
            </button>
          ) : (
            <button
              onClick={() => setTheme("dark")}
              className="bg-slate-100 p-2 rounded-xl"
            >
              <RiMoonFill size={25} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
