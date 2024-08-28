import { useState } from 'react';
import { hotels } from './hotelsData'; // Import the hotel data
import { Link } from 'react-router-dom'; 
const Hotels = () => {
  const [locations] = useState([
    'London',
    'Paris',
    'New York',
    'Tokyo',
    'Barcelona',
    'Rome',
  ]);

  const [selectedLocation, setSelectedLocation] = useState('London');

  const filteredHotels = hotels.filter(hotel => hotel.location === selectedLocation);

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Available Hotels</h2>
      
      {/* Location Selector */}
      <div className="mb-6">
        <label htmlFor="location" className="block text-lg font-medium text-gray-700">Select Location:</label>
        <select
          id="location"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="mt-2 p-3 border rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {locations.map(location => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
      
      {/* Hotels Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-7">
        {filteredHotels.length > 0 ? (
          filteredHotels.map(hotel => (
            <div key={hotel.id} className="relative border p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
              <img src={hotel.image} alt={hotel.name} className="w-full h-64 object-cover rounded-lg mb-4 border border-gray-200" />
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{hotel.name}</h3>
              <p className="text-gray-600 mb-1">{hotel.location}</p>
              <p className="font-bold text-blue-800 mb-2">{hotel.price}</p>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500 font-semibold">Rating: {hotel.rating.toFixed(1)}</span>
              </div>
              <Link 
              to={`/booking/${hotel.id}`} 
              className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300 transform hover:scale-110"
            >
              Book Now
            </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No hotels available in this location.</p>
        )}
      </div>
    </div>
  );
};

export default Hotels;
