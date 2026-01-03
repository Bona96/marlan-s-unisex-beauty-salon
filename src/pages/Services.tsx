import { motion } from 'framer-motion';
import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { cardVariants, containerVariants, Salon3DLogo, services } from '../constants/constants';
import type { ServiceType } from '../lib/types';

export default function Services() {
	const [selected, setSelected] = useState<ServiceType | null>(null);

	return (
		<section
			id="services"
			className="relative p-10 px-2 md:p-8 flex flex-col items-center"
		>
			<motion.h2
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7 }}
				className="mt-10 z-10 text-4xl font-bold text-yellow-400 mb-5 text-center p-5 bg-black/70 rounded-2xl"
			>
				Our Services
			</motion.h2>
			<motion.div
				className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl z-10"
				variants={containerVariants}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.2 }}
			>
				{services.map((service, i) => (
					<motion.div
						key={service.title || i}
						className="bg-black/70 rounded-2xl p-6 flex flex-col items-center shadow-xl border border-yellow-400/30 cursor-pointer"
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
			<div className="absolute inset-0 z-0 pointer-events-none mt-5">
				<Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
					<ambientLight intensity={0.7} />
					<directionalLight position={[5, 5, 5]} intensity={1.2} />
					<Environment preset="sunset" />
					<Salon3DLogo />
					<OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
				</Canvas>
			</div>
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
