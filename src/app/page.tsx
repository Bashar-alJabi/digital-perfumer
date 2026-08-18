import CustomCursor from "@/components/cursor/CustomCursor";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TechStackSection from "@/components/sections/TechStackSection";

export default function Home() {
	return (
		<main className="min-h-screen bg-perfume-bg text-perfume-text font-sans selection:bg-perfume-primary selection:text-white">
			<CustomCursor />
			{/* Floating Capsule Navbar */}
			<Navbar />
			{/* Hero Section */}
			<section id="hero">
				<HeroSection />
			</section>
			{/* Philosophy Section */}
			<section id="philosophy">
				<PhilosophySection />
			</section>
			{/* Craftsman / About Section */}
			<section id="about">
				<AboutSection />
			</section>
			{/* Real-World Formulations / Projects Section */}
			<section id="projects">
				<ProjectsSection />
			</section>
			{/* Formulation Cabinet / Tech Stack Section */}
			<section id="skills">
				<TechStackSection />
			</section>
			{/* Contact Section */}
			<section id="contact">
				<ContactSection />
			</section>
			{/* Footer Component */}
			<Footer />
		</main>
	);
}
