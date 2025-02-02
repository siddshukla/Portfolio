import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../constants/index.js';

const navVariants = {
  open: { 
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    opacity: 0,
    y: -20,
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 300, damping: 24 }
  },
  closed: { y: -20, opacity: 0 }
};

const NavItems = ({ onClick = () => {} }) => (
  <motion.ul 
    className="nav-ul"
    variants={navVariants}
    initial="closed"
    animate="open"
  >
    {navLinks.map((item) => (
      <motion.li 
        key={item.id} 
        className="nav-li group"
        variants={itemVariants}
      >
        <a 
          href={item.href} 
          className="nav-li_a relative px-4 py-2 text-neutral-400 hover:text-white transition-all duration-300"
          onClick={onClick}
        >
          {item.name}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
          />
        </a>
      </motion.li>
    ))}
  </motion.ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 backdrop-filter backdrop-blur-lg navbar transform shadow-lg ${
        hasScrolled ? 'bg-black/90' : 'bg-black/60'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', damping: 10, stiffness: 100 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-3 mx-auto c-space">
          <motion.a 
            href="/home" 
            className="flex items-center font-bold text-xl hover:text-white transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src="/assets/logo3.svg"
              alt="logo"
              style={{ width: '80px', height: '4rem' }}
              className="hover:rotate-y-180 transition-transform duration-500"
              whileHover={{ rotateY: 180 }}
            />
            <motion.img
              src="/assets/newLogo.png"
              alt="SIDD"
              style={{ width: '9rem', height: '3rem' }}
              className="ml-1"
              whileHover={{ y: -5 }}
            />
          </motion.a>

          <motion.button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <motion.img 
              src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} 
              alt="toggle" 
              className="w-6 h-6"
              key={isOpen ? 'open' : 'closed'}
              initial={{ rotate: isOpen ? -180 : 0 }}
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </motion.button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="nav-sidebar backdrop-filter backdrop-blur-lg bg-black/80 sm:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', damping: 20 }}
          >
            <nav className="p-5">
              <NavItems onClick={closeMenu} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
