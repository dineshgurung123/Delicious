import React from 'react'

import Cards from './Cards'
import { useState, useEffect } from 'react'
import axios from 'axios'


function Offer() {
    
    const [food, setFood] =  useState([])


    const fetchFood = async()=> {
  
      const response = await axios.get('https://delicious-rd7e.onrender.com/')
    
      const filtered = response.data.data.filter(item=>item.price > 300)

       console.log(filtered)

      setFood(filtered)
   
    }
   
    useEffect(()=>{
        

     fetchFood()
    
    }, [])

  return (
     <>
       <h1 className='ml-6 font-bold mt-4'>Famous Food</h1>
    <div className='flex flex-wrap'>
      
       
       
         {
          food.map((item)=>(
        
            
            <Cards item={item}/>
           
          ))
         }
   
    </div>
    </>
    
  )
}

export default Offer
