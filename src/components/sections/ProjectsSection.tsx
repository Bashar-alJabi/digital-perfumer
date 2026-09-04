"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface Project {
	id: string;
	title: string;
	category: string;
	description: string;
	tags: string[];
	link?: string;
	codeLink?: string;
	customImage?: string;
	type: "professional" | "personal";
}

const allProjects: Project[] = [
	// --- Professional Projects ---
	{
		id: "01",
		title: "Sustayn Official Website",
		category: "Corporate Digital Hub",
		description:
			"Official corporate website designed and developed for Sustayn, delivering a high-performance brand presence and fluid UI/UX.",
		tags: ["WordPress", "UI/UX Design", "Performance"],
		link: "https://sustayn.co/",
		customImage: "/projects/sustayn.webp",
		type: "professional",
	},
	{
		id: "02",
		title: "Success School",
		category: "Educational Platform",
		description:
			"Modern educational platform built for interactive learning, custom functionality, and scalable student management.",
		tags: ["WordPress", "Custom Coding", "UX Design"],
		link: "https://success-school.net/",
		customImage: "/projects/success-school.webp",
		type: "professional",
	},
	{
		id: "03",
		title: "Formation Avenir",
		category: "Educational Platform",
		description:
			"Clean, conversion-focused platform designed for teacher training courses and educational program enrollment.",
		tags: ["WordPress", "Elementor", "Responsive"],
		link: "https://formationavenir.com/",
		customImage: "/projects/formation-avenir.webp",
		type: "professional",
	},
	{
		id: "04",
		title: "IndustriXport",
		category: "Industrial B2B Portal",
		description:
			"B2B international business portal focusing on clear service hierarchy, multi-language support, and industrial branding.",
		tags: ["WordPress", "UI/UX", "SEO"],
		link: "https://industrixport.fr/",
		customImage: "/projects/industrixport.webp",
		type: "professional",
	},
	{
		id: "05",
		title: "Rich Stars Real Estate",
		category: "Real Estate Platform",
		description:
			"Dubai property showcase platform crafted with responsive luxury layout structure and seamless property discovery.",
		tags: ["Wix", "Web Development", "UI Design"],
		link: "https://richstarsuae.com/",
		customImage: "/projects/rich-stars.webp",
		type: "professional",
	},
	{
		id: "06",
		title: "The Private Address Realty",
		category: "Luxury Real Estate",
		description:
			"Exclusive realty showroom showcasing premium property listings with a high-end bespoke digital aesthetic.",
		tags: ["Wix", "Real Estate", "UI Design"],
		link: "https://theprivateaddress.com/",
		customImage: "/projects/the-private-address.webp",
		type: "professional",
	},
	{
		id: "07",
		title: "ARAHA Trading Corporate (PTE)",
		category: "Corporate Frontend Platform",
		description:
			"Sleek corporate web application developed with React and Tailwind CSS, featuring fluid animations and interactive presentation.",
		tags: ["React", "Tailwind CSS", "Shadcn UI", "Motion.dev"],
		link: "https://arahatrading.com/",
		customImage: "/projects/araha-trading.webp",
		type: "professional",
	},
	{
		id: "08",
		title: "INBS Websites",
		category: "",
		description: "",
		tags: ["React", "Tailwind CSS", "Shadcn UI", "Motion.dev"],
		link: "https://inbs-uae.com/",
		customImage: "/projects/inbs-realestate.webp",
		type: "professional",
	},
	{
		id: "09",
		title: "INBS Real Estate Websites",
		category: "Enterprise & Real Estate Portal",
		description:
			"Dual corporate platform and luxury real estate portal engineered for high performance, lead routing, and UI responsiveness.",
		tags: ["React", "Tailwind CSS", "Shadcn UI", "Motion.dev"],
		link: "https://inbsrealestate.com/",
		customImage: "/projects/inbs-realestate.webp",
		type: "professional",
	},

	// --- Personal Projects ---
	{
		id: "P1",
		title: "Portfolio",
		category: "Personal Portfolio",
		description:
			"Personal portfolio website designed and developed to showcase creative development, digital experiences, and selected projects.",
		tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
		link: "https://bashar-aljabi.vercel.app/",
		codeLink: "https://github.com/Bashar-alJabi/Portfolio",
		customImage: "/projects/portfolio.webp",
		type: "personal",
	},
	{
		id: "P2",
		title: "Home of Feelings",
		category: "Creative Web Experience",
		description:
			"Interactive web experience focused on emotional storytelling, immersive visual design, and expressive user interaction.",
		tags: ["Next.js", "React", "TypeScript", "Vercel"],
		link: "https://home-of-feelings.vercel.app/",
		codeLink: "https://github.com/Bashar-alJabi/Home-of-Feelings",
		customImage: "/projects/home-of-feelings.webp",
		type: "personal",
	},
	{
		id: "P3",
		title: "ClickMart",
		category: "E-Commerce Application",
		description:
			"Interactive digital shopping app featuring modern cart state management, product filters, and responsive design.",
		tags: ["React", "TypeScript", "Tailwind", "Shadcn UI"],
		codeLink: "https://github.com/Bashar-alJabi/ClickMart",
		customImage: "/projects/clickmart.webp",
		type: "personal",
	},
	{
		id: "P4",
		title: "Windows",
		category: "OS Interface Web Preview",
		description:
			"Experimental web UI concept modeling desktop operating system window management and interactive desktop layouts.",
		tags: ["PugJs", "Sass", "Bootstrap", "GulpJs"],
		link: "https://windows-preview.vercel.app/",
		codeLink: "https://github.com/Bashar-alJabi/Windows",
		customImage: "/projects/windows.webp",
		type: "personal",
	},
	{
		id: "P5",
		title: "BetaShop",
		category: "Next.js Storefront",
		description:
			"Modern full-featured web shop built with Next.js, emphasizing page speed, component architecture, and DaisyUI states.",
		tags: ["Next.js", "TypeScript", "Tailwind", "DaisyUI"],
		link: "https://betashop.vercel.app/",
		codeLink: "https://github.com/Bashar-alJabi/BetaShop",
		customImage: "/projects/betashop.webp",
		type: "personal",
	},
	{
		id: "P6",
		title: "IMEX",
		category: "Internet Movies Explorer",
		description:
			"Movie discovery web application consuming external cinema APIs to dynamically search and present media content.",
		tags: ["React", "React Bootstrap", "Material UI"],
		link: "https://imex4movies.vercel.app/",
		codeLink: "https://github.com/Bashar-alJabi/IMEX",
		customImage: "/projects/imex.webp",
		type: "personal",
	},
];

