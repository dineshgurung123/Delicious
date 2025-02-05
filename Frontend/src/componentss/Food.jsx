import React, { useEffect, useState } from 'react';
import Card from './Cards.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import axios from 'axios';

function Food() {
    const [food, setFood] = useState([]);

    const fetchFood = async () => {
        try {
            const response = await axios.get("https://delicious-rd7e.onrender.com/");

            // Predefined array of prices (10 elements)
            const prices = [400, 150, 250, 300, 400, 200, 190, 250, 550, 350];

            // Assign prices sequentially to the food items
            const foodWithPrices = response.data.data.map((item, index) => ({
                ...item,
                price: prices[index % prices.length], // Cycle through the prices array
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
                        <Card key={index} item={item} />
                    ))}
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Food;
