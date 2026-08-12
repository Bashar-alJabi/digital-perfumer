import SmoothScroll from "@/components/smooth-scroll/SmoothScroll";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// Load Google Fonts with CSS variables
const playfair = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-serif-custom",
	display: "swap",
});

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-sans-custom",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Digital Perfumer — Composing the Notes of Great Brands",
	description:
		"A creative developer portfolio crafting immersive digital experiences.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${playfair.variable} ${inter.variable} bg-perfume-bg`}
		>
			<body className="font-sans antialiased">
				<SmoothScroll>{children}</SmoothScroll>
			</body>
		</html>
	);
}
