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
    <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Submit Your Feedback</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          className="border p-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Comment</label>
        <textarea
          className="border p-2 w-full"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Submit
      </button>
    </form>
  );
}

export default FeedbackForm;
