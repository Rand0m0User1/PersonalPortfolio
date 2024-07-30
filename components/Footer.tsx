import React, { useEffect, useState } from 'react'
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"
import { useTheme } from "next-themes"

const Footer = () => {
  const { resolvedTheme } = useTheme()
  const [themeLoaded, setThemeLoaded] = useState(false)

  useEffect(() => {
    setThemeLoaded(true)
  }, [resolvedTheme])

  if (!themeLoaded) return null

  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0" />
      <div className={`mx-auto p-4 flex flex-col text-center ${resolvedTheme === "dark" ? "text-neutral-100" : "text-neutral-900"} md:flex-row md:justify-between`}>
        <div className={`flex flex-row items-center justify-center space-x-1 ${resolvedTheme === "dark" ? "text-neutral-100" : "text-neutral-950"}`}>
          Built with ❤️ Aleksander Kurgan
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="" rel="noreferrer" target="_blank">
            <AiOutlineGithub className={`hover:-translate-y-1 transition-transform cursor-pointer ${resolvedTheme === "dark" ? "text-neutral-100" : "text-neutral-950"}`} size={30} />
          </a>
          <a href="" rel="noreferrer" target="_blank">
            <AiOutlineLinkedin className={`hover:-translate-y-1 transition-transform cursor-pointer ${resolvedTheme === "dark" ? "text-neutral-100" : "text-neutral-950"}`} size={30} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
