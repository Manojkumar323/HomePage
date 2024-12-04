import React, { useState } from 'react';
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaUserCircle, FaBars } from "react-icons/fa";
import logo from "/images/logo.png"; // Fixed the image import
import './Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-1">
          {/* Logo */}
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo w-28 h-auto sm:w-32 md:w-40" />
          </div>
          
          {/* Navigation Links */}
          <div className="nav-items hidden sm:flex space-x-6">
            <ul className="nav-list flex space-x-6">
              <li><a href="#home" className="text-lg text-gray-800 hover:text-blue-500">HOME</a></li>
              <li><a href="#products" className="text-lg text-gray-800 hover:text-blue-500">PRODUCT</a></li>
              <li><a href="#contact" className="text-lg text-gray-800 hover:text-blue-500">CONTACT</a></li>
            </ul>
          </div>

          {/* Icons */}
          <div className="icons flex space-x-6 text-xl">
            <ul className="icon-list flex space-x-4">
              <li className="hover:text-blue-500"><MdOutlineShoppingBag /></li>
              <li className="hover:text-blue-500"><FaHeartCirclePlus /></li>
              <li className="hover:text-blue-500"><FaUserCircle /></li>
            </ul>
          </div>
          
          {/* Mobile Menu Button (for smaller screens) */}
          <div className="sm:hidden">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              <FaBars />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="space-y-4 bg-white p-4">
            <li><a href="#home" className="text-lg text-gray-800 hover:text-blue-500">HOME</a></li>
            <li><a href="#products" className="text-lg text-gray-800 hover:text-blue-500">PRODUCT</a></li>
            <li><a href="#contact" className="text-lg text-gray-800 hover:text-blue-500">CONTACT</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
