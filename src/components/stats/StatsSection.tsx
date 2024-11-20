import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, useScroll, useTransform } from 'framer-motion';
import { Crown, Users, Star } from 'lucide-react';

const StatsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  const controls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const stats = [
    {
      icon: <Crown className="w-8 h-8" />,
      number: "2.5K+",
      label: "Happy Students",
      description: "Creating a vibrant community since 2020",
      color: "from-orange-500 to-rose-500",
      shadowColor: "shadow-orange-200/50"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "500+",
      label: "Premium Rooms",
      description: "Luxury accommodations designed for academic excellence",
      color: "from-blue-500 to-indigo-500",
      shadowColor: "shadow-blue-200/50"
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: "25+",
      label: "Premium Amenities",
      description: "World-class facilities for an enhanced living experience",
      color: "from-rose-500 to-pink-500",
      shadowColor: "shadow-rose-200/50"
    }
  ];

  // Auto-scroll animation
  useEffect(() => {
    if (isInView) {
      const autoScroll = async () => {
        await controls.start({
          x: [0, -320 * (stats.length - 1), 0],
          transition: {
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }
        });
      };
      autoScroll();
    }
  }, [isInView, controls, stats.length]);

  // Pause animation on user interaction
  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    if (isInView) {
      controls.start({
        x: [parseInt(getComputedStyle(carouselRef.current!).transform.split(',')[4] || '0'), -320 * (stats.length - 1), 0],
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    }
  };

  // Parallax and opacity effects
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <section 
      ref={containerRef} 
      className="py-12 md:py-20 overflow-hidden relative"
    >
      <motion.div 
        style={{ opacity, scale }}
        className="max-w-7xl mx-auto"
      >
        {/* Horizontal Container - Removed overflow-x-auto */}
        <div 
          className="scrollbar-hide" // Removed overflow-x-auto and other scroll-related classes
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleMouseEnter}
          onTouchEnd={handleMouseLeave}
        >
          <motion.div 
            ref={carouselRef}
            animate={controls}
            className="flex space-x-6 md:space-x-12" // Removed cursor classes
            drag="x"
            dragConstraints={{
              left: -320 * (stats.length - 1),
              right: 0
            }}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          >
            {[...stats, ...stats].map((stat, index) => (
              <motion.div
                key={index}
                className="relative group w-80 flex-shrink-0"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* Card Container */}
                <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500">
                  {/* Icon Container */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-transform duration-500 ${stat.shadowColor}`}>
                    {stat.icon}
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <motion.h3 
                      className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
                    >
                      {stat.number}
                    </motion.h3>
                    
                    <div className="space-y-2">
                      <h4 className="text-xl font-semibold text-gray-900">
                        {stat.label}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {stat.description}
                      </p>
                    </div>

                    {/* Decorative Elements */}
                    <div className={`absolute top-4 right-4 w-24 h-24 bg-gradient-to-br ${stat.color} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default StatsSection; 