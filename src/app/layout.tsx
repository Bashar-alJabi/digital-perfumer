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
	title: {
		default: "Digital Perfumer — Bashar Al-Jabi",
		template: "%s — Digital Perfumer",
	},
	description:
		"Creative developer portfolio by Bashar Al-Jabi, crafting immersive digital experiences, bespoke interfaces, and high-end web experiences.",
	keywords: [
		"Bashar Al-Jabi",
		"Frontend Developer",
		"Web Designer",
		"Creative Developer",
		"Digital Experience",
		"UI/UX Design",
		"Digital Perfumer",
	],
	authors: [{ name: "Bashar Al-Jabi" }],
	creator: "Bashar Al-Jabi",
	publisher: "Bashar Al-Jabi",

	metadataBase: new URL("https://YOUR-DOMAIN.com"),

	openGraph: {
		title: "Digital Perfumer — Bashar Al-Jabi",
		description:
			"Creative developer portfolio crafting immersive digital experiences.",
		type: "website",
		locale: "en_US",
	},

	twitter: {
		card: "summary_large_image",
		title: "Digital Perfumer — Bashar Al-Jabi",
		description:
			"Creative developer portfolio crafting immersive digital experiences.",
	},

	robots: {
		index: true,
		follow: true,
	},
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
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Person",
							name: "Bashar Al-Jabi",
							url: "https://YOUR-DOMAIN.com",
							jobTitle: "Frontend Developer & Creative Developer",
							description:
								"Creative developer crafting immersive digital experiences, bespoke interfaces, and high-end web experiences.",
							sameAs: [
								"https://github.com/Bashar-alJabi",
								// Add LinkedIn here later
								// Add Instagram here later
							],
						}),
					}}
				/>
				<SmoothScroll>{children}</SmoothScroll>
			</body>
		</html>
	);
}
