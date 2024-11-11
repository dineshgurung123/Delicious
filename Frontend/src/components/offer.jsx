import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cards from './Cards'

function Offer() {
    const [food, setFood] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchFood = async () => {
        try {
            const response = await axios.get('http://localhost:3001/')
            const filtered = response.data.data.filter(item => item.price > 300)
            setFood(filtered)
        } catch (err) {
            setError('Failed to fetch food items.')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchFood()
    }, [])

    if (loading) {
        return <h2 className='ml-6 font-bold mt-4'>Loading...</h2>
    }

    if (error) {
        return <h2 className='ml-6 font-bold mt-4'>{error}</h2>
    }

    return (
        <>
            <h1 className='ml-6 font-bold mt-4'>Famous Food</h1>
            <div className='flex flex-wrap'>
                {food.map((item, index) => (
                    <Cards key={item.id || index} item={item} />
                ))}
            </div>
        </>
    )
}

export default Offer
