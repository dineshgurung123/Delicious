import React from 'react';

function Navbar() {
  return (
    <>
      <div className="  bg-slate-50 shadow-md z-50 h-20 flex justify-around fixed top-0 w-full">
        <div className="mt-10 mr-60">
          <h1 className="font-bold">Delicious</h1>
        </div>
        <div className=" mt-10 ml-60">
          <button className="bg-black text-yellow-300 h-7 w-16 rounded">Login</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
