import React from 'react';
import { Brush, Cpu, Megaphone, DollarSign, BarChart } from 'lucide-react';

const categories = [
  { name: 'Design', icon: <Brush className="w-10 h-10 md:w-14 md:h-14 text-yellow-400" /> },
  { name: 'Technology', icon: <Cpu className="w-10 h-10 md:w-14 md:h-14 text-blue-400" /> },
  { name: 'Marketing', icon: <Megaphone className="w-10 h-10 md:w-14 md:h-14 text-pink-400" /> },
  { name: 'Finance', icon: <DollarSign className="w-10 h-10 md:w-14 md:h-14 text-green-400" /> },
  { name: 'Sales', icon: <BarChart className="w-10 h-10 md:w-14 md:h-14 text-purple-400" /> },
];

const JobCategory = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 py-16 text-white pb-40">
      <h1 className="text-3xl md:text-4xl font-bold mb-16 text-center mt-16">
        Most Demanded Job Categories
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center h-48 sm:h-52 md:h-56 bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg hover:bg-gray-700"
          >
            <div className="mb-4">{category.icon}</div>
            <h2 className="text-lg md:text-xl font-semibold text-center">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
