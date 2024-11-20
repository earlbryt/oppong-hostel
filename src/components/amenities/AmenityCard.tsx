import React from 'react';
import { motion } from 'framer-motion';
import { Amenity } from '../../types/amenity';
import { listItemAnimation, springTransition } from '../../utils/animations';

interface AmenityCardProps {
  amenity: Amenity;
  index: number;
}

const AmenityCard: React.FC<AmenityCardProps> = ({ amenity, index }) => {
  return (
    <motion.div 
      variants={listItemAnimation(index)}
      initial="initial"
      animate="animate"
      whileHover={{ 
        y: -8,
        transition: springTransition
      }}
      className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 z-10" />
        <img 
          src={amenity.image}
          alt={amenity.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <h3 className="text-2xl font-bold text-white mb-2">{amenity.title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 leading-relaxed">{amenity.description}</p>
      </div>
    </motion.div>
  );
};

export default AmenityCard; 