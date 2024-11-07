import React from 'react'

function Find() {
  return (
    
    <>
     <div className='relative '>

    <div className='bg-blue-300 '>
     
      <img className='w-full h-81 object-cover' src="https://www.marveldigitech.com/wp-content/uploads/2021/07/food-delivery-platform.jpeg " alt="" />
   

      </div>

      {/* seach input box */}
       

       <div className="absolute left-96  pt-2 bottom-10">

     <input type="text" className='p-2 w-96 h-10 border ' placeholder='search for food'/>
       
       <button className='bg-yellow-500 h-10 w-14'>Find</button>
       </div>
    
    </div>
    
    </>
  )
}

export default Find
