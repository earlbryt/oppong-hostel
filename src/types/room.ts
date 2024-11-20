export interface Room {
  id: number;
  name: string;
  floor: string;
  description: string;
  image: string;
  status: 'available' | 'booked';
  rating: number;
  popular: boolean;
  price: number;
  amenities: string[];
} 