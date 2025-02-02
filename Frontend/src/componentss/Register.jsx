import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate in React Router v6
import axios from "axios";

function Register() {
  const navigate = useNavigate(); // Use useNavigate hook
  
  // State to hold form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(""); // Clear any previous errors

    try {
      // Sending POST request to the /register API
      const response = await axios.post("http://localhost:3001/register", {
        name,
        email,
        password,
      });

      // Redirect to login page after successful registration
      navigate("/login"); // Use navigate instead of history.push
    } catch (error) {
      setError("Error occurred during registration. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Create an Account</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-lg font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-green-600 hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
