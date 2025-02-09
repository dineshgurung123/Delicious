import React from 'react';

function Cards({ item, addToCart }) {
  return (
    <div className="mt-4 p-2">
      <div className="card card-compact bg-base-100 w-80 shadow-xl rounded-md ml-2 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <figure>
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-48 object-cover rounded-t-md"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg font-semibold">{item.name}</h2>
          <h2 className="text-md font-medium text-gray-600">Rs {item.price}</h2>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-2"
            onClick={() => addToCart(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
