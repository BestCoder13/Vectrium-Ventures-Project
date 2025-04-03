import React from 'react';

const CallNow = () => {
  const handleRedirect = () => {
    window.location.href = "https://api.whatsapp.com/send?phone=918815631154";
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 mx-auto mt-10 h-auto py-12 bg-gray-800 rounded-md transform transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full max-w-4xl">
      <div className="text-center space-y-6 p-6 sm:p-8 rounded-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-gray-100">
          We are here to help you grow your online business
        </h1>
        <p className="text-base sm:text-lg text-gray-300">
          Get in touch with us instantly. We are ready to assist you with your business needs.
        </p>
        <button
          onClick={handleRedirect}
          className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold py-3 px-6 sm:px-8 rounded-full shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Call Now →
        </button>
      </div>
    </div>
  );
};

export default CallNow;