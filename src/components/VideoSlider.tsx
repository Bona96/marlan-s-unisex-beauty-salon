// import { useRef } from 'react';
import { motion } from 'framer-motion';

type VideoSliderProps = {
  videos: string[];
};

export default function VideoSlider({ videos }: VideoSliderProps) {
//   const sliderRef = useRef(null);
  return (
    <div className="relative w-full flex items-center overflow-x-auto snap-x snap-mandatory scrollbar-hide py-2">
      {videos && videos.length > 0 ? (
        videos.map((video, i) => (
          <motion.div
            key={video}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="mx-3 snap-center rounded-2xl shadow-2xl border-2 border-yellow-400/40 bg-black/70 overflow-hidden w-80 h-56 flex flex-col justify-center items-center"
          >
            <video
              src={video}
              controls
              className="w-full h-full object-cover rounded-2xl"
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
