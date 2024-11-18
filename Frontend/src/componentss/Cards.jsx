import React from 'react';
import { Link } from 'react-router-dom';

function Cards({ item }) {
    return (
        <>
            <Link to={`/${item._id}`}>
                <div className="mt-4 p-2">
                    <div className="card card-compact bg-base-100 w-80 shadow-xl rounded-md ml-2 transform transition duration-300 hover:scale-105 hover:shadow-2xl relative">
                        {/* Image Section */}
                        <figure>
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-full h-48 object-cover rounded-t-md"
                            />
                        </figure>
                        {/* Card Body */}
                        <div className="card-body">
                            <h2 className="card-title text-lg font-semibold">{item.name}</h2>
                            <h2 className="card-title text-md font-medium text-gray-600">
                                Rs {item.price}
                            </h2>
                        </div>
                        {/* Buttons */}
                        <div className="flex justify-between px-4 py-3 absolute bottom-0 left-0 w-full bg-white rounded-b-md">
                            <button className="btn bg-lime-400 hover:bg-lime-500 text-xs rounded px-4 py-2">
                                Order Now
                            </button>
                            <button className="btn bg-lime-400 hover:bg-lime-500 text-xs rounded px-4 py-2">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default Cards;
