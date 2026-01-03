import { motion } from 'framer-motion';
import { marlanVideos } from '../constants/constants';
import { SingleVideoPlayer } from '../components/VideoSlider';

export default function HomeSlider() {
  return (
    <section 
      id="home" 
      className="lg:p-28 flex-1 flex-row flex-wrap gap-5"
    >
      <motion.div 
        initial={{ opacity: 0, y: 60 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        className=" text-center px-2 rounded-lg p-6 md:p-10 shadow-lg mt-20"
      >
        <h1 className="text-2xl md:text-4xl font-extrabold text-yellow-400 mb-6 drop-shadow-lg">
          Welcome to Marlan's Unisex Beauty Salon
        </h1>
        <p 
          className="text-lg md:text-2xl text-yellow-100 mb-10"
        >
          Experience top-notch beauty services in a relaxing and friendly environment.<br></br> Your beauty is our duty!
        </p>
      </motion.div>
      <SingleVideoPlayer
        src={marlanVideos.MarlanGalleryVideo1}
        autoPlay={true}
        muted={false}
        controls={false}
        loop={true}
      />
    </section>
  );
}