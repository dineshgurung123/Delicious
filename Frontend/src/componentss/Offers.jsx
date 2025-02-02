import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";

function Offers() {
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await axios.get("https://delicious-rd7e.onrender.com/");
        const filtered = response.data.data.filter((item) => item.price > 200);
        setFood(filtered);
      } catch (err) {
        setError("Failed to fetch food items.");
      } finally {
        setLoading(false);
      }
    };

    fetchFood();
  }, []);

  return (
    <div className="py-16 px-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Famous Food</h1>

      {/* Loading State */}
      {loading && (
        <h2 className="text-lg font-semibold text-gray-700 text-center">Loading...</h2>
      )}

      {/* Error State */}
      {error && (
        <h2 className="text-lg font-semibold text-red-600 text-center">{error}</h2>
      )}

      {/* Food Cards */}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {food.map((item, index) => (
            <Cards key={item.id || index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Offers;
