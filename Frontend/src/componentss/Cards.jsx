import React from 'react';
import { Link } from 'react-router-dom';

function Cards({ item }) {
    // Generate a random price between 100 and 1000 for each card
    const randomPrice = Math.floor(Math.random() * 901) + 100;

    return (
        <>
            {/* <Link to={`/${item._id}`}> */}
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
                            {/* Display the random price */}
                            <h2 className="card-title text-md font-medium text-gray-600">
                                Rs {randomPrice}
                            </h2>
                        </div>
                    </div>
                </div>
            {/* </Link> */}

        </>
    );
}

export default Cards;
