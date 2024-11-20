import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Room } from '../../types/room';
import { X, Users, ArrowRight, Star, MapPin, Wifi, Wind, Bath, Tv, BookOpen, Clock } from 'lucide-react';
import BookingModal from '../booking/BookingModal';
import { dragConstraints, handleDragEnd } from '../../utils/gestures';
import { hapticFeedback } from '../../utils/haptics';

interface RoomPreviewProps {
  room: Room;
  isOpen: boolean;
  onClose: () => void;
}

const RoomPreview: React.FC<RoomPreviewProps> = ({ room, isOpen, onClose }) => {
  const [showBooking, setShowBooking] = useState(false);

  // Calculate occupancy based on room type
  const getOccupancyInfo = () => {
    const type = room.name.toLowerCase();
    let total = 1;
    if (type.includes('double') || type.includes('twin')) total = 2;
    if (type.includes('triple')) total = 3;
    if (type.includes('four') || type.includes('quad')) total = 4;
    
    // Simulate random occupancy for demo
    const occupied = room.status === 'booked' ? total : Math.floor(Math.random() * total);
    return { total, occupied, remaining: total - occupied };
  };

  const occupancyInfo = getOccupancyInfo();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            transition={{ 
              type: "spring",
              stiffness: 400,
              damping: 25
            }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl overflow-hidden w-full max-w-4xl shadow-2xl relative md:overflow-visible overflow-y-auto max-h-[85vh] md:max-h-none scrollbar-hide"
          >
            {/* Add drag indicator */}
            <div className="flex justify-center pt-3 pb-1">
              <div className="w-12 h-1 bg-gray-300 rounded-full" />
            </div>
            {/* Image Section with Gradient Overlay */}
            <div className="sticky top-0 z-20 h-80 bg-black">
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
              <img 
                src={room.image} 
                alt={room.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Room Status Badge */}
              <div className="absolute top-4 left-4">
                <div className={`px-4 py-2 rounded-full ${
                  room.status === 'available' 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-rose-500 text-white'
                } flex items-center space-x-2`}>
                  <Clock className="w-4 h-4" />
                  <span className="font-medium capitalize">{room.status}</span>
                </div>
              </div>

              {/* Room Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h2 className="text-3xl font-bold mb-2">{room.name}</h2>
                <div className="flex items-center space-x-4 text-white/90">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{room.floor}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(room.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Room Details</h3>
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">{room.description}</p>
                    
                    {/* Occupancy Status */}
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Occupancy Status</span>
                        <Users className="w-5 h-5 text-gray-400" />
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="text-gray-500">Total Beds</div>
                          <div className="font-semibold">{occupancyInfo.total}</div>
                        </div>
                        <div>
                          <div className="text-gray-500">Occupied</div>
                          <div className="font-semibold">{occupancyInfo.occupied}</div>
                        </div>
                        <div>
                          <div className="text-gray-500">Available</div>
                          <div className={`font-semibold ${
                            occupancyInfo.remaining > 0 ? 'text-emerald-600' : 'text-rose-600'
                          }`}>
                            {occupancyInfo.remaining}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="bg-black text-white rounded-xl p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-sm text-white/80">Price per Year</div>
                          <div className="text-2xl font-bold">GH₵ {room.price.toLocaleString()}</div>
                        </div>
                        {room.popular && (
                          <div className="bg-white/20 px-3 py-1 rounded-full text-sm">
                            Popular Choice
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Amenities</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {room.amenities.map((amenity, index) => (
                      <div 
                        key={index}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 border border-gray-100"
                      >
                        <div className="p-2 rounded-lg bg-white">
                          {amenity === 'WiFi' && <Wifi className="w-4 h-4" />}
                          {amenity === 'AC' && <Wind className="w-4 h-4" />}
                          {(amenity.includes('Bath')) && <Bath className="w-4 h-4" />}
                          {amenity === 'TV' && <Tv className="w-4 h-4" />}
                          {(amenity.includes('Study')) && <BookOpen className="w-4 h-4" />}
                        </div>
                        <span className="text-gray-600">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex justify-end space-x-4 pb-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
                  onClick={onClose}
                >
                  Close
                </motion.button>
                {room.status === 'available' && occupancyInfo.remaining > 0 && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowBooking(true)}
                    className="px-6 py-3 rounded-xl bg-black text-white font-medium hover:bg-gray-900 transition-colors"
                  >
                    Book Now
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      <BookingModal 
        room={room}
        isOpen={showBooking}
        onClose={() => setShowBooking(false)}
      />
    </AnimatePresence>
  );
};

export default RoomPreview; 