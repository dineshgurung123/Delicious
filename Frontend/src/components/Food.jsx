import React, { useEffect, useState } from 'react'
import foods from '../food.json'
import Card from './Cards.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

function Food() {
const [food, setFood] = useState([])

useEffect(()=>{

    setFood(foods)
}

,[])
 
    return (
        <>
        <div className=' mt-16'>


      <Navbar/>
    <div className='flex flex-wrap'>
    {
      food.map((item, index)=>(

        <Card key = {index} item = {item}/>
      ))
    }
    </div>

    <Footer/>

    </div>
    </>
  )
}

export default Food


