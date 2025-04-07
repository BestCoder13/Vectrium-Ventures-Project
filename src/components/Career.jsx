import React from 'react';
import { motion } from 'framer-motion';
import bg from '../assets/bg.avif';
import JobCategory from './JobCategory';
import Career2 from './Career2';

const Career = () => {
  return (
    <div>
      <div
      style={{ backgroundImage: `url(${bg})` }}
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="bg-black/40 backdrop-blur-sm text-white rounded-3xl p-6 md:p-10 lg:ml-20 ml-6 lg:w-[40vw] w-[90%] shadow-2xl"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          One Step <br /> Closer To Your <br /> New Job
        </h1>

        <p className="text-lg text-gray-300 mb-8">
          Explore exciting career opportunities at <span className="text-white font-semibold">Vectrium Ventures</span>. We are always looking for talented individuals to join our team and help us grow. If you’re passionate about technology, creativity, and innovation — we’d love to hear from you.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Popular Categories</h2>

        <div className="flex flex-wrap gap-4">
          {['UX Designer', 'Frontend Dev', 'Backend Dev'].map((role, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2.5 text-sm font-medium text-white bg-white/10 border border-white/30 rounded-full hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
            >
              {role}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
    <JobCategory/>
    <Career2/>
    </div>
  );
};

export default Career;
