import React from 'react'
import { Link } from 'react-router-dom'


function Cards({item}) {

     

    return (
   
   <>
  <Link to={`/${item._id}`}>
  
   <div className=' mt-4 p-2 flex flex-wrap gap-1 '>
  
  
   <div className="card card-compact bg-base-100 w-80 shadow-xl rounded-md ml-2 ">
  <figure>
    <img
      src= {item.img}
      alt=""   className="w-full h-48 object-cover rounded-t-md"/>
  </figure>
  <div className="card-body flex ">
    <h2 className="card-title mx-2 mt-2">{item.name}</h2>
    <h2 className='card-title mt-2'>Rs {item.price} </h2>

    <div className="flex card-actions justify-center p-1">
      <button className="btn btn-primary bg-lime-400 rounded p-1 m-1 text-xs ">Order Now</button>
      <button className="btn btn-primary bg-lime-400 rounded p-1 m-1 text-xs">Add to cart</button>
  
    </div>
  </div>
</div> 

   </div>
   </Link>
   </>
  )
}

export default Cards