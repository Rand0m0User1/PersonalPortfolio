"use client";
import { Link } from "react-scroll/modules";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Projects", page: "projects" },
  { label: "Recordings", page: "recordings" },
  { label: "Education", page: "education" },
  { label: "Résumé", page: "resume" },
];

const Navbar = () => {
  const pathname = usePathname();
  const { resolvedTheme, setTheme, theme } = useTheme();
  const [navbar, setNavbar] = useState(false);
  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => setThemeLoaded(true), [theme]);

  if (!themeLoaded) return null;

  return (
    <header
      className={`w-full mx-auto px-6 fixed top-0 z-50 sm:px-20 backdrop-blur-xl transition-all duration-300 ${
        resolvedTheme === "dark"
          ? "bg-stone-900/90 border-b border-stone-700/30 shadow-lg shadow-black/20"
          : "bg-white/90 border-b border-gray-200/30 shadow-lg shadow-gray-200/50"
      }`}
    >
      <div className="justify-between md:items-center md:flex max-w-7xl mx-auto">
        <div>
          <div className="flex justify-between items-center py-4">
            <div className="md:py-5 md:block">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <Image
                  className="cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-3"
                  src="/logo.png"
                  alt="logo"
                  width={90}
                  height={90}
                />
              </Link>
            </div>
            <div className="md:hidden">
              <button 
                onClick={() => setNavbar(!navbar)} 
                className="p-2.5 rounded-xl hover:bg-amber-400/20 transition-all duration-200"
                aria-label="Toggle menu"
              >
                {navbar ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
              </button>
            </div>
          </div>
        </div>
        <div
          className={`transition-all duration-300 ease-in-out transform ${
            navbar
              ? "max-h-screen opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-full"
          } overflow-hidden md:flex md:max-h-full md:opacity-100 md:translate-y-0`}
        >
          <div className="flex flex-col items-center space-y-8 pb-6 md:pb-0 md:flex-row md:space-x-10 md:space-y-0">
            {NAV_ITEMS.map((item, idx) =>
              item.label === "Résumé" ? (
                <a
                  key={idx}
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block lg:inline-block cursor-pointer font-semibold text-sm tracking-wide uppercase transition-all duration-200 relative group ${
                    resolvedTheme === "dark"
                      ? "text-neutral-100 hover:text-amber-400"
                      : "text-neutral-900 hover:text-amber-500"
                  }`}
                  onClick={() => setNavbar(!navbar)}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ) : (
                <Link
                  key={idx}
                  to={item.page}
                  className={`block lg:inline-block cursor-pointer font-semibold text-sm tracking-wide uppercase transition-all duration-200 relative group ${
                    resolvedTheme === "dark"
                      ? "text-neutral-100 hover:text-amber-400"
                      : "text-neutral-900 hover:text-amber-500"
                  }`}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => setNavbar(!navbar)}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            )}
            {resolvedTheme === "dark" ? (
              <button
                onClick={() => setTheme("light")}
                className="bg-gradient-to-br from-amber-300 to-amber-500 p-2.5 rounded-xl hover:from-amber-400 hover:to-amber-600 transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-md"
                aria-label="Switch to light mode"
              >
                <RiSunLine size={22} color="black" />
              </button>
            ) : (
              <button
                onClick={() => setTheme("dark")}
                className="bg-gradient-to-br from-slate-700 to-slate-900 p-2.5 rounded-xl hover:from-slate-800 hover:to-black transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-md"
                aria-label="Switch to dark mode"
              >
                <RiMoonFill size={22} color="white" />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
