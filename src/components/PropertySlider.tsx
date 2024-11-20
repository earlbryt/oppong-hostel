import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
    title: "Luxury Beachfront Villa", 
    location: "Melbourne VIC, Australia",
    description: "Experience the ultimate in coastal living with this stunning Melbourne villa, featuring panoramic ocean views and infinity pool.",
    rating: 5
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&q=80",
    title: "Mountain View A-Frame",
    location: "Vancouver, Canada", 
    description: "Escape to this cozy A-frame cabin nestled in the heart of Vancouver's wilderness.",
    rating: 5,
    popular: true
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1582610116397-edb318620f90?w=800&q=80",
    title: "Tropical Paradise Villa",
    location: "Bali, Indonesia",
    description: "Immerse yourself in Balinese culture with this stunning villa surrounded by lush gardens and infinity pools.",
    rating: 5,
    popular: true
  }
];

export default function PropertySlider() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const newPage = page + newDirection;
    if (newPage >= 0 && newPage < properties.length) {
      setPage([newPage, newDirection]);
    }
  };

  return (
    <div className="relative h-[500px] overflow-hidden perspective">
      <div className="absolute inset-x-0 bottom-4 z-50 flex items-center justify-center space-x-4">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => paginate(-1)}
          className="p-3 bg-white/20 rounded-full backdrop-blur-sm text-white hover:bg-white/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={page === 0}
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => paginate(1)}
          className="p-3 bg-white/20 rounded-full backdrop-blur-sm text-white hover:bg-white/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={page === properties.length - 1}
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>

      <div className="relative w-full h-full">
        {properties.map((property, index) => {
          const isActive = index === page;
          const distance = Math.abs(index - page);
          const offset = distance * 200;
          const scale = 1 - (distance * 0.15);
          const opacity = Math.max(0.4, 1 - (distance * 0.3));
          const rotateY = distance * -5;
          const translateX = (index - page) * 100;

          return (
            <motion.div
              key={property.id}
              animate={{
                x: `${translateX}%`,
                scale,
                opacity,
                rotateY,
                zIndex: properties.length - distance,
              }}
              initial={false}
              transition={{
                type: "spring",
                stiffness: 200, // Reduced from 300 for smoother motion
                damping: 25, // Reduced from 30 for smoother oscillation
                mass: 1, // Increased from 0.8 for more natural movement
                restDelta: 0.001, // Added for more precise final position
                restSpeed: 0.001, // Added for smoother settling
              }}
              style={{
                position: 'absolute',
                width: '100%',
                height: isActive ? '90%' : '85%',
                transformOrigin: 'center',
                perspective: '1000px',
                backfaceVisibility: 'hidden',
              }}
              className={`rounded-3xl overflow-hidden bg-white ${
                isActive ? 'shadow-2xl' : 'shadow-xl'
              }`}
            >
              <div className="relative h-[60%]">
                <img 
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6 flex items-center space-x-3 text-sm">
                  <motion.div 
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0.8 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>{property.location}</span>
                  </motion.div>
                  {property.popular && (
                    <motion.span 
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0.8 }}
                      transition={{ duration: 0.4 }}
                      className="bg-black text-white px-4 py-2 rounded-full"
                    >
                      Popular
                    </motion.span>
                  )}
                </div>
              </div>
              <motion.div 
                initial={false}
                animate={{ opacity: isActive ? 1 : 0.8 }}
                transition={{ duration: 0.4 }}
                className="p-8"
              >
                <h3 className="text-2xl font-semibold mb-3">{property.title}</h3>
                <p className="text-gray-600 text-base line-clamp-2 mb-6">{property.description}</p>
                <div className="flex items-center space-x-1">
                  {[...Array(property.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}