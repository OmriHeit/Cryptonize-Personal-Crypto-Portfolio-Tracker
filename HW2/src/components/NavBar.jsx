import React, { useState, useContext } from 'react';
import { WalletConnectComponent } from './WalletConnectComponent';
import { ThemeContext } from './ThemeContext';
import ThemeToggleButton from './ThemeToggleButton';

// 1) Import your logo image (adjust path as needed):
import logo from '../assets/Logo.png'; 

function NavBar({ handleConnect }) {
  const { theme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`shadow-md p-4 flex justify-between items-center ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-white'
      } relative`}
    >
      {/* Title + Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Cryptonize Logo"
          className="h-16 w-16 mr-2"
        />
        <div
          className={`text-xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-blue-500'
          }`}
        >
          Cryptonize
        </div>
      </div>

      {/* Hamburger Menu for smaller screens */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke={theme === 'dark' ? 'white' : 'black'}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Close Icon (X) */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke={theme === 'dark' ? 'white' : 'black'}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Hamburger Icon */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Menu items for larger screens */}
      <div className="hidden md:flex items-center space-x-4">
        <WalletConnectComponent handleConnect={handleConnect} />
        <ThemeToggleButton />
      </div>

      {/* Dropdown Menu for smaller screens */}
      {isOpen && (
        <div
          className={`absolute top-full left-0 right-0 bg-${
            theme === 'dark' ? 'gray-800' : 'white'
          } shadow-lg p-4 mt-2 z-20 rounded-md md:hidden flex flex-col items-center`}
        >
          <div className="w-full flex flex-col items-center space-y-4">
            <WalletConnectComponent handleConnect={handleConnect} />
            <ThemeToggleButton />
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
