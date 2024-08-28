import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import image from '../assets/Screenshot(540).png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-500 text-white py-4 px-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section with Image */}
        <div className="flex items-center">
          <img 
            src={image}
            alt="Logo" 
            className="h-12 w-12 mr-4 rounded-full border-4 border-white shadow-md" 
          />
          <h1 className="text-2xl font-extrabold tracking-tight">
            <Link 
              to="/" 
              className="transform transition-transform duration-300 hover:scale-125 hover:text-yellow-300"
            >
              Elite Stay
            </Link>
          </h1>
        </div>

        {/* Menu Icon for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className={`flex-col lg:flex lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 ${isMenuOpen ? 'flex' : 'hidden'} lg:flex`}>
          <Link 
            to="/" 
            className="text-lg font-semibold transform transition-transform duration-300 hover:scale-125 hover:text-yellow-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/hotels" 
            className="text-lg font-semibold transform transition-transform duration-300 hover:scale-125 hover:text-yellow-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Hotels
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
