// Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Send logout request to the backend
      await axios.post('http://localhost:3001/logout', {}, { withCredentials: true });

      // Clear auth token from localStorage
      localStorage.removeItem('authToken');

      // Redirect to login page after logout
      navigate('/login');
    } catch (error) {
      console.error("Error occurred during logout", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-black text-white px-5 py-2 rounded-md hover:bg-green-600 transition ease-in-out duration-300 transform hover:scale-105"
    >
      Logout
    </button>
  );
}

export default Logout;
