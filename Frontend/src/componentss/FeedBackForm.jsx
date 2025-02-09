import React, { useState } from "react";
import axios from "axios";

function FeedbackForm() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`https://delicious-rd7e.onrender.com/feedback`, {
        name,
        comment,
      });

      alert("Feedback submitted successfully!");
      setName("");
      setComment("");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Error submitting feedback.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-lg shadow-lg w-full sm:w-96"
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">We value your feedback</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Your name"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Comment</label>
          <textarea
            className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            placeholder="Share your thoughts"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;
