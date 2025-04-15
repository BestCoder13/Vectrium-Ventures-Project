import React from 'react';
import { motion } from 'framer-motion';
import bg from '../assets/bg.avif';
import JobCategory from './JobCategory';
import Career2 from './Career2';
import Role from './Role';

const Career = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-black/50 backdrop-blur-sm text-white rounded-3xl px-6 py-10 sm:px-10 sm:py-12 lg:px-14 w-[90%] sm:w-[85%] md:w-[75%] lg:w-[45%] shadow-2xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug sm:leading-tight mb-6">
            One Step <br /> Closer To Your <br /> New Job
          </h1>

          <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
            Explore exciting career opportunities at <span className="text-white font-semibold">Vectrium Ventures</span>. We are always looking for talented individuals to join our team and help us grow. If you’re passionate about technology, creativity, and innovation — we’d love to hear from you.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Popular Categories</h2>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            {['UX Designer', 'Frontend Dev', 'Backend Dev'].map((role, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-5 py-2 text-sm font-medium text-white bg-white/10 border border-white/30 rounded-full hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
              >
                {role}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Job Categories */}
      <JobCategory />

      {/* Career Info Section */}
      <Career2 />
      <Role />
    </div>
  );
};

export default Career;
