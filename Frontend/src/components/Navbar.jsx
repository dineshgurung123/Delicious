import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
 
 
  return (
    <>
      <div className="  bg-slate-50 shadow-md z-50 h-20 flex justify-around fixed top-0 w-full ">
        <div className="mt-10 mr-60">
          <h1 className="font-bold">Delicious</h1>
        </div>
         
         

        <div className=" mt-10 ml-60 flex space-x-8">

         
          <div > <Link to="/">Home</Link></div>
         
         <div><a href="">About</a></div>
         
         <div><Link to="/food">Food Items</Link></div>
         <div>
          <button className="bg-black text-yellow-300 h-7 w-16 rounded">Login</button>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Navbar;
