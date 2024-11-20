import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Clock, X, Search, ChevronDown, Filter } from 'lucide-react';
import { hapticFeedback } from '../../utils/haptics';

interface RoomFiltersProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  selectedFilters: {
    roomTypes: string[];
    priceRanges: string[];
    amenities: string[];
  };
  handleFilterChange: (type: 'roomTypes' | 'priceRanges' | 'amenities', value: string) => void;
  applyFilters: () => void;
}

const RoomFilters: React.FC<RoomFiltersProps> = ({
  activeFilter,
  setActiveFilter,
  selectedFilters,
  handleFilterChange,
  applyFilters
}) => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="mb-8">
      {/* iOS-style Segmented Control */}
      <div className="px-4 mb-4">
        <div className="bg-white shadow-sm p-1 rounded-xl flex items-center">
          {['all', 'available', 'booked'].map((filter) => (
            <motion.button
              key={filter}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.1 }}
              onClick={() => {
                hapticFeedback.light();
                setActiveFilter(filter);
              }}
              className={`flex-1 py-2.5 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200
                ${activeFilter === filter 
                  ? 'bg-black text-white shadow-sm' 
                  : 'text-gray-600 hover:text-black'
                }`}
            >
              {filter === 'all' && <Home className="w-4 h-4" />}
              {filter === 'available' && <Clock className="w-4 h-4" />}
              {filter === 'booked' && <X className="w-4 h-4" />}
              <span className="text-sm font-medium capitalize">{filter}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* iOS-style Search and Filter */}
      <div className="px-4 flex items-center space-x-3">
        {/* Search Bar */}
        <div className="flex-grow relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text"
            placeholder="Search rooms..."
            className="w-full bg-white shadow-sm pl-10 pr-4 py-2.5 rounded-xl 
              placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black/5
              text-base transition-all duration-200"
          />
        </div>

        {/* Filter Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
          onClick={() => {
            hapticFeedback.medium();
            setShowFilters(!showFilters);
          }}
          className={`p-2.5 rounded-xl flex items-center justify-center relative shadow-sm
            ${showFilters 
              ? 'bg-black text-white' 
              : 'bg-white text-gray-700'
            } transition-all duration-200`}
        >
          <Filter className="w-5 h-5" />
          {Object.values(selectedFilters).some(arr => arr.length > 0) && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-rose-500 rounded-full" />
          )}
        </motion.button>
      </div>

      {/* Filter Sheet - Updated z-index and added safe-area padding */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-black/50 z-[100]"
            onClick={() => setShowFilters(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 400 }}
              className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 pb-8 safe-bottom"
              onClick={e => e.stopPropagation()}
            >
              {/* Drag Handle */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-gray-200 rounded-full mb-6" />

              {/* Room Type Filter */}
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Room Type</h4>
                <div className="space-y-2">
                  {['Single Room', 'Double Sharing', 'Triple Sharing', 'Four Sharing'].map((type) => (
                    <label key={type} className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded-lg cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="rounded text-black focus:ring-black"
                        checked={selectedFilters.roomTypes.includes(type)}
                        onChange={() => handleFilterChange('roomTypes', type)}
                      />
                      <span className="text-sm">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Yearly Rent Range</h4>
                <div className="space-y-2">
                  {[
                    '2000-3000',
                    '3000-4000',
                    '4000-5000',
                    '5000+'
                  ].map((range) => (
                    <label key={range} className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded-lg cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="rounded text-black focus:ring-black"
                        checked={selectedFilters.priceRanges.includes(range)}
                        onChange={() => handleFilterChange('priceRanges', range)}
                      />
                      <span className="text-sm">
                        GH₵ {range.includes('+') 
                          ? range.replace('+', '') + '+'
                          : range.replace('-', ' - GH₵ ')}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Amenities Filter */}
              <div>
                <h4 className="font-semibold mb-2">Room Features</h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'AC', 'Bath', 'Study', 'Balcony', 'WiFi', 'TV', 
                    'Kitchen', 'Storage'
                  ].map((amenity) => (
                    <label key={amenity} className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded-lg cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="rounded text-black focus:ring-black"
                        checked={selectedFilters.amenities.includes(amenity)}
                        onChange={() => handleFilterChange('amenities', amenity)}
                      />
                      <span className="text-sm">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  applyFilters();
                  setShowFilters(false);
                }}
                className="w-full mt-8 bg-black text-white rounded-lg py-3 text-sm font-medium"
              >
                Apply Filters
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RoomFilters; 