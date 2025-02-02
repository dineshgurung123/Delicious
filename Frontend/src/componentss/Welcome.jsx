import React from "react";
import { motion } from "framer-motion";

function Welcome() {
  return (
    <div className="flex items-center justify-between px-10 py-32 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-500 text-white">
      {/* Text Section */}
      <motion.div
        className="w-full md:w-1/2 space-y-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold tracking-wide leading-tight">
          Discover Delicious
        </h1>
        <p className="text-xl opacity-80 max-w-lg">
          Your Gateway to Flavors from Around the World! Get ready for a culinary journey like no other.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="w-full md:w-1/2 flex justify-end"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img
          src="https://img.freepik.com/premium-photo/close-up-burger-table_1048944-27735609.jpg?w=740"
          alt="Delicious Burger"
          className="rounded-xl shadow-lg w-full max-w-sm"
        />
      </motion.div>
    </div>
  );
}

export default Welcome;
