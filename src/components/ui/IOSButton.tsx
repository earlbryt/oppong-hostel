import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { hapticFeedback } from '../../utils/haptics';

interface IOSButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: LucideIcon;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}

const IOSButton: React.FC<IOSButtonProps> = ({
  children,
  variant = 'primary',
  icon: Icon,
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  fullWidth = false,
}) => {
  const baseStyles = "flex items-center justify-center space-x-2 font-medium transition-all duration-200";
  const variantStyles = {
    primary: "bg-black text-white hover:bg-gray-900 active:bg-gray-800",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300",
    outline: "border border-gray-200 hover:bg-gray-50 active:bg-gray-100"
  };

  return (
    <motion.button
      type={type}
      onClick={() => {
        hapticFeedback.medium();
        onClick?.();
      }}
      disabled={disabled || loading}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.1 }}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${fullWidth ? 'w-full' : ''}
        px-6 py-2.5 rounded-xl
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
    >
      {loading ? (
        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          {Icon && <Icon className="w-5 h-5" />}
          <span>{children}</span>
        </>
      )}
    </motion.button>
  );
};

export default IOSButton; 