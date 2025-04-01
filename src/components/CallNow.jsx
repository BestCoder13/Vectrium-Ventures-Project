import React from 'react';

const CallNow = () => {
  const handleRedirect = () => {
    window.location.href = "https://api.whatsapp.com/send?phone=918815631154";
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 ml-14 mt-15 mr-14 sm:px-14 h-[300px] bg-gray-800 rounded-md transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="text-center space-y-6 p-8 rounded-lg">
        <h1 className="text-4xl font-extrabold leading-tight text-gray-100">
          We are here to help you grow your online business
        </h1>
        <p className="text-lg text-gray-300">
          Get in touch with us instantly. We are ready to assist you with your business needs.
        </p>
        <button
          onClick={handleRedirect}
          className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Call Now →
        </button>
      </div>
    </div>
  );
};

export default CallNow;
