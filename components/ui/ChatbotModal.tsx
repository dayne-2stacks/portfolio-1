import React, { useState } from 'react'


const ChatbotModal = ({handleShowModal}: {handleShowModal: () => void}) => {
    const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
        { text: "Hello, how can I help you today?", isUser: false },
      ]);
      // State for the user’s current input
  const [userInput, setUserInput] = useState("");

  // Handle sending a message
  const handleSendMessage = () => {
    if (userInput.trim()) {
      // Add the user’s message to the chat
      setMessages((prev) => [...prev, { text: userInput, isUser: true }]);
      setUserInput("");

      // Simulate a chatbot response
      setTimeout(() => {
        const chatbotReply = "This is a sample chatbot response!";
        setMessages((prev) => [...prev, { text: chatbotReply, isUser: false }]);
      }, 800);
    }
  };

  return (
    <div
      className="w-full h-full fixed top-0 left-0 flex items-center justify-center backdrop-filter backdrop-brightness-75 backdrop-blur-md z-50"
      onClick={handleShowModal}
    >
      <div
        className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-lg h-4/5"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
         
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
        </div>
      </div>
    </div>
  )
}

export default ChatbotModal