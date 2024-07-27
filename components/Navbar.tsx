"use client" // this is a client component
import { Link } from "react-scroll/modules"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import { isLabeledStatement } from "typescript"
import React, { useEffect, useState } from "react"

interface NavItem {
    label: string
    page: string
  }

  const NAV_ITEMS: Array<NavItem> = [
    {
      label: "Home",
      page: "home",
    },
    {
      label: "About",
      page: "about",
    },
    {
      label: "Projects",
      page: "projects",
    },
    {
      label: "Résumé",
      page: "resume",
    },
  ]

const Navbar = () => {
  const pathname = usePathname()
  const { resolvedTheme, setTheme, theme } = useTheme()
  const [navbar, setNavbar] = useState(false)
  const [themeLoaded, setThemeLoaded] = useState(false)

    useEffect(() => setThemeLoaded(true), [theme])

    if (!themeLoaded) return null

    return (
      <header className={`w-full mx-auto px-4 fixed top-0 z-50 ${resolvedTheme === "dark" ? "bg-stone-900 dark:border-b dark:border-stone-600" : "bg-white shadow"}`}>
        <div className="justify-between md:items-center md:flex">
          <div>
            <div className="md:py-5 md:block">
              <h2 className="text-2xl font-bold">Aleksander Kurgan</h2>
            </div>
          </div>
          <div className="items-center justify-center md:flex md:space-x-6">
            {NAV_ITEMS.map((item, idx) => {
              return <a key={idx}>{item.label}</a>  
            })}
            
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
      </header>
    );
}

export default Navbar
