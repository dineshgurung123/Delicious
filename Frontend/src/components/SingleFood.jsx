import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function SingleFood() {
      
      
    const {id} = useParams()


     const [food, setFood] = useState({})

    const fetchSingleFood = async()=>{

       const response =  await axios.get(`http://localhost:3001/${id}` )
       console.log(response.data)

        setFood(response.data.data)

    }
   
   
    useEffect(()=>{

    fetchSingleFood()

   },[])
   


  return (
    <>
  
    <div>
      
    <div className="flex px-3 py-3 justify-center ">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={food.img} alt="Sunset in the mountains"/>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{food.name}</div>
            <p className="text-gray-700 text-base">
              {food.description}
            </p>
        </div>
        <div className="px-6 py-4">
            <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 bg-yellow-200 text-gray-black">Add to cart</button>
            <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 bg-red-700 text-green-100">Delete food</button>
            <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 bg-green-500 text-gray-100">Edit food</button>
        </div>
    </div>
</div>
    </div>
  
    </>
  )
}

export default SingleFood