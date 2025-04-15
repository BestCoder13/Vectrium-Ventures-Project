import React, { useState } from 'react';
import career from '../assets/career.webp';
import { motion } from 'framer-motion';

const Role = () => {
  const [resumeFile, setResumeFile] = useState(null);

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted File:", resumeFile);
    alert('Application submitted!');
  };

  return (
    <div className='bg-[#0E0E10] text-white px-4 sm:px-6 md:px-12 lg:px-20 py-16 flex flex-col lg:flex-row items-center justify-center gap-12'>
      
      {/* Form Section */}
      <div className="w-full lg:w-1/2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F4F4F5] mb-8 text-center lg:text-left">
          Apply for this Role
        </h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: 'Name', type: 'text', placeholder: 'Enter your name', required: true },
            { label: 'Email', type: 'email', placeholder: 'Enter your email', required: true },
            { label: 'Phone Number', type: 'tel', placeholder: 'Enter phone number', required: true },
            { label: 'Job Title', type: 'text', placeholder: 'Enter job title', required: true },
            { label: 'Location', type: 'text', placeholder: 'Enter location', required: true },
            { label: 'LinkedIn Profile', type: 'url', placeholder: 'Enter LinkedIn URL' },
            { label: 'Personal Website', type: 'url', placeholder: 'Enter personal website' },
          ].map((field, idx) => (
            <div key={idx}>
              <label className="block text-xs font-medium text-gray-300">{field.label}</label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
                className="w-full mt-1 px-4 py-2 bg-[#1A1A1D] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00D1FF] text-sm"
              />
            </div>
          ))}

          {/* Resume Upload */}
          <div className="md:col-span-2">
            <label className="block text-xs font-medium text-gray-300 mb-1">Resume</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
              className="w-full border border-gray-700 rounded-md p-2 bg-[#1A1A1D] text-gray-400 text-sm"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-[#00D1FF] hover:bg-[#00b8e6] text-black font-semibold py-2 rounded-md transition duration-300 text-sm"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Image Section */}
      <motion.div
        className="w-full lg:w-1/2 flex items-center justify-center mt-10 lg:mt-0 hidden sm:flex"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        <img
          src={career}
          alt="Career"
          className='rounded-2xl shadow-xl w-10/12 sm:w-3/4 md:w-full max-w-xs md:max-w-md lg:max-w-full'
        />
      </motion.div>
    </div>
  );
};

export default Role;
