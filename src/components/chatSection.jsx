// src/components/ChatSection.js
import React, { useState } from 'react';
import MessageBubble from './MessageBubble';

const ChatSection = ({ messages, onUpvote, onDismiss, onAddMessage }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleAddMessage = () => {
    if (newMessage.trim() !== '') {
      onAddMessage(newMessage);
      setNewMessage('');
    }
  };

  const filteredMessages = (votes) =>
    messages.filter((message) => message.upvotes > votes);

  return (
    <div>
      <div>
        <h2 className="text-xl font-semibold mb-2">All Messages</h2>
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            onUpvote={() => onUpvote(message.id)}
          />
        ))}
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Chat Options</h2>
          {/* Add your chat options here */}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Messages with Vote > 3</h2>
        {filteredMessages(3).map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            onUpvote={() => onUpvote(message.id)}
          />
        ))}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Messages with Vote > 10</h2>
        {filteredMessages(10).map((message) => (
          <div key={message.id} className="relative">
            <MessageBubble
              message={message}
              onUpvote={() => onUpvote(message.id)}
            />
            <button
              onClick={() => onDismiss(message.id)}
              className="absolute top-0 right-0 p-2 text-red-500 hover:text-white"
            >
              Dismiss
            </button>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Add a Message</h2>
        <div className="flex">
          <input
            type="text"
            value={newMessage}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="flex-grow mr-2 p-2 rounded"
          />
          <button
            onClick={handleAddMessage}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Add Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
