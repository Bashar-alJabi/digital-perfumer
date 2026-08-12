"use client";

import HeroCanvas from "@/components/canvas/HeroCanvas";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export default function HeroSection() {
	const containerRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const taglineRef = useRef<HTMLParagraphElement>(null);
	const notesRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				defaults: { ease: "power3.out", duration: 1.6 },
			});

			tl.fromTo(
				titleRef.current,
				{ y: 40, opacity: 0 },
				{ y: 0, opacity: 1, delay: 0.2 },
			)
				.fromTo(
					taglineRef.current,
					{ y: 20, opacity: 0 },
					{ y: 0, opacity: 0.85 },
					"-=1.2",
				)
				.fromTo(
					notesRef.current?.children || [],
					{ scale: 0, opacity: 0 },
					{
						scale: 1,
						opacity: 1,
						stagger: 0.18,
						ease: "back.out(1.7)",
					},
					"-=1.0",
				);
		}, containerRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={containerRef}
			className="relative w-full h-screen flex justify-center items-center px-6 bg-perfume-bg text-perfume-text overflow-hidden select-none"
		>
			{/* 3D Fluid Canvas Background */}
			<HeroCanvas />

			{/* Main Minimalist Content */}
			<div className="z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
				{/* The Three Signature Notes Visual Cues */}
				<div ref={notesRef} className="flex items-center gap-4 mb-8">
					<span
						className="w-5 h-5 rounded-full bg-perfume-primary shadow-[0_0_15px_rgba(243,99,113,0.5)]"
						title="Top Note"
					/>
					<span
						className="w-5 h-5 rounded-full bg-perfume-soft border border-perfume-primary/30"
						title="Heart Note"
					/>
					<span
						className="w-5 h-5 rounded-full bg-perfume-text"
						title="Base Note"
					/>
				</div>

				<h1
					ref={titleRef}
					className="text-6xl md:text-8xl lg:text-9xl font-serif font-normal tracking-tight leading-[1.05] mb-6 text-perfume-text drop-shadow-sm"
				>
					Digital Perfumer
				</h1>

				<p
					ref={taglineRef}
					className="text-sm md:text-base lg:text-lg font-medium text-perfume-text/80 tracking-[0.25em] max-w-xl uppercase"
				>
					Composing the Notes of Great Brands
				</p>
			</div>
		</section>
	);
}
