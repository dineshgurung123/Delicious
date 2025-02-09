import React, { useState } from "react";
import axios from "axios";
import { AiOutlineSend, AiOutlineMessage } from "react-icons/ai";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post("http://localhost:3001/chat", {
        message: input,
      });

      const botReply = { role: "assistant", content: response.data.reply };
      setMessages((prevMessages) => [...prevMessages, botReply]);
    } catch (error) {
      console.error("Error communicating with chatbot:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: "Sorry, I can't respond right now." },
      ]);
    }

    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5">
      {/* Floating Icon */}
      {!isOpen && (
        <button
          className="p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600"
          onClick={() => setIsOpen(true)}
        >
          <AiOutlineMessage size={24} />
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="w-80 bg-white shadow-lg rounded-lg flex flex-col">
          {/* Title */}
          <div className="p-3 bg-blue-500 text-white text-center rounded-t-lg flex justify-between items-center">
            <span>Food Recommendation System AI</span>
            <button
              className="text-white hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 h-80 overflow-y-auto p-4 border-b border-gray-200">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  msg.role === "user" ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block p-2 rounded-lg ${
                    msg.role === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {msg.content}
                </span>
              </div>
            ))}
          </div>

          {/* Input Section */}
          <div className="flex items-center p-2">
            <input
              type="text"
              className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
              onClick={handleSend}
            >
              <AiOutlineSend size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
