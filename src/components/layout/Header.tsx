import React from 'react';
import { User } from 'lucide-react';
import { motion } from 'framer-motion';
import { hapticFeedback } from '../../utils/haptics';

interface HeaderProps {
  scrollToRooms: () => void;
  scrollToAmenities: () => void;
  onLoginClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToRooms, scrollToAmenities, onLoginClick }) => {
  return (
    <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center justify-between mb-20">
        <div className="flex items-center space-x-8">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onTapStart={() => hapticFeedback.light()}
            className="w-12 h-12"
          >
            <img 
              src="/images/auth/logo.svg" 
              alt="Opong Hostel"
              className="w-full h-full object-contain"
            />
          </motion.div>
          <div className="space-x-8 text-gray-600">
            <a href="#" className="hover:text-black transition-colors">Home</a>
            <a href="#" 
              onClick={(e) => {
                e.preventDefault();
                hapticFeedback.medium();
                scrollToRooms();
              }} 
              className="hover:text-black transition-colors"
            >
              Rooms
            </a>
            <a href="#" 
              onClick={(e) => {
                e.preventDefault();
                hapticFeedback.medium();
                scrollToAmenities();
              }} 
              className="hover:text-black transition-colors"
            >
              Amenities
            </a>
          </div>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            hapticFeedback.medium();
            onLoginClick();
          }}
          className="flex items-center space-x-2 bg-gray-100 px-5 py-2.5 rounded-full hover:bg-gray-200 transition-colors"
        >
          <span>Student Login</span>
          <User className="w-4 h-4" />
        </motion.button>
      </nav>

      {/* Mobile Header */}
      <div className="lg:hidden flex flex-col mb-8">
        {/* Logo and Login */}
        <div className="flex items-center justify-between mb-6">
          <motion.div 
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            {/* Subtle Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-rose-100/20 via-black/5 to-orange-100/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            
            {/* Logo Container */}
            <div className="relative w-12 h-12 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-2 border border-black/5">
              <img 
                src="/images/auth/logo.svg" 
                alt="Opong Hostel"
                className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Subtle Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          <motion.button 
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              hapticFeedback.medium();
              onLoginClick();
            }}
            className="flex items-center space-x-2 bg-black/5 backdrop-blur-sm px-4 py-2 rounded-xl 
              active:bg-black/10 transition-all duration-300"
          >
            <User className="w-5 h-5" />
            <span className="text-sm font-medium">Login</span>
          </motion.button>
        </div>

        {/* Quick Navigation Pills - Updated container */}
        <div className="relative w-full">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide py-2 px-0.5 no-scrollbar">
            {[
              { label: 'Rooms', action: scrollToRooms },
              { label: 'Amenities', action: scrollToAmenities },
              { label: 'Gallery', action: () => {} },
              { label: 'Contact', action: () => {} }
            ].map((item) => (
              <motion.button
                key={item.label}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  hapticFeedback.light();
                  item.action();
                }}
                className="flex-none px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm 
                  border border-black/5 active:bg-white transition-all duration-300"
              >
                <span className="text-sm font-medium bg-gradient-to-r from-gray-900 to-gray-700 
                  bg-clip-text text-transparent whitespace-nowrap"
                >
                  {item.label}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header; 