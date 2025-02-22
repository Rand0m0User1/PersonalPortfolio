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
      className={`w-full mx-auto px-4 fixed top-0 z-50 sm:px-20 ${
        resolvedTheme === "dark"
          ? "bg-stone-900 dark:border-b dark:border-stone-600"
          : "bg-white shadow"
      }`}
    >
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex justify-between items-center py-3">
            <div className="md:py-5 md:block">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <Image
                  className="cursor-pointer"
                  src="/logo.png"
                  alt="logo"
                  width={90}
                  height={90}
                />
              </Link>
            </div>
            <div className="md:hidden">
              <button onClick={() => setNavbar(!navbar)} className="p-2">
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
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
          <div className="flex flex-col items-center space-y-7 pb-4 md:pb-0 md:flex-row md:space-x-6 md:space-y-0">
            {NAV_ITEMS.map((item, idx) =>
              item.label === "Résumé" ? (
                <a
                  key={idx}
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block lg:inline-block cursor-pointer ${
                    resolvedTheme === "dark"
                      ? "text-neutral-100 hover:text-neutral-500"
                      : "text-neutral-900 hover:text-neutral-500"
                  }`}
                  onClick={() => setNavbar(!navbar)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={idx}
                  to={item.page}
                  className={`block lg:inline-block cursor-pointer ${
                    resolvedTheme === "dark"
                      ? "text-neutral-100 hover:text-neutral-500"
                      : "text-neutral-900 hover:text-neutral-500"
                  }`}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => setNavbar(!navbar)}
                >
                  {item.label}
                </Link>
              )
            )}
            {resolvedTheme === "dark" ? (
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
      </div>
    </header>
  );
};

export default Navbar;
