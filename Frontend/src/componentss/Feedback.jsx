import React, { useEffect, useState } from "react";
import axios from "axios";

function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get(`https://delicious-rd7e.onrender.com/feedback`);
        setFeedbacks(response.data.data);
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <div className="py-16 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-500 text-white">
      <h2 className="text-4xl font-bold text-center mb-12 tracking-wider">
        Customer Feedback
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {feedbacks.slice(-3).map((feedback, index) => (
          <div
            key={index}
            className="bg-gray-700 p-6 rounded-lg shadow-lg max-w-xs h-72 text-center m-2 transform transition-all hover:scale-105 hover:shadow-2xl"
            style={{ minWidth: "300px" }}
          >
            {/* Default Person Emoji */}
            <div className="text-4xl mb-4">
              <span role="img" aria-label="person" className="color-white">
                👨🏿
              </span>
            </div>

            <h3 className="text-2xl font-semibold mb-3">{feedback.name}</h3>
            <p className="text-md text-opacity-80 mt-2 leading-relaxed">
              {feedback.comment || "No feedback provided."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeedbackList;
