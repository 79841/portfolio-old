import {
  ExperienceSection,
  HomeSection,
  ProjectsSection,
  SkillsSection,
} from "./_components/sections";

export default function HomePage() {
  return (
    <main className="sm:pt-24">
      <HomeSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
    </main>
  );
}
