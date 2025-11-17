import React, { useEffect, useState } from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { useTheme } from "next-themes";

const Footer = () => {
  const { resolvedTheme } = useTheme();
  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    setThemeLoaded(true);
  }, [resolvedTheme]);

  if (!themeLoaded) return null;

  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <div className="w-full h-px mx-auto mt-12 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
      <div
        className={`mx-auto p-6 flex flex-col text-center ${
          resolvedTheme === "dark" ? "text-neutral-100" : "text-neutral-900"
        } md:flex-row md:justify-between items-center`}
      >
        <div
          className={`flex flex-row items-center justify-center space-x-2 mb-4 md:mb-0 ${
            resolvedTheme === "dark" ? "text-neutral-100" : "text-neutral-950"
          }`}
        >
          Built with <span className="text-red-500 animate-pulse text-xl">❤️</span> by <span className="font-semibold text-amber-500">Aleksander Kurgan</span>
        </div>
        <div className="flex flex-row items-center justify-center space-x-3">
          <a
            href="https://github.com/Rand0m0User1"
            rel="noreferrer"
            target="_blank"
            className="p-2.5 rounded-xl bg-gray-100 dark:bg-stone-800 hover:bg-amber-400 dark:hover:bg-amber-500 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-md hover:shadow-xl"
          >
            <AiOutlineGithub
              className="cursor-pointer"
              size={26}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/aleksander-kurgan/"
            rel="noreferrer"
            target="_blank"
            className="p-2.5 rounded-xl bg-gray-100 dark:bg-stone-800 hover:bg-amber-400 dark:hover:bg-amber-500 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-md hover:shadow-xl"
          >
            <AiOutlineLinkedin
              className="cursor-pointer"
              size={26}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
