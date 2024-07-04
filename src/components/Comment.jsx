import React, { useState, useEffect } from 'react';
import Replies from '../components/Replies';
import Dropdown from '../components/Dropdown';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';




export default function Comment({ comment }) {
    const [showReplies, setShowReplies] = useState(false);
    const [userName, setUserName] = useState('');
    const [replies, setReplies] = useState([]);
    const [replyBody, setReplyBody] = useState('');





    useEffect(() => {
      const fetchUserName = async () => {
        try {
          const response = await axios.get(`https://6685bb30b3f57b06dd4da302.mockapi.io/user/${comment.userid}`);
          setUserName(response.data.name);
          console.log(response.data.name);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
  
      fetchUserName();
    }, [comment.userid]);

  


    const handleReplySubmit = async (event) => {
      event.preventDefault();
    
      const userid = localStorage.getItem('userId');
    
      const replyData = {
        id: uuidv4(),
        createdAt: new Date().toISOString(),
        commentreply: replyBody,
        userid: userid,
      };
    
      try {
        const existingComment = await axios.get(`https://6685bb30b3f57b06dd4da302.mockapi.io/comment/${comment.id}`);
        const existingReplies = existingComment.data.commentreply || []; 
    
        const updatedReplies = [...existingReplies, replyData];
    
        const response = await axios.put(`https://6685bb30b3f57b06dd4da302.mockapi.io/comment/${comment.id}`, {
          commentreply: updatedReplies,
        });
    
        setReplies(updatedReplies);
        setReplyBody('');
      } catch (error) {
        console.error('Error posting reply:', error);
      }
    };
    
    

    const toggleReplies = () => {
      setShowReplies(!showReplies);
    };
    


    const formatTime = (createdAt) => {
      const date = new Date(createdAt);
      let hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; 
      const formattedTime = `${hours}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
      return formattedTime;
    };


    const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const handleDelete = async (commentId) => {
      try {
        await axios.delete(`https://6685bb30b3f57b06dd4da302.mockapi.io/comment/${commentId}`);
        setComments(prevComments => prevComments.filter(comment => comment.id !== commentId));
      } catch (error) {
        console.error('Error deleting comment:', error);
      }
    };
  


    const handleDeleteReply = async (replyId) => {
      try {
        // Fetch the comment data first
        const response = await axios.get(`https://6685bb30b3f57b06dd4da302.mockapi.io/comment/${comment.id}`);
        const commentData = response.data;
    
        // Filter out the reply with the given replyId
        const updatedReplies = commentData.commentreply.filter(reply => reply.id !== replyId);
    
        // Make the API call to update the comment with the updated replies
        await axios.put(`https://6685bb30b3f57b06dd4da302.mockapi.io/comment/${comment.id}`, {
          commentreply: updatedReplies,
        });
    
        // Update the state with the updated replies
        setReplies(updatedReplies);
        console.log(`Deleted reply with id ${replyId}`);
      } catch (error) {
        console.error('Error deleting reply:', error);
      }
    };
    



    return (
      <div className="antialiased mx-auto max-w-screen-sm">
        <h3 className="mb-4 text-lg font-semibold text-gray-900">Comments</h3>
        <div className="space-y-4">
          
          <div className="flex">
            
            <div className="flex-shrink-0 mr-3">
              <img
                className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                alt=""
              />
            </div>
            
            <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
              
              <strong>{capitalizeFirstLetter(userName)}</strong>{" "}
              <span className="text-xs text-gray-400">{formatTime(comment.createdAt)}</span>                
              <Dropdown onDelete={() => handleDelete(comment.id)} />

              <p className="text-sm">
                {comment.comment}
              </p>
              
              <div className="mt-4 flex items-center">
                
                <div className="flex -space-x-2 mr-2">
                  <img
                    className="rounded-full w-6 h-6 border border-white"
                    src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                    alt=""
                  />
                  <img
                    className="rounded-full w-6 h-6 border border-white"
                    src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                    alt=""
                  />
                </div>

                <div className="text-sm text-gray-500 font-semibold cursor-pointer" onClick={toggleReplies}>
                  {showReplies ? 'Hide Replies' : ' Replies'}
                </div>
              </div>
            </div>
          </div>
          {showReplies && (
            <div className="flex mt-4">
              <div className="flex-shrink-0 mr-3">
                <img
                  className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                  src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                  alt=""
                />
              </div>
              <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                
                <h4 className="my-5 uppercase tracking-wide text-gray-400 font-bold text-xs">
                  Replies
                </h4>
                <div className="space-y-4">

                 {replies && replies.length > 0 && replies.map(reply => (
                                                <div key={reply.id}>
                                                  <Replies reply={reply} onDelete={() => handleDeleteReply(reply.id)} />
                                                </div>
                                              ))}

                    <form onSubmit={handleReplySubmit} className="mt-2">
                      <textarea
                        className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                        placeholder="Reply to this comment"
                        value={replyBody}
                        onChange={(e) => setReplyBody(e.target.value)}
                        required
                      />
                      <button
                        type="submit"
                        className="mt-2 px-4 py-1.5 rounded-md text-white text-sm bg-indigo-500 hover:bg-indigo-600"
                      >
                        Reply
                      </button>
                    </form>
                 
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
