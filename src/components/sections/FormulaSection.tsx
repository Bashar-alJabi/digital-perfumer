"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const formulaNotes = [
	{
		number: "01",
		title: "TOP NOTE",
		items: ["Brand Identity", "UI / UX", "Visual Direction", "Typography"],
	},
	{
		number: "02",
		title: "HEART NOTE",
		items: ["Frontend", "Interaction", "Motion", "Accessibility"],
	},
	{
		number: "03",
		title: "BASE NOTE",
		items: ["Strategy", "SEO", "Performance", "Growth"],
	},
];

export default function FormulaSection() {
	const formulaRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: formulaRef,
		offset: ["start end", "end start"],
	});

	const bottleY = useTransform(scrollYProgress, [0, 0.35, 0.7], [80, 0, -20]);

	const bottleRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-3, 0, 3]);

	const liquidHeight = useTransform(
		scrollYProgress,
		[0.12, 0.82],
		["8%", "78%"],
	);

	const liquidOpacity = useTransform(scrollYProgress, [0.05, 0.2], [0.25, 1]);

	const topOpacity = useTransform(
		scrollYProgress,
		[0, 0.28, 0.48],
		[1, 1, 0.45],
	);

	const heartOpacity = useTransform(
		scrollYProgress,
		[0.15, 0.38, 0.58],
		[0.25, 1, 0.45],
	);

	const baseOpacity = useTransform(
		scrollYProgress,
		[0.42, 0.68, 0.92],
		[0.2, 1, 0.85],
	);

	const noteScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 1.03]);

	const labelOpacity = useTransform(scrollYProgress, [0.72, 0.9], [0, 1]);

	return (
		<section
			ref={formulaRef}
			className="relative min-h-[320vh] bg-perfume-bg px-6 py-32 text-perfume-text md:px-12 md:py-44"
		>
			<div className="sticky top-0 flex min-h-screen items-center">
				<div className="w-full">
					{/* Formula heading */}
					<div className="mb-10 flex items-end justify-between md:mb-0">
						<div>
							<p className="dp-label text-perfume-primary">COMPOSITION / 01</p>

							<h2 className="dp-section-title mt-3">THE FORMULA</h2>
						</div>

						<p className="dp-small hidden max-w-45 text-right leading-relaxed opacity-50 md:block">
							Three notes.
							<br />
							One digital composition.
						</p>
					</div>

					{/* Bottle composition */}
					<div className="relative mx-auto flex min-h-162.5 max-w-6xl items-center justify-center md:min-h-180">
						{/* TOP NOTE */}
						<motion.div
							style={{
								opacity: topOpacity,
								scale: noteScale,
							}}
							className="absolute left-0 top-[18%] z-20 w-45 md:left-[7%] md:w-55"
						>
							<FormulaNote
								number={formulaNotes[0].number}
								title={formulaNotes[0].title}
								items={formulaNotes[0].items}
								align="left"
							/>
						</motion.div>

						{/* HEART NOTE */}
						<motion.div
							style={{
								opacity: heartOpacity,
								scale: noteScale,
							}}
							className="absolute bottom-[15%] left-0 z-20 w-45 md:left-[7%] md:w-55"
						>
							<FormulaNote
								number={formulaNotes[1].number}
								title={formulaNotes[1].title}
								items={formulaNotes[1].items}
								align="left"
							/>
						</motion.div>

						{/* BASE NOTE */}
						<motion.div
							style={{
								opacity: baseOpacity,
								scale: noteScale,
							}}
							className="absolute bottom-[15%] right-0 z-20 w-45 md:right-[7%] md:w-55"
						>
							<FormulaNote
								number={formulaNotes[2].number}
								title={formulaNotes[2].title}
								items={formulaNotes[2].items}
								align="right"
							/>
						</motion.div>

						{/* BOTTLE */}
						<motion.div
							style={{
								y: bottleY,
								rotate: bottleRotate,
							}}
							className="relative z-10 h-117.5 w-67.5 md:h-135 md:w-[320px]"
						>
							{/* Shadow */}
							<div className="absolute -bottom-7.5 left-1/2 h-8 w-[65%] -translate-x-1/2 rounded-[50%] bg-perfume-primary opacity-10 blur-xl" />

							{/* Cap */}
							<div className="absolute left-1/2 top-0 z-30 h-20.5 w-23 -translate-x-1/2">
								<div className="absolute left-1/2 top-0 h-4.5 w-14.5 -translate-x-1/2 rounded-t-sm border border-black/10 bg-perfume-surface" />

								<div className="absolute bottom-0 left-1/2 h-17 w-19.5 -translate-x-1/2 rounded-t-[5px] border border-black/10 bg-perfume-surface shadow-sm">
									<div className="absolute inset-x-3 top-3 h-px bg-black/10" />
									<div className="absolute inset-x-3 top-6 h-px bg-black/5" />
									<div className="absolute inset-x-3 top-9 h-px bg-black/5" />
								</div>
							</div>

							{/* Neck */}
							<div className="absolute left-1/2 top-17.5 z-20 h-13.75 w-27 -translate-x-1/2 rounded-t-md border-x border-black/10 bg-perfume-surface/80 backdrop-blur-sm">
								<div className="absolute inset-x-3 top-3 h-px bg-black/10" />
								<div className="absolute inset-x-3 top-7 h-px bg-black/5" />
							</div>

							{/* Bottle Body */}
							<div className="absolute bottom-0 left-1/2 h-97.5 w-67.5 -translate-x-1/2 overflow-hidden rounded-[42px] border border-black/10 bg-perfume-surface/55 shadow-[0_30px_80px_rgba(243,99,113,0.12)] backdrop-blur-md md:h-111.25 md:w-[320px]">
								{/* Glass highlight */}
								<div className="absolute bottom-5 left-5 top-5 z-30 w-6 rounded-full bg-white/45 blur-[1px]" />

								<div className="absolute bottom-8 right-6 top-8 z-30 w-2 rounded-full bg-white/30 blur-[2px]" />

								{/* Liquid */}
								<motion.div
									style={{
										height: liquidHeight,
										opacity: liquidOpacity,
									}}
									className="absolute bottom-0 left-0 right-0 overflow-hidden bg-perfume-primary"
								>
									<div className="absolute left-0 right-0 top-0 h-0.5 bg-perfume-soft opacity-80" />

									<div className="absolute left-[-15%] top-[20%] h-[180%] w-[40%] rotate-12 rounded-full bg-perfume-soft opacity-20 blur-2xl" />

									<div className="absolute bottom-[25%] left-[28%] h-2 w-2 rounded-full border border-white/25" />

									<div className="absolute bottom-[42%] left-[64%] h-1.5 w-1.5 rounded-full bg-white/20" />

									<div className="absolute bottom-[58%] left-[42%] h-1 w-1 rounded-full bg-white/20" />
								</motion.div>

								{/* Label */}
								<div className="absolute left-1/2 top-1/2 z-40 w-47.5 -translate-x-1/2 -translate-y-1/2 border border-black/10 bg-perfume-surface/95 px-5 py-7 text-center backdrop-blur-sm md:w-56.25 md:px-7 md:py-9">
									<p className="dp-label opacity-45">EAU DE</p>

									<p className="dp-card-title mt-2 leading-none">DIGITAL</p>

									<p className="dp-card-title leading-none">PERFUMER</p>

									<div className="mx-auto my-5 h-px w-10 bg-perfume-primary" />

									<p className="dp-label text-perfume-primary">
										COMPOSITION No. 01
									</p>
								</div>

								{/* Glass reflection */}
								<div className="pointer-events-none absolute inset-0 z-50 bg-linear-to-r from-white/15 via-transparent to-white/10" />
							</div>
						</motion.div>

						{/* Connecting lines */}
						<div className="pointer-events-none absolute inset-0 z-0">
							<div className="absolute left-[25%] top-[30%] h-px w-[18%] bg-perfume-primary opacity-20" />

							<div className="absolute left-[25%] top-[68%] h-px w-[18%] bg-perfume-primary opacity-20" />

							<div className="absolute right-[25%] top-[68%] h-px w-[18%] bg-perfume-primary opacity-20" />
						</div>
					</div>

					{/* Final formula statement */}
					<motion.div
						style={{ opacity: labelOpacity }}
						className="relative z-20 -mt-5 text-center"
					>
						<p className="dp-label opacity-40">TOP + HEART + BASE</p>

						<p className="dp-section-title mt-3 text-perfume-primary">
							DIGITAL EXPERIENCE
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

function FormulaNote({
	number,
	title,
	items,
	align,
}: {
	number: string;
	title: string;
	items: string[];
	align: "left" | "right";
}) {
	return (
		<div className={align === "right" ? "text-right" : "text-left"}>
			<div
				className={`mb-4 flex items-center gap-3 ${
					align === "right" ? "justify-end" : "justify-start"
				}`}
			>
				{align === "right" && (
					<span className="h-px w-10 bg-perfume-primary opacity-30" />
				)}

				<span className="dp-label text-perfume-primary">{number}</span>

				{align === "left" && (
					<span className="h-px w-10 bg-perfume-primary opacity-30" />
				)}
			</div>

			<h3 className="dp-body font-medium tracking-[0.18em]">{title}</h3>

			<div className="mt-4 space-y-1">
				{items.map((item) => (
					<p key={item} className="dp-small opacity-45">
						{item}
					</p>
				))}
			</div>
		</div>
	);
}
