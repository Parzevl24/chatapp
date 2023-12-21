
import React from 'react';

const UpvoteButton = ({ onClick, count }) => {
  return (
    <button
      className="text-gray-300 hover:text-white"
      onClick={onClick}
    >
      Upvote ({count})
    </button>
  );
};

export default UpvoteButton;
