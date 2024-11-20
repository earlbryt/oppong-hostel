import React from 'react';
import { motion } from 'framer-motion';
import { amenities } from '../../data/amenities';
import AmenityCard from './AmenityCard';
import { Coffee, Wifi, Dumbbell, Book, Utensils, Tv } from 'lucide-react';

interface AmenitiesSectionProps {
  ref: React.RefObject<HTMLDivElement>;
}

const AmenitiesSection = React.forwardRef<HTMLDivElement>((_, ref) => {
  const amenityIcons = {
    "24/7 Fitness Center": <Dumbbell className="w-6 h-6 text-white" />,
    "Smart Library": <Book className="w-6 h-6 text-white" />,
    "Modern Cafeteria": <Utensils className="w-6 h-6 text-white" />,
    "Tech-Enabled Study Rooms": <Wifi className="w-6 h-6 text-white" />,
    "Student Lounge": <Coffee className="w-6 h-6 text-white" />,
    "Smart Laundry Room": <Tv className="w-6 h-6 text-white" />
  };

  return (
    <div ref={ref} className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      <div className="relative max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
          >
            Premium Amenities
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            Experience luxury living with our world-class facilities
          </motion.p>
        </div>

        {/* 3D Tilt Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02
              }}
              className="perspective"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform-gpu transition-all duration-300 hover:shadow-xl">
                <div className="relative h-64 overflow-hidden group">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 z-10 
                    group-hover:from-black/80 transition-all duration-300" />
                  
                  {/* Interactive Circle with Pulse Effect */}
                  <motion.div 
                    className="absolute top-4 right-4 z-20"
                    initial={{ scale: 1 }}
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  >
                    <div className="relative">
                      {/* Pulse Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-orange-500 rounded-full animate-ping opacity-20" />
                      <motion.div 
                        className="relative bg-gradient-to-br from-rose-500 to-orange-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: 360,
                          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        {amenityIcons[amenity.title as keyof typeof amenityIcons]}
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  {/* Image */}
                  <motion.img 
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <motion.h3 
                      className="text-2xl font-bold text-white mb-2 transform group-hover:translate-y-0 transition-transform duration-300"
                      initial={{ y: 20 }}
                      whileInView={{ y: 0 }}
                    >
                      {amenity.title}
                    </motion.h3>
                    <motion.p 
                      className="text-white/90 leading-relaxed transform opacity-0 group-hover:opacity-100 transition-all duration-300"
                      initial={{ y: 20 }}
                      whileInView={{ y: 0 }}
                    >
                      {amenity.description}
                    </motion.p>
                  </div>

                  {/* Hover Effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                  />
                </div>

                {/* Enhanced Interactive Elements */}
                <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                  <motion.div 
                    className="flex items-center justify-between group/learn cursor-pointer"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <div className="flex items-center space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-sm font-medium bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover/learn:from-rose-600 group-hover/learn:to-orange-600 transition-all duration-300"
                      >
                        Learn More
                      </motion.button>
                      <motion.span
                        initial={{ x: 0, opacity: 0.5 }}
                        animate={{ x: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity,
                          repeatType: "reverse" 
                        }}
                        className="text-rose-500"
                      >
                        →
                      </motion.span>
                    </div>
                    
                    {/* Subtle Interaction Hint */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="text-xs text-gray-400"
                    >
                      Tap to explore
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
});

AmenitiesSection.displayName = 'AmenitiesSection';

export default AmenitiesSection; 