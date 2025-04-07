import React from "react";
import logo from "../assets/logo-min.png";
import facebook from "../assets/Facebook.jpeg";
import instagram from "../assets/Instagram.webp";
import whatsapp from "../assets/Whatsapp.avif";
import linkedin from "../assets/Linkedin.png";

const Footer = () => {
  return (
    <div className="w-full bg-[#0a0a0a] text-neutral-300 text-center py-6 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col items-center">
        <img src={logo} className="h-16 md:h-20 mb-2" alt="Company Logo" />
        <h1 className="text-base md:text-lg font-semibold text-white">Vectrium Ventures</h1>
        <p className="text-xs md:text-sm text-neutral-400">
          Address: Indore <br />
          Email: <span className="text-indigo-400">contact@vectriumventures.in</span>
        </p>
      </div>

      <div className="flex justify-center space-x-3 md:space-x-4 mt-4">
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"
     className="text-xl hover:text-blue-600 transition-transform transform-gpu">
    <svg fill="currentColor" viewBox="0 0 320 512"  height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg" style={{ willChange: 'auto', transform: 'transform 0.3s ease-in-out' }} >
      <path d="M279.14 288l14.22-92.66h-88.91V133.69c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.5 0 225.36 0C152.14 0 104.22 44.38 104.22 124.72v70.62H22.89V288h81.33v224h100.2V288z"/>
    </svg>
  </a>

  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"
     className="text-xl hover:text-blue-600 transition-transform transform-gpu" style={{ willChange: 'auto', transform: 'transform 0.3s ease-in-out' }}>
    <svg fill="currentColor" viewBox="0 0 448 512" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg">
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
    </svg>
  </a>

  <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer"
     className="text-xl hover:text-blue-600 transition-transform transform-gpu" style={{ willChange: 'auto', transform: 'transform 0.3s ease-in-out'}}>
    <svg fill="currentColor" viewBox="0 0 448 512" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
  </a>

  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"
     className="text-xl hover:text-blue-600 transition-transform transform-gpu" style={{ willChange: 'auto', transform: 'transform 0.3s ease-in-out' }}>
    <svg fill="currentColor" viewBox="0 0 448 512" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg">
      <path d="M100.28 448H7.4V148.9h92.88zM53.84 107.1a53.58 53.58 0 1 1 0-107.1 53.59 53.59 0 0 1 0 107.1zM447.9 448h-92.4V302.4c0-34.7-.7-79.3-48.3-79.3-48.3 0-55.7 37.7-55.7 76.6V448h-92.4V148.9h88.7v40.8h1.3c12.4-23.5 42.5-48.3 87.5-48.3 93.6 0 110.8 61.6 110.8 141.7V448z"/>
    </svg>
  </a>
      </div>

      <hr className="border-white/10 my-4 w-full max-w-8xl mx-auto" />

      <p className="text-xs md:text-sm text-neutral-500">
        © 2025 <span className="text-white font-medium">Vectrium Ventures</span> — All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
