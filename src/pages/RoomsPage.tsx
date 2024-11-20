import React from 'react';
import RoomFilters from '../components/rooms/RoomFilters';
import RoomCard from '../components/rooms/RoomCard';
import { rooms } from '../data/rooms';

const RoomsPage: React.FC = () => {
  // Add your filter state and handlers here
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Our Rooms</h1>
      <RoomFilters 
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        selectedFilters={selectedFilters}
        handleFilterChange={handleFilterChange}
        applyFilters={applyFilters}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default RoomsPage; 