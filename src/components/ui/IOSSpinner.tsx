import React from 'react';
import { motion } from 'framer-motion';

interface IOSSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

const IOSSpinner: React.FC<IOSSpinnerProps> = ({ 
  size = 'md',
  color = 'currentColor' 
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={`${sizes[size]} rounded-full border-2 border-t-transparent`}
        style={{ 
          borderColor: `${color}33`,
          borderTopColor: color
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default IOSSpinner; 