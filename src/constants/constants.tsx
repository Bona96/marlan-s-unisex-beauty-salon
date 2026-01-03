import { Scissors, Bubbles, Brush, User } from 'lucide-react';
import { easeInOut } from 'framer-motion';
import { Float} from '@react-three/drei';

// Images
import MarlanImage1 from '../assets/images/marlan-unisex-beauty-salon-image-1.jpeg'
import MarlanImage2 from '../assets/images/marlan-unisex-beauty-salon-image-2.jpeg'
import MarlanImage3 from '../assets/images/marlan-unisex-beauty-salon-image-3.jpeg'
import MarlanImage4 from '../assets/images/marlan-unisex-beauty-salon-image-4.jpeg'
import MarlanImage5 from '../assets/images/marlan-unisex-beauty-salon-image-5.jpeg'
import MarlanImage6 from '../assets/images/marlan-unisex-beauty-salon-image-6.jpeg'
import MarlanImage7 from '../assets/images/marlan-unisex-beauty-salon-image-7.jpeg'
import MarlanImage8 from '../assets/images/marlan-unisex-beauty-salon-image-8.jpeg'
import MarlanImage9 from '../assets/images/marlan-unisex-beauty-salon-image-9.jpeg'
import MarlanImage10 from '../assets/images/marlan-unisex-beauty-salon-image-10.jpeg'
import MarlanImage11 from '../assets/images/marlan-unisex-beauty-salon-image-11.jpeg'
import MarlanImage12 from '../assets/images/marlan-unisex-beauty-salon-image-12.jpeg'
import MarlanImage13 from '../assets/images/marlan-unisex-beauty-salon-image-13.jpeg'
import MarlanImage14 from '../assets/images/marlan-unisex-beauty-salon-image-14.jpeg'

// Videos
import MarlanGalleryVideoFirstSection from '../assets/videos/marlans-salon-showcase-first-section.mp4'
import MarlanGalleryVideo1 from '../assets/videos/marlans-salon-showcase.mp4'
import type { ServiceType } from '../lib/types'

// Breakpoints for Masonry Layout
export const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};
// for the Gallery
export const layoutOptions = [
//   { label: '3D Ring', value: 'ring' },
  { label: 'Grid', value: 'grid' },
  { label: 'Masonry', value: 'masonry' },
  { label: 'Slider', value: 'slider' },
];

// Navigation Items
export const navItems = [
  { label: 'Home', to: '#home' },
  { label: 'Services', to: '#services' },
  { label: 'About', to: '#about' },
  { label: 'Gallery', to: '#gallery' },
  { label: 'Contact', to: '#contact' },
];

export const marlanImages = {
  MarlanImage1,
  MarlanImage2,
  MarlanImage3,
  MarlanImage4,
  MarlanImage5,
  MarlanImage6,
  MarlanImage7,
  MarlanImage8,
  MarlanImage9,
  MarlanImage10,
  MarlanImage11,
  MarlanImage12,
  MarlanImage13,
  MarlanImage14,
}
export const marlanVideos = {
  MarlanGalleryVideoFirstSection,
  MarlanGalleryVideo1
}
export const Salon3DLogo = () => {
  // Placeholder for a 3D gold logo or object
  return (
	<Float speed={2} rotationIntensity={1} floatIntensity={2}>
	  <mesh>
		<torusKnotGeometry args={[1.2, 0.4, 128, 32]} />
		<meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
	  </mesh>
	</Float>
  );
}

export const services: ServiceType[] = [
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
export const containerVariants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.18,
		},
	},
};

export const cardVariants = {
	hidden: { opacity: 0, y: 60, scale: 0.95 },
	show: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.6, ease: easeInOut },
	},
};