import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams , useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'


function SingleFood() {
      
      
    const {id} = useParams()
    const navigate = useNavigate()

     const [food, setFood] = useState({})

  //   const fetchSingleFood = async()=>{

  //      const response =  await axios.get(`https://delicious-rd7e.onrender.com/${id}` )
  //      console.log(response.data)

  //       setFood(response.data.data)
        

  //   }
   
   
  //   useEffect(()=>{

  //   fetchSingleFood()

  //  },[])
   
   
  //  const deleteFood= async()=>{

  //   const response =  await axios.delete(`https://delicious-rd7e.onrender.com/${id}`)
  //    console.log(response)

  //   if(response.status=== 200){

  //     alert("Deleted food item")
  //     navigate('/')

  //   }

  //  }

  
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
        <div className="px-6 py-4 flex justify-around">
            <button className=" rounded-full px-3 py-1 text-sm font-semibold bg-yellow-200 text-gray-black">Add to cart</button>
            <button className=" rounded-full px-3 py-1 text-sm font-semibold bg-red-700 text-green-100" onClick={deleteFood}>Delete food</button>
           
           <Link to={`/edit/${id}`} >
          
            <button className=" rounded-full px-3 py-1 text-sm font-semiboldbg-green-500 text-gray-100 bg-green-300">Edit food</button>
            </Link>
        </div>
    </div>
</div>
    </div>
  
    </>
  )
}

export default SingleFood