
import React from 'react';
import UpvoteButton from './UpvoteButton';

const MessageBubble = ({ message, onUpvote }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-4">
      <p className="text-white">{message.text} <UpvoteButton onClick={onUpvote} count={message.upvotes} /></p> 
      {/* <UpvoteButton onClick={onUpvote} count={message.upvotes} /> */}
    </div>
  );
};

export const MessageBubble2 = ({ message, onUpvote }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-4">
      <p className="text-white">{message.text}</p>
      {/* <UpvoteButton onClick={onUpvote} count={message.upvotes} /> */}
    </div>
  );
};

export default MessageBubble;
