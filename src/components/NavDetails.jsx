import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function NavDetails({ thumbnail, channelTitle, likeCount, videoId }) {
  const initialLikeCount = Number(likeCount);
  const [likeData, setLikeData] = useState({ liked: false, likeCount: initialLikeCount });
  const [userId, setUserId] = useState('');

  useEffect(() => {
    // Fetch user ID from localStorage
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);

      // Fetch current user's likelist from API
      axios.get(`https://6685bb30b3f57b06dd4da302.mockapi.io/user/${storedUserId}`)
        .then(response => {
          const userData = response.data;
          const likelist = userData.likelist || [];

          // Check if the current videoId is in the likelist
          const liked = likelist.includes(videoId);

          // Update local state
          setLikeData({ liked, likeCount: likelist.length });
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  }, [videoId]); // Include videoId in the dependency array to refetch when videoId changes

  const handleLikeClick = () => {
    const { liked } = likeData;
    const newLiked = !liked;

    // Update local state
    setLikeData(prevState => ({
      ...prevState,
      liked: newLiked,
      likeCount: newLiked ? prevState.likeCount + 1 : prevState.likeCount - 1
    }));

    // Fetch current user's likelist from API
    axios.get(`https://6685bb30b3f57b06dd4da302.mockapi.io/user/${userId}`)
      .then(response => {
        const userData = response.data;
        let likelist = userData.likelist || [];

        // Update likelist based on new like/unlike
        if (newLiked) {
          likelist.push(videoId);
        } else {
          likelist = likelist.filter(id => id !== videoId);
        }

        // Make a PUT request to update likelist for user
        axios.put(`https://6685bb30b3f57b06dd4da302.mockapi.io/user/${userId}`, {
          likelist: likelist,
        })
          .then(response => {
            console.log('Likelist updated successfully:', response.data);
          })
          .catch(error => {
            console.error('Error updating likelist:', error);
          });
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  };

  return (
    <>
      <nav className="relative flex w-[25%] lg:w-[99%] lg:items-center lg:justify-between bg-base-100 shadow-dark-mild dark:bg-neutral-700">
        <div className="flex w-full flex-wrap items-center justify-between">
          <div className="rounded-full">
            <a className="rounded-full mx-1 my-1 flex items-center lg:mb-0 lg:mt-0" href="#">
              <img
                className="rounded-full"
                src={thumbnail}
                style={{ height: 50, width: 50 }}
                alt="TE Logo"
                loading="lazy"
              />
            </a>
          </div>
          <div className="flex-grow flex flex-wrap items-center justify-around">
            <h2 className="flex text-sm font-bold flex-col my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2">
              {channelTitle}
              <a
                className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80"
                aria-current="page"
                href="#"
              >
                4.24M subscribers
              </a>
            </h2>
            <button
              type="button"
              className="bg-black w-40 h-10 inline-block rounded-3xl px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white hover:text-white focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500"
            >
              Subscribe
            </button>

            <div className="flex flex-wrap items-center">
              <div
                className="flex bg-base-200 w-40 h-10 mt-1 inline-block rounded-3xl px-2 pb-2 pt-1 text-xs font-medium uppercase leading-normal text-gray-400 hover:text-white focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500"
                onClick={handleLikeClick}
              >
                <div className="flex">
                  <button className="flex flex-row mr-2 text-gray-500">
                    <img
                      className="w-8 ml-1 p-1"
                      src={likeData.liked ? "https://img.icons8.com/?size=100&id=33479&format=png" : "https://img.icons8.com/?size=100&id=24816&format=png"}
                      alt=""
                    />
                    <p className='mt-2'>{likeData.likeCount}</p>
                  </button>
                  <img className="p-1" src="https://img.icons8.com/?size=60&id=120588&format=png" alt="" />
                  <button className="w-7">
                    <img className="mt-1 mr-1 p-1" src="https://img.icons8.com/?size=160&id=htUVosVlBDCt&format=png" alt="" />
                  </button>
                </div>
              </div>
              <button
                type="button"
                className="ml-3 bg-base-200 me-3 inline-block rounded-full px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white hover:text-white focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500"
              >
                <img className="w-6 p-1" src="https://img.icons8.com/?size=100&id=12620&format=png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
