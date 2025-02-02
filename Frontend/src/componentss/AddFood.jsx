import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function AddFood() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    img: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleCreateFood = async () => {
    try {
      const response = await axios.post("https://delicious-rd7e.onrender.com/", data);

      if (response.status === 200) {
        alert("Food item created successfully");
        navigate("/");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error("Error creating food item:", error);
      alert("Failed to create food item");
    }
  };

  return (
    <>
      <div className="max-w-4xl mx-auto mt-10 p-5">
        <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden">
          <div className="flex items-center justify-between p-6 bg-cyan-600 text-white">
            <h3 className="text-2xl font-bold">Add New Food Item</h3>
            <Link to={"/"}>
              <button
                type="button"
                className="text-white hover:bg-cyan-700 p-2 rounded-full"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>

          <div className="p-8 space-y-6 bg-gray-50">
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="col-span-1 sm:col-span-2">
                  <label
                    htmlFor="product-name"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Food Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="product-name"
                    className="shadow-sm bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-3"
                    placeholder="Enter Food name"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="col-span-1 sm:col-span-2">
                  <label
                    htmlFor="image-url"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Image URL
                  </label>
                  <input
                    type="text"
                    name="img"
                    id="image-url"
                    className="shadow-sm bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-3"
                    placeholder="Enter Image URL"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="col-span-1 sm:col-span-2">
                  <label
                    htmlFor="price"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="shadow-sm bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-3"
                    placeholder="Enter price"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="col-span-1 sm:col-span-2">
                  <label
                    htmlFor="product-details"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Product Description
                  </label>
                  <textarea
                    id="product-details"
                    name="description"
                    rows="6"
                    className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-3"
                    placeholder="Enter Description"
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </form>
          </div>

          <div className="p-6 border-t border-gray-200 rounded-b flex justify-center items-center">
            <button
              className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-semibold rounded-lg text-lg px-6 py-3 w-full sm:w-auto"
              type="submit"
              onClick={handleCreateFood}
            >
              Add Food
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddFood;
