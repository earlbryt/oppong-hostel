import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, MapPin, Compass, Building } from 'lucide-react';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  searchType: string;
}

const locations = [
  "Melbourne, Australia",
  "Sydney, Australia", 
  "Vancouver, Canada",
  "London, UK",
  "Paris, France"
];

const propertyTypes = [
  "Luxury Villa",
  "Apartment",
  "Penthouse", 
  "Beach House",
  "Mountain Cabin"
];

export default function SearchOverlay({ isOpen, onClose, searchType }: SearchOverlayProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState<string[]>([]);
  const items = searchType === 'location' ? locations : propertyTypes;

  useEffect(() => {
    const filtered = items.filter(item =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [searchQuery, items]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[2.5rem] p-8 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <motion.h2 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="text-3xl font-bold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent"
              >
                Select {searchType === 'location' ? 'Location' : 'Property Type'}
              </motion.h2>
              <motion.button
                whileHover={{ rotate: 90 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="relative mb-8"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search ${searchType === 'location' ? 'destinations' : 'properties'}...`}
                className="w-full pl-14 pr-6 py-4 bg-gray-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/20 focus:bg-white transition-all duration-300 text-lg"
              />
              <Search className="w-6 h-6 text-gray-400 absolute left-5 top-1/2 -translate-y-1/2" />
            </motion.div>

            <div className="space-y-3 max-h-[60vh] overflow-y-auto custom-scrollbar">
              {filteredItems.map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02, backgroundColor: '#f8fafc' }}
                  className="w-full flex items-center space-x-4 p-5 rounded-xl transition-all duration-300 hover:shadow-md bg-white"
                >
                  {searchType === 'location' ? (
                    <Compass className="w-6 h-6 text-gray-600" />
                  ) : (
                    <Building className="w-6 h-6 text-gray-600" />
                  )}
                  <div className="flex flex-col items-start">
                    <span className="text-lg font-medium">{item}</span>
                    <span className="text-sm text-gray-500">
                      {searchType === 'location' ? 'Popular destination' : 'Available now'}
                    </span>
                  </div>
                </motion.button>
              ))}
              
              {filteredItems.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8 text-gray-500"
                >
                  No results found for "{searchQuery}"
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}