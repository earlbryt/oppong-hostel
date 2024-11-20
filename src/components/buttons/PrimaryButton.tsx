import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onClick, icon, className = '' }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`bg-black text-white px-8 py-4 rounded-xl flex items-center space-x-3 
        shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden
        ${className}`}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="relative text-lg font-medium">{children}</span>
      {icon || <ArrowUpRight className="w-5 h-5 relative transition-transform group-hover:translate-x-1" />}
    </motion.button>
  );
};

export default PrimaryButton; 