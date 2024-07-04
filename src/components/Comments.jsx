import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comment from '../components/Comment';

export default function Comments({id}) {
  const [commentBody, setCommentBody] = useState('');
  const [comments, setComments] = useState([]);


  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get('https://6685bb30b3f57b06dd4da302.mockapi.io/comment');
      const filteredComments = response.data.filter(comment => comment.videoId === id);
      setComments(filteredComments);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };



  const handleSubmit = async (event) => {
    event.preventDefault();

    const userid = localStorage.getItem('userId');

    const commentData = {
      createdAt: new Date().toISOString(),
      comment: commentBody,
      videoId:id,
      userid: userid,
      commentreply: [],
    };

    try {
      const response = await axios.post('https://6685bb30b3f57b06dd4da302.mockapi.io/comment', commentData);
      console.log('Comment posted:', response.data);
      setComments(prevComments => [...prevComments, response.data]);
      setCommentBody('');
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <div className="w-[97%] bg-white rounded-lg border p-2 m-1 mt-10">
      <h3 className="font-bold">Discussion</h3>
      <form onSubmit={handleSubmit}>
        <div className="w-full px-3 my-2">
          <textarea
            className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
            name="body"
            placeholder="Type Your Comment"
            value={commentBody}
            onChange={(e) => setCommentBody(e.target.value)}
            required
          />
        </div>
        <div className="w-full flex justify-end px-3">
          <input
            type="submit"
            className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500"
            value="Post Comment"
          />
        </div>
      </form>

      <div className="flex flex-col">
      {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}
