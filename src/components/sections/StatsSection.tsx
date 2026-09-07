"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stats = [
	{ label: "Years of Experience", value: "5+" },
	{ label: "Brands & Businesses", value: "30+" },
	{ label: "Websites Built", value: "20+" },
	{ label: "Ad Campaigns", value: "15+" },
];

function StatCircle({
	stat,
	index,
	progress,
}: {
	stat: (typeof stats)[number];
	index: number;
	progress: MotionValue<number>;
}) {
	const distance = useTransform(progress, (value) => Math.abs(value - index));

	const opacity = useTransform(distance, [0, 0.5, 1], [1, 0.65, 0.75]);

	const scale = useTransform(distance, [0, 0.5, 1], [1, 0.97, 0.94]);

	const borderProgress = useTransform<number, number>(
		progress,
		[index, index + 0.35, index + 1],
		[0, 0.35, 1],
	);

	const circumference = 2 * Math.PI * 118;

	const dashOffset = useTransform(borderProgress, [0, 1], [circumference, 0]);

	return (
		<motion.div
			style={{ opacity, scale }}
			className="relative flex w-full flex-1 items-center justify-center"
		>
			<div className="relative aspect-square w-full max-w-65 md:max-w-75">
				{/* Base circle */}
				<div className="absolute inset-0 rounded-full border border-perfume-soft/50" />

				{/* Animated border */}
				<svg
					viewBox="0 0 260 260"
					className="absolute inset-0 h-full w-full -rotate-90"
					aria-hidden="true"
				>
					<motion.circle
						cx="130"
						cy="130"
						r="118"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.2"
						className="text-perfume-primary"
						style={{
							strokeDasharray: circumference,
							strokeDashoffset: dashOffset,
						}}
					/>
				</svg>

				{/* Inner circle */}
				<div className="absolute inset-5.5 rounded-full border border-perfume-soft/40" />

				{/* Content */}
				<div className="absolute inset-0 flex flex-col items-center justify-center text-center">
					<span className="font-serif text-[3.5rem] font-normal leading-none tracking-[-0.06em] md:text-[4.5rem]">
						{stat.value}
					</span>

					<span className="dp-small mt-4 max-w-37.5 text-perfume-text/60">
						{stat.label}
					</span>
				</div>
			</div>
		</motion.div>
	);
}

function MobileStatCircle({
	stat,
	index,
	progress,
}: {
	stat: (typeof stats)[number];
	index: number;
	progress: MotionValue<number>;
}) {
	const distance = useTransform(progress, (value) => Math.abs(value - index));

	const opacity = useTransform(distance, [0, 0.25, 0.65, 1], [1, 0.9, 0.25, 0]);

	const scale = useTransform(distance, [0, 0.5, 1], [1, 0.96, 0.9]);

	const borderProgress = useTransform<number, number>(
		progress,
		[index, index + 0.35, index + 1],
		[0, 0.35, 1],
	);

	const circumference = 2 * Math.PI * 118;

	const dashOffset = useTransform(borderProgress, [0, 1], [circumference, 0]);

	return (
		<motion.div
			style={{ opacity, scale }}
			className="absolute inset-0 flex items-center justify-center"
		>
			<div className="relative aspect-square w-[min(78vw,300px)]">
				{/* Base circle */}
				<div className="absolute inset-0 rounded-full border border-perfume-soft/50" />

				{/* Animated border */}
				<svg
					viewBox="0 0 260 260"
					className="absolute inset-0 h-full w-full -rotate-90"
					aria-hidden="true"
				>
					<motion.circle
						cx="130"
						cy="130"
						r="118"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.2"
						className="text-perfume-primary"
						style={{
							strokeDasharray: circumference,
							strokeDashoffset: dashOffset,
						}}
					/>
				</svg>

				{/* Inner circle */}
				<div className="absolute inset-5.5 rounded-full border border-perfume-soft/40" />

				{/* Content */}
				<div className="absolute inset-0 flex flex-col items-center justify-center text-center">
					<span className="font-serif text-[4rem] font-normal leading-none tracking-[-0.06em]">
						{stat.value}
					</span>

					<span className="dp-small mt-4 max-w-37.5 text-perfume-text/60">
						{stat.label}
					</span>
				</div>
			</div>
		</motion.div>
	);
}

export default function StatsSection() {
	const statsRef = useRef<HTMLElement>(null);

	const { scrollYProgress } = useScroll({
		target: statsRef,
		offset: ["start start", "end end"],
	});

	const activeProgress = useTransform<number, number>(
		scrollYProgress,
		[0, 0.08, 0.29, 0.37, 0.54, 0.62, 0.79, 0.87, 1],
		[0, 0, 1, 1, 2, 2, 3, 3, 4],
	);

	return (
		<section
			ref={statsRef}
			className="relative h-[300vh] bg-perfume-bg text-perfume-text"
		>
			<div className="sticky top-0 flex h-screen items-center overflow-hidden px-6 md:px-12">
				{/* Mobile — one circle at a time */}
				<div className="relative flex h-full w-full items-center justify-center sm:hidden">
					{stats.map((stat, index) => (
						<MobileStatCircle
							key={stat.label}
							stat={stat}
							index={index}
							progress={activeProgress}
						/>
					))}
				</div>

				{/* Tablet + Desktop — all circles visible */}
				<div className="mx-auto hidden w-full max-w-7xl grid-cols-2 items-center justify-items-center gap-10 sm:grid lg:grid-cols-4 lg:gap-6">
					{stats.map((stat, index) => (
						<StatCircle
							key={stat.label}
							stat={stat}
							index={index}
							progress={activeProgress}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
