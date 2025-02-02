import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-10">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-900">Delicious 🍔</h1>

        {/* Navigation Links */}
        <div className="flex space-x-8 text-lg">
          <Link to="/" className="hover:text-green-600 transition">Home</Link>
          <Link to="/addFood" className="hover:text-green-600 transition">Add Foods</Link>
          <Link to="/food" className="hover:text-green-600 transition">Food Items</Link>
          <Link to="/cart" className="hover:text-green-600 transition text-xl">🛒</Link>
          
          {/* Login Button */}
          <Link to="/login">
            <button className="bg-black text-white px-5 py-2 rounded-md hover:bg-green-600 transition">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
