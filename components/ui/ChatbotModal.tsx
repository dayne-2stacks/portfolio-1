import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const ChatbotModal = ({ handleShowModal }: { handleShowModal: () => void }) => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    [
      {
        text: "Hello, I'm DJ, I know a lot of information about my creator. Feel free to chat with me about his skills, qualifications and background?",
        isUser: false,
      },
    ]
  );
  const [userInput, setUserInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to the bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Function to handle API calls
  const fetchChatbotResponse = async (userMessage: string) => {
    try {
      const response = await axios.post(
        "https://chatbot-daynej-f0946d1c544b.herokuapp.com/chat/message",
        { message: userMessage },
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 5000, // Set a timeout
        }
      );
      const contentArray = response.data.response.content;
      const reply = contentArray.find((item: any) => item.type === "text")?.text
        ?.value;
      return reply || "Sorry, I didn't understand that.";
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      if (error.code === "ERR_NETWORK") {
        return "Unable to reach the server. Please try again later.";
      }
      return "There was an error processing your request.";
    }
  };

  // Handle sending a message
  const handleSendMessage = async () => {
    if (userInput.trim()) {
      // Add the user's message to the chat
      setMessages((prev) => [...prev, { text: userInput, isUser: true }]);
      const currentInput = userInput;
      setUserInput("");

      // Fetch the chatbot's response
      const chatbotReply = await fetchChatbotResponse(currentInput);
      setMessages((prev) => [...prev, { text: chatbotReply, isUser: false }]);
    }
  };

  return (
    <div
      className="w-full h-full fixed top-0 left-0 flex items-center justify-center backdrop-filter backdrop-brightness-75 backdrop-blur-md z-50"
      onClick={handleShowModal}
    >
      <div
        className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-lg h-4/5 flex flex-col justify-end"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={handleShowModal}
        >
          ✖
        </button>
        <div className="flex-grow overflow-y-auto mb-4 space-y-2 pr-2">
          {messages.map((message, idx) => (
            <div
              key={idx}
              className={`max-w-xs break-words px-4 py-2 rounded-md ${
                message.isUser
                  ? "bg-blue-500 text-white self-end ml-auto"
                  : "bg-gray-700 text-white self-start"
              }`}
            >
              {message.text}
            </div>
          ))}
          <div ref={messagesEndRef}></div>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            className="flex-grow px-4 py-2 rounded-md border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleSendMessage();
            }}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotModal;
