import { motion } from 'framer-motion';


export default function AboutUs() {
  return (
    <section id="about" className="rounded-lg p-6 md:p-5 bg-gradient-to-b from-black/50 to-yellow-900/50 dark:from-black/50 dark:to-yellow-900/50 flex flex-col items-center">
      <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl font-bold text-yellow-400 mb-8 text-center">About Us</motion.h2>
      <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="max-w-2xl text-base md:text-lg text-yellow-100 text-center">
        Marlan's Unisex Beauty Salon is dedicated to providing top-tier beauty and grooming services in a luxurious, welcoming environment. Our talented team blends creativity, skill, and the latest trends to help you look and feel your best. Step into a world where beauty meets innovation—now in 3D!
      </motion.p>
    </section>
  );
}
