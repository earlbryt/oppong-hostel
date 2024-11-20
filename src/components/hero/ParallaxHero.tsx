import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxHeroProps {
  children: React.ReactNode;
}

const ParallaxHero: React.FC<ParallaxHeroProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) return <>{children}</>;

  return (
    <motion.div
      style={{ y, opacity }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
};

export default ParallaxHero; 