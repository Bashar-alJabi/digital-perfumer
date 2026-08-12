import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TechStackSection from "@/components/sections/TechStackSection";

export default function Home() {
	return (
		<main className="relative bg-perfume-bg min-h-screen">
			<HeroSection />
			<PhilosophySection />
			<ProjectsSection />
			<TechStackSection />
			<ContactSection />
		</main>
	);
}
