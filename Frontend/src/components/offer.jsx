import React from 'react'
import Food from '../food.json'
import Cards from './Cards'
import { useState, useEffect } from 'react'

function offer() {

    const [food, setFood] =  useState([])

    useEffect(()=>{
        
const filtered = Food.filter(item=>item.price > 300)

     setFood(filtered)
    
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

export default offer
