"use client";

import { motion } from "framer-motion";
import React from "react";

// Key statistics highlighting real-world impact
const stats = [
	{ label: "Years of Experience", value: "5+" },
	{ label: "E-Commerce Stores Built", value: "30+" },
	{ label: "Ad Campaigns Managed", value: "3-Digit ROI" },
	{ label: "System Automations", value: "100%" },
];

export default function AboutSection() {
	return (
		<section
			id="about"
			className="relative py-28 md:py-36 px-6 md:px-12 bg-perfume-bg text-perfume-text select-none overflow-hidden border-t border-perfume-soft/40"
		>
			{/* Background Glow */}
			<div className="absolute bottom-10 right-10 w-125 h-125 bg-perfume-primary/5 rounded-full blur-[150px] pointer-events-none" />

			<div className="max-w-7xl mx-auto relative z-10">
				{/* Header Badge */}
				<div className="flex items-center gap-3 mb-8">
					<span className="w-1.5 h-1.5 rounded-full bg-perfume-primary" />
					<span className="text-xs uppercase tracking-[0.4em] font-mono text-perfume-text/60">
						About The Creator
					</span>
				</div>

				{/* Editorial Bio Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-20">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="lg:col-span-7"
					>
						<h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-normal leading-[1.08] tracking-tight text-perfume-text">
							Blending technical precision with <br />
							<span className="italic font-light text-perfume-primary">
								growth strategy.
							</span>
						</h2>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.15 }}
						className="lg:col-span-5 space-y-6 text-perfume-text/80 font-sans font-light text-base md:text-lg leading-relaxed"
					>
						<p>
							I’m Bashar, a Full-Stack Web Developer and Digital Marketer. I
							bridge the gap between technical execution and business revenue.
						</p>
						<p>
							A beautiful website is useless if it doesn’t convert, and a great
							ad campaign fails if the platform lags. I build digital ecosystems
							where high-end design, flawless code, and targeted marketing work
							in perfect synergy.
						</p>
					</motion.div>
				</div>

				{/* Key Statistics Strip */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-b border-perfume-soft/60"
				>
					{stats.map((stat, i) => (
						<div key={i} className="space-y-1">
							<span className="text-3xl md:text-5xl font-serif text-perfume-text font-normal">
								{stat.value}
							</span>
							<p className="text-xs font-mono uppercase tracking-wider text-perfume-text/60">
								{stat.label}
							</p>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
