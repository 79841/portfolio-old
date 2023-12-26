import { ExperienceSection } from "./_components/experience-section";
import { HomeSection } from "./_components/home-section";
import { SkillsSection } from "./_components/skills-section/SkillsSection";

export default function HomePage() {
  return (
    <main className="pt-24">
      <HomeSection />
      <SkillsSection />
      <ExperienceSection />
    </main>
  );
}
