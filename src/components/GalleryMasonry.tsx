import Masonry from 'react-masonry-css';

type GalleryMasonryProps = {
  images: string[];
};

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

export default function GalleryMasonry({ images }: GalleryMasonryProps) {
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
