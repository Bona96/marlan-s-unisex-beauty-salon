import { motion } from 'framer-motion';
import { marlanVideos } from '../constants/constants';
import { SingleVideoPlayer } from '../components/VideoSlider';

export default function HomeSlider() {
  return (
    <section 
      id="home" 
      className="h-screen flex flex-col justify-center items-center bg-linear-to-b from-black to-yellow-900 dark:from-black dark:to-yellow-900 relative overflow-hidden"
    >
      <motion.div 
        initial={{ opacity: 0, y: 60 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        className="z-10 text-center px-2 bg-black/50 rounded-lg p-6 md:p-10 shadow-lg border border-yellow-400/30 mt-20"
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

      <div className="absolute inset-0 z-0 pointer-events-none">
        <SingleVideoPlayer
          src={marlanVideos.MarlanVideo1}
          autoPlay={true}
          muted={true}
          controls={false}
          loop={true}
          className="w-full h-full object-center rounded-2xl bg-black/50"
          style={{ background: 'linear-gradient(135deg, #232526 0%, #181818 100%)' }}
        />
      </div>
      {/* <div className="absolute inset-0 z-1 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <Environment preset="sunset" />
          <Salon3DLogo />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
        </Canvas>
      </div> */}
    </section>
  );
}
