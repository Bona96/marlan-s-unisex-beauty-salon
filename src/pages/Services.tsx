
import { motion } from 'framer-motion';
import { Scissors, Bubbles, Brush, User } from 'lucide-react';

const services = [
  { icon: <Scissors size={40} />, title: 'Hair Styling', desc: 'Trendy cuts, coloring, and styling for all.' },
  { icon: <Bubbles size={40} />, title: 'Spa & Relaxation', desc: 'Facials, massages, and relaxation therapies.' },
  { icon: <Brush size={40} />, title: 'Makeup', desc: 'Professional makeup for every occasion.' },
  { icon: <User size={40} />, title: 'Grooming', desc: 'Beard trims, waxing, and more.' },
];

export default function Services() {
  return (
    <section id="services" className="min-h-screen py-16 px-2 md:px-8 bg-black/90 dark:bg-black flex flex-col items-center">
      <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl font-bold text-yellow-400 mb-8 text-center">Our Services</motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {services.map((service, i) => (
          <motion.div key={service.title} className="bg-black/80 dark:bg-black/90 rounded-2xl p-6 flex flex-col items-center shadow-xl border border-yellow-400/30"
            whileHover={{ scale: 1.08, rotateZ: 2 }} transition={{ type: 'spring', stiffness: 200 }}>
            <div className="text-yellow-400 mb-4">{service.icon}</div>
            <h3 className="text-xl md:text-2xl font-semibold text-yellow-100 mb-2 text-center">{service.title}</h3>
            <p className="text-yellow-200 text-center text-sm md:text-base">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
