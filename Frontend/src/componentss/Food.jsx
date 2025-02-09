import React, { useEffect, useState } from 'react';
import Card from './Cards.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import axios from 'axios';

function Food({ addToCart }) {
  const [food, setFood] = useState([]);
     
  const fetchFood = async () => {
    try {
      const response = await axios.get("https://delicious-rd7e.onrender.com/");

      const prices = [400, 150, 250, 300, 400, 200, 190, 250, 550, 350];
      const foodWithPrices = response.data.data.map((item, index) => ({
        ...item,
        price: prices[index % prices.length], // Adding price
        quantity: 1 // Initialize quantity to 1
      }));

      setFood(foodWithPrices);
    } catch (error) {
      console.error("Error fetching food data:", error);
    }
  };

  useEffect(() => {
    fetchFood();
  }, []);

  return (
    <>
      <div className="mt-16">
        <Navbar />
        <div className="flex flex-wrap">
          {food.map((item, index) => (
            <Card key={index} item={item} addToCart={addToCart} />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Food;
