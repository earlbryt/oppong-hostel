import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';

const LocationBadge: React.FC = () => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05, y: -2 }}
      className="absolute top-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl z-20 
        border border-white/20 group cursor-pointer overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white/50 opacity-0 
        group-hover:opacity-100 transition-all duration-300" />
      <div className="flex items-center space-x-3 relative">
        <MapPin className="w-5 h-5 text-black/70 group-hover:text-black transition-colors" />
        <span className="font-medium group-hover:text-black transition-colors">Central Campus Area</span>
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </motion.div>
  );
};

export default LocationBadge; 