import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const navigate = useNavigate();

  // Define the state to track authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the user is authenticated on page load
  useEffect(() => {
    const token = localStorage.getItem('authToken'); // Check for token in localStorage
    if (token) {
      setIsAuthenticated(true); // If the token exists, user is authenticated
    }
  }, []);

  // Handle logout
  const handleLogout = async () => {
    try {
      // Hit the logout API endpoint (replace with your actual logout endpoint)
      await axios.post('https://delicious-rd7e.onrender.com/logout');
      
      // Clear the auth token from localStorage
      localStorage.removeItem('authToken');
      
      // Set authenticated state to false
      setIsAuthenticated(false);
      
      // Redirect to login page after logout
      navigate('/login');
    } catch (error) {
      console.error("Error occurred during logout", error);
    }
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-10">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-900">Delicious 🍔</h1>

        {/* Navigation Links */}
        <div className="flex space-x-8 text-lg">
          <Link to="/" className="hover:text-green-600 transition">Home</Link>
          {/* <Link to="/addFood" className="hover:text-green-600 transition">Add Foods</Link> */}
          <Link to="/food" className="hover:text-green-600 transition">Food Items</Link>
          <Link to="/cart" className="hover:text-green-600 transition text-xl">🛒</Link>

          {/* Conditionally render Login/Logout button */}
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="bg-black text-white px-5 py-2 rounded-md hover:bg-green-600 transition ease-in-out duration-300 transform hover:scale-105"
            >
              Logout
            </button>
          ) : (
            <>
              {/* Login Button */}
              <Link to="/login">
                <button className="bg-black text-white px-5 py-2 rounded-md hover:bg-green-600 transition ease-in-out duration-300 transform hover:scale-105">
                  Login
                </button>
              </Link>

              {/* Register Button */}
              <Link to="/register">
                <button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 rounded-full shadow-md hover:from-green-500 hover:to-green-700 transition ease-in-out duration-300 transform hover:scale-105">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
