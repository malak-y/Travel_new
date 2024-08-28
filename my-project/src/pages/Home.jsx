import { Link } from 'react-router-dom';
import heroImage from '../assets/sean-oulashin-KMn4VEeEPR8-unsplash.jpg';
import roomImage from '../assets/Screenshot (514).png';
import exe from '../assets/Screenshot (515).png';
import location from '../assets/Screenshot (516).png';

const Home = () => (
  <div className="relative bg-gray-100 font-sans">
    {/* Hero Section */}
    <section className="relative bg-blue-700 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover filter brightness-75"
        />
      </div>
      <div className="relative container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-wider drop-shadow-lg">
          Discover Your Perfect Stay
        </h1>
        <p className="text-lg md:text-2xl mb-8 font-light leading-relaxed tracking-wide max-w-3xl mx-auto drop-shadow-md">
          Explore the best hotels with our easy-to-use reservation system. Experience luxury, comfort, and convenience all in one place.
        </p>
        <Link
        to="/hotels"
        className="bg-yellow-500 text-blue-800 px-8 py-4 rounded-full font-semibold shadow-lg transform transition-transform duration-300 hover:bg-yellow-600 hover:text-white hover:scale-110 hover:shadow-xl hover:-translate-y-1"
      >
        Find Hotels
      </Link>      
      </div>
    </section>

    {/* Features Section */}
    <section className="container mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 tracking-wide">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:bg-blue-50">
          <img
            src={roomImage}
            alt="Comfortable Rooms"
            className="mx-auto mb-6 w-24 h-24 object-cover rounded-full border-4 border-blue-600 shadow-md"
          />
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 tracking-wide">Comfortable Rooms</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Enjoy well-furnished rooms with all the amenities you need for a relaxing stay.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:bg-blue-50">
          <img
            src={exe}
            alt="Excellent Service"
            className="mx-auto mb-6 w-24 h-24 object-cover rounded-full border-4 border-blue-600 shadow-md"
          />
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 tracking-wide">Excellent Service</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our dedicated staff is here to ensure you have a memorable and pleasant experience.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:bg-blue-50">
          <img
            src={location}
            alt="Great Locations"
            className="mx-auto mb-6 w-24 h-24 object-cover rounded-full border-4 border-blue-600 shadow-md"
          />
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 tracking-wide">Great Locations</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Stay in prime locations that offer easy access to top attractions and amenities.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
