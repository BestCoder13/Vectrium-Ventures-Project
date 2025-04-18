import React from 'react';
import bg from '../assets/bg.avif';
import { motion } from 'framer-motion';

const ServiceHome = () => {
    const handleRedirect = () => {
        window.location.href = "https://api.whatsapp.com/send?phone=918815631154";
      };
    return (
        <div>
            <div
                className='w-full min-h-screen bg-cover bg-center text-white flex items-center justify-center'
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className='w-full h-full backdrop-blur-md bg-black/30 flex items-center justify-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className='flex flex-col px-6 py-16 md:px-20 max-w-4xl'
                    >
                        <h3 className='text-blue-300 text-lg md:text-2xl mb-2 tracking-wide'>
                            Our Services
                        </h3>
                        <h1 className='text-white text-3xl md:text-5xl font-bold leading-tight mb-4'>
                            We provide best business solutions
                        </h1>
                        <p className='text-gray-300 text-base md:text-lg mb-6'>
                            We offer a range of services designed to help your business grow. From innovative design solutions
                            to cutting-edge technology and strategic marketing, our team is dedicated to delivering high-quality
                            results tailored to your needs.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleRedirect}
                            className='bg-blue-400 hover:bg-blue-500 text-black font-semibold px-6 py-3 rounded-md w-max shadow-lg transition-all duration-300'
                        >
                            Call Now
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ServiceHome;


