import React, { useEffect, useRef, useState } from "react";
import "animate.css";

function About() {
  const aboutRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative py-16 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-500">
      {/* Background Image Block */}
      <div className="relative" ref={aboutRef}>
        <img
          src="https://images.unsplash.com/photo-1556740749-887f6717d7e4" // Beautiful image of a dish
          alt="Gourmet Cuisine"
          className="w-full h-[400px] object-cover rounded-lg shadow-md"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1
          className={`absolute text-5xl font-extrabold text-white bottom-14 left-1/2 transform -translate-x-1/2 ${inView ? "animate__animated animate__fadeInDown" : "opacity-0"}`}
        >
          Experience Culinary Excellence
        </h1>
      </div>

      {/* Content Block */}
      <div className="mt-10 px-6 text-center">
        <p
          className={`text-xl text-white max-w-3xl mx-auto leading-relaxed ${inView ? "animate__animated animate__fadeInUp" : "opacity-0"}`}
        >
          At [Restaurant Name], we take pride in offering a one-of-a-kind dining experience. Our chefs use only the finest ingredients to craft each dish, combining tradition with innovation. Every meal is a masterpiece, designed to delight your senses and transport you to new culinary horizons. Join us for a meal that’s as unforgettable as it is delicious.
        </p>
      </div>

      {/* Button Block */}
      <div className="text-center mt-8">
        <button
          className={`bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition duration-300 shadow-xl ${inView ? "animate__animated animate__fadeInUp" : "opacity-0"}`}
        >
          Book A Table
        </button>
      </div>
    </div>
  );
}

export default About;
