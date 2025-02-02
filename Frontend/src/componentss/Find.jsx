import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Find() {
  const [food, setFood] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Fetch Food Data
  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await axios.get("https://delicious-rd7e.onrender.com/");
        setFood(response.data.data);
      } catch (error) {
        console.error("Failed to fetch food data:", error);
      }
    };

    fetchFood();
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // Search & Navigate to the Food Item
  const findData = () => {
    const foundFood = food.find(
      (item) => item.name.toLowerCase() === search.toLowerCase()
    );

    if (foundFood) {
      navigate(`/${foundFood._id}`);
    } else {
      alert("Food not found. Try searching again!");
    }
  };

  return (
    <div className="relative w-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 py-24">
      {/* Centered Search Box */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="bg-white p-10 rounded-xl shadow-xl max-w-4xl w-full text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Discover Your Favorite Dish
          </h1>
          <div className="flex justify-center items-center space-x-6">
            <input
              type="text"
              name="name"
              className="p-4 w-80 md:w-96 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Search for your favorite dish..."
              onChange={handleChange}
            />
            <button
              className="bg-yellow-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-yellow-600 transition duration-300 ease-in-out"
              onClick={findData}
            >
              Find Dish
            </button>
          </div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore a world of flavors right at your fingertips. Whether you're looking for comfort food or something new, we've got the best dishes for you!
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center mt-12 px-6 text-white">
        <h2 className="text-4xl font-semibold md:text-5xl">
          Ready to Satisfy Your Cravings?
        </h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
          Start your culinary journey today by searching for your favorite dishes. We've made it easier than ever to find what you're craving!
        </p>
      </div>
    </div>
  );
}

export default Find;
