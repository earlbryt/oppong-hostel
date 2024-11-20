import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Map, X, MapPin } from 'lucide-react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/hero/HeroSection';
import RoomCard from './components/rooms/RoomCard';
import RoomFilters from './components/rooms/RoomFilters';
import AmenitiesSection from './components/amenities/AmenitiesSection';
import AuthModal from './components/auth/AuthModal';
import ScrollToTop from './components/layout/ScrollToTop';
import ScrollProgress from './components/layout/ScrollProgress';
import ExploreModal from './components/modals/ExploreModal';
import RoomSearchModal from './components/modals/RoomSearchModal';
import BottomNav from './components/layout/BottomNav';
import { rooms } from './data/rooms';
import StatsSection from './components/stats/StatsSection';

function App() {
  // Refs for scrolling
  const roomsRef = useRef<HTMLDivElement>(null);
  const amenitiesRef = useRef<HTMLDivElement>(null);

  // State management
  const [showAuth, setShowAuth] = useState(false);
  const [authType, setAuthType] = useState<'login' | 'signup'>('login');
  const [showMap, setShowMap] = useState(false);
  const [showExplore, setShowExplore] = useState(false);
  const [searchModal, setSearchModal] = useState<{ isOpen: boolean; type: 'type' | 'floor' }>({
    isOpen: false,
    type: 'type'
  });

  // Filter states
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedFilters, setSelectedFilters] = useState<{
    roomTypes: string[];
    priceRanges: string[];
    amenities: string[];
  }>({
    roomTypes: [],
    priceRanges: [],
    amenities: []
  });

  // Scroll functions
  const scrollToRooms = () => {
    if (roomsRef.current) {
      const yOffset = -100; // Offset to account for spacing
      const element = roomsRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToAmenities = () => {
    amenitiesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Filter functions
  const handleFilterChange = (type: 'roomTypes' | 'priceRanges' | 'amenities', value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(item => item !== value)
        : [...prev[type], value]
    }));
  };

  const applyFilters = () => {
    // Apply filters logic here
  };

  // Filter rooms based on active filter
  const filteredRooms = rooms.filter(room => {
    if (activeFilter === 'all') return true;
    return room.status === activeFilter;
  });

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <ScrollProgress />
      
      <main className="flex-grow relative w-full">
        {/* Hero Section */}
        <section className="min-h-screen py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[2000px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
              {/* Left Column */}
              <div className="p-2 sm:p-4 lg:p-8">
                <Header 
                  scrollToRooms={scrollToRooms}
                  scrollToAmenities={scrollToAmenities}
                  onLoginClick={() => {
                    setAuthType('login');
                    setShowAuth(true);
                  }}
                />
                <HeroSection 
                  openSearch={(type) => setSearchModal({ isOpen: true, type: type as 'type' | 'floor' })}
                />
              </div>

              {/* Right Column */}
              <div className="hidden lg:block relative h-[90vh]">
                {/* ... right column content ... */}
              </div>
            </div>
          </div>
        </section>

        {/* Container for other sections */}
        <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Stats Section */}
          <div className="mb-8">
            <StatsSection />
          </div>

          {/* Rooms Section */}
          <div ref={roomsRef} className="flex-grow scroll-mt-12">
            {/* Reduced top padding */}
            <div className="text-center max-w-3xl mx-auto mb-6 pt-2">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl font-bold mb-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
              >
                Available Rooms
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 text-lg leading-relaxed"
              >
                Find your perfect space with our range of premium accommodation options
              </motion.p>
            </div>

            <RoomFilters 
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              selectedFilters={selectedFilters}
              handleFilterChange={handleFilterChange}
              applyFilters={applyFilters}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 px-2 sm:px-0">
              {filteredRooms.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          </div>

          {/* Amenities Section */}
          <AmenitiesSection ref={amenitiesRef} />
        </div>
      </main>

      <Footer />

      {/* Bottom Navigation for Mobile */}
      <BottomNav 
        scrollToRooms={scrollToRooms}
        scrollToAmenities={scrollToAmenities}
        onLoginClick={() => {
          setAuthType('login');
          setShowAuth(true);
        }}
      />

      {/* Floating Action Buttons */}
      <ScrollToTop />
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowMap(true)}
        className="fixed md:bottom-8 bottom-24 right-4 md:right-8 bg-black text-white p-3 md:p-4 rounded-full shadow-lg z-40 flex items-center space-x-2"
      >
        <Map className="w-5 h-5 md:w-6 md:h-6" />
        <span className="hidden md:inline">Show Map</span>
      </motion.button>

      {/* Modals */}
      <AuthModal 
        isOpen={showAuth}
        onClose={() => setShowAuth(false)}
        type={authType}
        switchType={() => setAuthType(type => type === 'login' ? 'signup' : 'login')}
      />

      <ExploreModal 
        isOpen={showExplore}
        onClose={() => setShowExplore(false)}
      />

      <RoomSearchModal 
        isOpen={searchModal.isOpen}
        onClose={() => setSearchModal({ isOpen: false, type: 'type' })}
        type={searchModal.type}
      />

      {/* Map Modal */}
      <AnimatePresence>
        {showMap && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setShowMap(false)}
          >
            {/* Mobile Version */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="md:hidden fixed inset-0 bg-white"
              onClick={e => e.stopPropagation()}
            >
              <div className="h-full w-full relative">
                {/* Close Button - Floating */}
                <motion.button 
                  onClick={() => setShowMap(false)}
                  className="absolute top-4 left-4 z-10 bg-white rounded-full p-3 shadow-lg flex items-center space-x-2"
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="w-6 h-6" />
                  <span className="font-medium">Close Map</span>
                </motion.button>

                {/* Map Container */}
                <div className="absolute inset-0 z-0 pointer-events-auto">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.4751851886823!2d-1.5641657!3d6.6741223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb96f0f96d7d49%3A0x8ea0cc98397cabd4!2sUnity%20Hall%2C%20KNUST!5e0!3m2!1sen!2sgh!4v1635789876543!5m2!1sen!2sgh"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
