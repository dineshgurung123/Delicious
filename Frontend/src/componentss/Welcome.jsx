import React from "react";
import { motion } from "framer-motion";

function Welcome() {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen px-10 text-white text-center"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/previews/015/322/833/non_2x/chicken-dish-top-view-with-wooden-pattern-background-chicken-meat-collection-chicken-food-hand-drawn-style-illustration-vintage-design-for-restaurant-menu-and-template-vector.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Section */}
      <motion.div
        className="relative z-10 max-w-3xl space-y-8 px-5"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-7xl font-extrabold tracking-wide leading-tight">
          Discover Delicious
        </h1>
        <p className="text-2xl opacity-90">
          Your Gateway to Flavors from Around the World! Get ready for a
          culinary journey like no other.
        </p>
      </motion.div>
    </div>
  );
}

export default Welcome;
