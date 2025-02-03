import React from 'react';

function Feedback() {
  const feedbackData = [
    {
      name: "Pravat Nagarkoti",
      rating: 5,
      review: "Babal mitho xa",
    },
    {
      name: "Pawan Thapa",
      rating: 4,
      review: "Best place to order food from. The food is delicious and the service is great!",
    },
    {
      name: "Ram Thapa",
      rating: 5,
      review: "I am a regular customer and I love the food here. The taste is amazing and the service is great!",
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-500 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Customer Feedback</h2>
      <div className="flex justify-center space-x-8">
        {feedbackData.map((feedback, index) => (
          <div
            key={index}
            className="bg-gray-700 p-8 rounded-lg shadow-lg max-w-xs text-center"
          >
            <h3 className="text-xl font-semibold">{feedback.name}</h3>
            <div className="flex justify-center my-2">
              {Array.from({ length: feedback.rating }, (_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="text-yellow-400"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 12l3.09 2-1.18-4.36L12 5.91h-4.18L6.09 9.64 8 12z" />
                </svg>
              ))}
            </div>
            <p className="text-md text-opacity-80">{feedback.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feedback;
