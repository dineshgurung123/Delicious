import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function AddFood() {
 
 
const navigate = useNavigate()

const [data, setData] =  useState({

name : "",
img : "",
price: "",
description: ""

})
 
const handleChange =(e)=>{

 
const value = e.target.value
const name  = e.target.name

setData({

    ...data,
    [name] : value
    
    }) 

}

 const handleCreateFood = async()=>{



      const response = await axios.post("https://delicious-rd7e.onrender.com/", data)
      
      if(response.status === 200){
          
        alert("Food item created")
        navigate('/')
      }
      else{
        alert("Something went wrong")
      }


 }
 


    return (
   
<>

<div>

<div class="bg-white  border-4 rounded-lg shadow relative m-10">

<div class="flex items-start justify-between p-5 border-b rounded-t">
    <h3 class="text-xl font-semibold">
        Add Food Item
    </h3>
   l<Link to = {'/'}> <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="product-modal">
       <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button></Link>
</div>

<div class="p-6 space-y-6">
    <form action="#">
        <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
                <label for="product-name" class="text-sm font-medium text-gray-900 block mb-2">Food Name</label>
                <input type="text" name="name" id="product-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter Food name" required="" onChange={handleChange} />
            </div>
           
            <div class="col-span-6 sm:col-span-3">
                <label for="product-name" class="text-sm font-medium text-gray-900 block mb-2">Image URL</label>
                <input type="text" name="img" id="product-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter Image URL" required="" onChange={handleChange}/>
            </div>
         
            <div class="col-span-6 sm:col-span-3">
                <label for="price" class="text-sm font-medium text-gray-900 block mb-2">Price</label>
                <input type="number" name="price" id="price" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter price" required="" onChange={handleChange}/>
            </div>
            <div class="col-span-full">
                <label for="product-details" class="text-sm font-medium text-gray-900 block mb-2">Product Details</label>
                <textarea id="product-details" name='description' rows="6" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Enter Description" onChange={handleChange}></textarea>
            </div>
        </div>
    </form>
</div>

<div class="p-6 border-t border-gray-200 rounded-b">
    <button class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit" onClick={handleCreateFood}>Add Food</button>
</div>

</div>
</div>

</>


  )
}

export default AddFood
