import { motion } from 'framer-motion';
import { marlanImages, marlanVideos } from '../constants/constants';
import GalleryLayoutSelector from '../components/GalleryLayoutSelector';
import { VideoSlider } from '../components/VideoSlider';

const Gallery = () => {
  const images = Object.values(marlanImages);
  const videos = Object.values(marlanVideos || {});
  return (
    <section
      id="gallery"
      className="min-h-screen py-16 px-2 md:px-8 flex flex-col items-center dark:bg-black snap-start"
      style={{
        background: 'radial-gradient(ellipse at top, #232526 0%, #000 100%)',
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-yellow-400 mb-8 text-center drop-shadow-lg"
      >
        Portfolio Gallery
      </motion.h2>

      {/* Gallery Layout Selector: 3D Ring, Grid, Masonry, Slider */}
      <GalleryLayoutSelector images={images} />

      {/* Video Slider Section */}
      <div className="w-full max-w-5xl mt-12">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold text-yellow-300 mb-6 text-center drop-shadow"
        >
          Hair Styles Showcase
        </motion.h3>
        <VideoSlider videos={videos} isFirstPart={false} />
      </div>
    </section>
  );
}

export default Gallery;