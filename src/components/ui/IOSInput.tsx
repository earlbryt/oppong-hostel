import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface IOSInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: LucideIcon;
  error?: string;
}

const IOSInput: React.FC<IOSInputProps> = ({ label, icon: Icon, error, ...props }) => {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        )}
        <input
          className={`w-full ${Icon ? 'pl-10' : 'pl-4'} pr-4 py-2.5 rounded-xl border 
            bg-white/80 backdrop-blur-sm transition-all duration-200
            focus:ring-2 focus:ring-black/5 focus:border-transparent
            ${error ? 'border-rose-500 focus:ring-rose-200' : 'border-gray-200'}
          `}
          {...props}
        />
      </div>
      {error && (
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-rose-500"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default IOSInput; 