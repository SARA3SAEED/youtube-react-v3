import React from 'react';
import Dropdown from '../components/Dropdown';
import axios from 'axios';

export default function Replies({ reply, onDelete }) {

  const handleDelete = async () => {
    try {
      await axios.delete(`https://6685bb30b3f57b06dd4da302.mockapi.io/comment/${reply.commentId}/${reply.commentreply.id}`);
      onDelete(reply.id); // Call the parent onDelete function with the reply id to update the state
    } catch (error) {
      console.error('Error deleting reply:', error);
    }
  };

  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-3">
        <img
          className="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8"
          src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
          alt=""
        />
      </div>
      <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
        <strong>Sarah</strong>{" "}
        <span className="text-xs text-gray-400">3:34 PM</span>
        <Dropdown onDelete={handleDelete} />

        <p className="text-xs sm:text-sm">
          {reply.commentreply}
        </p>
      </div>
    </div>
  );
}
