import React from 'react';
import { motion } from 'framer-motion';
import StatsSection from '../components/stats/StatsSection';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 p-4">
        {/* Hero Section */}
        <div className="p-2 sm:p-4 lg:p-12">
          <div className="mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl font-bold mb-6 leading-tight"
            >
              Your Home
              <br />
              Away From Home
            </motion.h1>
            {/* ... rest of hero content ... */}
          </div>
        </div>

        {/* Right Column with Image */}
        <div className="relative h-[700px] mt-8 lg:mt-0">
          {/* ... image content ... */}
        </div>
      </div>

      <StatsSection />
    </div>
  );
};

export default HomePage; 