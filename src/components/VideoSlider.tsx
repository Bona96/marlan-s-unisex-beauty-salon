// Single video slider component
import { motion } from 'framer-motion';
import type { VideoSliderProps } from '../lib/types';

// Multiple video slider component
export const VideoSlider = ({ videos, isFirstPart = false }: VideoSliderProps) => {
//   const sliderRef = useRef(null);
  return (
    <div className="relative w-full flex items-center justify-center overflow-x-auto snap-x snap-mandatory scrollbar-hide py-2">
      {videos && videos.length > 0 ? (
        videos.map((video, i) => (
          <motion.div
            key={video}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="mx-3 snap-center rounded-2xl shadow-2xl border-2 border-yellow-400/40 bg-black/70 overflow-hidden flex items-center justify-center p-2"
            style={{ maxWidth: '85vw', maxHeight: '60vh' }}
          >
            <video
              src={video}
              controls
              autoPlay={isFirstPart ? true : false}
              muted={isFirstPart ? false : true}
              loop={true}
              playsInline
              className="max-w-full max-h-[60vh] w-auto h-auto object-contain rounded-2xl"
              poster="/default-video-poster.jpg"
              style={{ background: 'linear-gradient(135deg, #232526 0%, #181818 100%)' }}
            />
          </motion.div>
        ))
      ) : (
        <div className="w-full text-center text-yellow-400 py-8">No videos available yet.</div>
      )}
    </div>
  );
}

