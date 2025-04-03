import React from "react";
import logo from "../assets/logo-min.png";
import facebook from "../assets/Facebook.jpeg";
import instagram from "../assets/Instagram.webp";
import whatsapp from "../assets/Whatsapp.avif";
import linkedin from "../assets/Linkedin.png";

const Footer = () => {
  return (
    <div className="w-full text-white text-center py-6 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col items-center">
        <img src={logo} className="h-16 md:h-20 mb-2" alt="Company Logo" />
        <h1 className="text-base md:text-lg font-semibold">Vectrium Ventures</h1>
        <p className="text-xs md:text-sm text-center">
          Address: Indore <br />
          Email: contact@vectriumventures.in
        </p>
      </div>
      <div className="flex justify-center space-x-3 md:space-x-4 mt-4">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="Facebook" className="h-6 w-6 md:h-8 md:w-8 rounded-full" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" className="h-6 w-6 md:h-8 md:w-8 rounded-full" />
        </a>
        <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
          <img src={whatsapp} alt="WhatsApp" className="h-6 w-6 md:h-8 md:w-8 rounded-full" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="h-6 w-6 md:h-8 md:w-8 rounded-full" />
        </a>
      </div>
      <hr className="border-gray-500 my-4 w-full max-w-3xl mx-auto" />
      <p className="text-xs md:text-md font-light">
        Copyright © 2025 | <span className="font-semibold">Vectrium Ventures</span> | All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;