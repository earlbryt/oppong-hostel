import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'login' | 'signup';
  switchType: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, type, switchType }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white shadow-2xl w-full max-w-md relative overflow-hidden"
          >
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
            
            {/* Content */}
            <div className="relative">
              {/* Header */}
              <div className="p-6 sm:p-8 text-center relative overflow-hidden border-b border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-100/20 to-teal-100/20" />
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  className="relative"
                >
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {type === 'login' ? 'Welcome Back!' : 'Create Account'}
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {type === 'login' 
                      ? 'Sign in to access your account' 
                      : 'Join Opong Hostel community today'}
                  </p>
                </motion.div>
              </div>

              {/* Form */}
              <div className="p-6 sm:p-8">
                <form className="space-y-4">
                  {type === 'signup' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type={showPassword ? "text" : "password"}
                        className="w-full pl-10 pr-12 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {type === 'signup' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          className="w-full pl-10 pr-12 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                  )}

                  {type === 'login' && (
                    <div className="flex justify-end">
                      <button type="button" className="text-sm text-gray-600 hover:text-black">
                        Forgot password?
                      </button>
                    </div>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-900 transition-colors mt-6"
                  >
                    {type === 'login' ? 'Sign In' : 'Create Account'}
                  </motion.button>
                </form>

                <div className="relative my-6 sm:my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

                {/* Social Login Buttons */}
                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  {['google', 'facebook', 'twitter', 'linkedin'].map((provider) => (
                    <motion.button
                      key={provider}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 sm:p-3 border border-gray-200 hover:bg-gray-50 transition-colors group"
                    >
                      <img 
                        src={`/images/auth/${provider}.svg`} 
                        alt={provider} 
                        className="w-5 h-5 sm:w-6 sm:h-6 mx-auto group-hover:scale-110 transition-transform" 
                      />
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 sm:p-8 bg-gray-50 text-center">
                <p className="text-gray-600 text-sm sm:text-base">
                  {type === 'login' ? "Don't have an account? " : "Already have an account? "}
                  <button
                    onClick={switchType}
                    className="text-black font-medium hover:underline"
                  >
                    {type === 'login' ? 'Sign up' : 'Sign in'}
                  </button>
                </p>
              </div>

              {/* Close Button */}
              <motion.button
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal; 