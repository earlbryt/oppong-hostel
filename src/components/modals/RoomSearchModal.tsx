import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Building, Check } from 'lucide-react';
import { modalTransition } from '../../utils/animations';

interface RoomSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'type' | 'floor';
}

const RoomSearchModal: React.FC<RoomSearchModalProps> = ({ isOpen, onClose, type }) => {
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedFloor, setSelectedFloor] = useState<string>('');

  const roomTypes = [
    { id: 'single', name: 'Single Room', description: 'Perfect for focused individual study' },
    { id: 'double', name: 'Double Sharing', description: 'Ideal for collaborative living' },
    { id: 'triple', name: 'Triple Sharing', description: 'Community-focused accommodation' },
    { id: 'studio', name: 'Studio Apartment', description: 'Self-contained luxury living' },
  ];

  const floors = [
    { id: '1', name: '1st Floor', description: 'Easy access, garden view' },
    { id: '2', name: '2nd Floor', description: 'Quiet environment' },
    { id: '3', name: '3rd Floor', description: 'Premium city view' },
    { id: '4', name: '4th Floor', description: 'Panoramic view' },
    { id: '5', name: '5th Floor', description: 'Executive level' },
    { id: '6', name: '6th Floor', description: 'Penthouse level' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl relative max-h-[90vh] overflow-y-auto scrollbar-hide"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Content */}
            <div className="p-8 pb-12 md:pb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                  {type === 'type' ? 'Select Room Type' : 'Choose Floor'}
                </h2>
                <motion.button
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(type === 'type' ? roomTypes : floors).map((option) => (
                  <motion.div
                    key={option.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => type === 'type' 
                      ? setSelectedType(option.id)
                      : setSelectedFloor(option.id)
                    }
                    className={`p-6 rounded-2xl border-2 cursor-pointer relative overflow-hidden group
                      ${(type === 'type' ? selectedType : selectedFloor) === option.id
                        ? 'border-black'
                        : 'border-gray-100 hover:border-gray-200'
                      }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{option.name}</h3>
                        <p className="text-gray-500 text-sm">{option.description}</p>
                      </div>
                      {(type === 'type' ? selectedType : selectedFloor) === option.id && (
                        <span className="bg-black text-white p-2 rounded-full">
                          <Check className="w-4 h-4" />
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex justify-end space-x-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  className="px-6 py-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  className="px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-900 transition-colors"
                >
                  Confirm
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RoomSearchModal; 