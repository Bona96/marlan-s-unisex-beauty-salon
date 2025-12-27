import { motion, useAnimation, easeInOut } from 'framer-motion';
import { Scissors, Bubbles, Brush, User } from 'lucide-react';
import React, { useState } from 'react';
import type { ReactNode } from 'react';

const services: ServiceType[] = [
	{
		icon: <Scissors size={40} />,
		title: 'Hair Styling',
		desc: 'Trendy cuts, coloring, and styling for all.',
		details:
			'Our expert stylists offer the latest haircuts, coloring techniques, and styling trends. Whether you want a classic look or something bold, we tailor each session to your unique style.',
	},
	{
		icon: <Bubbles size={40} />,
		title: 'Spa & Relaxation',
		desc: 'Facials, massages, and relaxation therapies.',
		details:
			'Indulge in our spa treatments including deep tissue massages, rejuvenating facials, and holistic relaxation therapies designed to refresh your mind and body.',
	},
	{
		icon: <Brush size={40} />,
		title: 'Makeup',
		desc: 'Professional makeup for every occasion.',
		details:
			'From weddings to parties, our makeup artists create flawless looks using premium products and techniques suited for every skin type and event.',
	},
	{
		icon: <User size={40} />,
		title: 'Grooming',
		desc: 'Beard trims, waxing, and more.',
		details:
			'We offer precision beard trims, waxing, and grooming services for men and women, ensuring you look sharp and feel confident.',
	},
];

type ServiceType = {
	icon: ReactNode;
	title: string;
	desc: string;
	details: string;
};

const containerVariants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.18,
		},
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 60, scale: 0.95 },
	show: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.6, ease: easeInOut },
	},
};

export default function Services() {
	const [selected, setSelected] = useState<ServiceType | null>(null);

	return (
		<section
			id="services"
			className="relative p-20 px-2 md:p-8 bg-linear-to-b from-black/50 to-yellow-900/50 flex flex-col items-center"
		>
			<motion.h2
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7 }}
				className="text-4xl font-bold text-yellow-400 mb-8 text-center"
			>
				Our Services
			</motion.h2>
			<motion.div
				className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl"
				variants={containerVariants}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.2 }}
			>
				{services.map((service, i) => (
					<motion.div
						key={service.title || i}
						className="bg-black/80 dark:bg-black/90 rounded-2xl p-6 flex flex-col items-center shadow-xl border border-yellow-400/30 cursor-pointer"
						variants={cardVariants}
						whileHover={{
							scale: 1.08,
							rotateZ: 2,
							boxShadow: '0 8px 32px 0 rgba(255, 215, 0, 0.25)',
						}}
						transition={{ type: 'spring', stiffness: 200 }}
						onClick={() => setSelected(service)}
					>
						<div className="text-yellow-400 mb-4">{service.icon}</div>
						<h3 className="text-xl md:text-2xl font-semibold text-yellow-100 mb-2 text-center">
							{service.title}
						</h3>
						<p className="text-yellow-200 text-center text-sm md:text-base">
							{service.desc}
						</p>
					</motion.div>
				))}
			</motion.div>

			{/* Modal for service details */}
			{selected && (
				<motion.div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={() => setSelected(null)}
				>
					<motion.div
						className="relative bg-linear-to-br from-yellow-900 via-black to-yellow-700 rounded-3xl shadow-2xl border-4 border-yellow-400/40 p-8 max-w-lg w-full flex flex-col items-center"
						initial={{ opacity: 0, scale: 0.7, rotateY: -30 }}
						animate={{ opacity: 1, scale: 1, rotateY: 0 }}
						exit={{ opacity: 0, scale: 0.7, rotateY: 30 }}
						transition={{ type: 'spring', stiffness: 180, damping: 18 }}
						style={{
							perspective: 1200,
							boxShadow: '0 16px 64px 0 rgba(255, 215, 0, 0.25)',
						}}
						onClick={(e) => e.stopPropagation()}
					>
						<div className="text-yellow-400 mb-4">{selected.icon}</div>
						<h3 className="text-2xl font-bold text-yellow-100 mb-2 text-center">
							{selected.title}
						</h3>
						<p className="text-yellow-200 text-center text-base mb-4">
							{selected.details}
						</p>
						<button
							className="mt-2 px-6 py-2 rounded-xl bg-yellow-400 text-black font-semibold shadow-lg hover:bg-yellow-300 transition-all"
							onClick={() => setSelected(null)}
						>
							Close
						</button>
						{/* 3D effect: floating sparkles */}
						<motion.div
							className="absolute -top-6 -right-6"
							initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
							animate={{ opacity: 1, scale: 1.2, rotate: 45 }}
							transition={{
								duration: 1.2,
								repeat: Infinity,
								repeatType: 'reverse',
							}}
						>
							<svg
								width="40"
								height="40"
								viewBox="0 0 40 40"
								fill="none"
							>
								<circle
									cx="20"
									cy="20"
									r="18"
									stroke="#FFD700"
									strokeWidth="4"
									opacity="0.7"
								/>
								<circle
									cx="20"
									cy="20"
									r="6"
									fill="#FFD700"
									opacity="0.5"
								/>
							</svg>
						</motion.div>
						<motion.div
							className="absolute -bottom-6 -left-6"
							initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
							animate={{ opacity: 1, scale: 1.2, rotate: -45 }}
							transition={{
								duration: 1.2,
								repeat: Infinity,
								repeatType: 'reverse',
							}}
						>
							<svg
								width="32"
								height="32"
								viewBox="0 0 32 32"
								fill="none"
							>
								<circle
									cx="16"
									cy="16"
									r="12"
									stroke="#FFD700"
									strokeWidth="3"
									opacity="0.5"
								/>
								<circle
									cx="16"
									cy="16"
									r="4"
									fill="#FFD700"
									opacity="0.3"
								/>
							</svg>
						</motion.div>
					</motion.div>
				</motion.div>
			)}
		</section>
	);
}
