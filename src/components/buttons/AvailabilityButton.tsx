import React from 'react';
import { motion } from 'framer-motion';

const AvailabilityButton: React.FC = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-black text-white px-10 py-4 rounded-xl font-medium shadow-xl 
        hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-black to-gray-800 
        opacity-0 group-hover:opacity-100 transition-all duration-500" />
      <span className="relative">Check Availability</span>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 
        to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </motion.button>
  );
};

export default AvailabilityButton; 