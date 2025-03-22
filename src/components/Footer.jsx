import React from 'react';
import logo from '../assets/logo-min.png';
import facebook from '../assets/Facebook.jpeg';
import instagram from '../assets/Instagram.webp';
import whatsapp from '../assets/Whatsapp.avif';
import linkedin from '../assets/Linkedin.png';

const Footer = () => {
  return (
    <div className='footer_container absolute bottom-0 left-0 w-full  text-white'>
      <div className="footer flex flex-col items-center justify-center py-6">
        <div className="upper_footer mb-4 flex flex-col items-center">
          <img src={logo} className='h-20 mb-2' alt="Company Logo" />
          <h1 className="text-lg font-semibold">Vectrium Ventures</h1>
          <p className="text-sm text-center">
            Address: Indore
            <br />
            Email: contact@vectriumventures.in
          </p>

          <div className="icons flex space-x-4 mt-4">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" className='h-8 w-8 rounded-full' />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" className='h-8 w-8 rounded-full' />
            </a>
            <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
              <img src={whatsapp} alt="WhatsApp" className='h-8 w-8 rounded-full' />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className='h-8 w-8 rounded-full' />
            </a>
          </div>
        </div>

        <div className="lower_footer w-[95vw] text-center">
          <hr className="border-gray-500 mb-4" />
          <p className='pb-8 pt-3 text-md font-light'>
            Copyright © 2025 | <span className="font-semibold">Vectrium Ventures</span> | All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
