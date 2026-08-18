"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

interface SkillGroup {
	id: string;
	code: string;
	categoryTitle: string;
	subtitle: string;
	description: string;
	skills: { name: string; highlight?: boolean }[];
}

const skillGroups: SkillGroup[] = [
	{
		id: "web-design",
		code: "PLT-01",
		categoryTitle: "Web Platforms & Design Tools",
		subtitle: "Visual Sculpting & No-Code Systems",
		description:
			"Aesthetic composition tools and powerful CMS engines for rapid, high-impact digital presence.",
		skills: [
			{ name: "WordPress (Elementor)", highlight: true },
			{ name: "Wix Platform", highlight: true },
			{ name: "Figma" },
			{ name: "Canva Pro" },
		],
	},
	{
		id: "frontend",
		code: "FE-02",
		categoryTitle: "Frontend Development",
		subtitle: "Interactive Code & Architecture",
		description:
			"Modern component libraries, responsive styling, and custom scripting for tailored Web UI.",
		skills: [
			{ name: "Next.js", highlight: true },
			{ name: "React (State Mgmt)", highlight: true },
			{ name: "Tailwind CSS", highlight: true },
			{ name: "TypeScript", highlight: true },
			{ name: "JavaScript (ES6+)" },
			{ name: "HTML5 & CSS3" },
			{ name: "Sass / SCSS" },
			{ name: "Bootstrap" },
			{ name: "Pug.js" },
			{ name: "Gulp.js Task Runner" },
		],
	},
	{
		id: "practices",
		code: "DEV-03",
		categoryTitle: "Development Practices & Tools",
		subtitle: "System Control & Workflow Pipelines",
		description:
			"Version control systems, API connections, testing setups, and AI-assisted production workflows.",
		skills: [
			{ name: "Leveraging AI Tools", highlight: true },
			{ name: "Git & GitHub (VCS)", highlight: true },
			{ name: "API Integration", highlight: true },
			{ name: "Testing Tools" },
			{ name: "CI/CD Pipeline" },
			{ name: "Agile Environment" },
		],
	},
	{
		id: "capabilities",
		code: "CAP-04",
		categoryTitle: "Project Capabilities",
		subtitle: "Execution & Engineering Standards",
		description:
			"Core problem-solving methodologies, technical debugging, and mobile-first engineering.",
		skills: [
			{ name: "UI/UX Design", highlight: true },
			{ name: "Responsive Design", highlight: true },
			{ name: "Website Optimization & Maintenance", highlight: true },
			{ name: "Troubleshooting & Debugging", highlight: true },
			{ name: "Mobile-First Dev" },
			{ name: "Problem Solving" },
		],
	},
	{
		id: "marketing",
		code: "MKT-05",
		categoryTitle: "Digital Marketing & Office Suite",
		subtitle: "Growth Engines & Data Analytics",
		description:
			"Performance advertising campaigns, lead generation systems, and analytical tracking tools.",
		skills: [
			{ name: "Meta Ads Manager", highlight: true },
			{ name: "TikTok Ads", highlight: true },
			{ name: "Google Ads", highlight: true },
			{ name: "Campaign Setup & Optimization" },
			{ name: "Audience Targeting" },
			{ name: "Lead Generation" },
			{ name: "Ad Creative Design" },
			{ name: "Performance Analysis" },
			{ name: "Microsoft Excel" },
			{ name: "Word & PowerPoint" },
		],
	},
];

// Motion Variants for Staggered Skill Pills
const containerVariants = {
	hidden: { opacity: 0, y: 10 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.3,
			staggerChildren: 0.05,
		},
	},
	exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const itemVariants = {
	hidden: { opacity: 0, scale: 0.9, y: 8 },
	visible: { opacity: 1, scale: 1, y: 0 },
};

