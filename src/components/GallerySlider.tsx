import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

type GallerySliderProps = {
  images: string[];
};

export default function GallerySlider({ images }: GallerySliderProps) {
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
