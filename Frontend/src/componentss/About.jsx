import React, { useEffect, useRef, useState } from 'react';
import 'animate.css'; // Ensure Animate.css is imported

function About() {
  const aboutRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative py-10">
      {/* Background Image Block */}
      <div className="relative" ref={aboutRef}>
        <img
          src="https://thumbs.dreamstime.com/b/buffet-food-delicious-cocktails-hotel-321402369.jpg"
          alt="Food"
          className="w-full h-96 object-cover"
        />
        {/* Overlay Block for Text */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Heading */}
        <h1
          className={`absolute text-4xl font-bold text-white bottom-16 left-1/2 transform -translate-x-1/2 ${
            inView ? 'animate__animated animate__fadeIn animate__delay-1s' : ''
          }`}
        >
          About Us
        </h1>
      </div>

      {/* Content Block */}
      <div className="mt-8 px-6 text-center">
        <p
          className={`text-lg text-gray-700 max-w-3xl mx-auto ${
            inView ? 'animate__animated animate__fadeIn animate__delay-2s' : ''
          }`}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem molestias blanditiis, veniam quia non iusto voluptatem quae nisi dolorum eligendi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis non distinctio ea, consequuntur veniam molestiae ad? Magnam placeat nam earum?
        </p>
      </div>

      {/* Button Block */}
      <div className="text-center mt-6">
        <button
          className={`bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition duration-300 ${
            inView ? 'animate__animated animate__fadeIn animate__delay-3s' : ''
          }`}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

export default About;
