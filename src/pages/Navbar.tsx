import { useState } from 'react';
import { motion } from 'framer-motion';
import { navItems } from '../constants/constants';
import MarlanLogo from '../assets/images/marlan-unisex-beauty-salon-logo-white-bg.jpeg';

export default function Navbar() {
  const [active, setActive] = useState('Home');
  return (
    <motion.nav
      className="fixed rounded-sm top-5 m-5 w-full z-50 bg-black/80 dark:bg-black/90 backdrop-blur flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-3 sm:py-4 shadow-lg border-b border-yellow-400/30"
      initial={{ y: -80 }} 
      animate={{ y: 0 }} 
      transition={{ type: 'spring', stiffness: 80 }}
    >
      <motion.div 
        className="text-2xl sm:text-3xl font-bold text-yellow-400 tracking-widest mb-2 sm:mb-0" 
        whileHover={{ scale: 1.1 }}
      >
        <img src={MarlanLogo} alt="Marlan's Unisex Beauty Salon Logo" className="w-20 h-20 ml-2 inline-block" />
      </motion.div>
      <ul className="flex flex-wrap gap-4 sm:gap-8 text-base sm:text-lg font-semibold">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.to}
              className={`transition-colors duration-300 px-2 py-1 rounded-lg ${active === item.label ? 'bg-yellow-400 text-black' : 'text-yellow-100 hover:text-yellow-400 hover:bg-black/40'}`}
              onClick={() => setActive(item.label)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
