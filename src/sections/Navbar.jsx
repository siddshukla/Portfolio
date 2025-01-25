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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 navbar">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-3 mx-auto c-space"> {/* Reduced padding */}
          
        <a href="/home" className="flex items-center text-neutral-400 font-bold text-xl hover:text-white transition-colors">
  {/* Logo Image */}
  <img
    src="/assets/logo3.svg"
    alt="logo"
    style={{ width: '80px', height: '4rem', marginBottom: '0px' }} className='absolute left-3' // Adjust logo size
  />
  
  {/* Textual Logo */}
  <img
    src="/assets/Logo3.png"
    alt="SIDD"
    style={{ width: '13rem', height: '4rem', marginBottom: '0px' }}// Adjust text logo size
    className="absolute left-12"
  />
</a>


          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu">
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
