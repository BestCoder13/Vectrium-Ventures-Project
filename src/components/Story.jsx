import React from 'react';
import img from '../assets/blue.webp';

const Story = () => {
  return (
    <div className="w-full bg-[#0a0a0a] px-6 md:px-20 py-20 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <p className="text-blue-500 text-sm uppercase tracking-widest">Our Story</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-[#111111] p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col justify-between gap-8">
            <h1 className="text-2xl md:text-4xl font-bold leading-snug">
              Vectrium Ventures is a premier IT solutions provider based in Indore, offering expertise in website development, UI/UX design, and digital marketing.
            </h1>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <img
                src={img}
                alt="Visual"
                className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full object-cover"
              />
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-center sm:text-left">
                We help businesses enhance their online presence with innovative strategies and tailored solutions, delivering high-quality results.
              </p>
            </div>
          </div>

          <div className="bg-[#111111] p-6 sm:p-8 rounded-2xl shadow-lg space-y-10 overflow-y-auto max-h-[90vh]">
            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-400">
                01. Client-Centric Innovation
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed ml-0 sm:ml-10">
                We focus on delivering personalized solutions, keeping the client’s goals at the forefront of every project. Our approach fosters long-term partnerships.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-400">
                02. Strategic Expertise
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed ml-0 sm:ml-10">
                Backed by six years of research, we combine technical expertise with creative problem-solving to provide impactful IT solutions.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-400">
                03. Collaborative Growth
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed ml-0 sm:ml-10">
                We work closely with our clients, ensuring seamless communication and collaboration, which helps us refine strategies and deliver results that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
