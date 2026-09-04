"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";

export default function SmoothScroll({
	children,
}: {
	children: React.ReactNode;
}) {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Initialize smooth scrolling with fluid physics
		const lenis = new Lenis({
			duration: 1.4,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true,
			anchors: true,
		});

		lenis.on("scroll", ScrollTrigger.update);

		const updateLenis = (time: number) => {
			lenis.raf(time * 1000);
		};

		gsap.ticker.add(updateLenis);
		gsap.ticker.lagSmoothing(0);

		return () => {
			gsap.ticker.remove(updateLenis);
			lenis.destroy();
		};
	}, []);

	return <>{children}</>;
}
