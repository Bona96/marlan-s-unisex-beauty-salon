import { motion } from 'framer-motion';


export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-16 px-2 md:px-8 bg-gradient-to-t from-black to-yellow-900 dark:from-black dark:to-yellow-900 flex flex-col items-center">
      <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl font-bold text-yellow-400 mb-8 text-center">Contact Us</motion.h2>
      <motion.form initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="w-full max-w-lg bg-black/80 dark:bg-black/90 rounded-2xl p-6 flex flex-col gap-6 shadow-xl border border-yellow-400/30">
        <input type="text" placeholder="Name" className="px-4 py-3 rounded-lg bg-black/40 text-yellow-100 placeholder-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
        <input type="email" placeholder="Email" className="px-4 py-3 rounded-lg bg-black/40 text-yellow-100 placeholder-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
        <textarea placeholder="Message" rows={4} className="px-4 py-3 rounded-lg bg-black/40 text-yellow-100 placeholder-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
        <motion.button whileTap={{ scale: 0.95 }} className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-lg transition-colors duration-300 shadow-lg" type="submit">Send Message</motion.button>
      </motion.form>
    </section>
  );
}
