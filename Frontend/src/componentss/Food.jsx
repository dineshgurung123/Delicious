import React, { useEffect, useState } from 'react'

import Card from './Cards.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import axios  from 'axios'


function Food() {

const [food, setFood] = useState([])


  const fetchFood = async()=>{

   const response =   await axios.get("https://delicious-rd7e.onrender.com/")
    

   setFood(response.data.data)

  }


useEffect(()=>{


fetchFood()

},[])

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


