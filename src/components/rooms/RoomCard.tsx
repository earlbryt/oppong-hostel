import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Wifi, Wind, Bath, Tv, BookOpen, Check, Eye } from 'lucide-react';
import { Room } from '../../types/room';
import RoomPreview from './RoomPreview';
import { useState } from 'react';
import { scaleUp, springTransition } from '../../utils/animations';
import { hapticFeedback } from '../../utils/haptics';

interface RoomCardProps {
  room: Room;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div 
        variants={scaleUp}
        initial="hidden"
        animate="visible"
        whileHover={{ 
          y: -8,
          transition: springTransition
        }}
        whileTap={{ scale: 0.98 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onTapStart={() => hapticFeedback.light()}
        className={`bg-white rounded-xl shadow-lg overflow-hidden relative cursor-pointer
          ${room.popular ? 'ring-1 ring-rose-500/10' : ''}
          ${room.status === 'available' ? 'hover:shadow-xl hover:shadow-emerald-500/10' : 'hover:shadow-xl'}
        `}
        layoutId={`room-${room.id}`}
        onClick={() => {
          hapticFeedback.medium();
          setShowPreview(true);
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/40 z-30 flex items-center justify-center backdrop-blur-sm"
        >
          <div className="bg-white/90 px-4 py-2 rounded-full flex items-center space-x-2">
            <Eye className="w-4 h-4" />
            <span className="text-sm font-medium">Preview Room</span>
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2 z-10">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">{room.floor}</span>
          </div>
          {room.popular && (
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-rose-500 text-sm px-3 py-1 rounded-full z-10 flex items-center space-x-1 shadow-sm">
              <Star className="w-3 h-3" />
              <span>Popular</span>
            </div>
          )}
          {room.status === 'booked' ? (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-20">
              <span className="text-white font-semibold text-lg">Fully Booked</span>
            </div>
          ) : (
            <div className="absolute top-4 right-4 z-10">
              {!room.popular && (
                <div className="bg-emerald-500 text-white text-sm px-3 py-1 rounded-full flex items-center space-x-1 shadow-lg">
                  <Check className="w-3 h-3" />
                  <span>Available</span>
                </div>
              )}
            </div>
          )}
          <img 
            src={room.image}
            alt={room.name}
            className={`w-full h-48 object-cover transition-transform duration-700
              ${room.status === 'available' ? 'group-hover:scale-105' : ''}
            `}
          />
        </div>
        <div className="p-4 sm:p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold">{room.name}</h3>
            <div className={`px-4 py-1.5 rounded-full
              ${room.popular ? 'bg-rose-50/50' : 'bg-black/5'}`}
            >
              <span className={`text-lg font-semibold 
                ${room.popular 
                  ? 'text-rose-600'
                  : 'bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent'
                }`}
              >
                GH₵ {room.price.toLocaleString()}
              </span>
            </div>
          </div>
          <p className="text-gray-600 mb-4 line-clamp-2">
            {room.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {room.amenities.map((amenity, index) => (
              <span key={index} className={`text-sm px-3 py-1 rounded-full flex items-center space-x-1
                ${room.popular ? 'bg-rose-50/30 text-gray-700' : 'bg-gray-100'}
              `}>
                {amenity === 'WiFi' && <Wifi className="w-3 h-3" />}
                {amenity === 'AC' && <Wind className="w-3 h-3" />}
                {(amenity.includes('Bath')) && <Bath className="w-3 h-3" />}
                {amenity === 'TV' && <Tv className="w-3 h-3" />}
                {(amenity.includes('Study')) && <BookOpen className="w-3 h-3" />}
                <span>{amenity}</span>
              </span>
            ))}
          </div>
          <div className="flex space-x-1">
            {[...Array(room.rating)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 
                ${room.popular 
                  ? 'fill-rose-300 text-rose-300'
                  : 'fill-yellow-400 text-yellow-400'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <RoomPreview 
        room={room}
        isOpen={showPreview}
        onClose={() => setShowPreview(false)}
      />
    </>
  );
};

export default RoomCard; 