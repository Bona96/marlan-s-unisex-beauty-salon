import { useState } from 'react';
// import GalleryRing3D from './GalleryRing3D';
import GalleryGrid from './GalleryGrid';
import GalleryMasonry from './GalleryMasonry';
import GallerySlider from './GallerySlider';

type GallerySliderProps = {
  images: string[];
};
const layoutOptions = [
//   { label: '3D Ring', value: 'ring' },
  { label: 'Grid', value: 'grid' },
  { label: 'Masonry', value: 'masonry' },
  { label: 'Slider', value: 'slider' },
];

export default function GalleryLayoutSelector({ images }: GallerySliderProps) {
  const [layout, setLayout] = useState('grid');

  return (
    <div className="w-full max-w-6xl flex flex-col items-center">
      <div className="flex gap-3 mb-6 justify-center">
        {layoutOptions.map(opt => (
          <button
            key={opt.value}
            className={`px-4 py-2 rounded-full font-semibold transition-colors border border-yellow-400/40 bg-black/40 text-yellow-300 hover:bg-yellow-400 hover:text-black ${layout === opt.value ? 'bg-yellow-400 text-black' : ''}`}
            onClick={() => setLayout(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>
      <div className="w-full h-auto max-h-[70vh] sm:max-h-[80vh] md:max-h-[85vh] rounded-3xl overflow-auto shadow-2xl border border-yellow-400/30 relative bg-black/60">
        {/* {layout === 'ring' && <GalleryRing3D images={images} />} */}
        {layout === 'grid' && <GalleryGrid images={images} />}
        {layout === 'masonry' && <GalleryMasonry images={images} />}
        {layout === 'slider' && <GallerySlider images={images} />}
      </div>
    </div>
  );
}
