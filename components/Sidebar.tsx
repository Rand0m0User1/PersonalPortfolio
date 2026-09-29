"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaBriefcase,
  FaLaptopCode,
  FaBookOpen,
  FaMusic,
  FaListUl,
  FaGraduationCap,
  FaPaperPlane,
  FaLinkedin,
  FaGithub,
  FaFileAlt,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { site } from "@/data/site";

const NAV_ITEMS: { id: string; label: string; icon: IconType }[] = [
  { id: "home", label: "Home", icon: FaHome },
  { id: "experience", label: "Experience", icon: FaBriefcase },
  { id: "projects", label: "Projects", icon: FaLaptopCode },
  { id: "publications", label: "Publications", icon: FaBookOpen },
  { id: "recordings", label: "Recordings", icon: FaMusic },
  { id: "skills", label: "Skills", icon: FaListUl },
  { id: "education", label: "Education", icon: FaGraduationCap },
  { id: "contact", label: "Reach Out", icon: FaPaperPlane },
];

const SOCIAL_ITEMS: { href: string; label: string; icon: IconType }[] = [
  { href: site.linkedin, label: "LinkedIn", icon: FaLinkedin },
  { href: site.github, label: "GitHub", icon: FaGithub },
  { href: site.resume, label: "Résumé", icon: FaFileAlt },
];

const rowClass = (isActive: boolean) =>
  `flex items-center h-11 rounded-xl transition-colors duration-200 ${
    isActive
      ? "bg-orange-100 text-orange-600"
      : "text-slate-500 hover:bg-orange-50 hover:text-orange-600"
  }`;

const Sidebar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const onHome = pathname === "/";

  useEffect(() => {
    if (!onHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [onHome]);

  const label = (text: string) =>
    open && (
      <span className="text-sm font-medium whitespace-nowrap">{text}</span>
    );

  return (
    <aside
      className={`fixed top-0 left-0 z-50 h-screen overflow-y-auto bg-white/95 backdrop-blur border-r border-slate-200 shadow-sm transition-all duration-300 ${
        open ? "w-56" : "w-16"
      }`}
    >
      <div className="flex min-h-full items-center">
        <nav className="w-full flex flex-col gap-1 px-2.5 py-4">
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Collapse menu" : "Expand menu"}
            aria-expanded={open}
            className={rowClass(false)}
          >
            <span className="w-11 flex justify-center shrink-0">
              {open ? <FaTimes size={19} /> : <FaBars size={19} />}
            </span>
            {label("Menu")}
          </button>

          <div className="my-2 h-px bg-slate-200" />

          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={onHome ? `#${item.id}` : `/#${item.id}`}
              onClick={() => setOpen(false)}
              className={rowClass(onHome && active === item.id)}
            >
              <span className="w-11 flex justify-center shrink-0">
                <item.icon size={19} />
              </span>
              {label(item.label)}
            </a>
          ))}

          <div className="my-2 h-px bg-slate-200" />

          {SOCIAL_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className={rowClass(false)}
            >
              <span className="w-11 flex justify-center shrink-0">
                <item.icon size={19} />
              </span>
              {label(item.label)}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
