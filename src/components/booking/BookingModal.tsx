import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, CreditCard, User, Phone, Mail, Check, Info } from 'lucide-react';
import { Room } from '../../types/room';

interface BookingModalProps {
  room: Room;
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ room, isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    studentId: '',
    startDate: '',
    duration: '1',
    paymentMethod: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    console.log('Booking submitted:', formData);
    onClose();
  };

  const calculateTotal = () => {
    const monthlyPrice = room.price / 12;
    const duration = parseInt(formData.duration);
    return (monthlyPrice * duration).toLocaleString();
  };

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
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden relative"
          >
            {/* Header */}
            <div className="relative h-48">
              <div className="absolute inset-0">
                <img 
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
              </div>
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{room.name}</h2>
                    <p className="text-white/80">{room.floor}</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>
                <div className="flex justify-between items-end">
                  <div className="text-white">
                    <div className="text-sm text-white/80">Price per month</div>
                    <div className="text-2xl font-bold">GH₵ {(room.price / 12).toLocaleString()}</div>
                  </div>
                  <div className="flex space-x-2">
                    {[1, 2, 3].map(i => (
                      <motion.button
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setStep(i)}
                        className={`px-4 py-2 rounded-lg ${
                          step === i 
                            ? 'bg-white text-black' 
                            : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                      >
                        Step {i}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                            placeholder="John Doe"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Student ID</label>
                        <div className="relative">
                          <Info className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="studentId"
                            value={formData.studentId}
                            onChange={handleInputChange}
                            className="pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                            placeholder="12345678"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                            placeholder="+233 XX XXX XXXX"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">Booking Details</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="date"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleInputChange}
                            className="pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Duration (months)</label>
                        <select
                          name="duration"
                          value={formData.duration}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                          required
                        >
                          <option value="1">1 Month</option>
                          <option value="3">3 Months</option>
                          <option value="6">6 Months</option>
                          <option value="12">12 Months</option>
                        </select>
                      </div>
                    </div>

                    {/* Booking Summary */}
                    <div className="mt-6 bg-gray-50 p-4 rounded-xl">
                      <h4 className="font-semibold mb-3">Booking Summary</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Monthly Rate</span>
                          <span>GH₵ {(room.price / 12).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Duration</span>
                          <span>{formData.duration} month(s)</span>
                        </div>
                        <div className="flex justify-between font-semibold pt-2 border-t">
                          <span>Total Amount</span>
                          <span>GH₵ {calculateTotal()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">Payment Method</h3>
                    <div className="space-y-3">
                      {['Mobile Money', 'Bank Transfer', 'Card Payment'].map((method) => (
                        <label key={method} className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-gray-50">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value={method}
                            checked={formData.paymentMethod === method}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-black"
                          />
                          <span className="ml-3">{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  {step > 1 && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="px-6 py-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
                    >
                      Previous
                    </motion.button>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type={step === 3 ? 'submit' : 'button'}
                    onClick={() => step < 3 && setStep(step + 1)}
                    className="px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-900 transition-colors ml-auto"
                  >
                    {step === 3 ? (
                      <span className="flex items-center space-x-2">
                        <span>Complete Booking</span>
                        <Check className="w-4 h-4" />
                      </span>
                    ) : (
                      'Next'
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal; 