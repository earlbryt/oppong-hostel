import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { hapticFeedback } from '../../utils/haptics';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    hapticFeedback.medium();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20
            }
          }}
          exit={{ 
            opacity: 0, 
            scale: 0.5, 
            y: 50,
            transition: {
              duration: 0.2
            }
          }}
          className="fixed md:bottom-8 bottom-24 left-4 md:left-8 z-50"
        >
          <motion.button
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="bg-black text-white p-3 md:p-4 rounded-full shadow-lg 
              flex items-center justify-center hover:bg-gray-900 transition-colors relative
              overflow-hidden group min-w-[44px] min-h-[44px]"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-black opacity-0 
              group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Pulse Effect */}
            <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20" />
            
            {/* Icon and Text Container */}
            <div className="relative flex items-center space-x-2">
              <motion.div
                animate={{ 
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="flex items-center justify-center"
              >
                <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
              </motion.div>
              <span className="hidden md:inline text-sm md:text-base font-medium">Back to Top</span>
            </div>

            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 
                group-hover:opacity-20 -skew-x-45"
              animate={{
                x: [-200, 200],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop; 