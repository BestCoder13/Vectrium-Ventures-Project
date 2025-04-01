import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-min.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const closeMenu = () => setMenuOpen(false);

    return (
        <div className='fixed w-full z-10 header bg-[#000] h-16 flex justify-between items-center px-6'>
            <div className="nav-left flex items-center">
                <Link to="/" className='flex items-center'>
                    <img className='h-16' src={logo} alt="Loading" />
                    <h1 className='text-white text-xl ml-2'>Vectrium Ventures</h1>
                </Link>
            </div>

            <div className="lg:hidden flex items-center">
                <button onClick={toggleMenu} className="text-white">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            <ul className={`lg:flex space-x-8 text-gray-400 items-center text-sm ${menuOpen ? 'flex flex-col absolute top-16 left-0 bg-black w-full p-6' : 'hidden'} lg:block`}>
                <li className='nav-link'>
                    <Link to="/" onClick={closeMenu}>Home</Link>
                </li>
                <li className='nav-link'>
                    <Link to="/services" onClick={closeMenu}>Services</Link>
                </li>
                <li className='nav-link'>
                    <Link to="/about" onClick={closeMenu}>About Us</Link>
                </li>
                <li className='nav-link'>
                    <Link to="/career" onClick={closeMenu}>Career</Link>
                </li>
                <li className='nav-link'>
                    <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
                </li>
            </ul>

            <div className="nav-right mt-4 mr-10 hidden lg:block">
                <button className='bg-white text-sm hover:bg-gray-400 text-black font-bold py-2 px-4 rounded'>
                    Call Now
                </button>
            </div>
        </div>
    );
}

export default Header;
