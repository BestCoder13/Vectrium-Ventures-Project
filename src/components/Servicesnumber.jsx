import React from 'react'; 
import { motion } from 'framer-motion';

const Servicesnumber = () => {
    return (
        <div className='w-full py-16 px-6 md:px-20 bg-black text-white'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className='hover:scale-120 transition-all duration-300'
                >
                    <h1 className='text-3xl md:text-4xl font-bold text-blue-400'>20K+</h1>
                    <p className='text-sm md:text-base mt-2'>Happy Clients</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className='hover:scale-120 transition-all duration-300'
                >
                    <h1 className='text-3xl md:text-4xl font-bold text-blue-400'>5K+</h1>
                    <p className='text-sm md:text-base mt-2'>Successful Projects</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className='hover:scale-120 transition-all duration-300'
                >
                    <h1 className='text-3xl md:text-4xl font-bold text-blue-400'>100+</h1>
                    <p className='text-sm md:text-base mt-2'>Positive Feedback</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className='hover:scale-120 transition-all duration-300'
                >
                    <h1 className='text-3xl md:text-4xl font-bold text-blue-400'>50+</h1>
                    <p className='text-sm md:text-base mt-2'>Global Search</p>
                </motion.div>

            </div>
        </div>
    );
};

export default Servicesnumber;
