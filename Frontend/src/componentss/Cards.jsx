import React from 'react';

function Cards({ item }) {
    return (
        <>
            <div className="mt-4 p-2">
                <div className="card card-compact bg-base-100 w-80 shadow-xl rounded-md ml-2 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
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
                        {/* Display the price from the array */}
                        <h2 className="card-title text-md font-medium text-gray-600">
                            Rs {item.price}
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;
