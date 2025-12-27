
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '../constants/constants';
import MarlanLogo from '../assets/images/marlan-unisex-beauty-salon-logo-white-bg.jpeg';


export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  // Framer Motion variants for mobile menu
  const menuVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 120 } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.2 } },
  };

  return (
    <motion.nav
      className="fixed left-1/2 top-3 -translate-x-1/2 w-screen max-w-6xl z-50 bg-black/80 dark:bg-black/90 backdrop-blur-lg flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-2xl border border-yellow-400/40 ring-2 ring-yellow-300/10 ring-offset-2 ring-offset-black"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 80 }}
      style={{ boxShadow: '0 8px 32px 0 rgba(255, 193, 7, 0.15), 0 1.5px 8px 0 rgba(0,0,0,0.25)' }}
    >
      <div className="flex w-full justify-between items-center">
        <motion.div
          className="flex items-center gap-2 text-2xl sm:text-3xl font-bold text-yellow-400 tracking-widest"
          whileHover={{ scale: 1.08 }}
        >
          <img src={MarlanLogo} alt="Marlan's Unisex Beauty Salon Logo" className="w-14 h-14 sm:w-20 sm:h-20 rounded-full shadow-lg border-2 border-yellow-400" />
          {/* <span className="hidden sm:inline-block ml-2">Marlan's Unisex</span> */}
        </motion.div>
        {/* Hamburger for mobile */}
        <button
          className="sm:hidden flex items-center justify-center w-12 h-12 rounded-lg bg-yellow-400/80 hover:bg-yellow-400 transition-all shadow-lg"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <motion.span
            initial={false}
            animate={menuOpen ? { rotate: 45, y: 2 } : { rotate: 0, y: 0 }}
            className="block w-6 h-1 bg-black rounded mb-1"
          />
          <motion.span
            initial={false}
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-1 bg-black rounded mb-1"
          />
          <motion.span
            initial={false}
            animate={menuOpen ? { rotate: -45, y: -2 } : { rotate: 0, y: 0 }}
            className="block w-6 h-1 bg-black rounded"
          />
        </button>
      </div>
      {/* Desktop menu */}
      <ul className="w-full hidden sm:flex flex-wrap gap-4 sm:gap-8 sm:text-md font-semibold mt-2 sm:mt-0">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.to}
              className={`transition-colors duration-300 px-3 py-2 rounded-xl ${active === item.label ? 'bg-yellow-400 text-black shadow-md' : 'text-yellow-100 hover:text-yellow-400 hover:bg-black/40'}`}
              onClick={() => setActive(item.label)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className="sm:hidden absolute top-full left-0 w-full bg-black/95 rounded-b-2xl shadow-2xl border-t border-yellow-400/30 flex flex-col items-center gap-4 py-6 text-lg font-semibold"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            {navItems.map((item) => (
              <motion.li key={item.label} whileTap={{ scale: 0.97 }}>
                <a
                  href={item.to}
                  className={`block w-full text-center transition-colors duration-300 px-4 py-2 rounded-xl ${active === item.label ? 'bg-yellow-400 text-black shadow-md' : 'text-yellow-100 hover:text-yellow-400 hover:bg-black/40'}`}
                  onClick={() => {
                    setActive(item.label);
                    setMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
