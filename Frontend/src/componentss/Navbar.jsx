import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
 

  return (
    <>
      <div className="  bg-white shadow-md z-50 h-20 flex justify-around fixed top-0 w-full ">
        <div className="mt-10 mr-60">
          <h1 className="font-bold">Delicious 🍔</h1>
        </div>
         
    
        <div className=" mt-10 ml-60 flex space-x-8">

         
          <div className=' hover:text-green-600'> <Link to="/">Home</Link></div>
         
         <div className=' hover:text-green-600'> <Link to= "/addFood">Add Foods</Link></div>
         
         <div className=' hover:text-green-600'><Link to="/food">Food Items</Link></div>
         <div className=' hover:text-green-600'>
        <Link to= "/login">  <button className="bg-black text-white h-7 w-16 rounded hover:text-black hover:bg-green">Login</button></Link>
          </div>

           <div >
          <Link to= "/cart"> 🛒</Link>
          
           </div>
         
        </div>
      </div>
    </>
  );
}

export default Navbar;
