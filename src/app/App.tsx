import { MidnightNav } from "./components/midnight-nav";
import { MidnightSocial } from "./components/midnight-social";
import { MidnightHero } from "./components/midnight-hero";
import { MidnightAbout } from "./components/midnight-about";
import { MidnightProjects } from "./components/midnight-projects";
import { MidnightExperience } from "./components/midnight-experience";
import { MidnightContact } from "./components/midnight-contact";

export default function App() {
  return (
    <div
      className="min-h-screen w-full text-white relative overflow-x-hidden"
      style={{ backgroundColor: "#050816", fontFamily: "Inter, sans-serif" }}
    >
      <MidnightNav />
      <MidnightSocial />
      <main>
        <MidnightHero />
        <MidnightAbout />
        <MidnightProjects />
        <MidnightExperience />
        <MidnightContact />
      </main>
    </div>
  );
}
