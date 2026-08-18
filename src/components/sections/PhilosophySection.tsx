"use client";

import { motion } from "framer-motion";
import React from "react";

// Updated text aligned with the fragrance notes philosophy
const notes = [
	{
		number: "01",
		title: "TOP NOTES",
		subtitle: "First Impression — How your brand is seen",
		text: "Crafting bespoke brand identity, UI/UX design, visual direction, typography, and landing pages that capture immediate emotional resonance.",
	},
	{
		number: "02",
		title: "HEART NOTES",
		subtitle: "The Experience — How your brand is experienced",
		text: "Transforming design into fluid digital reality through responsive frontend engineering, interactive motion, accessibility, and high performance.",
	},
	{
		number: "03",
		title: "BASE NOTES",
		subtitle: "Lasting Impact — How your brand grows",
		text: "Engineered growth through digital strategy, Meta & Google ad campaigns, SEO, conversion rate optimization, and long-term ecosystem stability.",
	},
];

// Exact signature dots structure from Hero Section
const signatureDots = [
	{ title: "Top Note", baseClass: "bg-perfume-primary" },
	{
		title: "Heart Note",
		baseClass: "bg-perfume-soft border border-perfume-primary/40",
	},
	{ title: "Base Note", baseClass: "bg-perfume-text" },
];

export default function PhilosophySection() {
	return (
		<section className="relative py-32 md:py-44 px-6 md:px-12 bg-perfume-bg text-perfume-text select-none">
			<div className="max-w-7xl mx-auto">
				<div className="grid gap-16 lg:gap-24 lg:grid-cols-2 items-start">
					{/* Left Sticky Manifesto Title */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 1, ease: "easeOut" }}
						className="lg:sticky lg:top-32 h-fit"
					>
						<p className="text-xs uppercase tracking-[0.4em] font-semibold text-perfume-text/60 font-sans">
							The Philosophy
						</p>

						<h2 className="mt-8 text-5xl md:text-7xl lg:text-8xl font-serif font-normal leading-[0.95] tracking-tight text-perfume-text">
							I don&apos;t build
							<br />
							<span className="text-perfume-text/40">websites.</span>
							<br />
							I compose
							<br />
							<span className="italic text-perfume-primary">
								digital scents.
							</span>
						</h2>
					</motion.div>

					{/* Right Cards Stack */}
					<div className="space-y-8">
						{notes.map((note, cardIndex) => (
							<motion.div
								key={note.number}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.8,
									delay: cardIndex * 0.15,
								}}
								className="relative rounded-3xl border border-perfume-soft bg-perfume-surface p-8 md:p-12 overflow-hidden shadow-sm hover:border-perfume-primary/30 transition-colors duration-500"
							>
								{/* Background Watermark Number */}
								<div className="absolute right-6 -top-6 text-[120px] font-serif font-bold tracking-tighter text-perfume-primary/10 select-none pointer-events-none">
									{note.number}
								</div>

								<div className="relative z-10">
									{/* Unified Signature Dots with Active Card Highlight */}
									<div className="mb-8 flex items-center gap-4">
										{signatureDots.map((dot, dotIndex) => {
											const isActive = dotIndex === cardIndex;
											return (
												<span
													key={dot.title}
													title={dot.title}
													className={`w-3 h-3 rounded-full transition-all duration-500 ${
														dot.baseClass
													} ${
														isActive
															? "scale-125 ring-4 ring-perfume-primary/20 shadow-[0_0_12px_rgba(243,99,113,0.5)] opacity-100"
															: "opacity-35 scale-90"
													}`}
												/>
											);
										})}
									</div>

									{/* Card Content */}
									<h3 className="text-3xl md:text-4xl font-serif font-normal text-perfume-text">
										{note.title}
									</h3>

									<p className="mt-2 text-xs md:text-sm font-medium uppercase tracking-[0.3em] text-perfume-primary font-sans">
										{note.subtitle}
									</p>

									<p className="mt-6 text-base md:text-lg max-w-md leading-relaxed font-light text-perfume-text/80 font-sans">
										{note.text}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
