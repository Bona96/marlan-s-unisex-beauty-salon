// Single video slider component
import React from 'react';
import { motion } from 'framer-motion';
import type { VideoPlayerProps, VideoSliderProps } from '../lib/types';


// Multiple video slider component
export const VideoSlider = ({ videos }: VideoSliderProps) => {
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

export const SingleVideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  poster,
  controls = true, // Default values can be set in destructuring
  autoPlay = true,
  loop = false,
  muted = false,
  style,
}) => {
  return (
    <section className="h-125 flex items-center justify-center w-full overflow-hidden">
      <video
        src={src}
        poster={poster}
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        className="w-full h-full object-contain rounded-2xl"
        style={style}
        // You can add other HTML video attributes here
      >
        Your browser does not support the video tag.
      </video>
    </section>
  );
};
