import React from 'react';
import { motion } from 'framer-motion';

interface SheetTransitionProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const SheetTransition: React.FC<SheetTransitionProps> = ({ children, isOpen, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: isOpen ? 0 : '100%' }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[32px] overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Drag Handle */}
        <div className="flex justify-center p-2">
          <div className="w-10 h-1 bg-gray-300 rounded-full" />
        </div>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default SheetTransition; 