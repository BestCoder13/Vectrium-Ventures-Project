import React from 'react';
import img from '../assets/vision.jpg';
import { motion } from 'framer-motion';

const Vision = () => {
  return (
    <div className='w-full px-6 py-20 md:px-20 flex flex-col lg:flex-row gap-16 lg:gap-20 items-center justify-between mb-10'>
      
      <div className="left w-full lg:w-[45vw] flex items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="w-full flex justify-center"
        >
          <img
            src={img}
            alt="vision"
            className='rounded-2xl w-11/12 sm:w-10/12 md:w-full max-w-[700px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out'
          />
        </motion.div>
      </div>

      <div className="right w-full lg:w-[45vw] text-white text-center lg:text-left">
        <h1 className='text-4xl md:text-5xl font-bold mb-6 text-[#F4F4F5]'>Our Vision</h1>
        <p className='text-base md:text-lg text-gray-300 leading-loose'>
          Our vision is to become a leading innovator in the IT industry, providing cutting-edge solutions that drive growth and success for businesses worldwide. We aim to be recognized for our commitment to excellence, customer satisfaction, and our ability to adapt to the evolving technological landscape.
        </p>
      </div>

    </div>
  );
};

export default Vision;
