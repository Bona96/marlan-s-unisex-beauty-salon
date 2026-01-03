import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Masonry from 'react-masonry-css';
import { OrbitControls, Environment, ContactShadows, MeshReflectorMaterial } from '@react-three/drei';

import type { GalleryProps } from '../lib/types';
import { breakpointColumnsObj } from '../constants/constants';
import GalleryFrame from './GalleryFrame';

export const GalleryRing3D = ({ images }: GalleryProps) => {
  const radius = 5;
  const angleStep = images.length > 1 ? Math.PI / (images.length - 1) : 0;
  return (
    <Canvas camera={{ position: [0, 0.5, 9], fov: 60 }} shadows dpr={[1.5, 2.5]}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[6, 8, 8]} intensity={1.5} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
      <ContactShadows position={[0, -1.1, 0]} opacity={0.45} width={15} height={15} blur={2.5} far={10} />
      <mesh position={[0, -1.2, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[30, 30]} />
        <MeshReflectorMaterial blur={[400, 100]} resolution={1024} mixBlur={1} mixStrength={8} roughness={0.7} depthScale={1.2} minDepthThreshold={0.4} color="#181818" metalness={0.4} />
      </mesh>
      {images.map((img, i) => {
        const angle = -Math.PI / 2 + i * angleStep;
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        return (
          <GalleryFrame key={img} url={img} position={[x, 0, z]} index={i} />
        );
      })}
      <Environment preset="city" background={false} />
      <OrbitControls enableZoom enablePan={false} autoRotate autoRotateSpeed={1.1} maxPolarAngle={Math.PI / 2.1} minPolarAngle={Math.PI / 3.2} />
    </Canvas>
  );
}
export const GalleryGrid = ({ images }: GalleryProps) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 min-w-150">
        {images.map((img, i) => (
          <img
            key={img}
            src={img}
            alt={`Gallery ${i + 1}`}
            className="rounded-xl shadow-lg object-cover w-full h-40 sm:h-52 md:h-64 transition-transform duration-300 hover:scale-105 border-2 border-yellow-300/30 bg-yellow-100/10"
          />
        ))}
      </div>
    </div>
  );
}
export const GalleryMasonry = ({ images }: GalleryProps) => {
  return (
    <div className="w-full p-4">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto gap-4"
        columnClassName="masonry-column flex flex-col gap-4"
      >
        {images.map((img, i) => (
          <img
            key={img}
            src={img}
            alt={`Gallery ${i + 1}`}
            className="rounded-xl shadow-lg object-cover w-full h-auto transition-transform duration-300 hover:scale-105 border-2 border-yellow-300/30 bg-yellow-100/10"
          />
        ))}
      </Masonry>
    </div>
  );
}
export const GallerySlider = ({ images }: GalleryProps) => {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const total = images.length;

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [total]);

  // Scroll to current image
  useEffect(() => {
    if (sliderRef.current) {
      const child = sliderRef.current.children[current] as HTMLElement;
      if (child) child.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [current]);

  const goLeft = () => setCurrent((prev) => (prev - 1 + total) % total);
  const goRight = () => setCurrent((prev) => (prev + 1) % total);

  return (
    <div className="relative w-full h-full flex items-center">
      <button
        aria-label="Previous"
        onClick={goLeft}
        className="absolute left-2 z-10 bg-yellow-400/80 hover:bg-yellow-500 text-black rounded-full p-2 shadow-lg focus:outline-none"
        style={{ top: '50%', transform: 'translateY(-50%)' }}
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
      </button>
      <div
        ref={sliderRef}
        className="w-full h-full flex items-center overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
        tabIndex={0}
        style={{ scrollBehavior: 'smooth' }}
      >
        {images.map((img, i) => (
          <motion.img
            key={img}
            src={img}
            alt={`Gallery ${i + 1}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`rounded-2xl shadow-xl object-cover w-72 h-56 mx-3 snap-center border-2 border-yellow-300/30 bg-yellow-100/10 ${i === current ? 'ring-4 ring-yellow-400' : ''}`}
            tabIndex={-1}
          />
        ))}
      </div>
      <button
        aria-label="Next"
        onClick={goRight}
        className="absolute right-2 z-10 bg-yellow-400/80 hover:bg-yellow-500 text-black rounded-full p-2 shadow-lg focus:outline-none"
        style={{ top: '50%', transform: 'translateY(-50%)' }}
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
      </button>
    </div>
  );
}