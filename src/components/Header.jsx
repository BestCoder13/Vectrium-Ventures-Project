import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-min.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='fixed w-full z-10 header bg-[#000] h-16 flex justify-between items-center px-6'>
  
      <Link to="/" className='flex items-center'>
        <img className='h-16' src={logo} alt="Logo" />
        <h1 className='text-white text-xl ml-2'>Vectrium Ventures</h1>
      </Link>

      <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <ul className={`lg:flex space-x-8 text-gray-400 items-center text-sm ${menuOpen ? 'flex flex-col items-center justify-center absolute top-16 left-0 bg-black w-full py-6 space-y-4' : 'hidden'} lg:block`}>
        {['Home', 'Services', 'About Us', 'Career', 'Contact Us'].map((link, index) => (
          <li key={index} className='nav-link'>
            <Link to={`/${link.toLowerCase().replace(' ', '')}`} onClick={() => setMenuOpen(false)}>{link}</Link>
          </li>
        ))}
      </ul>

      <div className="hidden lg:block">
        <button className='bg-white text-sm hover:bg-gray-400 text-black font-bold py-2 px-4 rounded'>
          Call Now
        </button>
      </div>
    </div>
  );
}

export default Header;
