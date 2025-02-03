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
    <div className="relative py-24 px-10 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-500 text-white text-center">
      {/* Title Section */}
      <div ref={aboutRef}>
        <h1
          className={`text-6xl font-extrabold tracking-wide ${
            inView ? "animate__animated animate__fadeInDown" : "opacity-0"
          }`}
        >
          Experience Culinary Excellence
        </h1>
      </div>

      {/* Content Section */}
      <div className="mt-8 max-w-4xl mx-auto">
        <p
          className={`text-2xl opacity-90 leading-relaxed ${
            inView ? "animate__animated animate__fadeInUp" : "opacity-0"
          }`}
        >
          At Delicious, we take pride in offering a unique dining experience.  
          Our chefs craft each dish using the finest ingredients, blending **tradition**  
          with **innovation** to create unforgettable flavors.
        </p>
      </div>

      {/* Button Section */}
      <div className="mt-10">
        <button
          className={`bg-gray-900 text-white px-10 py-4 rounded-xl font-semibold hover:bg-gray-700 transition duration-300 shadow-lg ${
            inView ? "animate__animated animate__fadeInUp" : "opacity-0"
          }`}
        >
          Book A Table
        </button>
      </div>
    </div>
  );
}

export default About;
