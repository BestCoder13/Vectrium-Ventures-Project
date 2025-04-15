import React from 'react';
import { motion } from 'framer-motion';
import img from '../assets/career-min.jpg';

const Career2 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16 px-4 sm:px-6 md:px-10 lg:px-24 py-16 sm:py-20">
      
      {/* Image with hover animation */}
      <motion.div 
        initial={{ opacity: 0, x: -40 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.03 }}
        className="w-full lg:w-1/2"
      >
        <motion.img 
          src={img} 
          alt="Career Illustration" 
          className="rounded-2xl w-full shadow-lg"
        />
      </motion.div>

      {/* Text and boxes with hover animation */}
      <motion.div 
        initial={{ opacity: 0, x: 40 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full lg:w-[45%] text-white mt-10 lg:mt-0"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-8 text-center lg:text-left">
          Perfect for Candidates. <br /> Beautiful for Employers.
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {[
            {
              title: "Profile",
              description: "Detailed information about the candidate’s background."
            },
            {
              title: "Skills",
              description: "Showcasing the candidate’s key competencies and talents."
            },
            {
              title: "Experience",
              description: "Years of experience in relevant fields."
            },
            {
              title: "Portfolio",
              description: "Projects and work samples completed by the candidate."
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 shadow-md"
            >
              <h2 className="font-semibold text-white text-lg sm:text-xl mb-2">{item.title}</h2>
              <p className="text-gray-300 text-sm sm:text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Career2;
