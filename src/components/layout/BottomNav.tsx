import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Bed, Coffee, User } from 'lucide-react';
import { hapticFeedback } from '../../utils/haptics';

interface BottomNavProps {
  scrollToRooms: () => void;
  scrollToAmenities: () => void;
  onLoginClick: () => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ scrollToRooms, scrollToAmenities, onLoginClick }) => {
  const [activeTab, setActiveTab] = useState('home');

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const tabs = [
    { id: 'home', icon: Home, label: 'Home', action: scrollToTop },
    { id: 'rooms', icon: Bed, label: 'Rooms', action: scrollToRooms },
    { id: 'amenities', icon: Coffee, label: 'Amenities', action: scrollToAmenities },
    { id: 'login', icon: User, label: 'Login', action: onLoginClick }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
      <div className="bg-white/80 backdrop-blur-xl border-t border-gray-100 shadow-lg">
        <div className="safe-bottom max-w-md mx-auto px-6 py-2">
          <div className="flex justify-between items-center">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileTap={{ scale: 0.9 }}
                onTapStart={() => hapticFeedback.light()}
                onClick={() => {
                  setActiveTab(tab.id);
                  hapticFeedback.medium();
                  tab.action();
                }}
                className="flex flex-col items-center relative py-2 px-3"
              >
                <motion.div
                  animate={{
                    scale: activeTab === tab.id ? 1.1 : 1,
                    color: activeTab === tab.id ? '#000' : '#666'
                  }}
                  className="relative"
                >
                  <tab.icon className="w-6 h-6" />
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="tabIndicator"
                      className="absolute -inset-1 bg-black/5 rounded-full -z-10"
                    />
                  )}
                </motion.div>
                <span className={`mt-1 text-xs font-medium transition-colors ${
                  activeTab === tab.id ? 'text-black' : 'text-gray-600'
                }`}>
                  {tab.label}
                </span>

                {/* iOS-style Active Indicator */}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-2 w-1 h-1 bg-black rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav; 