import {
  FaCode,
  FaServer,
  FaShieldAlt,
  FaCube,
  FaLanguage,
} from "react-icons/fa";
import type { IconType } from "react-icons";

export type SkillGroup = {
  label: string;
  icon: IconType;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    icon: FaCode,
    items: [
      "Python",
      "Java",
      "TypeScript / JavaScript",
      "SQL",
      "HTML / CSS",
      "LaTeX",
      "C++",
    ],
  },
  {
    label: "Backend, Web & Tooling",
    icon: FaServer,
    items: [
      "FastAPI",
      "Flask",
      "React.js",
      "REST APIs",
      "PostgreSQL",
      "Git",
      "Domain-Driven Design",
      "Microservices",
    ],
  },
  {
    label: "Infrastructure & Security",
    icon: FaShieldAlt,
    items: [
      "Linux administration & hardening",
      "shell / bash",
      "systemd",
      "nginx",
      "Docker",
      "LDAP",
      "Backups & incident response",
      "Networking",
      "Azure cloud services",
    ],
  },
  {
    label: "Data & CAD",
    icon: FaCube,
    items: [
      "pandas",
      "NumPy",
      "Onshape (CAD)",
      "Fusion 360 (CAM)",
      "In-shop machining",
      "3D printing",
    ],
  },
  {
    label: "Multilingualism",
    icon: FaLanguage,
    items: [
      "English (Native)",
      "Polish (Native)",
      "Spanish (Elementary to Intermediate)",
    ],
  },
];
