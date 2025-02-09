import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie"; // Import js-cookie for cookie management
import { FaSignOutAlt } from "react-icons/fa"; // Importing a logout icon from react-icons

function Navbar() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the user is authenticated based on the cookie
  useEffect(() => {
    const token = Cookies.get("authToken"); // Get the token from cookies
    if (token) {
      setIsAuthenticated(true); // User is authenticated if token exists
    } else {
      setIsAuthenticated(false); // No token, user is not authenticated
    }
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  // Handle logout
  const handleLogout = async () => {
    try {
      // Send the request to the backend to log out
      const response = await axios.post('http://localhost:3001/logout', {}, { withCredentials: true });

      // If logout is successful, clear the token from cookies
      Cookies.remove("authToken");

      // Set the authenticated state to false
      setIsAuthenticated(false);

      // // Redirect to login page after logout
      // navigate('/login');
    } catch (error) {
      console.error("Error occurred during logout", error);
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 w-full z-50 px-10 py-5">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-3xl font-semibold text-black tracking-wide">Delicious 🍔</h1>

        {/* Navigation Links */}
        <div className="flex space-x-8 text-lg text-black">
          <Link to="/" className="hover:text-green-600 transition">Home</Link>
          <Link to="/food" className="hover:text-green-600 transition">Food Items</Link>
          <Link to="/cart" className="hover:text-green-600 transition text-2xl">🛒</Link>
          <Link to="/addFood" className="hover:text-green-600 transition text-xl">Add Item</Link>

        </div>

         
      

        {/* Always display logout icon */}
        <button
          onClick={handleLogout}
          className="text-xl text-red-600 hover:text-red-800 transition duration-300 transform hover:scale-125 absolute top-8 right-4"
        >
          <FaSignOutAlt />
        </button>

        {/* Buttons for Login and Register (only show when not authenticated) */}
        <div className="flex space-x-4 items-center">
          {!isAuthenticated && (
            <>
              {/* Login Button */}
              <Link to="/login">
                <button className="bg-black text-white text-sm px-5 py-2 rounded-md shadow-md hover:bg-green-600 hover:text-white transition ease-in-out duration-300 transform hover:scale-105">
                  Login
                </button>
              </Link>

              {/* Register Button */}
              <Link to="/register">
                <button className="bg-gradient-to-r from-green-400 to-green-600 text-white text-sm px-6 py-3 rounded-md shadow-md hover:from-green-500 hover:to-green-700 transition ease-in-out duration-300 transform hover:scale-105">
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
