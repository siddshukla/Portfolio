import { useState } from 'react';
import { navLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <a href={item.href} className="nav-li_a" onClick={onClick}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-filter backdrop-blur-lg navbar transform perspective-1000 rotate-x-1 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-3 mx-auto c-space">
          <a href="/home" className="flex items-center text-neutral-400 font-bold text-xl hover:text-white transition-colors transform hover:scale-105">
            <img
              src="/assets/logo3.svg"
              alt="logo"
              style={{ width: '80px', height: '4rem', marginBottom: '0px' }}
              className="transform hover:rotate-y-180 transition-transform duration-500"
            />
            <img
              src="/assets/newLogo.png"
              alt="SIDD"
              style={{ width: '9rem', height: '3rem', marginBottom: '0px' }}
              className="ml-1 transform hover:translate-y-[-5px] transition-transform duration-300"
            />
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex transform hover:rotate-180 transition-transform duration-300"
            aria-label="Toggle menu">
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'} backdrop-filter backdrop-blur-lg bg-black/60`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