export default function TechStackSection() {
	const [activeGroupId, setActiveGroupId] = useState<string>("frontend");

	const activeGroup =
		skillGroups.find((g) => g.id === activeGroupId) || skillGroups[0];

	return (
		<section className="relative py-28 md:py-40 px-6 md:px-12 bg-perfume-bg text-perfume-text border-t border-perfume-soft/40 select-none">
			<div className="max-w-7xl mx-auto">
				{/* Section Header */}
				<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
					<div>
						<p className="text-xs uppercase tracking-[0.4em] font-semibold text-perfume-text/60 font-sans">
							[ Raw Ingredients & Tools ]
						</p>
						<h2 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-serif font-normal text-perfume-text leading-tight">
							The Digital <br />
							<span className="italic text-perfume-primary">
								Formulation Cabinet
							</span>
						</h2>
					</div>
					<p className="text-sm md:text-base font-light text-perfume-text/75 max-w-md font-sans leading-relaxed">
						Every creation requires precise raw materials. Here is the technical
						inventory used to craft memorable digital products.
					</p>
				</div>

				{/* Interactive Grid Layout */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
					{/* Left Category Selector Menu */}
					<div className="lg:col-span-5 space-y-3">
						{skillGroups.map((group) => {
							const isActive = group.id === activeGroupId;

							return (
								<button
									key={group.id}
									onClick={() => setActiveGroupId(group.id)}
									className={`w-full text-left p-5 md:p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
										isActive
											? "border-perfume-primary bg-perfume-surface shadow-md scale-[1.01]"
											: "border-perfume-soft/60 bg-perfume-bg/50 hover:border-perfume-primary/30 hover:bg-perfume-surface/40"
									}`}
								>
									<div className="flex items-center gap-4">
										<span
											className={`text-xs font-mono transition-colors duration-300 ${
												isActive
													? "text-perfume-primary font-bold"
													: "text-perfume-text/40"
											}`}
										>
											{group.code}
										</span>
										<div>
											<h3 className="text-base md:text-lg font-serif text-perfume-text">
												{group.categoryTitle}
											</h3>
											<p className="text-xs font-light text-perfume-text/60 font-sans mt-0.5">
												{group.skills.length} Ingredients
											</p>
										</div>
									</div>

									<span
										className={`text-lg transition-all duration-300 ${
											isActive
												? "text-perfume-primary translate-x-1"
												: "text-perfume-text/30"
										}`}
									>
										→
									</span>
								</button>
							);
						})}
					</div>

					{/* Right Dynamic Skill Ingredients Matrix */}
					<div className="lg:col-span-7">
						<AnimatePresence mode="wait">
							<motion.div
								key={activeGroup.id}
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -20 }}
								transition={{ duration: 0.35, ease: "easeOut" }}
								className="rounded-3xl border border-perfume-soft bg-perfume-surface p-8 md:p-12 shadow-sm min-h-[420px] flex flex-col justify-between"
							>
								<div>
									{/* Category Meta Info */}
									<div className="flex items-center justify-between border-b border-perfume-soft/50 pb-6 mb-8">
										<div>
											<span className="text-xs font-mono uppercase tracking-widest text-perfume-primary">
												[{activeGroup.code}] Cabinet Record
											</span>
											<h3 className="text-2xl md:text-4xl font-serif text-perfume-text mt-1">
												{activeGroup.categoryTitle}
											</h3>
										</div>
									</div>

									<p className="text-sm md:text-base font-light text-perfume-text/80 font-sans mb-8 leading-relaxed">
										{activeGroup.description}
									</p>

									{/* Staggered Skills Tag Pills */}
									<motion.div
										variants={containerVariants}
										initial="hidden"
										animate="visible"
										exit="exit"
										className="flex flex-wrap gap-2.5 md:gap-3"
									>
										{activeGroup.skills.map((skill) => (
											<motion.span
												key={skill.name}
												variants={itemVariants}
												className={`inline-flex items-center gap-1.5 text-sm md:text-base font-sans px-4 py-2 rounded-xl transition-all duration-300 border ${
													skill.highlight
														? "bg-perfume-primary/10 border-perfume-primary/50 text-perfume-text font-medium shadow-sm hover:border-perfume-primary"
														: "bg-perfume-bg/80 border-perfume-soft/80 text-perfume-text/80 hover:border-perfume-soft"
												}`}
											>
												{skill.highlight && (
													<span className="text-perfume-primary text-xs font-serif">
														✦
													</span>
												)}
												{skill.name}
											</motion.span>
										))}
									</motion.div>
								</div>

								{/* Cabinet Record Footer */}
								<div className="mt-12 pt-6 border-t border-perfume-soft/40 flex items-center justify-between text-xs font-mono text-perfume-text/50">
									<span>Selected Essence Category</span>
									<span className="text-perfume-primary/80">
										{activeGroup.subtitle}
									</span>
								</div>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</div>
		</section>
	);
}
