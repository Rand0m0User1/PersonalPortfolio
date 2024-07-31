import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ParticlesComponent from "../components/particles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aleksander Kurgan",
  description:
    "Portfolio of Aleksander Kurgan, showcasing projects, education, and experience.",
  keywords:
    "Aleksander Kurgan, portfolio, projects, education, experience, web development, CAD, Computer Aided Design",
  openGraph: {
    title: "Aleksander Kurgan",
    description:
      "Portfolio of Aleksander Kurgan, showcasing projects, education, and experience.",
  },
};

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm-px-6 md:max-w-5xl">
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <EducationSection />
    </main>
  );
}
