import React from 'react';
import { motion } from 'framer-motion';

function Welcome() {
  return (
    <>
      <div className="flex items-center justify-between p-14 bg-slate-400">
        {/* Text Section with Animation */}
        <motion.div
          className="w-1/2 text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold ml-56 text-white">Discover Delicious</h1>
          <br />
          <h2 className="text-xl ml-56 text-white">
            Your Gateway to Flavors from Around the World!
          </h2>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-80 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src="https://img.freepik.com/premium-photo/close-up-burger-table_1048944-27735609.jpg?w=740"
            alt="Delicious Burger"
            className="rounded-lg shadow-lg min-h-72 w-96 mr-40 mt-24"
          />
        </motion.div>
      </div>
    </>
  );
}

export default Welcome;
