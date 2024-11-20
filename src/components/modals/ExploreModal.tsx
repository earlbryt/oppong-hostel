import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Building, Users, Sparkles, Coffee, BookOpen, Wifi, MapPin, Shield, Star } from 'lucide-react';

interface ExploreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExploreModal: React.FC<ExploreModalProps> = ({ isOpen, onClose }) => {
  const highlights = [
    {
      icon: <Building className="w-6 h-6" />,
      title: "Prime Location",
      description: "2 minutes walk from KNUST main gate",
      color: "bg-blue-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "24/7 Security",
      description: "Round-the-clock security personnel and CCTV",
      color: "bg-purple-500"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Premium Living",
      description: "Newly built spaces with modern finishes",
      color: "bg-pink-500"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Common Areas",
      description: "Spacious lounges and outdoor seating",
      color: "bg-amber-500"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Study Focus",
      description: "Dedicated study rooms with 24/7 access",
      color: "bg-emerald-500"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Fast Internet",
      description: "High-speed fiber optic WiFi coverage",
      color: "bg-indigo-500"
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 pb-24 md:pb-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl relative md:overflow-visible overflow-y-auto max-h-[85vh] md:max-h-none scrollbar-hide"
          >
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
            
            {/* Content */}
            <div className="relative">
              {/* Header */}
              <div className="p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-100/20 to-teal-100/20" />
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  className="relative"
                >
                  <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Welcome to Opong Hostel
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    KNUST's premier student accommodation, where comfort meets academic excellence
                  </p>
                </motion.div>
              </div>

              {/* Highlights Grid */}
              <div className="px-8 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={highlight.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative">
                        <div className={`${highlight.color} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          {highlight.icon}
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                        <p className="text-gray-600 text-sm">{highlight.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Virtual Tour Button */}
              <div className="p-8 bg-gray-50 flex justify-between items-center">
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span>Adjacent to KNUST Main Gate, Kumasi</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-900 transition-colors"
                >
                  Take Virtual Tour
                </motion.button>
              </div>

              {/* Close Button */}
              <motion.button
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExploreModal; 