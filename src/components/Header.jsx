import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-min.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleRedirect = () => {
    window.location.href = "https://api.whatsapp.com/send?phone=918815631154";
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Career', path: '/career' },
    { name: 'Contact Us', path: '/contactus' },
  ];

  return (
    <div className='fixed w-full z-10 header bg-[#0a0a0a] h-16 flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-20 border-b border-white/10'>

      <Link to="/" className='flex items-center'>
        <img className='h-14 sm:h-16' src={logo} alt="Logo" />
        <h1 className='text-white text-base sm:text-lg md:text-xl ml-2 font-medium'>Vectrium Ventures</h1>
      </Link>

      <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-neutral-300">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <ul className={`text-sm lg:flex space-x-8 ${menuOpen ? 'flex flex-col items-center justify-center absolute top-16 left-0 bg-[#0a0a0a] w-full py-6 space-y-4 border-t border-white/10' : 'hidden'} lg:static lg:py-0 lg:space-y-0 lg:space-x-8`}>
        {navLinks.map(({ name, path }, index) => (
          <li key={index} className='nav-link'>
            <Link
              to={path}
              onClick={() => setMenuOpen(false)}
              className='text-neutral-400 hover:text-white transition-colors'
            >
              {name}
            </Link>
          </li>
        ))}

        <li className='lg:hidden'>
          <button onClick={() => { setMenuOpen(false); handleRedirect(); }} className='bg-white/10 text-white text-sm font-medium hover:bg-white/20 px-4 py-2 rounded transition'>
            Call Now
          </button>
        </li>
      </ul>

      <div className="hidden lg:block">
        <button onClick={handleRedirect} className='bg-white/10 text-white text-sm font-medium hover:bg-white/20 px-4 py-2 rounded transition'>
          Call Now
        </button>
      </div>
    </div>
  );
};

export default Header;
