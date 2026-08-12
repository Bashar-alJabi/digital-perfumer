"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

interface ServiceOption {
	id: string;
	label: string;
}

const serviceOptions: ServiceOption[] = [
	{ id: "full-experience", label: "Full Digital Experience" },
	{ id: "ui-design", label: "Bespoke UI/UX Design" },
	{ id: "frontend-dev", label: "Frontend Development" },
	{ id: "growth-ads", label: "Digital Growth & Ads" },
];

export default function ContactSection() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		selectedService: "Full Digital Experience",
		message: "",
	});

	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission logic here
		setIsSubmitted(true);
	};

	return (
		<footer className="relative py-28 md:py-36 px-6 md:px-12 bg-perfume-bg text-perfume-text border-t border-perfume-soft/40 select-none overflow-hidden">
			<div className="max-w-7xl mx-auto">
				{/* Main Contact Container */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start mb-24">
					{/* Left Column: Call to Action & Direct Links */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="lg:col-span-5 space-y-10"
					>
						<div>
							<p className="text-xs uppercase tracking-[0.4em] font-semibold text-perfume-text/60 font-sans">
								[ The Final Trail ]
							</p>
							<h2 className="mt-4 text-4xl md:text-6xl font-serif font-normal text-perfume-text leading-tight">
								Let&apos;s compose your <br />
								<span className="italic text-perfume-primary">
									signature scent.
								</span>
							</h2>
						</div>

						<p className="text-base md:text-lg font-light text-perfume-text/80 font-sans leading-relaxed">
							Every iconic brand experience begins with a
							meaningful conversation. Reach out to discuss a new
							creation, strategic campaign, or tailored web
							platform.
						</p>

						{/* Direct Contact Cards */}
						<div className="space-y-6 pt-4 border-t border-perfume-soft/50">
							{/* Email Link */}
							<div>
								<span className="text-xs font-mono uppercase tracking-widest text-perfume-text/50 block mb-1">
									Direct Inquiries
								</span>
								<a
									href="mailto:contact@example.com"
									className="text-lg md:text-xl font-serif text-perfume-text hover:text-perfume-primary transition-colors duration-300 underline underline-offset-8 decoration-perfume-soft"
								>
									contact@example.com
								</a>
							</div>

							{/* Status / Availability Badge */}
							<div>
								<span className="text-xs font-mono uppercase tracking-widest text-perfume-text/50 block mb-2">
									Current Status
								</span>
								<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-perfume-surface border border-perfume-soft text-xs font-sans text-perfume-text">
									<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
									<span>
										Available for Q3/Q4 Bespoke Projects
									</span>
								</div>
							</div>

							{/* Social Channels */}
							<div className="pt-2">
								<span className="text-xs font-mono uppercase tracking-widest text-perfume-text/50 block mb-3">
									Digital Footprint
								</span>
								<div className="flex items-center gap-6 text-sm font-sans text-perfume-text/80">
									<a
										href="https://github.com"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-perfume-primary transition-colors duration-300"
									>
										GitHub
									</a>
									<a
										href="https://linkedin.com"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-perfume-primary transition-colors duration-300"
									>
										LinkedIn
									</a>
									<a
										href="https://instagram.com"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-perfume-primary transition-colors duration-300"
									>
										Instagram
									</a>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Right Column: Interactive Form */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="lg:col-span-7"
					>
						<div className="rounded-3xl border border-perfume-soft bg-perfume-surface p-8 md:p-12 shadow-sm">
							{isSubmitted ? (
								<div className="py-16 text-center space-y-4">
									<span className="text-4xl block">✨</span>
									<h3 className="text-2xl md:text-3xl font-serif text-perfume-text">
										Formulation Received
									</h3>
									<p className="text-sm md:text-base font-light text-perfume-text/75 max-w-md mx-auto font-sans">
										Thank you for reaching out. Your message
										has been safely logged, and I will get
										back to you shortly.
									</p>
									<button
										onClick={() => setIsSubmitted(false)}
										className="mt-6 text-xs font-mono uppercase tracking-widest text-perfume-primary underline underline-offset-4"
									>
										Send Another Note
									</button>
								</div>
							) : (
								<form
									onSubmit={handleSubmit}
									className="space-y-8"
								>
									{/* Service Accord Selection */}
									<div>
										<label className="text-xs font-mono uppercase tracking-widest text-perfume-text/60 block mb-3">
											Select Desired Accord
										</label>
										<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
											{serviceOptions.map((option) => {
												const isSelected =
													formData.selectedService ===
													option.label;
												return (
													<button
														type="button"
														key={option.id}
														onClick={() =>
															setFormData({
																...formData,
																selectedService:
																	option.label,
															})
														}
														className={`p-3.5 rounded-xl border text-left text-xs md:text-sm font-sans transition-all duration-300 ${
															isSelected
																? "border-perfume-primary bg-perfume-bg text-perfume-text font-medium shadow-sm"
																: "border-perfume-soft/60 bg-perfume-bg/40 text-perfume-text/70 hover:border-perfume-primary/30"
														}`}
													>
														{option.label}
													</button>
												);
											})}
										</div>
									</div>

									{/* Name Input */}
									<div>
										<label className="text-xs font-mono uppercase tracking-widest text-perfume-text/60 block mb-2">
											Your Name
										</label>
										<input
											type="text"
											required
											placeholder="e.g. Julian Vance"
											value={formData.name}
											onChange={(e) =>
												setFormData({
													...formData,
													name: e.target.value,
												})
											}
											className="w-full bg-perfume-bg border border-perfume-soft/80 rounded-xl p-4 text-sm font-sans text-perfume-text placeholder:text-perfume-text/30 focus:outline-none focus:border-perfume-primary transition-colors duration-300"
										/>
									</div>

									{/* Email Input */}
									<div>
										<label className="text-xs font-mono uppercase tracking-widest text-perfume-text/60 block mb-2">
											Your Email Address
										</label>
										<input
											type="email"
											required
											placeholder="julian@brand.com"
											value={formData.email}
											onChange={(e) =>
												setFormData({
													...formData,
													email: e.target.value,
												})
											}
											className="w-full bg-perfume-bg border border-perfume-soft/80 rounded-xl p-4 text-sm font-sans text-perfume-text placeholder:text-perfume-text/30 focus:outline-none focus:border-perfume-primary transition-colors duration-300"
										/>
									</div>

									{/* Message Input */}
									<div>
										<label className="text-xs font-mono uppercase tracking-widest text-perfume-text/60 block mb-2">
											Project Vision & Details
										</label>
										<textarea
											rows={4}
											required
											placeholder="Describe your vision, goals, or timeline..."
											value={formData.message}
											onChange={(e) =>
												setFormData({
													...formData,
													message: e.target.value,
												})
											}
											className="w-full bg-perfume-bg border border-perfume-soft/80 rounded-xl p-4 text-sm font-sans text-perfume-text placeholder:text-perfume-text/30 focus:outline-none focus:border-perfume-primary transition-colors duration-300 resize-none"
										/>
									</div>

									{/* Submit Button */}
									<button
										type="submit"
										className="w-full py-4 rounded-xl bg-perfume-text text-perfume-bg hover:bg-perfume-primary hover:text-white transition-all duration-500 font-sans font-medium text-sm md:text-base tracking-wide shadow-md"
									>
										Initiate Contact Accord →
									</button>
								</form>
							)}
						</div>
					</motion.div>
				</div>

				{/* Footer Bottom Bar */}
				<div className="pt-8 border-t border-perfume-soft/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-perfume-text/50">
					<div>
						© {new Date().getFullYear()} — All rights reserved.
						Designed & Composed with Passion.
					</div>
					<div className="flex items-center gap-2">
						<span>Signature Accord</span>
						<span className="w-1.5 h-1.5 rounded-full bg-perfume-primary" />
						<span>Digital Perfumery Edition</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
