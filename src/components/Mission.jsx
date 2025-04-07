import React from 'react';
import img from '../assets/mission.png';
import { motion } from 'framer-motion';

const Mission = () => {
    return (
        <div className='text-white px-6 py-20 md:px-20 md:py-20 flex flex-col lg:flex-row gap-16 lg:gap-20 items-center justify-center'>
            <div className="left w-full lg:w-1/2 flex flex-col space-y-8 items-start justify-center">
                <h1 className='text-4xl md:text-5xl font-bold text-[#F4F4F5]'>Our Mission</h1>
                <p className='text-base md:text-lg text-gray-300 leading-loose'>
                    We are committed to delivering innovative IT solutions that empower businesses to achieve their goals and drive digital transformation. Our mission is to provide exceptional service and expertise to help our clients thrive in a rapidly evolving digital landscape.
                </p>
                <div className='flex flex-wrap gap-10 mt-8'>
                    <div className='text-center'>
                        <h1 className='text-4xl font-bold text-[#00D1FF]'>94%</h1>
                        <p className='text-sm text-gray-400'>Satisfaction Rate</p>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-4xl font-bold text-[#00FFB2]'>70M+</h1>
                        <p className='text-sm text-gray-400'>Users Served</p>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-4xl font-bold text-[#FF7CF7]'>10K+</h1>
                        <p className='text-sm text-gray-400'>Projects Completed</p>
                    </div>
                </div>
            </div>
            <motion.div 
                className="right w-full lg:w-1/2 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
                <img src={img} alt="mission" className='rounded-2xl shadow-lg transition-all duration-300 ease-in-out' />
            </motion.div>
        </div>
    );
};

export default Mission;
