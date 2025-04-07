import React from 'react';
import bg from '../assets/bg.avif';
import Story from './Story';
import Mission from './Mission';
import Vision from './Vision';

const AboutUs = () => {
  const handleRedirect = () => {
    window.location.href = "https://api.whatsapp.com/send?phone=918815631154";
  };

  return (
    <div>
      <div className="w-full min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bg})` }}>
      <div className="flex flex-col justify-center items-center text-white text-center px-4 sm:px-8 pt-36 md:pt-40 lg:pt-52 backdrop-brightness-[.5] min-h-screen">
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight max-w-3xl">
          We're changing the whole game.
        </h1>


        <button
          onClick={handleRedirect}
          className="mt-10 bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm sm:text-base font-semibold py-3 px-6 sm:px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Call Now →
        </button>
      </div>
    </div>

    <Story/>
    <Mission/>
    <Vision/>
    </div>
  );
};

export default AboutUs;
