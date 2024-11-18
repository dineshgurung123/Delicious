import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from './Cards';

function Offers() {
    const [food, setFood] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchFood = async () => {
        try {
            const response = await axios.get('https://delicious-rd7e.onrender.com/');
            const filtered = response.data.data.filter((item) => item.price > 200);
            setFood(filtered);
        } catch (err) {
            setError('Failed to fetch food items.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFood();
    }, []);

    if (loading) {
        return <h2 className="ml-6 font-bold mt-4 text-lg text-gray-700">Loading...</h2>;
    }

    if (error) {
        return <h2 className="ml-6 font-bold mt-4 text-lg text-red-600">{error}</h2>;
    }

    return (
        <>
            <div className="p-10">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Famous Food</h1>
                <div className="flex flex-wrap justify-center gap-6">
                    {food.map((item, index) => (
                        <Cards key={item.id || index} item={item} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Offers;