export default function ProjectsSection() {
	const [activeTab, setActiveTab] = useState<"professional" | "personal">(
		"professional",
	);
	const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
	const targetRef = useRef<HTMLDivElement>(null);
	const trackRef = useRef<HTMLDivElement>(null);
	const [scrollDistance, setScrollDistance] = useState(0);

	const filteredProjects = allProjects.filter((p) => p.type === activeTab);

	// Dynamic calculation for horizontal track scroll distance across all viewport sizes
	useEffect(() => {
		const calculateScrollDistance = () => {
			if (trackRef.current) {
				const totalTrackWidth = trackRef.current.scrollWidth;
				const viewportWidth = window.innerWidth;
				setScrollDistance(Math.max(0, totalTrackWidth - viewportWidth + 48));
			}
		};

		calculateScrollDistance();
		window.addEventListener("resize", calculateScrollDistance);
		return () => window.removeEventListener("resize", calculateScrollDistance);
	}, [activeTab, filteredProjects.length]);

	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

	const handleImageError = (id: string) => {
		setImgErrors((prev) => ({ ...prev, [id]: true }));
	};

	// Priority image selector: Custom image -> Live Screenshot API -> Gradient fallback
	// const getProjectImage = (project: Project) => {
	// 	if (imgErrors[project.id]) return null;
	// 	if (project.customImage) return project.customImage;
	// 	if (project.link && !project.link.includes("github.com")) {
	// 		return `https://s0.wp.com/mshots/v1/${encodeURIComponent(project.link)}?w=800&h=500`;
	// 	}
	// 	return null;
	// };
	const getProjectImage = (project: Project) => {
		if (imgErrors[project.id]) return null;
		return project.customImage ?? null;
	};

	return (
		<section
			ref={targetRef}
			className="relative h-[280vh] bg-perfume-bg text-perfume-text border-t border-perfume-soft/40 select-none"
		>
			{/* Sticky Viewport Frame */}
			<div className="sticky top-0 flex h-screen flex-col justify-between overflow-hidden py-10 md:py-16">
				{/* Section Header & Tab Controls */}
				<div className="max-w-7xl w-full mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-6 z-20">
					<div>
						<span className="text-xs uppercase tracking-[0.4em] font-semibold text-perfume-text/60 font-sans">
							[ Selected Compositions ]
						</span>
						<h2 className="mt-2 text-3xl md:text-5xl font-serif font-normal text-perfume-text">
							Real-World Formulations
						</h2>
					</div>

					{/* Interactive Tab Switcher */}
					<div className="flex items-center gap-2 p-1.5 rounded-full bg-perfume-surface border border-perfume-soft/80 shadow-sm">
						<button
							onClick={() => setActiveTab("professional")}
							className={`px-5 py-2 text-xs uppercase tracking-widest rounded-full transition-all duration-300 font-sans cursor-pointer ${
								activeTab === "professional"
									? "bg-perfume-primary text-white shadow-md"
									: "text-perfume-text/70 hover:text-perfume-text"
							}`}
						>
							Professional (
							{allProjects.filter((p) => p.type === "professional").length})
						</button>
						<button
							onClick={() => setActiveTab("personal")}
							className={`px-5 py-2 text-xs uppercase tracking-widest rounded-full transition-all duration-300 font-sans cursor-pointer ${
								activeTab === "personal"
									? "bg-perfume-primary text-white shadow-md"
									: "text-perfume-text/70 hover:text-perfume-text"
							}`}
						>
							Personal (
							{allProjects.filter((p) => p.type === "personal").length})
						</button>
					</div>
				</div>

				{/* Horizontal Motion Track */}
				<div className="relative flex items-center my-auto overflow-hidden">
					<motion.div
						ref={trackRef}
						style={{ x }}
						className="flex gap-6 md:gap-8 px-6 md:px-12 w-max"
					>
						{filteredProjects.map((project) => {
							const imageSrc = getProjectImage(project);

							return (
								<div
									key={project.id}
									className="group relative w-[85vw] sm:w-105 md:w-120 shrink-0 rounded-3xl border border-perfume-soft bg-perfume-surface p-5 md:p-6 overflow-hidden shadow-sm hover:border-perfume-primary/50 transition-all duration-300 flex flex-col justify-between"
								>
									{/* Image Container */}
									<div className="relative w-full h-48 md:h-60 rounded-2xl overflow-hidden mb-4 border border-perfume-soft/50 bg-perfume-bg">
										{imageSrc ? (
											// <img
											// 	src={imageSrc}
											// 	alt={project.title}
											// 	onError={() => handleImageError(project.id)}
											// 	className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
											// 	loading="lazy"
											// />
											<Image
												src={imageSrc}
												alt={project.title}
												fill
												sizes="(max-width: 640px) 85vw, (max-width: 768px) 420px, 480px"
												onError={() => handleImageError(project.id)}
												className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
											/>
										) : (
											<div className="w-full h-full bg-linear-to-br from-rose-950/20 via-perfume-soft/40 to-perfume-surface flex items-center justify-center">
												<span className="text-4xl font-serif text-perfume-primary/40">
													/{project.id}
												</span>
											</div>
										)}

										{/* Tech Stack Chips Overlay */}
										<div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5 z-10 pointer-events-none">
											{project.tags.map((tag) => (
												<span
													key={tag}
													className="text-xs font-mono px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-white/90 border border-white/10"
												>
													{tag}
												</span>
											))}
										</div>

										{/* External Link Indicator */}
										{project.link && (
											<a
												href={project.link}
												target="_blank"
												rel="noopener noreferrer"
												className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 text-xs hover:bg-perfume-primary"
												aria-label={`Visit ${project.title}`}
											>
												↗
											</a>
										)}
									</div>

									{/* Card Main Body */}
									<div className="flex flex-col flex-1 justify-between">
										<div>
											<div className="flex justify-between items-center mb-1.5">
												<span className="text-xs uppercase tracking-[0.25em] font-medium text-perfume-primary font-sans">
													{project.category}
												</span>
												<span className="text-xs font-mono text-perfume-text/40">
													/{project.id}
												</span>
											</div>

											<h3 className="text-xl md:text-2xl font-serif font-normal text-perfume-text mb-2 group-hover:text-perfume-primary transition-colors duration-300">
												{project.link ? (
													<a
														href={project.link}
														target="_blank"
														rel="noopener noreferrer"
														className="hover:underline"
													>
														{project.title}
													</a>
												) : (
													project.title
												)}
											</h3>

											<p className="text-xs md:text-sm font-light text-perfume-text/75 leading-relaxed font-sans line-clamp-2 mb-4">
												{project.description}
											</p>
										</div>

										{/* Action Links (Live / Code) */}
										<div className="flex items-center gap-3 pt-2 border-t border-perfume-soft/30 text-xs font-mono">
											{project.link && (
												<a
													href={project.link}
													target="_blank"
													rel="noopener noreferrer"
													className="text-perfume-primary hover:underline flex items-center gap-1"
												>
													<span>Live Site</span>
													<span>↗</span>
												</a>
											)}
											{project.codeLink && (
												<a
													href={project.codeLink}
													target="_blank"
													rel="noopener noreferrer"
													className="text-perfume-text/60 hover:text-perfume-text hover:underline flex items-center gap-1 ml-auto"
												>
													<span>Source Code</span>
													<span>↗</span>
												</a>
											)}
										</div>
									</div>
								</div>
							);
						})}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
