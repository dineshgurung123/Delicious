import React, { useState } from "react";
import { motion } from "framer-motion";

function FeaturedFood() {
  const [hovered, setHovered] = useState(null);

  const foodItems = [
    {
      id: 1,
      name: "Cheeseburger",
      image: "https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-square-FS-42.jpg",
      description: "Juicy and cheesy with a perfect balance of flavors.",
    },
    {
      id: 2,
      name: "Sushi Rolls",
      image: "https://www.justonecookbook.com/wp-content/uploads/2020/01/Sushi-Rolls-Maki-Sushi-%E2%80%93-Hosomaki-1106-II.jpg",
      description: "Fresh, delicious, and rich in flavor.",
    },
    {
      id: 3,
      name: "Pasta Alfredo",
      image: "https://images.aws.nestle.recipes/resized/432d4cbae30cd055066e6fa44cf0897c_Overhead_Pasta_Can_2020_HERO_448_448.jpg",
      description: "Creamy pasta with a rich, savory sauce.",
    },
  ];

  return (
    <div className="py-16 px-10 bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Featured Dishes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {foodItems.map((item) => (
          <motion.div
            key={item.id}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-500"
            onHoverStart={() => setHovered(item.id)}
            onHoverEnd={() => setHovered(null)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[300px] object-cover rounded-lg transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
              <div className="text-white text-center p-6">
                <h3 className="text-3xl font-semibold mb-4 transform transition-transform duration-300">
                  {item.name}
                </h3>
                {hovered === item.id && (
                  <p className="text-xl opacity-90">{item.description}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedFood;
