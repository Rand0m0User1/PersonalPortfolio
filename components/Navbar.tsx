"use client" // this is a client component
import React from "react"
import { useState } from "react"
import { Link } from "react-scroll/modules"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import { isLabeledStatement } from "typescript"

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
  ]

const Navbar = () => {
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme
    const pathname = usePathname()
    const [navbar, setNavbar] = useState(false)

    return (
        <header>
            <div>
                <div>
                    <div>
                        <h2>Aleksander Kurgan</h2>
                    </div>
                </div>
                <div></div>
            </div>
        </header>
    )
}

export default Navbar
