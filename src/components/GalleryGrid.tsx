// import React from 'react';

type GalleryGridProps = {
  images: string[];
};

export default function GalleryGrid({ images }: GalleryGridProps) {
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
