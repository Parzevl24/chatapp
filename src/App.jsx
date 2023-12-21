// src/App.js
import React, { useState } from 'react';
import ChatSection from './components/ChatSection';
import './style.css'
const App = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello, this is a sample message!', upvotes: 0 },
    // Add more initial messages as needed
  ]);

  const handleUpvote = (messageId) => {
    setMessages((prevMessages) =>
      prevMessages.map((message) =>
        message.id === messageId
          ? { ...message, upvotes: message.upvotes + 1 }
          : message
      )
    );
  };

  const handleDismiss = (messageId) => {
    setMessages((prevMessages) =>
      prevMessages.filter((message) => message.id !== messageId)
    );
  };

  const handleAddMessage = (text) => {
    const newMessage = {
      id: messages.length + 1,
      text,
      upvotes: 0,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 flex flex-col">
      <div className="flex-grow flex space-x-4">
        <div className="flex-grow">
          <ChatSection
            messages={messages}
            onUpvote={handleUpvote}
            onDismiss={handleDismiss}
            onAddMessage={handleAddMessage}
          />
        </div>
        {/* Additional sections can be added here */}
      </div>
    </div>
  );
};

export default App;
