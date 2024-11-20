import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

interface PullToRefreshProps {
  onRefresh: () => Promise<void>;
  children: React.ReactNode;
}

const PullToRefresh: React.FC<PullToRefreshProps> = ({ onRefresh, children }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const y = useMotionValue(0);
  const pullProgress = useTransform(y, [0, 80], [0, 1]);
  const controls = useAnimation();

  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      if (window.scrollY === 0 && !isRefreshing) {
        const touch = e.touches[0];
        const deltaY = touch.clientY - (touch.target as any).getBoundingClientRect().top;
        y.set(Math.max(0, deltaY));
      }
    };

    const handleTouchEnd = async () => {
      if (y.get() > 80 && !isRefreshing) {
        setIsRefreshing(true);
        await onRefresh();
        setIsRefreshing(false);
      }
      controls.start({ y: 0 });
      y.set(0);
    };

    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [y, controls, onRefresh, isRefreshing]);

  return (
    <div className="relative">
      <motion.div
        style={{ y }}
        animate={controls}
        className="w-full"
      >
        <motion.div 
          style={{ 
            opacity: pullProgress,
            rotateX: useTransform(pullProgress, [0, 1], [90, 0])
          }}
          className="absolute top-0 left-0 right-0 flex justify-center py-4 pointer-events-none"
        >
          <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center space-x-2">
            <ArrowDown className="w-4 h-4" />
            <span className="text-sm font-medium">
              {isRefreshing ? 'Refreshing...' : 'Pull to refresh'}
            </span>
          </div>
        </motion.div>
        {children}
      </motion.div>
    </div>
  );
};

export default PullToRefresh; 