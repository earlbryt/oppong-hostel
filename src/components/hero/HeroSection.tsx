import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, ChevronDown, Home } from 'lucide-react';

interface HeroSectionProps {
  openSearch: (type: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ openSearch }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-[90vh] items-center relative">
      {/* Left Column */}
      <div className="p-4 lg:p-12 lg:pr-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-rose-200 rounded-full filter blur-3xl opacity-20" />
          <div className="absolute top-40 -right-20 w-40 h-40 bg-blue-200 rounded-full filter blur-3xl opacity-20" />
          
          <h1 className="text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Your Home
            </span>
            <br />
            <span className="text-8xl relative">
              Away From Home
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-2 left-0 h-1 bg-rose-500/20"
              />
            </span>
          </h1>

          <div className="flex -space-x-4 mb-8">
            {[
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
              "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
              "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop"
            ].map((src, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, zIndex: 10 }}
                className="relative"
              >
                <img 
                  src={src}
                  alt="Student"
                  className="w-14 h-14 rounded-full border-4 border-white shadow-lg"
                />
                <div className="absolute inset-0 rounded-full ring-2 ring-black/5"></div>
              </motion.div>
            ))}
            <motion.div
              whileHover={{ scale: 1.1, zIndex: 10 }}
              className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center text-sm font-medium border-4 border-white shadow-lg"
            >
              +2.5k
            </motion.div>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-4 text-gray-900 font-light tracking-wide"
          >
            Welcome to Student Haven
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 mb-12 max-w-md text-lg leading-relaxed"
          >
            Experience luxury student living with modern amenities, dedicated study spaces, and a vibrant community. Your perfect sanctuary for academic excellence.
          </motion.p>

          <div className="flex flex-wrap gap-4 mb-16">
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: '#000000' }}
              whileTap={{ scale: 0.98 }}
              className="bg-black text-white px-8 py-4 rounded-xl flex items-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="text-lg">Explore Rooms</span>
              <ArrowUpRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: '#ffffff' }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-black px-8 py-4 rounded-xl flex items-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-black/5"
            >
              <span className="text-lg">Book a Tour</span>
              <ArrowUpRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="relative h-[90vh] w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="h-full rounded-3xl overflow-hidden shadow-2xl relative group"
        >
          {/* Decorative Elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-200 rounded-full filter blur-3xl opacity-20" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-rose-200 rounded-full filter blur-3xl opacity-20" />
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 z-10" />
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7 }}
            src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&q=80"
            alt="Student Hostel"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />

          {/* Location Badge */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="absolute top-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl z-20 border border-white/20"
          >
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-black/70" />
              <span className="font-medium">Central Campus Area</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Search Controls */}
          <div className="absolute bottom-8 left-8 right-8 z-20">
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.98)' }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openSearch('type')}
                className="bg-white/95 backdrop-blur-md px-8 py-4 rounded-xl flex items-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Home className="w-5 h-5" />
                <span className="font-medium">Room Type</span>
                <ChevronDown className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.98)' }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openSearch('location')}
                className="bg-white/95 backdrop-blur-md px-8 py-4 rounded-xl flex items-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Floor</span>
                <ChevronDown className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-black text-white px-10 py-4 rounded-xl font-medium shadow-xl hover:shadow-2xl transition-all duration-300 flex-grow text-center"
              >
                Check Availability
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection; 