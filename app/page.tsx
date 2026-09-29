import HomeSection from "@/components/HomeSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import PublicationsSection from "@/components/PublicationsSection";
import RecordingsSection from "@/components/RecordingsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import ScrollRestore from "@/components/ScrollRestore";

// Reorder or remove a section by editing this list.
export default function Home() {
  return (
    <>
      <ScrollRestore />
      <HomeSection />
      <ExperienceSection />
      <ProjectsSection />
      <PublicationsSection />
      <RecordingsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <footer className="border-t border-dashed border-slate-300 py-8 text-center text-sm text-slate-500">
        Built by Aleksander Kurgan
      </footer>
    </>
  );
}
