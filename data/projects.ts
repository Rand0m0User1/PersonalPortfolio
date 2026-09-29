export type Project = {
  name: string;
  description: string;
  image?: string;
  tags?: string[];
  github?: string;
  link?: string;
};

export const projects: Project[] = [
  {
    name: "Woodland Cemetery Restoration",
    description:
      "Led a development team to refactor the organization website, improve mobile functionality, and map 715+ previously uncharted graves at a long-neglected historic cemetery in Richmond, VA. Graves are displayed on an interactive interface showing burial records, 3D grave scans, and Find-A-Grave records.",
    image: "/woodland-cemetery.jpg",
    tags: ["Apps Script", "Javascript", "SVG Image Mapping"],
    github: "https://github.com/Rand0m0User1/WoodlandCemetery2025",
    link: "https://www.woodlandrestorationfoundation.org/map",
  },
  {
    name: "Fintelligent",
    description:
      "Congressional App Challenge winner. Led a team to win the competitive VA-01 district in a national competition with 3,881 submissions. A mobile and desktop app applying image processing and data science to detect pollution-induced disease in freshwater fish. Showcased at the U.S. Capitol, where the team met Congressman Rob Wittman in April 2025.",
    image: "/fintelligent.png",
    tags: ["React.js", "Roboflow", "PyTorch"],
    link: "https://www.congressionalappchallenge.us/24-VA01/",
  },
  {
    name: "HCPS Transportation",
    description:
      "Co-developed a cross-platform mobile app integrated with the Edulog transportation logistics platform, letting Henrico County Public Schools students verify school-bus boarding from their smartphones.",
    image: "/bustransportation.jpeg",
    tags: ["Flutter", "Firebase"],
    link: "https://docs.google.com/presentation/d/1ZvLDIaKy_XhhAAJHN5zTUyqJCVizXZf3AlVmyxWWkZk/edit?usp=sharing",
  },
  {
    name: "This Website",
    description:
      "All about me. Built with Next.js, TypeScript, and Tailwind CSS, with interactive 3D CAD models rendered in the browser.",
    image: "/portfolio.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Rand0m0User1/PersonalPortfolio",
  },
];
