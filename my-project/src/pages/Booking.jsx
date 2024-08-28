/* eslint-disable react/no-unescaped-entities */
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { hotels } from './hotelsData'; // Assuming you move your hotel data to a separate file

const Booking = () => {
  const { hotelId } = useParams();
  const [hotel, setHotel] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  useEffect(() => {
    const selectedHotel = hotels.find(h => h.id === parseInt(hotelId));
    setHotel(selectedHotel);
  }, [hotelId]);

  const handleBooking = (e) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  if (!hotel) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-8 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 rounded-2xl shadow-2xl">
      <h2 className="text-5xl font-extrabold mb-12 text-center text-gray-800">
        Booking Details
      </h2>
      
      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
        <img 
          src={hotel.image} 
          alt={hotel.name} 
          className="w-full md:w-1/3 h-72 object-cover transform hover:scale-110 transition-transform duration-500 ease-in-out rounded-t-xl md:rounded-l-xl md:rounded-t-none" 
        />
        <div className="md:ml-8 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-gray-900">{hotel.name}</h3>
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-medium text-indigo-600">Location:</span> {hotel.location}
            </p>
            <p className="text-3xl font-bold text-blue-700 mb-4">{hotel.price}</p>
            <p className="text-lg font-semibold text-yellow-500 mb-8">
              Rating: {hotel.rating.toFixed(1)}
            </p>
          </div>

          {bookingConfirmed ? (
            <div className="mt-6 p-6 bg-green-100 text-green-800 rounded-lg shadow-inner">
              <p className="text-xl font-semibold">Booking Confirmed!</p>
              <p className="text-gray-600 mt-2">Thank you for your booking. We look forward to your stay!</p>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="space-y-8 mt-6">
              <div className="flex flex-col md:flex-row md:space-x-8">
                <div className="flex-1">
                  <label htmlFor="checkin" className="block text-lg font-medium text-gray-800">Check-In Date:</label>
                  <input 
                    type="date" 
                    id="checkin" 
                    className="mt-3 p-4 w-full border border-gray-300 rounded-lg bg-gray-50 shadow-md focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition duration-300 ease-in-out" 
                    required 
                  />
                </div>
                <div className="flex-1 mt-6 md:mt-0">
                  <label htmlFor="checkout" className="block text-lg font-medium text-gray-800">Check-Out Date:</label>
                  <input 
                    type="date" 
                    id="checkout" 
                    className="mt-3 p-4 w-full border border-gray-300 rounded-lg bg-gray-50 shadow-md focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition duration-300 ease-in-out" 
                    required 
                  />
                </div>
              </div>

              <div>
                <label htmlFor="cardholder-name" className="block text-lg font-medium text-gray-800">Cardholder's Name:</label>
                <input 
                  type="text" 
                  id="cardholder-name" 
                  placeholder="Full Name" 
                  className="mt-3 p-4 w-full border border-gray-300 rounded-lg bg-gray-50 shadow-md focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition duration-300 ease-in-out" 
                  required 
                />
              </div>

              <div>
                <label htmlFor="card-number" className="block text-lg font-medium text-gray-800">Card Number:</label>
                <input 
                  type="text" 
                  id="card-number" 
                  placeholder="XXXX XXXX XXXX XXXX" 
                  className="mt-3 p-4 w-full border border-gray-300 rounded-lg bg-gray-50 shadow-md focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition duration-300 ease-in-out" 
                  required 
                />
              </div>

              <div className="flex flex-col md:flex-row md:space-x-8">
                <div className="flex-1 mt-6 md:mt-0">
                  <label htmlFor="expiry-date" className="block text-lg font-medium text-gray-800">Expiry Date:</label>
                  <input 
                    type="text" 
                    id="expiry-date" 
                    placeholder="MM/YY" 
                    className="mt-3 p-4 w-full border border-gray-300 rounded-lg bg-gray-50 shadow-md focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition duration-300 ease-in-out" 
                    required 
                  />
                </div>
                <div className="flex-1 mt-6 md:mt-0">
                  <label htmlFor="cvv" className="block text-lg font-medium text-gray-800">CVV:</label>
                  <input 
                    type="text" 
                    id="cvv" 
                    placeholder="XXX" 
                    className="mt-3 p-4 w-full border border-gray-300 rounded-lg bg-gray-50 shadow-md focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition duration-300 ease-in-out" 
                    required 
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="inline-flex items-center">
                  <input 
                    type="checkbox" 
                    className="form-checkbox h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-2 focus:ring-indigo-400" 
                  />
                  <span className="ml-2 text-gray-700">Save card details for future bookings</span>
                </label>
              </div>

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-600 transform hover:scale-105 transition-transform duration-300 ease-in-out mt-8"
              >
                Complete Booking
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
