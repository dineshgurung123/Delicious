import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Find() {
 

  const [food, setFood] = useState([])
  const [search, setSearch] = useState('')
  const navigate = useNavigate();
 
  useEffect(()=>{
     
      
    const fetchFood=async()=>{


      const food =  await axios.get("https://delicious-rd7e.onrender.com/")
        
          setFood(food.data.data)
    }
     
    fetchFood()
  },[])




 const handleChange =(e)=>{

  
    const value = e.target.value
    setSearch(value)
   
    
 }
 
   
 const findData = () => {
  // Find food by name from the data
  const foundFood = food.find(
    (item) => item.name.toLowerCase() === search.toLowerCase()
  );

  if (foundFood) {
    navigate(`/${foundFood._id}`); // Redirect to the found food item
  } else {
    alert("Food not found");
  }
};
 
 
  return (
    
    <>
     <div className='relative '>

    <div className='bg-blue-300 '>
     
      <img className='w-full h-81 object-cover' src="https://www.marveldigitech.com/wp-content/uploads/2021/07/food-delivery-platform.jpeg " alt="" />
   

      </div>

      {/* seach input box */}
       

       <div className="absolute left-96  pt-2 bottom-10">

     <input type="text" name='name' className='p-2 w-96 h-10 border ' placeholder='search for food' onChange={handleChange}/>
       
       <button className='bg-yellow-500 h-10 w-14' onClick={findData} >Find</button>
       </div>
    
    </div>
    
    </>
  )
}

export default Find
