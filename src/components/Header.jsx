import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-min.png';

const Header = () => {
    return (
        <div className='fixed w-full z-10 header bg-[#000] h-20 flex justify-between transition-all duration-200 ease-linear'>
            <div className="nav-left flex ">
                <Link to="/" className='flex items-center ml-10 hover:cursor-pointer'>
                    <img className='h-16 ' src={logo} alt="Loading" />
                    <h1 className='text-white text-2xl'>Vectrium Ventures</h1>
                </Link>

                <ul className='flex space-x-8 ml-30 text-gray-400 items-center '>
                    <li className='nav-link'><Link to="/">Home</Link></li>
                    <li className='nav-link'><Link to="/services">Services</Link></li>
                    <li className='nav-link'><Link to="/about">About Us</Link></li>
                    <li className='nav-link'><Link to="/career">Career</Link></li>
                    <li className='nav-link'><Link to="/contact">Contact Us</Link></li>
                </ul>
            </div>
            <div className="nav-right mt-4.5 mr-10 ">
                <button className='bg-white hover:bg-gray-400 text-black font-bold py-2 px-4 rounded hover:cursor-pointer'>Call Now</button>
            </div>
        </div>
    )
}

export default Header;
