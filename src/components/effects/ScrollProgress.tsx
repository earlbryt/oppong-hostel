import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-black origin-left z-50"
        style={{ scaleX }}
      />
      <motion.div
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full border-2 border-black z-50 flex items-center justify-center font-medium"
        style={{ 
          rotate: useTransform(scrollYProgress, [0, 1], [0, 360]),
        }}
      >
        <motion.span
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
          }}
        >
          {Math.round(useTransform(scrollYProgress, [0, 1], [0, 100]).get())}%
        </motion.span>
      </motion.div>
    </>
  );
};

export default ScrollProgress; 