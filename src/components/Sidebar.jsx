import React from 'react';
import CardVideo from '../components/CardVideo';
import { Link } from 'react-router-dom';
import axios from 'axios';



export default function Sidebar() {

  const [videos, setVideos] = React.useState([]);

  React.useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&key=AIzaSyCkmleMPcUGZQpOC8DcDWmexkwGWyzJsvI');
        setVideos(response.data.items);
        console.log('Fetched videos:', response.data.items);
        console.log('Fetched videos:', response.data);

      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
  <>
 
  <div className="flex p-2 text-gray-900 ">
    <aside className="flex  h-screen w-30 flex-col items-center  bg-white">
      <nav className="flex flex-1 flex-col gap-y-4 pt-10">
        <Link to="/home" className="group relative rounded-xl  p-2 text-black-600 hover:bg-gray-50">
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
      {videos.map((video) => (
          <CardVideo key={video.id} video={video} />
        ))}
      </div>
    </div>


    </>
  );
}