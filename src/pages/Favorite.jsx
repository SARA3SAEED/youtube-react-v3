import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nav from '../components/Nav';
import CardLike from '../components/CardLike';

export default function Favorite() {
  const [videos, setVideos] = useState([]);
  const [likedVideos, setLikedVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&key=AIzaSyCkmleMPcUGZQpOC8DcDWmexkwGWyzJsvI');
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    const fetchLikedVideos = async () => {
      try {
        const response = await axios.get(
          'https://6685bb30b3f57b06dd4da302.mockapi.io/user/1' 
        );
      
        const filteredLikedVideos = response.data.likelist.filter(videoId => videoId !== null);
        setLikedVideos(filteredLikedVideos);
      } catch (error) {
        console.error('Error fetching liked videos:', error);
      }
    };

    fetchVideos();
    fetchLikedVideos();
  }, []);


  const filteredVideos = likedVideos.length > 0 ? videos.filter(video => likedVideos.includes(video.id)) : [];



  return (
    <>
    <Nav/>
    <div className="flex p-2 text-gray-900 ">
    <aside className="flex  h-screen w-30 flex-col items-center  bg-white">
      <nav className="flex flex-1 flex-col gap-y-4 pt-10">
        <Link to="/" className="group relative rounded-xl  p-2 text-black-600 hover:bg-gray-50">
        <img className='w-7 ml-3' src="https://cdn-icons-png.flaticon.com/128/9440/9440315.png" />
        <small className='ml-3 font-thin'>Home</small>
        </Link>

        <a
          href="#"
          className="group relative rounded-xl  p-2 text-black-600 hover:bg-gray-50"
        >
          <img className='w-7 ml-3' src="https://cdn-icons-png.flaticon.com/128/9440/9440315.png" />
          <small className='ml-3 font-thin'>Shorts</small>
        </a>


        <Link
          to="#"
          className="group relative rounded-xl  p-2 text-black-600 hover:bg-gray-50"
        >
          <img className='w-7 ml-3 ' 
          src="https://cdn-icons-png.flaticon.com/128/15070/15070063.png" />
          <small className='text-xs font-thin'>Subscriptions</small>
        </Link>


        <a
          href="#"
          className="group relative rounded-xl  p-2 text-black-600 hover:bg-gray-50"
        >
          <img className='w-8 ml-3' 
          src="https://cdn-icons-png.flaticon.com/128/15070/15070167.png" />
          <small className='ml-4 font-thin'>You</small>
        </a>
      </nav>
    </aside>


      <div className='flex flex-wrap w-[100%] h-[150px]'>
      {filteredVideos.map((video) => (
          <CardLike key={video.id} video={video} />
        ))}

      </div>
    </div>

</>
  )
}
